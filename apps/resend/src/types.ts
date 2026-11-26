type EmailTemplateInputInput = { id: string; variables?: { [key: string]: string | number } }
type AttachmentInput = {
  content?: File
  filename?: string
  path?: string
  content_type?: string
  content_id?: string
}
type TagInput = { name?: string; value?: string }
type SendEmailRequestInput = {
  from: string
  to: string | string[]
  subject: string
  bcc?: string | string[]
  cc?: string | string[]
  reply_to?: string | string[]
  html?: string
  text?: string
  template?: EmailTemplateInputInput
  headers?: { [key: string]: unknown }
  scheduled_at?: string
  attachments?: AttachmentInput[]
  tags?: TagInput[]
  topic_id?: string
}
type SendEmailResponse = { id?: string | undefined }
type Email = {
  object?: string | undefined
  id?: string | undefined
  message_id?: string | undefined
  to?: string[] | undefined
  from?: string | undefined
  created_at?: string | undefined
  subject?: string | undefined
  html?: string | undefined
  text?: string | undefined
  bcc?: string[] | undefined
  cc?: string[] | undefined
  reply_to?: string[] | undefined
  last_event?:
    | 'bounced'
    | 'canceled'
    | 'clicked'
    | 'complained'
    | 'delivered'
    | 'delivery_delayed'
    | 'failed'
    | 'opened'
    | 'queued'
    | 'scheduled'
    | 'sent'
    | 'suppressed'
    | undefined
}
type ListEmailsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: Email[] | undefined
}
type UpdateEmailOptions = { scheduled_at?: string | undefined }
type ShareEmailOptionsInput = { expires_in?: string }
type ShareEmailResponse = {
  object?: string | undefined
  id?: string | undefined
  url?: string | undefined
}
type CreateBatchEmailsResponse = { data?: { id?: string | undefined }[] | undefined }
type ListAttachmentsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        filename?: (string | null) | undefined
        content_type?: string | undefined
        content_id?: string | undefined
        content_disposition?: ('inline' | 'attachment' | null) | undefined
        download_url?: string | undefined
        expires_at?: string | undefined
        size?: number | undefined
      }[]
    | undefined
}
type RetrievedAttachment = {
  object?: string | undefined
  id?: string | undefined
  filename?: (string | null) | undefined
  content_type?: string | undefined
  content_id?: string | undefined
  content_disposition?: ('inline' | 'attachment' | null) | undefined
  download_url?: string | undefined
  expires_at?: string | undefined
  size?: number | undefined
}
type ListReceivedEmailsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        to?: string[] | undefined
        from?: string | undefined
        subject?: (string | null) | undefined
        message_id?: string | undefined
        bcc?: (string[] | null) | undefined
        cc?: (string[] | null) | undefined
        reply_to?: (string[] | null) | undefined
        created_at?: string | undefined
        attachments?:
          | {
              id?: string | undefined
              filename?: (string | null) | undefined
              content_type?: string | undefined
              content_id?: string | undefined
              content_disposition?: ('inline' | 'attachment' | null) | undefined
              size?: number | undefined
            }[]
          | undefined
      }[]
    | undefined
}
type GetReceivedEmailResponse = {
  object?: string | undefined
  id?: string | undefined
  to?: string[] | undefined
  from?: string | undefined
  subject?: string | undefined
  message_id?: string | undefined
  bcc?: (string[] | null) | undefined
  cc?: (string[] | null) | undefined
  reply_to?: (string[] | null) | undefined
  received_for?: string[] | undefined
  html?: (string | null) | undefined
  text?: (string | null) | undefined
  headers?: ({ [key: string]: string } | null) | undefined
  created_at?: string | undefined
  attachments?:
    | {
        id?: string | undefined
        filename?: (string | null) | undefined
        content_type?: string | undefined
        content_id?: string | undefined
        content_disposition?: ('inline' | 'attachment' | null) | undefined
        size?: number | undefined
      }[]
    | undefined
}
type EmailMetricsDataRow = {
  period?: string | undefined
  domain_id?: string | undefined
  domain_name?: string | undefined
  email_id?: string | undefined
  broadcast_id?: string | undefined
  broadcast_name?: string | undefined
}
type GetEmailsMetricsResponse = {
  object?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  metrics?: string[] | undefined
  dimensions?: ('period' | 'domain' | 'email' | 'broadcast')[] | undefined
  granularity?: 'hourly' | 'daily' | 'weekly' | 'monthly' | undefined
  totals?: { [key: string]: number } | undefined
  data?: EmailMetricsDataRow[] | undefined
}
type DomainCapabilitiesInput = {
  sending?: 'enabled' | 'disabled'
  receiving?: 'enabled' | 'disabled'
}
type CreateDomainRequestInput = {
  name: string
  region?: 'us-east-1' | 'eu-west-1' | 'sa-east-1' | 'ap-northeast-1'
  custom_return_path?: string
  open_tracking?: boolean
  click_tracking?: boolean
  tls?: 'opportunistic' | 'enforced'
  capabilities?: DomainCapabilitiesInput
  tracking_subdomain?: string
}
type DomainCapabilities = {
  sending?: 'enabled' | 'disabled' | undefined
  receiving?: 'enabled' | 'disabled' | undefined
}
type DomainRecord = {
  record?: 'SPF' | 'DKIM' | 'Receiving' | 'Tracking' | 'TrackingCAA' | undefined
  name?: string | undefined
  type?: 'MX' | 'TXT' | 'CNAME' | 'CAA' | undefined
  ttl?: string | undefined
  status?: 'pending' | 'verified' | 'failed' | 'temporary_failure' | 'not_started' | undefined
  value?: string | undefined
  priority?: number | undefined
}
type CreateDomainResponse = {
  id?: string | undefined
  name?: string | undefined
  created_at?: string | undefined
  status?:
    | 'pending'
    | 'verified'
    | 'failed'
    | 'not_started'
    | 'partially_verified'
    | 'partially_failed'
    | undefined
  capabilities?: DomainCapabilities | undefined
  records?: DomainRecord[] | undefined
  region?: string | undefined
  open_tracking?: boolean | undefined
  click_tracking?: boolean | undefined
  tracking_subdomain?: string | undefined
}
type ListDomainsItem = {
  id?: string | undefined
  name?: string | undefined
  status?:
    | 'pending'
    | 'verified'
    | 'failed'
    | 'not_started'
    | 'partially_verified'
    | 'partially_failed'
    | undefined
  created_at?: string | undefined
  region?: string | undefined
  open_tracking?: boolean | undefined
  click_tracking?: boolean | undefined
  capabilities?: DomainCapabilities | undefined
}
type ListDomainsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: ListDomainsItem[] | undefined
}
type Domain = {
  object?: string | undefined
  id?: string | undefined
  name?: string | undefined
  status?:
    | 'pending'
    | 'verified'
    | 'failed'
    | 'not_started'
    | 'partially_verified'
    | 'partially_failed'
    | undefined
  created_at?: string | undefined
  region?: string | undefined
  open_tracking?: boolean | undefined
  click_tracking?: boolean | undefined
  tracking_subdomain?: string | undefined
  capabilities?: DomainCapabilities | undefined
  records?: DomainRecord[] | undefined
}
type UpdateDomainOptionsInput = {
  open_tracking?: boolean
  click_tracking?: boolean
  tls?: 'opportunistic' | 'enforced'
  capabilities?: DomainCapabilitiesInput
  tracking_subdomain?: string
}
type UpdateDomainResponseSuccess = { id?: string | undefined; object?: string | undefined }
type DeleteDomainResponse = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type VerifyDomainOptionsInput = { scope?: 'forge'[] }
type VerifyDomainResponse = { object?: string | undefined; id?: string | undefined }
type EnableForgeRequestInput = { custom_return_path?: string }
type CreateDomainClaimRequestInput = {
  name: string
  region?: 'us-east-1' | 'eu-west-1' | 'sa-east-1' | 'ap-northeast-1'
  custom_return_path?: string
  open_tracking?: boolean
  click_tracking?: boolean
  tracking_subdomain?: string
}
type DomainClaimRecord = {
  type?: 'TXT' | undefined
  name?: string | undefined
  value?: string | undefined
  ttl?: string | undefined
}
type DomainClaim = {
  object?: string | undefined
  id?: string | undefined
  name?: string | undefined
  status?:
    | 'pending'
    | 'verified'
    | 'completed'
    | 'blocked'
    | 'expired'
    | 'superseded'
    | 'canceled'
    | 'failed'
    | undefined
  domain_id?: (string | null) | undefined
  region?: ('us-east-1' | 'eu-west-1' | 'sa-east-1' | 'ap-northeast-1' | null) | undefined
  record?: DomainClaimRecord | undefined
  blocked_reason?:
    | ('grace_period' | 'recent_owner_activity' | 'pending_scheduled_emails' | null)
    | undefined
  failure_reason?: (string | null) | undefined
  created_at?: string | undefined
  expires_at?: string | undefined
}
type CreateApiKeyRequestInput = {
  name: string
  permission?: 'full_access' | 'sending_access'
  domain_id?: string
}
type CreateApiKeyResponse = { id?: string | undefined; token?: string | undefined }
type ApiKey = {
  id?: string | undefined
  name?: string | undefined
  created_at?: string | undefined
  last_used_at?: (string | null) | undefined
}
type ListApiKeysResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: ApiKey[] | undefined
}
type UpdateApiKeyRequestInput = { name: string }
type UpdateApiKeyResponse = { object?: string | undefined; id?: string | undefined }
type DeleteApiKeyResponse = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type OAuthGrant = {
  id?: string | undefined
  client_id?: string | undefined
  scopes?: string[] | undefined
  created_at?: string | undefined
  revoked_at?: (string | null) | undefined
  revoked_reason?: (string | null) | undefined
  client?: { name?: string | undefined; logo_uri?: (string | null) | undefined } | undefined
}
type ListOAuthGrantsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: OAuthGrant[] | undefined
}
type RevokeOAuthGrantResponse = {
  object?: string | undefined
  id?: string | undefined
  revoked_at?: string | undefined
  revoked_reason?: string | undefined
}
type TemplateVariableInputInput = {
  key: string
  type: 'string' | 'number' | 'boolean' | 'object' | 'list'
  fallback_value?: string | number | boolean | { [key: string]: unknown } | any[]
}
type CreateTemplateRequestInput = {
  name: string
  alias?: string
  from?: string
  subject?: string
  reply_to?: string[]
  html: string
  text?: string
  variables?: TemplateVariableInputInput[]
}
type CreateTemplateResponseSuccess = { id?: string | undefined; object?: string | undefined }
type TemplateListItem = {
  id?: string | undefined
  name?: string | undefined
  status?: 'draft' | 'published' | undefined
  published_at?: (string | null) | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  alias?: string | undefined
}
type ListTemplatesResponseSuccess = {
  object?: string | undefined
  data?: TemplateListItem[] | undefined
  has_more?: boolean | undefined
}
type TemplateVariable = {
  id?: string | undefined
  key: string
  type: 'string' | 'number' | 'boolean' | 'object' | 'list'
  fallback_value?: (string | number | boolean | { [key: string]: unknown } | any[]) | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type Template = {
  object?: string | undefined
  id?: string | undefined
  current_version_id?: string | undefined
  name?: string | undefined
  alias?: string | undefined
  from?: string | undefined
  subject?: string | undefined
  reply_to?: (string[] | null) | undefined
  html?: string | undefined
  text?: string | undefined
  variables?: TemplateVariable[] | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  status?: 'draft' | 'published' | undefined
  published_at?: (string | null) | undefined
  has_unpublished_versions?: boolean | undefined
}
type UpdateTemplateOptionsInput = {
  name?: string
  alias?: string
  from?: string
  subject?: string
  reply_to?: string[]
  html?: string
  text?: string
  variables?: TemplateVariableInputInput[]
}
type UpdateTemplateResponseSuccess = { id?: string | undefined; object?: string | undefined }
type RemoveTemplateResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type PublishTemplateResponseSuccess = { id?: string | undefined; object?: string | undefined }
type DuplicateTemplateResponseSuccess = { id?: string | undefined; object?: string | undefined }
type CreateAudienceOptionsInput = { name: string }
type CreateAudienceResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  name?: string | undefined
}
type ListAudiencesResponseSuccess = {
  object?: string | undefined
  data?:
    | { id?: string | undefined; name?: string | undefined; created_at?: string | undefined }[]
    | undefined
}
type RemoveAudienceResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  deleted?: boolean | undefined
}
type GetAudienceResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  name?: string | undefined
  created_at?: string | undefined
}
type CreateContactOptionsInput = {
  email: string
  first_name?: string
  last_name?: string
  unsubscribed?: boolean
  properties?: { [key: string]: string | number | null }
  segments?: { id?: string }[]
  topics?: { id?: string; subscription?: 'opt_in' | 'opt_out' }[]
  audience_id?: string
}
type CreateContactResponseSuccess = { object?: string | undefined; id?: string | undefined }
type ListContactsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        email?: string | undefined
        first_name?: (string | null) | undefined
        last_name?: (string | null) | undefined
        created_at?: string | undefined
        unsubscribed?: boolean | undefined
      }[]
    | undefined
}
type CreateContactImportOptionsInput = {
  file: File
  column_map?: string
  on_conflict?: 'upsert' | 'skip'
  segments?: string
  topics?: string
}
type CreateContactImportResponseSuccess = { object?: string | undefined; id?: string | undefined }
type ContactImportCounts = {
  total?: number | undefined
  created?: number | undefined
  updated?: number | undefined
  skipped?: number | undefined
  failed?: number | undefined
}
type ContactImport = {
  object?: string | undefined
  id?: string | undefined
  status?: 'queued' | 'in_progress' | 'completed' | 'failed' | undefined
  created_at?: string | undefined
  completed_at?: (string | null) | undefined
  counts?: ContactImportCounts | undefined
}
type ListContactImportsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: ContactImport[] | undefined
}
type GetContactImportResponseSuccess = ContactImport
type GetContactResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  email?: string | undefined
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  created_at?: string | undefined
  unsubscribed?: boolean | undefined
  properties?: { [key: string]: unknown } | undefined
}
type UpdateContactOptionsInput = {
  email?: string
  first_name?: string
  last_name?: string
  unsubscribed?: boolean
  properties?: { [key: string]: string | number | boolean | null }
}
type UpdateContactResponseSuccess = { object?: string | undefined; id?: string | undefined }
type RemoveContactResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type CreateBroadcastOptionsInput = {
  name?: string
  segment_id: string
  audience_id?: string
  from: string
  subject: string
  reply_to?: string[]
  preview_text?: string
  html?: string
  text?: string
  topic_id?: string
  send?: boolean
  scheduled_at?: string
}
type CreateBroadcastResponseSuccess = { id?: string | undefined; object?: string | undefined }
type ListBroadcastsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        name?: string | undefined
        audience_id?: string | undefined
        segment_id?: string | undefined
        status?: string | undefined
        created_at?: string | undefined
        scheduled_at?: string | undefined
        sent_at?: string | undefined
        topic_id?: string | undefined
      }[]
    | undefined
}
type RemoveBroadcastResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  deleted?: boolean | undefined
}
type GetBroadcastResponseSuccess = {
  id?: string | undefined
  name?: string | undefined
  audience_id?: (string | null) | undefined
  segment_id?: (string | null) | undefined
  from?: string | undefined
  subject?: string | undefined
  reply_to?: string[] | undefined
  preview_text?: string | undefined
  status?: string | undefined
  created_at?: string | undefined
  scheduled_at?: string | undefined
  sent_at?: string | undefined
  text?: (string | null) | undefined
  html?: (string | null) | undefined
  topic_id?: (string | null) | undefined
}
type UpdateBroadcastOptionsInput = {
  name?: string
  audience_id?: string
  segment_id?: string
  from?: string
  subject?: string
  reply_to?: string[]
  preview_text?: string
  html?: string
  text?: string
  topic_id?: string
}
type UpdateBroadcastResponseSuccess = { id?: string | undefined; object?: string | undefined }
type SendBroadcastOptionsInput = { scheduled_at?: string }
type SendBroadcastResponseSuccess = { id?: string | undefined }
type CancelBroadcastResponseSuccess = { id?: string | undefined; object?: string | undefined }
type DuplicateBroadcastResponseSuccess = { id?: string | undefined; object?: string | undefined }
type ListBroadcastRecipientsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        contact_id?: (string | null) | undefined
        email?: string | undefined
        count?: number | undefined
        bounce_type?: 'permanent' | 'transient' | 'undetermined' | undefined
        clicked_links?: { url?: string | undefined; clicks?: number | undefined }[] | undefined
      }[]
    | undefined
}
type ListBroadcastClickedLinksResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        url?: string | undefined
        clicks?: number | undefined
        unique_clicks?: number | undefined
      }[]
    | undefined
}
type CreateWebhookRequestInput = { endpoint: string; events: string[] }
type CreateWebhookResponse = {
  object?: string | undefined
  id?: string | undefined
  signing_secret?: string | undefined
}
type ListWebhooksResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        endpoint?: string | undefined
        events?: (string[] | null) | undefined
        status?: string | undefined
        created_at?: string | undefined
      }[]
    | undefined
}
type GetWebhookResponse = {
  object?: string | undefined
  id?: string | undefined
  endpoint?: string | undefined
  events?: (string[] | null) | undefined
  status?: string | undefined
  created_at?: string | undefined
  signing_secret?: string | undefined
}
type UpdateWebhookRequestInput = {
  endpoint?: string
  events?: string[]
  status?: 'enabled' | 'disabled'
}
type UpdateWebhookResponse = { object?: string | undefined; id?: string | undefined }
type DeleteWebhookResponse = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type RotateWebhookSigningSecretResponse = {
  object?: string | undefined
  id?: string | undefined
  signing_secret?: string | undefined
}
type ListWebhookEventsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        type?: string | undefined
        created_at?: string | undefined
        status?: 'pending' | 'attempting' | 'success' | 'failed' | undefined
      }[]
    | undefined
}
type GetWebhookEventResponse = {
  object?: string | undefined
  id?: string | undefined
  type?: string | undefined
  created_at?: string | undefined
  status?: 'pending' | 'attempting' | 'success' | 'failed' | undefined
  next_attempt_at?: (string | null) | undefined
  payload?: { [key: string]: unknown } | undefined
}
type ReplayWebhookEventResponse = { object?: string | undefined; id?: string | undefined }
type ListWebhookEventAttemptsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        http_status_code?: number | undefined
        response?: string | undefined
        sent_at?: string | undefined
      }[]
    | undefined
}
type CreateSegmentOptionsInput = {
  name: string
  audience_id?: string
  filter?: { [key: string]: unknown }
}
type CreateSegmentResponseSuccess = { id?: string | undefined; object?: string | undefined }
type ListSegmentsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        name?: string | undefined
        audience_id?: string | undefined
        created_at?: string | undefined
      }[]
    | undefined
}
type GetSegmentResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  name?: string | undefined
  audience_id?: string | undefined
  filter?: { [key: string]: unknown } | undefined
  created_at?: string | undefined
}
type UpdateSegmentOptionsInput = { name: string }
type UpdateSegmentResponseSuccess = { id?: string | undefined; object?: string | undefined }
type RemoveSegmentResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  deleted?: boolean | undefined
}
type CreateTopicOptionsInput = {
  name: string
  default_subscription: 'opt_in' | 'opt_out'
  description?: string
  visibility?: 'public' | 'private'
}
type CreateTopicResponseSuccess = { id?: string | undefined; object?: string | undefined }
type ListTopicsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        name?: string | undefined
        description?: string | undefined
        default_subscription?: 'opt_in' | 'opt_out' | undefined
        visibility?: 'public' | 'private' | undefined
        created_at?: string | undefined
      }[]
    | undefined
}
type GetTopicResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  name?: string | undefined
  description?: string | undefined
  default_subscription?: 'opt_in' | 'opt_out' | undefined
  visibility?: 'public' | 'private' | undefined
  created_at?: string | undefined
}
type UpdateTopicOptionsInput = {
  name?: string
  description?: string
  visibility?: 'public' | 'private'
}
type UpdateTopicResponseSuccess = { id?: string | undefined; object?: string | undefined }
type RemoveTopicResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  deleted?: boolean | undefined
}
type CreateContactPropertyOptionsInput = {
  key: string
  type: 'string' | 'number'
  fallback_value?: string | number
}
type CreateContactPropertyResponseSuccess = { id?: string | undefined; object?: string | undefined }
type ListContactPropertiesResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        key?: string | undefined
        type?: string | undefined
        fallback_value?: (string | number) | undefined
        created_at?: string | undefined
      }[]
    | undefined
}
type GetContactPropertyResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  key?: string | undefined
  type?: string | undefined
  fallback_value?: (string | number) | undefined
  created_at?: string | undefined
}
type UpdateContactPropertyOptionsInput = { fallback_value?: string | number }
type UpdateContactPropertyResponseSuccess = { id?: string | undefined; object?: string | undefined }
type RemoveContactPropertyResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  deleted?: boolean | undefined
}
type ListContactSegmentsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | { id?: string | undefined; name?: string | undefined; created_at?: string | undefined }[]
    | undefined
}
type AddContactToSegmentResponseSuccess = {
  object?: string | undefined
  contact_id?: string | undefined
  segment_id?: string | undefined
}
type RemoveContactFromSegmentResponseSuccess = {
  object?: string | undefined
  contact_id?: string | undefined
  segment_id?: string | undefined
  deleted?: boolean | undefined
}
type GetContactTopicsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        name?: string | undefined
        description?: string | undefined
        subscription?: 'opt_in' | 'opt_out' | undefined
      }[]
    | undefined
}
type UpdateContactTopicsOptionsInput = {
  topics: { id?: string; subscription?: 'opt_in' | 'opt_out' }[]
}
type UpdateContactTopicsResponseSuccess = {
  object?: string | undefined
  contact_id?: string | undefined
  topics?:
    | { id?: string | undefined; subscription?: 'opt_in' | 'opt_out' | undefined }[]
    | undefined
}
type LogSummary = {
  id?: string | undefined
  created_at?: string | undefined
  endpoint?: string | undefined
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | undefined
  response_status?: number | undefined
  user_agent?: (string | null) | undefined
}
type ListLogsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: LogSummary[] | undefined
}
type Log = {
  object?: string | undefined
  id?: string | undefined
  created_at?: string | undefined
  endpoint?: string | undefined
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | undefined
  response_status?: number | undefined
  user_agent?: (string | null) | undefined
  request_body?: ({ [key: string]: unknown } | null) | undefined
  response_body?: ({ [key: string]: unknown } | null) | undefined
}
type AutomationStepInput = {
  key: string
  type:
    | 'trigger'
    | 'send_email'
    | 'delay'
    | 'wait_for_event'
    | 'condition'
    | 'contact_update'
    | 'contact_delete'
    | 'add_to_segment'
  config: { [key: string]: unknown }
}
type AutomationConnectionInput = {
  from: string
  to: string
  type?: 'default' | 'condition_met' | 'condition_not_met' | 'timeout' | 'event_received'
}
type CreateAutomationRequestInput = {
  name: string
  status?: 'enabled' | 'disabled'
  steps: AutomationStepInput[]
  connections: AutomationConnectionInput[]
}
type CreateAutomationResponse = { object?: string | undefined; id?: string | undefined }
type AutomationListItem = {
  id?: string | undefined
  name?: string | undefined
  status?: 'enabled' | 'disabled' | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type ListAutomationsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: AutomationListItem[] | undefined
}
type AutomationStepResponse = {
  key?: string | undefined
  type?:
    | 'trigger'
    | 'send_email'
    | 'delay'
    | 'wait_for_event'
    | 'condition'
    | 'contact_update'
    | 'contact_delete'
    | 'add_to_segment'
    | undefined
  config?: { [key: string]: unknown } | undefined
}
type AutomationConnection = {
  from: string
  to: string
  type?:
    | 'default'
    | 'condition_met'
    | 'condition_not_met'
    | 'timeout'
    | 'event_received'
    | undefined
}
type Automation = {
  object?: string | undefined
  id?: string | undefined
  name?: string | undefined
  status?: 'enabled' | 'disabled' | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  steps?: AutomationStepResponse[] | undefined
  connections?: AutomationConnection[] | undefined
}
type PatchAutomationRequestInput = {
  name?: string
  status?: 'enabled' | 'disabled'
  steps?: AutomationStepInput[]
  connections?: AutomationConnectionInput[]
}
type PatchAutomationResponse = { object?: string | undefined; id?: string | undefined }
type DeleteAutomationResponse = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type DuplicateAutomationResponse = { object?: string | undefined; id?: string | undefined }
type StopAutomationResponse = {
  object?: string | undefined
  id?: string | undefined
  status?: string | undefined
}
type AutomationRunListItem = {
  id?: string | undefined
  status?: 'running' | 'completed' | 'failed' | 'cancelled' | undefined
  started_at?: (string | null) | undefined
  completed_at?: (string | null) | undefined
  created_at?: string | undefined
}
type ListAutomationRunsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: AutomationRunListItem[] | undefined
}
type AutomationRunStep = {
  key?: string | undefined
  type?:
    | 'trigger'
    | 'send_email'
    | 'delay'
    | 'wait_for_event'
    | 'condition'
    | 'contact_update'
    | 'contact_delete'
    | 'add_to_segment'
    | undefined
  status?: string | undefined
  started_at?: (string | null) | undefined
  completed_at?: (string | null) | undefined
  output?: ({ [key: string]: unknown } | null) | undefined
  error?: ({ [key: string]: unknown } | null) | undefined
  created_at?: string | undefined
}
type AutomationRun = {
  object?: string | undefined
  id?: string | undefined
  status?: 'running' | 'completed' | 'failed' | 'cancelled' | undefined
  started_at?: (string | null) | undefined
  completed_at?: (string | null) | undefined
  created_at?: string | undefined
  steps?: AutomationRunStep[] | undefined
}
type CancelAutomationRunResponse = {
  object?: string | undefined
  id?: string | undefined
  status?: string | undefined
}
type CreateEventRequestInput = { name: string; schema?: { [key: string]: unknown } | null }
type CreateEventResponse = { object?: string | undefined; id?: string | undefined }
type EventSummary = {
  id?: string | undefined
  name?: string | undefined
  schema?: ({ [key: string]: unknown } | null) | undefined
  created_at?: string | undefined
  updated_at?: (string | null) | undefined
}
type ListEventsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: EventSummary[] | undefined
}
type SendEventRequestInput = {
  event: string
  contact_id?: string
  email?: string
  payload?: { [key: string]: unknown }
}
type SendEventResponse = { object?: string | undefined; event?: string | undefined }
type Event = {
  object?: string | undefined
  id?: string | undefined
  name?: string | undefined
  schema?: ({ [key: string]: unknown } | null) | undefined
  created_at?: string | undefined
  updated_at?: (string | null) | undefined
}
type UpdateEventRequestInput = { schema: { [key: string]: unknown } | null }
type UpdateEventResponse = { object?: string | undefined; id?: string | undefined }
type RemoveEventResponse = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type CreateSuppressionOptionsInput = { email: string }
type CreateSuppressionResponseSuccess = { object?: string | undefined; id?: string | undefined }
type ListSuppressionsResponseSuccess = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?:
    | {
        id?: string | undefined
        email?: string | undefined
        origin?: 'bounce' | 'complaint' | 'manual' | undefined
        source_id?: (string | null) | undefined
        created_at?: string | undefined
      }[]
    | undefined
}
type BatchAddSuppressionsOptionsInput = { emails: string[] }
type BatchAddSuppressionsResponseSuccess = {
  data?: { object?: string | undefined; id?: string | undefined }[] | undefined
}
type BatchRemoveSuppressionsOptionsInput = { emails?: string[]; ids?: string[] }
type BatchRemoveSuppressionsResponseSuccess = {
  data?:
    | { object?: string | undefined; id?: string | undefined; deleted?: boolean | undefined }[]
    | undefined
}
type GetSuppressionResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  email?: string | undefined
  origin?: 'bounce' | 'complaint' | 'manual' | undefined
  source_id?: (string | null) | undefined
  created_at?: string | undefined
}
type RemoveSuppressionResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type GetUsageResponseSuccess = {
  object?: string | undefined
  emails?:
    | {
        daily?:
          | {
              used?: number | undefined
              limit?: (number | null) | undefined
              sent?: number | undefined
              received?: number | undefined
              resets_at?: string | undefined
            }
          | undefined
        monthly?:
          | {
              used?: number | undefined
              limit?: number | undefined
              sent?: number | undefined
              received?: number | undefined
              resets_at?: string | undefined
            }
          | undefined
      }
    | undefined
  contacts?: { used?: number | undefined; limit?: number | undefined } | undefined
  segments?: { used?: number | undefined; limit?: (number | null) | undefined } | undefined
  broadcasts?: { used?: number | undefined; limit?: null | undefined } | undefined
  ai_credits?:
    | {
        used?: number | undefined
        limit?: (number | null) | undefined
        next_increase_at?: (string | null) | undefined
      }
    | undefined
  automation_runs?:
    | { used?: number | undefined; limit?: number | undefined; resets_at?: string | undefined }
    | undefined
  domains?: { used?: number | undefined; limit?: (number | null) | undefined } | undefined
  rate_limit?: { limit?: number | undefined; duration?: string | undefined } | undefined
}
type CreateInboxOptionsInput = {
  email_address: string
  name?: string
  from_name?: string
  forwarding?: boolean
}
type CreateInboxResponseSuccess = { object: string; id: string }
type ListInboxesResponseSuccess = {
  object: string
  has_more: boolean
  data: {
    id: string
    name: string | null
    email_address: string
    from_name: string | null
    unread: number
    last_received: string | null
    created_at: string
    updated_at: string
  }[]
}
type Inbox = {
  object: string
  id: string
  name: string
  email_address: string
  domain_id: string
  receiving_address: string | null
  from_name: string | null
  unread: number
  drafts: number
  last_received: string | null
  created_at: string
  updated_at: string
}
type UpdateInboxOptionsInput = unknown | unknown
type UpdateInboxResponseSuccess = { object: string; id: string }
type RemoveInboxResponseSuccess = { object: string; id: string; deleted: boolean }
type InboxAgent = {
  object: string
  instructions: string | null
  tone:
    | 'concise_professional'
    | 'concise_casual'
    | 'expanded_professional'
    | 'expanded_casual'
    | null
  actions: (
    | 'draft_reply'
    | 'forward_thread'
    | 'add_labels'
    | 'assign_thread'
    | 'mark_as_spam'
    | 'archive'
    | 'move_to_trash'
  )[]
}
type UpdateInboxAgentOptionsInput = unknown | unknown | unknown
type UpdateInboxAgentResponseSuccess = { object: string; id: string }
type InboxLabel = { id: string; name: string; color: string; created_at: string }
type ListInboxLabelsResponseSuccess = { object: string; data: InboxLabel[] }
type CreateInboxLabelOptionsInput = { name: string; color?: string }
type CreateInboxLabelResponseSuccess = { object: string; id: string }
type UpdateInboxLabelOptionsInput = { name?: string; color?: string }
type UpdateInboxLabelResponseSuccess = { object: string; id: string }
type RemoveInboxLabelResponseSuccess = { object: string; id: string; deleted: boolean }
type InboxThreadLabel = { id: string; name: string; color: string }
type InboxThread = {
  id: string
  subject: string | null
  from: string | null
  to: string[]
  cc: string[]
  bcc: string[]
  labels: InboxThreadLabel[]
  email_count: number
  has_attachment: boolean
  has_draft: boolean
  read: boolean
  received_at: string
  folder: 'inbox' | 'archive' | 'spam' | 'sent' | 'trash'
}
type ListInboxThreadsResponseSuccess = { object: string; has_more: boolean; data: InboxThread[] }
type InboxThreadSearchResult = InboxThread & { matched_email_id: string | null }
type SearchInboxThreadsResponseSuccess = {
  object: string
  has_more: boolean
  data: InboxThreadSearchResult[]
}
type InboxThreadSummary = {
  object: string
  id: string
  subject: string | null
  folder: 'inbox' | 'archive' | 'spam' | 'sent' | 'trash'
  labels: InboxThreadLabel[]
  read: boolean
}
type UpdateInboxThreadOptionsInput = unknown | unknown
type RemoveInboxThreadResponseSuccess = { object: string; id: string; deleted: boolean }
type AddInboxThreadLabelsOptionsInput = { labels: string[] }
type InboxThreadLabelList = { object: string; data: InboxThreadLabel[] }
type SetInboxThreadLabelsOptionsInput = { labels: string[] }
type InboxThreadEmailAttachment = { id: string; filename: string | null; size: number | null }
type InboxThreadEmail = {
  id: string
  direction: 'inbound' | 'outbound'
  from: string
  to: string[]
  cc: string[]
  bcc: string[]
  reply_to: string[]
  subject: string | null
  message_id: string | null
  html: string | null
  text: string | null
  attachments: InboxThreadEmailAttachment[]
  read: boolean
  received_at: string
}
type ListInboxThreadEmailsResponseSuccess = {
  object: string
  has_more: boolean
  data: InboxThreadEmail[]
}
type ReplyInboxThreadEmailOptionsInput = unknown | unknown
type ReplyInboxThreadEmailResponseSuccess = { id: string }
type ForwardInboxThreadEmailOptionsInput = {
  to: string | string[]
  cc?: string | string[] | null
  bcc?: string | string[] | null
  html?: string
  text?: string
  subject?: string
  attachments?: AttachmentInput[] | null
  headers?: { [key: string]: string } | null
}
type ForwardInboxThreadEmailResponseSuccess = { id: string }
type InboxDraftAttachment = { id: string; filename: string; content_type: string; size: number }
type InboxDraftListItem = {
  id: string
  type: 'standalone' | 'reply'
  to: string[] | null
  cc: string[]
  bcc: string[]
  subject: string | null
  snippet: string | null
  thread_id: string | null
  reply_to_email_id: string | null
  updated_at: string
  attachments: InboxDraftAttachment[]
}
type ListInboxDraftsResponseSuccess = {
  object: string
  has_more: boolean
  data: InboxDraftListItem[]
}
type InboxDraftAttachmentInputInput = {
  content?: string
  path?: string
  filename: string
  content_type?: string
}
type CreateInboxDraftOptionsInput = {
  to?: string | string[] | null
  cc?: string | string[] | null
  bcc?: string | string[] | null
  subject?: string | null
  html?: string | null
  text?: string | null
  attachments?: InboxDraftAttachmentInputInput[] | null
  thread_id?: string
  reply_to_email_id?: string
}
type CreateInboxDraftResponseSuccess = { object: string; id: string }
type InboxDraft = {
  object: string
  id: string
  type: 'standalone' | 'reply'
  to: string[] | null
  cc: string[]
  bcc: string[]
  subject: string | null
  html: string | null
  text: string | null
  thread_id: string | null
  reply_to_email_id: string | null
  email_id: string | null
  created_at: string
  updated_at: string
  attachments: InboxDraftAttachment[]
}
type UpdateInboxDraftOptionsInput =
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
  | unknown
type UpdateInboxDraftResponseSuccess = { object: string; id: string }
type RemoveInboxDraftResponseSuccess = { object: string; id: string; deleted: true }
type SendInboxDraftOptionsInput = { headers?: { [key: string]: string } | null }
type SendInboxDraftResponseSuccess = { id: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/emails': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string } } & { json: SendEmailRequestInput }
        output: SendEmailResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListEmailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/:email_id': {
      $get: {
        input: { param: { email_id: string } }
        output: Email
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { email_id: string } }
        output: UpdateEmailOptions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/:email_id/cancel': {
      $post: {
        input: { param: { email_id: string } }
        output: Email
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/:email_id/share': {
      $post: {
        input: { param: { email_id: string } } & { json: ShareEmailOptionsInput }
        output: ShareEmailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/batch': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string } } & { json: SendEmailRequestInput[] }
        output: CreateBatchEmailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/:email_id/attachments': {
      $get: {
        input: { param: { email_id: string } } & {
          query: { limit?: unknown; after?: string; before?: string }
        }
        output: ListAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/:email_id/attachments/:attachment_id': {
      $get: {
        input: { param: { email_id: string; attachment_id: string } }
        output: RetrievedAttachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/receiving': {
      $get: {
        input: {
          query: {
            limit?: unknown
            after?: string
            before?: string
            to?: unknown
            start_date?: string
            end_date?: string
          }
        }
        output: ListReceivedEmailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/receiving/:email_id': {
      $get: {
        input: { param: { email_id: string } }
        output: GetReceivedEmailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/receiving/:email_id/attachments': {
      $get: {
        input: { param: { email_id: string } } & {
          query: { limit?: unknown; after?: string; before?: string }
        }
        output: ListAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/receiving/:email_id/attachments/:attachment_id': {
      $get: {
        input: { param: { email_id: string; attachment_id: string } }
        output: RetrievedAttachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/metrics': {
      $get: {
        input: {
          query: {
            start_date?: string
            end_date?: string
            timezone?: string
            granularity?: 'hourly' | 'daily' | 'weekly' | 'monthly'
            metrics?: unknown
            dimensions?: unknown
            domain_id?: unknown
            email_id?: unknown
            broadcast_id?: unknown
          }
        }
        output: GetEmailsMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains': {
      $post: {
        input: { json: CreateDomainRequestInput }
        output: CreateDomainResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domain_id': {
      $get: {
        input: { param: { domain_id: string } }
        output: Domain
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { domain_id: string } } & { json: UpdateDomainOptionsInput }
        output: UpdateDomainResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { domain_id: string } }
        output: DeleteDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domain_id/verify': {
      $post: {
        input: { param: { domain_id: string } } & { json: VerifyDomainOptionsInput }
        output: VerifyDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domain_id/forge': {
      $post: {
        input: { param: { domain_id: string } } & { json: EnableForgeRequestInput }
        output: Domain
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/claim': {
      $post:
        | {
            input: { json: CreateDomainClaimRequestInput }
            output: DomainClaim
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDomainClaimRequestInput }
            output: DomainClaim
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/domains/:domain_id/claim': {
      $get: {
        input: { param: { domain_id: string } }
        output: DomainClaim
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domain_id/claim/verify': {
      $post: {
        input: { param: { domain_id: string } }
        output: DomainClaim
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-keys': {
      $post: {
        input: { json: CreateApiKeyRequestInput }
        output: CreateApiKeyResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListApiKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-keys/:api_key_id': {
      $patch: {
        input: { param: { api_key_id: string } } & { json: UpdateApiKeyRequestInput }
        output: UpdateApiKeyResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { api_key_id: string } }
        output: DeleteApiKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/grants': {
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListOAuthGrantsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/grants/:oauth_grant_id': {
      $delete: {
        input: { param: { oauth_grant_id: string } }
        output: RevokeOAuthGrantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates': {
      $post: {
        input: { json: CreateTemplateRequestInput }
        output: CreateTemplateResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListTemplatesResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/:id': {
      $get: {
        input: { param: { id: string } }
        output: Template
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: UpdateTemplateOptionsInput }
        output: UpdateTemplateResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: RemoveTemplateResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/:id/publish': {
      $post: {
        input: { param: { id: string } }
        output: PublishTemplateResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/:id/duplicate': {
      $post: {
        input: { param: { id: string } }
        output: DuplicateTemplateResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audiences': {
      $post: {
        input: { json: CreateAudienceOptionsInput }
        output: CreateAudienceResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: { input: {}; output: ListAudiencesResponseSuccess; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/audiences/:id': {
      $delete: {
        input: { param: { id: string } }
        output: RemoveAudienceResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: GetAudienceResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts': {
      $post: {
        input: { json: CreateContactOptionsInput }
        output: CreateContactResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListContactsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts/imports': {
      $post: {
        input: { form: CreateContactImportOptionsInput }
        output: CreateContactImportResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            status?: 'queued' | 'in_progress' | 'completed' | 'failed'
            limit?: unknown
            after?: string
            before?: string
          }
        }
        output: ListContactImportsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts/imports/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetContactImportResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetContactResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: UpdateContactOptionsInput }
        output: UpdateContactResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: RemoveContactResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcasts': {
      $post: {
        input: { json: CreateBroadcastOptionsInput }
        output: CreateBroadcastResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListBroadcastsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcasts/:id': {
      $delete: {
        input: { param: { id: string } }
        output: RemoveBroadcastResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: GetBroadcastResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: UpdateBroadcastOptionsInput }
        output: UpdateBroadcastResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcasts/:id/send': {
      $post: {
        input: { param: { id: string } } & { json: SendBroadcastOptionsInput }
        output: SendBroadcastResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcasts/:id/cancel': {
      $post: {
        input: { param: { id: string } }
        output: CancelBroadcastResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcasts/:id/duplicate': {
      $post: {
        input: { param: { id: string } }
        output: DuplicateBroadcastResponseSuccess
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/broadcasts/:id/recipients': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            type:
              | 'sent'
              | 'delivered'
              | 'opened'
              | 'clicked'
              | 'bounced'
              | 'complained'
              | 'unsubscribed'
              | 'suppressed'
            email?: string
            bounce_type?: 'permanent' | 'transient' | 'undetermined'
            limit?: unknown
            after?: string
            before?: string
          }
        }
        output: ListBroadcastRecipientsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcasts/:id/clicked-links': {
      $get: {
        input: { param: { id: string } } & {
          query: { limit?: unknown; after?: string; before?: string }
        }
        output: ListBroadcastClickedLinksResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks': {
      $post: {
        input: { json: CreateWebhookRequestInput }
        output: CreateWebhookResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListWebhooksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:webhook_id': {
      $get: {
        input: { param: { webhook_id: string } }
        output: GetWebhookResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { webhook_id: string } } & { json: UpdateWebhookRequestInput }
        output: UpdateWebhookResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { webhook_id: string } }
        output: DeleteWebhookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:webhook_id/signing-secret/rotate': {
      $post: {
        input: { param: { webhook_id: string } }
        output: RotateWebhookSigningSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:webhook_id/events': {
      $get: {
        input: { param: { webhook_id: string } } & { query: { limit?: unknown; after?: string } }
        output: ListWebhookEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:webhook_id/events/:event_id': {
      $get: {
        input: { param: { webhook_id: string; event_id: string } }
        output: GetWebhookEventResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:webhook_id/events/:event_id/replay': {
      $post: {
        input: { param: { webhook_id: string; event_id: string } }
        output: ReplayWebhookEventResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:webhook_id/events/:event_id/attempts': {
      $get: {
        input: { param: { webhook_id: string; event_id: string } } & {
          query: { limit?: unknown; after?: string }
        }
        output: ListWebhookEventAttemptsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/segments': {
      $post: {
        input: { json: CreateSegmentOptionsInput }
        output: CreateSegmentResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListSegmentsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/segments/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetSegmentResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: UpdateSegmentOptionsInput }
        output: UpdateSegmentResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: RemoveSegmentResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/segments/:id/contacts': {
      $get: {
        input: { param: { id: string } } & {
          query: { limit?: unknown; after?: string; before?: string }
        }
        output: ListContactsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/topics': {
      $post: {
        input: { json: CreateTopicOptionsInput }
        output: CreateTopicResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListTopicsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/topics/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetTopicResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: UpdateTopicOptionsInput }
        output: UpdateTopicResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: RemoveTopicResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contact-properties': {
      $post: {
        input: { json: CreateContactPropertyOptionsInput }
        output: CreateContactPropertyResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListContactPropertiesResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contact-properties/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetContactPropertyResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: UpdateContactPropertyOptionsInput }
        output: UpdateContactPropertyResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: RemoveContactPropertyResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts/:contact_id/segments': {
      $get: {
        input: { param: { contact_id: string } } & {
          query: { limit?: unknown; after?: string; before?: string }
        }
        output: ListContactSegmentsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts/:contact_id/segments/:segment_id': {
      $post: {
        input: { param: { contact_id: string; segment_id: string } }
        output: AddContactToSegmentResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { contact_id: string; segment_id: string } }
        output: RemoveContactFromSegmentResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts/:contact_id/topics': {
      $get: {
        input: { param: { contact_id: string } } & {
          query: { limit?: unknown; after?: string; before?: string }
        }
        output: GetContactTopicsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { contact_id: string } } & { json: UpdateContactTopicsOptionsInput }
        output: UpdateContactTopicsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/logs': {
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/logs/:log_id': {
      $get: { input: { param: { log_id: string } }; output: Log; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/automations': {
      $post: {
        input: { json: CreateAutomationRequestInput }
        output: CreateAutomationResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            status?: 'enabled' | 'disabled'
            limit?: unknown
            after?: string
            before?: string
          }
        }
        output: ListAutomationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/automations/:automation_id': {
      $get: {
        input: { param: { automation_id: string } }
        output: Automation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { automation_id: string } } & { json: PatchAutomationRequestInput }
        output: PatchAutomationResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { automation_id: string } }
        output: DeleteAutomationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/automations/:automation_id/duplicate': {
      $post: {
        input: { param: { automation_id: string } }
        output: DuplicateAutomationResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/automations/:automation_id/stop': {
      $post: {
        input: { param: { automation_id: string } }
        output: StopAutomationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/automations/:automation_id/runs': {
      $get: {
        input: { param: { automation_id: string } } & {
          query: { status?: string; limit?: unknown; after?: string; before?: string }
        }
        output: ListAutomationRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/automations/:automation_id/runs/:run_id': {
      $get: {
        input: { param: { automation_id: string; run_id: string } }
        output: AutomationRun
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/automations/:automation_id/runs/:run_id/cancel': {
      $post: {
        input: { param: { automation_id: string; run_id: string } }
        output: CancelAutomationRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events': {
      $post: {
        input: { json: CreateEventRequestInput }
        output: CreateEventResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/send': {
      $post: {
        input: { json: SendEventRequestInput }
        output: SendEventResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/events/:identifier': {
      $get: {
        input: { param: { identifier: string } }
        output: Event
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { identifier: string } } & { json: UpdateEventRequestInput }
        output: UpdateEventResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { identifier: string } }
        output: RemoveEventResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppressions': {
      $post: {
        input: { json: CreateSuppressionOptionsInput }
        output: CreateSuppressionResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            origin?: 'bounce' | 'complaint' | 'manual'
            limit?: unknown
            after?: string
            before?: string
          }
        }
        output: ListSuppressionsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppressions/batch/add': {
      $post: {
        input: { json: BatchAddSuppressionsOptionsInput }
        output: BatchAddSuppressionsResponseSuccess
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/suppressions/batch/remove': {
      $post: {
        input: { json: BatchRemoveSuppressionsOptionsInput }
        output: BatchRemoveSuppressionsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppressions/:suppression': {
      $get: {
        input: { param: { suppression: string } }
        output: GetSuppressionResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { suppression: string } }
        output: RemoveSuppressionResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usage': {
      $get: { input: {}; output: GetUsageResponseSuccess; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/inboxes': {
      $post: {
        input: { json: CreateInboxOptionsInput }
        output: CreateInboxResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { limit?: unknown; after?: string; before?: string } }
        output: ListInboxesResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id': {
      $get: {
        input: { param: { inbox_id: string } }
        output: Inbox
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { inbox_id: string } } & { json: UpdateInboxOptionsInput }
        output: UpdateInboxResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { inbox_id: string } }
        output: RemoveInboxResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/agent': {
      $get: {
        input: { param: { inbox_id: string } }
        output: InboxAgent
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { inbox_id: string } } & { json: UpdateInboxAgentOptionsInput }
        output: UpdateInboxAgentResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/labels': {
      $get: {
        input: { param: { inbox_id: string } }
        output: ListInboxLabelsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { inbox_id: string } } & { json: CreateInboxLabelOptionsInput }
        output: CreateInboxLabelResponseSuccess
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/inboxes/:inbox_id/labels/:label_id': {
      $patch: {
        input: { param: { inbox_id: string; label_id: string } } & {
          json: UpdateInboxLabelOptionsInput
        }
        output: UpdateInboxLabelResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { inbox_id: string; label_id: string } }
        output: RemoveInboxLabelResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads': {
      $get: {
        input: { param: { inbox_id: string } } & {
          query: {
            folders?: unknown
            labels?: unknown
            read?: string
            limit?: unknown
            after?: string
            before?: string
          }
        }
        output: ListInboxThreadsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/search': {
      $get: {
        input: { param: { inbox_id: string } } & {
          query: {
            query?: string
            from?: unknown
            to?: unknown
            cc?: unknown
            bcc?: unknown
            has_attachment?: string
            start_date?: string
            end_date?: string
            folders?: unknown
            labels?: unknown
            read?: string
            limit?: unknown
            after?: string
            before?: string
          }
        }
        output: SearchInboxThreadsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/:thread_id': {
      $get: {
        input: { param: { inbox_id: string; thread_id: string } }
        output: InboxThreadSummary
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { inbox_id: string; thread_id: string } } & {
          json: UpdateInboxThreadOptionsInput
        }
        output: InboxThreadSummary
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { inbox_id: string; thread_id: string } }
        output: RemoveInboxThreadResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/:thread_id/labels': {
      $post: {
        input: { param: { inbox_id: string; thread_id: string } } & {
          json: AddInboxThreadLabelsOptionsInput
        }
        output: InboxThreadLabelList
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { inbox_id: string; thread_id: string } } & {
          json: SetInboxThreadLabelsOptionsInput
        }
        output: InboxThreadLabelList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/:thread_id/labels/:label_id': {
      $delete: {
        input: { param: { inbox_id: string; thread_id: string; label_id: string } }
        output: InboxThreadLabelList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/:thread_id/emails': {
      $get: {
        input: { param: { inbox_id: string; thread_id: string } } & {
          query: { limit?: unknown; after?: string; before?: string }
        }
        output: ListInboxThreadEmailsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id': {
      $get: {
        input: { param: { inbox_id: string; thread_id: string; email_id: string } }
        output: InboxThreadEmail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id/reply': {
      $post: {
        input: { param: { inbox_id: string; thread_id: string; email_id: string } } & {
          header: { 'Idempotency-Key'?: string }
        } & { json: ReplyInboxThreadEmailOptionsInput }
        output: ReplyInboxThreadEmailResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id/forward': {
      $post: {
        input: { param: { inbox_id: string; thread_id: string; email_id: string } } & {
          header: { 'Idempotency-Key'?: string }
        } & { json: ForwardInboxThreadEmailOptionsInput }
        output: ForwardInboxThreadEmailResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/drafts': {
      $get: {
        input: { param: { inbox_id: string } } & {
          query: { limit?: unknown; after?: string; before?: string }
        }
        output: ListInboxDraftsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { inbox_id: string } } & { header: { 'Idempotency-Key'?: string } } & {
              json: CreateInboxDraftOptionsInput
            }
            output: CreateInboxDraftResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & { header: { 'Idempotency-Key'?: string } } & {
              json: CreateInboxDraftOptionsInput
            }
            output: CreateInboxDraftResponseSuccess
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/inboxes/:inbox_id/drafts/:draft_id': {
      $get: {
        input: { param: { inbox_id: string; draft_id: string } }
        output: InboxDraft
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { inbox_id: string; draft_id: string } } & {
          json: UpdateInboxDraftOptionsInput
        }
        output: UpdateInboxDraftResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { inbox_id: string; draft_id: string } }
        output: RemoveInboxDraftResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/drafts/:draft_id/send': {
      $post: {
        input: { param: { inbox_id: string; draft_id: string } } & {
          header: { 'Idempotency-Key'?: string }
        } & { json: SendInboxDraftOptionsInput }
        output: SendInboxDraftResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
