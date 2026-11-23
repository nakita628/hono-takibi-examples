type Variable = {
  description?: (string | null) | undefined
  environment_values?: { [x: string]: string | null } | undefined
  inserted_at: string
  key: string
  type: 'public' | 'secret'
  updated_at: string
  value?: (string | null) | undefined
}
type VariableRequest = {
  description?: (string | null) | undefined
  environment_values?: { [x: string]: string | null } | undefined
  type: 'public' | 'secret'
  value?: (string | null) | undefined
}
type WorkflowWaitForEventIntegrationSourceEvent = {
  event_key: string
  event_type: 'integration_source'
  integration_source_key: string
  recipient_path?: (string | null) | undefined
}
type WorkflowWaitForEventAudienceEvent = {
  audience_key: string
  event_key: 'enter' | 'exit'
  event_type: 'audience'
}
type Condition = {
  argument?: (string | null) | undefined
  operator:
    | 'equal_to'
    | 'not_equal_to'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equal_to'
    | 'less_than_or_equal_to'
    | 'contains'
    | 'not_contains'
    | 'contains_all'
    | 'not_contains_all'
    | 'is_timestamp_before'
    | 'is_timestamp_on_or_after'
    | 'is_timestamp_between'
    | 'is_between'
    | 'empty'
    | 'not_empty'
    | 'exists'
    | 'not_exists'
    | 'is_timestamp'
    | 'is_timestamp_before_now'
    | 'is_timestamp_on_or_after_now'
    | 'is_audience_member'
    | 'is_not_audience_member'
  variable: string
}
type ConditionGroupAllMatch = { all?: Condition[] | undefined }
type ConditionGroupAnyMatch = { any?: (Condition | ConditionGroupAllMatch)[] | undefined }
type ConditionGroup = ConditionGroupAllMatch | ConditionGroupAnyMatch
type GoalCondition = {
  event: WorkflowWaitForEventIntegrationSourceEvent | WorkflowWaitForEventAudienceEvent
  match_conditions?: ConditionGroup[] | undefined
}
type Goal = {
  condition: GoalCondition
  created_at: string
  description?: (string | null) | undefined
  environment: string
  key: string
  name: string
  sha: string
  updated_at: string
}
type PageInfo = {
  after?: (string | null) | undefined
  before?: (string | null) | undefined
  page_size: number
}
type GoalCompletedEvent = { event_type: 'goal_completed' }
type ExitCriteriaIntegrationSourceEvent = {
  event_key: string
  event_type: 'integration_source'
  integration_source_key: string
  recipient_path: string
}
type ExitCriteria =
  | {
      event:
        | GoalCompletedEvent
        | ExitCriteriaIntegrationSourceEvent
        | WorkflowWaitForEventAudienceEvent
      match_conditions?: ConditionGroup[] | undefined
    }[]
  | null
type SendWindow = {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  from?: (string | null) | undefined
  type: 'send' | 'do_not_send'
  until?: (string | null) | undefined
}
type WebhookTemplate = {
  body?: (string | null) | undefined
  headers?: { key: string; value: string }[] | undefined
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  query_params?: { key: string; value: string }[] | undefined
  url: string
}
type WorkflowWebhookStep = {
  channel_group_key?: (string | null) | undefined
  channel_key?: (string | null) | undefined
  channel_type?: 'http' | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  send_windows?: (SendWindow[] | null) | undefined
  template: WebhookTemplate
  type: 'channel'
}
type InAppFeedChannelSettings = { link_tracking?: boolean | undefined }
type InAppFeedTemplate = {
  action_buttons?: { action: string; label: string }[] | undefined
  action_url?: (string | null) | undefined
  markdown_body: string
}
type WorkflowInAppFeedStep = {
  channel_group_key?: (string | null) | undefined
  channel_key?: (string | null) | undefined
  channel_overrides?: InAppFeedChannelSettings | ({ [x: string]: unknown } | null) | undefined
  channel_type?: 'in_app_feed' | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  send_windows?: (SendWindow[] | null) | undefined
  template: InAppFeedTemplate
  type: 'channel'
}
type WorkflowInAppGuideStep = {
  channel_group_key?: (string | null) | undefined
  channel_key?: (string | null) | undefined
  channel_type: 'in_app_guide'
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  guide_key?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  send_windows?: (SendWindow[] | null) | undefined
  type: 'channel'
}
type ChatChannelSettings = {
  email_based_user_id_resolution?: boolean | undefined
  link_tracking?: boolean | undefined
  link_tracking_uses_short_links?: boolean | undefined
}
type ChatTemplate = {
  json_body?: (string | null) | undefined
  markdown_body: string
  summary?: string | undefined
}
type WorkflowChatStep = {
  channel_group_key?: (string | null) | undefined
  channel_key?: (string | null) | undefined
  channel_overrides?: ChatChannelSettings | ({ [x: string]: unknown } | null) | undefined
  channel_type?: 'chat' | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  send_windows?: (SendWindow[] | null) | undefined
  template: ChatTemplate
  type: 'channel'
}
type SmsChannelSettings = { link_tracking?: boolean | undefined }
type SmsTemplate = {
  settings?:
    | { payload_overrides?: (string | null) | undefined; to_number?: (string | null) | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
  text_body: string
}
type WorkflowSmsStep = {
  channel_group_key?: (string | null) | undefined
  channel_key?: (string | null) | undefined
  channel_overrides?: SmsChannelSettings | ({ [x: string]: unknown } | null) | undefined
  channel_type?: 'sms' | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  send_windows?: (SendWindow[] | null) | undefined
  template: SmsTemplate
  type: 'channel'
}
type PushChannelSettings = { token_deregistration?: boolean | undefined }
type PushTemplate = {
  settings: { delivery_type: 'silent' | 'content'; payload_overrides?: string | undefined }
  text_body: string
  title: string
}
type WorkflowPushStep = {
  channel_group_key?: (string | null) | undefined
  channel_key?: (string | null) | undefined
  channel_overrides?: PushChannelSettings | ({ [x: string]: unknown } | null) | undefined
  channel_type?: 'push' | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  send_windows?: (SendWindow[] | null) | undefined
  template: PushTemplate
  type: 'channel'
}
type EmailChannelSettings = {
  bcc_address?: (string | null) | undefined
  cc_address?: (string | null) | undefined
  from_address?: (string | null) | undefined
  from_name?: (string | null) | undefined
  json_overrides?: (string | null) | undefined
  link_tracking?: boolean | undefined
  open_tracking?: boolean | undefined
  reply_to_address?: (string | null) | undefined
  to_address?: string | undefined
}
type EmailButtonSetBlockButton = {
  action: string
  label: string
  size_attrs?:
    | { is_fullwidth?: boolean | undefined; size?: 'sm' | 'md' | 'lg' | undefined }
    | undefined
  style_attrs?:
    | {
        background_color?: string | undefined
        border_color?: string | undefined
        border_radius?: number | undefined
        border_width?: number | undefined
        text_color?: string | undefined
      }
    | undefined
  variant: 'solid' | 'outline'
}
type EmailButtonSetBlock = {
  buttons: EmailButtonSetBlockButton[]
  id?: string | undefined
  layout_attrs?:
    | {
        column_gap: number
        horizontal_align: 'left' | 'center' | 'right'
        padding_bottom: number
        padding_left: number
        padding_right: number
        padding_top: number
      }
    | undefined
  type: 'button_set'
  version?: number | undefined
}
type EmailDividerBlock = {
  id?: string | undefined
  layout_attrs?:
    | { padding_bottom: number; padding_left: number; padding_right: number; padding_top: number }
    | undefined
  type: 'divider'
  version?: number | undefined
}
type EmailHtmlBlock = {
  content: string
  id?: string | undefined
  layout_attrs?:
    | { padding_bottom: number; padding_left: number; padding_right: number; padding_top: number }
    | undefined
  type: 'html'
  version?: number | undefined
}
type EmailImageBlock = {
  action?: (string | null) | undefined
  alt?: (string | null) | undefined
  id?: string | undefined
  layout_attrs?:
    | {
        horizontal_align: 'left' | 'center' | 'right'
        padding_bottom: number
        padding_left: number
        padding_right: number
        padding_top: number
      }
    | undefined
  style_attrs?: { width?: string | undefined } | undefined
  type: 'image'
  url: string
  version?: number | undefined
}
type EmailMarkdownBlock = {
  content: string
  id?: string | undefined
  layout_attrs?:
    | { padding_bottom: number; padding_left: number; padding_right: number; padding_top: number }
    | undefined
  type: 'markdown'
  variant?: 'default' | undefined
  version?: number | undefined
}
type EmailPartialBlock = {
  attrs: { [x: string]: unknown }
  id?: string | undefined
  key: string
  layout_attrs?:
    | { padding_bottom: number; padding_left: number; padding_right: number; padding_top: number }
    | undefined
  name: string
  type: 'partial'
  version?: number | undefined
}
type EmailVisualBlocks = (
  | EmailButtonSetBlock
  | EmailDividerBlock
  | EmailHtmlBlock
  | EmailImageBlock
  | EmailMarkdownBlock
  | EmailPartialBlock
)[]
type EmailTemplate = {
  html_body?: (string | null) | undefined
  is_mjml?: (boolean | null) | undefined
  settings: {
    attachment_key?: (string | null) | undefined
    layout_key?: (string | null) | undefined
    pre_content?: (string | null) | undefined
  }
  subject: string
  text_body?: (string | null) | undefined
  visual_blocks?: EmailVisualBlocks | ({ [x: string]: unknown } | null) | undefined
}
type WorkflowEmailStep = {
  channel_group_key?: (string | null) | undefined
  channel_key?: (string | null) | undefined
  channel_overrides?: EmailChannelSettings | ({ [x: string]: unknown } | null) | undefined
  channel_type?: 'email' | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  send_windows?: (SendWindow[] | null) | undefined
  template: EmailTemplate
  type: 'channel'
}
type WorkflowAIAgentStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: {
    halt_on_error?: (boolean | null) | undefined
    model:
      | 'anthropic:claude-haiku-4-5'
      | 'anthropic:claude-sonnet-5'
      | 'anthropic:claude-opus-5'
      | 'anthropic:claude-sonnet-4-5'
      | 'anthropic:claude-sonnet-4-6'
      | 'anthropic:claude-opus-4-5'
      | 'anthropic:claude-opus-4-6'
      | 'openai:gpt-5.6-sol'
      | 'openai:gpt-5.6-terra'
      | 'openai:gpt-5.6-luna'
      | 'openai:gpt-5.2-chat-latest'
      | 'openai:gpt-5.2'
      | 'openai:gpt-5.2-pro'
    request_prompt: string
    response_schema?: (string | null) | undefined
    response_type: 'text' | 'json'
    web_search_enabled?: (boolean | null) | undefined
  }
  type: 'ai_agent'
}
type Duration = { unit: 'minutes' | 'hours' | 'days' | 'weeks' | 'months'; value: number }
type DelayTimeWindow = {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  from?: (string | null) | undefined
  type: 'open' | 'closed'
  until?: (string | null) | undefined
}
type WorkflowDelayStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: {
    delay_for?: Duration | ({ [x: string]: unknown } | null) | undefined
    delay_until_field_path?: string | undefined
    delay_until_time_windows?: (DelayTimeWindow[] | null) | undefined
    workflow_version_mode?: 'pinned' | 'latest' | undefined
  }
  type: 'delay'
}
type WorkflowWaitForEventMessageEvent = {
  event_key:
    | 'created'
    | 'queued'
    | 'sent'
    | 'not_sent'
    | 'delivered'
    | 'delivery_attempted'
    | 'undelivered'
    | 'bounced'
    | 'complaint'
    | 'read'
    | 'unread'
    | 'seen'
    | 'unseen'
    | 'archived'
    | 'unarchived'
    | 'interacted'
    | 'link_clicked'
  event_type: 'message'
  source_key: string
  source_type: 'workflow' | 'broadcast' | 'guide'
}
type WorkflowWaitForEventWorkflowEvent = {
  event_key: 'started' | 'completed'
  event_type: 'workflow'
  source_key: string
}
type WorkflowWaitForEventRecipientEvent = {
  event_key?: 'updated' | undefined
  event_type: 'recipient'
}
type WorkflowWaitForEventStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings:
    | {
        event: WorkflowWaitForEventIntegrationSourceEvent
        expires_after?: Duration | ({ [x: string]: unknown } | null) | undefined
        match_conditions?:
          | { conditions?: Condition[] | undefined; operator?: 'and' | undefined }[]
          | undefined
        on_match?: 'continue' | 'halt' | undefined
        on_timeout?: 'continue' | 'halt' | undefined
      }
    | {
        event: WorkflowWaitForEventMessageEvent
        expires_after?: Duration | ({ [x: string]: unknown } | null) | undefined
        match_conditions: { conditions?: Condition[] | undefined; operator?: 'and' | undefined }[]
        on_match?: 'continue' | 'halt' | undefined
        on_timeout?: 'continue' | 'halt' | undefined
      }
    | {
        event: WorkflowWaitForEventWorkflowEvent
        expires_after?: Duration | ({ [x: string]: unknown } | null) | undefined
        match_conditions: { conditions?: Condition[] | undefined; operator?: 'and' | undefined }[]
        on_match?: 'continue' | 'halt' | undefined
        on_timeout?: 'continue' | 'halt' | undefined
      }
    | {
        event: WorkflowWaitForEventAudienceEvent
        expires_after?: Duration | ({ [x: string]: unknown } | null) | undefined
        match_conditions?:
          | { conditions?: Condition[] | undefined; operator?: 'and' | undefined }[]
          | undefined
        on_match?: 'continue' | 'halt' | undefined
        on_timeout?: 'continue' | 'halt' | undefined
      }
    | {
        event: WorkflowWaitForEventRecipientEvent
        expires_after?: Duration | ({ [x: string]: unknown } | null) | undefined
        match_conditions?:
          | { conditions?: Condition[] | undefined; operator?: 'and' | undefined }[]
          | undefined
        on_match?: 'continue' | 'halt' | undefined
        on_timeout?: 'continue' | 'halt' | undefined
      }
  type: 'wait_for_event'
}
type WorkflowBatchStep = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: {
    batch_execution_mode?: 'accumulate' | 'flush_leading' | undefined
    batch_items_max_limit?: (number | null) | undefined
    batch_items_render_limit?: (number | null) | undefined
    batch_key?: (string | null) | undefined
    batch_order?: 'asc' | 'desc' | undefined
    batch_until_field_path?: (string | null) | undefined
    batch_window?: Duration | ({ [x: string]: unknown } | null) | undefined
    batch_window_extension_limit?: Duration | ({ [x: string]: unknown } | null) | undefined
    batch_window_type?: 'fixed' | 'sliding' | undefined
    workflow_version_mode?: 'pinned' | 'latest' | undefined
  }
  type: 'batch'
}
type RequestTemplate = {
  body?: (string | null) | undefined
  headers?: string | { key: string; value: string }[] | undefined
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  query_params?: string | { key: string; value: string }[] | undefined
  url: string
}
type WorkflowFetchStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: RequestTemplate
  type: 'http_fetch'
}
type WorkflowUpdateDataStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: { data: string }
  type: 'update_data'
}
type WorkflowUpdateObjectStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: { recipient_gid: string; update_properties: string }
  type: 'update_object'
}
type WorkflowUpdateTenantStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: {
    recipient_gid?: (string | null) | undefined
    recipient_mode: 'current' | 'reference'
    update_properties: string
  }
  type: 'update_tenant'
}
type WorkflowUpdateUserStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: {
    recipient_gid?: (string | null) | undefined
    recipient_mode: 'current' | 'reference'
    update_properties: string
  }
  type: 'update_user'
}
type WorkflowThrottleStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: {
    throttle_key?: (string | null) | undefined
    throttle_limit?: (number | null) | undefined
    throttle_window?: Duration | ({ [x: string]: unknown } | null) | undefined
    throttle_window_field_path?: (string | null) | undefined
  }
  type: 'throttle'
}
type WorkflowBranchStep = {
  branches: {
    conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
    name?: string | undefined
    steps?: WorkflowStep[] | undefined
    terminates?: boolean | undefined
  }[]
  description?: string | undefined
  name?: (string | null) | undefined
  ref: string
  type: 'branch'
}
type WorkflowRandomCohortStepBranch = {
  name?: string | undefined
  percentage: string
  steps?: WorkflowStep[] | undefined
  terminates?: boolean | undefined
}
type WorkflowRandomCohortStep = {
  cohort_branches: WorkflowRandomCohortStepBranch[]
  cohort_key?: (string | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  type: 'random_cohort'
}
type WorkflowTriggerWorkflowStep = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  ref: string
  settings: {
    actor?: string | undefined
    cancellation_key?: string | undefined
    data?: string | undefined
    recipients?: string | undefined
    tenant?: string | undefined
    workflow_key?: string | undefined
  }
  type: 'trigger_workflow'
}
type WorkflowStep =
  | WorkflowWebhookStep
  | WorkflowInAppFeedStep
  | WorkflowInAppGuideStep
  | WorkflowChatStep
  | WorkflowSmsStep
  | WorkflowPushStep
  | WorkflowEmailStep
  | WorkflowAIAgentStep
  | WorkflowDelayStep
  | WorkflowWaitForEventStep
  | WorkflowBatchStep
  | WorkflowFetchStep
  | WorkflowUpdateDataStep
  | WorkflowUpdateObjectStep
  | WorkflowUpdateTenantStep
  | WorkflowUpdateUserStep
  | WorkflowThrottleStep
  | WorkflowBranchStep
  | WorkflowRandomCohortStep
  | WorkflowTriggerWorkflowStep
type AudienceTrigger = {
  audience_action_type: 'member_added'
  audience_key: string
  type: 'audience'
}
type TriggerParameters = {
  actor?: (string | null) | undefined
  cancellation_key?: (string | null) | undefined
  data?: (string | null) | undefined
  recipients?: (string | null) | undefined
  tenant?: (string | null) | undefined
} | null
type SourceEventTrigger = {
  event_name: string
  event_type: 'track'
  integration_source_id: string
  trigger_parameters?: TriggerParameters | undefined
  type: 'source_event'
}
type WorkflowTriggerEvents = AudienceTrigger | SourceEventTrigger
type Workflow = {
  active: boolean
  categories?: string[] | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  created_at: string
  deleted_at?: string | undefined
  description?: string | undefined
  environment: string
  exit_criteria?: ExitCriteria | undefined
  key: string
  name: string
  settings?:
    | { is_commercial?: boolean | undefined; override_preferences?: boolean | undefined }
    | undefined
  sha: string
  steps: WorkflowStep[]
  tags?: string[] | undefined
  trigger_data_json_schema?: { [x: string]: unknown } | undefined
  trigger_events?: WorkflowTriggerEvents[] | undefined
  trigger_frequency?:
    | 'every_trigger'
    | 'once_per_recipient'
    | 'once_per_recipient_per_tenant'
    | undefined
  updated_at: string
  valid: boolean
}
type MemberUser = {
  avatar_url?: (string | null) | undefined
  created_at: string
  email: string
  id: string
  name?: (string | null) | undefined
  updated_at: string
}
type ShowWorkflowResponse = {
  active: boolean
  categories?: string[] | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  created_at: string
  created_by?: MemberUser | ({ [x: string]: unknown } | null) | undefined
  deleted_at?: string | undefined
  description?: string | undefined
  environment: string
  exit_criteria?: ExitCriteria | undefined
  key: string
  name: string
  settings?:
    | { is_commercial?: boolean | undefined; override_preferences?: boolean | undefined }
    | undefined
  sha: string
  steps: WorkflowStep[]
  tags?: string[] | undefined
  trigger_data_json_schema?: { [x: string]: unknown } | undefined
  trigger_events?: WorkflowTriggerEvents[] | undefined
  trigger_frequency?:
    | 'every_trigger'
    | 'once_per_recipient'
    | 'once_per_recipient_per_tenant'
    | undefined
  updated_at: string
  updated_by?: MemberUser | ({ [x: string]: unknown } | null) | undefined
  valid: boolean
}
type WorkflowRequest = {
  categories?: string[] | undefined
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: string | undefined
  exit_criteria?: ExitCriteria | undefined
  name: string
  settings?:
    | { is_commercial?: boolean | undefined; override_preferences?: boolean | undefined }
    | undefined
  steps: WorkflowStep[]
  tags?: string[] | undefined
  trigger_data_json_schema?: { [x: string]: unknown } | undefined
  trigger_events?: WorkflowTriggerEvents[] | undefined
  trigger_frequency?:
    | 'every_trigger'
    | 'once_per_recipient'
    | 'once_per_recipient_per_tenant'
    | undefined
}
type Commit = {
  author: { email: string; name?: (string | null) | undefined }
  commit_message?: string | undefined
  created_at: string
  environment: string
  id: string
  promote_group_id: string | null
  promoted_from_commit_id: string | null
  resource: {
    identifier: string
    type:
      | 'audience'
      | 'email_layout'
      | 'guide'
      | 'message_type'
      | 'partial'
      | 'reusable_request'
      | 'translation'
      | 'workflow'
  }
}
type SourceStatusResponse = {
  events_count: number
  last_event_received: string | null
  mappings_count: number
  mappings_requiring_commit: {
    action_type: 'workflows_trigger'
    active: boolean
    event_type: string
    is_deleted: boolean
    resource_key: string
    status: 'deleted' | 'updated'
  }[]
}
type MessageTypeBooleanField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: boolean | undefined
        description?: (string | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  type: 'boolean'
}
type MessageTypeTextField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: (string | null) | undefined
        description?: (string | null) | undefined
        max_length?: number | undefined
        min_length?: number | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  type: 'text'
}
type MessageTypeButtonField = {
  action: MessageTypeTextField
  key: string
  label: string | null
  settings?:
    | {
        description?: (string | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  text: MessageTypeTextField
  type: 'button'
}
type MessageTypeColorField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: (string | null) | undefined
        description?: (string | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  type: 'color'
}
type MessageTypeUrlField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: (string | null) | undefined
        description?: (string | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  type: 'url'
}
type MessageTypeImageField = {
  action: MessageTypeTextField
  alt: MessageTypeTextField
  key: string
  label: string | null
  settings?:
    | {
        description?: (string | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  type: 'image'
  url: MessageTypeUrlField
}
type MessageTypeJsonField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: ({ [x: string]: unknown } | null) | undefined
        description?: (string | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
        schema?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  type: 'json'
}
type MessageTypeListField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: (unknown[] | null) | undefined
        description?: (string | null) | undefined
        item_schema?: ({ [x: string]: unknown } | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  type: 'list'
}
type MessageTypeMarkdownField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: string | undefined
        description?: (string | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  type: 'markdown'
}
type MessageTypeMultiSelectField = {
  key: string
  label: string | null
  settings: {
    default?: (string[] | null) | undefined
    description?: (string | null) | undefined
    options?: { label?: string | undefined; value: string }[] | undefined
    placeholder?: (string | null) | undefined
    required?: boolean | undefined
  }
  type: 'multi_select'
}
type MessageTypeNumberField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: (number | null) | undefined
        description?: (string | null) | undefined
        max?: (number | null) | undefined
        min?: (number | null) | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
        unit_label?: (string | null) | undefined
      }
    | undefined
  type: 'number'
}
type MessageTypeSelectField = {
  key: string
  label: string | null
  settings: {
    default?: (string | null) | undefined
    description?: (string | null) | undefined
    options?: { label?: string | undefined; value: string }[] | undefined
    placeholder?: (string | null) | undefined
    required?: boolean | undefined
  }
  type: 'select'
}
type MessageTypeTextareaField = {
  key: string
  label: string | null
  settings?:
    | {
        default?: (string | null) | undefined
        description?: (string | null) | undefined
        max_length?: number | undefined
        min_length?: number | undefined
        placeholder?: (string | null) | undefined
        required?: boolean | undefined
      }
    | undefined
  type: 'textarea'
}
type PartialRequest = {
  content: string
  description?: string | undefined
  icon_name?: string | undefined
  input_schema?:
    | (
        | MessageTypeBooleanField
        | MessageTypeButtonField
        | MessageTypeColorField
        | MessageTypeImageField
        | MessageTypeJsonField
        | MessageTypeListField
        | MessageTypeMarkdownField
        | MessageTypeMultiSelectField
        | MessageTypeNumberField
        | MessageTypeSelectField
        | MessageTypeTextField
        | MessageTypeTextareaField
        | MessageTypeUrlField
      )[]
    | undefined
  name: string
  type: 'html' | 'text' | 'json' | 'markdown'
  visual_block_enabled?: boolean | undefined
}
type Partial = {
  content: string
  description?: string | undefined
  environment?: string | undefined
  icon_name?: string | undefined
  input_schema?:
    | (
        | MessageTypeBooleanField
        | MessageTypeButtonField
        | MessageTypeColorField
        | MessageTypeImageField
        | MessageTypeJsonField
        | MessageTypeListField
        | MessageTypeMarkdownField
        | MessageTypeMultiSelectField
        | MessageTypeNumberField
        | MessageTypeSelectField
        | MessageTypeTextField
        | MessageTypeTextareaField
        | MessageTypeUrlField
      )[]
    | undefined
  inserted_at: string
  key: string
  name: string
  type: 'html' | 'text' | 'json' | 'markdown'
  updated_at: string
  valid: boolean
  visual_block_enabled?: boolean | undefined
}
type WhoamiResponse = {
  account_features: {
    batch_items_render_limit_allowed?: boolean | undefined
    custom_branding_allowed?: boolean | undefined
    data_retention_days?: (number | null) | undefined
    data_warehouse_extension_allowed?: boolean | undefined
    datadog_extension_allowed?: boolean | undefined
    dsync_allowed?: boolean | undefined
    guides_monthly_notified_recipients_limit?: (number | null) | undefined
    guides_per_tenant_scope_allowed?: boolean | undefined
    heap_extension_allowed?: boolean | undefined
    knock_branding_required?: boolean | undefined
    litmus_email_preview_allowed?: boolean | undefined
    message_sent_limit?: (number | null) | undefined
    new_relic_extension_allowed?: boolean | undefined
    permission_groups_allowed?: boolean | undefined
    segment_extension_allowed?: boolean | undefined
    self_serve_allowed?: boolean | undefined
    sso_allowed?: boolean | undefined
    tenant_preferences_allowed?: boolean | undefined
    translations_allowed?: boolean | undefined
  }
  account_name: string
  account_slug: string
  service_token_name?: (string | null) | undefined
  type: 'service_token' | 'oauth_context'
  user_email?: (string | null) | undefined
  user_id?: (string | null) | undefined
  user_name?: (string | null) | undefined
}
type SourceEventActionMapping = {
  action_parameters?: ({ [x: string]: unknown } | null) | undefined
  action_type:
    | 'workflows_trigger'
    | 'users_identify'
    | 'users_delete'
    | 'objects_set'
    | 'objects_delete'
    | 'objects_subscribe'
    | 'objects_unsubscribe'
    | 'tenants_set'
    | 'tenants_delete'
    | 'audiences_add_member'
    | 'audiences_remove_member'
  active: boolean
  created_at: string
  event_type: string
  is_deleted: boolean
  updated_at: string
}
type SourcePreprocessScript = { language: 'javascript'; source: string }
type SourceEnvironmentSettings = {
  mappings: SourceEventActionMapping[]
  settings: {
    endpoint?: string | undefined
    enforce_idempotency?: (boolean | null) | undefined
    enforce_verification?: boolean | undefined
    event_type_path?: (string | null) | undefined
    handle_identifies?: (boolean | null) | undefined
    idempotency_key_path?: (string | null) | undefined
    preprocess_script?: SourcePreprocessScript | undefined
    timestamp_path?: (string | null) | undefined
  }
  updated_at: string
}
type SourcesResponse = {
  entries: {
    custom_image_url?: (string | null) | undefined
    description?: (string | null) | undefined
    environment_settings?: ({ [x: string]: SourceEnvironmentSettings } | null) | undefined
    key: string
    name: string
  }[]
}
type RecipientReference = string | { collection: string; id: string }
type BrandingOverrides = {
  dark_icon_url?: (string | null) | undefined
  dark_logo_url?: (string | null) | undefined
  dark_primary_color?: (string | null) | undefined
  dark_primary_color_contrast?: (string | null) | undefined
  icon_url?: (string | null) | undefined
  logo_url?: (string | null) | undefined
  primary_color?: (string | null) | undefined
  primary_color_contrast?: (string | null) | undefined
  primary_text_color?: (string | null) | undefined
  secondary_text_color?: (string | null) | undefined
} | null
type EmailLayoutRequest = {
  branding_overrides?: BrandingOverrides | undefined
  footer_links?: { text: string; url: string }[] | undefined
  html_layout: string
  is_mjml?: (boolean | null) | undefined
  name: string
  text_layout: string
}
type PreviewEmailLayoutRequest = {
  actor?: RecipientReference | ({ [x: string]: unknown } | null) | undefined
  data?: { [x: string]: unknown } | undefined
  email_layout: EmailLayoutRequest
  recipient: RecipientReference
  tenant?: (string | null) | undefined
  workflow?: ({ categories?: (string[] | null) | undefined; key: string } | null) | undefined
}
type PreviewEmailLayoutResponse = {
  errors?:
    | (
        | {
            field?: (string | null) | undefined
            line?: (number | null) | undefined
            message: string
          }[]
        | null
      )
    | undefined
  layout?:
    | ({ html_body?: (string | null) | undefined; text_body?: (string | null) | undefined } | null)
    | undefined
  result: 'success' | 'error'
}
type MessageTypeVariant = {
  fields: (
    | MessageTypeBooleanField
    | MessageTypeButtonField
    | MessageTypeColorField
    | MessageTypeImageField
    | MessageTypeJsonField
    | MessageTypeListField
    | MessageTypeMarkdownField
    | MessageTypeMultiSelectField
    | MessageTypeNumberField
    | MessageTypeSelectField
    | MessageTypeTextField
    | MessageTypeTextareaField
    | MessageTypeUrlField
  )[]
  key: string
  name: string
}
type MessageType = {
  archived_at?: (string | null) | undefined
  created_at: string
  deleted_at?: (string | null) | undefined
  description?: (string | null) | undefined
  environment: string
  icon_name?: string | undefined
  key: string
  name: string
  owner: 'system' | 'user'
  preview: string
  semver: string
  sha: string
  updated_at: string
  valid: boolean
  variants: MessageTypeVariant[]
}
type GoalRequest = {
  condition: GoalCondition
  description?: (string | null) | undefined
  name: string
}
type Environment = {
  created_at: string
  deleted_at?: (string | null) | undefined
  hide_pii_data?: boolean | undefined
  label_color?: (string | null) | undefined
  last_commit_at?: (string | null) | undefined
  name: string
  order: number
  owner: 'system' | 'user'
  slug: string
  updated_at: string
  visibility: 'visible' | 'hidden'
}
type Asset = {
  asset_type: string
  created_at: string
  filename?: (string | null) | undefined
  id: string
  mime_type: string
  updated_at: string
  url: string
}
type AssetCreateRequest = { filename: string; key: string }
type Broadcast = {
  archived_at?: (string | null) | undefined
  categories?: string[] | undefined
  created_at: string
  description?: string | undefined
  environment: string
  key: string
  name: string
  scheduled_at?: (string | null) | undefined
  sent_at?: (string | null) | undefined
  settings?:
    | { is_commercial?: boolean | undefined; override_preferences?: boolean | undefined }
    | undefined
  sha: string
  status: 'draft' | 'scheduled' | 'sent'
  steps: (
    | WorkflowWebhookStep
    | WorkflowInAppFeedStep
    | WorkflowInAppGuideStep
    | WorkflowChatStep
    | WorkflowSmsStep
    | WorkflowPushStep
    | WorkflowEmailStep
    | WorkflowBranchStep
    | WorkflowDelayStep
    | WorkflowRandomCohortStep
  )[]
  tags?: string[] | undefined
  target_audience_key?: string | undefined
  updated_at: string
  valid: boolean
}
type BroadcastRequest = {
  categories?: string[] | undefined
  description?: string | undefined
  name: string
  scheduled_at?: (string | null) | undefined
  settings?:
    | { is_commercial?: boolean | undefined; override_preferences?: boolean | undefined }
    | undefined
  steps: (
    | WorkflowWebhookStep
    | WorkflowInAppFeedStep
    | WorkflowInAppGuideStep
    | WorkflowChatStep
    | WorkflowSmsStep
    | WorkflowPushStep
    | WorkflowEmailStep
    | WorkflowBranchStep
    | WorkflowDelayStep
    | WorkflowRandomCohortStep
  )[]
  tags?: string[] | undefined
  target_audience_key?: string | undefined
}
type FeedbackRequest = {
  context?:
    | ({
        actual?: (string | null) | undefined
        expected?: (string | null) | undefined
        impact?: (string | null) | undefined
        model?: (string | null) | undefined
        product?: (string | null) | undefined
        task?: (string | null) | undefined
        tool?: (string | null) | undefined
        type?: (string | null) | undefined
      } | null)
    | undefined
  message: string
}
type Feedback = { created_at: string; id: string }
type PreviewTemplateRequest = {
  actor?: RecipientReference | ({ [x: string]: unknown } | null) | undefined
  channel_type: 'email' | 'sms' | 'push' | 'chat' | 'in_app_feed'
  data?: { [x: string]: unknown } | undefined
  layout?:
    | ({
        html_content?: (string | null) | undefined
        key?: (string | null) | undefined
        text_content?: (string | null) | undefined
      } | null)
    | undefined
  recipient: RecipientReference
  template: EmailTemplate | SmsTemplate | PushTemplate | ChatTemplate | InAppFeedTemplate
  tenant?: (string | null) | undefined
  workflow?:
    | ({
        categories?: (string[] | null) | undefined
        commercial?: (boolean | null) | undefined
        key: string
        override_preferences?: (boolean | null) | undefined
      } | null)
    | undefined
}
type PreviewTemplateResponse = {
  content_type: 'email' | 'in_app_feed' | 'push' | 'chat' | 'sms'
  errors?:
    | (
        | {
            field?: (string | null) | undefined
            line?: (number | null) | undefined
            message: string
          }[]
        | null
      )
    | undefined
  result: 'success' | 'error'
  template?:
    | EmailTemplate
    | InAppFeedTemplate
    | PushTemplate
    | ChatTemplate
    | SmsTemplate
    | undefined
}
type GuideActivationParams =
  | { status: boolean }
  | { from?: string | undefined; until?: string | undefined }
type GuideActivationUrlPattern = {
  directive: 'allow' | 'block'
  pathname?: string | undefined
  search?: string | undefined
}
type GuideStep = {
  name?: string | undefined
  ref: string
  schema_key: string
  schema_semver: string
  schema_variant_key: string
  values?: { [x: string]: unknown } | undefined
}
type Guide = {
  activation_url_patterns?: GuideActivationUrlPattern[] | undefined
  active: boolean
  archived_at?: (string | null) | undefined
  channel_key?: string | undefined
  created_at: string
  deleted_at?: (string | null) | undefined
  description?: (string | null) | undefined
  environment: string
  guide_audience_conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  key: string
  name: string
  semver?: string | undefined
  sha: string
  steps?: GuideStep[] | undefined
  tags?: string[] | undefined
  target_audience_key?: (string | null) | undefined
  target_property_conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  type?: string | undefined
  updated_at: string
  valid?: boolean | undefined
}
type WarehouseSyncChangeTracking = {
  is_deleted_column?: (string | null) | undefined
  last_modified_column?: (string | null) | undefined
}
type WarehouseSyncMapping = {
  on_null?: 'set_null' | 'preserve' | undefined
  source_column: string
  target_field: string
}
type WarehouseSyncSource = {
  mode: 'relation' | 'sql'
  name?: (string | null) | undefined
  query?: (string | null) | undefined
  schema?: (string | null) | undefined
}
type WarehouseSyncTarget = {
  audience_key?: (string | null) | undefined
  collection?: (string | null) | undefined
} | null
type WarehouseSync = {
  change_tracking?: WarehouseSyncChangeTracking | undefined
  created_at: string
  description?: (string | null) | undefined
  enabled: boolean
  environment: string
  frequency_minutes: 10 | 15 | 60 | 360 | 720 | 1440
  has_unpublished_changes: boolean
  key: string
  last_failure?:
    | ({ message?: string | undefined; stage?: 'extract' | 'load' | 'apply' | undefined } | null)
    | undefined
  last_published_at?: (string | null) | undefined
  mappings: WarehouseSyncMapping[]
  name: string
  primary_key_column?: (string | null) | undefined
  publish_error?: (string | null) | undefined
  sha: string
  source?: WarehouseSyncSource | undefined
  status: 'draft' | 'publishing' | 'delivery_failed' | 'paused' | 'needs_attention' | 'live'
  target?: WarehouseSyncTarget | undefined
  target_type: 'user' | 'tenant' | 'object' | 'static_audience_membership' | 'subscription'
  updated_at: string
  version_id: string
  warehouse_key: string
}
type HeadlessAccount = { expires_at: string; status: 'provisioning'; token: string }
type StaticAudience = {
  created_at: string
  description?: (string | null) | undefined
  environment: string
  key: string
  name: string
  sha?: (string | null) | undefined
  type: 'static'
  updated_at: string
}
type AudienceCondition = {
  argument?: (string | null) | undefined
  operator:
    | 'equal_to'
    | 'not_equal_to'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equal_to'
    | 'less_than_or_equal_to'
    | 'contains'
    | 'not_contains'
    | 'contains_all'
    | 'not_contains_all'
    | 'is_timestamp_before'
    | 'is_timestamp_on_or_after'
    | 'is_timestamp_between'
    | 'is_between'
    | 'empty'
    | 'not_empty'
    | 'exists'
    | 'not_exists'
    | 'is_timestamp'
    | 'is_timestamp_before_now'
    | 'is_timestamp_on_or_after_now'
    | 'is_audience_member'
    | 'is_not_audience_member'
  property: string
}
type DynamicAudience = {
  created_at: string
  description?: (string | null) | undefined
  environment: string
  key: string
  name: string
  segments: { conditions: AudienceCondition[] }[]
  sha?: (string | null) | undefined
  type: 'dynamic'
  updated_at: string
}
type Audience = StaticAudience | DynamicAudience
type Translation = {
  content: string
  format: 'json' | 'po'
  inserted_at: string
  locale_code: string
  namespace: string
  tenant?: string | undefined
  updated_at: string
}
type TranslationRequest = { content: string; format: 'json' | 'po' }
type TagRequest = { color?: (string | null) | undefined; description?: (string | null) | undefined }
type Tag = {
  color?: (string | null) | undefined
  created_at: string
  description?: (string | null) | undefined
  name: string
  updated_at: string
}
type SourceRehearseRequest = { payload: { [x: string]: unknown } }
type SourceRehearseResponse = {
  action_logs_count: number
  errors?: ({ field: string; message: string }[] | null) | undefined
  failed_action_logs_count: number
  log_id: string | null
  status: 'ok' | 'error'
  successful_action_logs_count: number
}
type ItemSchemaProperty = {
  description?: (string | null) | undefined
  item_type?: (string | null) | undefined
  key: string
  preview_text?: (string | null) | undefined
  type?: (string | null) | undefined
  visible?: boolean | undefined
}
type ItemSchema = {
  item_id?: (string | null) | undefined
  item_type: 'user' | 'tenant' | 'object'
  properties: ItemSchemaProperty[]
}
type ChannelEnvironmentSettings = {
  channel_settings?: ({ [x: string]: unknown } | null) | undefined
  id: string
  is_sandbox: boolean
  is_valid: boolean
  provider_settings?: ({ [x: string]: unknown } | null) | undefined
}
type Channel = {
  archived_at?: (string | null) | undefined
  created_at: string
  custom_icon_url?: (string | null) | undefined
  description?: (string | null) | undefined
  environment_settings?: ({ [x: string]: ChannelEnvironmentSettings } | null) | undefined
  id: string
  key: string
  name: string
  provider: string
  type: 'email' | 'in_app' | 'in_app_feed' | 'in_app_guide' | 'sms' | 'push' | 'chat' | 'http'
  updated_at: string
  visible_in?: ('workflow' | 'broadcast')[] | undefined
}
type ChannelGroupRule = {
  argument?: (string | null) | undefined
  channel: Channel
  created_at: string
  index: number
  operator?:
    | 'equal_to'
    | 'not_equal_to'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equal_to'
    | 'less_than_or_equal_to'
    | 'contains'
    | 'not_contains'
    | 'contains_all'
    | 'not_contains_all'
    | 'is_timestamp_before'
    | 'is_timestamp_on_or_after'
    | 'is_timestamp_between'
    | 'is_between'
    | 'empty'
    | 'not_empty'
    | 'exists'
    | 'not_exists'
    | 'is_timestamp'
    | 'is_timestamp_before_now'
    | 'is_timestamp_on_or_after_now'
    | 'is_audience_member'
    | 'is_not_audience_member'
    | 'is_in_random_cohort'
    | undefined
  rule_type: 'if' | 'unless' | 'always'
  updated_at: string
  variable?: (string | null) | undefined
}
type ChannelGroup = {
  archived_at?: (string | null) | undefined
  channel_rules: ChannelGroupRule[]
  channel_type:
    | 'email'
    | 'in_app'
    | 'in_app_feed'
    | 'in_app_guide'
    | 'sms'
    | 'push'
    | 'chat'
    | 'http'
  created_at: string
  key: string
  name: string
  operator: 'any' | 'all'
  source: 'system' | 'user'
  updated_at: string
  visible_in?: ('workflow' | 'broadcast')[] | undefined
}
type GuideRequest = {
  activation_url_patterns?: GuideActivationUrlPattern[] | undefined
  archived_at?: (string | null) | undefined
  channel_key: string
  deleted_at?: (string | null) | undefined
  description?: (string | null) | undefined
  guide_audience_conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  name: string
  steps: GuideStep[]
  tags?: string[] | undefined
  target_audience_key?: (string | null) | undefined
  target_property_conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
}
type Source = {
  created_at: string
  custom_image_url?: (string | null) | undefined
  description?: (string | null) | undefined
  environment_settings: { [x: string]: SourceEnvironmentSettings }
  key: string
  name: string
  updated_at: string
}
type SourceRequest = {
  custom_image_url?: (string | null) | undefined
  description?: (string | null) | undefined
  environment_settings?:
    | {
        [x: string]: {
          mappings?:
            | {
                action_parameters?: ({ [x: string]: unknown } | null) | undefined
                action_type:
                  | 'workflows_trigger'
                  | 'users_identify'
                  | 'users_delete'
                  | 'objects_set'
                  | 'objects_delete'
                  | 'objects_subscribe'
                  | 'objects_unsubscribe'
                  | 'tenants_set'
                  | 'tenants_delete'
                  | 'audiences_add_member'
                  | 'audiences_remove_member'
                active?: boolean | undefined
                event_type: string
                is_deleted?: boolean | undefined
              }[]
            | undefined
          settings?:
            | {
                enforce_verification?: boolean | undefined
                event_type_path?: (string | null) | undefined
                idempotency_key_path?: (string | null) | undefined
                preprocess_script?: SourcePreprocessScript | undefined
                timestamp_path?: (string | null) | undefined
              }
            | undefined
        }
      }
    | undefined
  name: string
  preconfigured_provider?: string | undefined
}
type ReusableRequestSettings = {
  body?: (string | null) | undefined
  data_input_schema?: ({ [x: string]: unknown } | null) | undefined
  data_input_values_str?: (string | null) | undefined
  headers?: string | { key: string; value: string }[] | undefined
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  query_params?: string | { key: string; value: string }[] | undefined
  response_path?: (string | null) | undefined
  signing_key?: (string | null) | undefined
  url?: string | undefined
}
type ReusableRequestRequest = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  settings: ReusableRequestSettings
  type: 'http_fetch'
}
type ReusableRequest = {
  conditions?: ConditionGroup | ({ [x: string]: unknown } | null) | undefined
  created_at: string
  description?: (string | null) | undefined
  environment: string
  key: string
  name?: (string | null) | undefined
  settings: ReusableRequestSettings
  sha?: (string | null) | undefined
  type: 'http_fetch'
  updated_at: string
}
type PromoteGroup = {
  actor?: ({ email?: string | undefined; name?: (string | null) | undefined } | null) | undefined
  commit_count: number
  created_at: string
  id: string
  source: string
  source_type: 'environment' | 'branch'
  to_environment: string
}
type HeadlessAccountStatus = {
  expires_at: string | null
  status: 'provisioning' | 'unclaimed' | 'claimed' | 'expired'
  usage_limits: { message_limit: number | null; workflow_run_limit: number | null }
}
type MessageTypeRequest = {
  description: string | null
  icon_name?: string | undefined
  name: string
  preview: string
  semver?: string | undefined
  variants?: MessageTypeVariant[] | undefined
}
type WarehouseSyncSettingsRequest = {
  enabled?: boolean | undefined
  frequency_minutes?: 10 | 15 | 60 | 360 | 720 | 1440 | undefined
}
type Member = {
  created_at: string
  id: string
  role: 'owner' | 'admin' | 'member' | 'production_only_member' | 'billing' | 'support'
  updated_at: string
  user: MemberUser
}
type StaticAudienceRequest = {
  description?: (string | null) | undefined
  name: string
  type: 'static'
}
type DynamicAudienceRequest = {
  description?: (string | null) | undefined
  name: string
  segments?: { conditions: AudienceCondition[] }[] | undefined
  type: 'dynamic'
}
type AudienceRequest = StaticAudienceRequest | DynamicAudienceRequest
type Webhook = {
  active: boolean
  created_at: string
  description?: (string | null) | undefined
  event_types: string[]
  id: string
  secret_key?: (string | null) | undefined
  updated_at: string
  url: string
}
type WebhookRequest = {
  active?: (boolean | null) | undefined
  description?: (string | null) | undefined
  event_types: string[]
  url: string
}
type HeadlessAccountClaimRequest = { email: string }
type HeadlessAccountClaim = { claim_url: string; expires_at: string; user_code: string }
type Warehouse = {
  connection_error?: ({ [x: string]: unknown } | null) | undefined
  connection_settings?: ({ [x: string]: unknown } | null) | undefined
  connection_status:
    | 'not_configured'
    | 'key_not_installed'
    | 'failed'
    | 'connecting'
    | 'untested'
    | 'connected'
  created_at: string
  key: string
  last_tested_at?: (string | null) | undefined
  name: string
  type: 'redshift' | 'snowflake' | 'postgres' | 'bigquery'
  updated_at: string
}
type BillingCreditBlock = {
  currency: string
  effective_at: string | null
  expires_at: string | null
  id: string
  name: string
  quantity: number
  remaining: number
  status: 'active' | 'depleted' | 'scheduled'
}
type BillingUsageRecord = {
  amount: string
  credits_applied: number
  metric_id: string
  name: string
  pricing_currency: string | null
  quantity: number
  quantity_type: 'usage' | 'credits'
}
type BillingSummary = {
  amount_due: string
  credits: BillingCreditBlock[]
  currency: string | null
  invoice_id: string | null
  period_end: string | null
  period_start: string | null
  plan: { display_name: string; id: string; type: 'free' | 'starter' | 'growth' | 'enterprise' }
  target_date: string
  usage: BillingUsageRecord[]
}
type EnvironmentDefaultsPreferenceSet = {
  categories?: { [x: string]: unknown } | undefined
  channel_types?: { [x: string]: unknown } | undefined
  channels?: { [x: string]: unknown } | undefined
  commercial_subscribed?: boolean | { [x: string]: unknown } | undefined
  workflows?: { [x: string]: unknown } | undefined
} | null
type EnvironmentDefaults = {
  created_at: string | null
  preference_set: EnvironmentDefaultsPreferenceSet
  updated_at: string | null
}
type UpsertEnvironmentDefaultsRequest = { preference_set: EnvironmentDefaultsPreferenceSet }
type Branch = {
  created_at: string
  deleted_at?: (string | null) | undefined
  last_commit_at?: (string | null) | undefined
  slug: string
  updated_at: string
}
type PreferenceCategory = {
  archived_at?: (string | null) | undefined
  created_at: string
  name: string
  updated_at: string
}
type PreferenceCategoriesResponse = { entries: PreferenceCategory[] }
type AuditLog = {
  action: string
  actor: { email: string; id: string; name?: (string | null) | undefined } | null
  agent_session_id: string | null
  environment: string | null
  id: string
  inserted_at: string
  ip_address: string | null
  location: {
    city?: (string | null) | undefined
    country_code?: (string | null) | undefined
    region_code?: (string | null) | undefined
  } | null
  project_id: string | null
  request_id: string | null
  request_source: 'dashboard' | 'mapi' | 'agent'
  resource: {
    id: string
    identifier?: (string | null) | undefined
    type:
      | 'account'
      | 'account_user'
      | 'api_key'
      | 'asset'
      | 'audience'
      | 'broadcast'
      | 'channel'
      | 'channel_group'
      | 'email_layout'
      | 'environment'
      | 'environment_defaults'
      | 'event_action_mapping'
      | 'external_audience'
      | 'goal'
      | 'guide'
      | 'guide_group'
      | 'invite'
      | 'member'
      | 'message_type'
      | 'object'
      | 'partial'
      | 'permission_group'
      | 'preference_category'
      | 'preference_center'
      | 'preference_center_domain'
      | 'reusable_request'
      | 'service_token'
      | 'signing_key'
      | 'source'
      | 'subscription'
      | 'tag'
      | 'translation'
      | 'user'
      | 'variable'
      | 'view'
      | 'webhook'
      | 'workflow'
      | 'unknown'
  }
}
type EmailLayout = {
  branding_overrides?: BrandingOverrides | undefined
  created_at: string
  environment?: string | undefined
  footer_links?: { text: string; url: string }[] | undefined
  html_layout: string
  is_mjml?: boolean | undefined
  key: string
  name: string
  sha: string
  text_layout: string
  updated_at?: string | undefined
}
type GoalAttachmentRequest = { attribution_window_days?: number | undefined }
type GoalResourceAttachment = {
  attribution_window_days: number
  goal_key: string
  resource_key: string
  resource_type: 'workflow' | 'guide' | 'broadcast'
}
type BroadcastRunRequest = {
  recipient: { id: string }
  settings?: { sandbox_mode?: boolean | undefined; skip_delay?: boolean | undefined } | undefined
  step_id?: (string | null) | undefined
  tenant?: (string | null) | undefined
}
type BroadcastRunResponse = { broadcast_run_id: string; request_id: string }
type PreviewPartialRequest = {
  data?: { [x: string]: unknown } | undefined
  layout?: ({ key?: (string | null) | undefined } | null) | undefined
  partial: PartialRequest
}
type PreviewPartialResponse = {
  content?: (string | null) | undefined
  errors?: ({ field?: (string | null) | undefined; message: string }[] | null) | undefined
  result: 'success' | 'error'
  type: 'html' | 'text' | 'json' | 'markdown'
}
type AssetUploadRequest = {
  content_length: number
  filename?: (string | null) | undefined
  mime_type: string
}
type AssetUpload = {
  content_length: number
  expires_in: number
  filename?: (string | null) | undefined
  key: string
  mime_type: string
  upload_url: string
}
type PreviewWorkflowTemplateRequest = {
  actor?: RecipientReference | ({ [x: string]: unknown } | null) | undefined
  data?: { [x: string]: unknown } | undefined
  recipient: RecipientReference
  tenant?: (string | null) | undefined
}
type PreviewWorkflowTemplateResponse = {
  content_type: 'email' | 'in_app_feed' | 'push' | 'chat' | 'sms' | 'http'
  result: 'success' | 'error'
  template:
    | EmailTemplate
    | InAppFeedTemplate
    | PushTemplate
    | ChatTemplate
    | SmsTemplate
    | RequestTemplate
}
type WarehouseSyncRun = {
  ended_at?: (string | null) | undefined
  error?:
    | ({ message?: string | undefined; stage?: 'extract' | 'load' | 'apply' | undefined } | null)
    | undefined
  id: string
  load_id?: (string | null) | undefined
  records_errored?: (number | null) | undefined
  records_processed?: (number | null) | undefined
  rows_applied?: (number | null) | undefined
  rows_failed?: (number | null) | undefined
  started_at?: (string | null) | undefined
  status: 'running' | 'completed' | 'completed_with_errors' | 'failed'
  submitted_at?: (string | null) | undefined
}
type InlineIdentifyUserRequest = {
  email?: (string | null) | undefined
  id: string
  name?: (string | null) | undefined
}
type RunWorkflowRequest = {
  actor?:
    | RecipientReference
    | InlineIdentifyUserRequest
    | ({ [x: string]: unknown } | null)
    | undefined
  cancellation_key?: (string | null) | undefined
  data?: { [x: string]: unknown } | undefined
  recipients: (RecipientReference | InlineIdentifyUserRequest)[]
  step_id?: (string | null) | undefined
  tenant?: string | undefined
}
type RunWorkflowResponse = { workflow_run_id: string }
type BroadcastSendRequest = { send_at?: string | undefined }
type ChannelGroupRuleRequest = {
  argument?: (string | null) | undefined
  channel_key: string
  index?: number | undefined
  operator?:
    | 'equal_to'
    | 'not_equal_to'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equal_to'
    | 'less_than_or_equal_to'
    | 'contains'
    | 'not_contains'
    | 'contains_all'
    | 'not_contains_all'
    | 'is_timestamp_before'
    | 'is_timestamp_on_or_after'
    | 'is_timestamp_between'
    | 'is_between'
    | 'empty'
    | 'not_empty'
    | 'exists'
    | 'not_exists'
    | 'is_timestamp'
    | 'is_timestamp_before_now'
    | 'is_timestamp_on_or_after_now'
    | 'is_audience_member'
    | 'is_not_audience_member'
    | 'is_in_random_cohort'
    | undefined
  rule_type: 'if' | 'unless' | 'always'
  variable?: (string | null) | undefined
}
type ChannelGroupRequest = {
  channel_rules?: ChannelGroupRuleRequest[] | undefined
  channel_type:
    | 'email'
    | 'in_app'
    | 'in_app_feed'
    | 'in_app_guide'
    | 'sms'
    | 'push'
    | 'chat'
    | 'http'
  name: string
  operator?: 'any' | 'all' | undefined
  visible_in?: ('workflow' | 'broadcast')[] | undefined
}
type SourceEvent = { event: string; last_received_at: string | null }
type SourceEventsResponse = { entries: SourceEvent[] }
type WarehouseSyncRequest = {
  change_tracking?: WarehouseSyncChangeTracking | undefined
  description?: (string | null) | undefined
  mappings?: WarehouseSyncMapping[] | undefined
  name?: string | undefined
  primary_key_column?: (string | null) | undefined
  source?: WarehouseSyncSource | undefined
  target?: WarehouseSyncTarget | undefined
  target_type?:
    | 'user'
    | 'tenant'
    | 'object'
    | 'static_audience_membership'
    | 'subscription'
    | undefined
  version_id?: string | undefined
  warehouse_key?: string | undefined
}
type SourceProvidersResponse = {
  entries: { key: string; provider: { description: string; name: string }; version: string }[]
}
type TagsResponse = { entries: Tag[] }
type CloneGoalRequest = { environment: string; key: string; name: string }
type SourceProviderResponse = {
  default_action_mappings?:
    | {
        action_parameters: { [x: string]: unknown }
        action_type:
          | 'workflows_trigger'
          | 'users_identify'
          | 'users_delete'
          | 'objects_set'
          | 'objects_delete'
          | 'objects_subscribe'
          | 'objects_unsubscribe'
          | 'tenants_set'
          | 'tenants_delete'
          | 'audiences_add_member'
          | 'audiences_remove_member'
        event_type: string
      }[]
    | undefined
  default_settings: {
    enforce_verification: boolean
    event_type_path: string
    idempotency_key_path?: (string | null) | undefined
    preprocessing_script?: { language: 'javascript'; source: string } | undefined
    timestamp_path?: (string | null) | undefined
  }
  example_payloads?:
    | {
        [x: string]: {
          body?: ({ [x: string]: unknown } | null) | undefined
          headers?: ({ [x: string]: unknown } | null) | undefined
        }[]
      }
    | undefined
  key: string
  provider: {
    branding?:
      | {
          colors?: { primary: string; secondary: string } | undefined
          icon_image: string
          wordmark_images: { dark: string; light: string }
        }
      | undefined
    categories: (
      | 'Billing'
      | 'Infrastructure'
      | 'Analytics'
      | 'CRM'
      | 'Ecommerce'
      | 'Communications'
      | 'Identity'
    )[]
    description: string
    knock_tutorial_url?: (string | null) | undefined
    name: string
    webhook_config_deep_link?: (string | null) | undefined
    webhook_docs_url: string
    website_url: string | null
  }
  static_fields?: { [x: string]: unknown } | undefined
  version: string
}
type SourceLogAction = {
  action_parameters?: ({ [x: string]: unknown } | null) | undefined
  action_payload?: ({ [x: string]: unknown } | null) | undefined
  action_result?: ({ [x: string]: unknown } | null) | undefined
  action_status?: (string | null) | undefined
  action_type?: string | undefined
  id: string
  inserted_at?: (string | null) | undefined
}
type SourceLog = {
  actions?: SourceLogAction[] | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  event: string
  id: string
  inserted_at?: (string | null) | undefined
  preprocess_output?: ({ [x: string]: unknown } | null) | undefined
  source?: (string | null) | undefined
  verification_status?: (string | null) | undefined
}
type SourceLogsResponse = { entries: SourceLog[]; page_info: PageInfo }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/variables/:key': {
      $delete: {
        input: { param: { key: string } } & { query: { environment?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { key: string } }
        output: Variable
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { key: string } } & { json: VariableRequest }
        output: Variable
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/goals': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
            annotate?: boolean | undefined
          }
        }
        output: { entries: Goal[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:workflow_key': {
      $delete: {
        input: { param: { workflow_key: string } } & { query: { environment?: string | undefined } }
        output: { workflow: Workflow }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { workflow_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: ShowWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { workflow_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            force?: boolean | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
          }
        } & { json: { workflow: WorkflowRequest } }
        output: { workflow: Workflow }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commits/:id': {
      $get: { input: { param: { id: string } }; output: Commit; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/sources/:key/status': {
      $get: {
        input: { param: { key: string } } & { query: { environment?: string | undefined } }
        output: SourceStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partials/:partial_key/validate': {
      $put: {
        input: { param: { partial_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { partial: PartialRequest } }
        output: { partial: Partial }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/whoami': { $get: { input: {}; output: WhoamiResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/v1/sources': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            include?: 'environment_settings'[] | undefined
            annotate?: boolean | undefined
          }
        }
        output: SourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email_layouts/preview': {
      $post: {
        input: { query: { environment?: string | undefined; branch?: string | undefined } } & {
          json: PreviewEmailLayoutRequest
        }
        output: PreviewEmailLayoutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:workflow_key/validate': {
      $put: {
        input: { param: { workflow_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { workflow: WorkflowRequest } }
        output: { workflow: Workflow }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/message_types': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: MessageType[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/goals/:goal_key': {
      $delete: {
        input: { param: { goal_key: string } } & { query: { environment?: string | undefined } }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { goal_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
          }
        }
        output: Goal
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { goal_key: string } } & {
          query: { environment?: string | undefined; annotate?: boolean | undefined }
        } & { json: { goal: GoalRequest } }
        output: { goal: Goal }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/environments': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Environment[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/assets/:asset_id': {
      $delete: {
        input: { param: { asset_id: string } }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/assets': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Asset[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: AssetCreateRequest }
        output: Asset
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/broadcasts/:broadcast_key': {
      $get: {
        input: { param: { broadcast_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: Broadcast
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { broadcast_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
          }
        } & { json: { broadcast: BroadcastRequest } }
        output: { broadcast: Broadcast }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/feedback': {
      $post: {
        input: { json: FeedbackRequest }
        output: { feedback: Feedback }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/templates/preview': {
      $post: {
        input: { query: { environment?: string | undefined; branch?: string | undefined } } & {
          json: PreviewTemplateRequest
        }
        output: PreviewTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/guides/:guide_key/activate': {
      $put: {
        input: { param: { guide_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: GuideActivationParams }
        output: { guide: Guide }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commits/promote': {
      $put: {
        input: {
          query: {
            to_environment: string
            branch?: string | undefined
            resource_type?:
              | 'audience'
              | 'email_layout'
              | 'guide'
              | 'message_type'
              | 'partial'
              | 'reusable_request'
              | 'translation'
              | 'workflow'
              | (
                  | 'audience'
                  | 'email_layout'
                  | 'guide'
                  | 'message_type'
                  | 'partial'
                  | 'reusable_request'
                  | 'translation'
                  | 'workflow'
                )[]
              | undefined
            resource_id?: string | undefined
          }
        }
        output: {
          promote_group: {
            actor?:
              | ({ email?: string | undefined; name?: (string | null) | undefined } | null)
              | undefined
            commit_count: number
            created_at: string
            id: string
            source: string
            source_type: 'environment' | 'branch'
            to_environment: string
          }
          result: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/warehouse_syncs/:warehouse_sync_key/run': {
      $put: {
        input: { param: { warehouse_sync_key: string } } & {
          query: { environment?: string | undefined }
        }
        output: { warehouse_sync: WarehouseSync }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/guides': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Guide[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/headless_accounts': {
      $post:
        | { input: {}; output: HeadlessAccount; outputFormat: 'json'; status: 201 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 429 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 500 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v1/audiences': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: { entries: Audience[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/translations': {
      $get: {
        input: {
          query: {
            locale_code?: string | undefined
            namespace?: string | undefined
            tenant?: string | undefined
            format?: 'json' | 'po' | undefined
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Translation[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/translations/:locale_code': {
      $get: {
        input: { param: { locale_code: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            format?: 'json' | 'po' | undefined
            namespace?: string | undefined
            tenant?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: { translation: Translation }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { locale_code: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            namespace: string
            tenant?: string | undefined
            format?: 'json' | 'po' | undefined
            annotate?: boolean | undefined
            force?: boolean | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
          }
        } & { json: { translation: TranslationRequest } }
        output: { translation: Translation }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/goals/:goal_key/validate': {
      $put: {
        input: { param: { goal_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { goal: GoalRequest } }
        output: { goal: Goal }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags/:name': {
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { name: string } } & { json: { tag: TagRequest } }
        output: { tag: Tag }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/sources/:key/rehearse': {
      $post: {
        input: { param: { key: string } } & { query: { environment?: string | undefined } } & {
          json: SourceRehearseRequest
        }
        output: SourceRehearseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/schemas': {
      $get: {
        input: {
          query: {
            item_type?: string | undefined
            environment?: string | undefined
            branch?: string | undefined
          }
        }
        output: { entries: ItemSchema[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/channel_groups': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: ChannelGroup[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partials/:partial_key': {
      $delete: {
        input: { param: { partial_key: string } } & { query: { environment?: string | undefined } }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { partial_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: Partial
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { partial_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            force?: boolean | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
          }
        } & { json: { partial: PartialRequest } }
        output: { partial: Partial }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/variables': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            type?: 'public' | 'secret' | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Variable[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/guides/:guide_key': {
      $delete: {
        input: { param: { guide_key: string } }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { guide_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: Guide
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { guide_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            force?: boolean | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
          }
        } & { json: { guide: GuideRequest } }
        output: { guide: Guide }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/sources/:key': {
      $get: {
        input: { param: { key: string } } & {
          query: { environment?: string | undefined; annotate?: boolean | undefined }
        }
        output: Source
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { key: string } } & {
          query: { environment?: string | undefined; annotate?: boolean | undefined }
        } & { json: { source: SourceRequest } }
        output: { source: Source }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reusable_requests/:reusable_request_key/validate': {
      $put: {
        input: { param: { reusable_request_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { reusable_request: ReusableRequestRequest } }
        output: { reusable_request: ReusableRequest }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commits/:id/promote': {
      $put: {
        input: { param: { id: string } }
        output: { commit: Commit; promote_group: PromoteGroup }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/headless_accounts/status': {
      $get:
        | { input: {}; output: HeadlessAccountStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/message_types/:message_type_key/validate': {
      $put: {
        input: { param: { message_type_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { message_type: MessageTypeRequest } }
        output: { message_type: MessageType }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:workflow_key/unarchive': {
      $put: {
        input: { param: { workflow_key: string } } & { query: { environment?: string | undefined } }
        output: { workflow: Workflow }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/channels': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            include?: 'environment_settings'[] | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Channel[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/environments/:environment_slug': {
      $get: {
        input: { param: { environment_slug: string } }
        output: Environment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partials': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Partial[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/warehouse_syncs/:warehouse_sync_key/settings': {
      $put: {
        input: { param: { warehouse_sync_key: string } } & {
          query: { environment?: string | undefined }
        } & { json: WarehouseSyncSettingsRequest }
        output: { warehouse_sync: WarehouseSync }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/message_types/:message_type_key': {
      $get: {
        input: { param: { message_type_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: MessageType
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { message_type_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            force?: boolean | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
          }
        } & { json: { message_type: MessageTypeRequest } }
        output: { message_type: MessageType }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/members/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: string } }; output: Member; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/audiences/:audience_key': {
      $delete: {
        input: { param: { audience_key: string } } & { query: { environment?: string | undefined } }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { audience_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: Audience
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { audience_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            force?: boolean | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
          }
        } & { json: { audience: AudienceRequest } }
        output: { audience: Audience }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/webhooks': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            event_type?: string | undefined
            active?: boolean | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Webhook[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { environment?: string | undefined; branch?: string | undefined } } & {
          json: { webhook: WebhookRequest }
        }
        output: { webhook: Webhook }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partials/:partial_key/discard': {
      $put: {
        input: { param: { partial_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        }
        output: { partial: Partial }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/preference_center': {
      $get: {
        input: { query: { environment?: string | undefined } }
        output: { config?: { [x: string]: unknown } | undefined; enabled?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { query: { environment?: string | undefined } } & {
          json: { config: { [x: string]: unknown }; enabled?: boolean | undefined }
        }
        output: { config?: { [x: string]: unknown } | undefined; enabled?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commits': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            promoted?: boolean | undefined
            resource_type?:
              | 'audience'
              | 'email_layout'
              | 'guide'
              | 'message_type'
              | 'partial'
              | 'reusable_request'
              | 'translation'
              | 'workflow'
              | (
                  | 'audience'
                  | 'email_layout'
                  | 'guide'
                  | 'message_type'
                  | 'partial'
                  | 'reusable_request'
                  | 'translation'
                  | 'workflow'
                )[]
              | undefined
            resource_id?: string | undefined
            promote_group_id?: string | undefined
            promoted_from_environment?: string | undefined
            since?: string | undefined
            until?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Commit[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
            resource_type?:
              | 'audience'
              | 'email_layout'
              | 'guide'
              | 'message_type'
              | 'partial'
              | 'reusable_request'
              | 'translation'
              | 'workflow'
              | (
                  | 'audience'
                  | 'email_layout'
                  | 'guide'
                  | 'message_type'
                  | 'partial'
                  | 'reusable_request'
                  | 'translation'
                  | 'workflow'
                )[]
              | undefined
            resource_id?: string | undefined
          }
        }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/headless_accounts/claim': {
      $post:
        | {
            input: { json: HeadlessAccountClaimRequest }
            output: HeadlessAccountClaim
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: HeadlessAccountClaimRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: HeadlessAccountClaimRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: HeadlessAccountClaimRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { json: HeadlessAccountClaimRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: HeadlessAccountClaimRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: HeadlessAccountClaimRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/warehouses/:warehouse_key': {
      $get: {
        input: { param: { warehouse_key: string } } & {
          query: { environment?: string | undefined }
        }
        output: Warehouse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/billing/summary': {
      $get:
        | { input: {}; output: BillingSummary; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/warehouse_syncs': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: { entries: WarehouseSync[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/schemas/:item_type': {
      $get: {
        input: { param: { item_type: string } } & {
          query: {
            collection?: string | undefined
            environment?: string | undefined
            branch?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { item_type: string } } & {
          query: {
            collection?: string | undefined
            environment?: string | undefined
            branch?: string | undefined
          }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/broadcasts/:broadcast_key/cancel': {
      $put: {
        input: { param: { broadcast_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        }
        output: { broadcast: Broadcast }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reusable_requests': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: ReusableRequest[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/environments/:environment_slug/defaults': {
      $get: {
        input: { param: { environment_slug: string } }
        output: EnvironmentDefaults
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { environment_slug: string } } & { json: UpsertEnvironmentDefaultsRequest }
        output: EnvironmentDefaults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/branches': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Branch[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partials/:partial_key/unarchive': {
      $put: {
        input: { param: { partial_key: string } } & { query: { environment?: string | undefined } }
        output: { partial: Partial }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reusable_requests/:reusable_request_key': {
      $delete: {
        input: { param: { reusable_request_key: string } } & {
          query: { environment?: string | undefined }
        }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { reusable_request_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: ReusableRequest
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { reusable_request_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            force?: boolean | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
          }
        } & { json: { reusable_request: ReusableRequestRequest } }
        output: { reusable_request: ReusableRequest }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/preference_categories': {
      $get: { input: {}; output: PreferenceCategoriesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/audit_logs': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            action?: string | string[] | undefined
            actor_id?: string | string[] | undefined
            resource_type?:
              | 'account'
              | 'account_user'
              | 'api_key'
              | 'asset'
              | 'audience'
              | 'broadcast'
              | 'channel'
              | 'channel_group'
              | 'email_layout'
              | 'environment'
              | 'environment_defaults'
              | 'event_action_mapping'
              | 'external_audience'
              | 'goal'
              | 'guide'
              | 'guide_group'
              | 'invite'
              | 'member'
              | 'message_type'
              | 'object'
              | 'partial'
              | 'permission_group'
              | 'preference_category'
              | 'preference_center'
              | 'preference_center_domain'
              | 'reusable_request'
              | 'service_token'
              | 'signing_key'
              | 'source'
              | 'subscription'
              | 'tag'
              | 'translation'
              | 'user'
              | 'variable'
              | 'view'
              | 'webhook'
              | 'workflow'
              | (
                  | 'account'
                  | 'account_user'
                  | 'api_key'
                  | 'asset'
                  | 'audience'
                  | 'broadcast'
                  | 'channel'
                  | 'channel_group'
                  | 'email_layout'
                  | 'environment'
                  | 'environment_defaults'
                  | 'event_action_mapping'
                  | 'external_audience'
                  | 'goal'
                  | 'guide'
                  | 'guide_group'
                  | 'invite'
                  | 'member'
                  | 'message_type'
                  | 'object'
                  | 'partial'
                  | 'permission_group'
                  | 'preference_category'
                  | 'preference_center'
                  | 'preference_center_domain'
                  | 'reusable_request'
                  | 'service_token'
                  | 'signing_key'
                  | 'source'
                  | 'subscription'
                  | 'tag'
                  | 'translation'
                  | 'user'
                  | 'variable'
                  | 'view'
                  | 'webhook'
                  | 'workflow'
                )[]
              | undefined
            since?: string | undefined
            until?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: AuditLog[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email_layouts/:email_layout_key': {
      $get: {
        input: { param: { email_layout_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: EmailLayout
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { email_layout_key: string } } & {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            force?: boolean | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
            allow_empty?: boolean | undefined
          }
        } & { json: { email_layout: EmailLayoutRequest } }
        output: { email_layout: EmailLayout }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/goals/:goal_key/attachments/:resource_type/:resource_key': {
      $delete: {
        input: {
          param: {
            goal_key: string
            resource_type: 'workflow' | 'guide' | 'broadcast'
            resource_key: string
          }
        } & { query: { environment?: string | undefined } }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            goal_key: string
            resource_type: 'workflow' | 'guide' | 'broadcast'
            resource_key: string
          }
        } & { query: { environment?: string | undefined } } & {
          json: { attachment: GoalAttachmentRequest }
        }
        output: { attachment: GoalResourceAttachment }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/broadcasts/:broadcast_key/run': {
      $put: {
        input: { param: { broadcast_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: BroadcastRunRequest }
        output: BroadcastRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partials/preview': {
      $post: {
        input: { query: { environment?: string | undefined; branch?: string | undefined } } & {
          json: PreviewPartialRequest
        }
        output: PreviewPartialResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/assets/uploads': {
      $post: {
        input: { json: AssetUploadRequest }
        output: AssetUpload
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/warehouses': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Warehouse[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email_layouts/:email_layout_key/validate': {
      $put: {
        input: { param: { email_layout_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { email_layout: EmailLayoutRequest } }
        output: { email_layout: EmailLayout }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reusable_requests/:reusable_request_key/unarchive': {
      $put: {
        input: { param: { reusable_request_key: string } } & {
          query: { environment?: string | undefined }
        }
        output: { reusable_request: ReusableRequest }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/members': {
      $get: {
        input: {
          query: {
            role?: string | undefined
            email?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: Member[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:workflow_key/steps/:step_ref/preview_template': {
      $post: {
        input: { param: { workflow_key: string; step_ref: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: PreviewWorkflowTemplateRequest }
        output: PreviewWorkflowTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/translations/:locale_code/validate': {
      $put: {
        input: { param: { locale_code: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { translation: TranslationRequest } }
        output: { translation: Translation }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/warehouse_syncs/:warehouse_sync_key/runs': {
      $get: {
        input: { param: { warehouse_sync_key: string } } & {
          query: { environment?: string | undefined }
        }
        output: { entries: WarehouseSyncRun[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/preference_categories/:name': {
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { name: string } }
        output: { preference_category: PreferenceCategory }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/branches/:branch_slug/rebase': {
      $put: {
        input: { param: { branch_slug: string } } & { query: { environment?: string | undefined } }
        output: Branch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/broadcasts': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: { entries: Broadcast[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: { entries: Workflow[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:workflow_key/discard': {
      $put: {
        input: { param: { workflow_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        }
        output: { workflow: Workflow }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/guides/:guide_key/validate': {
      $put: {
        input: { param: { guide_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { guide: GuideRequest } }
        output: { guide: Guide }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:workflow_key/run': {
      $put: {
        input: { param: { workflow_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: RunWorkflowRequest }
        output: RunWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/broadcasts/:broadcast_key/send': {
      $put: {
        input: { param: { broadcast_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: BroadcastSendRequest }
        output: { broadcast: Broadcast }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/broadcasts/:broadcast_key/validate': {
      $put: {
        input: { param: { broadcast_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { broadcast: BroadcastRequest } }
        output: { broadcast: Broadcast }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/guides/:guide_key/unarchive': {
      $put: {
        input: { param: { guide_key: string } } & { query: { environment?: string | undefined } }
        output: { guide: Guide }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/schemas/:item_type/validate': {
      $put: {
        input: { param: { item_type: string } } & {
          query: {
            collection?: string | undefined
            environment?: string | undefined
            branch?: string | undefined
          }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/channel_groups/:channel_group_key': {
      $delete: {
        input: { param: { channel_group_key: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { channel_group_key: string } }
        output: ChannelGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { channel_group_key: string } } & {
          json: { channel_group: ChannelGroupRequest }
        }
        output: { channel_group: ChannelGroup }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/sources/:key/events': {
      $get: {
        input: { param: { key: string } } & { query: { environment?: string | undefined } }
        output: SourceEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/warehouse_syncs/:warehouse_sync_key/validate': {
      $put: {
        input: { param: { warehouse_sync_key: string } } & {
          query: { environment?: string | undefined }
        } & { json: { warehouse_sync: WarehouseSyncRequest } }
        output: { warehouse_sync: WarehouseSyncRequest }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/source_providers': {
      $get: { input: {}; output: SourceProvidersResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/audiences/:audience_key/validate': {
      $put: {
        input: { param: { audience_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { audience: AudienceRequest } }
        output: { audience: Audience }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags': { $get: { input: {}; output: TagsResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/v1/preference_center/reset': {
      $put: {
        input: { query: { environment?: string | undefined } }
        output: { config?: { [x: string]: unknown } | undefined; enabled?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/api_keys/exchange': {
      $post: {
        input: {
          query: { environment?: string | undefined; type?: 'secret' | 'public' | undefined }
        }
        output: { api_key: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/webhooks/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        }
        output: { result: string }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { webhook: WebhookRequest } }
        output: { webhook: Webhook }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/warehouse_syncs/:warehouse_sync_key': {
      $get: {
        input: { param: { warehouse_sync_key: string } } & {
          query: {
            environment?: string | undefined
            hide_uncommitted_changes?: boolean | undefined
          }
        }
        output: WarehouseSync
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { warehouse_sync_key: string } } & {
          query: {
            environment?: string | undefined
            commit?: boolean | undefined
            commit_message?: string | undefined
          }
        } & { json: { warehouse_sync: WarehouseSyncRequest } }
        output: { warehouse_sync: WarehouseSync }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/goals/:goal_key/clone': {
      $post: {
        input: { param: { goal_key: string } } & { query: { environment?: string | undefined } } & {
          json: { clone: CloneGoalRequest }
        }
        output: { goal: Goal }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:workflow_key/activate': {
      $put: {
        input: { param: { workflow_key: string } } & {
          query: { environment?: string | undefined; branch?: string | undefined }
        } & { json: { status: boolean } }
        output: { workflow: Workflow }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/channels/:channel_key': {
      $get: {
        input: { param: { channel_key: string } }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email_layouts': {
      $get: {
        input: {
          query: {
            environment?: string | undefined
            branch?: string | undefined
            annotate?: boolean | undefined
            hide_uncommitted_changes?: boolean | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: { entries: EmailLayout[]; page_info: PageInfo }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/source_providers/:key': {
      $get: {
        input: { param: { key: string } } & {
          query: {
            include?:
              | (
                  | 'branding'
                  | 'default_action_mappings'
                  | 'example_payloads'
                  | 'preprocessing_script'
                  | 'static_fields'
                )[]
              | undefined
          }
        }
        output: SourceProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/branches/:branch_slug': {
      $delete: {
        input: { param: { branch_slug: string } } & { query: { environment?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { branch_slug: string } } & { query: { environment?: string | undefined } }
        output: Branch
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { branch_slug: string } } & { query: { environment?: string | undefined } }
        output: Branch
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/sources/:key/logs': {
      $get: {
        input: { param: { key: string } } & {
          query: {
            environment?: string | undefined
            date?: string | undefined
            starting_at?: string | undefined
            ending_at?: string | undefined
            event?: string | undefined
            id?: string | undefined
            include?: 'actions'[] | undefined
            after?: string | undefined
            before?: string | undefined
            limit?: number | undefined
          }
        }
        output: SourceLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/goals/:goal_key/attachments': {
      $get: {
        input: { param: { goal_key: string } } & { query: { environment?: string | undefined } }
        output: { attachments: GoalResourceAttachment[] }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
