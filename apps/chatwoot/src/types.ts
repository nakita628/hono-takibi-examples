type AccountCreateUpdatePayload = {
  name?: string | undefined
  locale?: string | undefined
  domain?: string | undefined
  support_email?: string | undefined
  status?: 'active' | 'suspended' | undefined
  limits?: { [x: string]: unknown } | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
}
type PlatformAccount = { id?: number | undefined; name?: string | undefined }
type RequestError = {
  field?: string | undefined
  message?: string | undefined
  code?: string | undefined
}
type BadRequestError = { description?: string | undefined; errors?: RequestError[] | undefined }
type AccountUser = {
  account_id?: number | undefined
  user_id?: number | undefined
  role?: string | undefined
}[]
type AccountUserCreateUpdatePayload = { user_id: number; role: string }
type AgentBot = {
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  thumbnail?: string | undefined
  outgoing_url?: string | undefined
  bot_type?: string | undefined
  bot_config?: { [x: string]: unknown } | undefined
  account_id?: number | undefined
  access_token?: string | undefined
  system_bot?: boolean | undefined
}
type PlatformAgentBotCreateUpdatePayload = {
  name?: string | undefined
  description?: string | undefined
  outgoing_url?: string | undefined
  account_id?: number | undefined
  avatar?: File | undefined
  avatar_url?: string | undefined
}
type UserCreateUpdatePayload = {
  name?: string | undefined
  display_name?: string | undefined
  email?: string | undefined
  password?: string | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
}
type User = {
  id?: number | undefined
  access_token?: string | undefined
  account_id?: number | undefined
  available_name?: string | undefined
  avatar_url?: string | undefined
  confirmed?: boolean | undefined
  display_name?: (string | null) | undefined
  message_signature?: (string | null) | undefined
  email?: string | undefined
  hmac_identifier?: string | undefined
  inviter_id?: (number | null) | undefined
  name?: string | undefined
  provider?: string | undefined
  pubsub_token?: string | undefined
  role?: 'agent' | 'administrator' | undefined
  ui_settings?: { [x: string]: unknown } | undefined
  uid?: string | undefined
  type?: (string | null) | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
  accounts?:
    | {
        id?: number | undefined
        name?: string | undefined
        status?: string | undefined
        active_at?: (string | null) | undefined
        role?: 'administrator' | 'agent' | undefined
        permissions?: string[] | undefined
        availability?: string | undefined
        availability_status?: string | undefined
        auto_offline?: boolean | undefined
        custom_role_id?: (number | null) | undefined
        custom_role?: ({ [x: string]: unknown } | null) | undefined
      }[]
    | undefined
}
type PublicInbox = {
  identifier?: string | undefined
  name?: string | undefined
  timezone?: string | undefined
  working_hours?:
    | {
        day_of_week?: number | undefined
        open_all_day?: boolean | undefined
        closed_all_day?: boolean | undefined
        open_hour?: number | undefined
        open_minutes?: number | undefined
        close_hour?: number | undefined
        close_minutes?: number | undefined
      }[]
    | undefined
  working_hours_enabled?: boolean | undefined
  csat_survey_enabled?: boolean | undefined
  greeting_enabled?: boolean | undefined
  identity_validation_enabled?: boolean | undefined
}
type PublicContactCreateUpdatePayload = {
  identifier?: string | undefined
  identifier_hash?: string | undefined
  email?: string | undefined
  name?: string | undefined
  phone_number?: string | undefined
  avatar?: File | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
}
type PublicContact = {
  id?: number | undefined
  source_id?: string | undefined
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  pubsub_token?: string | undefined
}
type PublicContactRecord = {
  id?: number | undefined
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  identifier?: (string | null) | undefined
  blocked?: boolean | undefined
  additional_attributes?: ({ [x: string]: unknown } | null) | undefined
  custom_attributes?: ({ [x: string]: unknown } | null) | undefined
  contact_type?: (string | null) | undefined
  country_code?: (string | null) | undefined
  last_activity_at?: (string | null) | undefined
  created_at?: (string | null) | undefined
  updated_at?: (string | null) | undefined
  last_name?: (string | null) | undefined
  middle_name?: (string | null) | undefined
  location?: (string | null) | undefined
  account_id?: number | undefined
  company_id?: (number | null) | undefined
  label_list?: string[] | undefined
}
type PublicConversationCreatePayload = { custom_attributes?: { [x: string]: unknown } | undefined }
type PublicMessageAttachment = {
  id?: number | undefined
  message_id?: number | undefined
  file_type?:
    | 'image'
    | 'audio'
    | 'video'
    | 'file'
    | 'location'
    | 'fallback'
    | 'share'
    | 'story_mention'
    | 'contact'
    | 'ig_reel'
    | 'ig_post'
    | 'ig_story'
    | 'embed'
    | undefined
  account_id?: number | undefined
  extension?: (string | null) | undefined
  data_url?: (string | null) | undefined
  thumb_url?: string | undefined
  file_size?: number | undefined
  width?: (number | null) | undefined
  height?: (number | null) | undefined
  coordinates_lat?: number | undefined
  coordinates_long?: number | undefined
  fallback_title?: (string | null) | undefined
  meta?: { [x: string]: unknown } | undefined
  transcribed_text?: string | undefined
}
type PublicMessageSender = {
  id?: number | undefined
  name?: (string | null) | undefined
  avatar_url?: string | undefined
  thumbnail?: string | undefined
  type?: 'contact' | 'user' | 'agent_bot' | 'captain_assistant' | undefined
  available_name?: (string | null) | undefined
  availability_status?: (string | null) | undefined
  email?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  identifier?: (string | null) | undefined
  blocked?: boolean | undefined
  additional_attributes?: ({ [x: string]: unknown } | null) | undefined
  custom_attributes?: ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  created_at?: (string | null) | undefined
}
type PublicMessage = {
  id?: number | undefined
  content?: (string | null) | undefined
  message_type?: number | undefined
  content_type?: string | undefined
  content_attributes?: { [x: string]: unknown } | undefined
  created_at?: number | undefined
  conversation_id?: number | undefined
  attachments?: PublicMessageAttachment[] | undefined
  sender?: PublicMessageSender | undefined
}
type PublicConversation = {
  id?: number | undefined
  uuid?: string | undefined
  inbox_id?: number | undefined
  contact_last_seen_at?: number | undefined
  status?: 'open' | 'resolved' | 'pending' | 'snoozed' | undefined
  agent_last_seen_at?: number | undefined
  messages?: PublicMessage[] | undefined
  contact?: PublicContactRecord | undefined
}
type PublicMessageCreatePayload = { content?: string | undefined; echo_id?: string | undefined }
type PublicMessageUpdatePayload = {
  submitted_values?:
    | {
        name?: string | undefined
        title?: string | undefined
        value?: string | undefined
        csat_survey_response?:
          | { feedback_message?: string | undefined; rating?: number | undefined }
          | undefined
      }
    | undefined
}
type AccountShowResponse = {
  id?: number | undefined
  name?: string | undefined
  locale?: string | undefined
  domain?: string | undefined
  support_email?: string | undefined
  status?: string | undefined
  created_at?: string | undefined
  cache_keys?: { [x: string]: unknown } | undefined
  features?: { [x: string]: unknown } | undefined
  settings?:
    | {
        auto_resolve_after?: number | undefined
        auto_resolve_message?: string | undefined
        auto_resolve_ignore_waiting?: boolean | undefined
      }
    | undefined
  custom_attributes?:
    | {
        plan_name?: (string | null) | undefined
        subscribed_quantity?: (number | null) | undefined
        subscription_status?: (string | null) | undefined
        subscription_ends_on?: (string | null) | undefined
        industry?: string | undefined
        company_size?: string | undefined
        timezone?: string | undefined
        logo?: string | undefined
        onboarding_step?: string | undefined
        marked_for_deletion_at?: string | undefined
        marked_for_deletion_reason?: string | undefined
      }
    | undefined
  latest_chatwoot_version?: (string | null) | undefined
  subscribed_features?: string[] | undefined
}
type AccountUpdatePayload = {
  name?: string | undefined
  locale?: string | undefined
  domain?: string | undefined
  support_email?: string | undefined
  auto_resolve_after?: (number | null) | undefined
  auto_resolve_message?: (string | null) | undefined
  auto_resolve_ignore_waiting?: (boolean | null) | undefined
  industry?: string | undefined
  company_size?: string | undefined
  timezone?: string | undefined
}
type AccountDetail = {
  id?: number | undefined
  name?: string | undefined
  locale?: string | undefined
  domain?: string | undefined
  support_email?: string | undefined
  status?: string | undefined
  created_at?: string | undefined
  cache_keys?: { [x: string]: unknown } | undefined
  features?: { [x: string]: unknown } | undefined
  settings?:
    | {
        auto_resolve_after?: number | undefined
        auto_resolve_message?: string | undefined
        auto_resolve_ignore_waiting?: boolean | undefined
      }
    | undefined
  custom_attributes?:
    | {
        plan_name?: (string | null) | undefined
        subscribed_quantity?: (number | null) | undefined
        subscription_status?: (string | null) | undefined
        subscription_ends_on?: (string | null) | undefined
        industry?: string | undefined
        company_size?: string | undefined
        timezone?: string | undefined
        logo?: string | undefined
        onboarding_step?: string | undefined
        marked_for_deletion_at?: string | undefined
        marked_for_deletion_reason?: string | undefined
      }
    | undefined
}
type AuditLog = {
  id?: number | undefined
  auditable_id?: number | undefined
  auditable_type?: string | undefined
  auditable?: ({ [x: string]: unknown } | null) | undefined
  associated_id?: number | undefined
  associated_type?: string | undefined
  user_id?: number | undefined
  user_type?: string | undefined
  username?: string | undefined
  action?: 'create' | 'update' | 'destroy' | undefined
  audited_changes?: { [x: string]: unknown } | undefined
  version?: number | undefined
  comment?: (string | null) | undefined
  request_uuid?: string | undefined
  created_at?: number | undefined
  remote_address?: (string | null) | undefined
  location?: (string | null) | undefined
}
type AgentBotCreateUpdatePayload = {
  name?: string | undefined
  description?: string | undefined
  outgoing_url?: string | undefined
  avatar?: File | undefined
  avatar_url?: string | undefined
  bot_type?: number | undefined
  bot_config?: { [x: string]: unknown } | undefined
}
type Agent = {
  id?: number | undefined
  account_id?: number | undefined
  availability_status?: 'online' | 'busy' | 'offline' | undefined
  auto_offline?: boolean | undefined
  confirmed?: boolean | undefined
  email?: string | undefined
  available_name?: string | undefined
  name?: string | undefined
  role?: 'agent' | 'administrator' | undefined
  thumbnail?: string | undefined
  custom_role_id?: (number | null) | undefined
}
type AgentCreatePayload = {
  name: string
  email: string
  role: 'agent' | 'administrator'
  availability?: 'online' | 'busy' | 'offline' | undefined
  auto_offline?: boolean | undefined
}
type AgentUpdatePayload = {
  role: 'agent' | 'administrator'
  availability?: 'online' | 'busy' | 'offline' | undefined
  auto_offline?: boolean | undefined
}
type CannedResponse = {
  id?: number | undefined
  account_id?: number | undefined
  short_code?: string | undefined
  content?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type CannedResponseCreateUpdatePayload = {
  content?: string | undefined
  short_code?: string | undefined
}
type CustomAttribute = {
  id?: number | undefined
  attribute_display_name?: string | undefined
  attribute_display_type?: string | undefined
  attribute_description?: string | undefined
  attribute_key?: string | undefined
  regex_pattern?: string | undefined
  regex_cue?: string | undefined
  attribute_values?: string | undefined
  attribute_model?: string | undefined
  default_value?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type CustomAttributeCreateUpdatePayload = {
  attribute_display_name?: string | undefined
  attribute_display_type?: number | undefined
  attribute_description?: string | undefined
  attribute_key?: string | undefined
  attribute_values?: string[] | undefined
  attribute_model?: number | undefined
  regex_pattern?: string | undefined
  regex_cue?: string | undefined
}
type ContactMeta = { count?: number | undefined; current_page?: string | number | undefined }
type ContactInbox = {
  source_id?: string | undefined
  inbox?:
    | {
        id?: number | undefined
        avatar_url?: string | undefined
        channel_id?: number | undefined
        name?: string | undefined
        channel_type?: string | undefined
        provider?: (string | null) | undefined
      }
    | undefined
}
type ContactListItem = {
  additional_attributes?:
    | {
        city?: string | undefined
        country?: string | undefined
        country_code?: (string | null) | undefined
        created_at_ip?: string | undefined
      }
    | undefined
  availability_status?: 'online' | 'offline' | undefined
  email?: (string | null) | undefined
  id?: number | undefined
  name?: string | undefined
  phone_number?: (string | null) | undefined
  blocked?: boolean | undefined
  identifier?: (string | null) | undefined
  thumbnail?: string | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
  last_activity_at?: (number | null) | undefined
  created_at?: number | undefined
  contact_inboxes?: ContactInbox[] | undefined
}
type ContactsListResponse = {
  meta?: ContactMeta | undefined
  payload?: ContactListItem[] | undefined
}
type ContactCreatePayload = {
  inbox_id: number
  name?: string | undefined
  email?: string | undefined
  blocked?: boolean | undefined
  phone_number?: string | undefined
  avatar?: File | undefined
  avatar_url?: string | undefined
  identifier?: string | undefined
  additional_attributes?: { [x: string]: unknown } | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
}
type InboxContact = {
  id?: number | undefined
  avatar_url?: string | undefined
  channel_id?: number | undefined
  name?: string | undefined
  channel_type?: string | undefined
  provider?: string | undefined
}
type ContactInboxes = { source_id?: string | undefined; inbox?: InboxContact | undefined }
type ExtendedContact = {
  payload?:
    | {
        additional_attributes?: { [x: string]: unknown } | undefined
        availability_status?: string | undefined
        email?: string | undefined
        id?: number | undefined
        name?: string | undefined
        phone_number?: string | undefined
        blocked?: boolean | undefined
        identifier?: string | undefined
        thumbnail?: string | undefined
        custom_attributes?: { [x: string]: unknown } | undefined
        last_activity_at?: number | undefined
        created_at?: number | undefined
        contact_inboxes?: ContactInboxes[] | undefined
      }[]
    | undefined
  id?: number | undefined
  availability_status?: 'online' | 'offline' | undefined
}
type ContactShowResponse = { payload?: ContactListItem | undefined }
type ContactUpdatePayload = {
  name?: string | undefined
  email?: string | undefined
  blocked?: boolean | undefined
  phone_number?: string | undefined
  avatar?: File | undefined
  avatar_url?: string | undefined
  identifier?: string | undefined
  additional_attributes?: { [x: string]: unknown } | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
}
type ContactBase = {
  id?: number | undefined
  payload?:
    | {
        additional_attributes?: { [x: string]: unknown } | undefined
        availability_status?: string | undefined
        email?: string | undefined
        id?: number | undefined
        name?: string | undefined
        phone_number?: string | undefined
        blocked?: boolean | undefined
        identifier?: string | undefined
        thumbnail?: string | undefined
        custom_attributes?: { [x: string]: unknown } | undefined
        last_activity_at?: number | undefined
        created_at?: number | undefined
        contact_inboxes?: ContactInboxes[] | undefined
      }[]
    | undefined
}
type Message = {
  id?: number | undefined
  content?: string | undefined
  account_id?: number | undefined
  inbox_id?: number | undefined
  conversation_id?: number | undefined
  message_type?: 0 | 1 | 2 | 3 | undefined
  created_at?: number | undefined
  updated_at?: number | string | undefined
  private?: boolean | undefined
  status?: 'sent' | 'delivered' | 'read' | 'failed' | null | undefined
  source_id?: (string | null) | undefined
  content_type?:
    | 'text'
    | 'input_text'
    | 'input_textarea'
    | 'input_email'
    | 'input_select'
    | 'cards'
    | 'form'
    | 'article'
    | 'incoming_email'
    | 'input_csat'
    | 'integrations'
    | 'sticker'
    | 'voice_call'
    | null
    | undefined
  content_attributes?: { [x: string]: unknown } | undefined
  sender_type?: 'Contact' | 'User' | 'AgentBot' | 'Captain::Assistant' | null | undefined
  sender_id?: (number | null) | undefined
  external_source_ids?: { [x: string]: unknown } | undefined
  additional_attributes?: { [x: string]: unknown } | undefined
  processed_message_content?: (string | null) | undefined
  sentiment?: ({ [x: string]: unknown } | null) | undefined
  conversation?: ({ [x: string]: unknown } | null) | undefined
  attachment?: ({ [x: string]: unknown } | null) | undefined
  sender?: { [x: string]: unknown } | undefined
}
type ContactConversationsResponse = {
  payload?:
    | {
        id?: number | undefined
        messages?: Message[] | undefined
        account_id?: number | undefined
        uuid?: string | undefined
        additional_attributes?: { [x: string]: unknown } | undefined
        agent_last_seen_at?: number | undefined
        assignee_last_seen_at?: number | undefined
        can_reply?: boolean | undefined
        contact_last_seen_at?: number | undefined
        custom_attributes?: { [x: string]: unknown } | undefined
        inbox_id?: number | undefined
        labels?: string[] | undefined
        muted?: boolean | undefined
        snoozed_until?: (number | null) | undefined
        status?: 'open' | 'resolved' | 'pending' | undefined
        created_at?: number | undefined
        updated_at?: number | undefined
        timestamp?: number | undefined
        first_reply_created_at?: (number | null) | undefined
        unread_count?: number | undefined
        last_non_activity_message?: Message | ({ [x: string]: unknown } | null) | undefined
        last_activity_at?: number | undefined
        priority?: (string | null) | undefined
        waiting_since?: (number | null) | undefined
        sla_policy_id?: (number | null) | undefined
        applied_sla?: { [x: string]: unknown } | undefined
        sla_events?: { [x: string]: unknown }[] | undefined
        meta?:
          | {
              sender?:
                | {
                    additional_attributes?: { [x: string]: unknown } | undefined
                    availability_status?: string | undefined
                    email?: (string | null) | undefined
                    id?: number | undefined
                    name?: string | undefined
                    phone_number?: (string | null) | undefined
                    blocked?: boolean | undefined
                    identifier?: (string | null) | undefined
                    thumbnail?: (string | null) | undefined
                    custom_attributes?: { [x: string]: unknown } | undefined
                    last_activity_at?: number | undefined
                    created_at?: number | undefined
                  }
                | undefined
              channel?: string | undefined
              assignee?: User | undefined
              hmac_verified?: boolean | undefined
            }
          | undefined
      }[]
    | undefined
}
type ContactLabels = { payload?: string[] | undefined }
type ContactableInboxesResponse = { payload?: ContactInbox[] | undefined }
type AutomationRuleItem = {
  id?: number | undefined
  account_id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  event_name?: 'conversation_created' | 'conversation_updated' | 'message_created' | undefined
  conditions?:
    | {
        values?: string[] | undefined
        attribute_key?: string | undefined
        query_operator?: string | undefined
        filter_operator?: string | undefined
      }[]
    | undefined
  actions?: { action_name?: string | undefined; action_params?: string[] | undefined }[] | undefined
  created_on?: number | undefined
  active?: boolean | undefined
}
type AutomationRule = {
  payload?:
    | AutomationRuleItem[]
    | {
        id?: number | undefined
        account_id?: number | undefined
        name?: string | undefined
        description?: string | undefined
        event_name?: 'conversation_created' | 'conversation_updated' | 'message_created' | undefined
        conditions?:
          | {
              values?: string[] | undefined
              attribute_key?: string | undefined
              query_operator?: string | undefined
              filter_operator?: string | undefined
            }[]
          | undefined
        actions?:
          | { action_name?: string | undefined; action_params?: string[] | undefined }[]
          | undefined
        created_on?: number | undefined
        active?: boolean | undefined
      }
    | undefined
}
type AutomationRuleCreateUpdatePayload = {
  name?: string | undefined
  description?: string | undefined
  event_name?:
    | 'conversation_created'
    | 'conversation_updated'
    | 'conversation_resolved'
    | 'message_created'
    | undefined
  active?: boolean | undefined
  actions?: { [x: string]: unknown }[] | undefined
  conditions?: { [x: string]: unknown }[] | undefined
}
type PortalCreateUpdatePayload = {
  color?: string | undefined
  custom_domain?: string | undefined
  header_text?: string | undefined
  homepage_link?: string | undefined
  name?: string | undefined
  page_title?: string | undefined
  slug?: string | undefined
  archived?: boolean | undefined
  config?: { [x: string]: unknown } | undefined
}
type PortalConfig = {
  allowed_locales?:
    | {
        code?: string | undefined
        articles_count?: number | undefined
        categories_count?: number | undefined
      }[]
    | undefined
}
type Inbox = {
  id?: number | undefined
  name?: string | undefined
  website_url?: (string | null) | undefined
  page_id?: (string | null) | undefined
  instagram_id?: (string | null) | undefined
  business_id?: (string | null) | undefined
  provider_name?: (string | null) | undefined
  profile_id?: (string | null) | undefined
  line_channel_id?: (string | null) | undefined
  email?: (string | null) | undefined
  bot_name?: (string | null) | undefined
  inbox_identifier?: (string | null) | undefined
  channel_type?: string | undefined
  avatar_url?: string | undefined
  widget_color?: (string | null) | undefined
  website_token?: (string | null) | undefined
  enable_auto_assignment?: boolean | undefined
  web_widget_script?: (string | null) | undefined
  welcome_title?: (string | null) | undefined
  welcome_tagline?: (string | null) | undefined
  greeting_enabled?: boolean | undefined
  greeting_message?: (string | null) | undefined
  channel_id?: number | undefined
  working_hours_enabled?: boolean | undefined
  enable_email_collect?: boolean | undefined
  csat_survey_enabled?: boolean | undefined
  auto_assignment_config?: { [x: string]: unknown } | undefined
  out_of_office_message?: (string | null) | undefined
  working_hours?:
    | {
        day_of_week?: number | undefined
        closed_all_day?: boolean | undefined
        open_hour?: (number | null) | undefined
        open_minutes?: (number | null) | undefined
        close_hour?: (number | null) | undefined
        close_minutes?: (number | null) | undefined
        open_all_day?: boolean | undefined
      }[]
    | undefined
  timezone?: string | undefined
  callback_webhook_url?: (string | null) | undefined
  allow_messages_after_resolved?: boolean | undefined
  lock_to_single_conversation?: boolean | undefined
  sender_name_type?: string | undefined
  business_name?: (string | null) | undefined
  branded_email_layout?: (string | null) | undefined
  hmac_mandatory?: (boolean | null) | undefined
  selected_feature_flags?: (string[] | null) | undefined
  reply_time?: (string | null) | undefined
  messaging_service_sid?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  medium?: string | undefined
  provider?: (string | null) | undefined
}
type PortalLogo = {
  id?: number | undefined
  portal_id?: number | undefined
  file_type?: string | undefined
  account_id?: number | undefined
  file_url?: string | undefined
  blob_id?: number | undefined
  filename?: string | undefined
}
type PortalMeta = {
  all_articles_count?: number | undefined
  archived_articles_count?: (number | null) | undefined
  published_count?: (number | null) | undefined
  draft_articles_count?: (number | null) | undefined
  categories_count?: number | undefined
  default_locale?: string | undefined
}
type PortalItem = {
  id?: number | undefined
  archived?: boolean | undefined
  color?: string | undefined
  config?: PortalConfig | undefined
  custom_domain?: string | undefined
  header_text?: string | undefined
  homepage_link?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  page_title?: string | undefined
  account_id?: number | undefined
  inbox?: Inbox | undefined
  logo?: PortalLogo | undefined
  meta?: PortalMeta | undefined
}
type Portal = { payload?: PortalItem[] | undefined }
type PortalSingle = { payload?: PortalItem | undefined }
type CategoryCreateUpdatePayload = {
  name?: string | undefined
  description?: string | undefined
  position?: number | undefined
  slug?: string | undefined
  locale?: string | undefined
  icon?: string | undefined
  parent_category_id?: number | undefined
  associated_category_id?: number | undefined
}
type Category = {
  id?: number | undefined
  description?: string | undefined
  locale?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  position?: number | undefined
  portal_id?: number | undefined
  account_id?: number | undefined
  associated_category_id?: number | undefined
  parent_category_id?: number | undefined
}
type ArticleCreateUpdatePayload = {
  title?: string | undefined
  slug?: string | undefined
  position?: number | undefined
  content?: string | undefined
  description?: string | undefined
  category_id?: number | undefined
  author_id?: number | undefined
  associated_article_id?: number | undefined
  status?: number | undefined
  locale?: string | undefined
  meta?: { [x: string]: unknown } | undefined
}
type Article = {
  id?: number | undefined
  content?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  position?: number | undefined
  status?: 'draft' | 'published' | 'archived' | undefined
  title?: string | undefined
  slug?: string | undefined
  views?: number | undefined
  portal_id?: number | undefined
  account_id?: number | undefined
  author_id?: number | undefined
  category_id?: number | undefined
  folder_id?: number | undefined
  associated_article_id?: number | undefined
}
type ConversationList = {
  data?:
    | {
        meta?:
          | {
              mine_count?: number | undefined
              unassigned_count?: number | undefined
              assigned_count?: number | undefined
              all_count?: number | undefined
            }
          | undefined
        payload?:
          | {
              id?: number | undefined
              messages?: Message[] | undefined
              account_id?: number | undefined
              uuid?: string | undefined
              additional_attributes?: { [x: string]: unknown } | undefined
              agent_last_seen_at?: number | undefined
              assignee_last_seen_at?: number | undefined
              can_reply?: boolean | undefined
              contact_last_seen_at?: number | undefined
              custom_attributes?: { [x: string]: unknown } | undefined
              inbox_id?: number | undefined
              labels?: string[] | undefined
              muted?: boolean | undefined
              snoozed_until?: (number | null) | undefined
              status?: 'open' | 'resolved' | 'pending' | undefined
              created_at?: number | undefined
              updated_at?: number | undefined
              timestamp?: number | undefined
              first_reply_created_at?: (number | null) | undefined
              unread_count?: number | undefined
              last_non_activity_message?: Message | ({ [x: string]: unknown } | null) | undefined
              last_activity_at?: number | undefined
              priority?: (string | null) | undefined
              waiting_since?: (number | null) | undefined
              sla_policy_id?: (number | null) | undefined
              applied_sla?: { [x: string]: unknown } | undefined
              sla_events?: { [x: string]: unknown }[] | undefined
              meta?:
                | {
                    sender?:
                      | {
                          additional_attributes?: { [x: string]: unknown } | undefined
                          availability_status?: string | undefined
                          email?: (string | null) | undefined
                          id?: number | undefined
                          name?: string | undefined
                          phone_number?: (string | null) | undefined
                          blocked?: boolean | undefined
                          identifier?: (string | null) | undefined
                          thumbnail?: (string | null) | undefined
                          custom_attributes?: { [x: string]: unknown } | undefined
                          last_activity_at?: number | undefined
                          created_at?: number | undefined
                        }
                      | undefined
                    channel?: string | undefined
                    assignee?: User | undefined
                    hmac_verified?: boolean | undefined
                  }
                | undefined
            }[]
          | undefined
      }
    | undefined
}
type ConversationCreatePayload = {
  source_id: string
  inbox_id?: number | undefined
  contact_id?: number | undefined
  additional_attributes?: { [x: string]: unknown } | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
  status?: 'open' | 'resolved' | 'pending' | undefined
  assignee_id?: number | undefined
  team_id?: number | undefined
  snoozed_until?: string | undefined
  message?:
    | {
        content: string
        template_params?:
          | {
              name?: string | undefined
              category?: string | undefined
              language?: string | undefined
              processed_params?: { [x: string]: unknown } | undefined
            }
          | undefined
      }
    | undefined
}
type ConversationShow = {
  id?: number | undefined
  messages?: Message[] | undefined
  account_id?: number | undefined
  uuid?: string | undefined
  additional_attributes?: { [x: string]: unknown } | undefined
  agent_last_seen_at?: number | undefined
  assignee_last_seen_at?: number | undefined
  can_reply?: boolean | undefined
  contact_last_seen_at?: number | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
  inbox_id?: number | undefined
  labels?: string[] | undefined
  muted?: boolean | undefined
  snoozed_until?: (number | null) | undefined
  status?: 'open' | 'resolved' | 'pending' | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  timestamp?: number | undefined
  first_reply_created_at?: (number | null) | undefined
  unread_count?: number | undefined
  last_non_activity_message?: Message | ({ [x: string]: unknown } | null) | undefined
  last_activity_at?: number | undefined
  priority?: (string | null) | undefined
  waiting_since?: (number | null) | undefined
  sla_policy_id?: (number | null) | undefined
  applied_sla?: { [x: string]: unknown } | undefined
  sla_events?: { [x: string]: unknown }[] | undefined
  meta?:
    | {
        sender?:
          | {
              additional_attributes?: { [x: string]: unknown } | undefined
              availability_status?: string | undefined
              email?: (string | null) | undefined
              id?: number | undefined
              name?: string | undefined
              phone_number?: (string | null) | undefined
              blocked?: boolean | undefined
              identifier?: (string | null) | undefined
              thumbnail?: (string | null) | undefined
              custom_attributes?: { [x: string]: unknown } | undefined
              last_activity_at?: number | undefined
              created_at?: number | undefined
            }
          | undefined
        channel?: string | undefined
        assignee?: User | undefined
        hmac_verified?: boolean | undefined
      }
    | undefined
}
type Conversation = {
  id?: number | undefined
  messages?: Message[] | undefined
  account_id?: number | undefined
  uuid?: string | undefined
  additional_attributes?: { [x: string]: unknown } | undefined
  agent_last_seen_at?: number | undefined
  assignee_last_seen_at?: number | undefined
  can_reply?: boolean | undefined
  contact_last_seen_at?: number | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
  inbox_id?: number | undefined
  labels?: string[] | undefined
  muted?: boolean | undefined
  snoozed_until?: (number | null) | undefined
  status?: 'open' | 'resolved' | 'pending' | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  timestamp?: number | undefined
  first_reply_created_at?: (number | null) | undefined
  unread_count?: number | undefined
  last_non_activity_message?: Message | ({ [x: string]: unknown } | null) | undefined
  last_activity_at?: number | undefined
  priority?: (string | null) | undefined
  waiting_since?: (number | null) | undefined
  sla_policy_id?: (number | null) | undefined
  applied_sla?: { [x: string]: unknown } | undefined
  sla_events?: { [x: string]: unknown }[] | undefined
}
type ConversationLabels = { payload?: string[] | undefined }
type ReportingEvent = {
  id?: number | undefined
  name?: string | undefined
  value?: number | undefined
  value_in_business_hours?: number | undefined
  event_start_time?: string | undefined
  event_end_time?: string | undefined
  account_id?: number | undefined
  conversation_id?: (number | null) | undefined
  inbox_id?: (number | null) | undefined
  user_id?: (number | null) | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type BrandedEmailLayout = { branded_email_layout?: (string | null) | undefined }
type AccountBrandedEmailLayoutPayload = { branded_email_layout?: (string | null) | undefined }
type InboxCreateWebWidgetChannelPayload = {
  type: 'web_widget'
  website_url: string
  welcome_title?: string | undefined
  welcome_tagline?: string | undefined
  widget_color?: string | undefined
  reply_time?: 'in_a_few_minutes' | 'in_a_few_hours' | 'in_a_day' | undefined
  pre_chat_form_enabled?: boolean | undefined
  pre_chat_form_options?: { [x: string]: unknown } | undefined
  continuity_via_email?: boolean | undefined
  hmac_mandatory?: boolean | undefined
  allowed_domains?: string | undefined
  selected_feature_flags?:
    | (
        | 'attachments'
        | 'emoji_picker'
        | 'end_conversation'
        | 'use_inbox_avatar_for_bot'
        | 'allow_mobile_webview'
      )[]
    | undefined
}
type InboxCreateApiChannelPayload = {
  type: 'api'
  webhook_url?: string | undefined
  hmac_mandatory?: boolean | undefined
  additional_attributes?: { [x: string]: unknown } | undefined
}
type InboxCreateEmailChannelPayload = {
  type: 'email'
  email: string
  imap_enabled?: boolean | undefined
  imap_login?: string | undefined
  imap_password?: string | undefined
  imap_address?: string | undefined
  imap_port?: number | undefined
  imap_enable_ssl?: boolean | undefined
  imap_authentication?: string | undefined
  smtp_enabled?: boolean | undefined
  smtp_login?: string | undefined
  smtp_password?: string | undefined
  smtp_address?: string | undefined
  smtp_port?: number | undefined
  smtp_domain?: string | undefined
  smtp_enable_starttls_auto?: boolean | undefined
  smtp_enable_ssl_tls?: boolean | undefined
  smtp_openssl_verify_mode?: string | undefined
  smtp_authentication?: string | undefined
  provider?: string | undefined
  verified_for_sending?: boolean | undefined
}
type InboxCreateLineChannelPayload = {
  type: 'line'
  line_channel_id: string
  line_channel_secret: string
  line_channel_token: string
}
type InboxCreateTelegramChannelPayload = { type: 'telegram'; bot_token: string }
type InboxCreateWhatsappChannelPayload =
  | {
      type: 'whatsapp'
      phone_number: string
      provider: 'whatsapp_cloud'
      provider_config: {
        api_key: string
        phone_number_id: string
        business_account_id: string
        app_secret: string
      }
    }
  | {
      type: 'whatsapp'
      phone_number: string
      provider?: 'default' | undefined
      provider_config: { api_key: string }
    }
type InboxCreateSmsChannelPayload = {
  type: 'sms'
  phone_number: string
  provider_config: {
    account_id: string
    application_id: string
    client_id: string
    client_secret: string
  }
}
type InboxCreatePayload = {
  name?: string | undefined
  avatar?: File | undefined
  greeting_enabled?: boolean | undefined
  greeting_message?: string | undefined
  enable_email_collect?: boolean | undefined
  csat_survey_enabled?: boolean | undefined
  csat_config?:
    | {
        display_type?: 'emoji' | 'star' | undefined
        message?: string | undefined
        button_text?: string | undefined
        language?: string | undefined
        survey_rules?: { operator?: string | undefined; values?: string[] | undefined } | undefined
      }
    | undefined
  enable_auto_assignment?: boolean | undefined
  working_hours_enabled?: boolean | undefined
  out_of_office_message?: string | undefined
  timezone?: string | undefined
  allow_messages_after_resolved?: boolean | undefined
  lock_to_single_conversation?: boolean | undefined
  portal_id?: number | undefined
  sender_name_type?: 'friendly' | 'professional' | undefined
  business_name?: string | undefined
  channel?:
    | InboxCreateWebWidgetChannelPayload
    | InboxCreateApiChannelPayload
    | InboxCreateEmailChannelPayload
    | InboxCreateLineChannelPayload
    | InboxCreateTelegramChannelPayload
    | InboxCreateWhatsappChannelPayload
    | InboxCreateSmsChannelPayload
    | undefined
}
type InboxUpdateWebWidgetChannelPayload = {
  website_url?: string | undefined
  welcome_title?: string | undefined
  welcome_tagline?: string | undefined
  widget_color?: string | undefined
  reply_time?: 'in_a_few_minutes' | 'in_a_few_hours' | 'in_a_day' | undefined
  pre_chat_form_enabled?: boolean | undefined
  pre_chat_form_options?: { [x: string]: unknown } | undefined
  continuity_via_email?: boolean | undefined
  hmac_mandatory?: boolean | undefined
  allowed_domains?: string | undefined
  selected_feature_flags?:
    | (
        | 'attachments'
        | 'emoji_picker'
        | 'end_conversation'
        | 'use_inbox_avatar_for_bot'
        | 'allow_mobile_webview'
      )[]
    | undefined
}
type InboxUpdateApiChannelPayload = {
  webhook_url?: string | undefined
  hmac_mandatory?: boolean | undefined
  additional_attributes?: { [x: string]: unknown } | undefined
}
type InboxUpdateEmailChannelPayload = {
  email?: string | undefined
  imap_enabled?: boolean | undefined
  imap_login?: string | undefined
  imap_password?: string | undefined
  imap_address?: string | undefined
  imap_port?: number | undefined
  imap_enable_ssl?: boolean | undefined
  imap_authentication?: string | undefined
  smtp_enabled?: boolean | undefined
  smtp_login?: string | undefined
  smtp_password?: string | undefined
  smtp_address?: string | undefined
  smtp_port?: number | undefined
  smtp_domain?: string | undefined
  smtp_enable_starttls_auto?: boolean | undefined
  smtp_enable_ssl_tls?: boolean | undefined
  smtp_openssl_verify_mode?: string | undefined
  smtp_authentication?: string | undefined
  provider?: string | undefined
  verified_for_sending?: boolean | undefined
}
type InboxUpdateLineChannelPayload = {
  line_channel_id?: string | undefined
  line_channel_secret?: string | undefined
  line_channel_token?: string | undefined
}
type InboxUpdateTelegramChannelPayload = { bot_token?: string | undefined }
type InboxUpdateWhatsappChannelPayload = {
  phone_number?: string | undefined
  provider?: 'whatsapp_cloud' | 'default' | undefined
  provider_config?:
    | {
        api_key?: string | undefined
        phone_number_id?: string | undefined
        business_account_id?: string | undefined
        app_secret?: string | undefined
      }
    | undefined
}
type InboxUpdateSmsChannelPayload = {
  phone_number?: string | undefined
  provider_config?: { [x: string]: unknown } | undefined
}
type InboxUpdatePayload = {
  name?: string | undefined
  avatar?: File | undefined
  greeting_enabled?: boolean | undefined
  greeting_message?: string | undefined
  enable_email_collect?: boolean | undefined
  csat_survey_enabled?: boolean | undefined
  csat_config?:
    | {
        display_type?: 'emoji' | 'star' | undefined
        message?: string | undefined
        button_text?: string | undefined
        language?: string | undefined
        survey_rules?: { operator?: string | undefined; values?: string[] | undefined } | undefined
      }
    | undefined
  enable_auto_assignment?: boolean | undefined
  working_hours_enabled?: boolean | undefined
  out_of_office_message?: string | undefined
  timezone?: string | undefined
  allow_messages_after_resolved?: boolean | undefined
  lock_to_single_conversation?: boolean | undefined
  portal_id?: number | undefined
  sender_name_type?: 'friendly' | 'professional' | undefined
  business_name?: string | undefined
  branded_email_layout?: (string | null) | undefined
  channel?:
    | InboxUpdateWebWidgetChannelPayload
    | InboxUpdateApiChannelPayload
    | InboxUpdateEmailChannelPayload
    | InboxUpdateLineChannelPayload
    | InboxUpdateTelegramChannelPayload
    | InboxUpdateWhatsappChannelPayload
    | InboxUpdateSmsChannelPayload
    | undefined
}
type Label = {
  id?: number | undefined
  title?: string | undefined
  description?: string | undefined
  color?: string | undefined
  show_on_sidebar?: boolean | undefined
}
type LabelCreateUpdatePayload = {
  title?: string | undefined
  description?: string | undefined
  color?: string | undefined
  show_on_sidebar?: boolean | undefined
}
type Contact = {
  payload?:
    | {
        additional_attributes?: { [x: string]: unknown } | undefined
        availability_status?: string | undefined
        email?: string | undefined
        id?: number | undefined
        name?: string | undefined
        phone_number?: string | undefined
        blocked?: boolean | undefined
        identifier?: string | undefined
        thumbnail?: string | undefined
        custom_attributes?: { [x: string]: unknown } | undefined
        last_activity_at?: number | undefined
        created_at?: number | undefined
        contact_inboxes?: ContactInboxes[] | undefined
      }[]
    | undefined
}
type ConversationMessageCreatePayload = {
  content: string
  message_type?: 'outgoing' | 'incoming' | undefined
  private?: boolean | undefined
  content_type?: 'text' | 'input_email' | 'cards' | 'input_select' | 'form' | 'article' | undefined
  content_attributes?: { [x: string]: unknown } | undefined
  source_id?: string | undefined
  sender_type?: 'AgentBot' | undefined
  sender_id?: number | undefined
  echo_id?: string | undefined
  campaign_id?: number | undefined
  template_params?:
    | {
        name: string
        category: 'UTILITY' | 'MARKETING' | 'SHIPPING_UPDATE' | 'TICKET_UPDATE' | 'ISSUE_RESOLUTION'
        language: string
        content_mode?: 'raw_template' | 'rendered' | undefined
        processed_params: {
          body?: { [x: string]: string } | undefined
          header?:
            | {
                media_url?: string | undefined
                media_type?: 'image' | 'video' | 'document' | undefined
              }
            | undefined
          buttons?:
            | { type?: 'url' | 'copy_code' | undefined; parameter?: string | undefined }[]
            | undefined
        }
      }
    | undefined
}
type IntegrationsApp = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  hook_type?: string | undefined
  enabled?: boolean | undefined
  allow_multiple_hooks?: boolean | undefined
  hooks?: { [x: string]: unknown }[] | undefined
}
type IntegrationsHookCreatePayload = {
  app_id?: number | undefined
  inbox_id?: number | undefined
  status?: number | undefined
  settings?: { [x: string]: unknown } | undefined
}
type IntegrationsHook = {
  id?: string | undefined
  app_id?: string | undefined
  inbox_id?: string | undefined
  account_id?: string | undefined
  status?: boolean | undefined
  hook_type?: boolean | undefined
  settings?: { [x: string]: unknown } | undefined
}
type IntegrationsHookUpdatePayload = {
  status?: number | undefined
  settings?: { [x: string]: unknown } | undefined
}
type Team = {
  id?: number | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  allow_auto_assign?: boolean | undefined
  icon?: string | undefined
  icon_color?: string | undefined
  account_id?: number | undefined
  is_member?: boolean | undefined
}
type TeamCreateUpdatePayload = {
  name?: string | undefined
  description?: string | undefined
  allow_auto_assign?: boolean | undefined
  icon?: string | undefined
  icon_color?: string | undefined
}
type CustomFilter = {
  id?: number | undefined
  name?: string | undefined
  type?: 'conversation' | 'contact' | 'report' | undefined
  query?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type CustomFilterCreateUpdatePayload = {
  name?: string | undefined
  type?: 'conversation' | 'contact' | 'report' | undefined
  query?: { [x: string]: unknown } | undefined
}
type Webhook = {
  id?: number | undefined
  url?: string | undefined
  name?: string | undefined
  subscriptions?:
    | (
        | 'conversation_created'
        | 'conversation_status_changed'
        | 'conversation_updated'
        | 'contact_created'
        | 'contact_updated'
        | 'message_created'
        | 'message_updated'
        | 'webwidget_triggered'
        | 'conversation_typing_on'
        | 'conversation_typing_off'
      )[]
    | undefined
  secret?: (string | null) | undefined
  account_id?: number | undefined
}
type WebhookCreateUpdatePayload = {
  url?: string | undefined
  name?: string | undefined
  subscriptions?:
    | (
        | 'conversation_created'
        | 'conversation_status_changed'
        | 'conversation_updated'
        | 'message_created'
        | 'message_updated'
        | 'contact_created'
        | 'contact_updated'
        | 'webwidget_triggered'
        | 'conversation_typing_on'
        | 'conversation_typing_off'
      )[]
    | undefined
}
type ReportingEventMeta = {
  count?: number | undefined
  current_page?: number | undefined
  total_pages?: number | undefined
}
type ReportingEventsListResponse = {
  meta?: ReportingEventMeta | undefined
  payload?: ReportingEvent[] | undefined
}
type AccountSummary = {
  avg_first_response_time?: string | undefined
  avg_resolution_time?: string | undefined
  conversations_count?: number | undefined
  incoming_messages_count?: number | undefined
  outgoing_messages_count?: number | undefined
  resolutions_count?: number | undefined
  previous?:
    | {
        avg_first_response_time?: string | undefined
        avg_resolution_time?: string | undefined
        conversations_count?: number | undefined
        incoming_messages_count?: number | undefined
        outgoing_messages_count?: number | undefined
        resolutions_count?: number | undefined
      }
    | undefined
}
type AgentConversationMetrics = {
  id?: number | undefined
  name?: string | undefined
  email?: string | undefined
  thumbnail?: string | undefined
  availability?: string | undefined
  metric?: { open?: number | undefined; unattended?: number | undefined } | undefined
}
type ChannelSummary = {
  [x: string]: {
    open?: number | undefined
    resolved?: number | undefined
    pending?: number | undefined
    snoozed?: number | undefined
    total?: number | undefined
  }
}
type InboxSummary = {
  id?: number | undefined
  conversations_count?: number | undefined
  resolved_conversations_count?: number | undefined
  avg_resolution_time?: (number | null) | undefined
  avg_first_response_time?: (number | null) | undefined
  avg_reply_time?: (number | null) | undefined
}[]
type AgentSummary = {
  id?: number | undefined
  conversations_count?: number | undefined
  resolved_conversations_count?: number | undefined
  avg_resolution_time?: (number | null) | undefined
  avg_first_response_time?: (number | null) | undefined
  avg_reply_time?: (number | null) | undefined
}[]
type TeamSummary = {
  id?: number | undefined
  conversations_count?: number | undefined
  resolved_conversations_count?: number | undefined
  avg_resolution_time?: (number | null) | undefined
  avg_first_response_time?: (number | null) | undefined
  avg_reply_time?: (number | null) | undefined
}[]
type FirstResponseTimeDistribution = {
  [x: string]: {
    '0-1h'?: number | undefined
    '1-4h'?: number | undefined
    '4-8h'?: number | undefined
    '8-24h'?: number | undefined
    '24h+'?: number | undefined
  }
}
type InboxLabelMatrix = {
  inboxes?: { id?: number | undefined; name?: string | undefined }[] | undefined
  labels?: { id?: number | undefined; title?: string | undefined }[] | undefined
  matrix?: number[][] | undefined
}
type OutgoingMessagesCount = {
  id?: number | undefined
  name?: string | undefined
  outgoing_messages_count?: number | undefined
}[]
type ContactDetail = {
  additional_attributes?:
    | {
        city?: string | undefined
        country?: string | undefined
        country_code?: (string | null) | undefined
        created_at_ip?: string | undefined
      }
    | undefined
  custom_attributes?: { [x: string]: unknown } | undefined
  email?: string | undefined
  id?: number | undefined
  identifier?: (string | null) | undefined
  name?: string | undefined
  phone_number?: (string | null) | undefined
  thumbnail?: string | undefined
  blocked?: boolean | undefined
  type?: 'contact' | undefined
}
type ConversationMeta = {
  labels?: string[] | undefined
  additional_attributes?:
    | {
        browser?:
          | {
              device_name?: string | undefined
              browser_name?: string | undefined
              platform_name?: string | undefined
              browser_version?: string | undefined
              platform_version?: string | undefined
            }
          | undefined
        referer?: string | undefined
        initiated_at?: { timestamp?: string | undefined } | undefined
        browser_language?: string | undefined
        conversation_language?: string | undefined
      }
    | undefined
  contact?: ContactDetail | undefined
  assignee?:
    | {
        id?: number | undefined
        account_id?: number | undefined
        availability_status?: 'online' | 'busy' | 'offline' | undefined
        auto_offline?: boolean | undefined
        confirmed?: boolean | undefined
        email?: string | undefined
        available_name?: string | undefined
        name?: string | undefined
        role?: 'agent' | 'administrator' | undefined
        thumbnail?: string | undefined
        custom_role_id?: (number | null) | undefined
      }
    | undefined
  agent_last_seen_at?: (string | null) | undefined
  assignee_last_seen_at?: (string | null) | undefined
}
type MessageDetailed = {
  id?: number | undefined
  content?: string | undefined
  inbox_id?: number | undefined
  conversation_id?: number | undefined
  message_type?: 0 | 1 | 2 | 3 | undefined
  content_type?:
    | 'text'
    | 'input_text'
    | 'input_textarea'
    | 'input_email'
    | 'input_select'
    | 'cards'
    | 'form'
    | 'article'
    | 'incoming_email'
    | 'input_csat'
    | 'integrations'
    | 'sticker'
    | 'voice_call'
    | undefined
  status?: 'sent' | 'delivered' | 'read' | 'failed' | undefined
  content_attributes?: { in_reply_to?: (string | null) | undefined } | undefined
  echo_id?: (string | null) | undefined
  created_at?: number | undefined
  private?: boolean | undefined
  source_id?: (string | null) | undefined
  sender?: ContactDetail | undefined
  attachments?:
    | {
        id?: number | undefined
        message_id?: number | undefined
        file_type?:
          | 'image'
          | 'video'
          | 'audio'
          | 'file'
          | 'location'
          | 'fallback'
          | 'share'
          | 'story_mention'
          | 'contact'
          | 'ig_reel'
          | undefined
        account_id?: number | undefined
        data_url?: string | undefined
        thumb_url?: string | undefined
        file_size?: number | undefined
      }[]
    | undefined
}
type ConversationMessages = {
  meta?: ConversationMeta | undefined
  payload?: MessageDetailed[] | undefined
}
type Campaign = {
  id?: number | undefined
  title?: string | undefined
  description?: (string | null) | undefined
  account_id?: number | undefined
  inbox?: Inbox | undefined
  sender?: { [x: string]: unknown } | undefined
  message?: string | undefined
  template_params?: ({ [x: string]: unknown } | null) | undefined
  campaign_status?: 'active' | 'processing' | 'completed' | undefined
  campaign_type?: 'ongoing' | 'one_off' | undefined
  enabled?: boolean | undefined
  scheduled_at?: number | undefined
  started_at?: (number | null) | undefined
  completed_at?: (number | null) | undefined
  audience?: ({ type?: string | undefined; id?: number | undefined }[] | null) | undefined
  trigger_rules?: { [x: string]: unknown } | undefined
  trigger_only_during_business_hours?: boolean | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type CampaignWhatsappTemplateParams = {
  name: string
  language: string
  namespace?: string | undefined
  category?: string | undefined
  processed_params?:
    | {
        body?: { [x: string]: string } | undefined
        header?: { [x: string]: unknown } | undefined
        footer?: { [x: string]: string } | undefined
        buttons?: { [x: string]: unknown }[] | undefined
      }
    | undefined
}
type CampaignCreatePayload = {
  campaign: {
    title?: string | undefined
    description?: (string | null) | undefined
    inbox_id?: number | undefined
    sender_id?: (number | null) | undefined
    message?: string | undefined
    enabled?: boolean | undefined
    scheduled_at?: string | undefined
    audience?: { type: 'Label'; id: number }[] | undefined
    trigger_rules?: { [x: string]: unknown } | undefined
    trigger_only_during_business_hours?: boolean | undefined
    template_params?: CampaignWhatsappTemplateParams | undefined
  }
}
type CampaignUpdatePayload = {
  campaign: {
    title?: string | undefined
    description?: (string | null) | undefined
    inbox_id?: number | undefined
    sender_id?: (number | null) | undefined
    message?: string | undefined
    enabled?: boolean | undefined
    scheduled_at?: string | undefined
    audience?: { type: 'Label'; id: number }[] | undefined
    trigger_rules?: { [x: string]: unknown } | undefined
    trigger_only_during_business_hours?: boolean | undefined
    template_params?: CampaignWhatsappTemplateParams | undefined
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/platform/api/v1/accounts': {
      $post:
        | {
            input: { json: AccountCreateUpdatePayload }
            output: PlatformAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/platform/api/v1/accounts/:account_id': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: PlatformAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number } } & { json: AccountCreateUpdatePayload }
            output: PlatformAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: AccountCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { account_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/platform/api/v1/accounts/:account_id/account_users': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: AccountUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: AccountUserCreateUpdatePayload }
            output: {
              account_id?: number | undefined
              user_id?: number | undefined
              role?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: AccountUserCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { account_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/platform/api/v1/agent_bots': {
      $get:
        | { input: {}; output: AgentBot[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BadRequestError; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: { json: PlatformAgentBotCreateUpdatePayload }
            output: AgentBot
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PlatformAgentBotCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/platform/api/v1/agent_bots/:id': {
      $get:
        | { input: { param: { id: number } }; output: AgentBot; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number } } & { json: PlatformAgentBotCreateUpdatePayload }
            output: AgentBot
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: PlatformAgentBotCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/platform/api/v1/users': {
      $post:
        | {
            input: { json: UserCreateUpdatePayload }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/platform/api/v1/users/:id': {
      $get:
        | { input: { param: { id: number } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number } } & { json: UserCreateUpdatePayload }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UserCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/platform/api/v1/users/:id/login': {
      $get:
        | {
            input: { param: { id: number } }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/platform/api/v1/users/:id/token': {
      $post:
        | {
            input: { param: { id: number } }
            output: {
              access_token?: string | undefined
              expiry?: (number | null) | undefined
              user?:
                | {
                    id?: number | undefined
                    name?: string | undefined
                    display_name?: string | undefined
                    email?: string | undefined
                    pubsub_token?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier': {
      $get:
        | {
            input: { param: { inbox_identifier: string } }
            output: PublicInbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_identifier: string } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { inbox_identifier: string } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts': {
      $post:
        | {
            input: { param: { inbox_identifier: string } } & {
              json: PublicContactCreateUpdatePayload
            }
            output: PublicContact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_identifier: string } } & {
              json: PublicContactCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier': {
      $get:
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } }
            output: PublicContact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } } & {
              json: PublicContactCreateUpdatePayload
            }
            output: PublicContactRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } } & {
              json: PublicContactCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations': {
      $post:
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } } & {
              query: { identifier_hash?: string | undefined }
            } & { json: PublicConversationCreatePayload }
            output: PublicConversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } } & {
              query: { identifier_hash?: string | undefined }
            } & { json: PublicConversationCreatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } } & {
              query: { identifier_hash?: string | undefined }
            }
            output: PublicConversation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_identifier: string; contact_identifier: string } } & {
              query: { identifier_hash?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id': {
      $get:
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: PublicConversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/toggle_status': {
      $post:
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: PublicConversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/toggle_typing': {
      $post:
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { typing_status: string; identifier_hash?: string | undefined } } & {
              json: { typing_status?: 'on' | 'off' | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { typing_status: string; identifier_hash?: string | undefined } } & {
              json: { typing_status?: 'on' | 'off' | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { typing_status: string; identifier_hash?: string | undefined } } & {
              json: { typing_status?: 'on' | 'off' | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/update_last_seen': {
      $post:
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/messages': {
      $post:
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } } & {
              json: PublicMessageCreatePayload
            }
            output: PublicMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } } & {
              json: PublicMessageCreatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: PublicMessage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
              }
            } & { query: { identifier_hash?: string | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/public/api/v1/inboxes/:inbox_identifier/contacts/:contact_identifier/conversations/:conversation_id/messages/:message_id': {
      $patch:
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
                message_id: number
              }
            } & { query: { identifier_hash?: string | undefined } } & {
              json: PublicMessageUpdatePayload
            }
            output: PublicMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                inbox_identifier: string
                contact_identifier: string
                conversation_id: number
                message_id: number
              }
            } & { query: { identifier_hash?: string | undefined } } & {
              json: PublicMessageUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/survey/responses/:conversation_uuid': {
      $get: {
        input: { param: { conversation_uuid: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/accounts/:account_id': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: AccountShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number } } & { json: AccountUpdatePayload } & {
              form: AccountUpdatePayload
            }
            output: AccountDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: AccountUpdatePayload } & {
              form: AccountUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number } } & { json: AccountUpdatePayload } & {
              form: AccountUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number } } & { json: AccountUpdatePayload } & {
              form: AccountUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/audit_logs': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                page?: number | undefined
                q?: string | undefined
                types?: string[] | undefined
                since?: number | undefined
                until?: number | undefined
                sort?: 'desc' | 'asc' | undefined
              }
            }
            output: {
              per_page?: number | undefined
              total_entries?: number | undefined
              current_page?: number | undefined
              audit_logs?: AuditLog[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                page?: number | undefined
                q?: string | undefined
                types?: string[] | undefined
                since?: number | undefined
                until?: number | undefined
                sort?: 'desc' | 'asc' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                page?: number | undefined
                q?: string | undefined
                types?: string[] | undefined
                since?: number | undefined
                until?: number | undefined
                sort?: 'desc' | 'asc' | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/agent_bots': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: AgentBot[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: AgentBotCreateUpdatePayload }
            output: AgentBot
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: AgentBotCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:account_id/agent_bots/:id': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: AgentBot
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number; id: number } } & {
              json: AgentBotCreateUpdatePayload
            }
            output: AgentBot
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } } & {
              json: AgentBotCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/agents': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: Agent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: AgentCreatePayload }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: AgentCreatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:account_id/agents/:id': {
      $patch:
        | {
            input: { param: { id: number; account_id: number } } & { json: AgentUpdatePayload }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } } & { json: AgentUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number; account_id: number } } & { json: AgentUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: number; account_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/canned_responses': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: CannedResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: CannedResponseCreateUpdatePayload }
            output: CannedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: CannedResponseCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:account_id/canned_responses/:id': {
      $patch:
        | {
            input: { param: { id: number; account_id: number } } & {
              json: CannedResponseCreateUpdatePayload
            }
            output: CannedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } } & {
              json: CannedResponseCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number; account_id: number } } & {
              json: CannedResponseCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: number; account_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/custom_attribute_definitions': {
      $get:
        | {
            input: { param: { account_id: number } } & { query: { attribute_model: '0' | '1' } }
            output: CustomAttribute[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { query: { attribute_model: '0' | '1' } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: CustomAttributeCreateUpdatePayload }
            output: CustomAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: CustomAttributeCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:account_id/custom_attribute_definitions/:id': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: CustomAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number; account_id: number } } & {
              json: CustomAttributeCreateUpdatePayload
            }
            output: CustomAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } } & {
              json: CustomAttributeCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number; account_id: number } } & {
              json: CustomAttributeCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/contacts': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                sort?:
                  | 'name'
                  | 'email'
                  | 'phone_number'
                  | 'last_activity_at'
                  | '-name'
                  | '-email'
                  | '-phone_number'
                  | '-last_activity_at'
                  | undefined
                page?: number | undefined
              }
            }
            output: ContactsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                sort?:
                  | 'name'
                  | 'email'
                  | 'phone_number'
                  | 'last_activity_at'
                  | '-name'
                  | '-email'
                  | '-phone_number'
                  | '-last_activity_at'
                  | undefined
                page?: number | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: ContactCreatePayload }
            output: ExtendedContact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: ContactCreatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/accounts/:account_id/contacts/:id': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: ContactShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { account_id: number; id: number } } & { json: ContactUpdatePayload }
            output: ContactBase
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: ContactUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: ContactUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/contacts/:id/conversations': {
      $get:
        | {
            input: { param: { id: number; account_id: number } }
            output: ContactConversationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/contacts/:id/labels': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: ContactLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { account_id: number; id: number } } & { json: { labels: string[] } }
            output: ContactLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: { labels: string[] } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: { labels: string[] } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/contacts/search': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                q?: string | undefined
                sort?:
                  | 'name'
                  | 'email'
                  | 'phone_number'
                  | 'last_activity_at'
                  | '-name'
                  | '-email'
                  | '-phone_number'
                  | '-last_activity_at'
                  | undefined
                page?: number | undefined
              }
            }
            output: ContactsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                q?: string | undefined
                sort?:
                  | 'name'
                  | 'email'
                  | 'phone_number'
                  | 'last_activity_at'
                  | '-name'
                  | '-email'
                  | '-phone_number'
                  | '-last_activity_at'
                  | undefined
                page?: number | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:account_id/contacts/filter': {
      $post:
        | {
            input: { param: { account_id: number } } & { query: { page?: number | undefined } } & {
              json: {
                payload?:
                  | {
                      attribute_key?: string | undefined
                      filter_operator?:
                        | 'equal_to'
                        | 'not_equal_to'
                        | 'contains'
                        | 'does_not_contain'
                        | undefined
                      values?: string[] | undefined
                      timezone?: string | undefined
                      query_operator?: 'AND' | 'OR' | undefined
                    }[]
                  | undefined
              }
            }
            output: ContactsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { query: { page?: number | undefined } } & {
              json: {
                payload?:
                  | {
                      attribute_key?: string | undefined
                      filter_operator?:
                        | 'equal_to'
                        | 'not_equal_to'
                        | 'contains'
                        | 'does_not_contain'
                        | undefined
                      values?: string[] | undefined
                      timezone?: string | undefined
                      query_operator?: 'AND' | 'OR' | undefined
                    }[]
                  | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/accounts/:account_id/contacts/:id/contact_inboxes': {
      $post:
        | {
            input: { param: { account_id: number; id: number } } & {
              json: { inbox_id: number; source_id?: string | undefined }
            }
            output: ContactInboxes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } } & {
              json: { inbox_id: number; source_id?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } } & {
              json: { inbox_id: number; source_id?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/contacts/:id/contactable_inboxes': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: ContactableInboxesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/data_exports': {
      $post:
        | {
            input: { param: { account_id: number } } & {
              json: {
                column_names?: string[] | undefined
                payload?:
                  | {
                      attribute_key: string
                      attribute_model?: (string | null) | undefined
                      filter_operator: string
                      query_operator?: (string | null) | undefined
                      custom_attribute_type?: (string | null) | undefined
                      values: (string | number | boolean)[]
                      timezone?: string | undefined
                    }[]
                  | undefined
                label?: string | undefined
                scope_name?: string | undefined
              }
            }
            output: {
              id: number
              name: string
              data_type: 'contacts'
              status: 'pending' | 'processing' | 'completed' | 'failed'
              export_options: { [x: string]: unknown }
              processed_records: number
              total_records?: (number | null) | undefined
              error_message?: (string | null) | undefined
              initiated_by?:
                | ({
                    id?: number | undefined
                    name?: string | undefined
                    email?: string | undefined
                  } | null)
                | undefined
              created_at?: string | undefined
              updated_at?: string | undefined
              started_at?: (string | null) | undefined
              completed_at?: (string | null) | undefined
              artifacts_expired_at?: (string | null) | undefined
              stalled?: boolean | undefined
              downloadable: boolean
              can_rerun?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              json: {
                column_names?: string[] | undefined
                payload?:
                  | {
                      attribute_key: string
                      attribute_model?: (string | null) | undefined
                      filter_operator: string
                      query_operator?: (string | null) | undefined
                      custom_attribute_type?: (string | null) | undefined
                      values: (string | number | boolean)[]
                      timezone?: string | undefined
                    }[]
                  | undefined
                label?: string | undefined
                scope_name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: number } } & {
              json: {
                column_names?: string[] | undefined
                payload?:
                  | {
                      attribute_key: string
                      attribute_model?: (string | null) | undefined
                      filter_operator: string
                      query_operator?: (string | null) | undefined
                      custom_attribute_type?: (string | null) | undefined
                      values: (string | number | boolean)[]
                      timezone?: string | undefined
                    }[]
                  | undefined
                label?: string | undefined
                scope_name?: string | undefined
              }
            }
            output: { message: string }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/actions/contact_merge': {
      $post:
        | {
            input: { param: { account_id: number } } & {
              json: { base_contact_id: number; mergee_contact_id: number }
            }
            output: ContactBase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              json: { base_contact_id: number; mergee_contact_id: number }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: number } } & {
              json: { base_contact_id: number; mergee_contact_id: number }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number } } & {
              json: { base_contact_id: number; mergee_contact_id: number }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/automation_rules': {
      $get:
        | {
            input: { param: { account_id: number } } & { query: { page?: number | undefined } }
            output: AutomationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { query: { page?: number | undefined } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: AutomationRuleCreateUpdatePayload }
            output: AutomationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: AutomationRuleCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:account_id/automation_rules/:id': {
      $get:
        | {
            input: { param: { id: number; account_id: number } }
            output: AutomationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: number; account_id: number } } & {
              json: AutomationRuleCreateUpdatePayload
            }
            output: AutomationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } } & {
              json: AutomationRuleCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number; account_id: number } } & {
              json: AutomationRuleCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: number; account_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/portals': {
      $post:
        | {
            input: { param: { account_id: number } } & { json: PortalCreateUpdatePayload }
            output: Portal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: PortalCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { account_id: number } }
            output: Portal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:account_id/portals/:portal_slug': {
      $get:
        | {
            input: { param: { account_id: number; portal_slug: string } }
            output: PortalItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; portal_slug: string } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; portal_slug: string } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number; portal_slug: string } } & {
              json: PortalCreateUpdatePayload
            }
            output: PortalSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; portal_slug: string } } & {
              json: PortalCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; portal_slug: string } } & {
              json: PortalCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/portals/:portal_slug/categories': {
      $post:
        | {
            input: { param: { account_id: number; portal_slug: string } } & {
              json: CategoryCreateUpdatePayload
            }
            output: Category
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; portal_slug: string } } & {
              json: CategoryCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:account_id/portals/:portal_slug/articles': {
      $post:
        | {
            input: { param: { account_id: number; portal_slug: string } } & {
              json: ArticleCreateUpdatePayload
            }
            output: Article
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; portal_slug: string } } & {
              json: ArticleCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/meta': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                status?: 'all' | 'open' | 'resolved' | 'pending' | 'snoozed' | undefined
                q?: string | undefined
                inbox_id?: number | undefined
                team_id?: number | undefined
                labels?: string[] | undefined
              }
            }
            output: {
              meta?:
                | {
                    mine_count?: number | undefined
                    unassigned_count?: number | undefined
                    assigned_count?: number | undefined
                    all_count?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                status?: 'all' | 'open' | 'resolved' | 'pending' | 'snoozed' | undefined
                q?: string | undefined
                inbox_id?: number | undefined
                team_id?: number | undefined
                labels?: string[] | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                assignee_type?: 'me' | 'unassigned' | 'all' | 'assigned' | undefined
                status?: 'all' | 'open' | 'resolved' | 'pending' | 'snoozed' | undefined
                q?: string | undefined
                inbox_id?: number | undefined
                team_id?: number | undefined
                labels?: string[] | undefined
                page?: number | undefined
              }
            }
            output: ConversationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                assignee_type?: 'me' | 'unassigned' | 'all' | 'assigned' | undefined
                status?: 'all' | 'open' | 'resolved' | 'pending' | 'snoozed' | undefined
                q?: string | undefined
                inbox_id?: number | undefined
                team_id?: number | undefined
                labels?: string[] | undefined
                page?: number | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: ConversationCreatePayload }
            output: {
              id?: number | undefined
              account_id?: number | undefined
              inbox_id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: ConversationCreatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/filter': {
      $post:
        | {
            input: { param: { account_id: number } } & {
              query: {
                page?: number | undefined
                sort_by?:
                  | 'last_activity_at_asc'
                  | 'last_activity_at_desc'
                  | 'created_at_asc'
                  | 'created_at_desc'
                  | 'priority_asc'
                  | 'priority_desc'
                  | 'waiting_since_asc'
                  | 'waiting_since_desc'
                  | 'priority_desc_created_at_asc'
                  | 'unread'
                  | undefined
              }
            } & {
              json: {
                payload?:
                  | {
                      attribute_key?: string | undefined
                      filter_operator?:
                        | 'equal_to'
                        | 'not_equal_to'
                        | 'contains'
                        | 'does_not_contain'
                        | undefined
                      values?: string[] | undefined
                      timezone?: string | undefined
                      query_operator?: 'AND' | 'OR' | undefined
                    }[]
                  | undefined
              }
            }
            output: ConversationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                page?: number | undefined
                sort_by?:
                  | 'last_activity_at_asc'
                  | 'last_activity_at_desc'
                  | 'created_at_asc'
                  | 'created_at_desc'
                  | 'priority_asc'
                  | 'priority_desc'
                  | 'waiting_since_asc'
                  | 'waiting_since_desc'
                  | 'priority_desc_created_at_asc'
                  | 'unread'
                  | undefined
              }
            } & {
              json: {
                payload?:
                  | {
                      attribute_key?: string | undefined
                      filter_operator?:
                        | 'equal_to'
                        | 'not_equal_to'
                        | 'contains'
                        | 'does_not_contain'
                        | undefined
                      values?: string[] | undefined
                      timezone?: string | undefined
                      query_operator?: 'AND' | 'OR' | undefined
                    }[]
                  | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id': {
      $get:
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: ConversationShow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: {
                priority?: 'urgent' | 'high' | 'medium' | 'low' | null | undefined
                sla_policy_id?: number | undefined
              }
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: {
                priority?: 'urgent' | 'high' | 'medium' | 'low' | null | undefined
                sla_policy_id?: number | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: {
                priority?: 'urgent' | 'high' | 'medium' | 'low' | null | undefined
                sla_policy_id?: number | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: {
                priority?: 'urgent' | 'high' | 'medium' | 'low' | null | undefined
                sla_policy_id?: number | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_status': {
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: {
                status: 'open' | 'resolved' | 'pending' | 'snoozed'
                snoozed_until?: number | undefined
              }
            }
            output: {
              meta?: { [x: string]: unknown } | undefined
              payload?:
                | {
                    success?: boolean | undefined
                    current_status?: 'open' | 'resolved' | 'pending' | 'snoozed' | undefined
                    conversation_id?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: {
                status: 'open' | 'resolved' | 'pending' | 'snoozed'
                snoozed_until?: number | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: {
                status: 'open' | 'resolved' | 'pending' | 'snoozed'
                snoozed_until?: number | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_priority': {
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { priority?: 'urgent' | 'high' | 'medium' | 'low' | null | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { priority?: 'urgent' | 'high' | 'medium' | 'low' | null | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { priority?: 'urgent' | 'high' | 'medium' | 'low' | null | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { priority?: 'urgent' | 'high' | 'medium' | 'low' | null | undefined }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/toggle_typing_status': {
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { typing_status: 'on' | 'off'; is_private?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { typing_status: 'on' | 'off'; is_private?: boolean | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { typing_status: 'on' | 'off'; is_private?: boolean | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/update_last_seen': {
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: ConversationShow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/custom_attributes': {
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { custom_attributes: { [x: string]: unknown }; merge?: boolean | undefined }
            }
            output: { custom_attributes?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { custom_attributes: { [x: string]: unknown }; merge?: boolean | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { custom_attributes: { [x: string]: unknown }; merge?: boolean | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/destroy_custom_attributes': {
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { custom_attributes: string[] }
            }
            output: { custom_attributes?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { custom_attributes: string[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { custom_attributes: string[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/assignments': {
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { assignee_id?: number | undefined; team_id?: number | undefined }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { assignee_id?: number | undefined; team_id?: number | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { assignee_id?: number | undefined; team_id?: number | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/labels': {
      $get:
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: ConversationLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { labels: string[] }
            }
            output: ConversationLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { labels: string[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: { labels: string[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/reporting_events': {
      $get:
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: ReportingEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; conversation_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/branded_email_layout': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: BrandedEmailLayout
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { account_id: number } } & { json: AccountBrandedEmailLayoutPayload }
            output: BrandedEmailLayout
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: AccountBrandedEmailLayoutPayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number } } & { json: AccountBrandedEmailLayoutPayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/inboxes': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: { payload?: Inbox[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: InboxCreatePayload }
            output: Inbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: InboxCreatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & { json: InboxCreatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/inboxes/:id': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: Inbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number; id: number } } & { json: InboxUpdatePayload }
            output: Inbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: InboxUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: InboxUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/inboxes/:id/message_templates': {
      $get:
        | {
            input: { param: { account_id: number; id: number } } & {
              query: { name?: string | undefined }
            }
            output: {
              payload?: { [x: string]: unknown }[] | undefined
              meta?: { last_sync_attempt_at?: (string | null) | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } } & {
              query: { name?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } } & {
              query: { name?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number; id: number } } & {
              query: { name?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/inboxes/:id/agent_bot': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: AgentBot
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/inboxes/:id/set_agent_bot': {
      $post:
        | {
            input: { param: { account_id: number; id: number } } & { json: { agent_bot: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: { agent_bot: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: { agent_bot: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/inbox_members/:inbox_id': {
      $get:
        | {
            input: { param: { inbox_id: number; account_id: number } }
            output: { payload?: Agent[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { inbox_id: number; account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/inbox_members': {
      $post:
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: number; user_ids: number[] }
            }
            output: { payload?: Agent[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: number; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: number; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: number; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: string; user_ids: number[] }
            }
            output: { payload?: Agent[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: string; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: string; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: string; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: string; user_ids: number[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: string; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: string; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number } } & {
              json: { inbox_id: string; user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/labels': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: { payload?: Label[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: LabelCreateUpdatePayload }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: LabelCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:account_id/labels/:id': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number; id: number } } & {
              json: LabelCreateUpdatePayload
            }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } } & {
              json: LabelCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages': {
      $get:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              query: { after?: number | undefined; before?: number | undefined }
            }
            output: {
              meta?:
                | {
                    labels?: string[] | undefined
                    additional_attributes?: { [x: string]: unknown } | undefined
                    contact?: Contact | undefined
                    assignee?: Agent | undefined
                    agent_last_seen_at?: (string | null) | undefined
                    assignee_last_seen_at?: (string | null) | undefined
                  }
                | undefined
              payload?: Message[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              query: { after?: number | undefined; before?: number | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              query: { after?: number | undefined; before?: number | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: ConversationMessageCreatePayload
            } & {
              form: {
                content?: string | undefined
                message_type?: 'outgoing' | 'incoming' | undefined
                private?: boolean | undefined
                content_type?:
                  | 'text'
                  | 'input_email'
                  | 'cards'
                  | 'input_select'
                  | 'form'
                  | 'article'
                  | undefined
                content_attributes?: { [x: string]: unknown } | undefined
                'attachments[]'?: File[] | undefined
              }
            }
            output: {
              id?: number | undefined
              content?: string | undefined
              account_id?: number | undefined
              inbox_id?: number | undefined
              conversation_id?: number | undefined
              message_type?: 0 | 1 | 2 | 3 | undefined
              created_at?: number | undefined
              updated_at?: number | string | undefined
              private?: boolean | undefined
              status?: 'sent' | 'delivered' | 'read' | 'failed' | null | undefined
              source_id?: (string | null) | undefined
              content_type?:
                | 'text'
                | 'input_text'
                | 'input_textarea'
                | 'input_email'
                | 'input_select'
                | 'cards'
                | 'form'
                | 'article'
                | 'incoming_email'
                | 'input_csat'
                | 'integrations'
                | 'sticker'
                | 'voice_call'
                | null
                | undefined
              content_attributes?: { [x: string]: unknown } | undefined
              sender_type?:
                | 'Contact'
                | 'User'
                | 'AgentBot'
                | 'Captain::Assistant'
                | null
                | undefined
              sender_id?: (number | null) | undefined
              external_source_ids?: { [x: string]: unknown } | undefined
              additional_attributes?: { [x: string]: unknown } | undefined
              processed_message_content?: (string | null) | undefined
              sentiment?: ({ [x: string]: unknown } | null) | undefined
              conversation?: ({ [x: string]: unknown } | null) | undefined
              attachment?: ({ [x: string]: unknown } | null) | undefined
              sender?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: ConversationMessageCreatePayload
            } & {
              form: {
                content?: string | undefined
                message_type?: 'outgoing' | 'incoming' | undefined
                private?: boolean | undefined
                content_type?:
                  | 'text'
                  | 'input_email'
                  | 'cards'
                  | 'input_select'
                  | 'form'
                  | 'article'
                  | undefined
                content_attributes?: { [x: string]: unknown } | undefined
                'attachments[]'?: File[] | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; conversation_id: number } } & {
              json: ConversationMessageCreatePayload
            } & {
              form: {
                content?: string | undefined
                message_type?: 'outgoing' | 'incoming' | undefined
                private?: boolean | undefined
                content_type?:
                  | 'text'
                  | 'input_email'
                  | 'cards'
                  | 'input_select'
                  | 'form'
                  | 'article'
                  | undefined
                content_attributes?: { [x: string]: unknown } | undefined
                'attachments[]'?: File[] | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/conversations/:conversation_id/messages/:message_id': {
      $patch:
        | {
            input: {
              param: { account_id: number; conversation_id: number; message_id: number }
            } & {
              json: {
                status: 'sent' | 'delivered' | 'read' | 'failed'
                external_error?: string | undefined
              }
            }
            output: {
              id?: number | undefined
              content?: string | undefined
              account_id?: number | undefined
              inbox_id?: number | undefined
              conversation_id?: number | undefined
              message_type?: 0 | 1 | 2 | 3 | undefined
              created_at?: number | undefined
              updated_at?: number | string | undefined
              private?: boolean | undefined
              status?: 'sent' | 'delivered' | 'read' | 'failed' | null | undefined
              source_id?: (string | null) | undefined
              content_type?:
                | 'text'
                | 'input_text'
                | 'input_textarea'
                | 'input_email'
                | 'input_select'
                | 'cards'
                | 'form'
                | 'article'
                | 'incoming_email'
                | 'input_csat'
                | 'integrations'
                | 'sticker'
                | 'voice_call'
                | null
                | undefined
              content_attributes?: { [x: string]: unknown } | undefined
              sender_type?:
                | 'Contact'
                | 'User'
                | 'AgentBot'
                | 'Captain::Assistant'
                | null
                | undefined
              sender_id?: (number | null) | undefined
              external_source_ids?: { [x: string]: unknown } | undefined
              additional_attributes?: { [x: string]: unknown } | undefined
              processed_message_content?: (string | null) | undefined
              sentiment?: ({ [x: string]: unknown } | null) | undefined
              conversation?: ({ [x: string]: unknown } | null) | undefined
              attachment?: ({ [x: string]: unknown } | null) | undefined
              sender?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { account_id: number; conversation_id: number; message_id: number }
            } & {
              json: {
                status: 'sent' | 'delivered' | 'read' | 'failed'
                external_error?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { account_id: number; conversation_id: number; message_id: number }
            } & {
              json: {
                status: 'sent' | 'delivered' | 'read' | 'failed'
                external_error?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { account_id: number; conversation_id: number; message_id: number }
            } & {
              json: {
                status: 'sent' | 'delivered' | 'read' | 'failed'
                external_error?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { account_id: number; conversation_id: number; message_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; conversation_id: number; message_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; conversation_id: number; message_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/integrations/apps': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: { payload?: IntegrationsApp[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/integrations/hooks': {
      $post:
        | {
            input: { param: { account_id: number } } & { json: IntegrationsHookCreatePayload }
            output: IntegrationsHook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: IntegrationsHookCreatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:account_id/integrations/hooks/:hook_id': {
      $patch:
        | {
            input: { param: { account_id: number; hook_id: number } } & {
              json: IntegrationsHookUpdatePayload
            }
            output: IntegrationsHook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; hook_id: number } } & {
              json: IntegrationsHookUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { account_id: number; hook_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; hook_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; hook_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/profile': {
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BadRequestError; outputFormat: 'json'; status: 401 }
      $put:
        | {
            input: {
              json: {
                profile: {
                  name?: string | undefined
                  email?: string | undefined
                  display_name?: string | undefined
                  message_signature?: string | undefined
                  phone_number?: string | undefined
                  current_password?: string | undefined
                  password?: string | undefined
                  password_confirmation?: string | undefined
                  ui_settings?: { [x: string]: unknown } | undefined
                }
              }
            } & {
              form: {
                profile: {
                  name?: string | undefined
                  email?: string | undefined
                  display_name?: string | undefined
                  message_signature?: string | undefined
                  phone_number?: string | undefined
                  current_password?: string | undefined
                  password?: string | undefined
                  password_confirmation?: string | undefined
                  avatar?: File | undefined
                  ui_settings?: { [x: string]: unknown } | undefined
                }
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                profile: {
                  name?: string | undefined
                  email?: string | undefined
                  display_name?: string | undefined
                  message_signature?: string | undefined
                  phone_number?: string | undefined
                  current_password?: string | undefined
                  password?: string | undefined
                  password_confirmation?: string | undefined
                  ui_settings?: { [x: string]: unknown } | undefined
                }
              }
            } & {
              form: {
                profile: {
                  name?: string | undefined
                  email?: string | undefined
                  display_name?: string | undefined
                  message_signature?: string | undefined
                  phone_number?: string | undefined
                  current_password?: string | undefined
                  password?: string | undefined
                  password_confirmation?: string | undefined
                  avatar?: File | undefined
                  ui_settings?: { [x: string]: unknown } | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:account_id/teams': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: Team[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: TeamCreateUpdatePayload }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: TeamCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:account_id/teams/:team_id': {
      $get:
        | {
            input: { param: { account_id: number; team_id: number } }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; team_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; team_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: TeamCreateUpdatePayload
            }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: TeamCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { account_id: number; team_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; team_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; team_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/teams/:team_id/team_members': {
      $get:
        | {
            input: { param: { account_id: number; team_id: number } }
            output: Agent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; team_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; team_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: Agent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: Agent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: number; team_id: number } } & {
              json: { user_ids: number[] }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/custom_filters': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: { filter_type?: 'conversation' | 'contact' | 'report' | undefined }
            }
            output: CustomFilter[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: { filter_type?: 'conversation' | 'contact' | 'report' | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { account_id: number } } & {
              query: { filter_type?: 'conversation' | 'contact' | 'report' | undefined }
            } & { json: CustomFilterCreateUpdatePayload }
            output: CustomFilter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: { filter_type?: 'conversation' | 'contact' | 'report' | undefined }
            } & { json: CustomFilterCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:account_id/custom_filters/:custom_filter_id': {
      $get:
        | {
            input: { param: { account_id: number; custom_filter_id: number } }
            output: CustomFilter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; custom_filter_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; custom_filter_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: number; custom_filter_id: number } } & {
              json: CustomFilterCreateUpdatePayload
            }
            output: CustomFilter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; custom_filter_id: number } } & {
              json: CustomFilterCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { account_id: number; custom_filter_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; custom_filter_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; custom_filter_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/webhooks': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: Webhook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: WebhookCreateUpdatePayload }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: WebhookCreateUpdatePayload }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:account_id/webhooks/:webhook_id': {
      $patch:
        | {
            input: { param: { account_id: number; webhook_id: number } } & {
              json: WebhookCreateUpdatePayload
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; webhook_id: number } } & {
              json: WebhookCreateUpdatePayload
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { account_id: number; webhook_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; webhook_id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: number; webhook_id: number } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts/:account_id/reporting_events': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                page?: number | undefined
                since?: string | undefined
                until?: string | undefined
                inbox_id?: number | undefined
                user_id?: number | undefined
                name?: string | undefined
              }
            }
            output: ReportingEventsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                page?: number | undefined
                since?: string | undefined
                until?: string | undefined
                inbox_id?: number | undefined
                user_id?: number | undefined
                name?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/accounts/:account_id/reports': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                metric:
                  | 'conversations_count'
                  | 'incoming_messages_count'
                  | 'outgoing_messages_count'
                  | 'avg_first_response_time'
                  | 'avg_resolution_time'
                  | 'resolutions_count'
                type: 'account' | 'agent' | 'inbox' | 'label' | 'team'
                id?: string | undefined
                since?: string | undefined
                until?: string | undefined
              }
            }
            output: { value?: string | undefined; timestamp?: number | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                metric:
                  | 'conversations_count'
                  | 'incoming_messages_count'
                  | 'outgoing_messages_count'
                  | 'avg_first_response_time'
                  | 'avg_resolution_time'
                  | 'resolutions_count'
                type: 'account' | 'agent' | 'inbox' | 'label' | 'team'
                id?: string | undefined
                since?: string | undefined
                until?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                metric:
                  | 'conversations_count'
                  | 'incoming_messages_count'
                  | 'outgoing_messages_count'
                  | 'avg_first_response_time'
                  | 'avg_resolution_time'
                  | 'resolutions_count'
                type: 'account' | 'agent' | 'inbox' | 'label' | 'team'
                id?: string | undefined
                since?: string | undefined
                until?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/accounts/:account_id/reports/summary': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                type: 'account' | 'agent' | 'inbox' | 'label' | 'team'
                id?: string | undefined
                since?: string | undefined
                until?: string | undefined
              }
            }
            output: AccountSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                type: 'account' | 'agent' | 'inbox' | 'label' | 'team'
                id?: string | undefined
                since?: string | undefined
                until?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                type: 'account' | 'agent' | 'inbox' | 'label' | 'team'
                id?: string | undefined
                since?: string | undefined
                until?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/accounts/:account_id/reports/conversations': {
      $get:
        | {
            input: { param: { account_id: number } } & { query: { type: 'account' } }
            output: {
              open?: number | undefined
              unattended?: number | undefined
              unassigned?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { query: { type: 'account' } }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & { query: { type: 'account' } }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/accounts/:account_id/reports/conversations/': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: { type: 'agent'; user_id?: string | undefined }
            }
            output: AgentConversationMetrics[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: { type: 'agent'; user_id?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: number } } & {
              query: { type: 'agent'; user_id?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/accounts/:account_id/summary_reports/channel': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: { since?: string | undefined; until?: string | undefined }
            }
            output: ChannelSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: { since?: string | undefined; until?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: number } } & {
              query: { since?: string | undefined; until?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/accounts/:account_id/summary_reports/inbox': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                business_hours?: boolean | undefined
              }
            }
            output: InboxSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                business_hours?: boolean | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/accounts/:account_id/summary_reports/agent': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                business_hours?: boolean | undefined
              }
            }
            output: AgentSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                business_hours?: boolean | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/accounts/:account_id/summary_reports/team': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                business_hours?: boolean | undefined
              }
            }
            output: TeamSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                business_hours?: boolean | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/accounts/:account_id/reports/first_response_time_distribution': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: { since?: string | undefined; until?: string | undefined }
            }
            output: FirstResponseTimeDistribution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: { since?: string | undefined; until?: string | undefined }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/accounts/:account_id/reports/inbox_label_matrix': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                inbox_ids?: number[] | undefined
                label_ids?: number[] | undefined
              }
            }
            output: InboxLabelMatrix
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                since?: string | undefined
                until?: string | undefined
                inbox_ids?: number[] | undefined
                label_ids?: number[] | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/accounts/:account_id/reports/outgoing_messages_count': {
      $get:
        | {
            input: { param: { account_id: number } } & {
              query: {
                group_by: 'agent' | 'team' | 'inbox' | 'label'
                since?: string | undefined
                until?: string | undefined
              }
            }
            output: OutgoingMessagesCount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & {
              query: {
                group_by: 'agent' | 'team' | 'inbox' | 'label'
                since?: string | undefined
                until?: string | undefined
              }
            }
            output: BadRequestError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/accounts/:account_id/conversations/:conversation_id/messages': {
      $get: {
        input: { param: { account_id: number; conversation_id: number } }
        output: ConversationMessages
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/accounts/:account_id/campaigns': {
      $get:
        | {
            input: { param: { account_id: number } }
            output: Campaign[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: number } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { account_id: number } } & { json: CampaignCreatePayload }
            output: Campaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number } } & { json: CampaignCreatePayload }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: number } } & { json: CampaignCreatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account_id: number } } & { json: CampaignCreatePayload }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:account_id/campaigns/:id': {
      $get:
        | {
            input: { param: { account_id: number; id: number } }
            output: Campaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 403
          }
      $patch:
        | {
            input: { param: { account_id: number; id: number } } & { json: CampaignUpdatePayload }
            output: Campaign
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: CampaignUpdatePayload }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: CampaignUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account_id: number; id: number } } & { json: CampaignUpdatePayload }
            output: {}
            outputFormat: string
            status: 422
          }
      $delete:
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account_id: number; id: number } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  },
  '/'
>
export default routes
