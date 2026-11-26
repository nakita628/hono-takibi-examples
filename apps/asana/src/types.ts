type UserCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type AccessRequestTargetIdCompact = { gid?: string | undefined; resource_type?: string | undefined }
type AccessRequestResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  message?: string | undefined
  approval_status?: 'pending' | 'approved' | 'denied' | undefined
  requester?: UserCompact | undefined
  target?: AccessRequestTargetIdCompact | undefined
}
type Error = {
  message?: string | undefined
  help?: string | undefined
  phrase?: string | undefined
}
type ErrorResponse = { errors?: Error[] | undefined }
type AccessRequestCreateRequestInput = { target: string; message?: string | null }
type EmptyResponse = { [key: string]: unknown }
type AgentCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: 'asana_teammate' | undefined
  name?: string | undefined
}
type NextPage = {
  offset?: string | undefined
  path?: string | undefined
  uri?: string | undefined
} | null
type WorkspaceCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type AgentResponse = AgentCompact & {
  description?: (string | null) | undefined
  behavior_guidance?: (string | null) | undefined
  workspace: WorkspaceCompact & { [key: string]: unknown }
  photo?:
    | ({
        image_21x21?: string | undefined
        image_27x27?: string | undefined
        image_36x36?: string | undefined
        image_60x60?: string | undefined
        image_128x128?: string | undefined
        image_1024x1024?: string | undefined
      } | null)
    | undefined
}
type AiStudioRunCompact = { gid?: string | undefined; resource_type?: string | undefined }
type AiStudioRunResponse = AiStudioRunCompact & {
  rule?:
    | ({
        gid?: string | undefined
        resource_type?: string | undefined
        name?: string | undefined
      } | null)
    | undefined
  automation?:
    | ({
        gid?: string | undefined
        resource_type?: string | undefined
        name?: string | undefined
      } | null)
    | undefined
  rule_owner?: (UserCompact & { email?: string | undefined }) | undefined
  triggered_by?: (UserCompact & { email?: string | undefined }) | undefined
  triggering_container?:
    | ({ gid?: string | undefined; resource_type?: 'project' | 'portfolio' | undefined } | null)
    | undefined
  division?:
    | ({
        gid?: string | undefined
        resource_type?: string | undefined
        name?: string | undefined
      } | null)
    | undefined
  run_started_at?: (string | null) | undefined
  run_completed_at?: (string | null) | undefined
  status?: 'success' | 'failed' | 'cancelled' | undefined
  model?: string | undefined
  credits_used?: number | undefined
  credit_source?: 'paid' | 'free' | undefined
}
type AiStudioSeatCompact = { gid?: string | undefined; resource_type?: string | undefined }
type AiStudioSeatResponse = AiStudioSeatCompact & {
  user?: (UserCompact & { email?: string | undefined }) | undefined
  license?: 'ai_studio_plus' | 'ai_studio_pro' | 'ai_studio_max' | undefined
  state?: 'active' | 'revoked' | 'expired' | undefined
  assigned_at?: string | undefined
  revoked_at?: (string | null) | undefined
  assigned_by?: (UserCompact & ({ [key: string]: unknown } | null)) | undefined
}
type AllocationBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  effort?:
    | ({ type?: 'hours' | 'percent' | undefined; value?: number | undefined } | null)
    | undefined
}
type ProjectCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: 'default_project' | 'custom' | undefined
}
type AllocationResponse = AllocationBase & {
  assignee?: (UserCompact & { name?: string | undefined }) | undefined
  created_by?: UserCompact | undefined
  parent?: ProjectCompact | undefined
  resource_subtype?: string | undefined
}
type AllocationBaseInput = {
  gid?: string
  resource_type?: string
  start_date?: string
  end_date?: string
  effort?: { type?: 'hours' | 'percent'; value?: number } | null
}
type AllocationRequestInput = AllocationBaseInput & { assignee?: string; parent?: string }
type AttachmentCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: string | undefined
}
type TaskCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: 'default_task' | 'milestone' | 'approval' | 'custom' | undefined
  created_by?: { gid?: string | undefined; resource_type?: string | undefined } | undefined
}
type AttachmentResponse = AttachmentCompact & {
  created_at?: string | undefined
  download_url?: (string | null) | undefined
  permanent_url?: (string | null) | undefined
  host?: string | undefined
  parent?: (TaskCompact & ({ resource_subtype?: (string | null) | undefined } | null)) | undefined
  size?: number | undefined
  view_url?: (string | null) | undefined
  connected_to_app?: boolean | undefined
}
type AttachmentRequestInput = {
  resource_subtype?: 'asana' | 'external'
  file?: File
  parent: string
  url?: string
  name?: string
  connect_to_app?: boolean
}
type AuditLogEventActor = {
  actor_type?:
    | 'user'
    | 'asana'
    | 'asana_support'
    | 'anonymous'
    | 'external_administrator'
    | 'data_retention_policy'
    | undefined
  gid?: string | undefined
  name?: string | undefined
  email?: string | undefined
}
type AuditLogEventResource = {
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  gid?: string | undefined
  name?: (string | null) | undefined
  email?: string | undefined
}
type AuditLogEventDetails = {
  old_value?: (string | null) | undefined
  new_value?: (string | null) | undefined
  group?: { [key: string]: unknown } | undefined
  saml_response?: (string | null) | undefined
}
type AuditLogEventContext = {
  context_type?:
    | 'web'
    | 'desktop'
    | 'mobile'
    | 'asana_support'
    | 'asana'
    | 'email'
    | 'api'
    | undefined
  api_authentication_method?:
    | 'cookie'
    | 'oauth'
    | 'personal_access_token'
    | 'service_account'
    | undefined
  client_ip_address?: string | undefined
  user_agent?: string | undefined
  oauth_app_name?: string | undefined
  rule_name?: string | undefined
  on_behalf_of_user_id?: number | undefined
}
type AuditLogEvent = {
  gid?: string | undefined
  created_at?: string | undefined
  event_type?: string | undefined
  event_category?: string | undefined
  actor?: AuditLogEventActor | undefined
  resource?: AuditLogEventResource | undefined
  details?: AuditLogEventDetails | undefined
  context?: AuditLogEventContext | undefined
}
type BatchRequestActionInput = {
  relative_path: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head'
  data?: { [key: string]: unknown }
  options?: { limit?: number; offset?: number; fields?: string[] }
}
type BatchRequestInput = { actions?: BatchRequestActionInput[] }
type BatchResponse = {
  status_code?: number | undefined
  headers?: { [key: string]: unknown } | undefined
  body?: { [key: string]: unknown } | undefined
}
type BudgetCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  budget_type?: 'cost' | 'time' | undefined
}
type BudgetEstimateRequest = {
  billable_status_filter?: 'billable' | 'non_billable' | 'any' | undefined
  source?: 'none' | 'tasks' | 'capacity_plans' | undefined
  enabled?: boolean | undefined
}
type BudgetEstimateResponse = BudgetEstimateRequest & {
  units?: string | undefined
  value?: number | undefined
}
type BudgetActualRequest = {
  billable_status_filter?: 'billable' | 'non_billable' | 'any' | undefined
}
type BudgetActualResponse = BudgetActualRequest & {
  value?: number | undefined
  units?: string | undefined
}
type BudgetTotalRequest = { enabled?: boolean | undefined; value?: number | undefined }
type BudgetTotalResponse = BudgetTotalRequest & { units?: string | undefined }
type BudgetResponse = BudgetCompact & {
  estimate?: BudgetEstimateResponse | undefined
  actual?: BudgetActualResponse | undefined
  total?: BudgetTotalResponse | undefined
  parent?: (ProjectCompact & { [key: string]: unknown }) | undefined
}
type BudgetCompactInput = { gid?: string; resource_type?: string; budget_type?: 'cost' | 'time' }
type BudgetEstimateRequestInput = {
  billable_status_filter?: 'billable' | 'non_billable' | 'any'
  source?: 'none' | 'tasks' | 'capacity_plans'
  enabled?: boolean
}
type BudgetActualRequestInput = { billable_status_filter?: 'billable' | 'non_billable' | 'any' }
type BudgetTotalRequestInput = { enabled?: boolean; value?: number }
type BudgetRequestInput = BudgetCompactInput & {
  estimate?: BudgetEstimateRequestInput
  actual?: BudgetActualRequestInput
  total?: BudgetTotalRequestInput
  parent?: string
}
type CustomFieldSettingCompact = { gid?: string | undefined; resource_type?: string | undefined }
type EnumOption = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  enabled?: boolean | undefined
  color?: string | undefined
}
type CustomFieldCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  type?: 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | 'reference' | undefined
  enum_options?: EnumOption[] | undefined
  enabled?: boolean | undefined
  representation_type?:
    | 'text'
    | 'enum'
    | 'multi_enum'
    | 'number'
    | 'date'
    | 'people'
    | 'formula'
    | 'custom_id'
    | 'reference'
    | undefined
  id_prefix?: (string | null) | undefined
  input_restrictions?: ('task' | 'project' | 'portfolio' | 'goal' | 'team' | 'record')[] | undefined
  is_formula_field?: boolean | undefined
  is_lookup_field?: boolean | undefined
  date_value?: ({ date?: string | undefined; date_time?: string | undefined } | null) | undefined
  enum_value?: (EnumOption & ({ [key: string]: unknown } | null)) | undefined
  multi_enum_values?: EnumOption[] | undefined
  number_value?: (number | null) | undefined
  text_value?: (string | null) | undefined
  display_value?: (string | null) | undefined
}
type CustomFieldBase = CustomFieldCompact & {
  description?: string | undefined
  enum_options?: EnumOption[] | undefined
  precision?: number | undefined
  format?: 'currency' | 'identifier' | 'percentage' | 'custom' | 'duration' | 'none' | undefined
  currency_code?: (string | null) | undefined
  custom_label?: (string | null) | undefined
  custom_label_position?: ('prefix' | 'suffix' | null) | undefined
  is_global_to_workspace?: boolean | undefined
  has_notifications_enabled?: boolean | undefined
  asana_created_field?:
    | (
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
        | null
      )
    | undefined
}
type AsanaNamedResource = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type CustomFieldResponse = CustomFieldBase & {
  representation_type?:
    | 'text'
    | 'enum'
    | 'multi_enum'
    | 'number'
    | 'date'
    | 'people'
    | 'formula'
    | 'custom_id'
    | 'reference'
    | undefined
  id_prefix?: (string | null) | undefined
  input_restrictions?: ('task' | 'project' | 'portfolio' | 'goal' | 'team' | 'record')[] | undefined
  is_formula_field?: boolean | undefined
  is_lookup_field?: boolean | undefined
  is_value_read_only?: boolean | undefined
  created_by?: (UserCompact | null) | undefined
  people_value?: UserCompact[] | undefined
  reference_value?: AsanaNamedResource[] | undefined
  html_text_value?: (string | null) | undefined
  privacy_setting?: 'public_with_guests' | 'public' | 'private' | undefined
  default_access_level?: 'admin' | 'editor' | 'user' | undefined
  resource_subtype?:
    | 'text'
    | 'enum'
    | 'multi_enum'
    | 'number'
    | 'date'
    | 'people'
    | 'reference'
    | undefined
}
type CustomFieldSettingResponse = CustomFieldSettingCompact & {
  project?: (ProjectCompact & { [key: string]: unknown }) | undefined
  is_important?: boolean | undefined
  parent?: (ProjectCompact & { [key: string]: unknown }) | undefined
  custom_field?: (CustomFieldResponse & { [key: string]: unknown }) | undefined
}
type EnumOptionInput = {
  gid?: string
  resource_type?: string
  name?: string
  enabled?: boolean
  color?: string
}
type CustomFieldCompactInput = {
  gid?: string
  resource_type?: string
  name?: string
  type?: 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | 'reference'
  enum_options?: EnumOptionInput[]
  enabled?: boolean
  representation_type?:
    | 'text'
    | 'enum'
    | 'multi_enum'
    | 'number'
    | 'date'
    | 'people'
    | 'formula'
    | 'custom_id'
    | 'reference'
  id_prefix?: string | null
  input_restrictions?: ('task' | 'project' | 'portfolio' | 'goal' | 'team' | 'record')[]
  is_formula_field?: boolean
  is_lookup_field?: boolean
  date_value?: { date?: string; date_time?: string } | null
  enum_value?: EnumOptionInput & ({ [key: string]: unknown } | null)
  multi_enum_values?: EnumOptionInput[]
  number_value?: number | null
  text_value?: string | null
  display_value?: string | null
}
type CustomFieldBaseInput = CustomFieldCompactInput & {
  description?: string
  enum_options?: EnumOptionInput[]
  precision?: number
  format?: 'currency' | 'identifier' | 'percentage' | 'custom' | 'duration' | 'none'
  currency_code?: string | null
  custom_label?: string | null
  custom_label_position?: 'prefix' | 'suffix' | null
  is_global_to_workspace?: boolean
  has_notifications_enabled?: boolean
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
    | null
}
type CustomFieldRequestInput = CustomFieldBaseInput & {
  workspace: string
  owned_by_app?: boolean
  people_value?: string[]
  reference_value?: string[]
}
type CustomFieldCreateRequestInput = CustomFieldRequestInput & {
  resource_subtype: 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | 'reference'
}
type EnumOptionRequestInput = EnumOptionInput & { insert_before?: string; insert_after?: string }
type EnumOptionInsertRequestInput = {
  enum_option: string
  before_enum_option?: string
  after_enum_option?: string
}
type CustomTypeCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  asana_created_type_identifier?:
    | (
        | 'COMMAND_TICKET'
        | 'COMMAND_RELEASE'
        | 'COMMAND_TEAMSPACE'
        | 'SERVICE_TICKET'
        | 'SERVICE_CONVERSATION'
        | 'SERVICE_QUEUE'
        | null
      )
    | undefined
}
type CustomTypeStatusOptionCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type CustomTypeStatusOptionResponse = CustomTypeStatusOptionCompact & {
  completion_state?: (string | null) | undefined
  enabled?: (boolean | null) | undefined
  color?: (string | null) | undefined
}
type CustomTypeResponse = CustomTypeCompact & {
  status_options?: (CustomTypeStatusOptionResponse[] | null) | undefined
}
type EventResponse = {
  user?: UserCompact | undefined
  resource?: AsanaNamedResource | undefined
  type?: string | undefined
  action?: string | undefined
  parent?: AsanaNamedResource | undefined
  created_at?: string | undefined
  change?:
    | {
        field?: string | undefined
        action?: string | undefined
        new_value?: any | undefined
        added_value?: any | undefined
        removed_value?: any | undefined
      }
    | undefined
}
type GraphExportRequestInput = { parent?: string }
type GraphExportCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  download_url?: (string | null) | undefined
  completed_at?: string | undefined
}
type GraphExportResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  status?: 'not_started' | 'in_progress' | 'succeeded' | 'failed' | undefined
  new_graph_export?: GraphExportCompact | undefined
}
type ResourceExportFiltersInput = {
  'assigned_by.any'?: string[]
  'assignee.any'?: string[]
  'commented_on_by.any'?: string[]
  'created_at.after'?: string
  'created_at.before'?: string
  'created_by.any'?: string[]
  'followers.any'?: string[]
  'liked_by.any'?: string[]
  'modified_at.after'?: string
  'modified_at.before'?: string
}
type ResourceExportRequestParameterInput = {
  resource_type?: string
  filters?: ResourceExportFiltersInput
  fields?: string[]
}
type ResourceExportRequestInput = {
  workspace?: string
  export_request_parameters?: ResourceExportRequestParameterInput[]
}
type ResourceExportCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  download_url?: (string | null) | undefined
  completed_at?: string | undefined
}
type ResourceExportResponse = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  status?: 'not_started' | 'in_progress' | 'succeeded' | 'failed' | undefined
  new_resource_export?: ResourceExportCompact | undefined
}
type GoalRelationshipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: 'subgoal' | 'supporting_work' | undefined
  supporting_resource?: (ProjectCompact & { [key: string]: unknown }) | undefined
  contribution_weight?: number | undefined
}
type GoalCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  owner?: (UserCompact & ({ [key: string]: unknown } | null)) | undefined
}
type GoalRelationshipBase = GoalRelationshipCompact & {
  supported_goal?: (GoalCompact & { [key: string]: unknown }) | undefined
}
type GoalRelationshipResponse = GoalRelationshipBase & { [key: string]: unknown }
type ProjectCompactInput = {
  gid?: string
  resource_type?: string
  name?: string
  resource_subtype?: 'default_project' | 'custom'
}
type GoalRelationshipCompactInput = {
  gid?: string
  resource_type?: string
  resource_subtype?: 'subgoal' | 'supporting_work'
  supporting_resource?: ProjectCompactInput & { [key: string]: unknown }
  contribution_weight?: number
}
type UserCompactInput = { gid?: string; resource_type?: string; name?: string }
type GoalCompactInput = {
  gid?: string
  resource_type?: string
  name?: string
  owner?: UserCompactInput & ({ [key: string]: unknown } | null)
}
type GoalRelationshipBaseInput = GoalRelationshipCompactInput & {
  supported_goal?: GoalCompactInput & { [key: string]: unknown }
}
type GoalRelationshipRequestInput = GoalRelationshipBaseInput & { [key: string]: unknown }
type GoalAddSupportingRelationshipRequestInput = {
  supporting_resource: string
  insert_before?: string
  insert_after?: string
  contribution_weight?: number
}
type GoalRemoveSupportingRelationshipRequestInput = { supporting_resource: string }
type GoalBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  html_notes?: string | undefined
  notes?: string | undefined
  due_on?: (string | null) | undefined
  start_on?: (string | null) | undefined
  is_workspace_level?: boolean | undefined
  liked?: boolean | undefined
}
type Like = { gid?: string | undefined; user?: UserCompact | undefined }
type TeamCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type TimePeriodCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  end_on?: string | undefined
  start_on?: string | undefined
  period?: 'FY' | 'H1' | 'H2' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | undefined
  display_name?: string | undefined
}
type GoalMetricBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: 'number' | undefined
  precision?: number | undefined
  unit?: 'none' | 'currency' | 'percentage' | undefined
  currency_code?: (string | null) | undefined
  initial_number_value?: number | undefined
  target_number_value?: number | undefined
  current_number_value?: number | undefined
  current_display_value?: string | undefined
  progress_source?:
    | 'manual'
    | 'subgoal_progress'
    | 'project_task_completion'
    | 'project_milestone_completion'
    | 'task_completion'
    | 'external'
    | undefined
  is_custom_weight?: boolean | undefined
}
type StatusUpdateCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  title?: string | undefined
  resource_subtype?:
    | 'project_status_update'
    | 'portfolio_status_update'
    | 'goal_status_update'
    | undefined
}
type GoalResponse = GoalBase & {
  likes?: Like[] | undefined
  num_likes?: number | undefined
  team?: (TeamCompact & ({ [key: string]: unknown } | null)) | undefined
  workspace?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
  followers?: UserCompact[] | undefined
  time_period?: (TimePeriodCompact & ({ [key: string]: unknown } | null)) | undefined
  metric?: (GoalMetricBase & ({ can_manage?: boolean | undefined } | null)) | undefined
  owner?: (UserCompact & ({ [key: string]: unknown } | null)) | undefined
  current_status_update?: (StatusUpdateCompact | null) | undefined
  status?: (string | null) | undefined
  privacy_setting?: 'public_to_workspace' | 'members_only' | undefined
  default_access_level?: 'admin' | 'editor' | 'commenter' | 'viewer' | undefined
  custom_fields?: CustomFieldCompact[] | undefined
  custom_field_settings?: CustomFieldSettingResponse[] | undefined
}
type GoalBaseInput = {
  gid?: string
  resource_type?: string
  name?: string
  html_notes?: string
  notes?: string
  due_on?: string | null
  start_on?: string | null
  is_workspace_level?: boolean
  liked?: boolean
}
type GoalRequestBaseInput = GoalBaseInput & {
  team?: string | null
  workspace?: string
  time_period?: string | null
  owner?: string | null
}
type GoalUpdateRequestInput = GoalRequestBaseInput & {
  status?: string | null
  custom_fields?: { [key: string]: string }
  html_custom_fields?: { [key: string]: string }
}
type GoalRequestInput = GoalRequestBaseInput & { followers?: string[] }
type GoalMetricBaseInput = {
  gid?: string
  resource_type?: string
  resource_subtype?: 'number'
  precision?: number
  unit?: 'none' | 'currency' | 'percentage'
  currency_code?: string | null
  initial_number_value?: number
  target_number_value?: number
  current_number_value?: number
  current_display_value?: string
  progress_source?:
    | 'manual'
    | 'subgoal_progress'
    | 'project_task_completion'
    | 'project_milestone_completion'
    | 'task_completion'
    | 'external'
  is_custom_weight?: boolean
}
type GoalMetricCurrentValueRequestInput = {
  gid?: string
  resource_type?: string
  current_number_value?: number
}
type TaskAddFollowersRequestInput = { followers: string[] }
type AddCustomFieldSettingRequestInput = {
  custom_field: string | CustomFieldCreateRequestInput
  is_important?: boolean
  insert_before?: string
  insert_after?: string
}
type RemoveCustomFieldSettingRequestInput = { custom_field: string }
type PortfolioCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  resource_subtype?: 'default_portfolio' | 'custom' | undefined
}
type ProjectTemplateCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type JobCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  status?: 'not_started' | 'in_progress' | 'succeeded' | 'failed' | undefined
  dates_rollup_progress?:
    | { updated_tasks?: number | undefined; total_tasks?: number | undefined }
    | undefined
  new_portfolio?: PortfolioCompact | undefined
  new_project?: ProjectCompact | undefined
  new_task?: (TaskCompact & ({ [key: string]: unknown } | null)) | undefined
  new_project_template?: ProjectTemplateCompact | undefined
  new_graph_export?: GraphExportCompact | undefined
  new_resource_export?: ResourceExportCompact | undefined
}
type MemberCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type GoalMembershipBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  member?: MemberCompact | undefined
  parent?: (GoalCompact & { [key: string]: unknown }) | undefined
  role?: 'commenter' | 'editor' | undefined
  access_level?: 'viewer' | 'commenter' | 'editor' | 'admin' | undefined
  goal?: (GoalCompact & { [key: string]: unknown }) | undefined
}
type GoalMembershipCompact = GoalMembershipBase & {
  is_commenter?: boolean | undefined
  is_editor?: boolean | undefined
}
type ProjectMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  parent?: ProjectCompact | undefined
  member?: MemberCompact | undefined
  access_level?: 'admin' | 'editor' | 'commenter' | 'viewer' | undefined
}
type ProjectMembershipCompactResponse = ProjectMembershipCompact & {
  resource_type?: string | undefined
  resource_subtype?: string | undefined
}
type PortfolioMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  parent?: PortfolioCompact | undefined
  member?: MemberCompact | undefined
  access_level?: 'admin' | 'editor' | 'viewer' | undefined
}
type PortfolioMembershipCompactResponse = PortfolioMembershipCompact & {
  resource_type?: string | undefined
  resource_subtype?: string | undefined
}
type CustomFieldMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  parent?: CustomFieldCompact | undefined
  member?: MemberCompact | undefined
  access_level?: 'admin' | 'editor' | 'user' | undefined
}
type CustomTypeMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  parent?: CustomTypeCompact | undefined
  member?: MemberCompact | undefined
  access_level?: 'admin' | 'editor' | 'user' | 'viewer' | undefined
}
type TableCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type TableMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  parent?: TableCompact | undefined
  member?: MemberCompact | undefined
  access_level?: 'admin' | 'editor' | 'commenter' | 'viewer' | undefined
}
type RecordItemCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type RecordMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  parent?: RecordItemCompact | undefined
  member?: MemberCompact | undefined
  access_level?: 'admin' | 'editor' | 'commenter' | 'viewer' | undefined
}
type MembershipCompact =
  | GoalMembershipCompact
  | ProjectMembershipCompactResponse
  | PortfolioMembershipCompactResponse
  | CustomFieldMembershipCompact
  | CustomTypeMembershipCompact
  | TableMembershipCompact
  | RecordMembershipCompact
type MembershipRequestInput = { access_level?: string }
type CreateMembershipRequestInput = MembershipRequestInput & {
  member?: string
  parent?: string
  role?: string
}
type GoalMembershipResponse = GoalMembershipBase & {
  user?: (UserCompact & { [key: string]: unknown }) | undefined
  workspace?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
}
type MembershipResponse =
  | GoalMembershipResponse
  | ProjectMembershipCompactResponse
  | PortfolioMembershipCompact
  | CustomFieldMembershipCompact
  | CustomTypeMembershipCompact
  | TableMembershipCompact
  | RecordMembershipCompact
type NotificationCompact = { gid: string; resource_type: string }
type NotificationBase = NotificationCompact
type StoryCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  comment_gid?: (string | null) | undefined
  anchor_gid?: (string | null) | undefined
  created_at?: string | undefined
  created_by?: UserCompact | undefined
  resource_subtype?: string | undefined
  text?: string | undefined
}
type NotificationResponse = NotificationBase & {
  priority_classification: 'unclassified'
  story_resource_subtype: string
  work_objects: AsanaNamedResource[]
  story: StoryCompact | null
  created_by: AsanaNamedResource & ({ [key: string]: unknown } | null)
  created_at: string
  is_read: boolean
}
type MarkNotificationsRequestInput = { workspace: string; notification_gids: string[] }
type MarkNotificationsResponse = { failed_gids?: string[] | undefined }
type OooEntryBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
}
type OooEntryResponse = OooEntryBase & {
  user?: UserCompact | undefined
  created_by?: UserCompact | undefined
}
type OooEntryBaseInput = {
  gid?: string
  resource_type?: string
  start_date?: string
  end_date?: string
}
type OooEntryCreateRequestInput = OooEntryBaseInput & { user?: string; workspace?: string }
type OrganizationExportRequestInput = { organization?: string }
type OrganizationExportCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  download_url?: (string | null) | undefined
  state?: 'pending' | 'started' | 'finished' | 'error' | undefined
  organization?: WorkspaceCompact | undefined
}
type DeprecatedPortfolioMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  portfolio?: PortfolioCompact | undefined
  user?: UserCompact | undefined
  access_level?: 'admin' | 'editor' | 'viewer' | undefined
}
type PortfolioCompactInput = {
  gid?: string
  resource_type?: string
  name?: string
  resource_subtype?: 'default_portfolio' | 'custom'
}
type PortfolioBaseInput = PortfolioCompactInput & {
  archived?: boolean
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
  start_on?: string | null
  due_on?: string | null
  default_access_level?: 'admin' | 'editor' | 'viewer'
  public?: boolean
}
type PortfolioRequestInput = PortfolioBaseInput & {
  workspace?: string
  custom_type?: string | null
}
type PortfolioBase = PortfolioCompact & {
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
  start_on?: (string | null) | undefined
  due_on?: (string | null) | undefined
  default_access_level?: 'admin' | 'editor' | 'viewer' | undefined
  public?: boolean | undefined
}
type PortfolioResponse = PortfolioBase & {
  created_at?: string | undefined
  created_by?: UserCompact | undefined
  custom_field_settings?: CustomFieldSettingResponse[] | undefined
  current_status_update?: (StatusUpdateCompact | null) | undefined
  custom_fields?: CustomFieldCompact[] | undefined
  members?: UserCompact[] | undefined
  owner?: UserCompact | undefined
  workspace?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
  permalink_url?: string | undefined
  privacy_setting?: 'public_to_domain' | 'members_only' | undefined
  project_templates?: ProjectTemplateCompact[] | undefined
  custom_type?: (CustomTypeCompact | null) | undefined
}
type PortfolioUpdateRequestInput = PortfolioBaseInput & {
  custom_fields?: { [key: string]: string }
  html_custom_fields?: { [key: string]: string }
  custom_type?: string | null
}
type PortfolioItemCompact = ProjectCompact | PortfolioCompact
type PortfolioAddItemRequestInput = { item: string; insert_before?: string; insert_after?: string }
type PortfolioRemoveItemRequestInput = { item: string }
type AddMembersRequestInput = { members: string }
type RemoveMembersRequestInput = { members: string }
type PortfolioDuplicateRequestInput = { name: string; include?: string }
type ProjectBriefCompact = { gid?: string | undefined; resource_type?: string | undefined }
type ProjectBriefBase = ProjectBriefCompact & {
  title?: string | undefined
  html_text?: string | undefined
}
type ProjectBriefResponse = ProjectBriefBase & {
  text?: string | undefined
  permalink_url?: string | undefined
  project?: (ProjectCompact & { [key: string]: unknown }) | undefined
}
type ProjectBriefCompactInput = { gid?: string; resource_type?: string }
type ProjectBriefBaseInput = ProjectBriefCompactInput & { title?: string; html_text?: string }
type ProjectBriefRequestInput = ProjectBriefBaseInput & { text?: string }
type ProjectMembershipNormalResponse = ProjectMembershipCompact & {
  user?: UserCompact | undefined
  project?: ProjectCompact | undefined
  resource_type?: string | undefined
  write_access?: 'full_write' | 'comment_only' | undefined
}
type ProjectPortfolioSettingCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  project?: (ProjectCompact & { [key: string]: unknown }) | undefined
  portfolio?: (PortfolioCompact & { [key: string]: unknown }) | undefined
  is_access_control_inherited?: boolean | undefined
}
type ProjectPortfolioSettingResponse = ProjectPortfolioSettingCompact & {
  created_at?: string | undefined
}
type ProjectPortfolioSettingUpdateRequestInput = { is_access_control_inherited?: boolean }
type ProjectStatusCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  title?: string | undefined
}
type ProjectStatusBase = ProjectStatusCompact & {
  text?: string | undefined
  html_text?: string | undefined
  color?: 'green' | 'yellow' | 'red' | 'blue' | 'complete' | undefined
}
type ProjectStatusResponse = ProjectStatusBase & {
  author?: UserCompact | undefined
  created_at?: string | undefined
  created_by?: UserCompact | undefined
  modified_at?: string | undefined
}
type ProjectStatusCompactInput = { gid?: string; resource_type?: string; title?: string }
type ProjectStatusBaseInput = ProjectStatusCompactInput & {
  text?: string
  html_text?: string
  color?: 'green' | 'yellow' | 'red' | 'blue' | 'complete'
}
type ProjectStatusRequestInput = ProjectStatusBaseInput & { [key: string]: unknown }
type DateVariableCompact = {
  gid?: string | undefined
  name?: string | undefined
  description?: string | undefined
}
type TemplateRole = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type ProjectTemplateBase = ProjectTemplateCompact & {
  description?: string | undefined
  html_description?: string | undefined
  public?: boolean | undefined
  owner?: (UserCompact & ({ [key: string]: unknown } | null)) | undefined
  team?: TeamCompact | undefined
  requested_dates?: DateVariableCompact[] | undefined
  color?:
    | (
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
        | null
      )
    | undefined
  requested_roles?: TemplateRole[] | undefined
}
type ProjectTemplateResponse = ProjectTemplateBase
type DateVariableRequestInput = { gid?: string; value?: string | null }
type RequestedRoleRequestInput = { gid?: string; value?: string }
type ProjectTemplateInstantiateProjectRequestInput = {
  name: string
  team?: string
  public?: boolean
  privacy_setting?: 'public_to_workspace' | 'private_to_team' | 'private'
  is_strict?: boolean
  requested_dates?: DateVariableRequestInput[]
  requested_roles?: RequestedRoleRequestInput[]
}
type ProjectStatusResponseInput = ProjectStatusBaseInput & {
  author?: UserCompactInput
  created_at?: string
  created_by?: UserCompactInput
  modified_at?: string
}
type StatusUpdateCompactInput = {
  gid?: string
  resource_type?: string
  title?: string
  resource_subtype?: 'project_status_update' | 'portfolio_status_update' | 'goal_status_update'
}
type CustomFieldSettingCompactInput = { gid?: string; resource_type?: string }
type AsanaNamedResourceInput = { gid?: string; resource_type?: string; name?: string }
type CustomFieldResponseInput = CustomFieldBaseInput & {
  representation_type?:
    | 'text'
    | 'enum'
    | 'multi_enum'
    | 'number'
    | 'date'
    | 'people'
    | 'formula'
    | 'custom_id'
    | 'reference'
  id_prefix?: string | null
  input_restrictions?: ('task' | 'project' | 'portfolio' | 'goal' | 'team' | 'record')[]
  is_formula_field?: boolean
  is_lookup_field?: boolean
  is_value_read_only?: boolean
  created_by?: UserCompactInput | null
  people_value?: UserCompactInput[]
  reference_value?: AsanaNamedResourceInput[]
  html_text_value?: string | null
  privacy_setting?: 'public_with_guests' | 'public' | 'private'
  default_access_level?: 'admin' | 'editor' | 'user'
  resource_subtype?: 'text' | 'enum' | 'multi_enum' | 'number' | 'date' | 'people' | 'reference'
}
type CustomFieldSettingResponseInput = CustomFieldSettingCompactInput & {
  project?: ProjectCompactInput & { [key: string]: unknown }
  is_important?: boolean
  parent?: ProjectCompactInput & { [key: string]: unknown }
  custom_field?: CustomFieldResponseInput & { [key: string]: unknown }
}
type ProjectBaseInput = ProjectCompactInput & {
  archived?: boolean
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
    | 'none'
    | null
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
    | null
  created_at?: string
  current_status?: ProjectStatusResponseInput & ({ [key: string]: unknown } | null)
  current_status_update?: StatusUpdateCompactInput & ({ [key: string]: unknown } | null)
  custom_field_settings?: CustomFieldSettingResponseInput[]
  default_view?: 'list' | 'board' | 'calendar' | 'timeline'
  due_date?: string | null
  due_on?: string | null
  html_notes?: string
  members?: UserCompactInput[]
  modified_at?: string
  notes?: string
  public?: boolean
  privacy_setting?: 'public_to_workspace' | 'private_to_team' | 'private'
  start_on?: string | null
  default_access_level?: 'admin' | 'editor' | 'commenter' | 'viewer'
  minimum_access_level_for_customization?: 'admin' | 'editor'
  minimum_access_level_for_sharing?: 'admin' | 'editor'
}
type ProjectRequestInput = ProjectBaseInput & {
  custom_fields?: { [key: string]: string }
  html_custom_fields?: { [key: string]: string }
  followers?: string
  owner?: string | null
  team?: string
  workspace?: string
  custom_type?: string | null
}
type ProjectBase = ProjectCompact & {
  archived?: boolean | undefined
  color?:
    | (
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
        | 'none'
        | null
      )
    | undefined
  icon?:
    | (
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
        | null
      )
    | undefined
  created_at?: string | undefined
  current_status?: (ProjectStatusResponse & ({ [key: string]: unknown } | null)) | undefined
  current_status_update?: (StatusUpdateCompact & ({ [key: string]: unknown } | null)) | undefined
  custom_field_settings?: CustomFieldSettingResponse[] | undefined
  default_view?: 'list' | 'board' | 'calendar' | 'timeline' | undefined
  due_date?: (string | null) | undefined
  due_on?: (string | null) | undefined
  html_notes?: string | undefined
  members?: UserCompact[] | undefined
  modified_at?: string | undefined
  notes?: string | undefined
  public?: boolean | undefined
  privacy_setting?: 'public_to_workspace' | 'private_to_team' | 'private' | undefined
  start_on?: (string | null) | undefined
  default_access_level?: 'admin' | 'editor' | 'commenter' | 'viewer' | undefined
  minimum_access_level_for_customization?: 'admin' | 'editor' | undefined
  minimum_access_level_for_sharing?: 'admin' | 'editor' | undefined
}
type ProjectResponse = ProjectBase & {
  custom_fields?: CustomFieldCompact[] | undefined
  completed?: boolean | undefined
  completed_at?: (string | null) | undefined
  completed_by?: (UserCompact | null) | undefined
  followers?: UserCompact[] | undefined
  owner?: (UserCompact & ({ [key: string]: unknown } | null)) | undefined
  team?: (TeamCompact & { [key: string]: unknown }) | undefined
  permalink_url?: string | undefined
  project_brief?: (ProjectBriefCompact & ({ [key: string]: unknown } | null)) | undefined
  created_from_template?: (ProjectTemplateCompact & ({ [key: string]: unknown } | null)) | undefined
  workspace?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
  custom_type?: (CustomTypeCompact | null) | undefined
}
type ProjectUpdateRequestInput = ProjectBaseInput & {
  custom_fields?: { [key: string]: string }
  html_custom_fields?: { [key: string]: string }
  followers?: string
  owner?: string | null
  team?: string
  custom_type?: string | null
}
type ProjectDuplicateRequestInput = {
  name: string
  include?: string
  schedule_dates?: { should_skip_weekends?: boolean; due_on?: string; start_on?: string }
}
type TaskCountResponse = {
  num_tasks?: number | undefined
  num_incomplete_tasks?: number | undefined
  num_completed_tasks?: number | undefined
  num_milestones?: number | undefined
  num_incomplete_milestones?: number | undefined
  num_completed_milestones?: number | undefined
}
type AddFollowersRequestInput = { followers: string }
type RemoveFollowersRequestInput = { followers: string }
type ProjectSaveAsTemplateRequestInput = {
  name: string
  team?: string
  workspace?: string
  public: boolean
}
type RateCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  parent?: ProjectCompact | undefined
  resource?: UserCompact | undefined
  rate?: number | undefined
  currency_code?: string | undefined
  created_by?: UserCompact | undefined
}
type PlaceholderCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type PlaceholderRateCompact = RateCompact & { resource?: PlaceholderCompact | undefined }
type RateOrPlaceholderCompact = RateCompact | PlaceholderRateCompact
type RateRequestInput = {
  gid?: string
  resource_type?: string
  parent: string
  resource: string
  rate: number
}
type RateResponse = RateCompact & { [key: string]: unknown }
type RateUpdateRequestInput = { gid?: string; resource_type?: string; rate?: number }
type ReactionCompact = {
  gid?: string | undefined
  emoji?: string | undefined
  user?: UserCompact | undefined
}
type RecordItemCompactInput = { gid?: string; resource_type?: string; name?: string }
type RecordItemRequestInput = RecordItemCompactInput & {
  table: string
  custom_fields?: { [key: string]: string }
  unique_fingerprint?: string
  default_access_level?: 'admin' | 'editor' | 'commenter' | 'viewer'
}
type RecordItemResponse = RecordItemCompact & {
  table?: (TableCompact | null) | undefined
  workspace?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
  custom_fields?: CustomFieldResponse[] | undefined
  modified_at?: string | undefined
  created_at?: string | undefined
  deleted_at?: (string | null) | undefined
  created_by?: UserCompact | undefined
  permalink_url?: string | undefined
  comment_count?: number | undefined
  is_in_archived_table?: boolean | undefined
  default_access_level?: 'admin' | 'editor' | 'commenter' | 'viewer' | undefined
}
type RecordItemUpdateRequestInput = {
  name?: string
  default_access_level?: 'admin' | 'editor' | 'commenter' | 'viewer'
  custom_fields?: { [key: string]: string }
}
type RbacRoleCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  description?: string | undefined
  is_standard_role?: boolean | undefined
}
type RbacRoleCompactInput = {
  gid?: string
  resource_type?: string
  name?: string
  description?: string
  is_standard_role?: boolean
}
type RbacRoleBaseInput = RbacRoleCompactInput & {
  creation_time?: string
  modified_at?: string
  base_role_type?: 'guest' | 'member' | 'admin' | 'super_admin' | 'csm'
  permissions?: {
    create_app_authorization?: boolean
    create_pat_authorization?: boolean
    share_goal_with_domain?: boolean
    share_portfolios_with_org?: boolean
    assign_roles?: boolean
    manage_roles?: boolean
    export_project_data?: boolean
    task_deletion_policy?: 'all' | 'owned' | 'none'
    download_mobile_attachments?: boolean
    import_data?: boolean
    create_global_custom_fields?: boolean
    upload_attachments?: boolean
    create_team?: boolean
    allowed_guest_invites?: 'all' | 'none'
    create_and_edit_ai_automations?: boolean
    proactive_ai?: boolean
    standard_ai?: boolean
    create_and_edit_ai_teammates?: boolean
    share_teams_with_org?: boolean
    create_goal?: boolean
    create_project?: boolean
    create_read_only_link?: boolean
    create_portfolio?: boolean
    view_public_teams?: boolean
    view_shared_with_org_projects?: boolean
    view_shared_with_org_tasks?: boolean
    view_shared_with_org_portfolios?: boolean
  }
}
type RbacRoleRequestInput = RbacRoleBaseInput & {
  base_role_type: 'guest' | 'member' | 'admin'
  workspace: string
}
type RbacRoleBase = RbacRoleCompact & {
  creation_time?: string | undefined
  modified_at?: string | undefined
  base_role_type?: 'guest' | 'member' | 'admin' | 'super_admin' | 'csm' | undefined
  permissions?:
    | {
        create_app_authorization?: boolean | undefined
        create_pat_authorization?: boolean | undefined
        share_goal_with_domain?: boolean | undefined
        share_portfolios_with_org?: boolean | undefined
        assign_roles?: boolean | undefined
        manage_roles?: boolean | undefined
        export_project_data?: boolean | undefined
        task_deletion_policy?: 'all' | 'owned' | 'none' | undefined
        download_mobile_attachments?: boolean | undefined
        import_data?: boolean | undefined
        create_global_custom_fields?: boolean | undefined
        upload_attachments?: boolean | undefined
        create_team?: boolean | undefined
        allowed_guest_invites?: 'all' | 'none' | undefined
        create_and_edit_ai_automations?: boolean | undefined
        proactive_ai?: boolean | undefined
        standard_ai?: boolean | undefined
        create_and_edit_ai_teammates?: boolean | undefined
        share_teams_with_org?: boolean | undefined
        create_goal?: boolean | undefined
        create_project?: boolean | undefined
        create_read_only_link?: boolean | undefined
        create_portfolio?: boolean | undefined
        view_public_teams?: boolean | undefined
        view_shared_with_org_projects?: boolean | undefined
        view_shared_with_org_tasks?: boolean | undefined
        view_shared_with_org_portfolios?: boolean | undefined
      }
    | undefined
}
type RbacRoleResponse = RbacRoleBase & {
  workspace?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
}
type RbacRoleUpdateRequestInput = RbacRoleBaseInput
type RuleTriggerRequestInput = { resource: string; action_data: { [key: string]: unknown } }
type RuleTriggerResponse = { message?: string | undefined }
type SectionCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type SectionResponse = SectionCompact & {
  created_at?: string | undefined
  project?: ProjectCompact | undefined
  projects?: ProjectCompact[] | undefined
}
type SectionRequestInput = { name: string; insert_before?: string; insert_after?: string }
type SectionTaskInsertRequestInput = { task: string; insert_before?: string; insert_after?: string }
type ProjectSectionInsertRequestInput = {
  section: string
  before_section?: string
  after_section?: string
}
type StatusUpdateBase = StatusUpdateCompact & {
  text: string
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
}
type ReactionSummaryItemCompact = {
  emoji_base?: string | undefined
  variant?: string | undefined
  count?: number | undefined
  reacted?: boolean | undefined
}
type StatusUpdateResponse = StatusUpdateBase & {
  author?: UserCompact | undefined
  created_at?: string | undefined
  created_by?: UserCompact | undefined
  hearted?: boolean | undefined
  hearts?: Like[] | undefined
  liked?: boolean | undefined
  likes?: Like[] | undefined
  reaction_summary?: ReactionSummaryItemCompact[] | undefined
  modified_at?: string | undefined
  num_hearts?: number | undefined
  num_likes?: number | undefined
  parent?: (ProjectCompact & { [key: string]: unknown }) | undefined
}
type StatusUpdateBaseInput = StatusUpdateCompactInput & {
  text: string
  html_text?: string
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
}
type StatusUpdateRequestInput = StatusUpdateBaseInput & { parent: string }
type StoryBase = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  resource_subtype?: string | undefined
  text?: string | undefined
  html_text?: string | undefined
  is_pinned?: boolean | undefined
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
type StoryResponseDates = {
  start_on?: (string | null) | undefined
  due_at?: (string | null) | undefined
  due_on?: string | undefined
}
type TagCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type StoryResponse = StoryBase & {
  comment_gid?: (string | null) | undefined
  anchor_gid?: (string | null) | undefined
  created_by?: UserCompact | undefined
  type?: 'comment' | 'system' | undefined
  is_editable?: boolean | undefined
  is_edited?: boolean | undefined
  hearted?: boolean | undefined
  hearts?: Like[] | undefined
  num_hearts?: number | undefined
  liked?: boolean | undefined
  likes?: Like[] | undefined
  num_likes?: number | undefined
  reaction_summary?: ReactionSummaryItemCompact[] | undefined
  previews?: Preview[] | undefined
  old_name?: string | undefined
  new_name?: (string | null) | undefined
  old_dates?: StoryResponseDates | undefined
  new_dates?: StoryResponseDates | undefined
  old_resource_subtype?: string | undefined
  new_resource_subtype?: string | undefined
  story?: StoryCompact | undefined
  assignee?: UserCompact | undefined
  follower?: UserCompact | undefined
  old_section?: SectionCompact | undefined
  new_section?: SectionCompact | undefined
  task?: TaskCompact | undefined
  project?: ProjectCompact | undefined
  tag?: TagCompact | undefined
  custom_field?: CustomFieldCompact | undefined
  old_text_value?: string | undefined
  new_text_value?: string | undefined
  old_number_value?: (number | null) | undefined
  new_number_value?: number | undefined
  old_enum_value?: EnumOption | undefined
  new_enum_value?: EnumOption | undefined
  old_date_value?: StoryResponseDates | undefined
  new_date_value?: StoryResponseDates | undefined
  old_people_value?: UserCompact[] | undefined
  new_people_value?: UserCompact[] | undefined
  old_multi_enum_values?: EnumOption[] | undefined
  new_multi_enum_values?: EnumOption[] | undefined
  new_approval_status?: string | undefined
  old_approval_status?: string | undefined
  duplicate_of?: TaskCompact | undefined
  duplicated_from?: TaskCompact | undefined
  dependency?: TaskCompact | undefined
  source?: 'web' | 'email' | 'mobile' | 'api' | 'unknown' | undefined
  target?: (TaskCompact & { [key: string]: unknown }) | undefined
}
type StoryBaseInput = {
  gid?: string
  resource_type?: string
  created_at?: string
  resource_subtype?: string
  text?: string
  html_text?: string
  is_pinned?: boolean
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
}
type TaskStoryCreateRequestInput = StoryBaseInput & { parent_comment?: string }
type TableCompactInput = { gid?: string; resource_type?: string; name?: string }
type TableRequestInput = TableCompactInput & { workspace: string }
type CustomFieldTableSettingCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
}
type CustomFieldTableSettingResponse = CustomFieldTableSettingCompact & {
  custom_field?: (CustomFieldCompact & { [key: string]: unknown }) | undefined
  is_important?: boolean | undefined
}
type TableResponse = TableCompact & {
  modified_at?: string | undefined
  created_at?: string | undefined
  workspace?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
  custom_field_settings?: CustomFieldTableSettingResponse[] | undefined
  default_access_level?: 'admin' | 'editor' | 'commenter' | 'viewer' | undefined
}
type TableUpdateRequestInput = {
  name?: string
  default_access_level?: 'admin' | 'editor' | 'commenter' | 'viewer'
}
type TagCompactInput = { gid?: string; resource_type?: string; name?: string }
type TagBaseInput = TagCompactInput & {
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
    | null
  notes?: string
}
type TagCreateRequestInput = TagBaseInput & { followers?: string[]; workspace?: string }
type TagBase = TagCompact & {
  color?:
    | (
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
        | null
      )
    | undefined
  notes?: string | undefined
}
type TagResponse = TagBase & {
  created_at?: string | undefined
  followers?: UserCompact[] | undefined
  workspace?: WorkspaceCompact | undefined
  permalink_url?: string | undefined
}
type TagCreateTagForWorkspaceRequestInput = TagBaseInput & { followers?: string[] }
type TaskTemplateCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
}
type TaskTemplateBase = TaskTemplateCompact
type TaskTemplateRecipeCompact = {
  name?: string | undefined
  task_resource_subtype?: 'default_task' | 'milestone_task' | 'approval_task' | undefined
}
type TaskTemplateRecipe = TaskTemplateRecipeCompact & {
  description?: string | undefined
  html_description?: string | undefined
  memberships?: ProjectCompact[] | undefined
  relative_start_on?: (number | null) | undefined
  relative_due_on?: (number | null) | undefined
  due_time?: (string | null) | undefined
  dependencies?: TaskTemplateRecipeCompact[] | undefined
  dependents?: TaskTemplateRecipeCompact[] | undefined
  followers?: UserCompact[] | undefined
  attachments?: AttachmentCompact[] | undefined
  subtasks?: TaskTemplateRecipeCompact[] | undefined
  custom_fields?: CustomFieldCompact[] | undefined
}
type TaskTemplateResponse = TaskTemplateBase & {
  name?: string | undefined
  project?: (ProjectCompact | null) | undefined
  template?: TaskTemplateRecipe | undefined
  created_by?: UserCompact | undefined
  created_at?: string | undefined
}
type TaskTemplateInstantiateTaskRequestInput = { name?: string }
type TaskCompactInput = {
  gid?: string
  resource_type?: string
  name?: string
  resource_subtype?: 'default_task' | 'milestone' | 'approval' | 'custom'
  created_by?: { gid?: string; resource_type?: string }
}
type AsanaResourceInput = { gid?: string; resource_type?: string }
type LikeInput = { gid?: string; user?: UserCompactInput }
type SectionCompactInput = { gid?: string; resource_type?: string; name?: string }
type TaskMembershipInput = { project?: ProjectCompactInput; section?: SectionCompactInput | null }
type TaskBaseInput = TaskCompactInput & {
  approval_status?: 'pending' | 'approved' | 'rejected' | 'changes_requested'
  assignee_status?: 'today' | 'upcoming' | 'later' | 'new' | 'inbox'
  assigned_by?: UserCompactInput | null
  completed?: boolean
  completed_at?: string | null
  completed_by?: UserCompactInput | null
  created_at?: string
  dependencies?: AsanaResourceInput[]
  dependents?: AsanaResourceInput[]
  due_at?: string | null
  due_on?: string | null
  external?: { gid?: string; data?: string }
  html_notes?: string
  hearted?: boolean
  hearts?: LikeInput[]
  has_subtasks_date_mismatch?: boolean
  is_rendered_as_separator?: boolean
  liked?: boolean
  likes?: LikeInput[]
  memberships?: TaskMembershipInput[]
  modified_at?: string
  name?: string
  notes?: string
  num_hearts?: number
  num_likes?: number
  num_subtasks?: number
  start_at?: string | null
  start_on?: string | null
  actual_time_minutes?: number | null
}
type TaskRequestBaseInput = TaskBaseInput & {
  assignee?: string | null
  assignee_section?: string | null
  custom_fields?: { [key: string]: string }
  custom_type?: string | null
  custom_type_status_option?: string | null
  html_custom_fields?: { [key: string]: string }
  parent?: string | null
}
type TaskCreateRequestInput = TaskRequestBaseInput & {
  followers?: string[]
  projects?: string[]
  tags?: string[]
  workspace?: string
}
type AsanaResource = { gid?: string | undefined; resource_type?: string | undefined }
type TaskMembership = {
  project?: ProjectCompact | undefined
  section?: (SectionCompact | null) | undefined
}
type TaskBase = TaskCompact & {
  approval_status?: 'pending' | 'approved' | 'rejected' | 'changes_requested' | undefined
  assignee_status?: 'today' | 'upcoming' | 'later' | 'new' | 'inbox' | undefined
  assigned_by?: (UserCompact | null) | undefined
  completed?: boolean | undefined
  completed_at?: (string | null) | undefined
  completed_by?: (UserCompact | null) | undefined
  created_at?: string | undefined
  dependencies?: AsanaResource[] | undefined
  dependents?: AsanaResource[] | undefined
  due_at?: (string | null) | undefined
  due_on?: (string | null) | undefined
  external?: { gid?: string | undefined; data?: string | undefined } | undefined
  html_notes?: string | undefined
  hearted?: boolean | undefined
  hearts?: Like[] | undefined
  has_subtasks_date_mismatch?: boolean | undefined
  is_rendered_as_separator?: boolean | undefined
  liked?: boolean | undefined
  likes?: Like[] | undefined
  memberships?: TaskMembership[] | undefined
  modified_at?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  num_hearts?: number | undefined
  num_likes?: number | undefined
  num_subtasks?: number | undefined
  start_at?: (string | null) | undefined
  start_on?: (string | null) | undefined
  actual_time_minutes?: (number | null) | undefined
}
type EffectiveTaskMembership = TaskMembership & { is_inherited?: boolean | undefined }
type TaskResponse = TaskBase & {
  assignee?: (UserCompact | null) | undefined
  assignee_section?: (SectionCompact & ({ [key: string]: unknown } | null)) | undefined
  custom_fields?: CustomFieldResponse[] | undefined
  custom_type?: (CustomTypeCompact | null) | undefined
  custom_type_status_option?: (CustomTypeStatusOptionCompact | null) | undefined
  followers?: UserCompact[] | undefined
  parent?: (TaskCompact & ({ [key: string]: unknown } | null)) | undefined
  projects?: ProjectCompact[] | undefined
  effective_memberships?: EffectiveTaskMembership[] | undefined
  tags?: TagCompact[] | undefined
  workspace?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
  permalink_url?: string | undefined
}
type TaskUpdateRequestInput = TaskRequestBaseInput
type TaskDuplicateRequestInput = { name?: string; include?: string }
type TaskSetParentRequestInput = { parent: string; insert_after?: string; insert_before?: string }
type ModifyDependenciesRequestInput = { dependencies?: string[] }
type DependencyTypeRequestInput = { [key: string]: unknown }
type ModifyDependentsRequestInput = { dependents?: string[] }
type TaskAddProjectRequestInput = {
  project: string
  insert_after?: string | null
  insert_before?: string | null
  section?: string | null
}
type TaskRemoveProjectRequestInput = { project: string }
type TaskAddTagRequestInput = { tag: string }
type TaskRemoveTagRequestInput = { tag: string }
type TaskRemoveFollowersRequestInput = { followers: string[] }
type TeamMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  user?: UserCompact | undefined
  team?: TeamCompact | undefined
  is_guest?: boolean | undefined
  is_limited_access?: boolean | undefined
  is_admin?: boolean | undefined
}
type TeamCompactInput = { gid?: string; resource_type?: string; name?: string }
type TeamRequestInput = TeamCompactInput & {
  description?: string
  html_description?: string
  organization?: string
  visibility?: 'secret' | 'request_to_join' | 'public'
  edit_team_name_or_description_access_level?: 'all_team_members' | 'only_team_admins'
  edit_team_visibility_or_trash_team_access_level?: 'all_team_members' | 'only_team_admins'
  member_invite_management_access_level?: 'all_team_members' | 'only_team_admins'
  guest_invite_management_access_level?: 'all_team_members' | 'only_team_admins'
  join_request_management_access_level?: 'all_team_members' | 'only_team_admins'
  team_member_removal_access_level?: 'all_team_members' | 'only_team_admins'
  team_content_management_access_level?: 'no_restriction' | 'only_team_admins'
  endorsed?: boolean
}
type TeamResponse = TeamCompact & {
  description?: string | undefined
  html_description?: string | undefined
  organization?: (WorkspaceCompact & { [key: string]: unknown }) | undefined
  permalink_url?: string | undefined
  visibility?: 'secret' | 'request_to_join' | 'public' | undefined
  edit_team_name_or_description_access_level?: 'all_team_members' | 'only_team_admins' | undefined
  edit_team_visibility_or_trash_team_access_level?:
    | 'all_team_members'
    | 'only_team_admins'
    | undefined
  member_invite_management_access_level?: 'all_team_members' | 'only_team_admins' | undefined
  guest_invite_management_access_level?: 'all_team_members' | 'only_team_admins' | undefined
  join_request_management_access_level?: 'all_team_members' | 'only_team_admins' | undefined
  team_member_removal_access_level?: 'all_team_members' | 'only_team_admins' | undefined
  team_content_management_access_level?: 'no_restriction' | 'only_team_admins' | undefined
  endorsed?: boolean | undefined
  custom_field_settings?: CustomFieldSettingResponse[] | undefined
}
type TeamAddUserRequestInput = { user?: string }
type TeamRemoveUserRequestInput = { user?: string }
type TimePeriodBase = TimePeriodCompact & { parent?: (TimePeriodCompact | null) | undefined }
type TimeTrackingCategoryCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  color?:
    | 'none'
    | 'red'
    | 'orange'
    | 'yellow-orange'
    | 'yellow'
    | 'yellow-green'
    | 'green'
    | 'blue-green'
    | 'aqua'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'magenta'
    | 'hot-pink'
    | 'pink'
    | 'cool-gray'
    | undefined
}
type TimeTrackingCategoryResponse = TimeTrackingCategoryCompact & {
  is_archived?: boolean | undefined
}
type TimeTrackingCategoryBaseRequestInput = {
  name?: string
  color?:
    | 'none'
    | 'red'
    | 'orange'
    | 'yellow-orange'
    | 'yellow'
    | 'yellow-green'
    | 'green'
    | 'blue-green'
    | 'aqua'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'magenta'
    | 'hot-pink'
    | 'pink'
    | 'cool-gray'
}
type TimeTrackingCategoryUpdateRequestInput = TimeTrackingCategoryBaseRequestInput & {
  is_archived?: boolean
}
type TimeTrackingEntryCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  duration_minutes?: number | undefined
  entered_on?: string | undefined
  attributable_to?: (ProjectCompact & { [key: string]: unknown }) | undefined
  assignee?: (UserCompact & { [key: string]: unknown }) | undefined
  created_by?: (UserCompact & { [key: string]: unknown }) | undefined
  categories?: TimeTrackingCategoryCompact[] | undefined
}
type TimeTrackingCategoryCreateRequestInput = TimeTrackingCategoryBaseRequestInput & {
  workspace: string
}
type CreateTimeTrackingEntryRequestInput = {
  duration_minutes?: number
  entered_on?: string
  attributable_to?: string
  assignee?: string
  billable_status?: 'billable' | 'nonBillable' | 'notApplicable'
  description?: string
  categories?: string[]
}
type TimeTrackingEntryBase = TimeTrackingEntryCompact & {
  task?: TaskCompact | undefined
  created_at?: string | undefined
  approval_status?: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED' | undefined
  billable_status?: 'billable' | 'nonBillable' | 'notApplicable' | undefined
  description?: string | undefined
}
type UpdateTimeTrackingEntryRequestInput = {
  duration_minutes?: number
  entered_on?: string
  attributable_to?: string
  assignee?: string
  billable_status?: 'billable' | 'nonBillable' | 'notApplicable'
  description?: string
  categories?: string[]
}
type TimesheetApprovalStatusCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  created_at?: string | undefined
  user?: UserCompact | undefined
  workspace?: WorkspaceCompact | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  approval_status?: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED' | undefined
}
type TimesheetApprovalStatusResponse = TimesheetApprovalStatusCompact & { [key: string]: unknown }
type UpdateTimesheetApprovalStatusRequestInput = {
  approval_status: 'submitted' | 'draft' | 'approved' | 'rejected'
  message?: string
}
type CreateTimesheetApprovalStatusRequestInput = {
  user: string
  workspace: string
  start_date: string
  end_date: string
}
type UserTaskListCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  name?: string | undefined
  owner?: UserCompact | undefined
  workspace?: WorkspaceCompact | undefined
}
type UserBaseResponse = UserCompact & {
  email?: string | undefined
  photo?:
    | ({
        image_21x21?: string | undefined
        image_27x27?: string | undefined
        image_36x36?: string | undefined
        image_60x60?: string | undefined
        image_128x128?: string | undefined
        image_1024x1024?: string | undefined
      } | null)
    | undefined
}
type UserResponse = UserBaseResponse & {
  workspaces?: WorkspaceCompact[] | undefined
  custom_fields?: CustomFieldCompact[] | undefined
}
type UserUpdateRequestInput = UserCompactInput & {
  custom_fields?: { [key: string]: string }
  html_custom_fields?: { [key: string]: string }
}
type WebhookCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  active?: boolean | undefined
  resource?: AsanaNamedResource | undefined
  target?: string | undefined
}
type WebhookFilter = {
  resource_type?: string | undefined
  resource_subtype?: string | undefined
  action?: string | undefined
  fields?: string[] | undefined
}
type WebhookResponse = WebhookCompact & {
  created_at?: string | undefined
  last_failure_at?: string | undefined
  last_failure_content?: string | undefined
  last_success_at?: string | undefined
  delivery_retry_count?: number | undefined
  next_attempt_after?: string | undefined
  failure_deletion_timestamp?: string | undefined
  filters?: (WebhookFilter & { [key: string]: unknown })[] | undefined
}
type WebhookFilterInput = {
  resource_type?: string
  resource_subtype?: string
  action?: string
  fields?: string[]
}
type WebhookRequestInput = {
  resource: string
  target: string
  filters?: (WebhookFilterInput & { [key: string]: unknown })[]
}
type WebhookUpdateRequestInput = { filters?: (WebhookFilterInput & { [key: string]: unknown })[] }
type WorkspaceMembershipCompact = {
  gid?: string | undefined
  resource_type?: string | undefined
  user?: UserCompact | undefined
  workspace?: WorkspaceCompact | undefined
}
type WorkspaceMembershipResponse = WorkspaceMembershipCompact & {
  user_task_list?: UserTaskListCompact | undefined
  is_active?: boolean | undefined
  is_admin?: boolean | undefined
  is_guest?: boolean | undefined
  is_view_only?: boolean | undefined
  vacation_dates?:
    | ({ start_on?: string | undefined; end_on?: (string | null) | undefined } | null)
    | undefined
  created_at?: string | undefined
}
type WorkspaceResponse = WorkspaceCompact & {
  email_domains?: string[] | undefined
  is_organization?: boolean | undefined
}
type WorkspaceCompactInput = { gid?: string; resource_type?: string; name?: string }
type WorkspaceAddUserRequestInput = { user?: string }
type WorkspaceRemoveUserRequestInput = { user?: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/access_requests': {
      $get:
        | {
            input: {
              query: { target: string; user?: string; opt_pretty?: unknown; opt_fields?: unknown }
            }
            output: { data?: AccessRequestResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { target: string; user?: string; opt_pretty?: unknown; opt_fields?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { target: string; user?: string; opt_pretty?: unknown; opt_fields?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { target: string; user?: string; opt_pretty?: unknown; opt_fields?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: { target: string; user?: string; opt_pretty?: unknown; opt_fields?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { target: string; user?: string; opt_pretty?: unknown; opt_fields?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { target: string; user?: string; opt_pretty?: unknown; opt_fields?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: { data?: AccessRequestCreateRequestInput } }
            output: { data?: AccessRequestResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { data?: AccessRequestCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { data?: AccessRequestCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { data?: AccessRequestCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: { data?: AccessRequestCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { data?: AccessRequestCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { data?: AccessRequestCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access_requests/:access_request_gid/approve': {
      $post:
        | {
            input: { param: { access_request_gid: string } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access_requests/:access_request_gid/reject': {
      $post:
        | {
            input: { param: { access_request_gid: string } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { access_request_gid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/agents': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: AgentCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agents/:agent_gid': {
      $get:
        | {
            input: { param: { agent_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: AgentResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { agent_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agent_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/ai_studio/runs': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: AiStudioRunResponse[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/ai_studio/seats': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                state?: 'active' | 'revoked'
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: AiStudioSeatResponse[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                state?: 'active' | 'revoked'
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                state?: 'active' | 'revoked'
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                state?: 'active' | 'revoked'
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                state?: 'active' | 'revoked'
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                state?: 'active' | 'revoked'
                division_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/allocations/:allocation_gid': {
      $get:
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: AllocationResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AllocationRequestInput } }
            output: { data?: AllocationResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AllocationRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AllocationRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AllocationRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AllocationRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { allocation_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AllocationRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { allocation_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allocation_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { allocation_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { allocation_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { allocation_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { allocation_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { allocation_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/allocations': {
      $get:
        | {
            input: {
              query: {
                parent?: string
                assignee?: string
                workspace?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: AllocationResponse[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                parent?: string
                assignee?: string
                workspace?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                parent?: string
                assignee?: string
                workspace?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                parent?: string
                assignee?: string
                workspace?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                parent?: string
                assignee?: string
                workspace?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                parent?: string
                assignee?: string
                workspace?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                parent?: string
                assignee?: string
                workspace?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: AllocationRequestInput & { [key: string]: unknown } }
            }
            output: { data?: AllocationResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: AllocationRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: AllocationRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: AllocationRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: AllocationRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: AllocationRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: AllocationRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/attachments/:attachment_gid': {
      $get:
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: AttachmentResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { attachment_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
      $delete:
        | {
            input: { param: { attachment_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attachment_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attachment_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attachment_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attachment_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attachment_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/attachments': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: AttachmentCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              form: AttachmentRequestInput
            }
            output: { data?: AttachmentResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              form: AttachmentRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              form: AttachmentRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              form: AttachmentRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              form: AttachmentRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              form: AttachmentRequestInput
            }
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
                start_at?: string
                end_at?: string
                event_type?: string
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                actor_gid?: string
                resource_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: AuditLogEvent[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                event_type?: string
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                actor_gid?: string
                resource_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                event_type?: string
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                actor_gid?: string
                resource_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                event_type?: string
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                actor_gid?: string
                resource_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                event_type?: string
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                actor_gid?: string
                resource_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                start_at?: string
                end_at?: string
                event_type?: string
                actor_type?:
                  | 'user'
                  | 'asana'
                  | 'asana_support'
                  | 'anonymous'
                  | 'external_administrator'
                actor_gid?: string
                resource_gid?: string
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/batch': {
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: BatchRequestInput }
            }
            output: { data?: BatchResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: BatchRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: BatchRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: BatchRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: BatchRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: BatchRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/budgets': {
      $get:
        | {
            input: { query: { parent: string; opt_pretty?: unknown } }
            output: { data?: BudgetResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { parent: string; opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { parent: string; opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { parent: string; opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { parent: string; opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { parent: string; opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { parent: string; opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_pretty?: unknown } } & { json: { data?: BudgetRequestInput } }
            output: { data?: BudgetResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_pretty?: unknown } } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_pretty?: unknown } } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_pretty?: unknown } } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { opt_pretty?: unknown } } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_pretty?: unknown } } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_pretty?: unknown } } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/budgets/:budget_gid': {
      $get:
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: BudgetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: BudgetRequestInput } }
            output: { data?: BudgetResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: BudgetRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { budget_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { budget_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { budget_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { budget_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { budget_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { budget_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { budget_gid: string } } & { query: { opt_pretty?: unknown } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: CustomFieldSettingResponse[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: CustomFieldSettingResponse[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/custom_field_settings': {
      $get:
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: CustomFieldSettingResponse[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid/custom_field_settings': {
      $get:
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: CustomFieldSettingResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/custom_fields': {
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CustomFieldCreateRequestInput }
            }
            output: { data?: CustomFieldResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CustomFieldCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CustomFieldCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CustomFieldCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CustomFieldCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CustomFieldCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/custom_fields/:custom_field_gid': {
      $get:
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: CustomFieldResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CustomFieldRequestInput } }
            output: { data?: CustomFieldResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CustomFieldRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CustomFieldRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CustomFieldRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CustomFieldRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CustomFieldRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { custom_field_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & { query: { opt_pretty?: unknown } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: CustomFieldResponse[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionRequestInput } }
            output: { data?: EnumOption | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInsertRequestInput } }
            output: { data?: EnumOption | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInsertRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInsertRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInsertRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInsertRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_field_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInsertRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInput } }
            output: { data?: EnumOption | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { enum_option_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: EnumOptionInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/custom_types': {
      $get:
        | {
            input: {
              query: {
                opt_fields?: unknown
                project?: string
                workspace?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: CustomTypeResponse[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                project?: string
                workspace?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                project?: string
                workspace?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                project?: string
                workspace?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                project?: string
                workspace?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                project?: string
                workspace?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/custom_types/:custom_type_gid': {
      $get:
        | {
            input: { param: { custom_type_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: CustomTypeResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_type_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_type_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_type_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_type_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { custom_type_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
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
              query: { opt_fields?: unknown; resource: string; sync?: string; opt_pretty?: unknown }
            }
            output: {
              data?: EventResponse[] | undefined
              sync?: string | undefined
              has_more?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { opt_fields?: unknown; resource: string; sync?: string; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { opt_fields?: unknown; resource: string; sync?: string; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { opt_fields?: unknown; resource: string; sync?: string; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { opt_fields?: unknown; resource: string; sync?: string; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { opt_fields?: unknown; resource: string; sync?: string; opt_pretty?: unknown }
            }
            output: {
              errors?: { message?: string | undefined }[] | undefined
              sync?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: { opt_fields?: unknown; resource: string; sync?: string; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/graph': {
      $post:
        | {
            input: { json: { data?: GraphExportRequestInput } }
            output: { data?: GraphExportResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { data?: GraphExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { data?: GraphExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { data?: GraphExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { data?: GraphExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { data?: GraphExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/resource': {
      $post:
        | {
            input: { json: { data?: ResourceExportRequestInput } }
            output: { data?: ResourceExportResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { data?: ResourceExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { data?: ResourceExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { data?: ResourceExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { data?: ResourceExportRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { data?: ResourceExportRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: GoalRelationshipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalRelationshipRequestInput } }
            output: { data?: GoalRelationshipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_relationship_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalRelationshipRequestInput } }
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
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                supported_goal: string
                resource_subtype?: string
                opt_fields?: unknown
              }
            }
            output: {
              data?: GoalRelationshipCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                supported_goal: string
                resource_subtype?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                supported_goal: string
                resource_subtype?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                supported_goal: string
                resource_subtype?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                supported_goal: string
                resource_subtype?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                supported_goal: string
                resource_subtype?: string
                opt_fields?: unknown
              }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalAddSupportingRelationshipRequestInput } }
            output: { data?: GoalRelationshipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalAddSupportingRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalAddSupportingRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalAddSupportingRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalAddSupportingRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalAddSupportingRelationshipRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/removeSupportingRelationship': {
      $post:
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: GoalRemoveSupportingRelationshipRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: GoalRemoveSupportingRelationshipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: GoalRemoveSupportingRelationshipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: GoalRemoveSupportingRelationshipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: GoalRemoveSupportingRelationshipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: GoalRemoveSupportingRelationshipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid': {
      $get:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalUpdateRequestInput } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } }
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
                portfolio?: string
                project?: string
                task?: string
                is_workspace_level?: string
                team?: string
                workspace?: string
                time_periods?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: GoalCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                portfolio?: string
                project?: string
                task?: string
                is_workspace_level?: string
                team?: string
                workspace?: string
                time_periods?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                portfolio?: string
                project?: string
                task?: string
                is_workspace_level?: string
                team?: string
                workspace?: string
                time_periods?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                portfolio?: string
                project?: string
                task?: string
                is_workspace_level?: string
                team?: string
                workspace?: string
                time_periods?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                portfolio?: string
                project?: string
                task?: string
                is_workspace_level?: string
                team?: string
                workspace?: string
                time_periods?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                portfolio?: string
                project?: string
                task?: string
                is_workspace_level?: string
                team?: string
                workspace?: string
                time_periods?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                portfolio?: string
                project?: string
                task?: string
                is_workspace_level?: string
                team?: string
                workspace?: string
                time_periods?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: GoalRequestInput }
            }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: GoalRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: GoalRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: GoalRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: GoalRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: GoalRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: GoalRequestInput }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricBaseInput } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricBaseInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricCurrentValueRequestInput } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricCurrentValueRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricCurrentValueRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricCurrentValueRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricCurrentValueRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricCurrentValueRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: GoalMetricCurrentValueRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: { data?: GoalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: GoalCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/addCustomFieldSetting': {
      $post:
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: { data?: CustomFieldSettingResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/removeCustomFieldSetting': {
      $post:
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { job_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/memberships': {
      $get:
        | {
            input: {
              query: {
                parent?: string
                member?: string
                resource_subtype?: 'project_membership'
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: MembershipCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                parent?: string
                member?: string
                resource_subtype?: 'project_membership'
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                parent?: string
                member?: string
                resource_subtype?: 'project_membership'
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                parent?: string
                member?: string
                resource_subtype?: 'project_membership'
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                parent?: string
                member?: string
                resource_subtype?: 'project_membership'
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                parent?: string
                member?: string
                resource_subtype?: 'project_membership'
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_pretty?: unknown } } & {
              json: { data?: CreateMembershipRequestInput }
            }
            output: { data?: MembershipResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_pretty?: unknown } } & {
              json: { data?: CreateMembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_pretty?: unknown } } & {
              json: { data?: CreateMembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_pretty?: unknown } } & {
              json: { data?: CreateMembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_pretty?: unknown } } & {
              json: { data?: CreateMembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_pretty?: unknown } } & {
              json: { data?: CreateMembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/memberships/:membership_gid': {
      $get:
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: MembershipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: MembershipRequestInput }
            }
            output: { data?: MembershipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: MembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: MembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: MembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: MembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: MembershipRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { membership_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid/notifications': {
      $get:
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: NotificationResponse[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
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
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
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
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
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
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
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
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid/notifications/markRead': {
      $post:
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: { data?: MarkNotificationsResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_gid/notifications/markUnread': {
      $post:
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: { data?: MarkNotificationsResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data: MarkNotificationsRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ooo_entries/:ooo_entry_gid': {
      $get:
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: OooEntryResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: OooEntryBaseInput } }
            output: { data?: OooEntryResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: OooEntryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: OooEntryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: OooEntryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: OooEntryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ooo_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: OooEntryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { ooo_entry_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ooo_entry_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ooo_entry_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ooo_entry_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ooo_entry_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ooo_entry_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ooo_entries': {
      $get:
        | {
            input: {
              query: {
                user: string
                workspace: string
                limit?: unknown
                offset?: string
                start_date?: string
                end_date?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: OooEntryResponse[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user: string
                workspace: string
                limit?: unknown
                offset?: string
                start_date?: string
                end_date?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                user: string
                workspace: string
                limit?: unknown
                offset?: string
                start_date?: string
                end_date?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                user: string
                workspace: string
                limit?: unknown
                offset?: string
                start_date?: string
                end_date?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                user: string
                workspace: string
                limit?: unknown
                offset?: string
                start_date?: string
                end_date?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                user: string
                workspace: string
                limit?: unknown
                offset?: string
                start_date?: string
                end_date?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OooEntryCreateRequestInput & { [key: string]: unknown } }
            }
            output: { data?: OooEntryResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OooEntryCreateRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OooEntryCreateRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OooEntryCreateRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OooEntryCreateRequestInput & { [key: string]: unknown } }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OooEntryCreateRequestInput & { [key: string]: unknown } }
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
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OrganizationExportRequestInput }
            }
            output: { data?: OrganizationExportCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OrganizationExportRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OrganizationExportRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OrganizationExportRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OrganizationExportRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: OrganizationExportRequestInput }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: OrganizationExportCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_export_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
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
                opt_fields?: unknown
                portfolio?: string
                workspace?: string
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: DeprecatedPortfolioMembershipCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                portfolio?: string
                workspace?: string
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                portfolio?: string
                workspace?: string
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                portfolio?: string
                workspace?: string
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                portfolio?: string
                workspace?: string
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                portfolio?: string
                workspace?: string
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: DeprecatedPortfolioMembershipCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
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
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: DeprecatedPortfolioMembershipCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
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
                limit?: unknown
                offset?: string
                workspace: string
                owner?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: PortfolioCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                owner?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                owner?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                owner?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                owner?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                owner?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: PortfolioRequestInput }
            }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: PortfolioRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: PortfolioRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: PortfolioRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: PortfolioRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: PortfolioRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid': {
      $get:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioUpdateRequestInput } }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: PortfolioItemCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/addItem': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioAddItemRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioAddItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioAddItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioAddItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioAddItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioAddItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/removeItem': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioRemoveItemRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioRemoveItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioRemoveItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioRemoveItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioRemoveItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: PortfolioRemoveItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/addCustomFieldSetting': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: { data?: CustomFieldSettingResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: AddCustomFieldSettingRequestInput }
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
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: { data?: PortfolioResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/duplicate': {
      $post:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioDuplicateRequestInput } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: PortfolioDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_briefs/:project_brief_gid': {
      $get:
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: ProjectBriefResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
      $put:
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: { data?: ProjectBriefResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_brief_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { project_brief_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_brief_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_brief_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_brief_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_brief_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_brief_gid: string } } & { query: { opt_pretty?: unknown } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: { data?: ProjectBriefResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectBriefRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: ProjectMembershipNormalResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
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
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: ProjectMembershipCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                user?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_portfolio_settings/:project_portfolio_setting_gid': {
      $get:
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: ProjectPortfolioSettingResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectPortfolioSettingUpdateRequestInput } }
            output: { data?: ProjectPortfolioSettingResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectPortfolioSettingUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectPortfolioSettingUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectPortfolioSettingUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectPortfolioSettingUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_portfolio_setting_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectPortfolioSettingUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/project_portfolio_settings': {
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: ProjectPortfolioSettingCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/portfolios/:portfolio_gid/project_portfolio_settings': {
      $get:
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: ProjectPortfolioSettingCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/project_statuses/:project_status_gid': {
      $get:
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: ProjectStatusResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { project_status_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_status_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_status_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_status_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_status_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_status_gid: string } } & { query: { opt_pretty?: unknown } }
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
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
              }
            }
            output: { data?: ProjectStatusCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                opt_fields?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectStatusRequestInput } }
            output: { data?: ProjectStatusResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectStatusRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: ProjectTemplateResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { project_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { project_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_template_gid: string } } & { query: { opt_pretty?: unknown } }
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
                workspace?: string
                team?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: ProjectTemplateCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspace?: string
                team?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                workspace?: string
                team?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                workspace?: string
                team?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                workspace?: string
                team?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                workspace?: string
                team?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
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
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: ProjectTemplateCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequestInput } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectTemplateInstantiateProjectRequestInput } }
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
                limit?: unknown
                offset?: string
                workspace?: string
                team?: string
                archived?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: ProjectCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                team?: string
                archived?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                team?: string
                archived?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                team?: string
                archived?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                team?: string
                archived?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                team?: string
                archived?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: ProjectRequestInput }
            }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: ProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: ProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: ProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: ProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: ProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid': {
      $get:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectUpdateRequestInput } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectDuplicateRequestInput } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectDuplicateRequestInput } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                include_inherited_projects?: string
              }
            }
            output: { data?: ProjectCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                include_inherited_projects?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                include_inherited_projects?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                include_inherited_projects?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                include_inherited_projects?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                include_inherited_projects?: string
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
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: ProjectCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
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
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: ProjectCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/projects/search': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                sort_by?: 'due_date' | 'created_at' | 'completed_at' | 'modified_at' | 'relevance'
                sort_ascending?: string
                completed?: string
                'teams.any'?: string
                'owner.any'?: string
                'members.any'?: string
                'members.not'?: string
                'portfolios.any'?: string
                completed_on?: unknown
                'completed_on.before'?: string
                'completed_on.after'?: string
                'completed_at.before'?: string
                'completed_at.after'?: string
                created_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                'created_at.before'?: string
                'created_at.after'?: string
                due_on?: unknown
                'due_on.before'?: string
                'due_on.after'?: string
                'due_at.before'?: string
                'due_at.after'?: string
                start_on?: unknown
                'start_on.before'?: string
                'start_on.after'?: string
              }
            }
            output: { data?: ProjectCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                sort_by?: 'due_date' | 'created_at' | 'completed_at' | 'modified_at' | 'relevance'
                sort_ascending?: string
                completed?: string
                'teams.any'?: string
                'owner.any'?: string
                'members.any'?: string
                'members.not'?: string
                'portfolios.any'?: string
                completed_on?: unknown
                'completed_on.before'?: string
                'completed_on.after'?: string
                'completed_at.before'?: string
                'completed_at.after'?: string
                created_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                'created_at.before'?: string
                'created_at.after'?: string
                due_on?: unknown
                'due_on.before'?: string
                'due_on.after'?: string
                'due_at.before'?: string
                'due_at.after'?: string
                start_on?: unknown
                'start_on.before'?: string
                'start_on.after'?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                sort_by?: 'due_date' | 'created_at' | 'completed_at' | 'modified_at' | 'relevance'
                sort_ascending?: string
                completed?: string
                'teams.any'?: string
                'owner.any'?: string
                'members.any'?: string
                'members.not'?: string
                'portfolios.any'?: string
                completed_on?: unknown
                'completed_on.before'?: string
                'completed_on.after'?: string
                'completed_at.before'?: string
                'completed_at.after'?: string
                created_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                'created_at.before'?: string
                'created_at.after'?: string
                due_on?: unknown
                'due_on.before'?: string
                'due_on.after'?: string
                'due_at.before'?: string
                'due_at.after'?: string
                start_on?: unknown
                'start_on.before'?: string
                'start_on.after'?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                sort_by?: 'due_date' | 'created_at' | 'completed_at' | 'modified_at' | 'relevance'
                sort_ascending?: string
                completed?: string
                'teams.any'?: string
                'owner.any'?: string
                'members.any'?: string
                'members.not'?: string
                'portfolios.any'?: string
                completed_on?: unknown
                'completed_on.before'?: string
                'completed_on.after'?: string
                'completed_at.before'?: string
                'completed_at.after'?: string
                created_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                'created_at.before'?: string
                'created_at.after'?: string
                due_on?: unknown
                'due_on.before'?: string
                'due_on.after'?: string
                'due_at.before'?: string
                'due_at.after'?: string
                start_on?: unknown
                'start_on.before'?: string
                'start_on.after'?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                sort_by?: 'due_date' | 'created_at' | 'completed_at' | 'modified_at' | 'relevance'
                sort_ascending?: string
                completed?: string
                'teams.any'?: string
                'owner.any'?: string
                'members.any'?: string
                'members.not'?: string
                'portfolios.any'?: string
                completed_on?: unknown
                'completed_on.before'?: string
                'completed_on.after'?: string
                'completed_at.before'?: string
                'completed_at.after'?: string
                created_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                'created_at.before'?: string
                'created_at.after'?: string
                due_on?: unknown
                'due_on.before'?: string
                'due_on.after'?: string
                'due_at.before'?: string
                'due_at.after'?: string
                start_on?: unknown
                'start_on.before'?: string
                'start_on.after'?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                sort_by?: 'due_date' | 'created_at' | 'completed_at' | 'modified_at' | 'relevance'
                sort_ascending?: string
                completed?: string
                'teams.any'?: string
                'owner.any'?: string
                'members.any'?: string
                'members.not'?: string
                'portfolios.any'?: string
                completed_on?: unknown
                'completed_on.before'?: string
                'completed_on.after'?: string
                'completed_at.before'?: string
                'completed_at.after'?: string
                created_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                'created_at.before'?: string
                'created_at.after'?: string
                due_on?: unknown
                'due_on.before'?: string
                'due_on.after'?: string
                'due_at.before'?: string
                'due_at.after'?: string
                start_on?: unknown
                'start_on.before'?: string
                'start_on.after'?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                sort_by?: 'due_date' | 'created_at' | 'completed_at' | 'modified_at' | 'relevance'
                sort_ascending?: string
                completed?: string
                'teams.any'?: string
                'owner.any'?: string
                'members.any'?: string
                'members.not'?: string
                'portfolios.any'?: string
                completed_on?: unknown
                'completed_on.before'?: string
                'completed_on.after'?: string
                'completed_at.before'?: string
                'completed_at.after'?: string
                created_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                'created_at.before'?: string
                'created_at.after'?: string
                due_on?: unknown
                'due_on.before'?: string
                'due_on.after'?: string
                'due_at.before'?: string
                'due_at.after'?: string
                start_on?: unknown
                'start_on.before'?: string
                'start_on.after'?: string
              }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: { data?: CustomFieldSettingResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/removeCustomFieldSetting': {
      $post:
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TaskCountResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddMembersRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveMembersRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddFollowersRequestInput } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddFollowersRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveFollowersRequestInput } }
            output: { data?: ProjectResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RemoveFollowersRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectSaveAsTemplateRequestInput } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectSaveAsTemplateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectSaveAsTemplateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectSaveAsTemplateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectSaveAsTemplateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: ProjectSaveAsTemplateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/rollup': {
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rates': {
      $get:
        | {
            input: {
              query: {
                parent?: string
                resource?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: RateOrPlaceholderCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                parent?: string
                resource?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                parent?: string
                resource?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                parent?: string
                resource?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                parent?: string
                resource?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                parent?: string
                resource?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                parent?: string
                resource?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RateRequestInput }
            }
            output: { data?: RateResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rates/:rate_gid': {
      $get:
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: RateResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RateUpdateRequestInput } }
            output: { data?: RateResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RateUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RateUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RateUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RateUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RateUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { rate_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RateUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { rate_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rate_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rate_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rate_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { rate_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { rate_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { rate_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/reactions': {
      $get:
        | {
            input: {
              query: {
                target: string
                emoji_base: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: ReactionCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                target: string
                emoji_base: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                target: string
                emoji_base: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                target: string
                emoji_base: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                target: string
                emoji_base: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                target: string
                emoji_base: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tables/:table_gid/records': {
      $get:
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                modified_since?: string
                sort_by?: 'created_at'
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: RecordItemCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                modified_since?: string
                sort_by?: 'created_at'
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                modified_since?: string
                sort_by?: 'created_at'
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                modified_since?: string
                sort_by?: 'created_at'
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                modified_since?: string
                sort_by?: 'created_at'
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                modified_since?: string
                sort_by?: 'created_at'
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                modified_since?: string
                sort_by?: 'created_at'
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/records/search': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'tables.any'?: string
                'tables.not'?: string
                'tables.all'?: string
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                sort_by?: 'created_at' | 'modified_at'
                sort_ascending?: string
              }
            }
            output: { data?: RecordItemCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'tables.any'?: string
                'tables.not'?: string
                'tables.all'?: string
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                sort_by?: 'created_at' | 'modified_at'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'tables.any'?: string
                'tables.not'?: string
                'tables.all'?: string
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                sort_by?: 'created_at' | 'modified_at'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'tables.any'?: string
                'tables.not'?: string
                'tables.all'?: string
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                sort_by?: 'created_at' | 'modified_at'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'tables.any'?: string
                'tables.not'?: string
                'tables.all'?: string
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                sort_by?: 'created_at' | 'modified_at'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'tables.any'?: string
                'tables.not'?: string
                'tables.all'?: string
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                sort_by?: 'created_at' | 'modified_at'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'tables.any'?: string
                'tables.not'?: string
                'tables.all'?: string
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                sort_by?: 'created_at' | 'modified_at'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/records': {
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RecordItemRequestInput }
            }
            output: { data?: RecordItemResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RecordItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RecordItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RecordItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RecordItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RecordItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RecordItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RecordItemRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/records/:record_gid': {
      $get:
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: RecordItemResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RecordItemUpdateRequestInput } }
            output: { data?: RecordItemResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RecordItemUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RecordItemUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RecordItemUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RecordItemUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RecordItemUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RecordItemUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { record_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { record_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { record_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { record_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { record_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { record_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { record_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/roles': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: RbacRoleCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                archived?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RbacRoleRequestInput }
            }
            output: { data?: RbacRoleResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RbacRoleRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RbacRoleRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RbacRoleRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RbacRoleRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: RbacRoleRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/roles/:role_gid': {
      $get:
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: RbacRoleResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RbacRoleUpdateRequestInput } }
            output: { data?: RbacRoleResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RbacRoleUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RbacRoleUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RbacRoleUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RbacRoleUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: RbacRoleUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { role_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rule_triggers/:rule_trigger_gid/run': {
      $post:
        | {
            input: { param: { rule_trigger_gid: string } } & {
              json: { data?: RuleTriggerRequestInput }
            }
            output: { data?: RuleTriggerResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { rule_trigger_gid: string } } & {
              json: { data?: RuleTriggerRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rule_trigger_gid: string } } & {
              json: { data?: RuleTriggerRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rule_trigger_gid: string } } & {
              json: { data?: RuleTriggerRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { rule_trigger_gid: string } } & {
              json: { data?: RuleTriggerRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { rule_trigger_gid: string } } & {
              json: { data?: RuleTriggerRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { rule_trigger_gid: string } } & {
              json: { data?: RuleTriggerRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sections/:section_gid': {
      $get:
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: SectionResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: { data?: SectionResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } }
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
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: SectionCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: { data?: SectionResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: SectionRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sections/:section_gid/addTask': {
      $post:
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: SectionTaskInsertRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: SectionTaskInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: SectionTaskInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: SectionTaskInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: SectionTaskInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: SectionTaskInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:project_gid/sections/insert': {
      $post:
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ProjectSectionInsertRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ProjectSectionInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ProjectSectionInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ProjectSectionInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ProjectSectionInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ProjectSectionInsertRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/status_updates/:status_update_gid': {
      $get:
        | {
            input: { param: { status_update_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: StatusUpdateResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { status_update_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { status_update_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { status_update_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { status_update_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { status_update_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { status_update_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { status_update_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { status_update_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { status_update_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { status_update_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { status_update_gid: string } } & { query: { opt_pretty?: unknown } }
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
                limit?: unknown
                offset?: string
                parent: string
                created_since?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: StatusUpdateCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                created_since?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                created_since?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                created_since?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                created_since?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                parent: string
                created_since?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: StatusUpdateRequestInput }
            }
            output: { data?: StatusUpdateResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: StatusUpdateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: StatusUpdateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: StatusUpdateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: StatusUpdateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: StatusUpdateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/stories/:story_gid': {
      $get:
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: StoryResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: { data?: StoryResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { story_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { story_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { story_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { story_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { story_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { story_gid: string } } & { query: { opt_pretty?: unknown } }
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
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: StoryCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskStoryCreateRequestInput } }
            output: { data?: StoryResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskStoryCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskStoryCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskStoryCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskStoryCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskStoryCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/records/:record_gid/stories': {
      $get:
        | {
            input: { param: { record_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: StoryCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { record_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { record_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { record_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { record_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { record_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: { data?: StoryResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { record_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/goals/:goal_gid/stories': {
      $get:
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: StoryCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                created_after?: string
                resource_subtype?: 'comment_added'
                sort_ascending?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: { data?: StoryResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { goal_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: StoryBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/tables': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: TableCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tables': {
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TableRequestInput }
            }
            output: { data?: TableResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TableRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TableRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TableRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TableRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TableRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TableRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tables/:table_gid': {
      $get:
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TableResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TableUpdateRequestInput } }
            output: { data?: TableResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TableUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TableUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TableUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TableUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TableUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TableUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tables/:table_gid/addCustomFieldSetting': {
      $post:
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: { data?: CustomFieldTableSettingResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { table_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: AddCustomFieldSettingRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tables/:table_gid/removeCustomFieldSetting': {
      $post:
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { table_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: RemoveCustomFieldSettingRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tables/:table_gid/getCustomFieldSettings': {
      $get:
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: CustomFieldTableSettingResponse[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tables/:table_gid/custom_field_settings': {
      $get:
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: CustomFieldTableSettingResponse[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { table_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
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
                limit?: unknown
                offset?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: TagCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TagCreateRequestInput }
            }
            output: { data?: TagResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TagCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TagCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TagCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TagCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TagCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags/:tag_gid': {
      $get:
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TagResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagBaseInput } }
            output: { data?: TagResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagBaseInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { tag_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_gid: string } } & { query: { opt_pretty?: unknown } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TagCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
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
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: TagCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagCreateTagForWorkspaceRequestInput } }
            output: { data?: TagResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagCreateTagForWorkspaceRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagCreateTagForWorkspaceRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagCreateTagForWorkspaceRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagCreateTagForWorkspaceRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TagCreateTagForWorkspaceRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/task_templates': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                project?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: TaskTemplateCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                project?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                project?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                project?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                project?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                project?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/task_templates/:task_template_gid': {
      $get:
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TaskTemplateResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { task_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_template_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/task_templates/:task_template_gid/instantiateTask': {
      $post:
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskTemplateInstantiateTaskRequestInput } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskTemplateInstantiateTaskRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskTemplateInstantiateTaskRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskTemplateInstantiateTaskRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskTemplateInstantiateTaskRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_template_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskTemplateInstantiateTaskRequestInput } }
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
                limit?: unknown
                offset?: string
                assignee?: string
                project?: string
                section?: string
                workspace?: string
                completed_since?: string
                modified_since?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: TaskCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                assignee?: string
                project?: string
                section?: string
                workspace?: string
                completed_since?: string
                modified_since?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                assignee?: string
                project?: string
                section?: string
                workspace?: string
                completed_since?: string
                modified_since?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                assignee?: string
                project?: string
                section?: string
                workspace?: string
                completed_since?: string
                modified_since?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                assignee?: string
                project?: string
                section?: string
                workspace?: string
                completed_since?: string
                modified_since?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                assignee?: string
                project?: string
                section?: string
                workspace?: string
                completed_since?: string
                modified_since?: string
                custom_type?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TaskCreateRequestInput }
            }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TaskCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TaskCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TaskCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TaskCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TaskCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid': {
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskUpdateRequestInput } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskDuplicateRequestInput } }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskDuplicateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskDuplicateRequestInput } }
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
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TaskCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                completed_since?: string
              }
            }
            output: { data?: TaskCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                completed_since?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                completed_since?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                completed_since?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                completed_since?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { section_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                completed_since?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TaskCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tag_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
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
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TaskCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: {
                opt_fields?: unknown
                completed_since?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
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
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: TaskCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskCreateRequestInput } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskCreateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskCreateRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskSetParentRequestInput } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskSetParentRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskSetParentRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskSetParentRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskSetParentRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskSetParentRequestInput } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TaskCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addDependencies': {
      $post:
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput & DependencyTypeRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput & DependencyTypeRequestInput }
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
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependenciesRequestInput }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TaskCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addDependents': {
      $post:
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput & DependencyTypeRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput & DependencyTypeRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/removeDependents': {
      $post:
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: ModifyDependentsRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addProject': {
      $post:
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddProjectRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/removeProject': {
      $post:
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveProjectRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveProjectRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/addTag': {
      $post:
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddTagRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskAddTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/removeTag': {
      $post:
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveTagRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveTagRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TaskRemoveTagRequestInput }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskAddFollowersRequestInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskRemoveFollowersRequestInput } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskRemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskRemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskRemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskRemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TaskRemoveFollowersRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/rollup': {
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: JobCompact | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/tasks/custom_id/:custom_id': {
      $get:
        | {
            input: { param: { workspace_gid: string; custom_id: string } }
            output: { data?: TaskResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string; custom_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string; custom_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string; custom_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string; custom_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string; custom_id: string } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                resource_subtype?: 'default_task' | 'milestone' | 'approval' | 'custom'
                'assignee.any'?: string
                'assignee.not'?: string
                'portfolios.any'?: string
                'projects.any'?: string
                'projects.not'?: string
                'projects.all'?: string
                'sections.any'?: string
                'sections.not'?: string
                'sections.all'?: string
                'tags.any'?: string
                'tags.not'?: string
                'tags.all'?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'created_by.any'?: string
                'created_by.not'?: string
                'assigned_by.any'?: string
                'assigned_by.not'?: string
                'liked_by.not'?: string
                'commented_on_by.not'?: string
                'due_on.before'?: string
                'due_on.after'?: string
                due_on?: unknown
                'due_at.before'?: string
                'due_at.after'?: string
                'start_on.before'?: string
                'start_on.after'?: string
                start_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                'completed_on.before'?: string
                'completed_on.after'?: string
                completed_on?: unknown
                'completed_at.before'?: string
                'completed_at.after'?: string
                'modified_on.before'?: string
                'modified_on.after'?: string
                modified_on?: unknown
                'modified_at.before'?: string
                'modified_at.after'?: string
                is_blocking?: string
                is_blocked?: string
                has_attachment?: string
                completed?: string
                is_subtask?: string
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | 'relevance'
                sort_ascending?: string
              }
            }
            output: { data?: TaskCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                resource_subtype?: 'default_task' | 'milestone' | 'approval' | 'custom'
                'assignee.any'?: string
                'assignee.not'?: string
                'portfolios.any'?: string
                'projects.any'?: string
                'projects.not'?: string
                'projects.all'?: string
                'sections.any'?: string
                'sections.not'?: string
                'sections.all'?: string
                'tags.any'?: string
                'tags.not'?: string
                'tags.all'?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'created_by.any'?: string
                'created_by.not'?: string
                'assigned_by.any'?: string
                'assigned_by.not'?: string
                'liked_by.not'?: string
                'commented_on_by.not'?: string
                'due_on.before'?: string
                'due_on.after'?: string
                due_on?: unknown
                'due_at.before'?: string
                'due_at.after'?: string
                'start_on.before'?: string
                'start_on.after'?: string
                start_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                'completed_on.before'?: string
                'completed_on.after'?: string
                completed_on?: unknown
                'completed_at.before'?: string
                'completed_at.after'?: string
                'modified_on.before'?: string
                'modified_on.after'?: string
                modified_on?: unknown
                'modified_at.before'?: string
                'modified_at.after'?: string
                is_blocking?: string
                is_blocked?: string
                has_attachment?: string
                completed?: string
                is_subtask?: string
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | 'relevance'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                resource_subtype?: 'default_task' | 'milestone' | 'approval' | 'custom'
                'assignee.any'?: string
                'assignee.not'?: string
                'portfolios.any'?: string
                'projects.any'?: string
                'projects.not'?: string
                'projects.all'?: string
                'sections.any'?: string
                'sections.not'?: string
                'sections.all'?: string
                'tags.any'?: string
                'tags.not'?: string
                'tags.all'?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'created_by.any'?: string
                'created_by.not'?: string
                'assigned_by.any'?: string
                'assigned_by.not'?: string
                'liked_by.not'?: string
                'commented_on_by.not'?: string
                'due_on.before'?: string
                'due_on.after'?: string
                due_on?: unknown
                'due_at.before'?: string
                'due_at.after'?: string
                'start_on.before'?: string
                'start_on.after'?: string
                start_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                'completed_on.before'?: string
                'completed_on.after'?: string
                completed_on?: unknown
                'completed_at.before'?: string
                'completed_at.after'?: string
                'modified_on.before'?: string
                'modified_on.after'?: string
                modified_on?: unknown
                'modified_at.before'?: string
                'modified_at.after'?: string
                is_blocking?: string
                is_blocked?: string
                has_attachment?: string
                completed?: string
                is_subtask?: string
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | 'relevance'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                resource_subtype?: 'default_task' | 'milestone' | 'approval' | 'custom'
                'assignee.any'?: string
                'assignee.not'?: string
                'portfolios.any'?: string
                'projects.any'?: string
                'projects.not'?: string
                'projects.all'?: string
                'sections.any'?: string
                'sections.not'?: string
                'sections.all'?: string
                'tags.any'?: string
                'tags.not'?: string
                'tags.all'?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'created_by.any'?: string
                'created_by.not'?: string
                'assigned_by.any'?: string
                'assigned_by.not'?: string
                'liked_by.not'?: string
                'commented_on_by.not'?: string
                'due_on.before'?: string
                'due_on.after'?: string
                due_on?: unknown
                'due_at.before'?: string
                'due_at.after'?: string
                'start_on.before'?: string
                'start_on.after'?: string
                start_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                'completed_on.before'?: string
                'completed_on.after'?: string
                completed_on?: unknown
                'completed_at.before'?: string
                'completed_at.after'?: string
                'modified_on.before'?: string
                'modified_on.after'?: string
                modified_on?: unknown
                'modified_at.before'?: string
                'modified_at.after'?: string
                is_blocking?: string
                is_blocked?: string
                has_attachment?: string
                completed?: string
                is_subtask?: string
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | 'relevance'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                resource_subtype?: 'default_task' | 'milestone' | 'approval' | 'custom'
                'assignee.any'?: string
                'assignee.not'?: string
                'portfolios.any'?: string
                'projects.any'?: string
                'projects.not'?: string
                'projects.all'?: string
                'sections.any'?: string
                'sections.not'?: string
                'sections.all'?: string
                'tags.any'?: string
                'tags.not'?: string
                'tags.all'?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'created_by.any'?: string
                'created_by.not'?: string
                'assigned_by.any'?: string
                'assigned_by.not'?: string
                'liked_by.not'?: string
                'commented_on_by.not'?: string
                'due_on.before'?: string
                'due_on.after'?: string
                due_on?: unknown
                'due_at.before'?: string
                'due_at.after'?: string
                'start_on.before'?: string
                'start_on.after'?: string
                start_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                'completed_on.before'?: string
                'completed_on.after'?: string
                completed_on?: unknown
                'completed_at.before'?: string
                'completed_at.after'?: string
                'modified_on.before'?: string
                'modified_on.after'?: string
                modified_on?: unknown
                'modified_at.before'?: string
                'modified_at.after'?: string
                is_blocking?: string
                is_blocked?: string
                has_attachment?: string
                completed?: string
                is_subtask?: string
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | 'relevance'
                sort_ascending?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                text?: string
                resource_subtype?: 'default_task' | 'milestone' | 'approval' | 'custom'
                'assignee.any'?: string
                'assignee.not'?: string
                'portfolios.any'?: string
                'projects.any'?: string
                'projects.not'?: string
                'projects.all'?: string
                'sections.any'?: string
                'sections.not'?: string
                'sections.all'?: string
                'tags.any'?: string
                'tags.not'?: string
                'tags.all'?: string
                'teams.any'?: string
                'followers.any'?: string
                'followers.not'?: string
                'created_by.any'?: string
                'created_by.not'?: string
                'assigned_by.any'?: string
                'assigned_by.not'?: string
                'liked_by.not'?: string
                'commented_on_by.not'?: string
                'due_on.before'?: string
                'due_on.after'?: string
                due_on?: unknown
                'due_at.before'?: string
                'due_at.after'?: string
                'start_on.before'?: string
                'start_on.after'?: string
                start_on?: unknown
                'created_on.before'?: string
                'created_on.after'?: string
                created_on?: unknown
                'created_at.before'?: string
                'created_at.after'?: string
                'completed_on.before'?: string
                'completed_on.after'?: string
                completed_on?: unknown
                'completed_at.before'?: string
                'completed_at.after'?: string
                'modified_on.before'?: string
                'modified_on.after'?: string
                modified_on?: unknown
                'modified_at.before'?: string
                'modified_at.after'?: string
                is_blocking?: string
                is_blocked?: string
                has_attachment?: string
                completed?: string
                is_subtask?: string
                sort_by?:
                  | 'due_date'
                  | 'created_at'
                  | 'completed_at'
                  | 'likes'
                  | 'modified_at'
                  | 'relevance'
                sort_ascending?: string
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TeamMembershipCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
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
                team?: string
                user?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TeamMembershipCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                team?: string
                user?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                team?: string
                user?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                team?: string
                user?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                team?: string
                user?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                team?: string
                user?: string
                workspace?: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TeamMembershipCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TeamMembershipCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                workspace: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
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
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TeamRequestInput }
            }
            output: { data?: TeamResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TeamRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TeamRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TeamRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TeamRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TeamRequestInput }
            }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TeamResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamRequestInput } }
            output: { data?: TeamResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamRequestInput } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TeamCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                organization: string
              }
            }
            output: { data?: TeamCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
                organization: string
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamAddUserRequestInput } }
            output: { data?: TeamMembershipCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TeamAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:team_gid/removeUser': {
      $post:
        | {
            input: { param: { team_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TeamRemoveUserRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TeamRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TeamRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TeamRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TeamRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: TeamRemoveUserRequestInput }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TimePeriodBase | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_period_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
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
                start_on?: string
                end_on?: string
                workspace: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: TimePeriodCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_on?: string
                end_on?: string
                workspace: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_on?: string
                end_on?: string
                workspace: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                start_on?: string
                end_on?: string
                workspace: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_on?: string
                end_on?: string
                workspace: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                start_on?: string
                end_on?: string
                workspace: string
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/time_tracking_categories/:time_tracking_category_gid': {
      $get:
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TimeTrackingCategoryResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TimeTrackingCategoryUpdateRequestInput } }
            output: { data?: TimeTrackingCategoryResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TimeTrackingCategoryUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TimeTrackingCategoryUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TimeTrackingCategoryUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TimeTrackingCategoryUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: TimeTrackingCategoryUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/time_tracking_categories/:time_tracking_category_gid/time_tracking_entries': {
      $get:
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: {
                start_date?: string
                end_date?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: TimeTrackingEntryCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: {
                start_date?: string
                end_date?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: {
                start_date?: string
                end_date?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: {
                start_date?: string
                end_date?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: {
                start_date?: string
                end_date?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_tracking_category_gid: string } } & {
              query: {
                start_date?: string
                end_date?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/time_tracking_categories': {
      $get:
        | {
            input: {
              query: {
                workspace: string
                is_archived?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: TimeTrackingCategoryCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspace: string
                is_archived?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                workspace: string
                is_archived?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                workspace: string
                is_archived?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                workspace: string
                is_archived?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                workspace: string
                is_archived?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TimeTrackingCategoryCreateRequestInput }
            }
            output: { data?: TimeTrackingCategoryResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TimeTrackingCategoryCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TimeTrackingCategoryCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TimeTrackingCategoryCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TimeTrackingCategoryCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: TimeTrackingCategoryCreateRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tasks/:task_gid/time_tracking_entries': {
      $get:
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: TimeTrackingEntryCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: {
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CreateTimeTrackingEntryRequestInput } }
            output: { data?: TimeTrackingEntryBase | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CreateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CreateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CreateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CreateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CreateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: CreateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/time_tracking_entries/:time_tracking_entry_gid': {
      $get:
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TimeTrackingEntryBase | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimeTrackingEntryRequestInput } }
            output: { data?: TimeTrackingEntryBase | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimeTrackingEntryRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { time_tracking_entry_gid: string } } & {
              query: { opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/time_tracking_entries': {
      $get:
        | {
            input: {
              query: {
                task?: string
                attributable_to?: string
                portfolio?: string
                user?: string
                assignee?: string
                workspace?: string
                entered_on_start_date?: string
                entered_on_end_date?: string
                timesheet_approval_status?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: TimeTrackingEntryCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                task?: string
                attributable_to?: string
                portfolio?: string
                user?: string
                assignee?: string
                workspace?: string
                entered_on_start_date?: string
                entered_on_end_date?: string
                timesheet_approval_status?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                task?: string
                attributable_to?: string
                portfolio?: string
                user?: string
                assignee?: string
                workspace?: string
                entered_on_start_date?: string
                entered_on_end_date?: string
                timesheet_approval_status?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                task?: string
                attributable_to?: string
                portfolio?: string
                user?: string
                assignee?: string
                workspace?: string
                entered_on_start_date?: string
                entered_on_end_date?: string
                timesheet_approval_status?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                task?: string
                attributable_to?: string
                portfolio?: string
                user?: string
                assignee?: string
                workspace?: string
                entered_on_start_date?: string
                entered_on_end_date?: string
                timesheet_approval_status?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                task?: string
                attributable_to?: string
                portfolio?: string
                user?: string
                assignee?: string
                workspace?: string
                entered_on_start_date?: string
                entered_on_end_date?: string
                timesheet_approval_status?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                task?: string
                attributable_to?: string
                portfolio?: string
                user?: string
                assignee?: string
                workspace?: string
                entered_on_start_date?: string
                entered_on_end_date?: string
                timesheet_approval_status?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/timesheet_approval_statuses/:timesheet_approval_status_gid': {
      $get:
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: TimesheetApprovalStatusResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimesheetApprovalStatusRequestInput } }
            output: { data?: TimesheetApprovalStatusResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimesheetApprovalStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimesheetApprovalStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimesheetApprovalStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimesheetApprovalStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimesheetApprovalStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { timesheet_approval_status_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UpdateTimesheetApprovalStatusRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/timesheet_approval_statuses': {
      $get:
        | {
            input: {
              query: {
                workspace: string
                user?: string
                from_date?: string
                to_date?: string
                approval_statuses?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: {
              data?: TimesheetApprovalStatusCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspace: string
                user?: string
                from_date?: string
                to_date?: string
                approval_statuses?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                workspace: string
                user?: string
                from_date?: string
                to_date?: string
                approval_statuses?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                workspace: string
                user?: string
                from_date?: string
                to_date?: string
                approval_statuses?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                workspace: string
                user?: string
                from_date?: string
                to_date?: string
                approval_statuses?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                workspace: string
                user?: string
                from_date?: string
                to_date?: string
                approval_statuses?: string
                limit?: unknown
                offset?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CreateTimesheetApprovalStatusRequestInput }
            }
            output: { data?: TimesheetApprovalStatusResponse | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CreateTimesheetApprovalStatusRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CreateTimesheetApprovalStatusRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CreateTimesheetApprovalStatusRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CreateTimesheetApprovalStatusRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CreateTimesheetApprovalStatusRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: CreateTimesheetApprovalStatusRequestInput }
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
                opt_fields?: unknown
                resource_type:
                  | 'actor'
                  | 'agent'
                  | 'custom_field'
                  | 'goal'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'team'
                  | 'user'
                type?: 'custom_field' | 'portfolio' | 'project' | 'tag' | 'task' | 'user'
                query?: string
                count?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: AsanaNamedResource[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                resource_type:
                  | 'actor'
                  | 'agent'
                  | 'custom_field'
                  | 'goal'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'team'
                  | 'user'
                type?: 'custom_field' | 'portfolio' | 'project' | 'tag' | 'task' | 'user'
                query?: string
                count?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                resource_type:
                  | 'actor'
                  | 'agent'
                  | 'custom_field'
                  | 'goal'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'team'
                  | 'user'
                type?: 'custom_field' | 'portfolio' | 'project' | 'tag' | 'task' | 'user'
                query?: string
                count?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                resource_type:
                  | 'actor'
                  | 'agent'
                  | 'custom_field'
                  | 'goal'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'team'
                  | 'user'
                type?: 'custom_field' | 'portfolio' | 'project' | 'tag' | 'task' | 'user'
                query?: string
                count?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                resource_type:
                  | 'actor'
                  | 'agent'
                  | 'custom_field'
                  | 'goal'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'team'
                  | 'user'
                type?: 'custom_field' | 'portfolio' | 'project' | 'tag' | 'task' | 'user'
                query?: string
                count?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: {
                opt_fields?: unknown
                resource_type:
                  | 'actor'
                  | 'agent'
                  | 'custom_field'
                  | 'goal'
                  | 'project'
                  | 'project_template'
                  | 'portfolio'
                  | 'tag'
                  | 'task'
                  | 'team'
                  | 'user'
                type?: 'custom_field' | 'portfolio' | 'project' | 'tag' | 'task' | 'user'
                query?: string
                count?: unknown
                opt_pretty?: unknown
              }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: UserTaskListCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_task_list_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace: string }
            }
            output: { data?: UserTaskListCompact | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace: string }
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
                opt_fields?: unknown
                workspace?: string
                team?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: UserCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                workspace?: string
                team?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                workspace?: string
                team?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                workspace?: string
                team?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                workspace?: string
                team?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                workspace?: string
                team?: string
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            }
            output: { data?: UserResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            } & { json: { data?: UserUpdateRequestInput } }
            output: { data?: UserResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            } & { json: { data?: UserUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            } & { json: { data?: UserUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            } & { json: { data?: UserUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            } & { json: { data?: UserUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; workspace?: string }
            } & { json: { data?: UserUpdateRequestInput } }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
            output: { data?: AsanaNamedResource[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
    '/teams/:team_gid/users': {
      $get:
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: { data?: UserCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { team_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: { data?: UserCompact[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown; offset?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/users/:user_gid': {
      $get:
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: UserResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UserUpdateRequestInput } }
            output: { data?: UserResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UserUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UserUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UserUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UserUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string; user_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: UserUpdateRequestInput } }
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
                limit?: unknown
                offset?: string
                workspace: string
                resource?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: { data?: WebhookResponse[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                resource?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                resource?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                resource?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                resource?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: string
                workspace: string
                resource?: string
                opt_fields?: unknown
                opt_pretty?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: WebhookRequestInput }
            }
            output: { data?: WebhookResponse | undefined; 'X-Hook-Secret'?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: WebhookRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: WebhookRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: WebhookRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: WebhookRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { opt_fields?: unknown; opt_pretty?: unknown } } & {
              json: { data?: WebhookRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/:webhook_gid': {
      $get:
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: WebhookResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WebhookUpdateRequestInput } }
            output: { data?: WebhookResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WebhookUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WebhookUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WebhookUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WebhookUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WebhookUpdateRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { webhook_gid: string } } & { query: { opt_pretty?: unknown } }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_gid: string } } & { query: { opt_pretty?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_gid: string } } & { query: { opt_pretty?: unknown } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: WorkspaceMembershipResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_membership_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
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
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: {
              data?: WorkspaceMembershipCompact[] | undefined
              next_page?: NextPage | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_gid: string } } & {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
            opt_fields?: unknown
            user?: string
            opt_pretty?: unknown
            limit?: unknown
            offset?: string
          }
        }
        output: {
          data?: WorkspaceMembershipCompact[] | undefined
          next_page?: NextPage | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workspaces': {
      $get:
        | {
            input: {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: { data?: WorkspaceCompact[] | undefined; next_page?: NextPage | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                opt_fields?: unknown
                opt_pretty?: unknown
                limit?: unknown
                offset?: string
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: { data?: WorkspaceResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceCompactInput } }
            output: { data?: WorkspaceResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceCompactInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceCompactInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceCompactInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceCompactInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceCompactInput } }
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
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceAddUserRequestInput } }
            output: { data?: UserBaseResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_fields?: unknown; opt_pretty?: unknown }
            } & { json: { data?: WorkspaceAddUserRequestInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/removeUser': {
      $post:
        | {
            input: { param: { workspace_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: WorkspaceRemoveUserRequestInput }
            }
            output: { data?: EmptyResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: WorkspaceRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: WorkspaceRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: WorkspaceRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: WorkspaceRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & { query: { opt_pretty?: unknown } } & {
              json: { data?: WorkspaceRemoveUserRequestInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/:workspace_gid/events': {
      $get:
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: unknown; sync?: string }
            }
            output: {
              data?: EventResponse[] | undefined
              sync?: string | undefined
              has_more?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: unknown; sync?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: unknown; sync?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: unknown; sync?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: unknown; sync?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspace_gid: string } } & {
              query: { opt_pretty?: unknown; sync?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
