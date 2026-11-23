type Config = {
  app_certificate: string
  app_id: string
  default_role?: 'attendee' | 'publisher' | 'subscriber' | 'admin' | undefined
  role_map?: { [x: string]: string } | undefined
}
type LabelThresholds = { block?: number | undefined; flag?: number | undefined }
type Thresholds = {
  explicit?: LabelThresholds | undefined
  spam?: LabelThresholds | undefined
  toxic?: LabelThresholds | undefined
}
type ChannelConfig = {
  automod: 'disabled' | 'simple' | 'AI'
  automod_behavior: 'flag' | 'block'
  automod_thresholds?: Thresholds | undefined
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands: string[]
  connect_events: boolean
  created_at: string
  custom_events: boolean
  max_message_length: number
  message_retention: string
  mutes: boolean
  name: string
  push_notifications: boolean
  quotes: boolean
  reactions: boolean
  read_events: boolean
  reminders: boolean
  replies: boolean
  search: boolean
  typing_events: boolean
  updated_at: string
  uploads: boolean
  url_enrichment: boolean
}
type FileUploadConfig = {
  allowed_file_extensions: string[]
  allowed_mime_types: string[]
  blocked_file_extensions: string[]
  blocked_mime_types: string[]
}
type Policy = {
  action: number
  created_at: string
  name: string
  owner: boolean
  priority: number
  resources: string[]
  roles: string[]
  updated_at: string
}
type APNConfigFields = {
  auth_key?: string | undefined
  auth_type?: string | undefined
  bundle_id?: string | undefined
  development: boolean
  enabled: boolean
  host?: string | undefined
  key_id?: string | undefined
  notification_template: string
  p12_cert?: string | undefined
  team_id?: string | undefined
}
type FirebaseConfigFields = {
  apn_template: string
  credentials_json?: string | undefined
  data_template: string
  enabled: boolean
  notification_template: string
  server_key?: string | undefined
}
type HuaweiConfigFields = { enabled: boolean; id?: string | undefined; secret?: string | undefined }
type PushProvider = {
  apn_auth_key?: string | undefined
  apn_auth_type?: string | undefined
  apn_development?: boolean | undefined
  apn_host?: string | undefined
  apn_key_id?: string | undefined
  apn_notification_template?: string | undefined
  apn_p12_cert?: string | undefined
  apn_team_id?: string | undefined
  apn_topic?: string | undefined
  created_at: string
  description?: string | undefined
  disabled_at?: string | undefined
  disabled_reason?: string | undefined
  firebase_apn_template?: string | undefined
  firebase_credentials?: string | undefined
  firebase_data_template?: string | undefined
  firebase_notification_template?: string | undefined
  firebase_server_key?: string | undefined
  huawei_app_id?: string | undefined
  huawei_app_secret?: string | undefined
  name: string
  type: number
  updated_at: string
  xiaomi_app_secret?: string | undefined
  xiaomi_package_name?: string | undefined
} | null
type XiaomiConfigFields = {
  enabled: boolean
  package_name?: string | undefined
  secret?: string | undefined
}
type PushNotificationFields = {
  apn: APNConfigFields
  firebase: FirebaseConfigFields
  huawei: HuaweiConfigFields
  offline_only: boolean
  providers?: PushProvider[] | undefined
  version: string
  xiaomi: XiaomiConfigFields
}
type App = {
  agora_options?: Config | undefined
  async_url_enrich_enabled: boolean
  auto_translation_enabled?: boolean | undefined
  before_message_send_hook_url?: string | undefined
  campaign_enabled: boolean
  cdn_expiration_seconds: number
  channel_configs: { [x: string]: ChannelConfig }
  custom_action_handler_url: string
  disable_auth_checks: boolean
  disable_permissions_checks: boolean
  enforce_unique_usernames: string
  file_upload_config: FileUploadConfig
  grants: { [x: string]: string[] }
  hms_options?: Config | undefined
  image_moderation_enabled: boolean
  image_moderation_labels?: string[] | undefined
  image_upload_config: FileUploadConfig
  multi_tenant_enabled: boolean
  name: string
  organization: string
  permission_version: string
  policies: { [x: string]: Policy[] }
  push_notifications: PushNotificationFields
  reminders_interval: number
  revoke_tokens_issued_before?: string | undefined
  search_backend: 'elasticsearch' | 'postgres' | 'disabled'
  sqs_key: string
  sqs_secret: string
  sqs_url: string
  suspended: boolean
  suspended_explanation: string
  user_search_disallowed_roles: string[]
  video_provider: string
  webhook_events: string[]
  webhook_url: string
}
type GetApplicationResponse = { app: App; duration: string } | null
type APIError = {
  StatusCode: number
  code: number
  details: number[]
  duration: string
  exception_fields?: { [x: string]: string } | undefined
  message: string
  more_info: string
} | null
type ConfigRequest = {
  app_certificate: string
  app_id: string
  default_role?: 'attendee' | 'publisher' | 'subscriber' | 'admin' | undefined
  role_map?: { [x: string]: string } | undefined
}
type APNConfigRequest = {
  Disabled?: boolean | undefined
  auth_key?: string | undefined
  auth_type?: 'certificate' | 'token' | undefined
  bundle_id?: string | undefined
  development?: boolean | undefined
  host?: string | undefined
  key_id?: string | undefined
  notification_template?: string | undefined
  p12_cert?: string | undefined
  team_id?: string | undefined
}
type AsyncModerationCallbackConfigRequest = {
  mode?: 'CALLBACK_MODE_NONE' | 'CALLBACK_MODE_REST' | 'CALLBACK_MODE_TWIRP' | undefined
  server_url?: string | undefined
}
type AsyncModerationConfigurationRequest = {
  callback?: AsyncModerationCallbackConfigRequest | undefined
  timeout_ms?: number | undefined
}
type FileUploadConfigRequest = {
  allowed_file_extensions?: string[] | undefined
  allowed_mime_types?: string[] | undefined
  blocked_file_extensions?: string[] | undefined
  blocked_mime_types?: string[] | undefined
}
type FirebaseConfigRequest = {
  Disabled?: boolean | undefined
  apn_template?: string | undefined
  credentials_json?: string | undefined
  data_template?: string | undefined
  notification_template?: string | undefined
  server_key?: string | undefined
}
type HuaweiConfigRequest = {
  Disabled?: boolean | undefined
  id?: string | undefined
  secret?: string | undefined
}
type PushConfigRequest = { offline_only?: boolean | undefined; version?: 'v1' | 'v2' | undefined }
type XiaomiConfigRequest = {
  Disabled?: boolean | undefined
  package_name?: string | undefined
  secret?: string | undefined
}
type UpdateAppRequest = {
  agora_options?: ConfigRequest | undefined
  apn_config?: APNConfigRequest | undefined
  async_moderation_config?: AsyncModerationConfigurationRequest | undefined
  async_url_enrich_enabled?: boolean | undefined
  auto_translation_enabled?: boolean | undefined
  before_message_send_hook_url?: string | undefined
  cdn_expiration_seconds?: number | undefined
  channel_hide_members_only?: boolean | undefined
  custom_action_handler_url?: string | undefined
  disable_auth_checks?: boolean | undefined
  disable_permissions_checks?: boolean | undefined
  enforce_unique_usernames?: 'no' | 'app' | 'team' | undefined
  file_upload_config?: FileUploadConfigRequest | undefined
  firebase_config?: FirebaseConfigRequest | undefined
  grants?: { [x: string]: string[] } | undefined
  hms_options?: ConfigRequest | undefined
  huawei_config?: HuaweiConfigRequest | undefined
  image_moderation_block_labels?: string[] | undefined
  image_moderation_enabled?: boolean | undefined
  image_moderation_labels?: string[] | undefined
  image_upload_config?: FileUploadConfigRequest | undefined
  migrate_permissions_to_v2?: boolean | undefined
  multi_tenant_enabled?: boolean | undefined
  permission_version?: 'v1' | 'v2' | undefined
  push_config?: PushConfigRequest | undefined
  reminders_interval?: number | undefined
  revoke_tokens_issued_before?: string | undefined
  sqs_key?: string | undefined
  sqs_secret?: string | undefined
  sqs_url?: string | undefined
  user_search_disallowed_roles?: string[] | undefined
  video_provider?: 'agora' | 'hms' | undefined
  webhook_events?: string[] | undefined
  webhook_url?: string | undefined
  xiaomi_config?: XiaomiConfigRequest | undefined
} | null
type Response = { duration: string } | null
type BlockList = {
  created_at?: string | undefined
  name: string
  updated_at?: string | undefined
  words: string[]
}
type ListBlockListResponse = { blocklists: BlockList[]; duration: string } | null
type CreateBlockListRequest = { name: string; words: string[] } | null
type GetBlockListResponse = { blocklist?: BlockList | undefined; duration: string } | null
type UpdateBlockListRequest = { Name?: string | undefined; words?: string[] | undefined } | null
type PushNotificationSettingsRequest = {
  disabled?: boolean | undefined
  disabled_until?: string | undefined
}
type UserObjectRequest = {
  ban_expires?: string | undefined
  banned?: boolean | undefined
  id: string
  invisible?: boolean | undefined
  language?: string | undefined
  push_notifications?: PushNotificationSettingsRequest | undefined
  revoke_tokens_issued_before?: string | undefined
  role?: string | undefined
  teams?: string[] | undefined
}
type GetCallTokenRequest = {
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type GetCallTokenResponse = {
  agora_app_id?: string | undefined
  agora_uid?: number | undefined
  duration: string
  token: string
} | null
type CampaignSortField = { field: string; value: { [x: string]: unknown } }
type CampaignSort = { direction?: 'asc' | 'desc' | undefined; fields: CampaignSortField[] }
type QueryCampaignsRequest = {
  filter_conditions: { [x: string]: { [x: string]: unknown } }
  limit?: number | undefined
  sort?: CampaignSort | undefined
}
type Action = {
  name: string
  style?: string | undefined
  text: string
  type: string
  value?: string | undefined
} | null
type Field = { short: boolean; title: string; value: string } | null
type ImageData = { frames: string; height: string; size: string; url: string; width: string }
type Images = {
  fixed_height: ImageData
  fixed_height_downsampled: ImageData
  fixed_height_still: ImageData
  fixed_width: ImageData
  fixed_width_downsampled: ImageData
  fixed_width_still: ImageData
  original: ImageData
}
type Attachment = {
  actions?: Action[] | undefined
  asset_url?: string | undefined
  author_icon?: string | undefined
  author_link?: string | undefined
  author_name?: string | undefined
  color?: string | undefined
  fallback?: string | undefined
  fields?: Field[] | undefined
  footer?: string | undefined
  footer_icon?: string | undefined
  giphy?: Images | undefined
  image_url?: string | undefined
  og_scrape_url?: string | undefined
  original_height?: number | undefined
  original_width?: number | undefined
  pretext?: string | undefined
  text?: string | undefined
  thumb_url?: string | undefined
  title?: string | undefined
  title_link?: string | undefined
  type?: string | undefined
} | null
type Campaign = {
  attachments: Attachment[]
  channel_type: string
  completed_at?: string | undefined
  created_at: string
  defaults: { [x: string]: string }
  description: string
  details?: string | undefined
  errored_messages?: number | undefined
  failed_at?: string | undefined
  id: string
  name: string
  resumed_at?: string | undefined
  scheduled_at?: string | undefined
  scheduled_for?: string | undefined
  segment_id: string
  sender_id: string
  sent_messages?: number | undefined
  status?: string | undefined
  stopped_at?: string | undefined
  task_id?: string | undefined
  text: string
  updated_at: string
}
type PushNotificationSettings = {
  disabled?: boolean | undefined
  disabled_until?: string | undefined
}
type UserObject = {
  ban_expires?: string | undefined
  banned: boolean
  created_at?: string | undefined
  deactivated_at?: string | undefined
  deleted_at?: string | undefined
  id: string
  invisible?: boolean | undefined
  language?: string | undefined
  last_active?: string | undefined
  online: boolean
  push_notifications?: PushNotificationSettings | undefined
  revoke_tokens_issued_before?: string | undefined
  role: string
  teams?: string[] | undefined
  updated_at?: string | undefined
}
type ChannelMember = {
  ban_expires?: string | undefined
  banned: boolean
  channel_role: string
  created_at: string
  deleted_at?: string | undefined
  invite_accepted_at?: string | undefined
  invite_rejected_at?: string | undefined
  invited?: boolean | undefined
  is_moderator?: boolean | undefined
  role?: 'member' | 'moderator' | 'admin' | 'owner' | undefined
  shadow_banned: boolean
  updated_at: string
  user?: UserObject | undefined
  user_id?: string | undefined
} | null
type Channel = {
  auto_translation_enabled?: boolean | undefined
  auto_translation_language: string
  cid: string
  config?: ChannelConfig | undefined
  config_overrides?: ChannelConfig | undefined
  cooldown?: number | undefined
  created_at: string
  created_by?: UserObject | undefined
  deleted_at?: string | undefined
  disabled: boolean
  frozen: boolean
  id: string
  invites?: ChannelMember[] | undefined
  last_message_at?: string | undefined
  member_count?: number | undefined
  members?: ChannelMember[] | undefined
  team?: string | undefined
  truncated_by?: UserObject | undefined
  type: string
  updated_at: string
}
type Segment = {
  created_at: string
  description: string
  filter: { [x: string]: { [x: string]: unknown } }
  id: string
  in_use: boolean
  name: string
  size: number
  status: string
  type: 'user' | 'channel'
  updated_at: string
}
type QueryCampaignsResponse = {
  campaigns: Campaign[]
  channels: { [x: string]: Channel }
  duration: string
  segments: { [x: string]: Segment }
  users: { [x: string]: UserObject }
} | null
type ActionRequest = {
  name?: string | undefined
  style?: string | undefined
  text?: string | undefined
  type?: string | undefined
  value?: string | undefined
} | null
type FieldRequest = {
  short?: boolean | undefined
  title?: string | undefined
  value?: string | undefined
} | null
type ImageDataRequest = {
  frames?: string | undefined
  height?: string | undefined
  size?: string | undefined
  url?: string | undefined
  width?: string | undefined
}
type ImagesRequest = {
  fixed_height?: ImageDataRequest | undefined
  fixed_height_downsampled?: ImageDataRequest | undefined
  fixed_height_still?: ImageDataRequest | undefined
  fixed_width?: ImageDataRequest | undefined
  fixed_width_downsampled?: ImageDataRequest | undefined
  fixed_width_still?: ImageDataRequest | undefined
  original?: ImageDataRequest | undefined
}
type AttachmentRequest = {
  actions?: ActionRequest[] | undefined
  asset_url?: string | undefined
  author_icon?: string | undefined
  author_link?: string | undefined
  author_name?: string | undefined
  color?: string | undefined
  fallback?: string | undefined
  fields?: FieldRequest[] | undefined
  footer?: string | undefined
  footer_icon?: string | undefined
  giphy?: ImagesRequest | undefined
  image_url?: string | undefined
  og_scrape_url?: string | undefined
  original_height?: number | undefined
  original_width?: number | undefined
  pretext?: string | undefined
  text?: string | undefined
  thumb_url?: string | undefined
  title?: string | undefined
  title_link?: string | undefined
  type?: string | undefined
} | null
type CampaignDataRequest = {
  attachments?: AttachmentRequest[] | undefined
  channel_type?: string | undefined
  defaults?: { [x: string]: string } | undefined
  description?: string | undefined
  name: string
  segment_id: string
  sender_id: string
  text: string
}
type CreateCampaignRequest = { campaign: CampaignDataRequest } | null
type CreateCampaignResponse = { campaign?: Campaign | undefined; duration: string } | null
type DeleteCampaignResponse = { duration: string } | null
type CampaignUpdateableFieldsRequest = {
  attachments?: AttachmentRequest[] | undefined
  channel_type?: string | undefined
  defaults?: { [x: string]: string } | undefined
  description?: string | undefined
  name?: string | undefined
  segment_id?: string | undefined
  sender_id?: string | undefined
  text?: string | undefined
}
type UpdateCampaignRequest = { campaign: CampaignUpdateableFieldsRequest } | null
type UpdateCampaignResponse = { campaign?: Campaign | undefined; duration: string } | null
type ResumeCampaignResponse = { campaign?: Campaign | undefined; duration: string } | null
type ScheduleCampaignRequest = { scheduled_for?: number | undefined } | null
type ScheduleCampaignResponse = { campaign?: Campaign | undefined; duration: string } | null
type StopCampaignResponse = { campaign?: Campaign | undefined; duration: string } | null
type TestCampaignRequest = { users: string[] } | null
type TestCampaignResponse = {
  details?: string | undefined
  duration: string
  results?: { [x: string]: string } | undefined
  status: string
} | null
type SortParamRequest = { direction?: number | undefined; field?: string | undefined } | null
type QueryChannelsRequest = {
  client_id?: string | undefined
  connection_id?: string | undefined
  filter_conditions?: { [x: string]: { [x: string]: unknown } } | undefined
  limit?: number | undefined
  member_limit?: number | undefined
  message_limit?: number | undefined
  offset?: number | undefined
  presence?: boolean | undefined
  sort: SortParamRequest[]
  state?: boolean | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
  watch?: boolean | undefined
} | null
type Command = {
  args: string
  created_at?: string | undefined
  description: string
  name: string
  set: string
  updated_at?: string | undefined
} | null
type ChannelConfigWithInfo = {
  automod: 'disabled' | 'simple' | 'AI'
  automod_behavior: 'flag' | 'block'
  automod_thresholds?: Thresholds | undefined
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands: Command[]
  connect_events: boolean
  created_at: string
  custom_events: boolean
  grants?: { [x: string]: string[] } | undefined
  max_message_length: number
  message_retention: string
  mutes: boolean
  name: string
  push_notifications: boolean
  quotes: boolean
  reactions: boolean
  read_events: boolean
  reminders: boolean
  replies: boolean
  search: boolean
  typing_events: boolean
  updated_at: string
  uploads: boolean
  url_enrichment: boolean
}
type ChannelResponse = {
  auto_translation_enabled?: boolean | undefined
  auto_translation_language?: string | undefined
  cid: string
  config?: ChannelConfigWithInfo | undefined
  cooldown?: number | undefined
  created_at?: string | undefined
  created_by?: UserObject | undefined
  deleted_at?: string | undefined
  disabled: boolean
  frozen: boolean
  hidden?: boolean | undefined
  hide_messages_before?: string | undefined
  id: string
  last_message_at?: string | undefined
  member_count?: number | undefined
  members?: ChannelMember[] | undefined
  mute_expires_at?: string | undefined
  muted?: boolean | undefined
  own_capabilities?: string[] | undefined
  team?: string | undefined
  truncated_at?: string | undefined
  truncated_by?: UserObject | undefined
  type: string
  updated_at?: string | undefined
}
type Reaction = {
  created_at: string
  message_id: string
  score: number
  type: string
  updated_at: string
  user?: UserObject | undefined
  user_id?: string | undefined
} | null
type Message = {
  attachments: Attachment[]
  before_message_send_failed?: boolean | undefined
  cid: string
  command?: string | undefined
  created_at: string
  deleted_at?: string | undefined
  html: string
  i18n?: { [x: string]: string } | undefined
  id: string
  image_labels?: { [x: string]: string[] } | undefined
  latest_reactions: Reaction[]
  mentioned_users: UserObject[]
  mml?: string | undefined
  own_reactions: Reaction[]
  parent_id?: string | undefined
  pin_expires?: string | undefined
  pinned: boolean
  pinned_at?: string | undefined
  pinned_by?: UserObject | undefined
  quoted_message?: Message | undefined
  quoted_message_id?: string | undefined
  reaction_counts: { [x: string]: number }
  reaction_scores: { [x: string]: number }
  reply_count: number
  shadowed: boolean
  show_in_channel?: boolean | undefined
  silent: boolean
  text: string
  thread_participants?: UserObject[] | undefined
  type: 'regular' | 'ephemeral' | 'error' | 'reply' | 'system' | 'deleted'
  updated_at: string
  user?: UserObject | undefined
} | null
type PendingMessage = {
  channel?: Channel | undefined
  message?: Message | undefined
  metadata?: { [x: string]: string } | undefined
  user?: UserObject | undefined
} | null
type Read = { last_read: string; unread_messages: number; user?: UserObject | undefined } | null
type ChannelStateResponseFields = {
  channel?: ChannelResponse | undefined
  hidden?: boolean | undefined
  hide_messages_before?: string | undefined
  members: ChannelMember[]
  membership?: ChannelMember | undefined
  messages: Message[]
  pending_messages?: PendingMessage[] | undefined
  pinned_messages: Message[]
  read?: Read[] | undefined
  watcher_count?: number | undefined
  watchers?: UserObject[] | undefined
}
type ChannelsResponse = { channels: ChannelStateResponseFields[]; duration: string } | null
type DeleteChannelsRequest = {
  cids?: string[] | undefined
  hard_delete?: boolean | undefined
} | null
type DeleteChannelsResult = { error?: string | undefined; status: string } | null
type DeleteChannelsResponse = {
  duration: string
  result?: { [x: string]: DeleteChannelsResult } | undefined
  task_id?: string | undefined
} | null
type MarkChannelsReadRequest = {
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type ModerationResponse = { action: string; explicit: number; spam: number; toxic: number }
type ChannelMute = {
  channel?: ChannelResponse | undefined
  created_at: string
  expires?: string | undefined
  updated_at: string
  user?: UserObject | undefined
} | null
type Device = {
  created_at: string
  disabled?: boolean | undefined
  disabled_reason?: string | undefined
  id: string
  push_provider: string
  push_provider_name?: string | undefined
  user_id: string
} | null
type UserMute = {
  created_at: string
  expires?: string | undefined
  target?: UserObject | undefined
  updated_at: string
  user?: UserObject | undefined
} | null
type OwnUser = {
  banned: boolean
  channel_mutes: ChannelMute[]
  created_at: string
  deactivated_at?: string | undefined
  deleted_at?: string | undefined
  devices: Device[]
  id: string
  invisible?: boolean | undefined
  language: string
  last_active?: string | undefined
  latest_hidden_channels?: string[] | undefined
  mutes: UserMute[]
  online: boolean
  push_notifications?: PushNotificationSettings | undefined
  role: string
  teams?: string[] | undefined
  total_unread_count: number
  unread_channels: number
  unread_count: number
  updated_at: string
}
type Event = {
  automoderation?: boolean | undefined
  automoderation_scores?: ModerationResponse | undefined
  channel?: ChannelResponse | undefined
  channel_id?: string | undefined
  channel_type?: string | undefined
  cid?: string | undefined
  connection_id?: string | undefined
  created_at: string
  created_by?: UserObject | undefined
  me?: OwnUser | undefined
  member?: ChannelMember | undefined
  message?: Message | undefined
  parent_id?: string | undefined
  reaction?: Reaction | undefined
  reason?: string | undefined
  team?: string | undefined
  type: string
  user?: UserObject | undefined
  user_id?: string | undefined
  watcher_count?: number | undefined
}
type MarkReadResponse = { duration: string; event?: Event | undefined } | null
type ChannelConfigRequest = {
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands?: string[] | undefined
  grants?: { [x: string]: string[] } | undefined
  max_message_length?: number | undefined
  quotes?: boolean | undefined
  reactions?: boolean | undefined
  replies?: boolean | undefined
  typing_events?: boolean | undefined
  uploads?: boolean | undefined
  url_enrichment?: boolean | undefined
}
type ChannelMemberRequest = {
  ban_expires?: string | undefined
  banned?: boolean | undefined
  channel_role?: string | undefined
  created_at?: string | undefined
  deleted_at?: string | undefined
  invite_accepted_at?: string | undefined
  invite_rejected_at?: string | undefined
  invited?: boolean | undefined
  is_moderator?: boolean | undefined
  role?: 'member' | 'moderator' | 'admin' | 'owner' | undefined
  shadow_banned?: boolean | undefined
  updated_at?: string | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type ChannelRequest = {
  auto_translation_enabled?: boolean | undefined
  auto_translation_language?: string | undefined
  config_overrides?: ChannelConfigRequest | undefined
  created_by?: UserObjectRequest | undefined
  disabled?: boolean | undefined
  frozen?: boolean | undefined
  members?: ChannelMemberRequest[] | undefined
  own_capabilities?: number[] | undefined
  team?: string | undefined
  truncated_at?: number[] | undefined
  truncated_by?: number[] | undefined
  truncated_by_id?: string | undefined
}
type PaginationParamsRequest = {
  id_gt?: number | undefined
  id_gte?: number | undefined
  id_lt?: number | undefined
  id_lte?: number | undefined
  limit?: number | undefined
  offset?: number | undefined
}
type MessagePaginationParamsRequest = {
  created_at_after?: string | undefined
  created_at_after_or_equal?: string | undefined
  created_at_around?: string | undefined
  created_at_before?: string | undefined
  created_at_before_or_equal?: string | undefined
  id_around?: string | undefined
  id_gt?: string | undefined
  id_gte?: string | undefined
  id_lt?: string | undefined
  id_lte?: string | undefined
  limit?: number | undefined
  offset?: number | undefined
}
type ChannelGetOrCreateRequest = {
  client_id?: string | undefined
  connection_id?: string | undefined
  data?: ChannelRequest | undefined
  members?: PaginationParamsRequest | undefined
  messages?: MessagePaginationParamsRequest | undefined
  presence?: boolean | undefined
  state?: boolean | undefined
  watch?: boolean | undefined
  watchers?: PaginationParamsRequest | undefined
} | null
type ChannelStateResponse = {
  channel?: ChannelResponse | undefined
  duration: string
  hidden?: boolean | undefined
  hide_messages_before?: string | undefined
  members: ChannelMember[]
  membership?: ChannelMember | undefined
  messages: Message[]
  pending_messages?: PendingMessage[] | undefined
  pinned_messages: Message[]
  read?: Read[] | undefined
  watcher_count?: number | undefined
  watchers?: UserObject[] | undefined
} | null
type DeleteChannelResponse = { channel?: ChannelResponse | undefined; duration: string } | null
type UpdateChannelPartialRequest = {
  set: { [x: string]: { [x: string]: unknown } }
  unset: string[]
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type UpdateChannelPartialResponse = {
  channel?: ChannelResponse | undefined
  duration: string
  members: ChannelMember[]
} | null
type MessageRequest = {
  attachments: AttachmentRequest[]
  cid?: number[] | undefined
  html?: string | undefined
  id?: string | undefined
  mentioned_users?: string[] | undefined
  mml?: string | undefined
  parent?: number[] | undefined
  parent_id?: string | undefined
  pin_expires?: string | undefined
  pinned?: boolean | undefined
  pinned_at?: (string | null) | undefined
  pinned_by?: number[] | undefined
  quoted_message_id?: string | undefined
  reaction_scores?: number[] | undefined
  show_in_channel?: boolean | undefined
  silent?: boolean | undefined
  text?: string | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
}
type UpdateChannelRequest = {
  accept_invite?: boolean | undefined
  add_members?: ChannelMemberRequest[] | undefined
  add_moderators: string[]
  assign_roles?: ChannelMemberRequest[] | undefined
  cooldown?: number | undefined
  data?: ChannelRequest | undefined
  demote_moderators: string[]
  hide_history?: boolean | undefined
  invites?: ChannelMemberRequest[] | undefined
  message?: MessageRequest | undefined
  reject_invite?: boolean | undefined
  remove_members: string[]
  skip_push?: boolean | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type UpdateChannelResponse = {
  channel?: ChannelResponse | undefined
  duration: string
  members: ChannelMember[]
  message?: Message | undefined
} | null
type CreateCallRequest = {
  id: string
  options?: { [x: string]: { [x: string]: unknown } } | undefined
  type: 'audio' | 'video'
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type AgoraCall = { channel: string }
type HMSCall = { room_id: string; room_name: string }
type Call = {
  agora?: AgoraCall | undefined
  hms?: HMSCall | undefined
  id: string
  provider: string
  type: string
}
type CreateCallResponse = {
  agora_app_id?: string | undefined
  agora_uid?: number | undefined
  call?: Call | undefined
  duration: string
  token: string
} | null
type ModerationResponseRequest = {
  action?: string | undefined
  explicit?: number | undefined
  spam?: number | undefined
  toxic?: number | undefined
}
type LabelThresholdsRequest = { block?: number | undefined; flag?: number | undefined }
type ThresholdsRequest = {
  explicit?: LabelThresholdsRequest | undefined
  spam?: LabelThresholdsRequest | undefined
  toxic?: LabelThresholdsRequest | undefined
}
type CommandRequest = {
  args?: string | undefined
  description?: string | undefined
  name?: string | undefined
  set?: string | undefined
} | null
type ChannelConfigWithInfoRequest = {
  automod: 'disabled' | 'simple' | 'AI'
  automod_behavior?: 'flag' | 'block' | undefined
  automod_thresholds?: ThresholdsRequest | undefined
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands?: CommandRequest[] | undefined
  connect_events?: boolean | undefined
  created_at?: string | undefined
  custom_events?: boolean | undefined
  grants?: { [x: string]: string[] } | undefined
  max_message_length?: number | undefined
  message_retention?: string | undefined
  mutes?: boolean | undefined
  name?: string | undefined
  push_notifications?: boolean | undefined
  quotes?: boolean | undefined
  reactions?: boolean | undefined
  read_events?: boolean | undefined
  reminders?: boolean | undefined
  replies?: boolean | undefined
  search?: boolean | undefined
  typing_events?: boolean | undefined
  updated_at?: string | undefined
  uploads?: boolean | undefined
  url_enrichment?: boolean | undefined
}
type ChannelResponseRequest = {
  auto_translation_enabled?: boolean | undefined
  auto_translation_language?: string | undefined
  cid?: string | undefined
  config?: ChannelConfigWithInfoRequest | undefined
  cooldown?: number | undefined
  created_at?: string | undefined
  created_by?: UserObjectRequest | undefined
  deleted_at?: string | undefined
  disabled?: boolean | undefined
  frozen?: boolean | undefined
  hidden?: boolean | undefined
  hide_messages_before?: string | undefined
  id?: string | undefined
  last_message_at?: string | undefined
  member_count?: number | undefined
  members?: ChannelMemberRequest[] | undefined
  mute_expires_at?: string | undefined
  muted?: boolean | undefined
  own_capabilities?: string[] | undefined
  team?: string | undefined
  truncated_at?: string | undefined
  truncated_by?: UserObjectRequest | undefined
  type?: string | undefined
  updated_at?: string | undefined
}
type ChannelMuteRequest = {
  channel?: ChannelResponseRequest | undefined
  created_at?: string | undefined
  expires?: string | undefined
  updated_at?: string | undefined
  user?: UserObjectRequest | undefined
} | null
type DeviceRequest = {
  created_at?: string | undefined
  disabled?: boolean | undefined
  disabled_reason?: string | undefined
  id?: string | undefined
  push_provider?: string | undefined
  push_provider_name?: string | undefined
  user_id?: string | undefined
} | null
type UserMuteRequest = {
  created_at?: string | undefined
  expires?: string | undefined
  target?: UserObjectRequest | undefined
  updated_at?: string | undefined
  user?: UserObjectRequest | undefined
} | null
type OwnUserRequest = {
  banned?: boolean | undefined
  channel_mutes?: ChannelMuteRequest[] | undefined
  created_at?: string | undefined
  deactivated_at?: string | undefined
  deleted_at?: string | undefined
  devices?: DeviceRequest[] | undefined
  id?: string | undefined
  invisible?: boolean | undefined
  language?: string | undefined
  last_active?: string | undefined
  latest_hidden_channels?: string[] | undefined
  mutes?: UserMuteRequest[] | undefined
  online?: boolean | undefined
  push_notifications?: PushNotificationSettingsRequest | undefined
  role?: string | undefined
  teams?: string[] | undefined
  total_unread_count?: number | undefined
  unread_channels?: number | undefined
  unread_count?: number | undefined
  updated_at?: string | undefined
}
type ReactionRequest = {
  message_id?: string | undefined
  score?: number | undefined
  type: string
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type MessageRequest_1 = {
  attachments?: AttachmentRequest[] | undefined
  before_message_send_failed?: boolean | undefined
  cid?: string | undefined
  command?: string | undefined
  created_at?: string | undefined
  deleted_at?: string | undefined
  html?: string | undefined
  i18n?: { [x: string]: string } | undefined
  id?: string | undefined
  image_labels?: { [x: string]: string[] } | undefined
  latest_reactions?: ReactionRequest[] | undefined
  mentioned_users?: UserObjectRequest[] | undefined
  mml: string
  own_reactions?: ReactionRequest[] | undefined
  parent_id?: string | undefined
  pin_expires?: string | undefined
  pinned?: boolean | undefined
  pinned_at?: string | undefined
  pinned_by?: UserObjectRequest | undefined
  quoted_message?: MessageRequest_1 | undefined
  quoted_message_id?: string | undefined
  reaction_counts?: { [x: string]: number } | undefined
  reaction_scores?: { [x: string]: number } | undefined
  reply_count?: number | undefined
  shadowed?: boolean | undefined
  show_in_channel?: boolean | undefined
  silent?: boolean | undefined
  text: string
  thread_participants?: UserObjectRequest[] | undefined
  type?: 'regular' | 'ephemeral' | 'error' | 'reply' | 'system' | 'deleted' | undefined
  updated_at?: string | undefined
  user?: UserObjectRequest | undefined
}
type EventRequest = {
  automoderation?: boolean | undefined
  automoderation_scores?: ModerationResponseRequest | undefined
  channel?: ChannelResponseRequest | undefined
  channel_id?: string | undefined
  channel_type?: string | undefined
  cid?: string | undefined
  connection_id?: string | undefined
  created_at?: string | undefined
  created_by?: UserObjectRequest | undefined
  me?: OwnUserRequest | undefined
  member?: ChannelMemberRequest | undefined
  message?: MessageRequest_1 | undefined
  parent_id?: string | undefined
  reaction?: ReactionRequest | undefined
  reason?: string | undefined
  team?: string | undefined
  type: string
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
  watcher_count?: number | undefined
}
type SendEventRequest = { event: EventRequest } | null
type EventResponse = { duration: string; event?: Event | undefined } | null
type FileDeleteResponse = { duration: string } | null
type OnlyUserIDRequest = { id: string }
type FileUploadRequest = { file?: string | undefined; user?: OnlyUserIDRequest | undefined } | null
type FileUploadResponse = {
  duration: string
  file?: string | undefined
  thumb_url?: string | undefined
} | null
type HideChannelRequest = {
  clear_history?: boolean | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type HideChannelResponse = { duration: string } | null
type ImageSizeRequest = {
  crop?: 'top' | 'bottom' | 'left' | 'right' | 'center' | undefined
  height?: number | undefined
  resize?: 'clip' | 'crop' | 'scale' | 'fill' | undefined
  width?: number | undefined
}
type ImageUploadRequest = {
  file?: string | undefined
  upload_sizes?: ImageSizeRequest[] | undefined
  user?: OnlyUserIDRequest | undefined
} | null
type ImageSize = {
  crop: 'top' | 'bottom' | 'left' | 'right' | 'center'
  height: number
  resize: 'clip' | 'crop' | 'scale' | 'fill'
  width: number
}
type ImageUploadResponse = {
  duration: string
  file?: string | undefined
  thumb_url?: string | undefined
  upload_sizes?: ImageSize[] | undefined
} | null
type SendMessageRequest = {
  force_moderation?: boolean | undefined
  is_pending_message?: boolean | undefined
  message: MessageRequest
  pending_message_metadata?: { [x: string]: string } | undefined
  skip_enrich_url?: boolean | undefined
  skip_push?: boolean | undefined
} | null
type MessageWithPendingMetadataResponse = {
  duration: string
  message?: Message | undefined
  pending_message_metadata?: { [x: string]: string } | undefined
} | null
type GetManyMessagesResponse = { duration: string; messages: Message[] } | null
type MarkReadRequest = {
  message_id?: string | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type ShowChannelRequest = {
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type ShowChannelResponse = { duration: string } | null
type ChannelStopWatchingRequest = {
  client_id?: string | undefined
  connection_id?: string | undefined
} | null
type StopWatchingResponse = { duration: string } | null
type TruncateChannelRequest = {
  hard_delete?: boolean | undefined
  message?: MessageRequest | undefined
  skip_push?: boolean | undefined
  truncated_at?: string | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type TruncateChannelResponse = {
  channel?: ChannelResponse | undefined
  duration: string
  message?: Message | undefined
} | null
type MarkUnreadRequest = {
  message_id: string
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type PolicyRequest_1 = {
  action: 'Deny' | 'Allow'
  name: string
  owner: boolean
  priority: number
  resources: string[]
  roles: string[]
}
type ChannelTypeConfig = {
  automod: 'disabled' | 'simple' | 'AI'
  automod_behavior: 'flag' | 'block'
  automod_thresholds?: Thresholds | undefined
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands: Command[]
  connect_events: boolean
  created_at: string
  custom_events: boolean
  grants: { [x: string]: string[] }
  max_message_length: number
  message_retention: string
  mutes: boolean
  name: string
  permissions: PolicyRequest_1[]
  push_notifications: boolean
  quotes: boolean
  reactions: boolean
  read_events: boolean
  reminders: boolean
  replies: boolean
  search: boolean
  typing_events: boolean
  updated_at: string
  uploads: boolean
  url_enrichment: boolean
} | null
type ListChannelTypesResponse = {
  channel_types: { [x: string]: ChannelTypeConfig }
  duration: string
} | null
type PolicyRequest = {
  action?: 'Deny' | 'Allow' | undefined
  name: string
  owner?: boolean | undefined
  priority: number
  resources?: string[] | undefined
  roles?: string[] | undefined
}
type CreateChannelTypeRequest = {
  automod: 'disabled' | 'simple' | 'AI'
  automod_behavior?: 'flag' | 'block' | undefined
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands?: string[] | undefined
  connect_events?: boolean | undefined
  custom_events?: boolean | undefined
  grants?: { [x: string]: string[] } | undefined
  max_message_length?: number | undefined
  message_retention?: string | undefined
  mutes?: boolean | undefined
  name: string
  permissions?: PolicyRequest[] | undefined
  push_notifications?: boolean | undefined
  reactions?: boolean | undefined
  read_events?: boolean | undefined
  replies?: boolean | undefined
  search?: boolean | undefined
  typing_events?: boolean | undefined
  uploads?: boolean | undefined
  url_enrichment?: boolean | undefined
} | null
type CreateChannelTypeResponse = {
  automod: 'disabled' | 'simple' | 'AI'
  automod_behavior: 'flag' | 'block'
  automod_thresholds?: Thresholds | undefined
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands: string[]
  connect_events: boolean
  created_at: string
  custom_events: boolean
  duration: string
  grants: { [x: string]: string[] }
  max_message_length: number
  message_retention: string
  mutes: boolean
  name: string
  permissions: PolicyRequest_1[]
  push_notifications: boolean
  quotes: boolean
  reactions: boolean
  read_events: boolean
  reminders: boolean
  replies: boolean
  search: boolean
  typing_events: boolean
  updated_at: string
  uploads: boolean
  url_enrichment: boolean
} | null
type UpdateChannelTypeRequest = {
  NameFromPath?: string | undefined
  automod: 'disabled' | 'simple' | 'AI'
  automod_behavior?: 'flag' | 'block' | undefined
  automod_thresholds?: ThresholdsRequest | undefined
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands?: string[] | undefined
  connect_events?: boolean | undefined
  custom_events?: boolean | undefined
  grants?: { [x: string]: string[] } | undefined
  max_message_length?: number | undefined
  message_retention?: string | undefined
  mutes?: boolean | undefined
  permissions?: PolicyRequest[] | undefined
  push_notifications?: boolean | undefined
  quotes?: boolean | undefined
  reactions?: boolean | undefined
  read_events?: boolean | undefined
  reminders?: boolean | undefined
  replies?: boolean | undefined
  search?: boolean | undefined
  typing_events?: boolean | undefined
  uploads?: boolean | undefined
  url_enrichment?: boolean | undefined
} | null
type UpdateChannelTypeResponse = {
  automod: 'disabled' | 'simple' | 'AI'
  automod_behavior: 'flag' | 'block'
  automod_thresholds?: Thresholds | undefined
  blocklist?: string | undefined
  blocklist_behavior?: 'flag' | 'block' | undefined
  commands: string[]
  connect_events: boolean
  created_at: string
  custom_events: boolean
  duration: string
  grants: { [x: string]: string[] }
  max_message_length: number
  message_retention: string
  mutes: boolean
  name: string
  permissions: PolicyRequest_1[]
  push_notifications: boolean
  quotes: boolean
  reactions: boolean
  read_events: boolean
  reminders: boolean
  replies: boolean
  search: boolean
  typing_events: boolean
  updated_at: string
  uploads: boolean
  url_enrichment: boolean
} | null
type CheckPushRequest = {
  apn_template?: string | undefined
  firebase_data_template?: string | undefined
  firebase_template?: string | undefined
  message_id?: string | undefined
  push_provider_name?: string | undefined
  push_provider_type?: 'firebase' | 'apn' | 'huawei' | 'xiaomi' | undefined
  skip_devices?: boolean | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type DeviceErrorInfo = { error_message: string; provider: string; provider_name: string }
type CheckPushResponse = {
  device_errors?: { [x: string]: DeviceErrorInfo } | undefined
  duration: string
  general_errors?: string[] | undefined
  rendered_apn_template?: string | undefined
  rendered_firebase_template?: string | undefined
  rendered_message?: { [x: string]: string } | undefined
  skip_devices?: boolean | undefined
} | null
type CheckSQSRequest = {
  sqs_key?: string | undefined
  sqs_secret?: string | undefined
  sqs_url?: string | undefined
} | null
type CheckSQSResponse = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  duration: string
  error?: string | undefined
  status: 'ok' | 'error'
} | null
type ListCommandsResponse = { commands: Command[]; duration: string } | null
type CreateCommandRequest = {
  args?: string | undefined
  description: string
  name: string
  set?: string | undefined
} | null
type CreateCommandResponse = { command?: Command | undefined; duration: string } | null
type DeleteCommandResponse = { duration: string; name: string } | null
type GetCommandResponse = {
  args: string
  created_at?: string | undefined
  description: string
  duration: string
  name: string
  set: string
  updated_at?: string | undefined
} | null
type UpdateCommandRequest = {
  Name?: string | undefined
  args?: string | undefined
  description: string
  set?: string | undefined
} | null
type UpdateCommandResponse = { command?: Command | undefined; duration: string } | null
type DeviceFields = {
  id?: string | undefined
  push_provider?: 'firebase' | 'apn' | 'huawei' | 'xiaomi' | undefined
  push_provider_name?: string | undefined
}
type ConnectRequest = { device?: DeviceFields | undefined; user_details: UserObject }
type ListDevicesResponse = { devices: Device[]; duration: string } | null
type CreateDeviceRequest = {
  id?: string | undefined
  push_provider?: 'firebase' | 'apn' | 'huawei' | 'xiaomi' | undefined
  push_provider_name?: string | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type ExportUsersRequest = { user_ids: string[] } | null
type ExportUsersResponse = { duration: string; task_id: string } | null
type ChannelExportRequest = {
  cid?: string | undefined
  id?: string | undefined
  messages_since?: string | undefined
  messages_until?: string | undefined
  type?: string | undefined
}
type ExportChannelsRequest = {
  channels?: ChannelExportRequest[] | undefined
  clear_deleted_message_text?: boolean | undefined
  export_users?: boolean | undefined
  include_truncated_messages?: boolean | undefined
  version?: string | undefined
} | null
type ExportChannelsResponse = { duration: string; task_id: string } | null
type ErrorResult = {
  description: { [x: string]: unknown }
  stacktrace?: string | undefined
  type: string
  version?: string | undefined
}
type ExportChannelsResult = {
  path?: string | undefined
  s3_bucket_name?: string | undefined
  url: string
}
type GetExportChannelsStatusResponse = {
  created_at: string
  duration: string
  error?: ErrorResult | undefined
  result?: ExportChannelsResult | undefined
  status: string
  task_id: string
  updated_at: string
} | null
type GuestRequest = { user: UserObjectRequest } | null
type GuestResponse = {
  access_token: string
  duration: string
  user?: UserObject | undefined
} | null
type CreateImportURLRequest = { filename?: string | undefined } | null
type CreateImportURLResponse = { duration: string; path: string; upload_url: string } | null
type ImportTaskHistory = { created_at: string; next_state: string; prev_state: string } | null
type ImportTask = {
  created_at: string
  history: ImportTaskHistory[]
  id: string
  mode: string
  path: string
  result?: { [x: string]: unknown } | undefined
  size?: number | undefined
  state: string
  updated_at: string
}
type ListImportsResponse = { duration: string; import_tasks: ImportTask[] } | null
type CreateImportRequest = { mode?: 'insert' | 'upsert' | undefined; path: string } | null
type CreateImportResponse = { duration: string; import_task?: ImportTask | undefined } | null
type GetImportResponse = { duration: string; import_task?: ImportTask | undefined } | null
type SortParam = { direction?: number | undefined; field?: string | undefined } | null
type QueryMembersRequest = {
  created_at_after?: string | undefined
  created_at_after_or_equal?: string | undefined
  created_at_before?: string | undefined
  created_at_before_or_equal?: string | undefined
  filter_conditions: { [x: string]: { [x: string]: unknown } }
  id?: string | undefined
  limit?: number | undefined
  members?: ChannelMember[] | undefined
  offset?: number | undefined
  sort?: SortParam[] | undefined
  type: string
  user?: UserObject | undefined
  user_id?: string | undefined
  user_id_gt?: string | undefined
  user_id_gte?: string | undefined
  user_id_lt?: string | undefined
  user_id_lte?: string | undefined
}
type MembersResponse = { duration: string; members: ChannelMember[] } | null
type MessageResponse = { duration: string; message?: Message | undefined } | null
type UpdateMessageRequest = {
  message: MessageRequest
  pending_message_metadata?: { [x: string]: string } | undefined
  skip_enrich_url?: boolean | undefined
} | null
type UpdateMessagePartialRequest = {
  set: { [x: string]: { [x: string]: unknown } }
  skip_enrich_url?: boolean | undefined
  unset: string[]
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type MessageActionRequest = {
  ID?: string | undefined
  form_data: { [x: string]: string }
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type SendReactionRequest = {
  ID?: string | undefined
  enforce_unique?: boolean | undefined
  reaction: ReactionRequest
  skip_push?: boolean | undefined
} | null
type ReactionResponse = {
  duration: string
  message?: Message | undefined
  reaction?: Reaction | undefined
} | null
type ReactionRemovalResponse = {
  duration: string
  message?: Message | undefined
  reaction?: Reaction | undefined
} | null
type GetReactionsResponse = { duration: string; reactions: Reaction[] } | null
type TranslateMessageRequest = {
  language:
    | 'af'
    | 'sq'
    | 'am'
    | 'ar'
    | 'az'
    | 'bn'
    | 'bs'
    | 'bg'
    | 'zh'
    | 'zh-TW'
    | 'hr'
    | 'cs'
    | 'da'
    | 'fa-AF'
    | 'nl'
    | 'en'
    | 'et'
    | 'fi'
    | 'fr'
    | 'fr-CA'
    | 'ka'
    | 'de'
    | 'el'
    | 'ha'
    | 'he'
    | 'hi'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lv'
    | 'ms'
    | 'no'
    | 'fa'
    | 'ps'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sr'
    | 'sk'
    | 'sl'
    | 'so'
    | 'es'
    | 'es-MX'
    | 'sw'
    | 'sv'
    | 'tl'
    | 'ta'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'vi'
} | null
type GetRepliesResponse = { duration: string; messages: Message[] } | null
type BanRequest = {
  banned_by?: UserObjectRequest | undefined
  banned_by_id?: string | undefined
  id?: string | undefined
  ip_ban?: boolean | undefined
  reason?: string | undefined
  shadow?: boolean | undefined
  target_user_id: string
  timeout?: number | undefined
  type?: string | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type FlagRequest = {
  target_message_id?: string | undefined
  target_user_id?: string | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type FlagMessageDetails = {
  pin_changed?: boolean | undefined
  should_enrich?: boolean | undefined
  skip_push?: boolean | undefined
  updated_by_id?: string | undefined
}
type MessageModerationResult = {
  action: string
  ai_moderation_response?: ModerationResponse | undefined
  blocked_word?: string | undefined
  blocklist_name?: string | undefined
  created_at: string
  message_id: string
  moderated_by?: string | undefined
  moderation_thresholds?: Thresholds | undefined
  updated_at: string
  user_bad_karma: boolean
  user_karma: number
}
type AutomodDetails = {
  action?: string | undefined
  image_labels?: string[] | undefined
  message_details?: FlagMessageDetails | undefined
  original_message_type?: string | undefined
  result?: MessageModerationResult | undefined
}
type FlagDetails = { automod?: AutomodDetails | undefined }
type Flag = {
  approved_at?: string | undefined
  created_at: string
  created_by_automod: boolean
  details?: FlagDetails | undefined
  rejected_at?: string | undefined
  reviewed_at?: string | undefined
  target_message?: Message | undefined
  target_message_id?: string | undefined
  target_user?: UserObject | undefined
  updated_at: string
  user?: UserObject | undefined
}
type FlagResponse = { duration: string; flag?: Flag | undefined } | null
type QueryMessageFlagsRequest = {
  filter_conditions?: { [x: string]: { [x: string]: unknown } } | undefined
  limit?: number | undefined
  offset?: number | undefined
  user?: UserObject | undefined
  user_id?: string | undefined
}
type MessageFlag = {
  approved_at?: string | undefined
  created_at: string
  created_by_automod: boolean
  message?: Message | undefined
  moderation_result?: MessageModerationResult | undefined
  rejected_at?: string | undefined
  reviewed_at?: string | undefined
  reviewed_by?: UserObject | undefined
  updated_at: string
  user?: UserObject | undefined
} | null
type QueryMessageFlagsResponse = { duration: string; flags: MessageFlag[] } | null
type MuteUserRequest = {
  target_ids: string[]
  timeout?: number | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type MuteUserResponse = {
  duration: string
  mute?: UserMute | undefined
  mutes?: UserMute[] | undefined
  own_user?: OwnUser | undefined
} | null
type MuteChannelRequest = {
  channel_cids: string[]
  expiration?: number | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type MuteChannelResponse = {
  channel_mute?: ChannelMute | undefined
  channel_mutes?: ChannelMute[] | undefined
  duration: string
  own_user?: OwnUser | undefined
} | null
type UnmuteUserRequest = {
  target_id: string
  target_ids: string[]
  timeout?: number | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type UnmuteResponse = { duration: string } | null
type UnmuteChannelRequest = {
  channel_cid: string
  channel_cids: string[]
  expiration?: number | undefined
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
} | null
type GetOGResponse = {
  actions?: Action[] | undefined
  asset_url?: string | undefined
  author_icon?: string | undefined
  author_link?: string | undefined
  author_name?: string | undefined
  color?: string | undefined
  duration: string
  fallback?: string | undefined
  fields?: Field[] | undefined
  footer?: string | undefined
  footer_icon?: string | undefined
  giphy?: Images | undefined
  image_url?: string | undefined
  og_scrape_url?: string | undefined
  original_height?: number | undefined
  original_width?: number | undefined
  pretext?: string | undefined
  text?: string | undefined
  thumb_url?: string | undefined
  title?: string | undefined
  title_link?: string | undefined
  type?: string | undefined
} | null
type Permission = {
  action: string
  condition?: { [x: string]: { [x: string]: unknown } } | undefined
  custom: boolean
  description: string
  id: string
  level: 'app' | 'channel'
  name: string
  owner: boolean
  same_team: boolean
  tags: string[]
}
type ListPermissionsResponse = { duration: string; permissions: Permission[] } | null
type GetCustomPermissionResponse = { duration: string; permission: Permission } | null
type ListPushProvidersResponse = { duration: string; push_providers: PushProvider[] } | null
type PushProviderRequest = {
  apn_auth_key?: string | undefined
  apn_auth_type?: string | undefined
  apn_development?: boolean | undefined
  apn_host?: string | undefined
  apn_key_id?: string | undefined
  apn_notification_template?: string | undefined
  apn_p12_cert?: string | undefined
  apn_team_id?: string | undefined
  apn_topic?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  disabled_at?: string | undefined
  disabled_reason?: string | undefined
  firebase_apn_template?: string | undefined
  firebase_credentials?: string | undefined
  firebase_data_template?: string | undefined
  firebase_notification_template?: string | undefined
  firebase_server_key?: string | undefined
  huawei_app_id?: string | undefined
  huawei_app_secret?: string | undefined
  name: string
  type?: number | undefined
  updated_at?: string | undefined
  xiaomi_app_secret?: string | undefined
  xiaomi_package_name?: string | undefined
}
type UpsertPushProviderRequest = { push_provider?: PushProviderRequest | undefined } | null
type UpsertPushProviderResponse = { duration: string; push_provider: PushProvider } | null
type QueryBannedUsersRequest = {
  created_at_after?: string | undefined
  created_at_after_or_equal?: string | undefined
  created_at_before?: string | undefined
  created_at_before_or_equal?: string | undefined
  filter_conditions: { [x: string]: { [x: string]: unknown } }
  limit?: number | undefined
  offset?: number | undefined
  sort?: SortParam[] | undefined
  user?: UserObject | undefined
  user_id?: string | undefined
}
type BanResponse = {
  banned_by?: UserObject | undefined
  channel?: ChannelResponse | undefined
  created_at: string
  expires?: string | undefined
  reason?: string | undefined
  shadow?: boolean | undefined
  user?: UserObject | undefined
} | null
type QueryBannedUsersResponse = { bans: BanResponse[]; duration: string } | null
type LimitInfo = { limit: number; remaining: number; reset: number }
type GetRateLimitsResponse = {
  android?: { [x: string]: LimitInfo } | undefined
  duration: string
  ios?: { [x: string]: LimitInfo } | undefined
  server_side?: { [x: string]: LimitInfo } | undefined
  web?: { [x: string]: LimitInfo } | undefined
} | null
type QueryRecipientsRequest = {
  filter_conditions: { [x: string]: { [x: string]: unknown } }
  limit?: number | undefined
  sort?: CampaignSort | undefined
}
type Recipient = {
  campaign_id: string
  channel_cid: string
  created_at: string
  details: string
  message_id: string
  receiver_id: string
  status: string
  updated_at: string
} | null
type QueryRecipientsResponse = {
  campaigns: { [x: string]: Campaign }
  channels: { [x: string]: Channel }
  duration: string
  recipients: Recipient[]
  segments: { [x: string]: Segment }
  users: { [x: string]: UserObject }
} | null
type Role = {
  created_at: string
  custom: boolean
  name: string
  scopes: string[]
  updated_at: string
}
type ListRolesResponse = { duration: string; roles: Role[] } | null
type CreateRoleRequest = { name: string } | null
type CreateRoleResponse = { duration: string; role: Role } | null
type SearchRequest = {
  filter_conditions: { [x: string]: { [x: string]: unknown } }
  limit?: number | undefined
  message_filter_conditions?: { [x: string]: { [x: string]: unknown } } | undefined
  next?: string | undefined
  offset?: number | undefined
  query?: string | undefined
  sort?: SortParam[] | undefined
}
type SearchResultMessage = {
  attachments: Attachment[]
  before_message_send_failed?: boolean | undefined
  channel?: ChannelResponse | undefined
  cid: string
  command?: string | undefined
  created_at: string
  deleted_at?: string | undefined
  html: string
  i18n?: { [x: string]: string } | undefined
  id: string
  image_labels?: { [x: string]: string[] } | undefined
  latest_reactions: Reaction[]
  mentioned_users: UserObject[]
  mml?: string | undefined
  own_reactions: Reaction[]
  parent_id?: string | undefined
  pin_expires?: string | undefined
  pinned: boolean
  pinned_at?: string | undefined
  pinned_by?: UserObject | undefined
  quoted_message?: Message | undefined
  quoted_message_id?: string | undefined
  reaction_counts: { [x: string]: number }
  reaction_scores: { [x: string]: number }
  reply_count: number
  shadowed: boolean
  show_in_channel?: boolean | undefined
  silent: boolean
  text: string
  thread_participants?: UserObject[] | undefined
  type: string
  updated_at: string
  user?: UserObject | undefined
}
type SearchResult = { message?: SearchResultMessage | undefined } | null
type SearchWarning = {
  channel_search_cids?: string[] | undefined
  channel_search_count?: number | undefined
  warning_code: number
  warning_description: string
}
type SearchResponse = {
  duration: string
  next?: string | undefined
  previous?: string | undefined
  results: SearchResult[]
  results_warning?: SearchWarning | undefined
} | null
type QuerySegmentsRequest = {
  filter_conditions: { [x: string]: { [x: string]: unknown } }
  limit?: number | undefined
  sort?: CampaignSort | undefined
}
type QuerySegmentsResponse = { duration: string; segments: Segment[] } | null
type SegmentDataRequest = {
  description?: string | undefined
  filter: { [x: string]: { [x: string]: unknown } }
  name: string
  type: 'user' | 'channel'
}
type CreateSegmentRequest = { segment: SegmentDataRequest } | null
type CreateSegmentResponse = { duration: string; segment?: Segment | undefined } | null
type DeleteSegmentResponse = { duration: string } | null
type SegmentUpdateableFieldsRequest = {
  description?: string | undefined
  filter?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  type?: 'user' | 'channel' | undefined
}
type UpdateSegmentRequest = { segment: SegmentUpdateableFieldsRequest } | null
type UpdateSegmentResponse = { duration: string; segment?: Segment | undefined } | null
type SyncRequest = {
  channel_cids?: string[] | undefined
  client_id?: string | undefined
  connection_id?: string | undefined
  last_sync_at: string
  user?: UserObjectRequest | undefined
  user_id?: string | undefined
  watch?: boolean | undefined
  with_inaccessible_cids?: boolean | undefined
} | null
type SyncResponse = {
  duration: string
  events: Event[]
  inaccessible_cids?: string[] | undefined
} | null
type GetTaskResponse = {
  created_at: string
  duration: string
  error?: ErrorResult | undefined
  result?: { [x: string]: { [x: string]: unknown } } | undefined
  status: string
  task_id: string
  updated_at: string
} | null
type QueryUsersRequest = {
  client_id?: string | undefined
  connection_id?: string | undefined
  filter_conditions: { [x: string]: { [x: string]: unknown } }
  id_gt?: string | undefined
  id_gte?: string | undefined
  id_lt?: string | undefined
  id_lte?: string | undefined
  limit?: number | undefined
  offset?: number | undefined
  presence?: boolean | undefined
  sort: SortParam[]
  user?: UserObject | undefined
  user_id?: string | undefined
}
type UserResponse = {
  ban_expires?: string | undefined
  banned: boolean
  created_at?: string | undefined
  deactivated_at?: string | undefined
  deleted_at?: string | undefined
  id: string
  invisible?: boolean | undefined
  language?: string | undefined
  last_active?: string | undefined
  online: boolean
  push_notifications?: PushNotificationSettings | undefined
  revoke_tokens_issued_before?: string | undefined
  role: string
  shadow_banned: boolean
  teams?: string[] | undefined
  updated_at?: string | undefined
} | null
type UsersResponse = { duration: string; users: UserResponse[] } | null
type UpdateUserPartialRequest = {
  id: string
  set: { [x: string]: { [x: string]: unknown } }
  unset: string[]
} | null
type UpdateUsersResponse = { duration: string; users: { [x: string]: UserObject } } | null
type UpdateUsersRequest = { users: { [x: string]: UserObjectRequest } } | null
type DeactivateUsersRequest = {
  created_by_id?: string | undefined
  mark_messages_deleted?: boolean | undefined
  user_ids: string[]
} | null
type DeactivateUsersResponse = { duration: string; task_id: string } | null
type DeleteUsersRequest = {
  conversations?: 'soft' | 'hard' | undefined
  messages?: 'soft' | 'pruning' | 'hard' | undefined
  new_channel_owner_id?: string | undefined
  user?: 'soft' | 'pruning' | 'hard' | undefined
  user_ids: string[]
} | null
type DeleteUsersResponse = { duration: string; task_id: string } | null
type ReactivateUsersRequest = {
  created_by_id?: string | undefined
  restore_messages?: boolean | undefined
  user_ids: string[]
} | null
type ReactivateUsersResponse = { duration: string; task_id: string } | null
type RestoreUsersRequest = { user_ids: string[] } | null
type DeleteUserResponse = {
  duration: string
  task_id: string
  user?: UserObject | undefined
} | null
type DeactivateUserRequest = {
  created_by_id?: string | undefined
  mark_messages_deleted?: boolean | undefined
  user_id: string
} | null
type DeactivateUserResponse = { duration: string; user?: UserObject | undefined } | null
type UserCustomEventRequest = { created_at?: string | undefined; type: string }
type SendUserCustomEventRequest = { event: UserCustomEventRequest } | null
type ExportUserResponse = {
  duration: string
  messages?: Message[] | undefined
  reactions?: Reaction[] | undefined
  user?: UserObject | undefined
} | null
type ReactivateUserRequest = {
  created_by_id?: string | undefined
  name?: string | undefined
  restore_messages?: boolean | undefined
  user_id: string
} | null
type ReactivateUserResponse = { duration: string; user?: UserObject | undefined } | null
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/app': {
      $get:
        | { input: {}; output: GetApplicationResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 429 }
      $patch:
        | { input: { json: UpdateAppRequest }; output: Response; outputFormat: 'json'; status: 200 }
        | { input: { json: UpdateAppRequest }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { json: UpdateAppRequest }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/blocklists': {
      $get:
        | { input: {}; output: ListBlockListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { json: CreateBlockListRequest }
            output: Response
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateBlockListRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateBlockListRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/blocklists/:name': {
      $delete:
        | {
            input: { param: { name: string } }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { name: string } }
            output: GetBlockListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { name: string } } & { json: UpdateBlockListRequest }
            output: Response
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & { json: UpdateBlockListRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & { json: UpdateBlockListRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/calls/': {
      $post:
        | {
            input: { json: GetCallTokenRequest }
            output: GetCallTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: GetCallTokenRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetCallTokenRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/calls/:call_id': {
      $post:
        | {
            input: { param: { call_id: string } } & { json: GetCallTokenRequest }
            output: GetCallTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { call_id: string } } & { json: GetCallTokenRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { call_id: string } } & { json: GetCallTokenRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/campaigns': {
      $get:
        | {
            input: { query: { payload?: QueryCampaignsRequest | undefined } }
            output: QueryCampaignsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payload?: QueryCampaignsRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payload?: QueryCampaignsRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateCampaignRequest }
            output: CreateCampaignResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateCampaignRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCampaignRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/campaigns/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { recipients?: boolean | undefined } }
            output: DeleteCampaignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { recipients?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { recipients?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateCampaignRequest }
            output: UpdateCampaignResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: UpdateCampaignRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateCampaignRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/campaigns/:id/resume': {
      $patch:
        | {
            input: { param: { id: string } }
            output: ResumeCampaignResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/campaigns/:id/schedule': {
      $patch:
        | {
            input: { param: { id: string } } & { json: ScheduleCampaignRequest }
            output: ScheduleCampaignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ScheduleCampaignRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ScheduleCampaignRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/campaigns/:id/stop': {
      $patch:
        | {
            input: { param: { id: string } }
            output: StopCampaignResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/campaigns/:id/test': {
      $post:
        | {
            input: { param: { id: string } } & { json: TestCampaignRequest }
            output: TestCampaignResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: TestCampaignRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TestCampaignRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels': {
      $post:
        | {
            input: {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: QueryChannelsRequest }
            output: ChannelsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: QueryChannelsRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: QueryChannelsRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/delete': {
      $post:
        | {
            input: { json: DeleteChannelsRequest }
            output: DeleteChannelsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DeleteChannelsRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteChannelsRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/read': {
      $post:
        | {
            input: { json: MarkChannelsReadRequest }
            output: MarkReadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: MarkChannelsReadRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MarkChannelsReadRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/query': {
      $post:
        | {
            input: { param: { type: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelGetOrCreateRequest }
            output: ChannelStateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelGetOrCreateRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelGetOrCreateRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id': {
      $delete:
        | {
            input: { param: { type: string; id: string } } & {
              query: { hard_delete?: boolean | undefined }
            }
            output: DeleteChannelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; id: string } } & {
              query: { hard_delete?: boolean | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & {
              query: { hard_delete?: boolean | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { type: string; id: string } } & { json: UpdateChannelPartialRequest }
            output: UpdateChannelPartialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; id: string } } & { json: UpdateChannelPartialRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: UpdateChannelPartialRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: UpdateChannelRequest }
            output: UpdateChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: UpdateChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: UpdateChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/call': {
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: CreateCallRequest }
            output: CreateCallResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: CreateCallRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: CreateCallRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/event': {
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: SendEventRequest }
            output: EventResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: SendEventRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: SendEventRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/file': {
      $delete:
        | {
            input: { param: { type: string; id: string } } & { query: { url?: string | undefined } }
            output: FileDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; id: string } } & { query: { url?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { query: { url?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { type: string; id: string } } & { form: FileUploadRequest }
            output: FileUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { form: FileUploadRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { form: FileUploadRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/hide': {
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: HideChannelRequest }
            output: HideChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: HideChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: HideChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/image': {
      $delete:
        | {
            input: { param: { type: string; id: string } } & { query: { url?: string | undefined } }
            output: FileDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; id: string } } & { query: { url?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { query: { url?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { type: string; id: string } } & { form: ImageUploadRequest }
            output: ImageUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { form: ImageUploadRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { form: ImageUploadRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/message': {
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: SendMessageRequest }
            output: MessageWithPendingMetadataResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: SendMessageRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: SendMessageRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/messages': {
      $get:
        | {
            input: { param: { type: string; id: string } } & {
              query: { ids?: string[] | undefined }
            }
            output: GetManyMessagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; id: string } } & {
              query: { ids?: string[] | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & {
              query: { ids?: string[] | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/query': {
      $post:
        | {
            input: { param: { type: string; id: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelGetOrCreateRequest }
            output: ChannelStateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelGetOrCreateRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelGetOrCreateRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/read': {
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: MarkReadRequest }
            output: MarkReadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: MarkReadRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: MarkReadRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/show': {
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: ShowChannelRequest }
            output: ShowChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: ShowChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: ShowChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/stop-watching': {
      $post:
        | {
            input: { param: { type: string; id: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelStopWatchingRequest }
            output: StopWatchingResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelStopWatchingRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & {
              query: { client_id?: string | undefined; connection_id?: string | undefined }
            } & { json: ChannelStopWatchingRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/truncate': {
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: TruncateChannelRequest }
            output: TruncateChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: TruncateChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: TruncateChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channels/:type/:id/unread': {
      $post:
        | {
            input: { param: { type: string; id: string } } & { json: MarkUnreadRequest }
            output: Response
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { type: string; id: string } } & { json: MarkUnreadRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string; id: string } } & { json: MarkUnreadRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channeltypes': {
      $get:
        | { input: {}; output: ListChannelTypesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { json: CreateChannelTypeRequest }
            output: CreateChannelTypeResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateChannelTypeRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateChannelTypeRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/channeltypes/:name': {
      $delete:
        | {
            input: { param: { name: string } }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { name: string } }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { name: string } } & { json: UpdateChannelTypeRequest }
            output: UpdateChannelTypeResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & { json: UpdateChannelTypeRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & { json: UpdateChannelTypeRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/check_push': {
      $post:
        | {
            input: { json: CheckPushRequest }
            output: CheckPushResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CheckPushRequest }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { json: CheckPushRequest }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/check_sqs': {
      $post:
        | {
            input: { json: CheckSQSRequest }
            output: CheckSQSResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CheckSQSRequest }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { json: CheckSQSRequest }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/commands': {
      $get:
        | { input: {}; output: ListCommandsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { json: CreateCommandRequest }
            output: CreateCommandResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateCommandRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCommandRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/commands/:name': {
      $delete:
        | {
            input: { param: { name: string } }
            output: DeleteCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { name: string } }
            output: GetCommandResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { name: string } } & { json: UpdateCommandRequest }
            output: UpdateCommandResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { name: string } } & { json: UpdateCommandRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & { json: UpdateCommandRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/connect': {
      $get:
        | {
            input: { query: { json?: ConnectRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { json?: ConnectRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/devices': {
      $delete:
        | {
            input: { query: { id?: string | undefined; user_id?: string | undefined } }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id?: string | undefined; user_id?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id?: string | undefined; user_id?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { query: { user_id?: string | undefined } }
            output: ListDevicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { user_id?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { user_id?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateDeviceRequest }
            output: Response
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateDeviceRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDeviceRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/export/users': {
      $post:
        | {
            input: { json: ExportUsersRequest }
            output: ExportUsersResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExportUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExportUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/export_channels': {
      $post:
        | {
            input: { json: ExportChannelsRequest }
            output: ExportChannelsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ExportChannelsRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExportChannelsRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/export_channels/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetExportChannelsStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/guest': {
      $post:
        | {
            input: { json: GuestRequest }
            output: GuestResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: GuestRequest }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { json: GuestRequest }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/import_urls': {
      $post:
        | {
            input: { json: CreateImportURLRequest }
            output: CreateImportURLResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateImportURLRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateImportURLRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/imports': {
      $get:
        | { input: {}; output: ListImportsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { json: CreateImportRequest }
            output: CreateImportResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateImportRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateImportRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/imports/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetImportResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/longpoll': {
      $get:
        | {
            input: {
              query: { json?: ConnectRequest | undefined; connection_id?: string | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { json?: ConnectRequest | undefined; connection_id?: string | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/members': {
      $get:
        | {
            input: { query: { payload?: QueryMembersRequest | undefined } }
            output: MembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payload?: QueryMembersRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payload?: QueryMembersRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/messages/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { hard?: boolean | undefined } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { hard?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { hard?: boolean | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { id: string } }
            output: MessageWithPendingMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { param: { id: string } } & { json: UpdateMessageRequest }
            output: MessageResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: UpdateMessageRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateMessageRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateMessagePartialRequest }
            output: MessageResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: UpdateMessagePartialRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateMessagePartialRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/messages/:id/action': {
      $post:
        | {
            input: { param: { id: string } } & { json: MessageActionRequest }
            output: MessageResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: MessageActionRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: MessageActionRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/messages/:id/commit': {
      $post:
        | {
            input: { param: { id: string } }
            output: MessageResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/messages/:id/reaction': {
      $post:
        | {
            input: { param: { id: string } } & { json: SendReactionRequest }
            output: ReactionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: SendReactionRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SendReactionRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/messages/:id/reaction/:type': {
      $delete:
        | {
            input: { param: { id: string; type: string } } & {
              query: { user_id?: string | undefined }
            }
            output: ReactionRemovalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; type: string } } & {
              query: { user_id?: string | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; type: string } } & {
              query: { user_id?: string | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/messages/:id/reactions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: GetReactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/messages/:id/translate': {
      $post:
        | {
            input: { param: { id: string } } & { json: TranslateMessageRequest }
            output: MessageResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: TranslateMessageRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TranslateMessageRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/messages/:parent_id/replies': {
      $get:
        | {
            input: { param: { parent_id: string } } & {
              query: {
                id_gte?: string | undefined
                id_gt?: string | undefined
                id_lte?: string | undefined
                id_lt?: string | undefined
                created_at_after_or_equal?: string | undefined
                created_at_after?: string | undefined
                created_at_before_or_equal?: string | undefined
                created_at_before?: string | undefined
                id_around?: string | undefined
                created_at_around?: string | undefined
              }
            }
            output: GetRepliesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parent_id: string } } & {
              query: {
                id_gte?: string | undefined
                id_gt?: string | undefined
                id_lte?: string | undefined
                id_lt?: string | undefined
                created_at_after_or_equal?: string | undefined
                created_at_after?: string | undefined
                created_at_before_or_equal?: string | undefined
                created_at_before?: string | undefined
                id_around?: string | undefined
                created_at_around?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { parent_id: string } } & {
              query: {
                id_gte?: string | undefined
                id_gt?: string | undefined
                id_lte?: string | undefined
                id_lt?: string | undefined
                created_at_after_or_equal?: string | undefined
                created_at_after?: string | undefined
                created_at_before_or_equal?: string | undefined
                created_at_before?: string | undefined
                id_around?: string | undefined
                created_at_around?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/moderation/ban': {
      $delete:
        | {
            input: {
              query: {
                target_user_id?: string | undefined
                type?: string | undefined
                id?: string | undefined
              }
            }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                target_user_id?: string | undefined
                type?: string | undefined
                id?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                target_user_id?: string | undefined
                type?: string | undefined
                id?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $post:
        | { input: { json: BanRequest }; output: Response; outputFormat: 'json'; status: 201 }
        | { input: { json: BanRequest }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { json: BanRequest }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/moderation/flag': {
      $post:
        | { input: { json: FlagRequest }; output: FlagResponse; outputFormat: 'json'; status: 201 }
        | { input: { json: FlagRequest }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { json: FlagRequest }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/moderation/flags/message': {
      $get:
        | {
            input: { query: { payload?: QueryMessageFlagsRequest | undefined } }
            output: QueryMessageFlagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payload?: QueryMessageFlagsRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payload?: QueryMessageFlagsRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/moderation/mute': {
      $post:
        | {
            input: { json: MuteUserRequest }
            output: MuteUserResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: MuteUserRequest }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { json: MuteUserRequest }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/moderation/mute/channel': {
      $post:
        | {
            input: { json: MuteChannelRequest }
            output: MuteChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: MuteChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MuteChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/moderation/unflag': {
      $post:
        | { input: { json: FlagRequest }; output: FlagResponse; outputFormat: 'json'; status: 201 }
        | { input: { json: FlagRequest }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { json: FlagRequest }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/moderation/unmute': {
      $post:
        | {
            input: { json: UnmuteUserRequest }
            output: UnmuteResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UnmuteUserRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UnmuteUserRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/moderation/unmute/channel': {
      $post:
        | {
            input: { json: UnmuteChannelRequest }
            output: UnmuteResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UnmuteChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UnmuteChannelRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/og': {
      $get:
        | {
            input: { query: { url?: string | undefined } }
            output: GetOGResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { url?: string | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/permissions': {
      $get:
        | { input: {}; output: ListPermissionsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/permissions/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetCustomPermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/push_providers': {
      $get:
        | { input: {}; output: ListPushProvidersResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { json: UpsertPushProviderRequest }
            output: UpsertPushProviderResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UpsertPushProviderRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpsertPushProviderRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/push_providers/:type/:name': {
      $delete:
        | {
            input: { param: { type: 'apn' | 'firebase' | 'huawei' | 'xiaomi'; name: string } }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: 'apn' | 'firebase' | 'huawei' | 'xiaomi'; name: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: 'apn' | 'firebase' | 'huawei' | 'xiaomi'; name: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/query_banned_users': {
      $get:
        | {
            input: { query: { payload?: QueryBannedUsersRequest | undefined } }
            output: QueryBannedUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payload?: QueryBannedUsersRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payload?: QueryBannedUsersRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/rate_limits': {
      $get:
        | {
            input: {
              query: {
                server_side?: boolean | undefined
                android?: boolean | undefined
                ios?: boolean | undefined
                web?: boolean | undefined
                endpoints?: string | undefined
              }
            }
            output: GetRateLimitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                server_side?: boolean | undefined
                android?: boolean | undefined
                ios?: boolean | undefined
                web?: boolean | undefined
                endpoints?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                server_side?: boolean | undefined
                android?: boolean | undefined
                ios?: boolean | undefined
                web?: boolean | undefined
                endpoints?: string | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/recipients': {
      $get:
        | {
            input: { query: { payload?: QueryRecipientsRequest | undefined } }
            output: QueryRecipientsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payload?: QueryRecipientsRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payload?: QueryRecipientsRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/roles': {
      $get:
        | { input: {}; output: ListRolesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: APIError; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { json: CreateRoleRequest }
            output: CreateRoleResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateRoleRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateRoleRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/roles/:name': {
      $delete:
        | {
            input: { param: { name: string } }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: { query: { payload?: SearchRequest | undefined } }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payload?: SearchRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payload?: SearchRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/segments': {
      $get:
        | {
            input: { query: { payload?: QuerySegmentsRequest | undefined } }
            output: QuerySegmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payload?: QuerySegmentsRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payload?: QuerySegmentsRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateSegmentRequest }
            output: CreateSegmentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateSegmentRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSegmentRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/segments/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: DeleteSegmentResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateSegmentRequest }
            output: UpdateSegmentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: UpdateSegmentRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateSegmentRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sync': {
      $post:
        | {
            input: {
              query: {
                with_inaccessible_cids?: boolean | undefined
                watch?: boolean | undefined
                client_id?: string | undefined
                connection_id?: string | undefined
              }
            } & { json: SyncRequest }
            output: SyncResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                with_inaccessible_cids?: boolean | undefined
                watch?: boolean | undefined
                client_id?: string | undefined
                connection_id?: string | undefined
              }
            } & { json: SyncRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                with_inaccessible_cids?: boolean | undefined
                watch?: boolean | undefined
                client_id?: string | undefined
                connection_id?: string | undefined
              }
            } & { json: SyncRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/tasks/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: APIError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/users': {
      $get:
        | {
            input: { query: { payload?: QueryUsersRequest | undefined } }
            output: UsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payload?: QueryUsersRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payload?: QueryUsersRequest | undefined } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { json: UpdateUserPartialRequest }
            output: UpdateUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateUserPartialRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateUserPartialRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: UpdateUsersRequest }
            output: UpdateUsersResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UpdateUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/deactivate': {
      $post:
        | {
            input: { json: DeactivateUsersRequest }
            output: DeactivateUsersResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DeactivateUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeactivateUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/delete': {
      $post:
        | {
            input: { json: DeleteUsersRequest }
            output: DeleteUsersResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DeleteUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/reactivate': {
      $post:
        | {
            input: { json: ReactivateUsersRequest }
            output: ReactivateUsersResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ReactivateUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReactivateUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/restore': {
      $post:
        | {
            input: { json: RestoreUsersRequest }
            output: Response
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RestoreUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RestoreUsersRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/:user_id': {
      $delete:
        | {
            input: { param: { user_id: string } } & {
              query: {
                mark_messages_deleted?: boolean | undefined
                hard_delete?: boolean | undefined
                delete_conversation_channels?: boolean | undefined
              }
            }
            output: DeleteUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                mark_messages_deleted?: boolean | undefined
                hard_delete?: boolean | undefined
                delete_conversation_channels?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                mark_messages_deleted?: boolean | undefined
                hard_delete?: boolean | undefined
                delete_conversation_channels?: boolean | undefined
              }
            }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/:user_id/deactivate': {
      $post:
        | {
            input: { param: { user_id: string } } & { json: DeactivateUserRequest }
            output: DeactivateUserResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: string } } & { json: DeactivateUserRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: DeactivateUserRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/:user_id/event': {
      $post:
        | {
            input: { param: { user_id: string } } & { json: SendUserCustomEventRequest }
            output: Response
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: string } } & { json: SendUserCustomEventRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: SendUserCustomEventRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/:user_id/export': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: ExportUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/:user_id/reactivate': {
      $post:
        | {
            input: { param: { user_id: string } } & { json: ReactivateUserRequest }
            output: ReactivateUserResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: string } } & { json: ReactivateUserRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: ReactivateUserRequest }
            output: APIError
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
