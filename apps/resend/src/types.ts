type Attachment = {
  content?: File | undefined
  filename?: string | undefined
  path?: string | undefined
  content_type?: string | undefined
  content_id?: string | undefined
}
type Tag = { name?: string | undefined; value?: string | undefined }
type SendEmailRequest = {
  from: string
  to: string | string[]
  subject: string
  bcc?: string | string[] | undefined
  cc?: string | string[] | undefined
  reply_to?: string | string[] | undefined
  html?: string | undefined
  text?: string | undefined
  template?: { id: string; variables?: { [x: string]: string | number } | undefined } | undefined
  headers?: { [x: string]: unknown } | undefined
  scheduled_at?: string | undefined
  attachments?: Attachment[] | undefined
  tags?: Tag[] | undefined
  topic_id?: string | undefined
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
type ShareEmailOptions = { expires_in?: string | undefined }
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
        content_disposition?: 'inline' | 'attachment' | null | undefined
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
  content_disposition?: 'inline' | 'attachment' | null | undefined
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
              content_disposition?: 'inline' | 'attachment' | null | undefined
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
  headers?: ({ [x: string]: unknown } | null) | undefined
  created_at?: string | undefined
  attachments?:
    | {
        id?: string | undefined
        filename?: (string | null) | undefined
        content_type?: string | undefined
        content_id?: string | undefined
        content_disposition?: 'inline' | 'attachment' | null | undefined
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
  totals?: { [x: string]: number } | undefined
  data?: EmailMetricsDataRow[] | undefined
}
type DomainCapabilities = {
  sending?: 'enabled' | 'disabled' | undefined
  receiving?: 'enabled' | 'disabled' | undefined
}
type CreateDomainRequest = {
  name: string
  region?: 'us-east-1' | 'eu-west-1' | 'sa-east-1' | 'ap-northeast-1' | undefined
  custom_return_path?: string | undefined
  open_tracking?: boolean | undefined
  click_tracking?: boolean | undefined
  tls?: 'opportunistic' | 'enforced' | undefined
  capabilities?: DomainCapabilities | undefined
  tracking_subdomain?: string | undefined
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
type UpdateDomainOptions = {
  open_tracking?: boolean | undefined
  click_tracking?: boolean | undefined
  tls?: 'opportunistic' | 'enforced' | undefined
  capabilities?: DomainCapabilities | undefined
  tracking_subdomain?: string | undefined
}
type UpdateDomainResponseSuccess = { id?: string | undefined; object?: string | undefined }
type DeleteDomainResponse = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type VerifyDomainOptions = { scope?: 'forge'[] | undefined }
type VerifyDomainResponse = { object?: string | undefined; id?: string | undefined }
type EnableForgeRequest = { custom_return_path?: string | undefined }
type CreateDomainClaimRequest = {
  name: string
  region?: 'us-east-1' | 'eu-west-1' | 'sa-east-1' | 'ap-northeast-1' | undefined
  custom_return_path?: string | undefined
  open_tracking?: boolean | undefined
  click_tracking?: boolean | undefined
  tracking_subdomain?: string | undefined
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
  region?: 'us-east-1' | 'eu-west-1' | 'sa-east-1' | 'ap-northeast-1' | null | undefined
  record?: DomainClaimRecord | undefined
  blocked_reason?:
    | 'grace_period'
    | 'recent_owner_activity'
    | 'pending_scheduled_emails'
    | null
    | undefined
  failure_reason?: (string | null) | undefined
  created_at?: string | undefined
  expires_at?: string | undefined
}
type CreateApiKeyRequest = {
  name: string
  permission?: 'full_access' | 'sending_access' | undefined
  domain_id?: string | undefined
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
type UpdateApiKeyRequest = { name: string }
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
type TemplateVariableInput = {
  key: string
  type: 'string' | 'number' | 'boolean' | 'object' | 'list'
  fallback_value?:
    | string
    | number
    | boolean
    | { [x: string]: unknown }
    | { [x: string]: unknown }[]
    | undefined
}
type CreateTemplateRequest = {
  name: string
  alias?: string | undefined
  from?: string | undefined
  subject?: string | undefined
  reply_to?: string[] | undefined
  html: string
  text?: string | undefined
  variables?: TemplateVariableInput[] | undefined
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
  fallback_value?:
    | string
    | number
    | boolean
    | { [x: string]: unknown }
    | { [x: string]: unknown }[]
    | undefined
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
type UpdateTemplateOptions = {
  name?: string | undefined
  alias?: string | undefined
  from?: string | undefined
  subject?: string | undefined
  reply_to?: string[] | undefined
  html?: string | undefined
  text?: string | undefined
  variables?: TemplateVariableInput[] | undefined
}
type UpdateTemplateResponseSuccess = { id?: string | undefined; object?: string | undefined }
type RemoveTemplateResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type PublishTemplateResponseSuccess = { id?: string | undefined; object?: string | undefined }
type DuplicateTemplateResponseSuccess = { id?: string | undefined; object?: string | undefined }
type CreateAudienceOptions = { name: string }
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
type CreateContactOptions = {
  email: string
  first_name?: string | undefined
  last_name?: string | undefined
  unsubscribed?: boolean | undefined
  properties?: { [x: string]: string | number | null } | undefined
  segments?: { id?: string | undefined }[] | undefined
  topics?:
    | { id?: string | undefined; subscription?: 'opt_in' | 'opt_out' | undefined }[]
    | undefined
  audience_id?: string | undefined
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
type CreateContactImportOptions = {
  file: File
  column_map?: string | undefined
  on_conflict?: 'upsert' | 'skip' | undefined
  segments?: string | undefined
  topics?: string | undefined
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
type GetContactImportResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  status?: 'queued' | 'in_progress' | 'completed' | 'failed' | undefined
  created_at?: string | undefined
  completed_at?: (string | null) | undefined
  counts?: ContactImportCounts | undefined
}
type GetContactResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  email?: string | undefined
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  created_at?: string | undefined
  unsubscribed?: boolean | undefined
  properties?: { [x: string]: unknown } | undefined
}
type UpdateContactOptions = {
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  unsubscribed?: boolean | undefined
  properties?: { [x: string]: string | number | boolean | null } | undefined
}
type UpdateContactResponseSuccess = { object?: string | undefined; id?: string | undefined }
type RemoveContactResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type CreateBroadcastOptions = {
  name?: string | undefined
  segment_id: string
  audience_id?: string | undefined
  from: string
  subject: string
  reply_to?: string[] | undefined
  preview_text?: string | undefined
  html?: string | undefined
  text?: string | undefined
  topic_id?: string | undefined
  send?: boolean | undefined
  scheduled_at?: string | undefined
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
type UpdateBroadcastOptions = {
  name?: string | undefined
  audience_id?: string | undefined
  segment_id?: string | undefined
  from?: string | undefined
  subject?: string | undefined
  reply_to?: string[] | undefined
  preview_text?: string | undefined
  html?: string | undefined
  text?: string | undefined
  topic_id?: string | undefined
}
type UpdateBroadcastResponseSuccess = { id?: string | undefined; object?: string | undefined }
type SendBroadcastOptions = { scheduled_at?: string | undefined }
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
type CreateWebhookRequest = { endpoint: string; events: string[] }
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
type UpdateWebhookRequest = {
  endpoint?: string | undefined
  events?: string[] | undefined
  status?: 'enabled' | 'disabled' | undefined
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
  payload?: { [x: string]: unknown } | undefined
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
type CreateSegmentOptions = {
  name: string
  audience_id?: string | undefined
  filter?: { [x: string]: unknown } | undefined
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
  filter?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
}
type UpdateSegmentOptions = { name: string }
type UpdateSegmentResponseSuccess = { id?: string | undefined; object?: string | undefined }
type RemoveSegmentResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  deleted?: boolean | undefined
}
type CreateTopicOptions = {
  name: string
  default_subscription: 'opt_in' | 'opt_out'
  description?: string | undefined
  visibility?: 'public' | 'private' | undefined
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
type UpdateTopicOptions = {
  name?: string | undefined
  description?: string | undefined
  visibility?: 'public' | 'private' | undefined
}
type UpdateTopicResponseSuccess = { id?: string | undefined; object?: string | undefined }
type RemoveTopicResponseSuccess = {
  id?: string | undefined
  object?: string | undefined
  deleted?: boolean | undefined
}
type CreateContactPropertyOptions = {
  key: string
  type: 'string' | 'number'
  fallback_value?: string | number | undefined
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
        fallback_value?: string | number | undefined
        created_at?: string | undefined
      }[]
    | undefined
}
type GetContactPropertyResponseSuccess = {
  object?: string | undefined
  id?: string | undefined
  key?: string | undefined
  type?: string | undefined
  fallback_value?: string | number | undefined
  created_at?: string | undefined
}
type UpdateContactPropertyOptions = { fallback_value?: string | number | undefined }
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
type UpdateContactTopicsOptions = {
  topics: { id?: string | undefined; subscription?: 'opt_in' | 'opt_out' | undefined }[]
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
  request_body?: ({ [x: string]: unknown } | null) | undefined
  response_body?: ({ [x: string]: unknown } | null) | undefined
}
type AutomationStep = {
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
  config: { [x: string]: unknown }
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
type CreateAutomationRequest = {
  name: string
  status?: 'enabled' | 'disabled' | undefined
  steps: AutomationStep[]
  connections: AutomationConnection[]
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
  config?: { [x: string]: unknown } | undefined
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
type PatchAutomationRequest = {
  name?: string | undefined
  status?: 'enabled' | 'disabled' | undefined
  steps?: AutomationStep[] | undefined
  connections?: AutomationConnection[] | undefined
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
  output?: ({ [x: string]: unknown } | null) | undefined
  error?: ({ [x: string]: unknown } | null) | undefined
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
type CreateEventRequest = { name: string; schema?: ({ [x: string]: unknown } | null) | undefined }
type CreateEventResponse = { object?: string | undefined; id?: string | undefined }
type EventSummary = {
  id?: string | undefined
  name?: string | undefined
  schema?: ({ [x: string]: unknown } | null) | undefined
  created_at?: string | undefined
  updated_at?: (string | null) | undefined
}
type ListEventsResponse = {
  object?: string | undefined
  has_more?: boolean | undefined
  data?: EventSummary[] | undefined
}
type SendEventRequest = {
  event: string
  contact_id?: string | undefined
  email?: string | undefined
  payload?: { [x: string]: unknown } | undefined
}
type SendEventResponse = { object?: string | undefined; event?: string | undefined }
type Event = {
  object?: string | undefined
  id?: string | undefined
  name?: string | undefined
  schema?: ({ [x: string]: unknown } | null) | undefined
  created_at?: string | undefined
  updated_at?: (string | null) | undefined
}
type UpdateEventRequest = { schema: { [x: string]: unknown } | null }
type UpdateEventResponse = { object?: string | undefined; id?: string | undefined }
type RemoveEventResponse = {
  object?: string | undefined
  id?: string | undefined
  deleted?: boolean | undefined
}
type CreateSuppressionOptions = { email: string }
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
type BatchAddSuppressionsOptions = { emails: string[] }
type BatchAddSuppressionsResponseSuccess = {
  data?: { object?: string | undefined; id?: string | undefined }[] | undefined
}
type BatchRemoveSuppressionsOptions = { emails?: string[] | undefined; ids?: string[] | undefined }
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
  broadcasts?:
    | { used?: number | undefined; limit?: ({ [x: string]: unknown } | null) | undefined }
    | undefined
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
type CreateInboxOptions = {
  email_address: string
  name?: string | undefined
  from_name?: string | undefined
  forwarding?: boolean | undefined
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
type UpdateInboxOptions = { [x: string]: unknown } | { [x: string]: unknown }
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
type UpdateInboxAgentOptions =
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
type UpdateInboxAgentResponseSuccess = { object: string; id: string }
type InboxLabel = { id: string; name: string; color: string; created_at: string }
type ListInboxLabelsResponseSuccess = { object: string; data: InboxLabel[] }
type CreateInboxLabelOptions = { name: string; color?: string | undefined }
type CreateInboxLabelResponseSuccess = { object: string; id: string }
type UpdateInboxLabelOptions = { name?: string | undefined; color?: string | undefined }
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
type InboxThreadSearchResult = {
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
  matched_email_id: string | null
}
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
type UpdateInboxThreadOptions = { [x: string]: unknown } | { [x: string]: unknown }
type RemoveInboxThreadResponseSuccess = { object: string; id: string; deleted: boolean }
type AddInboxThreadLabelsOptions = { labels: string[] }
type InboxThreadLabelList = { object: string; data: InboxThreadLabel[] }
type SetInboxThreadLabelsOptions = { labels: string[] }
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
type ReplyInboxThreadEmailOptions = { [x: string]: unknown } | { [x: string]: unknown }
type ReplyInboxThreadEmailResponseSuccess = { id: string }
type ForwardInboxThreadEmailOptions = {
  to: string | string[]
  cc?: string | string[] | ({ [x: string]: unknown } | null) | undefined
  bcc?: string | string[] | ({ [x: string]: unknown } | null) | undefined
  html?: string | undefined
  text?: string | undefined
  subject?: string | undefined
  attachments?: (Attachment[] | null) | undefined
  headers?: ({ [x: string]: string } | null) | undefined
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
type InboxDraftAttachmentInput = {
  content?: string | undefined
  path?: string | undefined
  filename: string
  content_type?: string | undefined
}
type CreateInboxDraftOptions = {
  to?: string | string[] | ({ [x: string]: unknown } | null) | undefined
  cc?: string | string[] | ({ [x: string]: unknown } | null) | undefined
  bcc?: string | string[] | ({ [x: string]: unknown } | null) | undefined
  subject?: (string | null) | undefined
  html?: (string | null) | undefined
  text?: (string | null) | undefined
  attachments?: (InboxDraftAttachmentInput[] | null) | undefined
  thread_id?: string | undefined
  reply_to_email_id?: string | undefined
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
type UpdateInboxDraftOptions =
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
  | { [x: string]: unknown }
type UpdateInboxDraftResponseSuccess = { object: string; id: string }
type RemoveInboxDraftResponseSuccess = { object: string; id: string; deleted: true }
type SendInboxDraftOptions = { headers?: ({ [x: string]: string } | null) | undefined }
type SendInboxDraftResponseSuccess = { id: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/emails': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: SendEmailRequest }
        output: SendEmailResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { email_id: string } } & { json: ShareEmailOptions }
        output: ShareEmailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/batch': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: SendEmailRequest[] }
        output: CreateBatchEmailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/emails/:email_id/attachments': {
      $get: {
        input: { param: { email_id: string } } & {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
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
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
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
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
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
            start_date?: string | undefined
            end_date?: string | undefined
            timezone?: string | undefined
            granularity?: 'hourly' | 'daily' | 'weekly' | 'monthly' | undefined
            metrics?:
              | (
                  | 'received'
                  | 'delivered'
                  | 'complained'
                  | 'suppressed'
                  | 'bounced'
                  | 'bounced_transient'
                  | 'bounced_permanent'
                  | 'bounced_undetermined'
                  | 'opened'
                  | 'clicked'
                  | 'unsubscribed'
                  | 'delivery_delayed'
                  | 'failed'
                  | 'sent'
                  | 'unique_opened'
                  | 'unique_clicked'
                  | 'delivery_rate'
                  | 'open_rate'
                  | 'click_rate'
                  | 'bounce_rate'
                  | 'complaint_rate'
                  | 'unsubscribe_rate'
                )[]
              | undefined
            dimensions?: ('period' | 'domain' | 'email' | 'broadcast')[] | undefined
            domain_id?: string[] | undefined
            email_id?: string[] | undefined
            broadcast_id?: string[] | undefined
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
        input: { json: CreateDomainRequest }
        output: CreateDomainResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { domain_id: string } } & { json: UpdateDomainOptions }
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
        input: { param: { domain_id: string } } & { json: VerifyDomainOptions }
        output: VerifyDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domain_id/forge': {
      $post: {
        input: { param: { domain_id: string } } & {
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: EnableForgeRequest }
        output: Domain
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/claim': {
      $post:
        | {
            input: { json: CreateDomainClaimRequest }
            output: DomainClaim
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDomainClaimRequest }
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
        input: { json: CreateApiKeyRequest }
        output: CreateApiKeyResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
        output: ListApiKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-keys/:api_key_id': {
      $patch: {
        input: { param: { api_key_id: string } } & { json: UpdateApiKeyRequest }
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
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { json: CreateTemplateRequest }
        output: CreateTemplateResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { id: string } } & { json: UpdateTemplateOptions }
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
        input: { json: CreateAudienceOptions }
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
        input: { json: CreateContactOptions }
        output: CreateContactResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
        output: ListContactsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts/imports': {
      $post: {
        input: { form: CreateContactImportOptions }
        output: CreateContactImportResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            status?: 'queued' | 'in_progress' | 'completed' | 'failed' | undefined
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
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
        input: { param: { id: string } } & { json: UpdateContactOptions }
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
        input: { json: CreateBroadcastOptions }
        output: CreateBroadcastResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { id: string } } & { json: UpdateBroadcastOptions }
        output: UpdateBroadcastResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/broadcasts/:id/send': {
      $post: {
        input: { param: { id: string } } & { json: SendBroadcastOptions }
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
            email?: string | undefined
            bounce_type?: 'permanent' | 'transient' | 'undetermined' | undefined
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
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
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
        output: ListBroadcastClickedLinksResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks': {
      $post: {
        input: { json: CreateWebhookRequest }
        output: CreateWebhookResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { webhook_id: string } } & { json: UpdateWebhookRequest }
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
        input: { param: { webhook_id: string } } & {
          query: { limit?: number | undefined; after?: string | undefined }
        }
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
          query: { limit?: number | undefined; after?: string | undefined }
        }
        output: ListWebhookEventAttemptsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/segments': {
      $post: {
        input: { json: CreateSegmentOptions }
        output: CreateSegmentResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { id: string } } & { json: UpdateSegmentOptions }
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
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
        output: ListContactsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/topics': {
      $post: {
        input: { json: CreateTopicOptions }
        output: CreateTopicResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { id: string } } & { json: UpdateTopicOptions }
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
        input: { json: CreateContactPropertyOptions }
        output: CreateContactPropertyResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { id: string } } & { json: UpdateContactPropertyOptions }
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
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
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
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
        output: GetContactTopicsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { contact_id: string } } & { json: UpdateContactTopicsOptions }
        output: UpdateContactTopicsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/logs': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { json: CreateAutomationRequest }
        output: CreateAutomationResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            status?: 'enabled' | 'disabled' | undefined
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
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
        input: { param: { automation_id: string } } & { json: PatchAutomationRequest }
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
          query: {
            status?: string | undefined
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
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
        input: { json: CreateEventRequest }
        output: CreateEventResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
        output: ListEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/send': {
      $post: {
        input: { json: SendEventRequest }
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
        input: { param: { identifier: string } } & { json: UpdateEventRequest }
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
        input: { json: CreateSuppressionOptions }
        output: CreateSuppressionResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            origin?: 'bounce' | 'complaint' | 'manual' | undefined
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
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
        input: { json: BatchAddSuppressionsOptions }
        output: BatchAddSuppressionsResponseSuccess
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/suppressions/batch/remove': {
      $post: {
        input: { json: BatchRemoveSuppressionsOptions }
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
        input: { json: CreateInboxOptions }
        output: CreateInboxResponseSuccess
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
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
        input: { param: { inbox_id: string } } & { json: UpdateInboxOptions }
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
        input: { param: { inbox_id: string } } & { json: UpdateInboxAgentOptions }
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
        input: { param: { inbox_id: string } } & { json: CreateInboxLabelOptions }
        output: CreateInboxLabelResponseSuccess
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/inboxes/:inbox_id/labels/:label_id': {
      $patch: {
        input: { param: { inbox_id: string; label_id: string } } & { json: UpdateInboxLabelOptions }
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
            folders?: ('inbox' | 'archive' | 'spam' | 'sent' | 'trash')[] | undefined
            labels?: string[] | undefined
            read?: boolean | undefined
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
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
            query?: string | undefined
            from?: string[] | undefined
            to?: string[] | undefined
            cc?: string[] | undefined
            bcc?: string[] | undefined
            has_attachment?: boolean | undefined
            start_date?: string | undefined
            end_date?: string | undefined
            folders?: ('inbox' | 'archive' | 'spam' | 'sent' | 'trash')[] | undefined
            labels?: string[] | undefined
            read?: boolean | undefined
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
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
          json: UpdateInboxThreadOptions
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
          json: AddInboxThreadLabelsOptions
        }
        output: InboxThreadLabelList
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { inbox_id: string; thread_id: string } } & {
          json: SetInboxThreadLabelsOptions
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
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
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
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: ReplyInboxThreadEmailOptions }
        output: ReplyInboxThreadEmailResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/threads/:thread_id/emails/:email_id/forward': {
      $post: {
        input: { param: { inbox_id: string; thread_id: string; email_id: string } } & {
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: ForwardInboxThreadEmailOptions }
        output: ForwardInboxThreadEmailResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inboxes/:inbox_id/drafts': {
      $get: {
        input: { param: { inbox_id: string } } & {
          query: {
            limit?: number | undefined
            after?: string | undefined
            before?: string | undefined
          }
        }
        output: ListInboxDraftsResponseSuccess
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { inbox_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateInboxDraftOptions }
            output: CreateInboxDraftResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inbox_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateInboxDraftOptions }
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
        input: { param: { inbox_id: string; draft_id: string } } & { json: UpdateInboxDraftOptions }
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
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: SendInboxDraftOptions }
        output: SendInboxDraftResponseSuccess
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
