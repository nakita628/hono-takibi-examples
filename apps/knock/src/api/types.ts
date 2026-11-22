type Object = {
  __typename: string
  collection: string
  created_at?: (string | null) | undefined
  id: string
  properties?: { [x: string]: unknown } | undefined
  updated_at: string
}
type PushChannelDataTokensOnly = { tokens: string[] }
type PushChannelDataDevicesOnly = {
  devices: {
    locale?: (string | null) | undefined
    timezone?: (string | null) | undefined
    token: string
  }[]
}
type AWSSNSPushChannelDataTargetARNsOnly = { target_arns: string[] }
type AWSSNSPushChannelDataDevicesOnly = {
  devices: {
    locale?: (string | null) | undefined
    target_arn: string
    timezone?: (string | null) | undefined
  }[]
}
type OneSignalChannelDataPlayerIdsOnly = { player_ids: string[] }
type SlackTokenConnection = {
  access_token?: (string | null) | undefined
  channel_id?: (string | null) | undefined
  channel_name?: (string | null) | undefined
  knock_tenant_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
}
type SlackIncomingWebhookConnection = {
  incoming_webhook: { url: string }
  knock_tenant_id?: (string | null) | undefined
}
type SlackChannelData = {
  connections: (SlackTokenConnection | SlackIncomingWebhookConnection)[]
  token?: ({ access_token: string | null } | null) | undefined
}
type MsTeamsTokenConnection = {
  knock_tenant_id?: (string | null) | undefined
  ms_teams_channel_id?: (string | null) | undefined
  ms_teams_team_id?: (string | null) | undefined
  ms_teams_tenant_id?: (string | null) | undefined
  ms_teams_user_id?: (string | null) | undefined
}
type MsTeamsIncomingWebhookConnection = {
  incoming_webhook: { url: string }
  knock_tenant_id?: (string | null) | undefined
}
type MsTeamsChannelData = {
  connections: (MsTeamsTokenConnection | MsTeamsIncomingWebhookConnection)[]
  ms_teams_tenant_id?: (string | null) | undefined
}
type DiscordChannelConnection = {
  channel_id: string
  knock_tenant_id?: (string | null) | undefined
}
type DiscordIncomingWebhookConnection = {
  incoming_webhook: { url: string }
  knock_tenant_id?: (string | null) | undefined
}
type DiscordChannelData = {
  connections: (DiscordChannelConnection | DiscordIncomingWebhookConnection)[]
}
type InlineChannelDataRequest = {
  [x: string]:
    | PushChannelDataTokensOnly
    | PushChannelDataDevicesOnly
    | AWSSNSPushChannelDataTargetARNsOnly
    | AWSSNSPushChannelDataDevicesOnly
    | OneSignalChannelDataPlayerIdsOnly
    | SlackChannelData
    | MsTeamsChannelData
    | DiscordChannelData
}
type Condition = {
  argument: string | null
  operator:
    | 'equal_to'
    | 'not_equal_to'
    | 'greater_than'
    | 'less_than'
    | 'greater_than_or_equal_to'
    | 'less_than_or_equal_to'
    | 'contains'
    | 'not_contains'
    | 'empty'
    | 'not_empty'
    | 'exists'
    | 'not_exists'
    | 'contains_all'
    | 'not_contains_all'
    | 'is_timestamp'
    | 'is_not_timestamp'
    | 'is_timestamp_on_or_after'
    | 'is_timestamp_before'
    | 'is_timestamp_on_or_after_date'
    | 'is_timestamp_before_date'
    | 'is_timestamp_between'
    | 'is_between'
    | 'is_audience_member'
    | 'is_not_audience_member'
  variable: string
}
type PreferenceSetChannelTypeSetting = { conditions: Condition[] }
type PreferenceSetChannelTypes = {
  chat?: boolean | PreferenceSetChannelTypeSetting | undefined
  email?: boolean | PreferenceSetChannelTypeSetting | undefined
  http?: boolean | PreferenceSetChannelTypeSetting | undefined
  in_app_feed?: boolean | PreferenceSetChannelTypeSetting | undefined
  push?: boolean | PreferenceSetChannelTypeSetting | undefined
  sms?: boolean | PreferenceSetChannelTypeSetting | undefined
}
type PreferenceSetChannelSetting = { conditions: Condition[] }
type PreferenceSetChannels = { [x: string]: boolean | PreferenceSetChannelSetting }
type PreferenceSetWorkflowCategorySetting =
  | boolean
  | {
      channel_types?: PreferenceSetChannelTypes | ({ [x: string]: unknown } | null) | undefined
      channels?: PreferenceSetChannels | ({ [x: string]: unknown } | null) | undefined
      conditions?: (Condition[] | null) | undefined
    }
type PreferenceSetCommercialSubscribedSetting = { conditions: Condition[] }
type PreferenceSetRequest = {
  __persistence_strategy__?: 'merge' | 'replace' | undefined
  categories?:
    | { [x: string]: PreferenceSetWorkflowCategorySetting }
    | ({ [x: string]: unknown } | null)
    | undefined
  channel_types?: PreferenceSetChannelTypes | ({ [x: string]: unknown } | null) | undefined
  channels?: PreferenceSetChannels | ({ [x: string]: unknown } | null) | undefined
  commercial_subscribed?:
    | boolean
    | PreferenceSetCommercialSubscribedSetting
    | ({ [x: string]: unknown } | null)
    | undefined
  workflows?:
    | { [x: string]: PreferenceSetWorkflowCategorySetting }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type InlinePreferenceSetRequest = { [x: string]: PreferenceSetRequest }
type SetObjectRequest = {
  channel_data?: InlineChannelDataRequest | undefined
  locale?: (string | null) | undefined
  name?: (string | null) | undefined
  preferences?: InlinePreferenceSetRequest | undefined
  timezone?: (string | null) | undefined
}
type GuideInteractedRequest = {
  channel_id: string
  guide_id: string
  guide_key: string
  guide_step_ref: string
  metadata?: { [x: string]: unknown } | undefined
  tenant?: string | undefined
}
type GuideActionResponse = { status: string }
type RecipientReference = string | { collection?: string | undefined; id?: string | undefined }
type User = {
  __typename: string
  avatar?: (string | null) | undefined
  created_at?: (string | null) | undefined
  email?: (string | null) | undefined
  id: string
  name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  timezone?: (string | null) | undefined
  updated_at: string
}
type Recipient = User | Object
type Subscription = {
  __typename: string
  inserted_at: string
  object: Object
  properties?: ({ [x: string]: unknown } | null) | undefined
  recipient: Recipient
  updated_at: string
}
type PageInfo = {
  __typename: string
  after?: (string | null) | undefined
  before?: (string | null) | undefined
  page_size: number
}
type ListSubscriptionsResponse = { entries: Subscription[]; page_info: PageInfo }
type CancelWorkflowRequest = {
  cancellation_key: string
  recipients?: (RecipientReference[] | null) | undefined
}
type GuideUnarchivedRequest = { guide_key: string; tenant?: string | undefined }
type GuideArchivedRequest = {
  channel_id: string
  guide_id: string
  guide_key: string
  guide_step_ref: string
  is_final?: boolean | undefined
  tenant?: string | undefined
  unthrottled?: boolean | undefined
}
type PreferenceSet = {
  categories?:
    | { [x: string]: PreferenceSetWorkflowCategorySetting }
    | ({ [x: string]: unknown } | null)
    | undefined
  channel_types?: PreferenceSetChannelTypes | ({ [x: string]: unknown } | null) | undefined
  channels?: PreferenceSetChannels | ({ [x: string]: unknown } | null) | undefined
  commercial_subscribed?:
    | boolean
    | PreferenceSetCommercialSubscribedSetting
    | ({ [x: string]: unknown } | null)
    | undefined
  id: string
  workflows?:
    | { [x: string]: PreferenceSetWorkflowCategorySetting }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type Message = {
  __typename: string
  actors?: RecipientReference[] | undefined
  archived_at?: (string | null) | undefined
  channel?:
    | {
        created_at: string
        id: string
        key?: (string | null) | undefined
        name?: (string | null) | undefined
        provider: string
        type: 'email' | 'in_app' | 'in_app_feed' | 'in_app_guide' | 'sms' | 'push' | 'chat' | 'http'
        updated_at: string
      }
    | undefined
  channel_id: string
  clicked_at?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
  id: string
  inserted_at: string
  interacted_at?: (string | null) | undefined
  link_clicked_at?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  read_at?: (string | null) | undefined
  recipient: RecipientReference
  recipient_snapshot?:
    | ({
        channel_id?: (string | null) | undefined
        email?: (string | null) | undefined
        name?: (string | null) | undefined
        user_id?: (string | null) | undefined
        via_incoming_webhook?: (boolean | null) | undefined
      } | null)
    | undefined
  scheduled_at?: (string | null) | undefined
  seen_at?: (string | null) | undefined
  source: {
    __typename: string
    branch_path?: ({ branch_id: string; step_ref: string; step_type: string }[] | null) | undefined
    categories: string[]
    key: string
    step_ref?: (string | null) | undefined
    type?: 'broadcast' | 'workflow' | 'guide' | undefined
    version_id: string
    workflow_recipient_run_id?: (string | null) | undefined
    workflow_run_id?: (string | null) | undefined
  }
  status:
    | 'queued'
    | 'sent'
    | 'delivered'
    | 'delivery_attempted'
    | 'undelivered'
    | 'not_sent'
    | 'bounced'
  tenant?: (string | null) | undefined
  updated_at: string
  workflow?: (string | null) | undefined
}
type ListMessagesResponse = { items: Message[]; page_info: PageInfo }
type ChannelsForMsTeamsProviderResponse = {
  ms_teams_channels: {
    createdDateTime?: string | undefined
    description?: (string | null) | undefined
    displayName: string
    id: string
    isArchived?: boolean | undefined
    membershipType?: string | undefined
  }[]
}
type MessageInteractedRequest = { metadata?: { [x: string]: unknown } | undefined }
type MessageEvent = {
  __typename: string
  data?: ({ [x: string]: unknown } | null) | undefined
  id: string
  inserted_at: string
  recipient: RecipientReference
  type:
    | 'message.created'
    | 'message.queued'
    | 'message.sent'
    | 'message.not_sent'
    | 'message.delivered'
    | 'message.delivery_attempted'
    | 'message.undelivered'
    | 'message.bounced'
    | 'message.complaint'
    | 'message.read'
    | 'message.unread'
    | 'message.seen'
    | 'message.unseen'
    | 'message.archived'
    | 'message.unarchived'
    | 'message.interacted'
    | 'message.link_clicked'
}
type ListMessageEventsResponse = { items: MessageEvent[]; page_info: PageInfo }
type BulkDeleteObjectsRequest = { object_ids: string[] }
type BulkOperation = {
  __typename: string
  completed_at?: (string | null) | undefined
  error_count?: number | undefined
  error_items?: { collection?: (string | null) | undefined; id: string }[] | undefined
  estimated_total_rows: number
  failed_at?: (string | null) | undefined
  id: string
  inserted_at: string
  name: string
  processed_rows: number
  progress_path?: string | undefined
  started_at?: (string | null) | undefined
  status: 'queued' | 'processing' | 'completed' | 'failed'
  success_count: number
  updated_at: string
}
type GuidesResponse = {
  entries: {
    __typename?: string | undefined
    activation_url_patterns?:
      | {
          directive?: string | undefined
          pathname?: string | undefined
          search?: string | undefined
        }[]
      | undefined
    activation_url_rules?:
      | {
          argument?: string | undefined
          directive?: string | undefined
          operator?: string | undefined
          variable?: string | undefined
        }[]
      | undefined
    active?: boolean | undefined
    bypass_global_group_limit?: boolean | undefined
    channel_id?: string | undefined
    dashboard_url?: string | undefined
    id?: string | undefined
    inserted_at?: string | undefined
    key?: string | undefined
    semver?: string | undefined
    steps?:
      | {
          content?: { [x: string]: unknown } | undefined
          message?:
            | {
                archived_at?: (string | null) | undefined
                id?: (string | null) | undefined
                interacted_at?: (string | null) | undefined
                link_clicked_at?: (string | null) | undefined
                read_at?: (string | null) | undefined
                seen_at?: (string | null) | undefined
              }
            | undefined
          ref?: string | undefined
          schema_key?: string | undefined
          schema_semver?: string | undefined
          schema_variant_key?: string | undefined
        }[]
      | undefined
    type?: string | undefined
    updated_at?: string | undefined
  }[]
  guide_group_display_logs: { [x: string]: string }
  guide_groups: {
    __typename?: string | undefined
    display_interval?: number | undefined
    display_sequence?: string[] | undefined
    inserted_at?: string | undefined
    key?: string | undefined
    updated_at?: string | undefined
  }[]
  ineligible_guides: {
    key: string
    message: string
    reason:
      | 'guide_not_active'
      | 'marked_as_archived'
      | 'target_conditions_not_met'
      | 'not_in_target_audience'
  }[]
}
type ScheduleRepeatRule = {
  __typename?: string | undefined
  day_of_month?: (number | null) | undefined
  days?: (('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[] | null) | undefined
  frequency: 'daily' | 'weekly' | 'monthly' | 'hourly'
  hours?: (number | null) | undefined
  interval?: number | undefined
  minutes?: (number | null) | undefined
}
type Schedule = {
  __typename?: string | undefined
  actor?: Recipient | ({ [x: string]: unknown } | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  id: string
  inserted_at: string
  last_occurrence_at?: (string | null) | undefined
  next_occurrence_at?: (string | null) | undefined
  recipient: Recipient
  repeats: ScheduleRepeatRule[]
  tenant?: (string | null) | undefined
  updated_at: string
  workflow: string
}
type ListSchedulesResponse = { entries: Schedule[]; page_info: PageInfo }
type MessageEmailContent = {
  __typename: string
  bcc?: (string | null) | undefined
  cc?: (string | null) | undefined
  from: string
  html_body: string
  reply_to?: (string | null) | undefined
  subject_line: string
  text_body: string
  to: string
}
type MessageSmsContent = { __typename: string; body: string; to: string }
type MessagePushContent = {
  __typename: string
  body: string
  data?: ({ [x: string]: unknown } | null) | undefined
  title: string
  token: string
}
type Block = { content: string; name: string; type: 'text' | 'markdown' }
type MessageChatContent = {
  __typename: string
  connection: { [x: string]: unknown }
  metadata?: ({ [x: string]: unknown } | null) | undefined
  template: {
    blocks?: (Block[] | null) | undefined
    json_content?: ({ [x: string]: unknown } | null) | undefined
    summary?: (string | null) | undefined
  }
}
type MessageInAppFeedContentBlock = {
  content: string
  name: string
  rendered: string
  type: 'markdown' | 'text'
}
type MessageInAppFeedButtonSetBlock = {
  buttons: { action: string; label: string; name: string }[]
  name: string
  type: 'button_set'
}
type MessageInAppFeedContent = {
  __typename: string
  blocks: (MessageInAppFeedContentBlock | MessageInAppFeedButtonSetBlock)[]
}
type MessageContents = {
  __typename: string
  data:
    | MessageEmailContent
    | MessageSmsContent
    | MessagePushContent
    | MessageChatContent
    | MessageInAppFeedContent
  inserted_at: string
  message_id: string
}
type MsTeamsAuthCheckResponse = {
  connection: {
    ms_teams_tenant_id?: (string | null) | undefined
    ok: boolean
    reason?: (string | null) | undefined
  }
}
type UserInAppFeedSettingsResponse = { features: { branding_required: boolean } }
type GuideResetRequest = { guide_key: string; tenant?: string | undefined }
type Activity = {
  __typename?: string | undefined
  actor?: Recipient | ({ [x: string]: unknown } | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  id?: string | undefined
  inserted_at?: string | undefined
  recipient?: Recipient | undefined
  updated_at?: string | undefined
}
type ListActivitiesResponse = { items: Activity[]; page_info: PageInfo }
type Tenant = {
  __typename: string
  id: string
  name?: (string | null) | undefined
  settings?:
    | ({
        branding?:
          | ({
              dark_icon_url?: (string | null) | undefined
              dark_logo_url?: (string | null) | undefined
              dark_primary_color?: (string | null) | undefined
              dark_primary_color_contrast?: (string | null) | undefined
              icon_url?: (string | null) | undefined
              logo_url?: (string | null) | undefined
              primary_color?: (string | null) | undefined
              primary_color_contrast?: (string | null) | undefined
            } | null)
          | undefined
        preference_set?: PreferenceSet | ({ [x: string]: unknown } | null) | undefined
      } | null)
    | undefined
}
type ListTenantsResponse = { entries: Tenant[]; page_info: PageInfo }
type NotifyRequest = {
  actor: RecipientReference
  cancellation_key?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  name: string
  recipients: RecipientReference[]
}
type NotifyResponse = { result_id: string }
type BatchMessagesStatusRequest = { message_ids: string[] }
type InAppFeedItem = {
  __typename: string
  activities: Activity[]
  actors: Recipient[]
  archived_at?: (string | null) | undefined
  blocks: (MessageInAppFeedContentBlock | MessageInAppFeedButtonSetBlock)[]
  clicked_at?: (string | null) | undefined
  data: { [x: string]: unknown } | null
  id: string
  inserted_at: string
  interacted_at?: (string | null) | undefined
  link_clicked_at?: (string | null) | undefined
  read_at?: (string | null) | undefined
  seen_at?: (string | null) | undefined
  source: { __typename: string; categories: string[]; key: string; version_id: string }
  tenant: string | null
  total_activities: number
  total_actors: number
  updated_at: string
}
type UserInAppFeedResponse = {
  entries: InAppFeedItem[]
  meta: { __typename: string; total_count: number; unread_count: number; unseen_count: number }
  page_info: PageInfo
  vars: { [x: string]: unknown }
}
type TeamsForMsTeamsProviderResponse = {
  ms_teams_teams: { description?: (string | null) | undefined; displayName: string; id: string }[]
  skip_token: string | null
}
type MergeUserRequest = { from_user_id: string }
type BulkDeleteSubscriptionsRequest = {
  subscriptions: { id: string; recipients: RecipientReference[] }[]
}
type ListObjectsResponse = { entries: Object[]; page_info: PageInfo }
type ListUsersResponse = { entries?: User[] | undefined; page_info?: PageInfo | undefined }
type WorkflowRecipientRunTriggerSource = {
  audience_key?: (string | null) | undefined
  cancellation_key?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  type:
    | 'api'
    | 'audience'
    | 'schedule'
    | 'broadcast'
    | 'workflow_step'
    | 'integration'
    | 'rehearsal'
}
type WorkflowRecipientRunEvent = {
  __typename: string
  attempt?: number | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  event: string
  id: string
  inserted_at: string
  status: 'ok' | 'error'
  step_ref?: (string | null) | undefined
  step_type?: (string | null) | undefined
}
type WorkflowRecipientRunDetail = {
  __typename: string
  actor?: RecipientReference | ({ [x: string]: unknown } | null) | undefined
  error_count?: number | undefined
  id: string
  inserted_at: string
  recipient: RecipientReference
  status: 'queued' | 'processing' | 'paused' | 'completed' | 'cancelled' | 'exited'
  tenant?: (string | null) | undefined
  trigger_source: WorkflowRecipientRunTriggerSource
  updated_at: string
  workflow: string
  workflow_run_id: string
  events: WorkflowRecipientRunEvent[]
}
type SlackAuthCheckResponse = { connection: { ok: boolean; reason?: (string | null) | undefined } }
type BulkDeleteUsersRequest = { user_ids: string[] }
type CancelRequest = {
  cancellation_key: string
  name: string
  recipients?: RecipientReference[] | undefined
}
type InlineIdentifyUserRequest = {
  avatar?: (string | null) | undefined
  channel_data?: {} | undefined
  created_at?: (string | null) | undefined
  email?: (string | null) | undefined
  id: string
  locale?: (string | null) | undefined
  name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  preferences?: {} | undefined
  timezone?: (string | null) | undefined
}
type BulkIdentifyUsersRequest = { users: InlineIdentifyUserRequest[] }
type TenantRequest = {
  channel_data?: ({ [x: string]: unknown } | null) | InlineChannelDataRequest | undefined
  id: string
  name?: (string | null) | undefined
  preferences?: ({ [x: string]: unknown } | null) | InlinePreferenceSetRequest | undefined
  settings?:
    | {
        branding?:
          | {
              dark_icon_url?: (string | null) | undefined
              dark_logo_url?: (string | null) | undefined
              dark_primary_color?: (string | null) | undefined
              dark_primary_color_contrast?: (string | null) | undefined
              icon_url?: (string | null) | undefined
              logo_url?: (string | null) | undefined
              primary_color?: (string | null) | undefined
              primary_color_contrast?: (string | null) | undefined
            }
          | undefined
        preference_set?: ({ [x: string]: unknown } | null) | PreferenceSetRequest | undefined
      }
    | undefined
}
type InlineTenantRequest = string | TenantRequest
type BulkSetTenantsRequest = { tenants: InlineTenantRequest[] }
type AudienceMemberRequest = {
  tenant?: (string | null) | undefined
  user: {
    avatar?: (string | null) | undefined
    channel_data?: {} | undefined
    created_at?: (string | null) | undefined
    email?: (string | null) | undefined
    id: string
    locale?: (string | null) | undefined
    name?: (string | null) | undefined
    phone_number?: (string | null) | undefined
    preferences?: {} | undefined
    timezone?: (string | null) | undefined
  }
}
type RemoveAudienceMembersRequest = { members: AudienceMemberRequest[] }
type AudienceMember = {
  __typename: string
  added_at: string
  tenant?: (string | null) | undefined
  user: User
  user_id: string
}
type ListAudienceMembersResponse = { entries: AudienceMember[]; page_info: PageInfo }
type AddAudienceMembersRequest = { members: AudienceMemberRequest[] }
type InlineIdentifyObjectRequest = {
  channel_data?: InlineChannelDataRequest | ({ [x: string]: unknown } | null) | undefined
  collection: string
  created_at?: (string | null) | undefined
  id: string
  name?: (string | null) | undefined
  preferences?: InlinePreferenceSetRequest | ({ [x: string]: unknown } | null) | undefined
}
type RecipientRequest = string | InlineIdentifyUserRequest | InlineIdentifyObjectRequest
type TriggerWorkflowRequest = {
  actor?: RecipientRequest | ({ [x: string]: unknown } | null) | undefined
  cancellation_key?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  recipients: RecipientRequest[]
  settings?:
    | ({
        sandbox_mode?: (boolean | null) | undefined
        skip_delay?: (boolean | null) | undefined
      } | null)
    | undefined
  tenant?: InlineTenantRequest | ({ [x: string]: unknown } | null) | undefined
}
type TriggerWorkflowResponse = { workflow_run_id: string }
type IdentifyUserRequest = {
  avatar?: (string | null) | undefined
  channel_data?: {} | undefined
  created_at?: (string | null) | undefined
  email?: (string | null) | undefined
  locale?: (string | null) | undefined
  name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  preferences?: {} | undefined
  timezone?: (string | null) | undefined
}
type BatchMessagesInteractedRequest = {
  message_ids: string[]
  metadata?: ({ [x: string]: unknown } | null) | undefined
}
type SetTenantRequest = {
  channel_data?: ({ [x: string]: unknown } | null) | InlineChannelDataRequest | undefined
  name?: (string | null) | undefined
  settings?:
    | {
        branding?:
          | {
              icon_url?: (string | null) | undefined
              logo_url?: (string | null) | undefined
              primary_color?: (string | null) | undefined
              primary_color_contrast?: (string | null) | undefined
            }
          | undefined
        preference_set?: ({ [x: string]: unknown } | null) | PreferenceSetRequest | undefined
      }
    | undefined
}
type SetTenantResponse = Tenant
type GuideSeenRequest = {
  channel_id: string
  content: { [x: string]: unknown }
  data?: { [x: string]: unknown } | undefined
  guide_id: string
  guide_key: string
  guide_step_ref: string
  tenant?: string | undefined
}
type DeleteSubscriptionsRequest = { recipients: RecipientReference[] }
type SubscriptionsResponse = Subscription[]
type ObjectReference = { collection?: string | undefined; id?: string | undefined }
type UpsertSubscriptionsRequest = {
  properties?: ({ [x: string]: unknown } | null) | undefined
  recipients: RecipientRequest[]
}
type PreferenceCenterConfigRow = {
  channel_types?:
    | (
        | (
            | 'email'
            | 'in_app'
            | 'in_app_feed'
            | 'in_app_guide'
            | 'sms'
            | 'push'
            | 'chat'
            | 'http'
            | 'log'
            | 'deferred_log'
          )[]
        | null
      )
    | undefined
  description?: string | undefined
  identifier?: (string | null) | undefined
  name: string
  type: 'workflow' | 'channel' | 'category' | 'channel_types' | 'commercial_subscribed'
}
type PreferenceCenterConfigData = {
  body: string
  rows: PreferenceCenterConfigRow[]
  show_account_name?: boolean | undefined
  title: string
}
type PreferenceCenterConfigWithMetadata = {
  account_name: string | null
  branding: {
    icon_url?: (string | null) | undefined
    logo_url?: (string | null) | undefined
    primary_color?: (string | null) | undefined
    primary_color_contrast?: (string | null) | undefined
    dark?:
      | {
          icon_url?: (string | null) | undefined
          logo_url?: (string | null) | undefined
          primary_color?: (string | null) | undefined
          primary_color_contrast?: (string | null) | undefined
        }
      | undefined
  }
  config: PreferenceCenterConfigData
  enabled: boolean
  knock_branding_required?: boolean | undefined
  user_email: string | null
}
type PushChannelDataFull = {
  devices: {
    locale?: (string | null) | undefined
    timezone?: (string | null) | undefined
    token: string
  }[]
  tokens: string[]
}
type AWSSNSPushChannelDataFull = {
  devices: {
    locale?: (string | null) | undefined
    target_arn: string
    timezone?: (string | null) | undefined
  }[]
  target_arns: string[]
}
type ChannelData = {
  __typename: string
  channel_id: string
  data:
    | PushChannelDataFull
    | AWSSNSPushChannelDataFull
    | OneSignalChannelDataPlayerIdsOnly
    | SlackChannelData
    | MsTeamsChannelData
    | DiscordChannelData
  provider?:
    | 'push_fcm'
    | 'push_apns'
    | 'push_aws_sns'
    | 'push_expo'
    | 'push_one_signal'
    | 'chat_slack'
    | 'chat_ms_teams'
    | 'chat_discord'
    | 'http_knock_webhook'
    | undefined
}
type ChannelDataRequest = {
  data:
    | PushChannelDataTokensOnly
    | PushChannelDataDevicesOnly
    | AWSSNSPushChannelDataTargetARNsOnly
    | AWSSNSPushChannelDataDevicesOnly
    | OneSignalChannelDataPlayerIdsOnly
    | SlackChannelData
    | MsTeamsChannelData
    | DiscordChannelData
}
type DeleteSchedulesRequest = { schedule_ids: string[] }
type SchedulesResponse = Schedule[]
type CreateSchedulesRequest = {
  actor?: RecipientRequest | ({ [x: string]: unknown } | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  ending_at?: (string | null) | undefined
  recipients: RecipientRequest[]
  repeats?: ScheduleRepeatRule[] | undefined
  scheduled_at?: (string | null) | undefined
  tenant?: InlineTenantRequest | ({ [x: string]: unknown } | null) | undefined
  workflow: string
}
type UpdateSchedulesRequest = {
  actor?: RecipientReference | ({ [x: string]: unknown } | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  ending_at?: (string | null) | undefined
  repeats?: ScheduleRepeatRule[] | undefined
  schedule_ids: string[]
  scheduled_at?: (string | null) | undefined
  tenant?: InlineTenantRequest | ({ [x: string]: unknown } | null) | undefined
}
type BulkSetObjectRequest = {
  channel_data?: InlineChannelDataRequest | ({ [x: string]: unknown } | null) | undefined
  created_at?: (string | null) | undefined
  id: string
  name?: (string | null) | undefined
  preferences?: InlinePreferenceSetRequest | ({ [x: string]: unknown } | null) | undefined
}
type BulkSetObjectsRequest = { objects: BulkSetObjectRequest[] }
type BulkCreateSchedulesRequest = {
  schedules: {
    actor?: RecipientRequest | ({ [x: string]: unknown } | null) | undefined
    data?: ({ [x: string]: unknown } | null) | undefined
    ending_at?: (string | null) | undefined
    recipient?: RecipientRequest | undefined
    repeats?: ScheduleRepeatRule[] | undefined
    scheduled_at?: (string | null) | undefined
    tenant?: InlineTenantRequest | ({ [x: string]: unknown } | null) | undefined
    workflow: string
  }[]
}
type ChannelsForSlackProviderResponse = {
  next_cursor: string | null
  slack_channels: {
    context_team_id: string
    id: string
    is_im: boolean
    is_private: boolean
    name: string
  }[]
}
type WorkflowRecipientRun = {
  __typename: string
  actor?: RecipientReference | ({ [x: string]: unknown } | null) | undefined
  error_count?: number | undefined
  id: string
  inserted_at: string
  recipient: RecipientReference
  status: 'queued' | 'processing' | 'paused' | 'completed' | 'cancelled' | 'exited'
  tenant?: (string | null) | undefined
  trigger_source: WorkflowRecipientRunTriggerSource
  updated_at: string
  workflow: string
  workflow_run_id: string
}
type ListWorkflowRecipientRunsResponse = { items: WorkflowRecipientRun[]; page_info: PageInfo }
type BulkPreferenceSetRequest = {
  categories?:
    | { [x: string]: PreferenceSetWorkflowCategorySetting }
    | ({ [x: string]: unknown } | null)
    | undefined
  channel_types?: PreferenceSetChannelTypes | ({ [x: string]: unknown } | null) | undefined
  channels?: PreferenceSetChannels | ({ [x: string]: unknown } | null) | undefined
  commercial_subscribed?:
    | boolean
    | PreferenceSetCommercialSubscribedSetting
    | ({ [x: string]: unknown } | null)
    | undefined
  id?: string | undefined
  workflows?:
    | { [x: string]: PreferenceSetWorkflowCategorySetting }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type BulkSetUserPreferencesRequest = { preferences: BulkPreferenceSetRequest; user_ids: string[] }
type MessageDeliveryLogRequest = {
  body?: string | { [x: string]: unknown } | undefined
  headers?: ({ [x: string]: unknown } | null) | undefined
  host?: string | undefined
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | undefined
  path?: string | undefined
  query?: (string | null) | undefined
}
type MessageDeliveryLogResponse = {
  body?: string | { [x: string]: unknown } | undefined
  headers?: ({ [x: string]: unknown } | null) | undefined
  status?: number | undefined
}
type MessageDeliveryLog = {
  __typename: string
  environment_id: string
  id: string
  inserted_at: string
  request: MessageDeliveryLogRequest
  response: MessageDeliveryLogResponse
  service_name: string
}
type ListMessageDeliveryLogsResponse = { items: MessageDeliveryLog[]; page_info: PageInfo }
type BulkUpdateMessagesForChannelRequest = {
  archived?: 'exclude' | 'include' | 'only' | undefined
  delivery_status?:
    | 'queued'
    | 'sent'
    | 'delivered'
    | 'delivery_attempted'
    | 'undelivered'
    | 'not_sent'
    | 'bounced'
    | undefined
  engagement_status?:
    | 'seen'
    | 'unseen'
    | 'read'
    | 'unread'
    | 'archived'
    | 'unarchived'
    | 'link_clicked'
    | 'interacted'
    | undefined
  has_tenant?: boolean | undefined
  newer_than?: string | undefined
  older_than?: string | undefined
  recipient_ids?: string[] | undefined
  tenants?: string[] | undefined
  trigger_data?: string | undefined
  workflows?: string[] | undefined
}
type BulkUpsertSubscriptionsRequest = {
  subscriptions: {
    id: string
    properties?: ({ [x: string]: unknown } | null) | undefined
    recipients: RecipientRequest[]
  }[]
}
type PreferenceCenterSignedUrlResponse = { token: string; url: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/objects/:collection/:id': {
      $delete: {
        input: { param: { collection: string; id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { collection: string; id: string } }
        output: Object
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { collection: string; id: string } } & { json: SetObjectRequest }
        output: Object
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/guides/messages/interacted': {
      $put: {
        input: { param: { user_id: string } } & { json: GuideInteractedRequest }
        output: GuideActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/integrations/census/custom-destination': {
      $post: {
        input: {
          json: {
            id: string
            jsonrpc: string
            method: string
            params?: { [x: string]: unknown } | undefined
          }
        }
        output: { id?: string | undefined; result?: { [x: string]: unknown } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/subscriptions': {
      $get: {
        input: { param: { user_id: string } } & {
          query: {
            include?: 'preferences'[] | undefined
            'objects[]'?: RecipientReference[] | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:key/cancel': {
      $post: {
        input: { param: { key: string } } & { json: CancelWorkflowRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/users/:user_id/guides/messages/archived': {
      $delete: {
        input: { param: { user_id: string } } & { json: GuideUnarchivedRequest }
        output: GuideActionResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_id: string } } & { json: GuideArchivedRequest }
        output: GuideActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preferences/:id/channel_types': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/objects/:collection/:object_id/preferences/:id/categories': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/messages': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
            tenant?: string | undefined
            channel_id?: string | undefined
            status?:
              | (
                  | 'queued'
                  | 'sent'
                  | 'delivered'
                  | 'delivery_attempted'
                  | 'undelivered'
                  | 'not_sent'
                  | 'bounced'
                )[]
              | undefined
            engagement_status?:
              | (
                  | 'seen'
                  | 'unseen'
                  | 'read'
                  | 'unread'
                  | 'archived'
                  | 'unarchived'
                  | 'link_clicked'
                  | 'interacted'
                )[]
              | undefined
            message_ids?: string[] | undefined
            workflow_categories?: string[] | undefined
            source?: string | undefined
            workflow_run_id?: string | undefined
            workflow_recipient_run_id?: string | undefined
            trigger_data?: string | undefined
            'inserted_at.gt'?: string | undefined
            'inserted_at.gte'?: string | undefined
            'inserted_at.lt'?: string | undefined
            'inserted_at.lte'?: string | undefined
          }
        }
        output: ListMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preferences/:id/channel_types/:type': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/providers/ms-teams/:channel_id/channels': {
      $get: {
        input: { param: { channel_id: string } } & {
          query: {
            ms_teams_tenant_object: string
            team_id: string
            'query_options.$filter'?: string | undefined
            'query_options.$select'?: string | undefined
          }
        }
        output: ChannelsForMsTeamsProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id/interacted': {
      $put: {
        input: { param: { message_id: string } } & { json: MessageInteractedRequest }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id/events': {
      $get: {
        input: { param: { message_id: string } } & {
          query: {
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListMessageEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/messages': {
      $get: {
        input: { param: { user_id: string } } & {
          query: {
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
            tenant?: string | undefined
            channel_id?: string | undefined
            status?:
              | (
                  | 'queued'
                  | 'sent'
                  | 'delivered'
                  | 'delivery_attempted'
                  | 'undelivered'
                  | 'not_sent'
                  | 'bounced'
                )[]
              | undefined
            engagement_status?:
              | (
                  | 'seen'
                  | 'unseen'
                  | 'read'
                  | 'unread'
                  | 'archived'
                  | 'unarchived'
                  | 'link_clicked'
                  | 'interacted'
                )[]
              | undefined
            message_ids?: string[] | undefined
            workflow_categories?: string[] | undefined
            source?: string | undefined
            workflow_run_id?: string | undefined
            workflow_recipient_run_id?: string | undefined
            trigger_data?: string | undefined
            'inserted_at.gt'?: string | undefined
            'inserted_at.gte'?: string | undefined
            'inserted_at.lt'?: string | undefined
            'inserted_at.lte'?: string | undefined
          }
        }
        output: ListMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/providers/slack/:channel_id/revoke_access': {
      $put:
        | {
            input: { param: { channel_id: string } } & { query: { access_token_object: string } }
            output: { ok?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & { query: { access_token_object: string } }
            output: { code: string; message: string; status: number; type: string }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/objects/:collection/bulk/delete': {
      $post: {
        input: { param: { collection: string } } & { json: BulkDeleteObjectsRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preferences/:id/workflows': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/users/:user_id/guides/:channel_id': {
      $get: {
        input: { param: { user_id: string; channel_id: string } } & {
          query: {
            tenant?: string | undefined
            data?: string | undefined
            type?: string | undefined
          }
        }
        output: GuidesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/schedules': {
      $get: {
        input: { param: { user_id: string } } & {
          query: {
            workflow?: string | undefined
            tenant?: string | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListSchedulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/:object_id/preferences/:id/categories/:key': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/users/:user_id/preferences/:id/categories/:key': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/messages/:message_id/content': {
      $get: {
        input: { param: { message_id: string } }
        output: MessageContents
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/providers/ms-teams/:channel_id/auth_check': {
      $get: {
        input: { param: { channel_id: string } } & { query: { ms_teams_tenant_object: string } }
        output: MsTeamsAuthCheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/providers/ms-teams/:channel_id/revoke_access': {
      $put:
        | {
            input: { param: { channel_id: string } } & { query: { ms_teams_tenant_object: string } }
            output: { ok?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & { query: { ms_teams_tenant_object: string } }
            output: { code: string; message: string; status: number; type: string }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/users/:user_id/feeds/:id/settings': {
      $get: {
        input: { param: { user_id: string; id: string } }
        output: UserInAppFeedSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/guides/engagements/reset': {
      $put: {
        input: { param: { user_id: string } } & { json: GuideResetRequest }
        output: GuideActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/:object_id/preferences': {
      $get: {
        input: { param: { object_id: string; collection: string } }
        output: PreferenceSet[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id/activities': {
      $get: {
        input: { param: { message_id: string } } & {
          query: {
            trigger_data?: string | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListActivitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tenants': {
      $get: {
        input: {
          query: {
            tenant_id?: string | undefined
            name?: string | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListTenantsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/:object_id/preferences/:id/workflows': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/objects/:collection/:id/messages': {
      $get: {
        input: { param: { collection: string; id: string } } & {
          query: {
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
            tenant?: string | undefined
            channel_id?: string | undefined
            status?:
              | (
                  | 'queued'
                  | 'sent'
                  | 'delivered'
                  | 'delivery_attempted'
                  | 'undelivered'
                  | 'not_sent'
                  | 'bounced'
                )[]
              | undefined
            engagement_status?:
              | (
                  | 'seen'
                  | 'unseen'
                  | 'read'
                  | 'unread'
                  | 'archived'
                  | 'unarchived'
                  | 'link_clicked'
                  | 'interacted'
                )[]
              | undefined
            message_ids?: string[] | undefined
            workflow_categories?: string[] | undefined
            source?: string | undefined
            workflow_run_id?: string | undefined
            workflow_recipient_run_id?: string | undefined
            trigger_data?: string | undefined
            'inserted_at.gt'?: string | undefined
            'inserted_at.gte'?: string | undefined
            'inserted_at.lt'?: string | undefined
            'inserted_at.lte'?: string | undefined
          }
        }
        output: ListMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/notify': {
      $post: {
        input: { json: NotifyRequest }
        output: NotifyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/batch/archived': {
      $post: {
        input: { json: BatchMessagesStatusRequest }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/feeds/:id': {
      $get: {
        input: { param: { user_id: string; id: string } } & {
          query: {
            status?: 'unread' | 'read' | 'unseen' | 'seen' | 'all' | undefined
            source?: string | undefined
            tenant?: string | undefined
            has_tenant?: boolean | undefined
            workflow_categories?: string[] | undefined
            archived?: 'exclude' | 'include' | 'only' | undefined
            trigger_data?: string | undefined
            locale?: string | undefined
            exclude?: string | undefined
            mode?: 'compact' | 'rich' | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
            'inserted_at.gt'?: string | undefined
            'inserted_at.gte'?: string | undefined
            'inserted_at.lt'?: string | undefined
            'inserted_at.lte'?: string | undefined
          }
        }
        output: UserInAppFeedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/batch/unarchived': {
      $post: {
        input: { json: BatchMessagesStatusRequest }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/providers/ms-teams/:channel_id/teams': {
      $get: {
        input: { param: { channel_id: string } } & {
          query: {
            ms_teams_tenant_object: string
            'query_options.$filter'?: string | undefined
            'query_options.$select'?: string | undefined
            'query_options.$top'?: number | undefined
            'query_options.$skiptoken'?: string | undefined
          }
        }
        output: TeamsForMsTeamsProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/merge': {
      $post: {
        input: { param: { user_id: string } } & { json: MergeUserRequest }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/bulk/subscriptions/delete': {
      $post: {
        input: { param: { collection: string } } & { json: BulkDeleteSubscriptionsRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preferences/:id/categories': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/objects/:collection': {
      $get: {
        input: { param: { collection: string } } & {
          query: {
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
            include?: 'preferences'[] | undefined
          }
        }
        output: ListObjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users': {
      $get: {
        input: {
          query: {
            include?: 'preferences'[] | undefined
            order?: 'asc' | 'desc' | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflow_recipient_runs/:id': {
      $get: {
        input: { param: { id: string } }
        output: WorkflowRecipientRunDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id/seen': {
      $delete: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/providers/slack/:channel_id/auth_check': {
      $get: {
        input: { param: { channel_id: string } } & { query: { access_token_object: string } }
        output: SlackAuthCheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/bulk/delete': {
      $post: {
        input: { json: BulkDeleteUsersRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/notify/cancel': {
      $post: { input: { json: CancelRequest }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/objects/:collection/:object_id/preferences/:id/channel_types/:type': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/objects/:collection/:object_id/preferences/:id/channel_types': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/users/bulk/identify': {
      $post: {
        input: { json: BulkIdentifyUsersRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tenants/bulk/set': {
      $post: {
        input: { json: BulkSetTenantsRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/audiences/:key/members': {
      $delete: {
        input: { param: { key: string } } & { json: RemoveAudienceMembersRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { key: string } }
        output: ListAudienceMembersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { key: string } } & { query: { create_audience?: boolean | undefined } } & {
          json: AddAudienceMembersRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/messages/:message_id/archived': {
      $delete: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workflows/:key/trigger': {
      $post: {
        input: { param: { key: string } } & { json: TriggerWorkflowRequest }
        output: TriggerWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/guides/messages/:message_id/archived': {
      $put: {
        input: { param: { user_id: string } } & { json: GuideArchivedRequest }
        output: GuideActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tenants/bulk/delete': {
      $post: {
        input: { query: { tenant_ids: string[] } }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id/unread': {
      $delete: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id': {
      $delete: {
        input: { param: { user_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { user_id: string } }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_id: string } } & { json: IdentifyUserRequest }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/batch/interacted': {
      $post: {
        input: { json: BatchMessagesInteractedRequest }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tenants/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } } & {
          query: { resolve_full_preference_settings?: boolean | undefined }
        }
        output: Tenant
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { resolve_full_preference_settings?: boolean | undefined }
        } & { json: SetTenantRequest }
        output: SetTenantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/guides/messages/seen': {
      $put: {
        input: { param: { user_id: string } } & { json: GuideSeenRequest }
        output: GuideActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id/unseen': {
      $delete: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/:object_id/subscriptions': {
      $delete: {
        input: { param: { object_id: string; collection: string } } & {
          json: DeleteSubscriptionsRequest
        }
        output: SubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { object_id: string; collection: string } } & {
          query: {
            mode?: 'recipient' | 'object' | undefined
            include?: 'preferences'[] | undefined
            'recipients[]'?: RecipientReference[] | undefined
            'objects[]'?: ObjectReference[] | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { object_id: string; collection: string } } & {
          json: UpsertSubscriptionsRequest
        }
        output: SubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/:object_id/preferences/:id/workflows/:key': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/messages/:message_id/read': {
      $delete: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preference_center/config': {
      $get: {
        input: { param: { user_id: string } }
        output: PreferenceCenterConfigWithMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/channel_data/:channel_id': {
      $delete: {
        input: { param: { user_id: string; channel_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { user_id: string; channel_id: string } }
        output: ChannelData
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_id: string; channel_id: string } } & { json: ChannelDataRequest }
        output: ChannelData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preferences/:id/workflows/:key': {
      $put: { input: {}; output: PreferenceSet; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/schedules': {
      $delete: {
        input: { json: DeleteSchedulesRequest }
        output: SchedulesResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            workflow: string
            'recipients[]'?: RecipientReference[] | undefined
            tenant?: string | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListSchedulesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateSchedulesRequest }
        output: SchedulesResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: UpdateSchedulesRequest }
        output: SchedulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/:object_id/preferences/:id': {
      $delete: {
        input: { param: { object_id: string; collection: string; id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { object_id: string; collection: string; id: string } }
        output: PreferenceSet
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { object_id: string; collection: string; id: string } } & {
          json: PreferenceSetRequest
        }
        output: PreferenceSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/guides/messages/:message_id/seen': {
      $put: {
        input: { param: { user_id: string } } & { json: GuideSeenRequest }
        output: GuideActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/bulk/set': {
      $post: {
        input: { param: { collection: string } } & { json: BulkSetObjectsRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/integrations/hightouch/embedded-destination': {
      $post: {
        input: {
          json: {
            id: string
            jsonrpc: string
            method: string
            params?: { [x: string]: unknown } | undefined
          }
        }
        output: { id?: string | undefined; result?: { [x: string]: unknown } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/batch/unseen': {
      $post: {
        input: { json: BatchMessagesStatusRequest }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/:id/schedules': {
      $get: {
        input: { param: { id: string; collection: string } } & {
          query: {
            tenant?: string | undefined
            workflow?: string | undefined
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListSchedulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/schedules/bulk/create': {
      $post: {
        input: { json: BulkCreateSchedulesRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/:object_id/channel_data/:channel_id': {
      $delete: {
        input: { param: { object_id: string; collection: string; channel_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { object_id: string; collection: string; channel_id: string } }
        output: ChannelData
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { object_id: string; collection: string; channel_id: string } } & {
          json: ChannelDataRequest
        }
        output: ChannelData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/batch/unread': {
      $post: {
        input: { json: BatchMessagesStatusRequest }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/providers/slack/:channel_id/channels': {
      $get:
        | {
            input: { param: { channel_id: string } } & {
              query: {
                access_token_object: string
                'query_options.cursor'?: string | undefined
                'query_options.limit'?: number | undefined
                'query_options.exclude_archived'?: boolean | undefined
                'query_options.types'?: string | undefined
                'query_options.team_id'?: string | undefined
              }
            }
            output: ChannelsForSlackProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                access_token_object: string
                'query_options.cursor'?: string | undefined
                'query_options.limit'?: number | undefined
                'query_options.exclude_archived'?: boolean | undefined
                'query_options.types'?: string | undefined
                'query_options.team_id'?: string | undefined
              }
            }
            output: { code: string; message: string; status: number; type: string }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/workflow_recipient_runs': {
      $get: {
        input: {
          query: {
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
            workflow?: string | undefined
            status?:
              | ('queued' | 'processing' | 'paused' | 'completed' | 'cancelled' | 'exited')[]
              | undefined
            tenant?: string | undefined
            has_errors?: boolean | undefined
            recipient?: RecipientReference | undefined
            starting_at?: string | undefined
            ending_at?: string | undefined
          }
        }
        output: ListWorkflowRecipientRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/batch/seen': {
      $post: {
        input: { json: BatchMessagesStatusRequest }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/bulk/preferences': {
      $post: {
        input: { json: BulkSetUserPreferencesRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/batch/read': {
      $post: {
        input: { json: BatchMessagesStatusRequest }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/batch/content': {
      $get: {
        input: { query: { message_ids: string[] } }
        output: MessageContents[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id/delivery_logs': {
      $get: {
        input: { param: { message_id: string } } & {
          query: {
            after?: string | undefined
            before?: string | undefined
            page_size?: number | undefined
          }
        }
        output: ListMessageDeliveryLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/guides/messages/:message_id/interacted': {
      $put: {
        input: { param: { user_id: string } } & { json: GuideInteractedRequest }
        output: GuideActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id': {
      $get: {
        input: { param: { message_id: string } }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/channels/:channel_id/messages/bulk/:action': {
      $post: {
        input: {
          param: {
            channel_id: string
            action:
              | 'seen'
              | 'unseen'
              | 'read'
              | 'unread'
              | 'archived'
              | 'unarchived'
              | 'interacted'
              | 'archive'
              | 'unarchive'
              | 'delete'
          }
        } & { json: BulkUpdateMessagesForChannelRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/messages/:message_id/unarchived': {
      $delete: {
        input: { param: { message_id: string } }
        output: {
          __typename: string
          actors?: RecipientReference[] | undefined
          archived_at?: (string | null) | undefined
          channel?:
            | {
                created_at: string
                id: string
                key?: (string | null) | undefined
                name?: (string | null) | undefined
                provider: string
                type:
                  | 'email'
                  | 'in_app'
                  | 'in_app_feed'
                  | 'in_app_guide'
                  | 'sms'
                  | 'push'
                  | 'chat'
                  | 'http'
                updated_at: string
              }
            | undefined
          channel_id: string
          clicked_at?: (string | null) | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          engagement_statuses: ('seen' | 'read' | 'interacted' | 'link_clicked' | 'archived')[]
          id: string
          inserted_at: string
          interacted_at?: (string | null) | undefined
          link_clicked_at?: (string | null) | undefined
          metadata?: ({ [x: string]: unknown } | null) | undefined
          read_at?: (string | null) | undefined
          recipient: RecipientReference
          recipient_snapshot?:
            | ({
                channel_id?: (string | null) | undefined
                email?: (string | null) | undefined
                name?: (string | null) | undefined
                user_id?: (string | null) | undefined
                via_incoming_webhook?: (boolean | null) | undefined
              } | null)
            | undefined
          scheduled_at?: (string | null) | undefined
          seen_at?: (string | null) | undefined
          source: {
            __typename: string
            branch_path?:
              | ({ branch_id: string; step_ref: string; step_type: string }[] | null)
              | undefined
            categories: string[]
            key: string
            step_ref?: (string | null) | undefined
            type?: 'broadcast' | 'workflow' | 'guide' | undefined
            version_id: string
            workflow_recipient_run_id?: (string | null) | undefined
            workflow_run_id?: (string | null) | undefined
          }
          status:
            | 'queued'
            | 'sent'
            | 'delivered'
            | 'delivery_attempted'
            | 'undelivered'
            | 'not_sent'
            | 'bounced'
          tenant?: (string | null) | undefined
          updated_at: string
          workflow?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/bulk_operations/:id': {
      $get: {
        input: { param: { id: string } }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preferences': {
      $get: {
        input: { param: { user_id: string } }
        output: PreferenceSet[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preferences/:id': {
      $delete: {
        input: { param: { user_id: string; id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { user_id: string; id: string } } & {
          query: { tenant?: string | undefined }
        }
        output: PreferenceSet
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { user_id: string; id: string } } & { json: PreferenceSetRequest }
        output: PreferenceSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/objects/:collection/bulk/subscriptions/add': {
      $post: {
        input: { param: { collection: string } } & { json: BulkUpsertSubscriptionsRequest }
        output: BulkOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:user_id/preference_center/signed_url': {
      $post: {
        input: { param: { user_id: string } }
        output: PreferenceCenterSignedUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
