type IgnoredParametersUnsupported = string[]
type ApiKeyResponse = {
  result: { [x: string]: unknown }
  msg: { [x: string]: unknown }
  ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
  api_key: string
  email: string
  user_id?: number | undefined
}
type EventIdSchema = number
type DefaultPushNotifications = boolean
type FolderId = number | null
type TopicsPolicy = 'inherit' | 'allow_empty_topic' | 'disable_empty_topic' | 'empty_topic_only'
type ChannelCanAddSubscribersGroup = {}
type CanRemoveSubscribersGroup = {}
type CanAdministerChannelGroup = {}
type CanDeleteAnyMessageGroup = {}
type CanDeleteOwnMessageGroup = {}
type CanMoveMessagesOutOfChannelGroup = {}
type CanMoveMessagesWithinChannelGroup = {}
type CanSendMessageGroup = {}
type CanSubscribeGroup = {}
type CanResolveTopicsGroup = {}
type CanCreateTopicGroup = {}
type Subscription = {
  stream_id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  rendered_description?: string | undefined
  date_created?: number | undefined
  creator_id?: (number | null) | undefined
  invite_only?: boolean | undefined
  subscribers?: number[] | undefined
  partial_subscribers?: number[] | undefined
  desktop_notifications?: (boolean | null) | undefined
  email_notifications?: (boolean | null) | undefined
  wildcard_mentions_notify?: (boolean | null) | undefined
  push_notifications?: (boolean | null) | undefined
  audible_notifications?: (boolean | null) | undefined
  pin_to_top?: boolean | undefined
  is_muted?: boolean | undefined
  web_left_sidebar_topics_order?: 0 | 1 | 2 | undefined
  in_home_view?: boolean | undefined
  is_announcement_only?: boolean | undefined
  is_web_public?: boolean | undefined
  color?: string | undefined
  stream_post_policy?: number | undefined
  message_retention_days?: (number | null) | undefined
  default_push_notifications?: DefaultPushNotifications | undefined
  history_public_to_subscribers?: boolean | undefined
  first_message_id?: (number | null) | undefined
  folder_id?: FolderId | undefined
  topics_policy?: TopicsPolicy | undefined
  is_recently_active?: boolean | undefined
  stream_weekly_traffic?: (number | null) | undefined
  can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
  can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
  can_administer_channel_group?: CanAdministerChannelGroup | undefined
  can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
  can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
  can_move_messages_out_of_channel_group?: CanMoveMessagesOutOfChannelGroup | undefined
  can_move_messages_within_channel_group?: CanMoveMessagesWithinChannelGroup | undefined
  can_send_message_group?: CanSendMessageGroup | undefined
  can_subscribe_group?: CanSubscribeGroup | undefined
  can_resolve_topics_group?: CanResolveTopicsGroup | undefined
  can_create_topic_group?: CanCreateTopicGroup | undefined
  is_archived?: boolean | undefined
  subscriber_count?: number | undefined
}
type EmojiReaction = {
  emoji_name?: { [x: string]: unknown } | undefined
  emoji_code?: { [x: string]: unknown } | undefined
  reaction_type?: { [x: string]: unknown } | undefined
  user_id?: number | undefined
}
type MessagesEvent = {
  avatar_url?: ({ [x: string]: unknown } | null) | undefined
  client?: { [x: string]: unknown } | undefined
  content?: { [x: string]: unknown } | undefined
  content_type?: { [x: string]: unknown } | undefined
  display_recipient?: { [x: string]: unknown } | undefined
  edit_history?: { [x: string]: unknown } | undefined
  id?: { [x: string]: unknown } | undefined
  is_me_message?: { [x: string]: unknown } | undefined
  last_edit_timestamp?: { [x: string]: unknown } | undefined
  last_moved_timestamp?: { [x: string]: unknown } | undefined
  reactions?: { [x: string]: unknown } | undefined
  recipient_id?: { [x: string]: unknown } | undefined
  sender_email?: { [x: string]: unknown } | undefined
  sender_full_name?: { [x: string]: unknown } | undefined
  sender_id?: { [x: string]: unknown } | undefined
  sender_realm_str?: { [x: string]: unknown } | undefined
  stream_id?: { [x: string]: unknown } | undefined
  subject?: { [x: string]: unknown } | undefined
  submessages?: { [x: string]: unknown } | undefined
  timestamp?: { [x: string]: unknown } | undefined
  topic_links?: { [x: string]: unknown } | undefined
  type?: { [x: string]: unknown } | undefined
}
type ProfileData = {
  [x: string]: { value?: string | undefined; rendered_value?: string | undefined }
}
type User = {
  user_id?: { [x: string]: unknown } | undefined
  delivery_email?: ({ [x: string]: unknown } | null) | undefined
  email?: { [x: string]: unknown } | undefined
  full_name?: { [x: string]: unknown } | undefined
  date_joined?: { [x: string]: unknown } | undefined
  is_active?: { [x: string]: unknown } | undefined
  is_owner?: { [x: string]: unknown } | undefined
  is_admin?: { [x: string]: unknown } | undefined
  is_guest?: { [x: string]: unknown } | undefined
  is_bot?: { [x: string]: unknown } | undefined
  bot_type?: ({ [x: string]: unknown } | null) | undefined
  bot_owner_id?: ({ [x: string]: unknown } | null) | undefined
  role?: { [x: string]: unknown } | undefined
  timezone?: { [x: string]: unknown } | undefined
  avatar_url?: ({ [x: string]: unknown } | null) | undefined
  avatar_version?: { [x: string]: unknown } | undefined
  is_imported_stub?: { [x: string]: unknown } | undefined
  is_deleted?: { [x: string]: unknown } | undefined
  profile_data?: ProfileData | undefined
}
type ModernPresenceFormat = {
  active_timestamp?: number | undefined
  idle_timestamp?: number | undefined
}
type BasicChannel = {
  stream_id: { [x: string]: unknown }
  name: { [x: string]: unknown }
  is_archived: { [x: string]: unknown }
  description: { [x: string]: unknown }
  date_created: { [x: string]: unknown }
  creator_id: { [x: string]: unknown } | null
  invite_only: { [x: string]: unknown }
  rendered_description: { [x: string]: unknown }
  is_web_public: { [x: string]: unknown }
  stream_post_policy: { [x: string]: unknown }
  message_retention_days: { [x: string]: unknown } | null
  default_push_notifications: { [x: string]: unknown }
  history_public_to_subscribers: { [x: string]: unknown }
  topics_policy?: { [x: string]: unknown } | undefined
  first_message_id: { [x: string]: unknown } | null
  folder_id: { [x: string]: unknown } | null
  is_recently_active: { [x: string]: unknown }
  is_announcement_only: { [x: string]: unknown }
  can_add_subscribers_group?: { [x: string]: unknown } | undefined
  can_remove_subscribers_group: { [x: string]: unknown }
  can_administer_channel_group?: { [x: string]: unknown } | undefined
  can_delete_any_message_group?: { [x: string]: unknown } | undefined
  can_delete_own_message_group?: { [x: string]: unknown } | undefined
  can_move_messages_out_of_channel_group?: { [x: string]: unknown } | undefined
  can_move_messages_within_channel_group?: { [x: string]: unknown } | undefined
  can_send_message_group?: { [x: string]: unknown } | undefined
  can_subscribe_group: { [x: string]: unknown }
  can_resolve_topics_group?: { [x: string]: unknown } | undefined
  can_create_topic_group?: { [x: string]: unknown } | undefined
  subscriber_count: { [x: string]: unknown }
  stream_weekly_traffic: number | null
}
type Attachment = {
  id?: number | undefined
  name?: string | undefined
  path_id?: string | undefined
  size?: number | undefined
  create_time?: number | undefined
  message_ids?: number[] | undefined
}
type CustomProfileField = {
  id: number
  type: number
  order: number
  name: string
  hint: string
  field_data?: string | undefined
  display_in_profile_summary?: boolean | undefined
  required: boolean
  editable_by_user: boolean
  use_for_user_matching?: boolean | undefined
}
type DefaultChannelGroup = {
  name?: string | undefined
  description?: string | undefined
  id?: number | undefined
  streams?: number[] | undefined
}
type OnboardingStep = { type?: string | undefined; name?: string | undefined }
type UserGroup = {
  name?: string | undefined
  date_created?: (number | null) | undefined
  creator_id?: (number | null) | undefined
  description?: string | undefined
  members?: number[] | undefined
  direct_subgroup_ids?: number[] | undefined
  id?: number | undefined
  is_system_group?: boolean | undefined
  can_add_members_group?: {} | undefined
  can_join_group?: {} | undefined
  can_leave_group?: {} | undefined
  can_manage_group?: {} | undefined
  can_mention_group?: {} | undefined
  can_remove_members_group?: {} | undefined
  deactivated?: boolean | undefined
}
type RealmPlayground = {
  id?: number | undefined
  name?: string | undefined
  pygments_language?: string | undefined
  url_template?: string | undefined
}
type RealmEmoji = {
  id?: string | undefined
  name?: string | undefined
  source_url?: string | undefined
  still_url?: (string | null) | undefined
  deactivated?: boolean | undefined
  author_id?: (number | null) | undefined
}
type RealmExport = {
  id?: number | undefined
  acting_user_id?: number | undefined
  export_time?: number | undefined
  deleted_timestamp?: (number | null) | undefined
  failed_timestamp?: (number | null) | undefined
  export_url?: (string | null) | undefined
  pending?: boolean | undefined
  export_from_prior_server?: boolean | undefined
  export_type?: 'public' | 'full_with_consent' | 'full_without_consent' | undefined
}
type BotConfiguration = { [x: string]: string }
type Bot = {
  user_id?: { [x: string]: unknown } | undefined
  default_sending_stream?: ({ [x: string]: unknown } | null) | undefined
  default_events_register_stream?: ({ [x: string]: unknown } | null) | undefined
  default_all_public_streams?: { [x: string]: unknown } | undefined
  services?: { [x: string]: unknown } | undefined
}
type RealmAuthenticationMethod = {
  enabled?: boolean | undefined
  available?: boolean | undefined
  unavailable_reason?: string | undefined
}
type Draft = {
  id?: number | undefined
  type: '' | 'stream' | 'private'
  to: number[]
  topic: string
  content: string
  timestamp?: number | undefined
}
type NavigationView = { fragment: string; is_pinned: boolean; name?: (string | null) | undefined }
type SavedSnippet = {
  id?: number | undefined
  title?: string | undefined
  content?: string | undefined
  date_created?: number | undefined
}
type Reminder = {
  reminder_id: number
  type: 'private'
  to: number[]
  content: string
  rendered_content: string
  scheduled_delivery_timestamp: number
  failed: boolean
  reminder_target_message_id: number
}
type ScheduledMessage = {
  scheduled_message_id: { [x: string]: unknown }
  type: { [x: string]: unknown }
  to: { [x: string]: unknown }
  topic?: { [x: string]: unknown } | undefined
  content: { [x: string]: unknown }
  rendered_content: { [x: string]: unknown }
  scheduled_delivery_timestamp: { [x: string]: unknown }
  failed: { [x: string]: unknown }
}
type ChannelFolder = {
  id?: number | undefined
  name?: string | undefined
  order?: number | undefined
  date_created?: (number | null) | undefined
  creator_id?: (number | null) | undefined
  description?: string | undefined
  rendered_description?: string | undefined
  is_archived?: boolean | undefined
}
type JsonSuccess = {
  result: { [x: string]: unknown }
  msg: { [x: string]: unknown }
  ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
}
type CodedError = {
  result: { [x: string]: unknown }
  msg: { [x: string]: unknown }
  code: { [x: string]: unknown }
}
type RequiredContent = string
type Anchor = string
type EmojiCode = string
type ReactionType = string
type OptionalContent = string
type LegacyPresenceFormat = {
  client?: string | undefined
  status?: 'idle' | 'active' | undefined
  timestamp?: number | undefined
  pushable?: boolean | undefined
}
type ProfileDataUpdate = { id: number; value: (string | null) | number[] }
type Principals = string[] | number[]
type HistoryPublicToSubscribers = boolean
type MessageRetentionDays = string | number
type SendNewSubscriptionMessages = boolean
type InvalidPushDeviceTokenError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type InvalidRemotePushDeviceTokenError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type NoActivePushDeviceError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type PushNotificationAdminActionRequiredError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type FailedToConnectBouncerError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type InternalBouncerServerError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type RealmDomain = { domain: string; allow_subdomains: boolean }
type CustomProfileFieldHintSchema = string
type CustomProfileFieldDataSchema = { [x: string]: unknown }
type CustomProfileFieldDisplayInProfileSummarySchema = boolean
type CustomProfileFieldRequiredSchema = boolean
type CustomProfileFieldEditableByUserSchema = boolean
type CustomProfileFieldUseForUserMatchingSchema = boolean
type SubscriptionProperty =
  | 'color'
  | 'is_muted'
  | 'in_home_view'
  | 'pin_to_top'
  | 'desktop_notifications'
  | 'audible_notifications'
  | 'push_notifications'
  | 'email_notifications'
  | 'wildcard_mentions_notify'
  | 'web_left_sidebar_topics_order'
type SubscriptionPropertyValue = boolean | number | string
type LinkifierPattern = string
type LinkifierURLTemplate = string
type EmailAddressVisibility = number
type Invite = {
  id?: number | undefined
  invited_by_user_id?: number | undefined
  invited?: number | undefined
  expiry_date?: (number | null) | undefined
  invited_as?: 100 | 200 | 300 | 400 | 600 | undefined
  email?: string | undefined
  notify_referrer_on_join?: boolean | undefined
  link_url?: string | undefined
  is_multiuse?: boolean | undefined
}
type InviteExpirationParameter = number | null
type InviteRoleParameter = 100 | 200 | 300 | 400 | 600
type EventTypes = string[]
type AllPublicChannels = boolean
type Narrow = string[][]
type WebhookConfigOption = {
  key?: string | undefined
  label?: string | undefined
  validator?: string | undefined
}[]
type WebhookUrlOption = {
  key?: string | undefined
  label?: string | undefined
  input_type?: string | undefined
}[]
type GroupPermissionSetting = {
  require_system_group?: boolean | undefined
  allow_internet_group?: boolean | undefined
  allow_nobody_group?: boolean | undefined
  allow_everyone_group?: boolean | undefined
  default_group_name?: string | undefined
  default_for_system_groups?: (string | null) | undefined
  allowed_system_groups?: string[] | undefined
}
type InvalidApiKeyError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type MissingArgumentError = {
  result: { [x: string]: unknown }
  msg: { [x: string]: unknown }
  code: { [x: string]: unknown }
  var_name?: string | undefined
}
type IncompatibleParametersError = {
  result: { [x: string]: unknown }
  msg: { [x: string]: unknown }
  code: { [x: string]: unknown }
  parameters?: string | undefined
}
type UserNotAuthorizedError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type UserDeactivatedError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type RealmDeactivatedError = {
  result?: { [x: string]: unknown } | undefined
  msg?: { [x: string]: unknown } | undefined
  code?: { [x: string]: unknown } | undefined
}
type RateLimitedError = {
  result: { [x: string]: unknown }
  msg: { [x: string]: unknown }
  code: { [x: string]: unknown }
  'retry-after'?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/fetch_api_key': {
      $post: {
        input: { json: { username: string; password: string } } & {
          form: { username: string; password: string }
        }
        output: ApiKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jwt/fetch_api_key': {
      $post: {
        input: { json: { token: string; include_profile?: boolean | undefined } } & {
          form: { token: string; include_profile?: boolean | undefined }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          api_key: string
          email: string
          user?:
            | {
                user_id?: { [x: string]: unknown } | undefined
                delivery_email?: ({ [x: string]: unknown } | null) | undefined
                email?: { [x: string]: unknown } | undefined
                full_name?: { [x: string]: unknown } | undefined
                date_joined?: { [x: string]: unknown } | undefined
                is_active?: { [x: string]: unknown } | undefined
                is_owner?: { [x: string]: unknown } | undefined
                is_admin?: { [x: string]: unknown } | undefined
                is_guest?: { [x: string]: unknown } | undefined
                is_bot?: { [x: string]: unknown } | undefined
                bot_type?: ({ [x: string]: unknown } | null) | undefined
                bot_owner_id?: ({ [x: string]: unknown } | null) | undefined
                role?: { [x: string]: unknown } | undefined
                timezone?: { [x: string]: unknown } | undefined
                avatar_url?: ({ [x: string]: unknown } | null) | undefined
                avatar_version?: { [x: string]: unknown } | undefined
                is_imported_stub?: { [x: string]: unknown } | undefined
                is_deleted?: boolean | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dev_fetch_api_key': {
      $post: {
        input: { json: { username: string } } & { form: { username: string } }
        output: ApiKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dev_list_users': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          direct_admins?:
            | { email?: string | undefined; realm_url?: string | undefined }[]
            | undefined
          direct_users?:
            | { email?: string | undefined; realm_url?: string | undefined }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                queue_id: string
                last_event_id?: number | undefined
                dont_block?: boolean | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              events?:
                | (
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        alert_words?: string[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        property?: string | undefined
                        value?: boolean | number | string | undefined
                        language_name?: string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        person?:
                          | { user_id?: number | undefined; full_name?: string | undefined }
                          | {
                              user_id?: number | undefined
                              avatar_url?: string | undefined
                              avatar_source?: string | undefined
                              avatar_url_medium?: string | undefined
                              avatar_version?: number | undefined
                            }
                          | {
                              user_id?: number | undefined
                              email?: string | undefined
                              timezone?: string | undefined
                            }
                          | { user_id?: number | undefined; bot_owner_id?: number | undefined }
                          | {
                              user_id?: number | undefined
                              role?: 100 | 200 | 300 | 400 | 600 | undefined
                            }
                          | {
                              user_id?: number | undefined
                              delivery_email?: (string | null) | undefined
                            }
                          | {
                              user_id?: number | undefined
                              custom_profile_field?:
                                | {
                                    id?: number | undefined
                                    value?: (string | null) | undefined
                                    rendered_value?: string | undefined
                                  }
                                | undefined
                            }
                          | { user_id?: number | undefined; new_email?: string | undefined }
                          | { user_id?: number | undefined; is_active?: boolean | undefined }
                          | { user_id?: number | undefined; is_imported_stub?: boolean | undefined }
                          | { user_id?: number | undefined; date_joined?: string | undefined }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        subscriptions?: Subscription[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        subscriptions?:
                          | { stream_id?: number | undefined; name?: string | undefined }[]
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        stream_id?: number | undefined
                        property?: string | undefined
                        value?: number | boolean | string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'peer_add' | undefined
                        stream_ids?: number[] | undefined
                        user_ids?: number[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'peer_remove' | undefined
                        stream_ids?: number[] | undefined
                        user_ids?: number[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        message?: MessagesEvent | undefined
                        flags?: string[] | undefined
                        local_message_id?: string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        value?: boolean | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        value?: boolean | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        value?: boolean | undefined
                      }
                    | { id?: EventIdSchema | undefined; type?: {} | undefined }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        person?: User | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        person?:
                          | { user_id?: number | undefined; full_name?: string | undefined }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        presences?: { [x: string]: ModernPresenceFormat } | undefined
                        user_id?: number | undefined
                        email?: string | undefined
                        server_timestamp?: number | undefined
                        presence?:
                          | {
                              [x: string]: {
                                client?: string | undefined
                                status?: 'idle' | 'active' | undefined
                                timestamp?: number | undefined
                                pushable?: boolean | undefined
                              }
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'create' | undefined
                        streams?: BasicChannel[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'delete' | undefined
                        streams?: { stream_id?: number | undefined }[] | undefined
                        stream_ids?: number[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        stream_id?: number | undefined
                        name?: string | undefined
                        property?: string | undefined
                        value?:
                          | {
                              direct_members?: number[] | undefined
                              direct_subgroups?: number[] | undefined
                            }
                          | number
                          | boolean
                          | (string | null)
                          | undefined
                        rendered_description?: string | undefined
                        history_public_to_subscribers?: boolean | undefined
                        is_web_public?: boolean | undefined
                      }
                    | {
                        emoji_name?: { [x: string]: unknown } | undefined
                        emoji_code?: { [x: string]: unknown } | undefined
                        reaction_type?: { [x: string]: unknown } | undefined
                        user_id?: { [x: string]: unknown } | undefined
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        message_id?: number | undefined
                      }
                    | {
                        emoji_name?: { [x: string]: unknown } | undefined
                        emoji_code?: { [x: string]: unknown } | undefined
                        reaction_type?: { [x: string]: unknown } | undefined
                        user_id?: { [x: string]: unknown } | undefined
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        message_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        attachment?: Attachment | undefined
                        upload_space_used?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        attachment?: Attachment | undefined
                        upload_space_used?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        attachment?: { id?: number | undefined } | undefined
                        upload_space_used?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        device_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        device_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        device_id?: number | undefined
                        push_key_id?: number | undefined
                        push_token_id?: (string | null) | undefined
                        pending_push_token_id?: (string | null) | undefined
                        push_token_last_updated_timestamp?: number | undefined
                        push_registration_error_code?: (string | null) | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        msg_type?: string | undefined
                        content?: string | undefined
                        message_id?: number | undefined
                        sender_id?: number | undefined
                        submessage_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        away?: boolean | undefined
                        status_text?: string | undefined
                        emoji_name?: string | undefined
                        emoji_code?: string | undefined
                        reaction_type?:
                          | 'unicode_emoji'
                          | 'realm_emoji'
                          | 'zulip_extra_emoji'
                          | undefined
                        user_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        fields?: CustomProfileField[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        default_stream_groups?: DefaultChannelGroup[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        default_streams?: number[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        message_ids?: number[] | undefined
                        message_id?: number | undefined
                        message_type?: 'private' | 'stream' | undefined
                        stream_id?: number | undefined
                        topic?: string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        muted_topics?: (string | number)[][] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        stream_id?: number | undefined
                        topic_name?: string | undefined
                        last_updated?: number | undefined
                        visibility_policy?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        muted_users?:
                          | { id?: number | undefined; timestamp?: number | undefined }[]
                          | undefined
                      }
                    | { id?: EventIdSchema | undefined; type?: {} | undefined }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        onboarding_steps?: OnboardingStep[] | undefined
                      }
                    | {
                        id: EventIdSchema
                        type: {}
                        user_id: number | null
                        rendering_only: boolean
                        message_id: number
                        message_ids: number[]
                        flags: string[]
                        edit_timestamp: number
                        stream_name?: string | undefined
                        stream_id?: number | undefined
                        new_stream_id?: number | undefined
                        propagate_mode?: 'change_one' | 'change_later' | 'change_all' | undefined
                        orig_subject?: string | undefined
                        subject?: string | undefined
                        topic_links?:
                          | { text?: string | undefined; url?: string | undefined }[]
                          | undefined
                        orig_content?: string | undefined
                        orig_rendered_content?: string | undefined
                        content?: string | undefined
                        rendered_content?: string | undefined
                        is_me_message?: boolean | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'start' | undefined
                        message_type?: 'direct' | 'stream' | undefined
                        sender?:
                          | { user_id?: number | undefined; email?: string | undefined }
                          | undefined
                        recipients?:
                          | { user_id?: number | undefined; email?: string | undefined }[]
                          | undefined
                        stream_id?: number | undefined
                        topic?: string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'stop' | undefined
                        message_type?: 'direct' | 'stream' | undefined
                        sender?:
                          | { user_id?: number | undefined; email?: string | undefined }
                          | undefined
                        recipients?:
                          | { user_id?: number | undefined; email?: string | undefined }[]
                          | undefined
                        stream_id?: number | undefined
                        topic?: string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'start' | undefined
                        sender_id?: number | undefined
                        message_id?: number | undefined
                        recipient?:
                          | {
                              type?: 'direct' | 'channel' | undefined
                              channel_id?: number | undefined
                              topic?: string | undefined
                              user_ids?: number[] | undefined
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'stop' | undefined
                        sender_id?: number | undefined
                        message_id?: number | undefined
                        recipient?:
                          | {
                              type?: 'direct' | 'channel' | undefined
                              channel_id?: number | undefined
                              topic?: string | undefined
                              user_ids?: number[] | undefined
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        content?: string | undefined
                        rendered_content?: string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        operation?: 'add' | undefined
                        flag?: string | undefined
                        messages?: number[] | undefined
                        all?: boolean | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        operation?: 'remove' | undefined
                        flag?: string | undefined
                        messages?: number[] | undefined
                        all?: boolean | undefined
                        message_details?:
                          | {
                              [x: string]: {
                                type: 'private' | 'stream'
                                mentioned?: boolean | undefined
                                user_ids?: number[] | undefined
                                stream_id?: number | undefined
                                topic?: string | undefined
                                unmuted_stream_msg?: boolean | undefined
                              }
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        group?: UserGroup | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        group_id?: number | undefined
                        data?:
                          | {
                              name?: string | undefined
                              description?: string | undefined
                              can_add_members_group?: {} | undefined
                              can_join_group?: {} | undefined
                              can_leave_group?: {} | undefined
                              can_manage_group?: {} | undefined
                              can_mention_group?: {} | undefined
                              can_remove_members_group?: {} | undefined
                              deactivated?: boolean | undefined
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add_members' | undefined
                        group_id?: number | undefined
                        user_ids?: number[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove_members' | undefined
                        group_id?: number | undefined
                        user_ids?: number[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add_subgroups' | undefined
                        group_id?: number | undefined
                        direct_subgroup_ids?: number[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove_subgroups' | undefined
                        group_id?: number | undefined
                        direct_subgroup_ids?: number[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        group_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        realm_linkifiers?:
                          | {
                              pattern?: string | undefined
                              url_template?: string | undefined
                              id?: number | undefined
                              example_input?: (string | null) | undefined
                              reverse_template?: (string | null) | undefined
                              alternative_url_templates?: string[] | undefined
                            }[]
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        realm_filters?: (number | string)[][] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        realm_playgrounds?: RealmPlayground[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        emoji?: RealmEmoji | undefined
                      }
                    | {
                        id: EventIdSchema
                        type: {}
                        op: 'update_one'
                        emoji_id: string
                        data: { deactivated?: boolean | undefined }
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        realm_emoji?: { [x: string]: RealmEmoji } | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        realm_domain?: { domain: string; allow_subdomains: boolean } | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'change' | undefined
                        realm_domain?: { domain: string; allow_subdomains: boolean } | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        domain?: string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        exports?: RealmExport[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        user_id?: number | undefined
                        consented?: boolean | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        bot?: Bot | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        bot?:
                          | {
                              user_id?: { [x: string]: unknown } | undefined
                              default_sending_stream?: ({ [x: string]: unknown } | null) | undefined
                              default_events_register_stream?:
                                | ({ [x: string]: unknown } | null)
                                | undefined
                              default_all_public_streams?: { [x: string]: unknown } | undefined
                              services?: { [x: string]: unknown } | undefined
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        bot?:
                          | { user_id?: number | undefined; full_name?: string | undefined }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'delete' | undefined
                        bot?: { user_id?: number | undefined } | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        property?: string | undefined
                        value?: string | boolean | (number | null) | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'deactivated' | undefined
                        realm_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        zulip_version?: string | undefined
                        zulip_merge_base?: string | undefined
                        zulip_feature_level?: number | undefined
                        server_generation?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        immediate?: boolean | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update_dict' | undefined
                        property?: string | undefined
                        data?:
                          | {
                              allow_message_editing?: boolean | undefined
                              authentication_methods?:
                                | { [x: string]: RealmAuthenticationMethod }
                                | undefined
                              can_access_all_users_group?: {} | undefined
                              can_create_groups?: {} | undefined
                              can_create_bots_group?: {} | undefined
                              can_create_write_only_bots_group?: {} | undefined
                              can_create_public_channel_group?: {} | undefined
                              can_create_private_channel_group?: {} | undefined
                              can_create_web_public_channel_group?: {} | undefined
                              can_add_custom_emoji_group?: {} | undefined
                              can_add_subscribers_group?: {} | undefined
                              can_delete_any_message_group?: {} | undefined
                              can_delete_own_message_group?: {} | undefined
                              can_set_delete_message_policy_group?: {} | undefined
                              can_set_topics_policy_group?: {} | undefined
                              can_invite_users_group?: {} | undefined
                              can_mention_many_users_group?: {} | undefined
                              can_move_messages_between_channels_group?: {} | undefined
                              can_move_messages_between_topics_group?: {} | undefined
                              can_resolve_topics_group?: {} | undefined
                              can_manage_all_groups?: {} | undefined
                              can_manage_billing_group?: {} | undefined
                              can_summarize_topics_group?: {} | undefined
                              create_multiuse_invite_group?: {} | undefined
                              default_avatar_source?: string | undefined
                              default_code_block_language?: string | undefined
                              default_language?: string | undefined
                              description?: string | undefined
                              digest_emails_enabled?: boolean | undefined
                              digest_weekday?: number | undefined
                              direct_message_initiator_group?: {} | undefined
                              direct_message_permission_group?: {} | undefined
                              disallow_disposable_email_addresses?: boolean | undefined
                              email_changes_disabled?: boolean | undefined
                              enable_read_receipts?: boolean | undefined
                              emails_restricted_to_domains?: boolean | undefined
                              enable_guest_user_dm_warning?: boolean | undefined
                              enable_guest_user_indicator?: boolean | undefined
                              enable_spectator_access?: boolean | undefined
                              gif_rating_policy?: number | undefined
                              icon_source?: string | undefined
                              icon_url?: string | undefined
                              media_preview_size?: 100 | 150 | 200 | undefined
                              inline_image_preview?: boolean | undefined
                              inline_url_embed_preview?: boolean | undefined
                              invite_required?: boolean | undefined
                              jitsi_server_url?: (string | null) | undefined
                              logo_source?: string | undefined
                              logo_url?: string | undefined
                              topics_policy?:
                                | 'allow_empty_topic'
                                | 'disable_empty_topic'
                                | undefined
                              mandatory_topics?: boolean | undefined
                              max_file_upload_size_mib?: number | undefined
                              message_content_allowed_in_email_notifications?: boolean | undefined
                              message_content_delete_limit_seconds?: (number | null) | undefined
                              message_content_edit_limit_seconds?: (number | null) | undefined
                              message_edit_history_visibility_policy?: string | undefined
                              moderation_request_channel_id?: number | undefined
                              move_messages_within_stream_limit_seconds?:
                                | (number | null)
                                | undefined
                              move_messages_between_streams_limit_seconds?:
                                | (number | null)
                                | undefined
                              name?: string | undefined
                              name_changes_disabled?: boolean | undefined
                              night_logo_source?: string | undefined
                              night_logo_url?: string | undefined
                              new_stream_announcements_stream_id?: number | undefined
                              org_type?: number | undefined
                              plan_type?: number | undefined
                              presence_disabled?: boolean | undefined
                              push_notifications_enabled?: boolean | undefined
                              push_notifications_enabled_end_timestamp?: (number | null) | undefined
                              rendered_description?: string | undefined
                              require_e2ee_push_notifications?: boolean | undefined
                              require_unique_names?: boolean | undefined
                              send_channel_events_messages?: boolean | undefined
                              send_welcome_emails?: boolean | undefined
                              signup_announcements_stream_id?: number | undefined
                              upload_quota_mib?: (number | null) | undefined
                              video_chat_provider?: number | undefined
                              waiting_period_threshold?: number | undefined
                              want_advertise_in_communities_directory?: boolean | undefined
                              welcome_message_custom_text?: string | undefined
                              workplace_users_group?: {} | undefined
                              zulip_update_announcements_stream_id?: number | undefined
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        property?: string | undefined
                        value?: boolean | number | string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        drafts?: Draft[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        draft?: Draft | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        draft_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        navigation_view?: NavigationView | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        fragment?: string | undefined
                        data?:
                          | {
                              name?: (string | null) | undefined
                              is_pinned?: (boolean | null) | undefined
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        fragment?: string | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        saved_snippet?: SavedSnippet | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        saved_snippet?: SavedSnippet | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        saved_snippet_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        reminders?: Reminder[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        reminder_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        scheduled_messages?: ScheduledMessage[] | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        scheduled_message?: ScheduledMessage | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'remove' | undefined
                        scheduled_message_id?: number | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'add' | undefined
                        channel_folder?: ChannelFolder | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'update' | undefined
                        channel_folder_id?: number | undefined
                        data?:
                          | {
                              name?: string | undefined
                              description?: string | undefined
                              rendered_description?: string | undefined
                              is_archived?: boolean | undefined
                            }
                          | undefined
                      }
                    | {
                        id?: EventIdSchema | undefined
                        type?: {} | undefined
                        op?: 'reorder' | undefined
                        order?: number[] | undefined
                      }
                  )[]
                | undefined
              queue_id?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                queue_id: string
                last_event_id?: number | undefined
                dont_block?: boolean | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
              queue_id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { json: { queue_id: string } } & { form: { queue_id: string } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { queue_id: string } } & { form: { queue_id: string } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
              queue_id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/get_stream_id': {
      $get:
        | {
            input: { query: { stream: string } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              stream_id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { stream: string } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mark_all_as_read': {
      $post: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          complete: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mark_stream_as_read': {
      $post: {
        input: { json: { stream_id: number } } & { form: { stream_id: number } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mark_topic_as_read': {
      $post: {
        input: { json: { stream_id: number; topic_name: string } } & {
          form: { stream_id: number; topic_name: string }
        }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attachments': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          attachments?: Attachment[] | undefined
          upload_space_used?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attachments/:attachment_id': {
      $delete:
        | {
            input: { param: { attachment_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attachment_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attachment_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/bot_storage': {
      $get:
        | {
            input: { query: { keys?: string[] | undefined } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              storage?: { [x: string]: string } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { keys?: string[] | undefined } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { json: { storage: { [x: string]: string } } } & {
              form: { storage: { [x: string]: string } }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { storage: { [x: string]: string } } } & {
              form: { storage: { [x: string]: string } }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { json: { keys?: string[] | undefined } } & {
              form: { keys?: string[] | undefined }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { keys?: string[] | undefined } } & {
              form: { keys?: string[] | undefined }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/drafts': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          count?: number | undefined
          drafts?: Draft[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { drafts?: Draft[] | undefined } } & {
              form: { drafts?: Draft[] | undefined }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              ids?: number[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { drafts?: Draft[] | undefined } } & {
              form: { drafts?: Draft[] | undefined }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/drafts/:draft_id': {
      $patch:
        | {
            input: { param: { draft_id: number } } & {
              json: {
                draft: {
                  id?: number | undefined
                  type: '' | 'stream' | 'private'
                  to: number[]
                  topic: string
                  content: string
                  timestamp?: number | undefined
                }
              }
            } & {
              form: {
                draft: {
                  id?: number | undefined
                  type: '' | 'stream' | 'private'
                  to: number[]
                  topic: string
                  content: string
                  timestamp?: number | undefined
                }
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { draft_id: number } } & {
              json: {
                draft: {
                  id?: number | undefined
                  type: '' | 'stream' | 'private'
                  to: number[]
                  topic: string
                  content: string
                  timestamp?: number | undefined
                }
              }
            } & {
              form: {
                draft: {
                  id?: number | undefined
                  type: '' | 'stream' | 'private'
                  to: number[]
                  topic: string
                  content: string
                  timestamp?: number | undefined
                }
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { draft_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { draft_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/navigation_views': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: IgnoredParametersUnsupported | undefined
          navigation_views?: NavigationView[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: NavigationView } & { form: NavigationView }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: IgnoredParametersUnsupported | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NavigationView } & { form: NavigationView }
            output: CodedError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/navigation_views/:fragment': {
      $patch:
        | {
            input: { param: { fragment: string } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            } & { form: { [x: string]: unknown } | { [x: string]: unknown } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: IgnoredParametersUnsupported | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fragment: string } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            } & { form: { [x: string]: unknown } | { [x: string]: unknown } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fragment: string } } & {
              json: { [x: string]: unknown } | { [x: string]: unknown }
            } & { form: { [x: string]: unknown } | { [x: string]: unknown } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { fragment: string } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fragment: string } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/saved_snippets': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          saved_snippets?: SavedSnippet[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { title: string; content: string } } & {
              form: { title: string; content: string }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              saved_snippet_id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { title: string; content: string } } & {
              form: { title: string; content: string }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/saved_snippets/:saved_snippet_id': {
      $patch:
        | {
            input: { param: { saved_snippet_id: number } } & {
              json: { title?: string | undefined; content?: string | undefined }
            } & { form: { title?: string | undefined; content?: string | undefined } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { saved_snippet_id: number } } & {
              json: { title?: string | undefined; content?: string | undefined }
            } & { form: { title?: string | undefined; content?: string | undefined } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { saved_snippet_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { saved_snippet_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/reminders': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          reminders?: Reminder[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            message_id?: number | undefined
            scheduled_delivery_timestamp?: number | undefined
            note?: string | undefined
          }
        } & {
          form: {
            message_id?: number | undefined
            scheduled_delivery_timestamp?: number | undefined
            note?: string | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          reminder_id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reminders/:reminder_id': {
      $delete:
        | {
            input: { param: { reminder_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reminder_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/scheduled_messages': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          scheduled_messages?: ScheduledMessage[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                type: 'direct' | 'channel' | 'stream' | 'private'
                to: number | number[]
                content: RequiredContent
                topic?: string | undefined
                scheduled_delivery_timestamp: number
                read_by_sender?: boolean | undefined
              }
            } & {
              form: {
                type: 'direct' | 'channel' | 'stream' | 'private'
                to: number | number[]
                content: RequiredContent
                topic?: string | undefined
                scheduled_delivery_timestamp: number
                read_by_sender?: boolean | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              scheduled_message_id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type: 'direct' | 'channel' | 'stream' | 'private'
                to: number | number[]
                content: RequiredContent
                topic?: string | undefined
                scheduled_delivery_timestamp: number
                read_by_sender?: boolean | undefined
              }
            } & {
              form: {
                type: 'direct' | 'channel' | 'stream' | 'private'
                to: number | number[]
                content: RequiredContent
                topic?: string | undefined
                scheduled_delivery_timestamp: number
                read_by_sender?: boolean | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                  stream_id?: number | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/scheduled_messages/:scheduled_message_id': {
      $patch:
        | {
            input: { param: { scheduled_message_id: number } } & {
              json: {
                type?: 'direct' | 'channel' | 'stream' | 'private' | undefined
                to?: number | number[] | undefined
                content?: string | undefined
                topic?: string | undefined
                scheduled_delivery_timestamp?: number | undefined
              }
            } & {
              form: {
                type?: 'direct' | 'channel' | 'stream' | 'private' | undefined
                to?: number | number[] | undefined
                content?: string | undefined
                topic?: string | undefined
                scheduled_delivery_timestamp?: number | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scheduled_message_id: number } } & {
              json: {
                type?: 'direct' | 'channel' | 'stream' | 'private' | undefined
                to?: number | number[] | undefined
                content?: string | undefined
                topic?: string | undefined
                scheduled_delivery_timestamp?: number | undefined
              }
            } & {
              form: {
                type?: 'direct' | 'channel' | 'stream' | 'private' | undefined
                to?: number | number[] | undefined
                content?: string | undefined
                topic?: string | undefined
                scheduled_delivery_timestamp?: number | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                  stream_id?: number | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scheduled_message_id: number } } & {
              json: {
                type?: 'direct' | 'channel' | 'stream' | 'private' | undefined
                to?: number | number[] | undefined
                content?: string | undefined
                topic?: string | undefined
                scheduled_delivery_timestamp?: number | undefined
              }
            } & {
              form: {
                type?: 'direct' | 'channel' | 'stream' | 'private' | undefined
                to?: number | number[] | undefined
                content?: string | undefined
                topic?: string | undefined
                scheduled_delivery_timestamp?: number | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { scheduled_message_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scheduled_message_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/default_streams': {
      $post:
        | {
            input: { json: { stream_id: number } } & { form: { stream_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { stream_id: number } } & { form: { stream_id: number } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { json: { stream_id: number } } & { form: { stream_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { stream_id: number } } & { form: { stream_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/messages': {
      $get: {
        input: {
          query: {
            anchor?: Anchor | undefined
            include_anchor?: boolean | undefined
            anchor_date?: string | undefined
            num_before?: number | undefined
            num_after?: number | undefined
            narrow?:
              | (
                  | {
                      operator: string
                      operand: string | number | number[]
                      negated?: boolean | undefined
                    }
                  | string[]
                )[]
              | undefined
            client_gravatar?: boolean | undefined
            apply_markdown?: boolean | undefined
            use_first_unread_anchor?: boolean | undefined
            message_ids?: number[] | undefined
            allow_empty_topic_name?: boolean | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          anchor?: number | undefined
          found_newest?: boolean | undefined
          found_oldest?: boolean | undefined
          found_anchor?: boolean | undefined
          history_limited?: boolean | undefined
          messages: {
            avatar_url?: ({ [x: string]: unknown } | null) | undefined
            client?: { [x: string]: unknown } | undefined
            content?: { [x: string]: unknown } | undefined
            content_type?: { [x: string]: unknown } | undefined
            display_recipient?: { [x: string]: unknown } | undefined
            edit_history?: { [x: string]: unknown } | undefined
            id?: { [x: string]: unknown } | undefined
            is_me_message?: { [x: string]: unknown } | undefined
            last_edit_timestamp?: { [x: string]: unknown } | undefined
            last_moved_timestamp?: { [x: string]: unknown } | undefined
            reactions?: { [x: string]: unknown } | undefined
            recipient_id?: { [x: string]: unknown } | undefined
            sender_email?: { [x: string]: unknown } | undefined
            sender_full_name?: { [x: string]: unknown } | undefined
            sender_id?: { [x: string]: unknown } | undefined
            sender_realm_str?: { [x: string]: unknown } | undefined
            stream_id?: { [x: string]: unknown } | undefined
            subject?: { [x: string]: unknown } | undefined
            submessages?: { [x: string]: unknown } | undefined
            timestamp?: { [x: string]: unknown } | undefined
            topic_links?: { [x: string]: unknown } | undefined
            type?: { [x: string]: unknown } | undefined
            flags?: string[] | undefined
            match_content?: string | undefined
            match_subject?: string | undefined
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                type: 'direct' | 'channel' | 'stream' | 'private'
                to: string | number | string[] | number[]
                content: RequiredContent
                topic?: string | undefined
                queue_id?: string | undefined
                local_id?: string | undefined
                read_by_sender?: boolean | undefined
              }
            } & {
              form: {
                type: 'direct' | 'channel' | 'stream' | 'private'
                to: string | number | string[] | number[]
                content: RequiredContent
                topic?: string | undefined
                queue_id?: string | undefined
                local_id?: string | undefined
                read_by_sender?: boolean | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              id: number
              message_url: string
              message_link: string
              automatic_new_visibility_policy?: 2 | 3 | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type: 'direct' | 'channel' | 'stream' | 'private'
                to: string | number | string[] | number[]
                content: RequiredContent
                topic?: string | undefined
                queue_id?: string | undefined
                local_id?: string | undefined
                read_by_sender?: boolean | undefined
              }
            } & {
              form: {
                type: 'direct' | 'channel' | 'stream' | 'private'
                to: string | number | string[] | number[]
                content: RequiredContent
                topic?: string | undefined
                queue_id?: string | undefined
                local_id?: string | undefined
                read_by_sender?: boolean | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                  stream?: string | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/messages/:message_id/history': {
      $get:
        | {
            input: { param: { message_id: number } } & {
              query: { allow_empty_topic_name?: boolean | undefined }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              message_history?:
                | {
                    topic?: string | undefined
                    prev_topic?: string | undefined
                    stream?: number | undefined
                    prev_stream?: number | undefined
                    content?: string | undefined
                    rendered_content?: string | undefined
                    prev_content?: string | undefined
                    prev_rendered_content?: string | undefined
                    user_id?: (number | null) | undefined
                    content_html_diff?: string | undefined
                    timestamp?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { message_id: number } } & {
              query: { allow_empty_topic_name?: boolean | undefined }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/messages/flags': {
      $post: {
        input: { json: { messages: number[]; op: 'add' | 'remove'; flag: string } } & {
          form: { messages: number[]; op: 'add' | 'remove'; flag: string }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          messages?: number[] | undefined
          ignored_because_not_subscribed_channels?: number[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages/flags/narrow': {
      $post: {
        input: {
          json: {
            anchor: {}
            include_anchor?: boolean | undefined
            num_before: number
            num_after: number
            narrow: (
              | {
                  operator: string
                  operand: string | number | number[]
                  negated?: boolean | undefined
                }
              | string[]
            )[]
            op: 'add' | 'remove'
            flag: string
          }
        } & {
          form: {
            anchor: {}
            include_anchor?: boolean | undefined
            num_before: number
            num_after: number
            narrow: (
              | {
                  operator: string
                  operand: string | number | number[]
                  negated?: boolean | undefined
                }
              | string[]
            )[]
            op: 'add' | 'remove'
            flag: string
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: IgnoredParametersUnsupported | undefined
          processed_count: number
          updated_count: number
          first_processed_id: number | null
          last_processed_id: number | null
          found_oldest: boolean
          found_newest: boolean
          ignored_because_not_subscribed_channels?: number[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages/render': {
      $post: {
        input: {
          json: { content: RequiredContent; populate_url_embed_data?: boolean | undefined }
        } & { form: { content: RequiredContent; populate_url_embed_data?: boolean | undefined } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          rendered?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages/:message_id/reactions': {
      $post:
        | {
            input: { param: { message_id: number } } & {
              json: {
                emoji_name: string
                emoji_code?: EmojiCode | undefined
                reaction_type?: ReactionType | undefined
              }
            } & {
              form: {
                emoji_name: string
                emoji_code?: EmojiCode | undefined
                reaction_type?: ReactionType | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { message_id: number } } & {
              json: {
                emoji_name: string
                emoji_code?: EmojiCode | undefined
                reaction_type?: ReactionType | undefined
              }
            } & {
              form: {
                emoji_name: string
                emoji_code?: EmojiCode | undefined
                reaction_type?: ReactionType | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { message_id: number } } & {
              json: {
                emoji_name?: string | undefined
                emoji_code?: EmojiCode | undefined
                reaction_type?: ReactionType | undefined
              }
            } & {
              form: {
                emoji_name?: string | undefined
                emoji_code?: EmojiCode | undefined
                reaction_type?: ReactionType | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { message_id: number } } & {
              json: {
                emoji_name?: string | undefined
                emoji_code?: EmojiCode | undefined
                reaction_type?: ReactionType | undefined
              }
            } & {
              form: {
                emoji_name?: string | undefined
                emoji_code?: EmojiCode | undefined
                reaction_type?: ReactionType | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/messages/:message_id/read_receipts': {
      $get:
        | {
            input: { param: { message_id: number } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              user_ids?: number[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { message_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/messages/matches_narrow': {
      $get: {
        input: { query: { msg_ids: number[]; narrow: { [x: string]: unknown }[] } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          messages?:
            | {
                [x: string]: {
                  match_content?: string | undefined
                  match_subject?: string | undefined
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages/:message_id': {
      $get:
        | {
            input: { param: { message_id: number } } & {
              query: {
                apply_markdown?: boolean | undefined
                allow_empty_topic_name?: boolean | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              raw_content?: string | undefined
              message?:
                | {
                    avatar_url?: ({ [x: string]: unknown } | null) | undefined
                    client?: { [x: string]: unknown } | undefined
                    content?: { [x: string]: unknown } | undefined
                    content_type?: { [x: string]: unknown } | undefined
                    display_recipient?: { [x: string]: unknown } | undefined
                    edit_history?: { [x: string]: unknown } | undefined
                    id?: { [x: string]: unknown } | undefined
                    is_me_message?: { [x: string]: unknown } | undefined
                    last_edit_timestamp?: { [x: string]: unknown } | undefined
                    last_moved_timestamp?: { [x: string]: unknown } | undefined
                    reactions?: { [x: string]: unknown } | undefined
                    recipient_id?: { [x: string]: unknown } | undefined
                    sender_email?: { [x: string]: unknown } | undefined
                    sender_full_name?: { [x: string]: unknown } | undefined
                    sender_id?: { [x: string]: unknown } | undefined
                    sender_realm_str?: { [x: string]: unknown } | undefined
                    stream_id?: { [x: string]: unknown } | undefined
                    subject?: { [x: string]: unknown } | undefined
                    submessages?: { [x: string]: unknown } | undefined
                    timestamp?: { [x: string]: unknown } | undefined
                    topic_links?: { [x: string]: unknown } | undefined
                    type?: { [x: string]: unknown } | undefined
                    flags?: string[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { message_id: number } } & {
              query: {
                apply_markdown?: boolean | undefined
                allow_empty_topic_name?: boolean | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { message_id: number } } & {
              json: {
                topic?: string | undefined
                propagate_mode?: 'change_one' | 'change_later' | 'change_all' | undefined
                send_notification_to_old_thread?: boolean | undefined
                send_notification_to_new_thread?: boolean | undefined
                content?: OptionalContent | undefined
                prev_content_sha256?: string | undefined
                stream_id?: number | undefined
              }
            } & {
              form: {
                topic?: string | undefined
                propagate_mode?: 'change_one' | 'change_later' | 'change_all' | undefined
                send_notification_to_old_thread?: boolean | undefined
                send_notification_to_new_thread?: boolean | undefined
                content?: OptionalContent | undefined
                prev_content_sha256?: string | undefined
                stream_id?: number | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              detached_uploads?: Attachment[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { message_id: number } } & {
              json: {
                topic?: string | undefined
                propagate_mode?: 'change_one' | 'change_later' | 'change_all' | undefined
                send_notification_to_old_thread?: boolean | undefined
                send_notification_to_new_thread?: boolean | undefined
                content?: OptionalContent | undefined
                prev_content_sha256?: string | undefined
                stream_id?: number | undefined
              }
            } & {
              form: {
                topic?: string | undefined
                propagate_mode?: 'change_one' | 'change_later' | 'change_all' | undefined
                send_notification_to_old_thread?: boolean | undefined
                send_notification_to_new_thread?: boolean | undefined
                content?: OptionalContent | undefined
                prev_content_sha256?: string | undefined
                stream_id?: number | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?:
                    | 'Your organization has turned off message editing'
                    | "You don't have permission to edit this message"
                    | 'The time limit for editing this message has past'
                    | 'Nothing to change'
                    | "Topic can't be empty"
                    | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { message_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { message_id: number } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/messages/:message_id/report': {
      $post:
        | {
            input: { param: { message_id: number } } & {
              json: { report_type: string; description?: string | undefined }
            } & { form: { report_type: string; description?: string | undefined } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { message_id: number } } & {
              json: { report_type: string; description?: string | undefined }
            } & { form: { report_type: string; description?: string | undefined } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user_uploads': {
      $post: {
        input: { form: { filename?: File | undefined } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          uri?: string | undefined
          url?: string | undefined
          filename?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/thumbnail/status/:realm_id_str/:filename': {
      $get: {
        input: { param: { realm_id_str: number; filename: string } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          has_thumbnail: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_uploads/:realm_id_str/:filename': {
      $get: {
        input: { param: { realm_id_str: number; filename: string } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $get: {
        input: {
          query: {
            client_gravatar?: boolean | undefined
            include_custom_profile_fields?: boolean | undefined
            user_ids?: number[] | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          members?: User[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { email: string; password: string; full_name: string } } & {
              form: { email: string; password: string; full_name: string }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              user_id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; password: string; full_name: string } } & {
              form: { email: string; password: string; full_name: string }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/:user_id/reactivate': {
      $post: {
        input: { param: { user_id: number } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/status': {
      $post:
        | {
            input: { param: { user_id: number } } & {
              json: {
                status_text?: string | undefined
                emoji_name?: string | undefined
                emoji_code?: string | undefined
                reaction_type?: string | undefined
              }
            } & {
              form: {
                status_text?: string | undefined
                emoji_name?: string | undefined
                emoji_code?: string | undefined
                reaction_type?: string | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              json: {
                status_text?: string | undefined
                emoji_name?: string | undefined
                emoji_code?: string | undefined
                reaction_type?: string | undefined
              }
            } & {
              form: {
                status_text?: string | undefined
                emoji_name?: string | undefined
                emoji_code?: string | undefined
                reaction_type?: string | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { user_id: number } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              status?:
                | {
                    away?: boolean | undefined
                    status_text?: string | undefined
                    emoji_name?: string | undefined
                    emoji_code?: string | undefined
                    reaction_type?:
                      | 'unicode_emoji'
                      | 'realm_emoji'
                      | 'zulip_extra_emoji'
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/:user_id_or_email/presence': {
      $get: {
        input: { param: { user_id_or_email: string } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          server_timestamp?: number | undefined
          presence?:
            | {
                active_timestamp?: number | undefined
                idle_timestamp?: number | undefined
                website: { status?: 'idle' | 'active' | undefined; timestamp?: number | undefined }
                aggregated: {
                  status?: 'idle' | 'active' | 'offline' | undefined
                  timestamp?: number | undefined
                }
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          avatar_url?: string | undefined
          avatar_version?: number | undefined
          email?: string | undefined
          full_name?: string | undefined
          is_admin?: boolean | undefined
          is_owner?: boolean | undefined
          role?: 100 | 200 | 300 | 400 | 600 | undefined
          is_guest?: boolean | undefined
          is_bot?: boolean | undefined
          is_active?: boolean | undefined
          timezone?: string | undefined
          date_joined?: string | undefined
          max_message_id?: number | undefined
          user_id?: number | undefined
          delivery_email?: string | undefined
          is_imported_stub?: boolean | undefined
          profile_data?: ProfileData | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | { input: {}; output: JsonSuccess; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              code: { [x: string]: unknown }
              entity: string
              is_last_owner: boolean
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/me/api_key/regenerate': {
      $post: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          api_key: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/alert_words': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          alert_words?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { alert_words: string[] } } & { form: { alert_words: string[] } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              alert_words?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { alert_words: string[] } } & { form: { alert_words: string[] } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $delete: {
        input: { json: { alert_words: string[] } } & { form: { alert_words: string[] } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          alert_words?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/presence': {
      $post: {
        input: {
          json: {
            last_update_id?: number | undefined
            history_limit_days?: number | undefined
            new_user_input?: boolean | undefined
            ping_only?: boolean | undefined
            slim_presence?: boolean | undefined
            status: 'idle' | 'active'
          }
        } & {
          form: {
            last_update_id?: number | undefined
            history_limit_days?: number | undefined
            new_user_input?: boolean | undefined
            ping_only?: boolean | undefined
            slim_presence?: boolean | undefined
            status: 'idle' | 'active'
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          presence_last_update_id?: number | undefined
          server_timestamp?: number | undefined
          presences?:
            | { [x: string]: ModernPresenceFormat | { [x: string]: LegacyPresenceFormat } }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/profile_data': {
      $patch:
        | {
            input: { json: { data: ProfileDataUpdate[] } } & { form: { data: ProfileDataUpdate[] } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { data: ProfileDataUpdate[] } } & { form: { data: ProfileDataUpdate[] } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { json: { data: number[] } } & { form: { data: number[] } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { data: number[] } } & { form: { data: number[] } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/me/status': {
      $post:
        | {
            input: {
              json: {
                status_text?: string | undefined
                away?: boolean | undefined
                emoji_name?: string | undefined
                emoji_code?: string | undefined
                reaction_type?: string | undefined
              }
            } & {
              form: {
                status_text?: string | undefined
                away?: boolean | undefined
                emoji_name?: string | undefined
                emoji_code?: string | undefined
                reaction_type?: string | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                status_text?: string | undefined
                away?: boolean | undefined
                emoji_name?: string | undefined
                emoji_code?: string | undefined
                reaction_type?: string | undefined
              }
            } & {
              form: {
                status_text?: string | undefined
                away?: boolean | undefined
                emoji_name?: string | undefined
                emoji_code?: string | undefined
                reaction_type?: string | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/me/:stream_id/topics': {
      $get:
        | {
            input: { param: { stream_id: number } } & {
              query: { allow_empty_topic_name?: boolean | undefined }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              topics?: { max_id?: number | undefined; name?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_id: number } } & {
              query: { allow_empty_topic_name?: boolean | undefined }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/me/subscriptions': {
      $get: {
        input: { query: { include_subscribers?: 'true' | 'false' | 'partial' | undefined } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          subscriptions: Subscription[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                subscriptions: {
                  name: string
                  description?: string | undefined
                  color?: string | undefined
                }[]
                principals?: Principals | undefined
                authorization_errors_fatal?: boolean | undefined
                announce?: boolean | undefined
                invite_only?: boolean | undefined
                is_web_public?: boolean | undefined
                is_default_stream?: boolean | undefined
                history_public_to_subscribers?: HistoryPublicToSubscribers | undefined
                message_retention_days?: MessageRetentionDays | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
                topics_policy?: TopicsPolicy | undefined
                can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
                can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
                can_administer_channel_group?: CanAdministerChannelGroup | undefined
                can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
                can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
                can_move_messages_out_of_channel_group?:
                  | CanMoveMessagesOutOfChannelGroup
                  | undefined
                can_move_messages_within_channel_group?:
                  | CanMoveMessagesWithinChannelGroup
                  | undefined
                can_send_message_group?: CanSendMessageGroup | undefined
                can_subscribe_group?: CanSubscribeGroup | undefined
                can_resolve_topics_group?: CanResolveTopicsGroup | undefined
                can_create_topic_group?: CanCreateTopicGroup | undefined
                folder_id?: number | undefined
                send_new_subscription_messages?: SendNewSubscriptionMessages | undefined
              }
            } & {
              form: {
                subscriptions: {
                  name: string
                  description?: string | undefined
                  color?: string | undefined
                }[]
                principals?: Principals | undefined
                authorization_errors_fatal?: boolean | undefined
                announce?: boolean | undefined
                invite_only?: boolean | undefined
                is_web_public?: boolean | undefined
                is_default_stream?: boolean | undefined
                history_public_to_subscribers?: HistoryPublicToSubscribers | undefined
                message_retention_days?: MessageRetentionDays | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
                topics_policy?: TopicsPolicy | undefined
                can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
                can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
                can_administer_channel_group?: CanAdministerChannelGroup | undefined
                can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
                can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
                can_move_messages_out_of_channel_group?:
                  | CanMoveMessagesOutOfChannelGroup
                  | undefined
                can_move_messages_within_channel_group?:
                  | CanMoveMessagesWithinChannelGroup
                  | undefined
                can_send_message_group?: CanSendMessageGroup | undefined
                can_subscribe_group?: CanSubscribeGroup | undefined
                can_resolve_topics_group?: CanResolveTopicsGroup | undefined
                can_create_topic_group?: CanCreateTopicGroup | undefined
                folder_id?: number | undefined
                send_new_subscription_messages?: SendNewSubscriptionMessages | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              subscribed?: { [x: string]: string[] } | undefined
              already_subscribed?: { [x: string]: string[] } | undefined
              unauthorized?: string[] | undefined
              new_subscription_messages_sent?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                subscriptions: {
                  name: string
                  description?: string | undefined
                  color?: string | undefined
                }[]
                principals?: Principals | undefined
                authorization_errors_fatal?: boolean | undefined
                announce?: boolean | undefined
                invite_only?: boolean | undefined
                is_web_public?: boolean | undefined
                is_default_stream?: boolean | undefined
                history_public_to_subscribers?: HistoryPublicToSubscribers | undefined
                message_retention_days?: MessageRetentionDays | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
                topics_policy?: TopicsPolicy | undefined
                can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
                can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
                can_administer_channel_group?: CanAdministerChannelGroup | undefined
                can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
                can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
                can_move_messages_out_of_channel_group?:
                  | CanMoveMessagesOutOfChannelGroup
                  | undefined
                can_move_messages_within_channel_group?:
                  | CanMoveMessagesWithinChannelGroup
                  | undefined
                can_send_message_group?: CanSendMessageGroup | undefined
                can_subscribe_group?: CanSubscribeGroup | undefined
                can_resolve_topics_group?: CanResolveTopicsGroup | undefined
                can_create_topic_group?: CanCreateTopicGroup | undefined
                folder_id?: number | undefined
                send_new_subscription_messages?: SendNewSubscriptionMessages | undefined
              }
            } & {
              form: {
                subscriptions: {
                  name: string
                  description?: string | undefined
                  color?: string | undefined
                }[]
                principals?: Principals | undefined
                authorization_errors_fatal?: boolean | undefined
                announce?: boolean | undefined
                invite_only?: boolean | undefined
                is_web_public?: boolean | undefined
                is_default_stream?: boolean | undefined
                history_public_to_subscribers?: HistoryPublicToSubscribers | undefined
                message_retention_days?: MessageRetentionDays | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
                topics_policy?: TopicsPolicy | undefined
                can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
                can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
                can_administer_channel_group?: CanAdministerChannelGroup | undefined
                can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
                can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
                can_move_messages_out_of_channel_group?:
                  | CanMoveMessagesOutOfChannelGroup
                  | undefined
                can_move_messages_within_channel_group?:
                  | CanMoveMessagesWithinChannelGroup
                  | undefined
                can_send_message_group?: CanSendMessageGroup | undefined
                can_subscribe_group?: CanSubscribeGroup | undefined
                can_resolve_topics_group?: CanResolveTopicsGroup | undefined
                can_create_topic_group?: CanCreateTopicGroup | undefined
                folder_id?: number | undefined
                send_new_subscription_messages?: SendNewSubscriptionMessages | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {
              json: {
                subscriptions: string[]
                principals?: Principals | undefined
                send_messages_to_removed_subscribers?: boolean | undefined
              }
            } & {
              form: {
                subscriptions: string[]
                principals?: Principals | undefined
                send_messages_to_removed_subscribers?: boolean | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              not_removed?: string[] | undefined
              removed?: string[] | undefined
              messages_sent_to_removed_subscribers?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                subscriptions: string[]
                principals?: Principals | undefined
                send_messages_to_removed_subscribers?: boolean | undefined
              }
            } & {
              form: {
                subscriptions: string[]
                principals?: Principals | undefined
                send_messages_to_removed_subscribers?: boolean | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
              stream?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/me/subscriptions/muted_topics': {
      $patch: {
        input: {
          json: {
            stream_id?: number | undefined
            stream?: string | undefined
            topic: string
            op: 'add' | 'remove'
          }
        } & {
          form: {
            stream_id?: number | undefined
            stream?: string | undefined
            topic: string
            op: 'add' | 'remove'
          }
        }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mobile_push/test_notification': {
      $post:
        | {
            input: { json: { token?: string | undefined } } & {
              form: { token?: string | undefined }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: string | undefined } } & {
              form: { token?: string | undefined }
            }
            output: InvalidPushDeviceTokenError | InvalidRemotePushDeviceTokenError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/mobile_push/e2ee/test_notification': {
      $post:
        | {
            input: { json: { device_id?: number | undefined } } & {
              form: { device_id?: number | undefined }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { device_id?: number | undefined } } & {
              form: { device_id?: number | undefined }
            }
            output: NoActivePushDeviceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { device_id?: number | undefined } } & {
              form: { device_id?: number | undefined }
            }
            output: PushNotificationAdminActionRequiredError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { device_id?: number | undefined } } & {
              form: { device_id?: number | undefined }
            }
            output: FailedToConnectBouncerError | InternalBouncerServerError
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/mobile_push/register': {
      $post:
        | {
            input: {
              json: {
                device_id: number
                push_key_id?: number | undefined
                push_key?: string | undefined
                token_kind?: 'fcm' | 'apns' | undefined
                token_id?: string | undefined
                bouncer_public_key?: string | undefined
                encrypted_push_registration?: string | undefined
              }
            } & {
              form: {
                device_id: number
                push_key_id?: number | undefined
                push_key?: string | undefined
                token_kind?: 'fcm' | 'apns' | undefined
                token_id?: string | undefined
                bouncer_public_key?: string | undefined
                encrypted_push_registration?: string | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                device_id: number
                push_key_id?: number | undefined
                push_key?: string | undefined
                token_kind?: 'fcm' | 'apns' | undefined
                token_id?: string | undefined
                bouncer_public_key?: string | undefined
                encrypted_push_registration?: string | undefined
              }
            } & {
              form: {
                device_id: number
                push_key_id?: number | undefined
                push_key?: string | undefined
                token_kind?: 'fcm' | 'apns' | undefined
                token_id?: string | undefined
                bouncer_public_key?: string | undefined
                encrypted_push_registration?: string | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/remotes/push/e2ee/register': {
      $post:
        | {
            input: {
              json: {
                realm_uuid: string
                token_id: string
                encrypted_push_registration: string
                bouncer_public_key: string
              }
            } & {
              form: {
                realm_uuid: string
                token_id: string
                encrypted_push_registration: string
                bouncer_public_key: string
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                realm_uuid: string
                token_id: string
                encrypted_push_registration: string
                bouncer_public_key: string
              }
            } & {
              form: {
                realm_uuid: string
                token_id: string
                encrypted_push_registration: string
                bouncer_public_key: string
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                realm_uuid: string
                token_id: string
                encrypted_push_registration: string
                bouncer_public_key: string
              }
            } & {
              form: {
                realm_uuid: string
                token_id: string
                encrypted_push_registration: string
                bouncer_public_key: string
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/register_client_device': {
      $post: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          device_id: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/remove_client_device': {
      $post: {
        input: { json: { device_id: number } } & { form: { device_id: number } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_topics': {
      $post: {
        input: { json: { stream_id: number; topic: string; visibility_policy: 0 | 1 | 2 | 3 } } & {
          form: { stream_id: number; topic: string; visibility_policy: 0 | 1 | 2 | 3 }
        }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/muted_users/:muted_user_id': {
      $post:
        | {
            input: { param: { muted_user_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { muted_user_id: number } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { muted_user_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { muted_user_id: number } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/me/apns_device_token': {
      $post:
        | {
            input: { json: { token: string; appid: string } } & {
              form: { token: string; appid: string }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string; appid: string } } & {
              form: { token: string; appid: string }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/me/android_gcm_reg_id': {
      $post:
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/:user_id/subscriptions/:stream_id': {
      $get: {
        input: { param: { user_id: number; stream_id: number } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          is_subscribed?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/channels': {
      $get: {
        input: { param: { user_id: number } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          subscribed_channel_ids?: number[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/emoji/:emoji_name': {
      $post: {
        input: { param: { emoji_name: string } } & { form: { filename?: File | undefined } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { emoji_name: string } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emoji_name: string } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/realm/emoji': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          emoji?: { [x: string]: RealmEmoji } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/presence': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          server_timestamp?: number | undefined
          presences?: { [x: string]: { [x: string]: LegacyPresenceFormat } } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/domains': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          domains?: RealmDomain[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { domain: string; allow_subdomains: boolean } } & {
          form: { domain: string; allow_subdomains: boolean }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          new_domain?: (number | string)[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/domains/:domain': {
      $patch: {
        input: { param: { domain: string } } & { json: { allow_subdomains: boolean } } & {
          form: { allow_subdomains: boolean }
        }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { domain: string } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/deactivate': {
      $post:
        | {
            input: { json: { deletion_delay_days?: (number | null) | undefined } } & {
              form: { deletion_delay_days?: (number | null) | undefined }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { deletion_delay_days?: (number | null) | undefined } } & {
              form: { deletion_delay_days?: (number | null) | undefined }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/realm/profile_fields': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          custom_fields?: CustomProfileField[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: { order: number[] } } & { form: { order: number[] } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            name?: string | undefined
            field_type: number
            hint?: CustomProfileFieldHintSchema | undefined
            field_data?: CustomProfileFieldDataSchema | undefined
            display_in_profile_summary?: CustomProfileFieldDisplayInProfileSummarySchema | undefined
            required?: CustomProfileFieldRequiredSchema | undefined
            editable_by_user?: CustomProfileFieldEditableByUserSchema | undefined
            use_for_user_matching?: CustomProfileFieldUseForUserMatchingSchema | undefined
          }
        } & {
          form: {
            name?: string | undefined
            field_type: number
            hint?: CustomProfileFieldHintSchema | undefined
            field_data?: CustomProfileFieldDataSchema | undefined
            display_in_profile_summary?: CustomProfileFieldDisplayInProfileSummarySchema | undefined
            required?: CustomProfileFieldRequiredSchema | undefined
            editable_by_user?: CustomProfileFieldEditableByUserSchema | undefined
            use_for_user_matching?: CustomProfileFieldUseForUserMatchingSchema | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/profile_fields/:field_id': {
      $patch:
        | {
            input: { param: { field_id: number } } & {
              json: {
                name?: string | undefined
                hint?: CustomProfileFieldHintSchema | undefined
                field_data?: CustomProfileFieldDataSchema | undefined
                display_in_profile_summary?:
                  | CustomProfileFieldDisplayInProfileSummarySchema
                  | undefined
                required?: CustomProfileFieldRequiredSchema | undefined
                editable_by_user?: CustomProfileFieldEditableByUserSchema | undefined
                use_for_user_matching?: CustomProfileFieldUseForUserMatchingSchema | undefined
              }
            } & {
              form: {
                name?: string | undefined
                hint?: CustomProfileFieldHintSchema | undefined
                field_data?: CustomProfileFieldDataSchema | undefined
                display_in_profile_summary?:
                  | CustomProfileFieldDisplayInProfileSummarySchema
                  | undefined
                required?: CustomProfileFieldRequiredSchema | undefined
                editable_by_user?: CustomProfileFieldEditableByUserSchema | undefined
                use_for_user_matching?: CustomProfileFieldUseForUserMatchingSchema | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { field_id: number } } & {
              json: {
                name?: string | undefined
                hint?: CustomProfileFieldHintSchema | undefined
                field_data?: CustomProfileFieldDataSchema | undefined
                display_in_profile_summary?:
                  | CustomProfileFieldDisplayInProfileSummarySchema
                  | undefined
                required?: CustomProfileFieldRequiredSchema | undefined
                editable_by_user?: CustomProfileFieldEditableByUserSchema | undefined
                use_for_user_matching?: CustomProfileFieldUseForUserMatchingSchema | undefined
              }
            } & {
              form: {
                name?: string | undefined
                hint?: CustomProfileFieldHintSchema | undefined
                field_data?: CustomProfileFieldDataSchema | undefined
                display_in_profile_summary?:
                  | CustomProfileFieldDisplayInProfileSummarySchema
                  | undefined
                required?: CustomProfileFieldRequiredSchema | undefined
                editable_by_user?: CustomProfileFieldEditableByUserSchema | undefined
                use_for_user_matching?: CustomProfileFieldUseForUserMatchingSchema | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { field_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { field_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/realm/user_settings_defaults': {
      $patch: {
        input: {
          json: {
            starred_message_counts?: boolean | undefined
            receives_typing_notifications?: boolean | undefined
            web_suggest_update_timezone?: boolean | undefined
            fluid_layout_width?: boolean | undefined
            high_contrast_mode?: boolean | undefined
            web_mark_read_on_scroll_policy?: 1 | 2 | 3 | undefined
            web_channel_default_view?: 1 | 2 | 3 | 4 | undefined
            web_font_size_px?: number | undefined
            web_line_height_percent?: number | undefined
            color_scheme?: 1 | 2 | 3 | undefined
            enable_drafts_synchronization?: boolean | undefined
            translate_emoticons?: boolean | undefined
            display_emoji_reaction_users?: boolean | undefined
            web_home_view?: string | undefined
            web_escape_navigates_to_home_view?: boolean | undefined
            left_side_userlist?: boolean | undefined
            emojiset?: string | undefined
            demote_inactive_streams?: 1 | 2 | 3 | undefined
            user_list_style?: 1 | 2 | 3 | undefined
            web_animate_image_previews?: 'always' | 'on_hover' | 'never' | undefined
            web_stream_unreads_count_display_policy?: 1 | 2 | 3 | undefined
            hide_ai_features?: boolean | undefined
            web_inbox_show_channel_folders?: boolean | undefined
            web_left_sidebar_topics_order?: 1 | 2 | undefined
            web_left_sidebar_show_channel_folders?: boolean | undefined
            web_left_sidebar_unreads_count_summary?: boolean | undefined
            enable_stream_desktop_notifications?: boolean | undefined
            enable_stream_email_notifications?: boolean | undefined
            enable_stream_push_notifications?: boolean | undefined
            enable_stream_audible_notifications?: boolean | undefined
            notification_sound?: string | undefined
            enable_desktop_notifications?: boolean | undefined
            enable_sounds?: boolean | undefined
            enable_followed_topic_desktop_notifications?: boolean | undefined
            enable_followed_topic_email_notifications?: boolean | undefined
            enable_followed_topic_push_notifications?: boolean | undefined
            enable_followed_topic_audible_notifications?: boolean | undefined
            email_notifications_batching_period_seconds?: number | undefined
            enable_offline_email_notifications?: boolean | undefined
            enable_offline_push_notifications?: boolean | undefined
            enable_online_push_notifications?: boolean | undefined
            enable_digest_emails?: boolean | undefined
            message_content_in_email_notifications?: boolean | undefined
            pm_content_in_desktop_notifications?: boolean | undefined
            wildcard_mentions_notify?: boolean | undefined
            enable_followed_topic_wildcard_mentions_notify?: boolean | undefined
            desktop_icon_count_display?: 1 | 2 | 3 | 4 | undefined
            realm_name_in_email_notifications_policy?: 1 | 2 | 3 | undefined
            automatically_follow_topics_policy?: 1 | 2 | 3 | 4 | undefined
            automatically_unmute_topics_in_muted_streams_policy?: 1 | 2 | 3 | 4 | undefined
            automatically_follow_topics_where_mentioned?: boolean | undefined
            resolved_topic_notice_auto_read_policy?:
              | 'always'
              | 'except_followed'
              | 'never'
              | undefined
            presence_enabled?: boolean | undefined
            enter_sends?: boolean | undefined
            twenty_four_hour_time?: boolean | undefined
            send_private_typing_notifications?: boolean | undefined
            send_stream_typing_notifications?: boolean | undefined
            send_read_receipts?: boolean | undefined
            email_address_visibility?: 1 | 2 | 3 | 4 | 5 | undefined
            web_navigate_to_sent_message?: boolean | undefined
            web_right_click_opens_message_actions_menu?: boolean | undefined
          }
        } & {
          form: {
            starred_message_counts?: boolean | undefined
            receives_typing_notifications?: boolean | undefined
            web_suggest_update_timezone?: boolean | undefined
            fluid_layout_width?: boolean | undefined
            high_contrast_mode?: boolean | undefined
            web_mark_read_on_scroll_policy?: 1 | 2 | 3 | undefined
            web_channel_default_view?: 1 | 2 | 3 | 4 | undefined
            web_font_size_px?: number | undefined
            web_line_height_percent?: number | undefined
            color_scheme?: 1 | 2 | 3 | undefined
            enable_drafts_synchronization?: boolean | undefined
            translate_emoticons?: boolean | undefined
            display_emoji_reaction_users?: boolean | undefined
            web_home_view?: string | undefined
            web_escape_navigates_to_home_view?: boolean | undefined
            left_side_userlist?: boolean | undefined
            emojiset?: string | undefined
            demote_inactive_streams?: 1 | 2 | 3 | undefined
            user_list_style?: 1 | 2 | 3 | undefined
            web_animate_image_previews?: 'always' | 'on_hover' | 'never' | undefined
            web_stream_unreads_count_display_policy?: 1 | 2 | 3 | undefined
            hide_ai_features?: boolean | undefined
            web_inbox_show_channel_folders?: boolean | undefined
            web_left_sidebar_topics_order?: 1 | 2 | undefined
            web_left_sidebar_show_channel_folders?: boolean | undefined
            web_left_sidebar_unreads_count_summary?: boolean | undefined
            enable_stream_desktop_notifications?: boolean | undefined
            enable_stream_email_notifications?: boolean | undefined
            enable_stream_push_notifications?: boolean | undefined
            enable_stream_audible_notifications?: boolean | undefined
            notification_sound?: string | undefined
            enable_desktop_notifications?: boolean | undefined
            enable_sounds?: boolean | undefined
            enable_followed_topic_desktop_notifications?: boolean | undefined
            enable_followed_topic_email_notifications?: boolean | undefined
            enable_followed_topic_push_notifications?: boolean | undefined
            enable_followed_topic_audible_notifications?: boolean | undefined
            email_notifications_batching_period_seconds?: number | undefined
            enable_offline_email_notifications?: boolean | undefined
            enable_offline_push_notifications?: boolean | undefined
            enable_online_push_notifications?: boolean | undefined
            enable_digest_emails?: boolean | undefined
            message_content_in_email_notifications?: boolean | undefined
            pm_content_in_desktop_notifications?: boolean | undefined
            wildcard_mentions_notify?: boolean | undefined
            enable_followed_topic_wildcard_mentions_notify?: boolean | undefined
            desktop_icon_count_display?: 1 | 2 | 3 | 4 | undefined
            realm_name_in_email_notifications_policy?: 1 | 2 | 3 | undefined
            automatically_follow_topics_policy?: 1 | 2 | 3 | 4 | undefined
            automatically_unmute_topics_in_muted_streams_policy?: 1 | 2 | 3 | 4 | undefined
            automatically_follow_topics_where_mentioned?: boolean | undefined
            resolved_topic_notice_auto_read_policy?:
              | 'always'
              | 'except_followed'
              | 'never'
              | undefined
            presence_enabled?: boolean | undefined
            enter_sends?: boolean | undefined
            twenty_four_hour_time?: boolean | undefined
            send_private_typing_notifications?: boolean | undefined
            send_stream_typing_notifications?: boolean | undefined
            send_read_receipts?: boolean | undefined
            email_address_visibility?: 1 | 2 | 3 | 4 | 5 | undefined
            web_navigate_to_sent_message?: boolean | undefined
            web_right_click_opens_message_actions_menu?: boolean | undefined
          }
        }
        output: {
          result?: { [x: string]: unknown } | undefined
          msg?: { [x: string]: unknown } | undefined
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/avatar': {
      $post:
        | {
            input: { form: { file: File } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: IgnoredParametersUnsupported | undefined
              avatar_url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file: File } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: {}
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: IgnoredParametersUnsupported | undefined
              avatar_url?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/me/subscriptions/properties': {
      $post: {
        input: {
          json: {
            subscription_data: {
              stream_id: number
              property: SubscriptionProperty
              value: SubscriptionPropertyValue
            }[]
          }
        } & {
          form: {
            subscription_data: {
              stream_id: number
              property: SubscriptionProperty
              value: SubscriptionPropertyValue
            }[]
          }
        }
        output: {
          result?: { [x: string]: unknown } | undefined
          msg?: { [x: string]: unknown } | undefined
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/subscriptions/:stream_id': {
      $patch: {
        input: { param: { stream_id: number } } & {
          json: { property: SubscriptionProperty; value: SubscriptionPropertyValue }
        } & { form: { property: SubscriptionProperty; value: SubscriptionPropertyValue } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:email': {
      $get: {
        input: { param: { email: string } } & {
          query: {
            client_gravatar?: boolean | undefined
            include_custom_profile_fields?: boolean | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          user?: User | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { email: string } } & {
              json: {
                full_name?: string | undefined
                role?: number | undefined
                profile_data?: ProfileDataUpdate[] | undefined
                new_email?: string | undefined
              }
            } & {
              form: {
                full_name?: string | undefined
                role?: number | undefined
                profile_data?: ProfileDataUpdate[] | undefined
                new_email?: string | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email: string } } & {
              json: {
                full_name?: string | undefined
                role?: number | undefined
                profile_data?: ProfileDataUpdate[] | undefined
                new_email?: string | undefined
              }
            } & {
              form: {
                full_name?: string | undefined
                role?: number | undefined
                profile_data?: ProfileDataUpdate[] | undefined
                new_email?: string | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/users/:user_id': {
      $get: {
        input: { param: { user_id: number } } & {
          query: {
            client_gravatar?: boolean | undefined
            include_custom_profile_fields?: boolean | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          user?: User | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { user_id: number } } & {
              json: {
                full_name?: string | undefined
                role?: number | undefined
                profile_data?: ProfileDataUpdate[] | undefined
                new_email?: string | undefined
              }
            } & {
              form: {
                full_name?: string | undefined
                role?: number | undefined
                profile_data?: ProfileDataUpdate[] | undefined
                new_email?: string | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              json: {
                full_name?: string | undefined
                role?: number | undefined
                profile_data?: ProfileDataUpdate[] | undefined
                new_email?: string | undefined
              }
            } & {
              form: {
                full_name?: string | undefined
                role?: number | undefined
                profile_data?: ProfileDataUpdate[] | undefined
                new_email?: string | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { user_id: number } } & {
              query: {
                actions?:
                  | {
                      delete_profile?: boolean | undefined
                      delete_public_channel_messages?: boolean | undefined
                      delete_private_channel_messages?: boolean | undefined
                      delete_direct_messages?: boolean | undefined
                    }
                  | undefined
              }
            } & { json: { deactivation_notification_comment?: string | undefined } } & {
              form: { deactivation_notification_comment?: string | undefined }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                actions?:
                  | {
                      delete_profile?: boolean | undefined
                      delete_public_channel_messages?: boolean | undefined
                      delete_private_channel_messages?: boolean | undefined
                      delete_direct_messages?: boolean | undefined
                    }
                  | undefined
              }
            } & { json: { deactivation_notification_comment?: string | undefined } } & {
              form: { deactivation_notification_comment?: string | undefined }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/realm/linkifiers': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          linkifiers?:
            | {
                pattern?: string | undefined
                url_template?: string | undefined
                id?: number | undefined
                example_input?: (string | null) | undefined
                reverse_template?: (string | null) | undefined
                alternative_url_templates?: string[] | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: { ordered_linkifier_ids: number[] } } & {
          form: { ordered_linkifier_ids: number[] }
        }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/filters': {
      $post: {
        input: {
          json: {
            pattern: LinkifierPattern
            url_template: LinkifierURLTemplate
            example_input?: (string | null) | undefined
            reverse_template?: (string | null) | undefined
            alternative_url_templates?: string[] | undefined
          }
        } & {
          form: {
            pattern: LinkifierPattern
            url_template: LinkifierURLTemplate
            example_input?: (string | null) | undefined
            reverse_template?: (string | null) | undefined
            alternative_url_templates?: string[] | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/filters/:filter_id': {
      $delete: {
        input: { param: { filter_id: number } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { filter_id: number } } & {
          json: {
            pattern: LinkifierPattern
            url_template: LinkifierURLTemplate
            example_input?: (string | null) | undefined
            reverse_template?: (string | null) | undefined
            alternative_url_templates?: string[] | undefined
          }
        } & {
          form: {
            pattern: LinkifierPattern
            url_template: LinkifierURLTemplate
            example_input?: (string | null) | undefined
            reverse_template?: (string | null) | undefined
            alternative_url_templates?: string[] | undefined
          }
        }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/playgrounds': {
      $post: {
        input: { json: { name: string; pygments_language: string; url_template: string } } & {
          form: { name: string; pygments_language: string; url_template: string }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realm/playgrounds/:playground_id': {
      $delete: {
        input: { param: { playground_id: number } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/export/realm/:export_id': {
      $delete:
        | {
            input: { param: { export_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { export_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/export/realm': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          exports?: RealmExport[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                export_type?: 'public' | 'full_with_consent' | 'full_without_consent' | undefined
              }
            } & {
              form: {
                export_type?: 'public' | 'full_with_consent' | 'full_without_consent' | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                export_type?: 'public' | 'full_with_consent' | 'full_without_consent' | undefined
              }
            } & {
              form: {
                export_type?: 'public' | 'full_with_consent' | 'full_without_consent' | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/export/realm/consents': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          export_consents?:
            | {
                user_id?: number | undefined
                consented?: boolean | undefined
                email_address_visibility?: EmailAddressVisibility | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invites': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          invites?: Invite[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                invitee_emails: string
                invite_expires_in_minutes?: InviteExpirationParameter | undefined
                invite_as?: InviteRoleParameter | undefined
                stream_ids: number[]
                group_ids?: number[] | undefined
                include_realm_default_subscriptions?: boolean | undefined
                notify_referrer_on_join?: boolean | undefined
                welcome_message_custom_text?: (string | null) | undefined
              }
            } & {
              form: {
                invitee_emails: string
                invite_expires_in_minutes?: InviteExpirationParameter | undefined
                invite_as?: InviteRoleParameter | undefined
                stream_ids: number[]
                group_ids?: number[] | undefined
                include_realm_default_subscriptions?: boolean | undefined
                notify_referrer_on_join?: boolean | undefined
                welcome_message_custom_text?: (string | null) | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                invitee_emails: string
                invite_expires_in_minutes?: InviteExpirationParameter | undefined
                invite_as?: InviteRoleParameter | undefined
                stream_ids: number[]
                group_ids?: number[] | undefined
                include_realm_default_subscriptions?: boolean | undefined
                notify_referrer_on_join?: boolean | undefined
                welcome_message_custom_text?: (string | null) | undefined
              }
            } & {
              form: {
                invitee_emails: string
                invite_expires_in_minutes?: InviteExpirationParameter | undefined
                invite_as?: InviteRoleParameter | undefined
                stream_ids: number[]
                group_ids?: number[] | undefined
                include_realm_default_subscriptions?: boolean | undefined
                notify_referrer_on_join?: boolean | undefined
                welcome_message_custom_text?: (string | null) | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                  errors?: (string | boolean)[][] | undefined
                  sent_invitations?: boolean | undefined
                  daily_limit_reached?: boolean | undefined
                  license_limit_reached?: boolean | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/multiuse': {
      $post:
        | {
            input: {
              json: {
                invite_expires_in_minutes?: InviteExpirationParameter | undefined
                invite_as?: InviteRoleParameter | undefined
                stream_ids?: number[] | undefined
                group_ids?: number[] | undefined
                include_realm_default_subscriptions?: boolean | undefined
                welcome_message_custom_text?: (string | null) | undefined
              }
            } & {
              form: {
                invite_expires_in_minutes?: InviteExpirationParameter | undefined
                invite_as?: InviteRoleParameter | undefined
                stream_ids?: number[] | undefined
                group_ids?: number[] | undefined
                include_realm_default_subscriptions?: boolean | undefined
                welcome_message_custom_text?: (string | null) | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              invite_link?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                invite_expires_in_minutes?: InviteExpirationParameter | undefined
                invite_as?: InviteRoleParameter | undefined
                stream_ids?: number[] | undefined
                group_ids?: number[] | undefined
                include_realm_default_subscriptions?: boolean | undefined
                welcome_message_custom_text?: (string | null) | undefined
              }
            } & {
              form: {
                invite_expires_in_minutes?: InviteExpirationParameter | undefined
                invite_as?: InviteRoleParameter | undefined
                stream_ids?: number[] | undefined
                group_ids?: number[] | undefined
                include_realm_default_subscriptions?: boolean | undefined
                welcome_message_custom_text?: (string | null) | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:invite_id': {
      $delete:
        | {
            input: { param: { invite_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invite_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/multiuse/:invite_id': {
      $delete:
        | {
            input: { param: { invite_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invite_id: number } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/invites/:invite_id/resend': {
      $post:
        | {
            input: { param: { invite_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invite_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/realm/test_welcome_bot_custom_message': {
      $post: {
        input: { json: { welcome_message_custom_text: string } } & {
          form: { welcome_message_custom_text: string }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          message_id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/register': {
      $post: {
        input: {
          json: {
            apply_markdown?: boolean | undefined
            client_gravatar?: boolean | undefined
            include_subscribers?: 'true' | 'false' | 'partial' | undefined
            slim_presence?: boolean | undefined
            presence_history_limit_days?: number | undefined
            event_types?: EventTypes | undefined
            all_public_streams?: AllPublicChannels | undefined
            client_capabilities?: { [x: string]: unknown } | undefined
            fetch_event_types?: string[] | undefined
            narrow?: Narrow | undefined
            idle_queue_timeout?: number | 'mobile' | undefined
          }
        } & {
          form: {
            apply_markdown?: boolean | undefined
            client_gravatar?: boolean | undefined
            include_subscribers?: 'true' | 'false' | 'partial' | undefined
            slim_presence?: boolean | undefined
            presence_history_limit_days?: number | undefined
            event_types?: EventTypes | undefined
            all_public_streams?: AllPublicChannels | undefined
            client_capabilities?: { [x: string]: unknown } | undefined
            fetch_event_types?: string[] | undefined
            narrow?: Narrow | undefined
            idle_queue_timeout?: number | 'mobile' | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          queue_id?: (string | null) | undefined
          idle_queue_timeout_secs?: number | undefined
          last_event_id?: number | undefined
          zulip_feature_level?: number | undefined
          zulip_version?: string | undefined
          zulip_merge_base?: string | undefined
          alert_words?: string[] | undefined
          custom_profile_fields?: CustomProfileField[] | undefined
          custom_profile_field_types?:
            | { [x: string]: { id?: number | undefined; name?: string | undefined } }
            | undefined
          realm_date_created?: number | undefined
          demo_organization_scheduled_deletion_date?: number | undefined
          drafts?: Draft[] | undefined
          onboarding_steps?: OnboardingStep[] | undefined
          navigation_tour_video_url?: (string | null) | undefined
          max_message_id?: number | undefined
          max_reminder_note_length?: number | undefined
          max_stream_name_length?: number | undefined
          max_stream_description_length?: number | undefined
          max_channel_folder_name_length?: number | undefined
          max_channel_folder_description_length?: number | undefined
          max_topic_length?: number | undefined
          max_message_length?: number | undefined
          server_min_deactivated_realm_deletion_days?: (number | null) | undefined
          server_max_deactivated_realm_deletion_days?: (number | null) | undefined
          server_presence_ping_interval_seconds?: number | undefined
          server_presence_offline_threshold_seconds?: number | undefined
          server_typing_started_expiry_period_milliseconds?: number | undefined
          server_typing_stopped_wait_period_milliseconds?: number | undefined
          server_typing_started_wait_period_milliseconds?: number | undefined
          scheduled_messages?: ScheduledMessage[] | undefined
          reminders?: Reminder[] | undefined
          muted_topics?: (string | number)[][] | undefined
          muted_users?: { id?: number | undefined; timestamp?: number | undefined }[] | undefined
          presences?:
            | { [x: string]: ModernPresenceFormat | { [x: string]: LegacyPresenceFormat } }
            | undefined
          presence_last_update_id?: number | undefined
          server_timestamp?: number | undefined
          realm_domains?: RealmDomain[] | undefined
          realm_emoji?: { [x: string]: RealmEmoji } | undefined
          realm_linkifiers?:
            | {
                pattern?: string | undefined
                url_template?: string | undefined
                id?: number | undefined
              }[]
            | undefined
          realm_filters?: (number | string)[][] | undefined
          realm_playgrounds?: RealmPlayground[] | undefined
          realm_user_groups?: UserGroup[] | undefined
          realm_bots?: Bot[] | undefined
          realm_embedded_bots?:
            | { name?: string | undefined; config?: BotConfiguration | undefined }[]
            | undefined
          realm_incoming_webhook_bots?:
            | {
                name?: string | undefined
                display_name?: string | undefined
                all_event_types?: (string[] | null) | undefined
                config_options?: WebhookConfigOption | undefined
                url_options?: WebhookUrlOption | undefined
              }[]
            | undefined
          recent_private_conversations?:
            | { max_message_id?: number | undefined; user_ids?: number[] | undefined }[]
            | undefined
          navigation_views?: NavigationView[] | undefined
          saved_snippets?: SavedSnippet[] | undefined
          subscriptions?: Subscription[] | undefined
          unsubscribed?: Subscription[] | undefined
          never_subscribed?:
            | {
                stream_id?: { [x: string]: unknown } | undefined
                name?: { [x: string]: unknown } | undefined
                is_archived?: { [x: string]: unknown } | undefined
                description?: { [x: string]: unknown } | undefined
                date_created?: { [x: string]: unknown } | undefined
                creator_id?: ({ [x: string]: unknown } | null) | undefined
                invite_only?: { [x: string]: unknown } | undefined
                rendered_description?: { [x: string]: unknown } | undefined
                is_web_public?: { [x: string]: unknown } | undefined
                stream_post_policy?: { [x: string]: unknown } | undefined
                message_retention_days?: ({ [x: string]: unknown } | null) | undefined
                default_push_notifications?: { [x: string]: unknown } | undefined
                history_public_to_subscribers?: { [x: string]: unknown } | undefined
                topics_policy?: { [x: string]: unknown } | undefined
                first_message_id?: ({ [x: string]: unknown } | null) | undefined
                folder_id?: ({ [x: string]: unknown } | null) | undefined
                is_recently_active?: { [x: string]: unknown } | undefined
                is_announcement_only?: { [x: string]: unknown } | undefined
                can_add_subscribers_group?: { [x: string]: unknown } | undefined
                can_remove_subscribers_group?: { [x: string]: unknown } | undefined
                can_administer_channel_group?: { [x: string]: unknown } | undefined
                can_delete_any_message_group?: { [x: string]: unknown } | undefined
                can_delete_own_message_group?: { [x: string]: unknown } | undefined
                can_move_messages_out_of_channel_group?: { [x: string]: unknown } | undefined
                can_move_messages_within_channel_group?: { [x: string]: unknown } | undefined
                can_send_message_group?: { [x: string]: unknown } | undefined
                can_subscribe_group?: { [x: string]: unknown } | undefined
                can_resolve_topics_group?: { [x: string]: unknown } | undefined
                can_create_topic_group?: { [x: string]: unknown } | undefined
                subscriber_count?: { [x: string]: unknown } | undefined
                stream_weekly_traffic?: (number | null) | undefined
                subscribers?: number[] | undefined
                partial_subscribers?: number[] | undefined
              }[]
            | undefined
          channel_folders?: ChannelFolder[] | undefined
          unread_msgs?:
            | {
                count?: number | undefined
                pms?:
                  | {
                      other_user_id?: number | undefined
                      sender_id?: number | undefined
                      unread_message_ids?: number[] | undefined
                    }[]
                  | undefined
                streams?:
                  | {
                      topic?: string | undefined
                      stream_id?: number | undefined
                      unread_message_ids?: number[] | undefined
                    }[]
                  | undefined
                huddles?:
                  | {
                      user_ids_string?: string | undefined
                      unread_message_ids?: number[] | undefined
                    }[]
                  | undefined
                mentions?: number[] | undefined
                old_unreads_missing?: boolean | undefined
              }
            | undefined
          starred_messages?: number[] | undefined
          streams?: BasicChannel[] | undefined
          realm_default_streams?: number[] | undefined
          realm_default_stream_groups?: DefaultChannelGroup[] | undefined
          stop_words?: string[] | undefined
          user_status?:
            | {
                [x: string]: {
                  away?: boolean | undefined
                  status_text?: string | undefined
                  emoji_name?: string | undefined
                  emoji_code?: string | undefined
                  reaction_type?: 'unicode_emoji' | 'realm_emoji' | 'zulip_extra_emoji' | undefined
                }
              }
            | undefined
          user_settings?:
            | {
                twenty_four_hour_time?: (boolean | null) | undefined
                web_mark_read_on_scroll_policy?: number | undefined
                web_channel_default_view?: number | undefined
                starred_message_counts?: boolean | undefined
                receives_typing_notifications?: boolean | undefined
                web_suggest_update_timezone?: boolean | undefined
                fluid_layout_width?: boolean | undefined
                high_contrast_mode?: boolean | undefined
                web_font_size_px?: number | undefined
                web_line_height_percent?: number | undefined
                color_scheme?: number | undefined
                translate_emoticons?: boolean | undefined
                display_emoji_reaction_users?: boolean | undefined
                default_language?: string | undefined
                web_home_view?: string | undefined
                web_escape_navigates_to_home_view?: boolean | undefined
                left_side_userlist?: boolean | undefined
                emojiset?: string | undefined
                demote_inactive_streams?: number | undefined
                user_list_style?: number | undefined
                web_animate_image_previews?: string | undefined
                web_stream_unreads_count_display_policy?: number | undefined
                hide_ai_features?: boolean | undefined
                web_inbox_show_channel_folders?: boolean | undefined
                web_left_sidebar_topics_order?: number | undefined
                web_left_sidebar_show_channel_folders?: boolean | undefined
                web_left_sidebar_unreads_count_summary?: boolean | undefined
                timezone?: string | undefined
                enter_sends?: boolean | undefined
                enable_drafts_synchronization?: boolean | undefined
                enable_stream_desktop_notifications?: boolean | undefined
                enable_stream_email_notifications?: boolean | undefined
                enable_stream_push_notifications?: boolean | undefined
                enable_stream_audible_notifications?: boolean | undefined
                notification_sound?: string | undefined
                enable_desktop_notifications?: boolean | undefined
                enable_sounds?: boolean | undefined
                enable_followed_topic_desktop_notifications?: boolean | undefined
                enable_followed_topic_email_notifications?: boolean | undefined
                enable_followed_topic_push_notifications?: boolean | undefined
                enable_followed_topic_audible_notifications?: boolean | undefined
                email_notifications_batching_period_seconds?: number | undefined
                enable_offline_email_notifications?: boolean | undefined
                enable_offline_push_notifications?: boolean | undefined
                enable_online_push_notifications?: boolean | undefined
                enable_digest_emails?: boolean | undefined
                enable_marketing_emails?: boolean | undefined
                enable_login_emails?: boolean | undefined
                message_content_in_email_notifications?: boolean | undefined
                pm_content_in_desktop_notifications?: boolean | undefined
                wildcard_mentions_notify?: boolean | undefined
                enable_followed_topic_wildcard_mentions_notify?: boolean | undefined
                desktop_icon_count_display?: number | undefined
                realm_name_in_email_notifications_policy?: number | undefined
                automatically_follow_topics_policy?: number | undefined
                automatically_unmute_topics_in_muted_streams_policy?: number | undefined
                automatically_follow_topics_where_mentioned?: boolean | undefined
                resolved_topic_notice_auto_read_policy?: string | undefined
                presence_enabled?: boolean | undefined
                available_notification_sounds?: string[] | undefined
                emojiset_choices?:
                  | { key?: string | undefined; text?: string | undefined }[]
                  | undefined
                send_private_typing_notifications?: boolean | undefined
                send_stream_typing_notifications?: boolean | undefined
                send_read_receipts?: boolean | undefined
                allow_private_data_export?: boolean | undefined
                email_address_visibility?: EmailAddressVisibility | undefined
                web_navigate_to_sent_message?: boolean | undefined
                web_right_click_opens_message_actions_menu?: boolean | undefined
              }
            | undefined
          user_topics?:
            | {
                stream_id?: number | undefined
                topic_name?: string | undefined
                last_updated?: number | undefined
                visibility_policy?: number | undefined
              }[]
            | undefined
          has_zoom_token?: boolean | undefined
          has_webex_token?: boolean | undefined
          has_google_meet_token?: boolean | undefined
          giphy_api_key?: string | undefined
          tenor_api_key?: string | undefined
          klipy_api_key?: string | undefined
          devices?:
            | {
                [x: string]: {
                  push_key_id?: (number | null) | undefined
                  push_token_id?: (string | null) | undefined
                  pending_push_token_id?: (string | null) | undefined
                  push_token_last_updated_timestamp?: (number | null) | undefined
                  push_registration_error_code?: (string | null) | undefined
                }
              }
            | undefined
          receives_typing_notifications?: boolean | undefined
          realm_message_edit_history_visibility_policy?: string | undefined
          realm_allow_edit_history?: boolean | undefined
          realm_can_add_custom_emoji_group?: {} | undefined
          realm_can_add_subscribers_group?: {} | undefined
          realm_can_delete_any_message_group?: {} | undefined
          realm_can_delete_own_message_group?: {} | undefined
          realm_can_set_delete_message_policy_group?: {} | undefined
          realm_can_set_topics_policy_group?: {} | undefined
          realm_can_invite_users_group?: {} | undefined
          realm_can_mention_many_users_group?: {} | undefined
          realm_can_move_messages_between_channels_group?: {} | undefined
          realm_can_move_messages_between_topics_group?: {} | undefined
          realm_can_create_groups?: {} | undefined
          realm_can_create_bots_group?: {} | undefined
          realm_can_create_write_only_bots_group?: {} | undefined
          realm_can_manage_all_groups?: {} | undefined
          realm_can_manage_billing_group?: {} | undefined
          realm_can_create_public_channel_group?: {} | undefined
          realm_can_create_private_channel_group?: {} | undefined
          realm_can_create_web_public_channel_group?: {} | undefined
          realm_can_resolve_topics_group?: {} | undefined
          realm_create_public_stream_policy?: number | undefined
          realm_create_private_stream_policy?: number | undefined
          realm_create_web_public_stream_policy?: number | undefined
          realm_wildcard_mention_policy?: number | undefined
          realm_default_language?: string | undefined
          realm_welcome_message_custom_text?: string | undefined
          realm_description?: string | undefined
          realm_digest_emails_enabled?: boolean | undefined
          realm_disallow_disposable_email_addresses?: boolean | undefined
          realm_email_changes_disabled?: boolean | undefined
          realm_invite_required?: boolean | undefined
          realm_create_multiuse_invite_group?: {} | undefined
          realm_media_preview_size?: 100 | 150 | 200 | undefined
          realm_inline_image_preview?: boolean | undefined
          realm_inline_url_embed_preview?: boolean | undefined
          realm_topics_policy?: 'allow_empty_topic' | 'disable_empty_topic' | undefined
          realm_mandatory_topics?: boolean | undefined
          realm_message_retention_days?: number | undefined
          realm_name?: string | undefined
          realm_require_e2ee_push_notifications?: boolean | undefined
          realm_require_unique_names?: boolean | undefined
          realm_name_changes_disabled?: boolean | undefined
          realm_avatar_changes_disabled?: boolean | undefined
          realm_emails_restricted_to_domains?: boolean | undefined
          realm_send_channel_events_messages?: boolean | undefined
          realm_send_welcome_emails?: boolean | undefined
          realm_message_content_allowed_in_email_notifications?: boolean | undefined
          realm_enable_spectator_access?: boolean | undefined
          realm_want_advertise_in_communities_directory?: boolean | undefined
          realm_video_chat_provider?: number | undefined
          realm_jitsi_server_url?: (string | null) | undefined
          realm_gif_rating_policy?: number | undefined
          realm_waiting_period_threshold?: number | undefined
          realm_digest_weekday?: number | undefined
          realm_direct_message_initiator_group?: {} | undefined
          realm_direct_message_permission_group?: {} | undefined
          realm_default_code_block_language?: string | undefined
          realm_message_content_delete_limit_seconds?: (number | null) | undefined
          realm_authentication_methods?: { [x: string]: RealmAuthenticationMethod } | undefined
          realm_allow_message_editing?: boolean | undefined
          realm_message_content_edit_limit_seconds?: (number | null) | undefined
          realm_move_messages_within_stream_limit_seconds?: (number | null) | undefined
          realm_move_messages_between_streams_limit_seconds?: (number | null) | undefined
          realm_enable_read_receipts?: boolean | undefined
          realm_icon_url?: string | undefined
          realm_icon_source?: string | undefined
          realm_workplace_users_group?: {} | undefined
          max_icon_file_size_mib?: number | undefined
          realm_logo_url?: string | undefined
          realm_logo_source?: string | undefined
          realm_night_logo_url?: string | undefined
          realm_night_logo_source?: string | undefined
          max_logo_file_size_mib?: number | undefined
          realm_bot_domain?: string | undefined
          realm_uri?: string | undefined
          realm_url?: string | undefined
          realm_uuid?: string | undefined
          realm_available_video_chat_providers?:
            | { [x: string]: { name?: string | undefined; id?: number | undefined } }
            | undefined
          realm_presence_disabled?: boolean | undefined
          settings_send_digest_emails?: boolean | undefined
          realm_email_auth_enabled?: boolean | undefined
          realm_password_auth_enabled?: boolean | undefined
          realm_push_notifications_enabled?: boolean | undefined
          realm_push_notifications_enabled_end_timestamp?: (number | null) | undefined
          realm_upload_quota_mib?: (number | null) | undefined
          realm_org_type?: number | undefined
          realm_owner_full_content_access?: boolean | undefined
          realm_plan_type?: number | undefined
          realm_enable_guest_user_dm_warning?: boolean | undefined
          realm_enable_guest_user_indicator?: boolean | undefined
          realm_can_access_all_users_group?: {} | undefined
          realm_can_summarize_topics_group?: {} | undefined
          zulip_plan_is_not_limited?: boolean | undefined
          upgrade_text_for_wide_organization_logo?: string | undefined
          realm_default_external_accounts?:
            | {
                [x: string]: {
                  name?: string | undefined
                  text?: string | undefined
                  hint?: string | undefined
                  url_pattern?: string | undefined
                }
              }
            | undefined
          realm_default_avatar_source?: string | undefined
          jitsi_server_url?: string | undefined
          development_environment?: boolean | undefined
          server_generation?: number | undefined
          password_min_length?: number | undefined
          password_max_length?: number | undefined
          password_min_guesses?: number | undefined
          gif_rating_policy_options?:
            | { [x: string]: { name?: string | undefined; id?: number | undefined } }
            | undefined
          max_file_upload_size_mib?: number | undefined
          max_avatar_file_size_mib?: number | undefined
          server_inline_image_preview?: boolean | undefined
          server_inline_url_embed_preview?: boolean | undefined
          server_thumbnail_formats?:
            | {
                name?: string | undefined
                max_width?: number | undefined
                max_height?: number | undefined
                format?: string | undefined
                animated?: boolean | undefined
              }[]
            | undefined
          server_avatar_changes_disabled?: boolean | undefined
          server_name_changes_disabled?: boolean | undefined
          server_needs_upgrade?: boolean | undefined
          server_web_public_streams_enabled?: boolean | undefined
          server_emoji_data_url?: string | undefined
          server_google_meet_app_internal?: boolean | undefined
          server_jitsi_server_url?: (string | null) | undefined
          server_can_summarize_topics?: boolean | undefined
          event_queue_longpoll_timeout_seconds?: number | undefined
          realm_billing?: { has_pending_sponsorship_request?: boolean | undefined } | undefined
          realm_moderation_request_channel_id?: number | undefined
          realm_new_stream_announcements_stream_id?: number | undefined
          realm_signup_announcements_stream_id?: number | undefined
          realm_zulip_update_announcements_stream_id?: number | undefined
          realm_empty_topic_display_name?: string | undefined
          realm_user_settings_defaults?:
            | {
                twenty_four_hour_time?: (boolean | null) | undefined
                web_mark_read_on_scroll_policy?: number | undefined
                web_channel_default_view?: number | undefined
                starred_message_counts?: boolean | undefined
                receives_typing_notifications?: boolean | undefined
                web_suggest_update_timezone?: boolean | undefined
                fluid_layout_width?: boolean | undefined
                high_contrast_mode?: boolean | undefined
                web_font_size_px?: number | undefined
                web_line_height_percent?: number | undefined
                color_scheme?: number | undefined
                translate_emoticons?: boolean | undefined
                display_emoji_reaction_users?: boolean | undefined
                default_language?: string | undefined
                web_home_view?: string | undefined
                web_escape_navigates_to_home_view?: boolean | undefined
                left_side_userlist?: boolean | undefined
                emojiset?: string | undefined
                demote_inactive_streams?: number | undefined
                user_list_style?: number | undefined
                web_animate_image_previews?: string | undefined
                web_stream_unreads_count_display_policy?: number | undefined
                hide_ai_features?: boolean | undefined
                web_inbox_show_channel_folders?: boolean | undefined
                web_left_sidebar_topics_order?: number | undefined
                web_left_sidebar_show_channel_folders?: boolean | undefined
                web_left_sidebar_unreads_count_summary?: boolean | undefined
                enable_stream_desktop_notifications?: boolean | undefined
                enable_stream_email_notifications?: boolean | undefined
                enable_stream_push_notifications?: boolean | undefined
                enable_stream_audible_notifications?: boolean | undefined
                notification_sound?: string | undefined
                enable_desktop_notifications?: boolean | undefined
                enable_sounds?: boolean | undefined
                enable_offline_email_notifications?: boolean | undefined
                enable_offline_push_notifications?: boolean | undefined
                enable_online_push_notifications?: boolean | undefined
                enable_followed_topic_desktop_notifications?: boolean | undefined
                enable_followed_topic_email_notifications?: boolean | undefined
                enable_followed_topic_push_notifications?: boolean | undefined
                enable_followed_topic_audible_notifications?: boolean | undefined
                enable_digest_emails?: boolean | undefined
                enable_marketing_emails?: boolean | undefined
                enable_login_emails?: boolean | undefined
                message_content_in_email_notifications?: boolean | undefined
                pm_content_in_desktop_notifications?: boolean | undefined
                wildcard_mentions_notify?: boolean | undefined
                enable_followed_topic_wildcard_mentions_notify?: boolean | undefined
                desktop_icon_count_display?: number | undefined
                realm_name_in_email_notifications_policy?: number | undefined
                automatically_follow_topics_policy?: number | undefined
                automatically_unmute_topics_in_muted_streams_policy?: number | undefined
                automatically_follow_topics_where_mentioned?: boolean | undefined
                resolved_topic_notice_auto_read_policy?: string | undefined
                presence_enabled?: boolean | undefined
                enter_sends?: boolean | undefined
                enable_drafts_synchronization?: boolean | undefined
                email_notifications_batching_period_seconds?: number | undefined
                available_notification_sounds?: string[] | undefined
                emojiset_choices?:
                  | { key?: string | undefined; text?: string | undefined }[]
                  | undefined
                send_private_typing_notifications?: boolean | undefined
                send_stream_typing_notifications?: boolean | undefined
                send_read_receipts?: boolean | undefined
                allow_private_data_export?: boolean | undefined
                email_address_visibility?: EmailAddressVisibility | undefined
                web_navigate_to_sent_message?: boolean | undefined
                web_right_click_opens_message_actions_menu?: boolean | undefined
              }
            | undefined
          realm_users?: User[] | undefined
          realm_non_active_users?: User[] | undefined
          avatar_source?: string | undefined
          avatar_url_medium?: string | undefined
          avatar_url?: string | undefined
          can_create_streams?: boolean | undefined
          can_create_public_streams?: boolean | undefined
          can_create_private_streams?: boolean | undefined
          can_create_web_public_streams?: boolean | undefined
          can_subscribe_other_users?: boolean | undefined
          can_invite_others_to_realm?: boolean | undefined
          is_admin?: boolean | undefined
          is_owner?: boolean | undefined
          is_moderator?: boolean | undefined
          is_guest?: boolean | undefined
          user_id?: number | undefined
          email?: string | undefined
          delivery_email?: string | undefined
          full_name?: string | undefined
          cross_realm_bots?:
            | {
                user_id?: { [x: string]: unknown } | undefined
                delivery_email?: { [x: string]: unknown } | undefined
                email?: { [x: string]: unknown } | undefined
                full_name?: { [x: string]: unknown } | undefined
                date_joined?: { [x: string]: unknown } | undefined
                is_active?: { [x: string]: unknown } | undefined
                is_owner?: { [x: string]: unknown } | undefined
                is_admin?: { [x: string]: unknown } | undefined
                is_guest?: { [x: string]: unknown } | undefined
                is_bot?: { [x: string]: unknown } | undefined
                bot_type?: ({ [x: string]: unknown } | null) | undefined
                bot_owner_id?: ({ [x: string]: unknown } | null) | undefined
                role?: { [x: string]: unknown } | undefined
                timezone?: { [x: string]: unknown } | undefined
                avatar_url?: ({ [x: string]: unknown } | null) | undefined
                avatar_version?: { [x: string]: unknown } | undefined
                is_imported_stub?: { [x: string]: unknown } | undefined
                is_deleted?: boolean | undefined
                is_system_bot?: boolean | undefined
              }[]
            | undefined
          server_report_message_types?:
            | { key?: string | undefined; name?: string | undefined }[]
            | undefined
          server_supported_permission_settings?:
            | {
                realm?: { [x: string]: GroupPermissionSetting } | undefined
                stream?: { [x: string]: GroupPermissionSetting } | undefined
                group?: { [x: string]: GroupPermissionSetting } | undefined
              }
            | undefined
          max_bulk_subscription_messages?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/server_settings': {
      $get: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          authentication_methods?:
            | {
                password?: boolean | undefined
                dev?: boolean | undefined
                email?: boolean | undefined
                ldap?: boolean | undefined
                remoteuser?: boolean | undefined
                github?: boolean | undefined
                azuread?: boolean | undefined
                gitlab?: boolean | undefined
                apple?: boolean | undefined
                google?: boolean | undefined
                saml?: boolean | undefined
                'openid connect'?: boolean | undefined
                discord?: boolean | undefined
              }
            | undefined
          external_authentication_methods?:
            | {
                name?: string | undefined
                display_name?: string | undefined
                display_icon?: (string | null) | undefined
                login_url?: string | undefined
                signup_url?: string | undefined
              }[]
            | undefined
          zulip_feature_level?: number | undefined
          zulip_version?: string | undefined
          zulip_merge_base?: string | undefined
          push_notifications_enabled?: boolean | undefined
          is_incompatible?: boolean | undefined
          email_auth_enabled?: boolean | undefined
          require_email_format_usernames?: boolean | undefined
          realm_uri?: string | undefined
          realm_url?: string | undefined
          realm_name?: string | undefined
          realm_icon?: string | undefined
          realm_description?: string | undefined
          realm_web_public_access_enabled?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings': {
      $patch: {
        input: {
          json: {
            target_users?:
              | {
                  user_ids?: number[] | undefined
                  group_ids?: number[] | undefined
                  skip_if_already_edited?: boolean | undefined
                }
              | undefined
            full_name?: string | undefined
            email?: string | undefined
            old_password?: string | undefined
            new_password?: string | undefined
            twenty_four_hour_time?: boolean | undefined
            web_mark_read_on_scroll_policy?: 1 | 2 | 3 | undefined
            web_channel_default_view?: 1 | 2 | 4 | undefined
            starred_message_counts?: boolean | undefined
            receives_typing_notifications?: boolean | undefined
            web_suggest_update_timezone?: boolean | undefined
            fluid_layout_width?: boolean | undefined
            high_contrast_mode?: boolean | undefined
            web_font_size_px?: number | undefined
            web_line_height_percent?: number | undefined
            color_scheme?: 1 | 2 | 3 | undefined
            enable_drafts_synchronization?: boolean | undefined
            translate_emoticons?: boolean | undefined
            display_emoji_reaction_users?: boolean | undefined
            default_language?: string | undefined
            web_home_view?: string | undefined
            web_escape_navigates_to_home_view?: boolean | undefined
            left_side_userlist?: boolean | undefined
            emojiset?: string | undefined
            demote_inactive_streams?: 1 | 2 | 3 | undefined
            user_list_style?: 1 | 2 | 3 | undefined
            web_animate_image_previews?: 'always' | 'on_hover' | 'never' | undefined
            web_stream_unreads_count_display_policy?: 1 | 2 | 3 | undefined
            hide_ai_features?: boolean | undefined
            web_inbox_show_channel_folders?: boolean | undefined
            web_left_sidebar_topics_order?: 1 | 2 | undefined
            web_left_sidebar_show_channel_folders?: boolean | undefined
            web_left_sidebar_unreads_count_summary?: boolean | undefined
            timezone?: string | undefined
            enable_stream_desktop_notifications?: boolean | undefined
            enable_stream_email_notifications?: boolean | undefined
            enable_stream_push_notifications?: boolean | undefined
            enable_stream_audible_notifications?: boolean | undefined
            notification_sound?: string | undefined
            enable_desktop_notifications?: boolean | undefined
            enable_sounds?: boolean | undefined
            email_notifications_batching_period_seconds?: number | undefined
            enable_offline_email_notifications?: boolean | undefined
            enable_offline_push_notifications?: boolean | undefined
            enable_online_push_notifications?: boolean | undefined
            enable_followed_topic_desktop_notifications?: boolean | undefined
            enable_followed_topic_email_notifications?: boolean | undefined
            enable_followed_topic_push_notifications?: boolean | undefined
            enable_followed_topic_audible_notifications?: boolean | undefined
            enable_digest_emails?: boolean | undefined
            enable_marketing_emails?: boolean | undefined
            enable_login_emails?: boolean | undefined
            message_content_in_email_notifications?: boolean | undefined
            pm_content_in_desktop_notifications?: boolean | undefined
            wildcard_mentions_notify?: boolean | undefined
            enable_followed_topic_wildcard_mentions_notify?: boolean | undefined
            desktop_icon_count_display?: 1 | 2 | 3 | 4 | undefined
            realm_name_in_email_notifications_policy?: 1 | 2 | 3 | undefined
            automatically_follow_topics_policy?: 1 | 2 | 3 | 4 | undefined
            automatically_unmute_topics_in_muted_streams_policy?: 1 | 2 | 3 | 4 | undefined
            automatically_follow_topics_where_mentioned?: boolean | undefined
            resolved_topic_notice_auto_read_policy?:
              | 'always'
              | 'except_followed'
              | 'never'
              | undefined
            presence_enabled?: boolean | undefined
            enter_sends?: boolean | undefined
            send_private_typing_notifications?: boolean | undefined
            send_stream_typing_notifications?: boolean | undefined
            send_read_receipts?: boolean | undefined
            allow_private_data_export?: boolean | undefined
            email_address_visibility?: 1 | 2 | 3 | 4 | 5 | undefined
            web_navigate_to_sent_message?: boolean | undefined
            web_right_click_opens_message_actions_menu?: boolean | undefined
          }
        } & {
          form: {
            target_users?:
              | {
                  user_ids?: number[] | undefined
                  group_ids?: number[] | undefined
                  skip_if_already_edited?: boolean | undefined
                }
              | undefined
            full_name?: string | undefined
            email?: string | undefined
            old_password?: string | undefined
            new_password?: string | undefined
            twenty_four_hour_time?: boolean | undefined
            web_mark_read_on_scroll_policy?: 1 | 2 | 3 | undefined
            web_channel_default_view?: 1 | 2 | 4 | undefined
            starred_message_counts?: boolean | undefined
            receives_typing_notifications?: boolean | undefined
            web_suggest_update_timezone?: boolean | undefined
            fluid_layout_width?: boolean | undefined
            high_contrast_mode?: boolean | undefined
            web_font_size_px?: number | undefined
            web_line_height_percent?: number | undefined
            color_scheme?: 1 | 2 | 3 | undefined
            enable_drafts_synchronization?: boolean | undefined
            translate_emoticons?: boolean | undefined
            display_emoji_reaction_users?: boolean | undefined
            default_language?: string | undefined
            web_home_view?: string | undefined
            web_escape_navigates_to_home_view?: boolean | undefined
            left_side_userlist?: boolean | undefined
            emojiset?: string | undefined
            demote_inactive_streams?: 1 | 2 | 3 | undefined
            user_list_style?: 1 | 2 | 3 | undefined
            web_animate_image_previews?: 'always' | 'on_hover' | 'never' | undefined
            web_stream_unreads_count_display_policy?: 1 | 2 | 3 | undefined
            hide_ai_features?: boolean | undefined
            web_inbox_show_channel_folders?: boolean | undefined
            web_left_sidebar_topics_order?: 1 | 2 | undefined
            web_left_sidebar_show_channel_folders?: boolean | undefined
            web_left_sidebar_unreads_count_summary?: boolean | undefined
            timezone?: string | undefined
            enable_stream_desktop_notifications?: boolean | undefined
            enable_stream_email_notifications?: boolean | undefined
            enable_stream_push_notifications?: boolean | undefined
            enable_stream_audible_notifications?: boolean | undefined
            notification_sound?: string | undefined
            enable_desktop_notifications?: boolean | undefined
            enable_sounds?: boolean | undefined
            email_notifications_batching_period_seconds?: number | undefined
            enable_offline_email_notifications?: boolean | undefined
            enable_offline_push_notifications?: boolean | undefined
            enable_online_push_notifications?: boolean | undefined
            enable_followed_topic_desktop_notifications?: boolean | undefined
            enable_followed_topic_email_notifications?: boolean | undefined
            enable_followed_topic_push_notifications?: boolean | undefined
            enable_followed_topic_audible_notifications?: boolean | undefined
            enable_digest_emails?: boolean | undefined
            enable_marketing_emails?: boolean | undefined
            enable_login_emails?: boolean | undefined
            message_content_in_email_notifications?: boolean | undefined
            pm_content_in_desktop_notifications?: boolean | undefined
            wildcard_mentions_notify?: boolean | undefined
            enable_followed_topic_wildcard_mentions_notify?: boolean | undefined
            desktop_icon_count_display?: 1 | 2 | 3 | 4 | undefined
            realm_name_in_email_notifications_policy?: 1 | 2 | 3 | undefined
            automatically_follow_topics_policy?: 1 | 2 | 3 | 4 | undefined
            automatically_unmute_topics_in_muted_streams_policy?: 1 | 2 | 3 | 4 | undefined
            automatically_follow_topics_where_mentioned?: boolean | undefined
            resolved_topic_notice_auto_read_policy?:
              | 'always'
              | 'except_followed'
              | 'never'
              | undefined
            presence_enabled?: boolean | undefined
            enter_sends?: boolean | undefined
            send_private_typing_notifications?: boolean | undefined
            send_stream_typing_notifications?: boolean | undefined
            send_read_receipts?: boolean | undefined
            allow_private_data_export?: boolean | undefined
            email_address_visibility?: 1 | 2 | 3 | 4 | 5 | undefined
            web_navigate_to_sent_message?: boolean | undefined
            web_right_click_opens_message_actions_menu?: boolean | undefined
          }
        }
        output: {
          result?: { [x: string]: unknown } | undefined
          msg?: { [x: string]: unknown } | undefined
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/streams/:stream_id/members': {
      $get:
        | {
            input: { param: { stream_id: number } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              subscribers?: number[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/streams': {
      $get: {
        input: {
          query: {
            include_public?: boolean | undefined
            include_web_public?: boolean | undefined
            include_subscribed?: boolean | undefined
            exclude_archived?: boolean | undefined
            include_all_active?: boolean | undefined
            include_all?: boolean | undefined
            include_default?: boolean | undefined
            include_owner_subscribed?: boolean | undefined
            include_can_access_content?: boolean | undefined
          }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          streams?:
            | {
                stream_id: { [x: string]: unknown }
                name: { [x: string]: unknown }
                is_archived: { [x: string]: unknown }
                description: { [x: string]: unknown }
                date_created: { [x: string]: unknown }
                creator_id: { [x: string]: unknown } | null
                invite_only: { [x: string]: unknown }
                rendered_description: { [x: string]: unknown }
                is_web_public: { [x: string]: unknown }
                stream_post_policy: { [x: string]: unknown }
                message_retention_days: { [x: string]: unknown } | null
                default_push_notifications: { [x: string]: unknown }
                history_public_to_subscribers: { [x: string]: unknown }
                topics_policy?: { [x: string]: unknown } | undefined
                first_message_id: { [x: string]: unknown } | null
                folder_id: { [x: string]: unknown } | null
                is_recently_active: { [x: string]: unknown }
                is_announcement_only: { [x: string]: unknown }
                can_add_subscribers_group?: { [x: string]: unknown } | undefined
                can_remove_subscribers_group: { [x: string]: unknown }
                can_administer_channel_group?: { [x: string]: unknown } | undefined
                can_delete_any_message_group?: { [x: string]: unknown } | undefined
                can_delete_own_message_group?: { [x: string]: unknown } | undefined
                can_move_messages_out_of_channel_group?: { [x: string]: unknown } | undefined
                can_move_messages_within_channel_group?: { [x: string]: unknown } | undefined
                can_send_message_group?: { [x: string]: unknown } | undefined
                can_subscribe_group: { [x: string]: unknown }
                can_resolve_topics_group?: { [x: string]: unknown } | undefined
                can_create_topic_group?: { [x: string]: unknown } | undefined
                subscriber_count: { [x: string]: unknown }
                stream_weekly_traffic: number | null
                is_default?: boolean | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/streams/:stream_id': {
      $get:
        | {
            input: { param: { stream_id: number } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              stream?: BasicChannel | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { stream_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { stream_id: number } } & {
              json: {
                description?: string | undefined
                new_name?: string | undefined
                is_private?: boolean | undefined
                is_web_public?: boolean | undefined
                history_public_to_subscribers?: boolean | undefined
                is_default_stream?: boolean | undefined
                message_retention_days?: MessageRetentionDays | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
                is_archived?: boolean | undefined
                folder_id?: (number | null) | undefined
                topics_policy?: TopicsPolicy | undefined
                can_add_subscribers_group?: { new: {}; old?: {} | undefined } | undefined
                can_remove_subscribers_group?: { new: {}; old?: {} | undefined } | undefined
                can_administer_channel_group?: { new: {}; old?: {} | undefined } | undefined
                can_delete_any_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_delete_own_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_move_messages_out_of_channel_group?:
                  | { new: {}; old?: {} | undefined }
                  | undefined
                can_move_messages_within_channel_group?:
                  | { new: {}; old?: {} | undefined }
                  | undefined
                can_send_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_subscribe_group?: { new: {}; old?: {} | undefined } | undefined
                can_resolve_topics_group?: { new: {}; old?: {} | undefined } | undefined
                can_create_topic_group?: { new: {}; old?: {} | undefined } | undefined
              }
            } & {
              form: {
                description?: string | undefined
                new_name?: string | undefined
                is_private?: boolean | undefined
                is_web_public?: boolean | undefined
                history_public_to_subscribers?: boolean | undefined
                is_default_stream?: boolean | undefined
                message_retention_days?: MessageRetentionDays | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
                is_archived?: boolean | undefined
                folder_id?: (number | null) | undefined
                topics_policy?: TopicsPolicy | undefined
                can_add_subscribers_group?: { new: {}; old?: {} | undefined } | undefined
                can_remove_subscribers_group?: { new: {}; old?: {} | undefined } | undefined
                can_administer_channel_group?: { new: {}; old?: {} | undefined } | undefined
                can_delete_any_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_delete_own_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_move_messages_out_of_channel_group?:
                  | { new: {}; old?: {} | undefined }
                  | undefined
                can_move_messages_within_channel_group?:
                  | { new: {}; old?: {} | undefined }
                  | undefined
                can_send_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_subscribe_group?: { new: {}; old?: {} | undefined } | undefined
                can_resolve_topics_group?: { new: {}; old?: {} | undefined } | undefined
                can_create_topic_group?: { new: {}; old?: {} | undefined } | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_id: number } } & {
              json: {
                description?: string | undefined
                new_name?: string | undefined
                is_private?: boolean | undefined
                is_web_public?: boolean | undefined
                history_public_to_subscribers?: boolean | undefined
                is_default_stream?: boolean | undefined
                message_retention_days?: MessageRetentionDays | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
                is_archived?: boolean | undefined
                folder_id?: (number | null) | undefined
                topics_policy?: TopicsPolicy | undefined
                can_add_subscribers_group?: { new: {}; old?: {} | undefined } | undefined
                can_remove_subscribers_group?: { new: {}; old?: {} | undefined } | undefined
                can_administer_channel_group?: { new: {}; old?: {} | undefined } | undefined
                can_delete_any_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_delete_own_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_move_messages_out_of_channel_group?:
                  | { new: {}; old?: {} | undefined }
                  | undefined
                can_move_messages_within_channel_group?:
                  | { new: {}; old?: {} | undefined }
                  | undefined
                can_send_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_subscribe_group?: { new: {}; old?: {} | undefined } | undefined
                can_resolve_topics_group?: { new: {}; old?: {} | undefined } | undefined
                can_create_topic_group?: { new: {}; old?: {} | undefined } | undefined
              }
            } & {
              form: {
                description?: string | undefined
                new_name?: string | undefined
                is_private?: boolean | undefined
                is_web_public?: boolean | undefined
                history_public_to_subscribers?: boolean | undefined
                is_default_stream?: boolean | undefined
                message_retention_days?: MessageRetentionDays | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
                is_archived?: boolean | undefined
                folder_id?: (number | null) | undefined
                topics_policy?: TopicsPolicy | undefined
                can_add_subscribers_group?: { new: {}; old?: {} | undefined } | undefined
                can_remove_subscribers_group?: { new: {}; old?: {} | undefined } | undefined
                can_administer_channel_group?: { new: {}; old?: {} | undefined } | undefined
                can_delete_any_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_delete_own_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_move_messages_out_of_channel_group?:
                  | { new: {}; old?: {} | undefined }
                  | undefined
                can_move_messages_within_channel_group?:
                  | { new: {}; old?: {} | undefined }
                  | undefined
                can_send_message_group?: { new: {}; old?: {} | undefined } | undefined
                can_subscribe_group?: { new: {}; old?: {} | undefined } | undefined
                can_resolve_topics_group?: { new: {}; old?: {} | undefined } | undefined
                can_create_topic_group?: { new: {}; old?: {} | undefined } | undefined
              }
            }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/streams/:stream_id/email_address': {
      $get:
        | {
            input: { param: { stream_id: number } } & { query: { sender_id?: number | undefined } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              email?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_id: number } } & { query: { sender_id?: number | undefined } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/streams/:stream_id/delete_topic': {
      $post:
        | {
            input: { param: { stream_id: number } } & { json: { topic_name: string } } & {
              form: { topic_name: string }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              complete: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stream_id: number } } & { json: { topic_name: string } } & {
              form: { topic_name: string }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/typing': {
      $post:
        | {
            input: {
              json: {
                type?: 'direct' | 'stream' | 'channel' | undefined
                op: 'start' | 'stop'
                to?: number[] | undefined
                stream_id?: number | undefined
                topic?: string | undefined
              }
            } & {
              form: {
                type?: 'direct' | 'stream' | 'channel' | undefined
                op: 'start' | 'stop'
                to?: number[] | undefined
                stream_id?: number | undefined
                topic?: string | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type?: 'direct' | 'stream' | 'channel' | undefined
                op: 'start' | 'stop'
                to?: number[] | undefined
                stream_id?: number | undefined
                topic?: string | undefined
              }
            } & {
              form: {
                type?: 'direct' | 'stream' | 'channel' | undefined
                op: 'start' | 'stop'
                to?: number[] | undefined
                stream_id?: number | undefined
                topic?: string | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/messages/:message_id/typing': {
      $post: {
        input: { param: { message_id: number } } & { json: { op: 'start' | 'stop' } } & {
          form: { op: 'start' | 'stop' }
        }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/create': {
      $post:
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                subscribers: number[]
                announce?: boolean | undefined
                invite_only?: boolean | undefined
                is_web_public?: boolean | undefined
                is_default_stream?: boolean | undefined
                folder_id?: number | undefined
                topics_policy?: TopicsPolicy | undefined
                history_public_to_subscribers?: HistoryPublicToSubscribers | undefined
                message_retention_days?: MessageRetentionDays | undefined
                can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
                can_create_topic_group?: CanCreateTopicGroup | undefined
                can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
                can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
                can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
                can_administer_channel_group?: CanAdministerChannelGroup | undefined
                can_move_messages_out_of_channel_group?:
                  | CanMoveMessagesOutOfChannelGroup
                  | undefined
                can_move_messages_within_channel_group?:
                  | CanMoveMessagesWithinChannelGroup
                  | undefined
                can_send_message_group?: CanSendMessageGroup | undefined
                can_subscribe_group?: CanSubscribeGroup | undefined
                can_resolve_topics_group?: CanResolveTopicsGroup | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
              }
            } & {
              form: {
                name: string
                description?: string | undefined
                subscribers: number[]
                announce?: boolean | undefined
                invite_only?: boolean | undefined
                is_web_public?: boolean | undefined
                is_default_stream?: boolean | undefined
                folder_id?: number | undefined
                topics_policy?: TopicsPolicy | undefined
                history_public_to_subscribers?: HistoryPublicToSubscribers | undefined
                message_retention_days?: MessageRetentionDays | undefined
                can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
                can_create_topic_group?: CanCreateTopicGroup | undefined
                can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
                can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
                can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
                can_administer_channel_group?: CanAdministerChannelGroup | undefined
                can_move_messages_out_of_channel_group?:
                  | CanMoveMessagesOutOfChannelGroup
                  | undefined
                can_move_messages_within_channel_group?:
                  | CanMoveMessagesWithinChannelGroup
                  | undefined
                can_send_message_group?: CanSendMessageGroup | undefined
                can_subscribe_group?: CanSubscribeGroup | undefined
                can_resolve_topics_group?: CanResolveTopicsGroup | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                subscribers: number[]
                announce?: boolean | undefined
                invite_only?: boolean | undefined
                is_web_public?: boolean | undefined
                is_default_stream?: boolean | undefined
                folder_id?: number | undefined
                topics_policy?: TopicsPolicy | undefined
                history_public_to_subscribers?: HistoryPublicToSubscribers | undefined
                message_retention_days?: MessageRetentionDays | undefined
                can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
                can_create_topic_group?: CanCreateTopicGroup | undefined
                can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
                can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
                can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
                can_administer_channel_group?: CanAdministerChannelGroup | undefined
                can_move_messages_out_of_channel_group?:
                  | CanMoveMessagesOutOfChannelGroup
                  | undefined
                can_move_messages_within_channel_group?:
                  | CanMoveMessagesWithinChannelGroup
                  | undefined
                can_send_message_group?: CanSendMessageGroup | undefined
                can_subscribe_group?: CanSubscribeGroup | undefined
                can_resolve_topics_group?: CanResolveTopicsGroup | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
              }
            } & {
              form: {
                name: string
                description?: string | undefined
                subscribers: number[]
                announce?: boolean | undefined
                invite_only?: boolean | undefined
                is_web_public?: boolean | undefined
                is_default_stream?: boolean | undefined
                folder_id?: number | undefined
                topics_policy?: TopicsPolicy | undefined
                history_public_to_subscribers?: HistoryPublicToSubscribers | undefined
                message_retention_days?: MessageRetentionDays | undefined
                can_add_subscribers_group?: ChannelCanAddSubscribersGroup | undefined
                can_create_topic_group?: CanCreateTopicGroup | undefined
                can_delete_any_message_group?: CanDeleteAnyMessageGroup | undefined
                can_delete_own_message_group?: CanDeleteOwnMessageGroup | undefined
                can_remove_subscribers_group?: CanRemoveSubscribersGroup | undefined
                can_administer_channel_group?: CanAdministerChannelGroup | undefined
                can_move_messages_out_of_channel_group?:
                  | CanMoveMessagesOutOfChannelGroup
                  | undefined
                can_move_messages_within_channel_group?:
                  | CanMoveMessagesWithinChannelGroup
                  | undefined
                can_send_message_group?: CanSendMessageGroup | undefined
                can_subscribe_group?: CanSubscribeGroup | undefined
                can_resolve_topics_group?: CanResolveTopicsGroup | undefined
                default_push_notifications?: DefaultPushNotifications | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/user_groups/create': {
      $post:
        | {
            input: {
              json: {
                name: string
                description: string
                members: number[]
                subgroups?: number[] | undefined
                can_add_members_group?: {} | undefined
                can_join_group?: {} | undefined
                can_leave_group?: {} | undefined
                can_manage_group?: {} | undefined
                can_mention_group?: {} | undefined
                can_remove_members_group?: {} | undefined
              }
            } & {
              form: {
                name: string
                description: string
                members: number[]
                subgroups?: number[] | undefined
                can_add_members_group?: {} | undefined
                can_join_group?: {} | undefined
                can_leave_group?: {} | undefined
                can_manage_group?: {} | undefined
                can_mention_group?: {} | undefined
                can_remove_members_group?: {} | undefined
              }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              group_id: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description: string
                members: number[]
                subgroups?: number[] | undefined
                can_add_members_group?: {} | undefined
                can_join_group?: {} | undefined
                can_leave_group?: {} | undefined
                can_manage_group?: {} | undefined
                can_mention_group?: {} | undefined
                can_remove_members_group?: {} | undefined
              }
            } & {
              form: {
                name: string
                description: string
                members: number[]
                subgroups?: number[] | undefined
                can_add_members_group?: {} | undefined
                can_join_group?: {} | undefined
                can_leave_group?: {} | undefined
                can_manage_group?: {} | undefined
                can_mention_group?: {} | undefined
                can_remove_members_group?: {} | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user_groups/:user_group_id/members': {
      $post: {
        input: { param: { user_group_id: number } } & {
          json: {
            delete?: number[] | undefined
            add?: number[] | undefined
            delete_subgroups?: number[] | undefined
            add_subgroups?: number[] | undefined
          }
        } & {
          form: {
            delete?: number[] | undefined
            add?: number[] | undefined
            delete_subgroups?: number[] | undefined
            add_subgroups?: number[] | undefined
          }
        }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { user_group_id: number } } & {
          query: { direct_member_only?: boolean | undefined }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          members?: number[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_groups/:user_group_id': {
      $patch:
        | {
            input: { param: { user_group_id: number } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                can_add_members_group?: { new: {}; old?: {} | undefined } | undefined
                can_join_group?: { new: {}; old?: {} | undefined } | undefined
                can_leave_group?: { new: {}; old?: {} | undefined } | undefined
                can_manage_group?: { new: {}; old?: {} | undefined } | undefined
                can_mention_group?: { new: {}; old?: {} | undefined } | undefined
                can_remove_members_group?: { new: {}; old?: {} | undefined } | undefined
                deactivated?: boolean | undefined
              }
            } & {
              form: {
                name?: string | undefined
                description?: string | undefined
                can_add_members_group?: { new: {}; old?: {} | undefined } | undefined
                can_join_group?: { new: {}; old?: {} | undefined } | undefined
                can_leave_group?: { new: {}; old?: {} | undefined } | undefined
                can_manage_group?: { new: {}; old?: {} | undefined } | undefined
                can_mention_group?: { new: {}; old?: {} | undefined } | undefined
                can_remove_members_group?: { new: {}; old?: {} | undefined } | undefined
                deactivated?: boolean | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_group_id: number } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                can_add_members_group?: { new: {}; old?: {} | undefined } | undefined
                can_join_group?: { new: {}; old?: {} | undefined } | undefined
                can_leave_group?: { new: {}; old?: {} | undefined } | undefined
                can_manage_group?: { new: {}; old?: {} | undefined } | undefined
                can_mention_group?: { new: {}; old?: {} | undefined } | undefined
                can_remove_members_group?: { new: {}; old?: {} | undefined } | undefined
                deactivated?: boolean | undefined
              }
            } & {
              form: {
                name?: string | undefined
                description?: string | undefined
                can_add_members_group?: { new: {}; old?: {} | undefined } | undefined
                can_join_group?: { new: {}; old?: {} | undefined } | undefined
                can_leave_group?: { new: {}; old?: {} | undefined } | undefined
                can_manage_group?: { new: {}; old?: {} | undefined } | undefined
                can_mention_group?: { new: {}; old?: {} | undefined } | undefined
                can_remove_members_group?: { new: {}; old?: {} | undefined } | undefined
                deactivated?: boolean | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user_groups': {
      $get: {
        input: { json: { include_deactivated_groups?: boolean | undefined } } & {
          form: { include_deactivated_groups?: boolean | undefined }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          user_groups?:
            | {
                description?: string | undefined
                id?: number | undefined
                date_created?: (number | null) | undefined
                creator_id?: (number | null) | undefined
                members?: number[] | undefined
                direct_subgroup_ids?: number[] | undefined
                name?: string | undefined
                is_system_group?: boolean | undefined
                can_add_members_group?: {} | undefined
                can_join_group?: {} | undefined
                can_leave_group?: {} | undefined
                can_manage_group?: {} | undefined
                can_mention_group?: {} | undefined
                can_remove_members_group?: {} | undefined
                deactivated?: boolean | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_groups/:user_group_id/subgroups': {
      $post: {
        input: { param: { user_group_id: number } } & {
          json: { delete?: number[] | undefined; add?: number[] | undefined }
        } & { form: { delete?: number[] | undefined; add?: number[] | undefined } }
        output: JsonSuccess
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { user_group_id: number } } & {
          query: { direct_subgroup_only?: boolean | undefined }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          subgroups?: number[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_groups/:user_group_id/members/:user_id': {
      $get: {
        input: { param: { user_group_id: number; user_id: number } } & {
          query: { direct_member_only?: boolean | undefined }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          is_user_group_member?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_groups/:user_group_id/deactivate': {
      $post:
        | {
            input: { param: { user_group_id: number } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_group_id: number } }
            output:
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
              | {
                  result?: { [x: string]: unknown } | undefined
                  msg?: { [x: string]: unknown } | undefined
                  code?: { [x: string]: unknown } | undefined
                }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channel_folders/create': {
      $post:
        | {
            input: { json: { name: string; description?: string | undefined } } & {
              form: { name: string; description?: string | undefined }
            }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              channel_folder_id: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; description?: string | undefined } } & {
              form: { name: string; description?: string | undefined }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channel_folders': {
      $get: {
        input: { json: { include_archived?: boolean | undefined } } & {
          form: { include_archived?: boolean | undefined }
        }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          channel_folders?: ChannelFolder[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { json: { order: number[] } } & { form: { order: number[] } }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { order: number[] } } & { form: { order: number[] } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channel_folders/:channel_folder_id': {
      $patch:
        | {
            input: { param: { channel_folder_id: number } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                is_archived?: boolean | undefined
              }
            } & {
              form: {
                name?: string | undefined
                description?: string | undefined
                is_archived?: boolean | undefined
              }
            }
            output: JsonSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_folder_id: number } } & {
              json: {
                name?: string | undefined
                description?: string | undefined
                is_archived?: boolean | undefined
              }
            } & {
              form: {
                name?: string | undefined
                description?: string | undefined
                is_archived?: boolean | undefined
              }
            }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/bots/:bot_id/api_key': {
      $get:
        | {
            input: { param: { bot_id: number } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              api_key?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bot_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/bots/:bot_id/api_key/regenerate': {
      $post:
        | {
            input: { param: { bot_id: number } }
            output: {
              result: { [x: string]: unknown }
              msg: { [x: string]: unknown }
              ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
              api_key?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bot_id: number } }
            output: {
              result?: { [x: string]: unknown } | undefined
              msg?: { [x: string]: unknown } | undefined
              code?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/real-time': {
      $post: {
        input: {
          json: {
            event_types?: EventTypes | undefined
            narrow?: Narrow | undefined
            all_public_streams?: AllPublicChannels | undefined
          }
        } & {
          form: {
            event_types?: EventTypes | undefined
            narrow?: Narrow | undefined
            all_public_streams?: AllPublicChannels | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/rest-error-handling': {
      $post:
        | {
            input: {}
            output:
              | InvalidApiKeyError
              | MissingArgumentError
              | IncompatibleParametersError
              | UserNotAuthorizedError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: UserDeactivatedError | RealmDeactivatedError
            outputFormat: 'json'
            status: 401
          }
        | { input: {}; output: RateLimitedError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/zulip-outgoing-webhook': {
      $post: {
        input: {}
        output: {
          bot_email?: string | undefined
          bot_full_name?: string | undefined
          data?: string | undefined
          trigger?: string | undefined
          token?: string | undefined
          message?:
            | {
                avatar_url?: ({ [x: string]: unknown } | null) | undefined
                client?: { [x: string]: unknown } | undefined
                content?: { [x: string]: unknown } | undefined
                content_type?: { [x: string]: unknown } | undefined
                display_recipient?: { [x: string]: unknown } | undefined
                edit_history?: { [x: string]: unknown } | undefined
                id?: { [x: string]: unknown } | undefined
                is_me_message?: { [x: string]: unknown } | undefined
                last_edit_timestamp?: { [x: string]: unknown } | undefined
                last_moved_timestamp?: { [x: string]: unknown } | undefined
                reactions?: { [x: string]: unknown } | undefined
                recipient_id?: { [x: string]: unknown } | undefined
                sender_email?: { [x: string]: unknown } | undefined
                sender_full_name?: { [x: string]: unknown } | undefined
                sender_id?: { [x: string]: unknown } | undefined
                sender_realm_str?: { [x: string]: unknown } | undefined
                stream_id?: { [x: string]: unknown } | undefined
                subject?: { [x: string]: unknown } | undefined
                submessages?: { [x: string]: unknown } | undefined
                timestamp?: { [x: string]: unknown } | undefined
                topic_links?: { [x: string]: unknown } | undefined
                type?: { [x: string]: unknown } | undefined
                rendered_content?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calls/bigbluebutton/create': {
      $get: {
        input: { query: { meeting_name: string; voice_only?: boolean | undefined } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calls/nextcloud_talk/create': {
      $post: {
        input: { json: { room_name: string } } & { form: { room_name: string } }
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calls/webex/create': {
      $post: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calls/google_meet/create': {
      $post: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calls/constructorgroups/create': {
      $post: {
        input: {}
        output: {
          result: { [x: string]: unknown }
          msg: { [x: string]: unknown }
          ignored_parameters_unsupported?: { [x: string]: unknown } | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
