type GlobalErrorResponseSchema = {
  errors?:
    | {
        field?: (string | null) | undefined
        help?: { [x: string]: unknown } | undefined
        message: string
      }[]
    | undefined
  id?: string | undefined
}
type IpAccessResponse = {
  result?:
    | {
        created_at?: number | undefined
        id?: number | undefined
        ip?: string | undefined
        updated_at?: number | undefined
      }[]
    | undefined
}
type ApiKeyNameId = { api_key_id?: string | undefined; name?: string | undefined }
type ApiKeyNameIdScopes = {
  scopes?: string[] | undefined
  api_key_id?: string | undefined
  name?: string | undefined
}
type SuppressionGroup = {
  description: string
  id: number
  is_default?: boolean | undefined
  last_email_sent_at?: ({ [x: string]: unknown } | null) | undefined
  name: string
  unsubscribes?: number | undefined
}
type SuppressionGroupRequestBase = {
  description?: string | undefined
  is_default?: boolean | undefined
  name?: string | undefined
}
type SuppressionsRequest = { recipient_emails: string[] }
type AdvancedStatsClicks = { clicks?: number | undefined; unique_clicks?: number | undefined }
type CampaignResponse = {
  categories?: (string[] | null) | undefined
  custom_unsubscribe_url?: (string | null) | undefined
  editor?: 'code' | 'design' | undefined
  html_content?: (string | null) | undefined
  ip_pool?: (string | null) | undefined
  list_ids?: (number[] | null) | undefined
  plain_content?: (string | null) | undefined
  segment_ids?: (number[] | null) | undefined
  sender_id?: (number | null) | undefined
  subject?: (string | null) | undefined
  suppression_group_id?: (number | null) | undefined
  title: string
  id?: number | undefined
  status: string
}
type CampaignRequest = {
  categories?: (string[] | null) | undefined
  custom_unsubscribe_url?: (string | null) | undefined
  editor?: 'code' | 'design' | undefined
  html_content?: (string | null) | undefined
  ip_pool?: (string | null) | undefined
  list_ids?: (number[] | null) | undefined
  plain_content?: (string | null) | undefined
  segment_ids?: (number[] | null) | undefined
  sender_id?: (number | null) | undefined
  subject?: (string | null) | undefined
  suppression_group_id?: (number | null) | undefined
  title: string
}
type CategoryStats = {
  date: string
  stats?:
    | {
        metrics?:
          | {
              blocks: number
              bounce_drops: number
              bounces: number
              clicks: number
              deferred: number
              delivered: number
              invalid_emails: number
              opens: number
              processed: number
              requests: number
              spam_report_drops: number
              spam_reports: number
              unique_clicks: number
              unique_opens: number
              unsubscribe_drops: number
              unsubscribes: number
            }
          | undefined
        name?: string | undefined
        type: string
      }[]
    | undefined
}
type AdvancedStatsOpens = { opens?: number | undefined; unique_opens?: number | undefined }
type ContactdbCustomFieldWithId = {
  name?: string | undefined
  type?: 'date' | 'text' | 'number' | undefined
  id?: number | undefined
}
type ContactdbList = { id: number; name: string; recipient_count: number }
type ContactdbCustomFieldWithIdValue = {
  name?: string | undefined
  type?: 'date' | 'text' | 'number' | undefined
  id?: number | undefined
  value?: (string | null) | undefined
}
type ContactdbRecipient = {
  recipients?:
    | {
        created_at?: number | undefined
        custom_fields?: ContactdbCustomFieldWithIdValue[] | undefined
        email: string
        first_name?: (string | null) | undefined
        id?: string | undefined
        last_clicked?: (number | null) | undefined
        last_emailed?: (number | null) | undefined
        last_name?: (string | null) | undefined
        last_opened?: (number | null) | undefined
        updated_at?: number | undefined
      }[]
    | undefined
}
type ContactdbRecipientResponse = {
  error_count: number
  error_indices?: number[] | undefined
  errors?: { error_indices?: number[] | undefined; message?: string | undefined }[] | undefined
  new_count: number
  persisted_recipients: string[]
  updated_count: number
}
type ContactdbRecipientCount = { recipient_count: number }
type ContactdbSegmentsConditions = {
  and_or?: 'and' | 'or' | '' | undefined
  field: string
  operator: 'eq' | 'ne' | 'lt' | 'gt' | 'contains'
  value: string
}
type ContactdbSegments = {
  conditions: ContactdbSegmentsConditions[]
  list_id?: number | undefined
  name: string
  recipient_count?: number | undefined
}
type ContactdbSegmentsWithId = {
  id: number
  conditions: ContactdbSegmentsConditions[]
  list_id?: number | undefined
  name: string
  recipient_count?: number | undefined
}
type Metadata = {
  count?: number | undefined
  next?: string | undefined
  prev?: string | undefined
  self?: string | undefined
}
type DesignOutputSummary = {
  created_at?: string | undefined
  id?: string | undefined
  thumbnail_url?: string | undefined
  updated_at?: string | undefined
  editor?: 'code' | 'design' | undefined
  name?: string | undefined
  categories?: string[] | undefined
  generate_plain_content?: boolean | undefined
  subject?: string | undefined
}
type DesignInput = {
  editor?: 'code' | 'design' | undefined
  name?: string | undefined
  categories?: string[] | undefined
  generate_plain_content?: boolean | undefined
  subject?: string | undefined
  html_content: string
  plain_content?: string | undefined
}
type DesignOutput = {
  created_at?: string | undefined
  id?: string | undefined
  thumbnail_url?: string | undefined
  updated_at?: string | undefined
  editor?: 'code' | 'design' | undefined
  name?: string | undefined
  categories?: string[] | undefined
  generate_plain_content?: boolean | undefined
  subject?: string | undefined
  html_content: string
  plain_content?: string | undefined
}
type ApiError = { error_id: string; field: string; message: string }
type ApiErrors = { errors?: ApiError[] | undefined }
type DesignDuplicateInput = { editor?: 'code' | 'design' | undefined; name?: string | undefined }
type AdvancedStatsClicksOpens = {
  clicks?: number | undefined
  unique_clicks?: number | undefined
  opens?: number | undefined
  unique_opens?: number | undefined
}
type IpPoolResponse = { name?: string | undefined }
type IpWarmupResponse = { ip: string; start_date: number }[]
type MailBatchId = { batch_id: string }
type FromEmailObject = { email: string; name?: string | undefined }
type CcBccEmailObject = { email: string; name?: string | undefined }
type ToEmailArray = { email: string; name?: string | undefined }[]
type ReplyToEmailObject = { email: string; name?: string | undefined }
type MailSettingsAddressWhitelabel = { enabled?: boolean | undefined; list?: string[] | undefined }
type MailSettingsBouncePurge = {
  enabled?: boolean | undefined
  hard_bounces?: (number | null) | undefined
  soft_bounces?: (number | null) | undefined
}
type MailSettingsFooter = {
  enabled?: boolean | undefined
  html_content?: string | undefined
  plain_content?: string | undefined
}
type MailSettingsForwardBounce = {
  email?: (string | null) | undefined
  enabled?: boolean | undefined
}
type MailSettingsForwardSpam = { email?: string | undefined; enabled?: boolean | undefined }
type MailSettingsTemplate = { enabled?: boolean | undefined; html_content?: string | undefined }
type AdvancedStatsMailboxProvider = {
  clicks?: number | undefined
  unique_clicks?: number | undefined
  opens?: number | undefined
  unique_opens?: number | undefined
  blocks?: number | undefined
  bounces?: number | undefined
  deferred?: number | undefined
  delivered?: number | undefined
  drops?: number | undefined
  processed?: number | undefined
  requests?: number | undefined
  spam_reports?: number | undefined
}
type Selfmetadata = { self?: string | undefined }
type ContactDetails3 = {
  _metadata?: Selfmetadata | undefined
  address_line_1?: string | undefined
  address_line_2?: string | undefined
  alternate_emails?: string[] | undefined
  city?: string | undefined
  country?: string | undefined
  created_at: string
  custom_fields?: { [x: string]: unknown } | undefined
  email?: string | undefined
  facebook?: string | undefined
  first_name?: string | undefined
  id: string
  last_name?: string | undefined
  line?: string | undefined
  list_ids: string[]
  phone_number?: string | undefined
  postal_code?: string | undefined
  segment_ids: string[]
  state_province_region?: string | undefined
  unique_name?: string | undefined
  updated_at: string
  whatsapp?: string | undefined
}
type Error = {
  error_id?: string | undefined
  field?: string | undefined
  message: string
  parameter?: string | undefined
}
type CustomFieldsById = { [x: string]: unknown }
type ContactRequest = {
  address_line_1?: string | undefined
  address_line_2?: string | undefined
  alternate_emails?: string[] | undefined
  city?: string | undefined
  country?: string | undefined
  custom_fields?: CustomFieldsById | undefined
  email: string
  first_name?: string | undefined
  last_name?: string | undefined
  postal_code?: string | undefined
  state_province_region?: string | undefined
}
type Metadata2 = {
  count?: number | undefined
  next?: string | undefined
  prev?: string | undefined
  self?: string | undefined
}
type ContactExport = {
  _metadata?: Metadata2 | undefined
  completed_at?: string | undefined
  contact_count?: number | undefined
  created_at: string
  expires_at: string
  id: string
  message?: string | undefined
  status: 'pending' | 'ready' | 'failure'
  updated_at: string
  urls?: string[] | undefined
}
type ContactImport = {
  finished_at?: string | undefined
  id?: string | undefined
  job_type?: string | undefined
  results?:
    | {
        created_count?: number | undefined
        deleted_count?: number | undefined
        errored_count?: number | undefined
        errors_url?: string | undefined
        requested_count?: number | undefined
        updated_count?: number | undefined
      }
    | undefined
  started_at?: string | undefined
  status?: string | undefined
}
type CustomFieldDefinitionsResponse = {
  field_type: 'Text' | 'Number' | 'Date'
  id: string
  name: string
}
type ReservedFieldDefinitionsResponse = {
  field_type?: 'Text' | 'Number' | 'Date' | undefined
  name?: string | undefined
  read_only?: boolean | undefined
}[]
type List = {
  _metadata?: Selfmetadata | undefined
  contact_count?: number | undefined
  id?: string | undefined
  name?: string | undefined
}
type ContactDetails2 = {
  _metadata?: Selfmetadata | undefined
  address_line_1?: string | undefined
  address_line_2?: string | undefined
  alternate_emails?: (string[] | null) | undefined
  city?: string | undefined
  country?: string | undefined
  created_at: string
  custom_fields?: { [x: string]: unknown } | undefined
  email?: string | undefined
  facebook?: string | undefined
  first_name?: string | undefined
  id: string
  last_name?: string | undefined
  line?: string | undefined
  list_ids: string[]
  phone_number?: string | undefined
  postal_code?: string | undefined
  segment_ids?: string[] | undefined
  state_province_region?: string | undefined
  unique_name?: string | undefined
  updated_at: string
  whatsapp?: string | undefined
}
type SegmentSummary = {
  contacts_count: number
  created_at: string
  id: string
  name?: string | undefined
  next_sample_update?: string | undefined
  parent_list_id?: string | undefined
  sample_updated_at: string
  updated_at: string
}
type ContactResponse = {
  address_line_1: string
  address_line_2: string
  alternate_emails: string[]
  city: string
  country: string
  custom_fields: {
    ''?: string | undefined
    custom_field_name1?: string | undefined
    custom_field_name2?: string | undefined
  }
  email: string
  first_name: string
  id: string
  last_name: string
  list_ids?: string[] | undefined
  postal_code: number
  segment_ids?: string[] | undefined
  state_province_region: string
}
type FullSegment = {
  contacts_count: number
  created_at: string
  id: string
  name: string
  next_sample_update?: string | undefined
  parent_list_id?: string | undefined
  sample_updated_at: string
  updated_at: string
  contacts_sample: ContactResponse[]
  query_json?: { [x: string]: unknown } | undefined
  parent_list_ids?: string[] | undefined
  query_dsl: string
}
type SegmentStatusResponse = { error_message?: string | undefined; query_validation: string }
type AllSegmentsResponse = {
  _metadata?: Metadata | undefined
  contacts_count: number
  created_at: string
  id: string
  name: string
  next_sample_update: string
  parent_list_ids: string[]
  query_version: string
  sample_updated_at: string
  status: SegmentStatusResponse
  updated_at: string
}
type ErrorsSegV2 = { errors: { field: string; message: string }[] }
type SegmentWriteV2 = { name: string; parent_list_ids?: string[] | undefined; query_dsl: string }
type SegmentResponse = {
  contacts_count: number
  contacts_sample: ContactResponse[]
  created_at: string
  id: string
  name: string
  next_sample_update: string
  parent_list_ids: string[]
  query_dsl: string
  query_version: string
  sample_updated_at: string
  status: SegmentStatusResponse
  updated_at: string
}
type SegmentUpdate = { name?: string | undefined; query_dsl?: string | undefined }
type SenderID = {
  address?: string | undefined
  address_2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  from?: { email?: string | undefined; name?: string | undefined } | undefined
  nickname?: string | undefined
  reply_to?: { email?: string | undefined; name?: string | undefined } | undefined
  state?: string | undefined
  zip?: string | undefined
  created_at?: number | undefined
  id?: number | undefined
  locked?: boolean | undefined
  updated_at?: number | undefined
  verified?: boolean | undefined
}
type AbtestSummary = {
  duration: string
  expiration_date: string | null
  test_percentage: number
  type: 'subject' | 'content'
  winner_criteria: 'open' | 'click' | 'manual'
  winner_selected_at: string | null
  winning_template_id: string
} | null
type SinglesendResponseShort = {
  abtest: AbtestSummary
  categories: string[]
  created_at: string
  id: string
  is_abtest: boolean
  name: string
  send_at?: string | undefined
  status: 'draft' | 'scheduled' | 'triggered'
  updated_at: string
}
type SinglesendRequest = {
  categories?: string[] | undefined
  email_config?:
    | {
        custom_unsubscribe_url?: (string | null) | undefined
        design_id?: string | undefined
        editor?: 'code' | 'design' | undefined
        generate_plain_content?: boolean | undefined
        html_content?: string | undefined
        ip_pool?: (string | null) | undefined
        plain_content?: string | undefined
        sender_id?: (number | null) | undefined
        subject?: string | undefined
        suppression_group_id?: (number | null) | undefined
      }
    | undefined
  name: string
  send_at?: string | undefined
  send_to?:
    | {
        all?: boolean | undefined
        list_ids?: string[] | undefined
        segment_ids?: string[] | undefined
      }
    | undefined
}
type SinglesendResponse = {
  categories?: string[] | undefined
  email_config?:
    | {
        custom_unsubscribe_url?: (string | null) | undefined
        design_id?: string | undefined
        editor?: 'code' | 'design' | undefined
        generate_plain_content?: boolean | undefined
        html_content?: string | undefined
        ip_pool?: (string | null) | undefined
        plain_content?: string | undefined
        sender_id?: (number | null) | undefined
        subject?: string | undefined
        suppression_group_id?: (number | null) | undefined
      }
    | undefined
  name: string
  send_at?: string | undefined
  send_to?:
    | {
        all?: boolean | undefined
        list_ids?: string[] | undefined
        segment_ids?: string[] | undefined
      }
    | undefined
  created_at: string
  id: string
  status: 'draft' | 'scheduled' | 'triggered'
  updated_at?: string | undefined
  warnings?:
    | {
        field?: string | undefined
        message?: string | undefined
        warning_id?: string | undefined
      }[]
    | undefined
}
type SinglesendSearch = {
  categories?: string[] | undefined
  name?: string | undefined
  status?: ('draft' | 'scheduled' | 'triggered')[] | undefined
}
type SinglesendSchedule = {
  send_at: string
  status?: 'draft' | 'scheduled' | 'triggered' | undefined
}
type Metrics = {
  bounce_drops: number
  bounces: number
  clicks: number
  delivered: number
  invalid_emails: number
  opens: number
  requests: number
  spam_report_drops: number
  spam_reports: number
  unique_clicks: number
  unique_opens: number
  unsubscribes: number
}
type AutomationsResponse = {
  _metadata?: Metadata2 | undefined
  results: { aggregation: string; id: string; stats?: Metrics | undefined; step_id: string }[]
}
type LinkTrackingMetadata = {
  count?: number | undefined
  next?: string | undefined
  prev?: string | undefined
  self?: string | undefined
}
type AutomationsLinkStatsResponse = {
  _metadata: LinkTrackingMetadata
  results: { clicks: number; step_id: string; url: string; url_location?: number | undefined }[]
  total_clicks: number
}
type SinglesendsResponse = {
  _metadata: Metadata2
  results: {
    ab_phase: 'send' | 'test' | 'all'
    ab_variation: string
    aggregation?: string | undefined
    id: string
    stats?: Metrics | undefined
  }[]
}
type SinglesendsLinkStatsResponse = {
  _metadata: LinkTrackingMetadata
  results: {
    ab_phase: 'send' | 'test' | 'all'
    ab_variation: string
    clicks: number
    url: string
    url_location?: number | undefined
  }[]
  total_clicks?: number | undefined
}
type PartnerSettingsNewRelic = {
  enable_subuser_statistics?: boolean | undefined
  enabled: boolean
  license_key: string
}
type SenderIdRequest = {
  address?: string | undefined
  address_2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  from?: { email?: string | undefined; name?: string | undefined } | undefined
  nickname?: string | undefined
  reply_to?: { email?: string | undefined; name?: string | undefined } | undefined
  state?: string | undefined
  zip?: string | undefined
}
type SsoCertificateBody = {
  id?: number | undefined
  intergration_id?: string | undefined
  not_after?: number | undefined
  not_before?: number | undefined
  public_certificate?: string | undefined
}
type SsoErrorResponse = {
  error_id?: string | undefined
  field?: (string | null) | undefined
  message?: string | undefined
}[]
type SsoIntegration = {
  completed_integration?: boolean | undefined
  enabled: boolean
  entity_id: string
  name: string
  signin_url: string
  signout_url: string
  audience_url?: string | undefined
  id?: string | undefined
  last_updated: number
  single_signon_url?: string | undefined
}
type CreateIntegrationRequest = {
  completed_integration?: boolean | undefined
  enabled: boolean
  entity_id: string
  name: string
  signin_url: string
  signout_url: string
}
type SsoTeammateRequest = {
  email: string
  first_name: string
  is_admin?: boolean | undefined
  is_read_only?: boolean | undefined
  last_name: string
  scopes: string[]
}
type SsoTeammateResponse = {
  email: string
  first_name: string
  is_admin?: boolean | undefined
  is_read_only?: boolean | undefined
  last_name: string
  is_sso?: boolean | undefined
  username?: string | undefined
}
type SsoTeammatesPatchResponse = {
  email: string
  first_name: string
  is_admin?: boolean | undefined
  is_read_only?: boolean | undefined
  last_name: string
  is_sso?: boolean | undefined
  username?: string | undefined
  address?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  company?: string | undefined
  country?: string | undefined
  phone?: string | undefined
  scopes?: string[] | undefined
  state?: string | undefined
  user_type?: 'admin' | 'owner' | 'teammate' | undefined
  website?: string | undefined
  zip?: string | undefined
}
type StatsAdvancedGlobalStats = {
  clicks?: number | undefined
  unique_clicks?: number | undefined
  opens?: number | undefined
  unique_opens?: number | undefined
  blocks?: number | undefined
  bounce_drops?: number | undefined
  bounces?: number | undefined
  deferred?: number | undefined
  delivered?: number | undefined
  invalid_emails?: number | undefined
  processed?: number | undefined
  requests?: number | undefined
  spam_report_drops?: number | undefined
  spam_reports?: number | undefined
  unsubscribe_drops?: number | undefined
  unsubscribes?: number | undefined
}
type Subuser = { disabled: boolean; email: string; id: number; username: string }
type SubuserPost = {
  authorization_token?: string | undefined
  credit_allocation?: { type?: string | undefined } | undefined
  email: string
  signup_session_token?: string | undefined
  user_id: number
  username: string
}
type SubuserStats = {
  date?: string | undefined
  stats?:
    | {
        first_name?: string | undefined
        last_name?: string | undefined
        metrics?:
          | {
              blocks?: number | undefined
              bounce_drops?: number | undefined
              bounces?: number | undefined
              clicks?: number | undefined
              deferred?: number | undefined
              delivered?: number | undefined
              invalid_emails?: number | undefined
              opens?: number | undefined
              processed?: number | undefined
              requests?: number | undefined
              spam_report_drops?: number | undefined
              spam_reports?: number | undefined
              unique_clicks?: number | undefined
              unique_opens?: number | undefined
              unsubscribe_drops?: number | undefined
              unsubscribes?: number | undefined
            }
          | undefined
        name?: string | undefined
        type?: string | undefined
      }[]
    | undefined
}
type Monitor = { email: string; frequency: number }
type BlocksResponse = { created: number; email: string; reason: string; status: string }[]
type BounceResponse = {
  created?: number | undefined
  email?: string | undefined
  reason?: string | undefined
  status?: string | undefined
}
type InvalidEmail = {
  created?: number | undefined
  email?: string | undefined
  reason?: string | undefined
}
type SpamReportsResponse = { created: number; email: string; ip: string }[]
type TransactionalTemplatesVersionOutputLean = {
  active?: 0 | 1 | undefined
  editor?: 'code' | 'design' | undefined
  generate_plain_content?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  subject?: string | undefined
  template_id?: string | undefined
  thumbnail_url?: string | undefined
  updated_at?: string | undefined
}
type TransactionalTemplatesTemplateLean = {
  generation: 'legacy' | 'dynamic'
  id: string
  name: string
  'updated_at ': string
  versions?: TransactionalTemplatesVersionOutputLean[] | undefined
}
type TransactionalTemplateWarning = { message?: string | undefined }
type TransactionalTemplate = {
  generation: 'legacy' | 'dynamic'
  id: string
  name: string
  'updated_at ': string
  versions?: TransactionalTemplatesVersionOutputLean[] | undefined
  warning?: TransactionalTemplateWarning | undefined
}
type TransactionalTemplateVersionCreate = {
  active?: 0 | 1 | undefined
  editor?: 'code' | 'design' | undefined
  generate_plain_content?: boolean | undefined
  html_content?: string | undefined
  name: string
  plain_content?: string | undefined
  subject: string
  test_data?: string | undefined
}
type TransactionalTemplateVersionOutput = {
  warnings?: TransactionalTemplateWarning[] | undefined
  active?: 0 | 1 | undefined
  editor?: 'code' | 'design' | undefined
  generate_plain_content?: boolean | undefined
  html_content?: string | undefined
  name: string
  plain_content?: string | undefined
  subject: string
  test_data?: string | undefined
  id?: string | undefined
  template_id?: string | undefined
  thumbnail_url?: string | undefined
  updated_at?: string | undefined
}
type ClickTracking = { enable_text: boolean; enabled: boolean }
type GoogleAnalyticsSettings = {
  enabled?: boolean | undefined
  utm_campaign?: string | undefined
  utm_content?: string | undefined
  utm_medium?: string | undefined
  utm_source?: string | undefined
  utm_term?: string | undefined
}
type SubscriptionTrackingSettings = {
  enabled?: boolean | undefined
  html_content?: string | undefined
  landing?: string | undefined
  plain_content?: string | undefined
  replace?: string | undefined
  url?: string | undefined
}
type UserProfile = {
  address?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  company?: string | undefined
  country?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  website?: string | undefined
  zip?: string | undefined
}
type UserScheduledSendStatus = { batch_id: string; status: 'cancel' | 'pause' }
type EnforcedTlsRequestResponse = {
  require_tls?: boolean | undefined
  require_valid_cert?: boolean | undefined
}
type EventWebhookResponse = {
  bounce: boolean
  click: boolean
  deferred: boolean
  delivered: boolean
  dropped: boolean
  enabled: boolean
  group_resubscribe: boolean
  group_unsubscribe: boolean
  oauth_client_id?: string | undefined
  oauth_token_url?: string | undefined
  open: boolean
  processed: boolean
  spam_report: boolean
  unsubscribe: boolean
  url: string
}
type EventWebhookUpdateOauthRequest = {
  bounce: boolean
  click: boolean
  deferred: boolean
  delivered: boolean
  dropped: boolean
  enabled: boolean
  group_resubscribe: boolean
  group_unsubscribe: boolean
  oauth_client_id?: string | undefined
  oauth_client_secret?: string | undefined
  oauth_token_url?: string | undefined
  open: boolean
  processed: boolean
  spam_report: boolean
  unsubscribe: boolean
  url: string
}
type ParseSetting = {
  hostname?: string | undefined
  send_raw?: boolean | undefined
  spam_check?: boolean | undefined
  url?: string | undefined
}
type VerifiedSenderResponseSchema = {
  address?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  from_email?: string | undefined
  from_name?: string | undefined
  id?: number | undefined
  locked?: boolean | undefined
  nickname?: string | undefined
  reply_to?: string | undefined
  reply_to_name?: string | undefined
  state?: string | undefined
  verified?: boolean | undefined
  zip?: string | undefined
}
type VerifiedSenderRequestSchema = {
  address?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  from_email: string
  from_name?: string | undefined
  nickname: string
  reply_to: string
  reply_to_name?: string | undefined
  state?: string | undefined
  zip?: string | undefined
}
type DomainAuthentication_200Response = {
  automatic_security: boolean
  custom_spf: boolean
  default: boolean
  dns: {
    dkim1: { data: string; host: string; type: string; valid: boolean }
    dkim2: { data: string; host: string; type: string; valid: boolean }
    mail_cname: { data: string; host: string; type: string; valid: boolean }
  }
  domain: string
  id: number
  ips: string[]
  legacy: boolean
  subdomain: string
  user_id: number
  username: string
  valid: boolean
  last_validation_attempt_at?: number | undefined
  subusers?: { user_id?: number | undefined; username?: string | undefined }[] | undefined
}[]
type AuthenticationDomain = {
  automatic_security: boolean
  custom_spf: boolean
  default: boolean
  dns: {
    dkim1: { data: string; host: string; type: string; valid: boolean }
    dkim2: { data: string; host: string; type: string; valid: boolean }
    mail_cname: { data: string; host: string; type: string; valid: boolean }
  }
  domain: string
  id: number
  ips: string[]
  legacy: boolean
  subdomain: string
  user_id: number
  username: string
  valid: boolean
}
type DomainAuthenticationDomainSpf = {
  automatic_security: boolean
  custom_spf: boolean
  default: boolean
  dns: {
    dkim: { data: string; host: string; type: string; valid: boolean }
    domain_spf: { data: string; host: string; type: string; valid: boolean }
    mail_server: { data: string; host: string; type: string; valid: boolean }
    subdomain_spf: { data: string; host: string; type: string; valid: boolean }
  }
  domain: string
  id: number
  ips: { [x: string]: unknown }[]
  legacy: boolean
  subdomain?: string | undefined
  user_id: number
  username: string
  valid: boolean
}
type ReverseDns = {
  a_record: { data: string; host: string; type: string; valid: boolean }
  domain: string
  id: number
  ip: string
  last_validation_attempt_at?: number | undefined
  legacy: boolean
  rdns: string
  subdomain?: string | undefined
  users: { user_id: number; username: string }[]
  valid: boolean
}
type LinkBranding_200Response = {
  default: true | false
  dns: {
    domain_cname: { data: string; host: string; type: 'cname' | 'txt' | 'mx'; valid: true | false }
    owner_cname?:
      | {
          data: string
          host: string
          type?: 'cname' | 'txt' | 'mx' | undefined
          valid: true | false
        }
      | undefined
  }
  domain: string
  id: number
  legacy: true | false
  subdomain?: string | undefined
  user_id: number
  username: string
  valid: true | false
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/access_settings/activity': {
      $get:
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              result: {
                allowed: boolean
                auth_method: string
                first_at: number
                ip: string
                last_at: number
                location: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access_settings/whitelist': {
      $delete:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ids?: number[] | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ids?: number[] | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ids?: number[] | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ids?: number[] | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ids?: number[] | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: IpAccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ips: { ip: string }[] }
            }
            output: IpAccessResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ips: { ip: string }[] }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ips: { ip: string }[] }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ips: { ip: string }[] }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { ips: { ip: string }[] }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/access_settings/whitelist/:rule_id': {
      $delete: {
        input: { param: { rule_id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { rule_id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: IpAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/alerts': {
      $get: {
        input: {
          header: { Authorization?: string | undefined; 'on-behalf-of'?: string | undefined }
        }
        output: {
          created_at: number
          email_to: string
          frequency?: string | undefined
          id: number
          percentage?: number | undefined
          type: 'usage_limit' | 'stats_notification'
          updated_at?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              header: { Authorization?: string | undefined; 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                email_to: string | null
                frequency?: string | undefined
                percentage?: number | undefined
                type: 'stats_notification' | 'usage_limit'
              }
            }
            output: {
              created_at: number
              email_to: string
              frequency?: string | undefined
              id: number
              percentage?: number | undefined
              type: string
              updated_at: number
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                email_to: string | null
                frequency?: string | undefined
                percentage?: number | undefined
                type: 'stats_notification' | 'usage_limit'
              }
            }
            output: { field?: string | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/alerts/:alert_id': {
      $delete: {
        input: { param: { alert_id: number } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { alert_id: number } } & {
          header: { Authorization?: string | undefined; 'on-behalf-of'?: string | undefined }
        }
        output: {
          created_at: number
          email_to: string
          frequency?: string | undefined
          id: number
          percentage?: number | undefined
          type: 'usage_alert' | 'stats_notification'
          updated_at: number
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { alert_id: number } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & {
          json: {
            email_to?: string | undefined
            frequency?: string | undefined
            percentage?: number | undefined
          }
        }
        output: {
          created_at: number
          email_to: string
          frequency?: string | undefined
          id: number
          percentage?: number | undefined
          type: 'usage_alert' | 'stats_notification'
          updated_at: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api_keys': {
      $get:
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { result?: ApiKeyNameId[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { name: string; scopes?: string[] | undefined }
            }
            output: {
              api_key?: string | undefined
              api_key_id?: string | undefined
              name?: string | undefined
              scopes?: string[] | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { name: string; scopes?: string[] | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { name: string; scopes?: string[] | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { name: string; scopes?: string[] | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { name: string; scopes?: string[] | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { name: string; scopes?: string[] | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api_keys/:api_key_id': {
      $delete:
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { result?: ApiKeyNameIdScopes[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: ApiKeyNameId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string; scopes?: string[] | undefined } }
            output: ApiKeyNameIdScopes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string; scopes?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string; scopes?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string; scopes?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string; scopes?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { api_key_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string; scopes?: string[] | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/asm/groups': {
      $get: {
        input: { query: { id?: number | undefined } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: SuppressionGroup[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: SuppressionGroupRequestBase
        }
        output: { description: string; id: number; is_default: boolean; name: string }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/asm/groups/:group_id': {
      $delete: {
        input: { param: { group_id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { group_id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          description?: string | undefined
          is_default?: boolean | undefined
          name?: string | undefined
          id: number
          last_email_sent_at?: (string | null) | undefined
          unsubscribes?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { group_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & {
          json: {
            description?: string | undefined
            is_default?: boolean | undefined
            name?: string | undefined
          }
        }
        output: SuppressionGroup
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/asm/groups/:group_id/suppressions': {
      $get: {
        input: { param: { group_id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { group_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & { json: SuppressionsRequest }
        output: { recipient_emails?: string[] | undefined }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/asm/groups/:group_id/suppressions/search': {
      $post: {
        input: { param: { group_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & { json: SuppressionsRequest }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asm/groups/:group_id/suppressions/:email': {
      $delete: {
        input: { param: { group_id: string; email: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: { [x: string]: unknown } | null
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/asm/suppressions': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: { created_at: number; email: string; group_id: number; group_name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asm/suppressions/global': {
      $post: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & { json: SuppressionsRequest }
        output: { recipient_emails: string[] }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/asm/suppressions/global/:email': {
      $delete: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { recipient_email: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asm/suppressions/:email': {
      $get: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          suppressions: {
            description: string
            id: number
            is_default: boolean
            name: string
            suppressed: boolean
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/browsers/stats': {
      $get: {
        input: {
          query: {
            browsers?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
            start_date: string
            end_date?: string | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          date?: string | undefined
          stats?:
            | {
                metrics?: AdvancedStatsClicks | undefined
                name?: string | undefined
                type?: string | undefined
              }[]
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: { result?: CampaignResponse[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: CampaignRequest }
            output: CampaignResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: CampaignRequest }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: CampaignRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/campaigns/:campaign_id': {
      $delete:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              categories?: string[] | undefined
              custom_unsubscribe_url?: string | undefined
              html_content?: string | undefined
              id?: number | undefined
              ip_pool?: string | undefined
              list_ids?: number[] | undefined
              plain_content?: string | undefined
              segment_ids?: number[] | undefined
              sender_id?: number | undefined
              status?: string | undefined
              subject?: string | undefined
              suppression_group_id?: number | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                categories: string[]
                html_content: string
                plain_content: string
                subject: string
                title: string
              }
            }
            output: CampaignResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                categories: string[]
                html_content: string
                plain_content: string
                subject: string
                title: string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                categories: string[]
                html_content: string
                plain_content: string
                subject: string
                title: string
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                categories: string[]
                html_content: string
                plain_content: string
                subject: string
                title: string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                categories: string[]
                html_content: string
                plain_content: string
                subject: string
                title: string
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/campaigns/:campaign_id/schedules': {
      $delete:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { send_at: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: bigint } }
            output: { id: number; send_at: number; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: bigint } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: bigint } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: bigint } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: number } }
            output: { id: number; send_at: number; status: 'Scheduled' }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: number } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: number } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: number } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { send_at: number } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/campaigns/:campaign_id/schedules/now': {
      $post:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { id: bigint; status: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/campaigns/:campaign_id/schedules/test': {
      $post:
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { to: string } }
            output: { to: string }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { to: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { campaign_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { to: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/categories': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                category?: string | undefined
                offset?: number | undefined
              }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { category: string }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                category?: string | undefined
                offset?: number | undefined
              }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors?: { field: string; message: string }[] | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/categories/stats': {
      $get: {
        input: {
          query: {
            start_date: string
            end_date?: string | undefined
            categories: string
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: CategoryStats[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/stats/sums': {
      $get: {
        input: {
          query: {
            sort_by_metric?: string | undefined
            sort_by_direction?: 'desc' | 'asc' | undefined
            start_date: string
            end_date?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: CategoryStats
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clients/stats': {
      $get: {
        input: {
          query: {
            start_date: string
            end_date?: string | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          date?: string | undefined
          stats?:
            | {
                metrics?: AdvancedStatsOpens | undefined
                name?: string | undefined
                type?: string | undefined
              }[]
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clients/:client_type/stats': {
      $get: {
        input: { param: { client_type: 'phone' | 'tablet' | 'webmail' | 'desktop' } } & {
          query: {
            start_date: string
            end_date?: string | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          date?: string | undefined
          stats?:
            | {
                metrics?: AdvancedStatsOpens | undefined
                name?: string | undefined
                type?: string | undefined
              }[]
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contactdb/custom_fields': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { custom_fields: ContactdbCustomFieldWithId[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { name?: string | undefined; type?: string | undefined }
            }
            output: ContactdbCustomFieldWithId
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { name?: string | undefined; type?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/contactdb/custom_fields/:custom_field_id': {
      $delete:
        | {
            input: { param: { custom_field_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { custom_field_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { custom_field_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ContactdbCustomFieldWithId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { custom_field_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contactdb/lists': {
      $delete:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: number[] }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: number[] }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: number[] }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: { lists: ContactdbList[] }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: { name: string } }
            output: ContactdbList
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: { name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: { name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contactdb/lists/:list_id': {
      $delete:
        | {
            input: { param: { list_id: string } } & {
              query: { delete_contacts?: true | false | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { [x: string]: unknown } | null
            }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { list_id: string } } & {
              query: { delete_contacts?: true | false | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { [x: string]: unknown } | null
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { list_id: string } } & {
              query: { delete_contacts?: true | false | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { [x: string]: unknown } | null
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { list_id: string } } & {
              query: { delete_contacts?: true | false | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { [x: string]: unknown } | null
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { list_id?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ContactdbList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { list_id?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { list_id?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { list_id?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { query: { list_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: {
              id?: number | undefined
              name?: string | undefined
              recipient_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { list_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { list_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contactdb/lists/:list_id/recipients': {
      $get:
        | {
            input: {
              query: { page?: number | undefined; page_size?: number | undefined; list_id: number }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { recipients?: ContactdbRecipient[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: number | undefined; page_size?: number | undefined; list_id: number }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: number | undefined; page_size?: number | undefined; list_id: number }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { list_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: number[] }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { list_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: number[] }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { list_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: number[] }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { list_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: number[] }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contactdb/lists/:list_id/recipients/:recipient_id': {
      $delete:
        | {
            input: { query: { list_id: number; recipient_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { [x: string]: unknown } | null }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { query: { list_id: number; recipient_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { [x: string]: unknown } | null }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { list_id: number; recipient_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { [x: string]: unknown } | null }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { list_id: number; recipient_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { [x: string]: unknown } | null }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { list_id: number; recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { list_id: number; recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { list_id: number; recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { list_id: number; recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contactdb/recipients': {
      $delete:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: string[] }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: string[] }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: string[] }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { recipients: { [x: string]: unknown }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                email: string
                first_name?: string | undefined
                last_name?: string | undefined
              }[]
            }
            output: ContactdbRecipientResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                email: string
                first_name?: string | undefined
                last_name?: string | undefined
              }[]
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                email: string
                first_name?: string | undefined
                last_name?: string | undefined
              }[]
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                age?: number | undefined
                email: string
                first_name?: string | undefined
                last_name?: string | undefined
              }[]
            }
            output: ContactdbRecipientResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                age?: number | undefined
                email: string
                first_name?: string | undefined
                last_name?: string | undefined
              }[]
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                age?: number | undefined
                email: string
                first_name?: string | undefined
                last_name?: string | undefined
              }[]
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contactdb/recipients/billable_count': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: ContactdbRecipientCount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contactdb/recipients/count': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: ContactdbRecipientCount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contactdb/recipients/search': {
      $get:
        | {
            input: { query: { '{field_name}'?: string | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { recipients?: ContactdbRecipient[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { '{field_name}'?: string | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { '{field_name}'?: string | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { conditions: { [x: string]: unknown }[]; list_id: number } }
            output: {
              recipient_count?: number | undefined
              recipients?:
                | {
                    created_at?: number | undefined
                    custom_fields?:
                      | {
                          id?: number | undefined
                          name?: string | undefined
                          type?: string | undefined
                          value?: number | string | undefined
                        }[]
                      | undefined
                    email?: string | undefined
                    first_name?: string | undefined
                    id?: string | undefined
                    last_clicked?: number | undefined
                    last_emailed?: number | undefined
                    last_opened?: number | undefined
                    updated_at?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { conditions: { [x: string]: unknown }[]; list_id: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/contactdb/recipients/:recipient_id': {
      $delete:
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ContactdbRecipient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contactdb/recipients/:recipient_id/lists': {
      $get:
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { lists?: ContactdbList[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { recipient_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contactdb/reserved_fields': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              reserved_fields?:
                | { name?: string | undefined; type?: string | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contactdb/segments': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { segments: ContactdbSegments[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: ContactdbSegments }
            output: ContactdbSegmentsWithId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: ContactdbSegments }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: ContactdbSegments }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contactdb/segments/:segment_id': {
      $delete:
        | {
            input: { param: { segment_id: string } } & {
              query: { delete_contacts?: boolean | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { [x: string]: unknown } | null
            }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { delete_contacts?: boolean | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { [x: string]: unknown } | null
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { delete_contacts?: boolean | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { [x: string]: unknown } | null
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { delete_contacts?: boolean | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { [x: string]: unknown } | null
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { segment_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ContactdbSegments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { segment_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { segment_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { segment_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { query: { segment_id?: string | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                conditions?: ContactdbSegmentsConditions[] | undefined
                list_id?: number | undefined
                name: string
              }
            }
            output: ContactdbSegments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { segment_id?: string | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                conditions?: ContactdbSegmentsConditions[] | undefined
                list_id?: number | undefined
                name: string
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { segment_id?: string | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & {
              json: {
                conditions?: ContactdbSegmentsConditions[] | undefined
                list_id?: number | undefined
                name: string
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/contactdb/segments/:segment_id/recipients': {
      $get:
        | {
            input: { param: { segment_id: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { recipients: ContactdbRecipient[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contactdb/status': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          status?:
            | { ''?: string | undefined; id?: string | undefined; value?: string | undefined }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/designs': {
      $get: {
        input: {
          query: {
            page_size?: number | undefined
            page_token?: string | undefined
            summary?: boolean | undefined
          }
        }
        output: { _metadata?: Metadata | undefined; result?: DesignOutputSummary[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: DesignInput }; output: DesignOutput; outputFormat: 'json'; status: 201 }
        | { input: { json: DesignInput }; output: ApiErrors; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/designs/pre-builts': {
      $get: {
        input: {
          query: {
            page_size?: number | undefined
            page_token?: string | undefined
            summary?: boolean | undefined
          }
        }
        output: { _metadata?: Metadata | undefined; result?: DesignOutputSummary[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/designs/pre-builts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DesignOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ApiErrors; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: ApiErrors; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: string } } & { json: DesignDuplicateInput }
            output: DesignOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DesignDuplicateInput }
            output: ApiErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DesignDuplicateInput }
            output: ApiErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/designs/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | { input: { param: { id: string } }; output: ApiErrors; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: ApiErrors; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } }
            output: DesignOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ApiErrors; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: ApiErrors; outputFormat: 'json'; status: 404 }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                categories?: string[] | undefined
                generate_plain_content?: boolean | undefined
                html_content?: string | undefined
                name?: string | undefined
                plain_content?: string | undefined
                subject?: string | undefined
              }
            }
            output: DesignOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                categories?: string[] | undefined
                generate_plain_content?: boolean | undefined
                html_content?: string | undefined
                name?: string | undefined
                plain_content?: string | undefined
                subject?: string | undefined
              }
            }
            output: ApiErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                categories?: string[] | undefined
                generate_plain_content?: boolean | undefined
                html_content?: string | undefined
                name?: string | undefined
                plain_content?: string | undefined
                subject?: string | undefined
              }
            }
            output: ApiErrors
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: DesignDuplicateInput }
            output: DesignOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: DesignDuplicateInput }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DesignDuplicateInput }
            output: ApiErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/devices/stats': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
            start_date: string
            end_date?: string | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          date?: string | undefined
          stats?:
            | {
                metrics?: AdvancedStatsOpens | undefined
                name?: string | undefined
                type?: string | undefined
              }[]
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/geo/stats': {
      $get: {
        input: {
          query: {
            country?: 'US' | 'CA' | undefined
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
            start_date: string
            end_date?: string | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          date?: string | undefined
          stats?:
            | {
                metrics?: AdvancedStatsClicksOpens | undefined
                name?: string | undefined
                type?: string | undefined
              }[]
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ips': {
      $get: {
        input: {
          query: {
            ip?: string | undefined
            exclude_whitelabels?: boolean | undefined
            limit?: number | undefined
            offset?: number | undefined
            subuser?: string | undefined
            sort_by_direction?: 'desc' | 'asc' | undefined
          }
        }
        output: {
          assigned_at: number | null
          ip: string
          pools: string[]
          rdns?: string | undefined
          start_date: number | null
          subusers: string[]
          warmup: boolean
          whitelabeled: boolean
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: { count: number; subusers?: string[] | undefined; warmup?: boolean | undefined }
            }
            output: {
              ips: { ip: string; subusers: string[] }[]
              remaining_ips: number
              warmup: boolean
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: { count: number; subusers?: string[] | undefined; warmup?: boolean | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ips/assigned': {
      $get: {
        input: {}
        output: { ip: string; pools: string[]; start_date: number; warmup: boolean }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ips/pools': {
      $get: { input: {}; output: IpPoolResponse[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: { name: string } }
        output: IpPoolResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ips/pools/:pool_name': {
      $delete:
        | {
            input: { param: { pool_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { pool_name: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { pool_name: string } }
            output: { ips?: string[] | undefined; pool_name?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_name: string } }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { pool_name: string } } & { json: { name?: string | undefined } }
            output: IpPoolResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pool_name: string } } & { json: { name?: string | undefined } }
            output: {
              errors?:
                | {
                    field?: ({ [x: string]: unknown } | null) | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ips/pools/:pool_name/ips': {
      $post:
        | {
            input: { param: { pool_name: string } } & { json: { ip?: string | undefined } }
            output: { ip: string; pools: string[]; start_date: number; warmup: boolean }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { pool_name: string } } & { json: { ip?: string | undefined } }
            output: {
              errors?:
                | {
                    field?: ({ [x: string]: unknown } | null) | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ips/pools/:pool_name/ips/:ip': {
      $delete:
        | {
            input: { param: { pool_name: string; ip: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { pool_name: string; ip: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ips/remaining': {
      $get: {
        input: {}
        output: { results: { period: string; price_per_ip: number; remaining: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ips/warmup': {
      $get: { input: {}; output: IpWarmupResponse; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: { ip?: string | undefined } }
            output: IpWarmupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ip?: string | undefined } }
            output: {
              errors?:
                | {
                    field?: ({ [x: string]: unknown } | null) | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ips/warmup/:ip_address': {
      $delete:
        | {
            input: { param: { ip_address: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { ip_address: string } }
            output: {
              errors?:
                | {
                    field?: ({ [x: string]: unknown } | null) | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { ip_address: string } }
            output: IpWarmupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ip_address: string } }
            output: {
              errors?:
                | {
                    field?: ({ [x: string]: unknown } | null) | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ips/:ip_address': {
      $get: {
        input: { param: { ip_address: string } }
        output: {
          ip: string
          pools: string[]
          rdns: string
          start_date: number | null
          subusers: string[]
          warmup: boolean
          whitelabeled: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mail/batch': {
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: MailBatchId
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    field?: string | undefined
                    help?: { [x: string]: unknown } | undefined
                    message?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail/batch/:batch_id': {
      $get:
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: MailBatchId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?:
                | {
                    field?: string | undefined
                    help?: { [x: string]: unknown } | undefined
                    message?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail/send': {
      $post:
        | {
            input: {
              json: {
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                attachments?:
                  | {
                      content: string
                      content_id?: string | undefined
                      disposition?: 'inline' | 'attachment' | undefined
                      filename: string
                      type?: string | undefined
                    }[]
                  | undefined
                batch_id?: string | undefined
                categories?: string[] | undefined
                content: { type: string; value: string }[]
                custom_args?: string | undefined
                from: FromEmailObject
                headers?: { [x: string]: unknown } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                personalizations: {
                  bcc?: CcBccEmailObject[] | undefined
                  cc?: CcBccEmailObject[] | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  from?: FromEmailObject | undefined
                  headers?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                  subject?: string | undefined
                  substitutions?: { [x: string]: unknown } | undefined
                  to: ToEmailArray
                }[]
                reply_to?: ReplyToEmailObject | undefined
                reply_to_list?: { email: string; name?: string | undefined }[] | undefined
                send_at?: number | undefined
                subject: string
                template_id?: string | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_campaign?: string | undefined
                            utm_content?: string | undefined
                            utm_medium?: string | undefined
                            utm_source?: string | undefined
                            utm_term?: string | undefined
                          }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              json: {
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                attachments?:
                  | {
                      content: string
                      content_id?: string | undefined
                      disposition?: 'inline' | 'attachment' | undefined
                      filename: string
                      type?: string | undefined
                    }[]
                  | undefined
                batch_id?: string | undefined
                categories?: string[] | undefined
                content: { type: string; value: string }[]
                custom_args?: string | undefined
                from: FromEmailObject
                headers?: { [x: string]: unknown } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                personalizations: {
                  bcc?: CcBccEmailObject[] | undefined
                  cc?: CcBccEmailObject[] | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  from?: FromEmailObject | undefined
                  headers?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                  subject?: string | undefined
                  substitutions?: { [x: string]: unknown } | undefined
                  to: ToEmailArray
                }[]
                reply_to?: ReplyToEmailObject | undefined
                reply_to_list?: { email: string; name?: string | undefined }[] | undefined
                send_at?: number | undefined
                subject: string
                template_id?: string | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_campaign?: string | undefined
                            utm_content?: string | undefined
                            utm_medium?: string | undefined
                            utm_source?: string | undefined
                            utm_term?: string | undefined
                          }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                attachments?:
                  | {
                      content: string
                      content_id?: string | undefined
                      disposition?: 'inline' | 'attachment' | undefined
                      filename: string
                      type?: string | undefined
                    }[]
                  | undefined
                batch_id?: string | undefined
                categories?: string[] | undefined
                content: { type: string; value: string }[]
                custom_args?: string | undefined
                from: FromEmailObject
                headers?: { [x: string]: unknown } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                personalizations: {
                  bcc?: CcBccEmailObject[] | undefined
                  cc?: CcBccEmailObject[] | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  from?: FromEmailObject | undefined
                  headers?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                  subject?: string | undefined
                  substitutions?: { [x: string]: unknown } | undefined
                  to: ToEmailArray
                }[]
                reply_to?: ReplyToEmailObject | undefined
                reply_to_list?: { email: string; name?: string | undefined }[] | undefined
                send_at?: number | undefined
                subject: string
                template_id?: string | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_campaign?: string | undefined
                            utm_content?: string | undefined
                            utm_medium?: string | undefined
                            utm_source?: string | undefined
                            utm_term?: string | undefined
                          }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                attachments?:
                  | {
                      content: string
                      content_id?: string | undefined
                      disposition?: 'inline' | 'attachment' | undefined
                      filename: string
                      type?: string | undefined
                    }[]
                  | undefined
                batch_id?: string | undefined
                categories?: string[] | undefined
                content: { type: string; value: string }[]
                custom_args?: string | undefined
                from: FromEmailObject
                headers?: { [x: string]: unknown } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                personalizations: {
                  bcc?: CcBccEmailObject[] | undefined
                  cc?: CcBccEmailObject[] | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  from?: FromEmailObject | undefined
                  headers?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                  subject?: string | undefined
                  substitutions?: { [x: string]: unknown } | undefined
                  to: ToEmailArray
                }[]
                reply_to?: ReplyToEmailObject | undefined
                reply_to_list?: { email: string; name?: string | undefined }[] | undefined
                send_at?: number | undefined
                subject: string
                template_id?: string | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_campaign?: string | undefined
                            utm_content?: string | undefined
                            utm_medium?: string | undefined
                            utm_source?: string | undefined
                            utm_term?: string | undefined
                          }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                attachments?:
                  | {
                      content: string
                      content_id?: string | undefined
                      disposition?: 'inline' | 'attachment' | undefined
                      filename: string
                      type?: string | undefined
                    }[]
                  | undefined
                batch_id?: string | undefined
                categories?: string[] | undefined
                content: { type: string; value: string }[]
                custom_args?: string | undefined
                from: FromEmailObject
                headers?: { [x: string]: unknown } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                personalizations: {
                  bcc?: CcBccEmailObject[] | undefined
                  cc?: CcBccEmailObject[] | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  from?: FromEmailObject | undefined
                  headers?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                  subject?: string | undefined
                  substitutions?: { [x: string]: unknown } | undefined
                  to: ToEmailArray
                }[]
                reply_to?: ReplyToEmailObject | undefined
                reply_to_list?: { email: string; name?: string | undefined }[] | undefined
                send_at?: number | undefined
                subject: string
                template_id?: string | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_campaign?: string | undefined
                            utm_content?: string | undefined
                            utm_medium?: string | undefined
                            utm_source?: string | undefined
                            utm_term?: string | undefined
                          }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                attachments?:
                  | {
                      content: string
                      content_id?: string | undefined
                      disposition?: 'inline' | 'attachment' | undefined
                      filename: string
                      type?: string | undefined
                    }[]
                  | undefined
                batch_id?: string | undefined
                categories?: string[] | undefined
                content: { type: string; value: string }[]
                custom_args?: string | undefined
                from: FromEmailObject
                headers?: { [x: string]: unknown } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                personalizations: {
                  bcc?: CcBccEmailObject[] | undefined
                  cc?: CcBccEmailObject[] | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  from?: FromEmailObject | undefined
                  headers?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                  subject?: string | undefined
                  substitutions?: { [x: string]: unknown } | undefined
                  to: ToEmailArray
                }[]
                reply_to?: ReplyToEmailObject | undefined
                reply_to_list?: { email: string; name?: string | undefined }[] | undefined
                send_at?: number | undefined
                subject: string
                template_id?: string | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_campaign?: string | undefined
                            utm_content?: string | undefined
                            utm_medium?: string | undefined
                            utm_source?: string | undefined
                            utm_term?: string | undefined
                          }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              json: {
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                attachments?:
                  | {
                      content: string
                      content_id?: string | undefined
                      disposition?: 'inline' | 'attachment' | undefined
                      filename: string
                      type?: string | undefined
                    }[]
                  | undefined
                batch_id?: string | undefined
                categories?: string[] | undefined
                content: { type: string; value: string }[]
                custom_args?: string | undefined
                from: FromEmailObject
                headers?: { [x: string]: unknown } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                personalizations: {
                  bcc?: CcBccEmailObject[] | undefined
                  cc?: CcBccEmailObject[] | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  from?: FromEmailObject | undefined
                  headers?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                  subject?: string | undefined
                  substitutions?: { [x: string]: unknown } | undefined
                  to: ToEmailArray
                }[]
                reply_to?: ReplyToEmailObject | undefined
                reply_to_list?: { email: string; name?: string | undefined }[] | undefined
                send_at?: number | undefined
                subject: string
                template_id?: string | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_campaign?: string | undefined
                            utm_content?: string | undefined
                            utm_medium?: string | undefined
                            utm_source?: string | undefined
                            utm_term?: string | undefined
                          }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                            text?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail_settings': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              result: { description: string; enabled: boolean; name: string; title: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail_settings/address_whitelist': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: MailSettingsAddressWhitelabel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; list?: string[] | undefined }
            }
            output: MailSettingsAddressWhitelabel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; list?: string[] | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; list?: string[] | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; list?: string[] | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; list?: string[] | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; list?: string[] | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail_settings/bounce_purge': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: MailSettingsBouncePurge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsBouncePurge
            }
            output: MailSettingsBouncePurge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsBouncePurge
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsBouncePurge
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsBouncePurge
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsBouncePurge
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsBouncePurge
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail_settings/footer': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: MailSettingsFooter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsFooter
            }
            output: MailSettingsFooter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsFooter
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsFooter
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsFooter
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsFooter
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsFooter
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail_settings/forward_bounce': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: MailSettingsForwardBounce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardBounce
            }
            output: MailSettingsForwardBounce
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardBounce
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardBounce
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardBounce
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardBounce
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardBounce
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail_settings/forward_spam': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: MailSettingsForwardSpam
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardSpam
            }
            output: MailSettingsForwardSpam
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardSpam
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardSpam
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardSpam
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardSpam
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: MailSettingsForwardSpam
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mail_settings/template': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: MailSettingsTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; html_content?: string | undefined }
            }
            output: { enabled: boolean; html_content: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; html_content?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; html_content?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; html_content?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; html_content?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled?: boolean | undefined; html_content?: string | undefined }
            }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: (string | null) | undefined
                    message: string
                    parameter?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mailbox_providers/stats': {
      $get: {
        input: {
          query: {
            mailbox_providers?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
            start_date: string
            end_date?: string | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          date?: string | undefined
          stats?:
            | {
                metrics?: AdvancedStatsMailboxProvider | undefined
                name?: string | undefined
                type?: string | undefined
              }[]
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/marketing/contacts': {
      $delete:
        | {
            input: { query: { delete_all_contacts?: string | undefined; ids?: string | undefined } }
            output: { job_id: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { delete_all_contacts?: string | undefined; ids?: string | undefined } }
            output: { errors: { [x: string]: unknown }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { delete_all_contacts?: string | undefined; ids?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { delete_all_contacts?: string | undefined; ids?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { delete_all_contacts?: string | undefined; ids?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { delete_all_contacts?: string | undefined; ids?: string | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {}
            output: {
              _metadata?: Selfmetadata | undefined
              contact_count?: number | undefined
              result?: ContactDetails3[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { errors?: Error[] | undefined }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 401 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { json: { contacts: ContactRequest[]; list_ids?: string[] | undefined } }
            output: { job_id?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { contacts: ContactRequest[]; list_ids?: string[] | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { contacts: ContactRequest[]; list_ids?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { contacts: ContactRequest[]; list_ids?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { contacts: ContactRequest[]; list_ids?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { contacts: ContactRequest[]; list_ids?: string[] | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/batch': {
      $post:
        | {
            input: { json: { ids: string[] } }
            output: { result?: ContactDetails3[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ids: string[] } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { ids: string[] } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { ids: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { ids: string[] } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/count': {
      $get:
        | {
            input: {}
            output: {
              billable_breakdown?:
                | { breakdown?: { [x: string]: unknown } | undefined; total?: number | undefined }
                | undefined
              billable_count?: number | undefined
              contact_count: number
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 401 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 403 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/exports': {
      $get:
        | {
            input: {}
            output: {
              _metadata?:
                | {
                    next?: string | undefined
                    prev?: string | undefined
                    self?: string | undefined
                  }
                | undefined
              result?:
                | {
                    _metadata?:
                      | {
                          next?: string | undefined
                          prev?: string | undefined
                          self?: string | undefined
                        }
                      | undefined
                    completed_at?: string | undefined
                    created_at?: string | undefined
                    expires_at?: string | undefined
                    export_type?: string | undefined
                    id?: string | undefined
                    lists?: { ID?: string | undefined; Name?: string | undefined }[] | undefined
                    segments?: { ID?: string | undefined; Name?: string | undefined }[] | undefined
                    status?: string | undefined
                    urls?: string[] | undefined
                    user_id?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              errors?:
                | { ''?: string | undefined; error_id?: string | undefined; message: string }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 401 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 403 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                file_type?: 'csv' | 'json' | undefined
                list_ids?: string[] | undefined
                max_file_size?: number | undefined
                notifications?: { email?: boolean | undefined } | undefined
                segment_ids?: string[] | undefined
              }
            }
            output: { _metadata: Metadata2; id?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                file_type?: 'csv' | 'json' | undefined
                list_ids?: string[] | undefined
                max_file_size?: number | undefined
                notifications?: { email?: boolean | undefined } | undefined
                segment_ids?: string[] | undefined
              }
            }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                file_type?: 'csv' | 'json' | undefined
                list_ids?: string[] | undefined
                max_file_size?: number | undefined
                notifications?: { email?: boolean | undefined } | undefined
                segment_ids?: string[] | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                file_type?: 'csv' | 'json' | undefined
                list_ids?: string[] | undefined
                max_file_size?: number | undefined
                notifications?: { email?: boolean | undefined } | undefined
                segment_ids?: string[] | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                file_type?: 'csv' | 'json' | undefined
                list_ids?: string[] | undefined
                max_file_size?: number | undefined
                notifications?: { email?: boolean | undefined } | undefined
                segment_ids?: string[] | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                file_type?: 'csv' | 'json' | undefined
                list_ids?: string[] | undefined
                max_file_size?: number | undefined
                notifications?: { email?: boolean | undefined } | undefined
                segment_ids?: string[] | undefined
              }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/exports/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ContactExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/imports': {
      $put:
        | {
            input: {
              json: {
                field_mappings: (string | ({ [x: string]: unknown } | null))[]
                file_type: 'csv'
                list_ids?: string[] | undefined
              }
            }
            output: {
              job_id?: string | undefined
              upload_headers?: { header: string; value: string }[] | undefined
              upload_uri?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                field_mappings: (string | ({ [x: string]: unknown } | null))[]
                file_type: 'csv'
                list_ids?: string[] | undefined
              }
            }
            output: { errors: Error[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                field_mappings: (string | ({ [x: string]: unknown } | null))[]
                file_type: 'csv'
                list_ids?: string[] | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                field_mappings: (string | ({ [x: string]: unknown } | null))[]
                file_type: 'csv'
                list_ids?: string[] | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                field_mappings: (string | ({ [x: string]: unknown } | null))[]
                file_type: 'csv'
                list_ids?: string[] | undefined
              }
            }
            output: { errors: Error[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                field_mappings: (string | ({ [x: string]: unknown } | null))[]
                file_type: 'csv'
                list_ids?: string[] | undefined
              }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/imports/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ContactImport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { errors?: Error | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/search': {
      $post:
        | {
            input: { json: { query: string } }
            output: {
              _metadata?: Selfmetadata | undefined
              contact_count: number
              result?: ContactDetails3[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { query: string } }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { query: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { query: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { query: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: { query: string } }; output: {}; outputFormat: string; status: 408 }
        | {
            input: { json: { query: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/search/emails': {
      $post:
        | {
            input: { json: { emails: string[] } }
            output: { result?: {} | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { emails: string[] } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { emails: string[] } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { emails: string[] } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { emails: string[] } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { emails: string[] } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/contacts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ContactDetails3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { id: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/field_definitions': {
      $get: {
        input: {}
        output: {
          _metadata?: Metadata | undefined
          custom_fields: CustomFieldDefinitionsResponse[]
          reserved_fields: ReservedFieldDefinitionsResponse
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { field_type: 'Text' | 'Number' | 'Date'; name: string } }
            output: {
              field_type: 'Text' | 'Number' | 'Date'
              id: string
              name: string
              _metadata?: Metadata | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { field_type: 'Text' | 'Number' | 'Date'; name: string } }
            output: { errors: Error[] }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/marketing/field_definitions/:custom_field_id': {
      $delete:
        | {
            input: { param: { custom_field_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { custom_field_id: string } }
            output: { errors: Error[] }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { custom_field_id: string } } & { json: { name: string } }
            output: {
              field_type: 'Text' | 'Number' | 'Date'
              id: string
              name: string
              _metadata?: Metadata | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_id: string } } & { json: { name: string } }
            output: { errors: Error[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { custom_field_id: string } } & { json: { name: string } }
            output: { errors: Error[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/marketing/lists': {
      $get: {
        input: { query: { page_size?: number | undefined; page_token?: string | undefined } }
        output: { _metadata?: Metadata2 | undefined; result?: List[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: { name: string } }; output: List; outputFormat: 'json'; status: 200 }
        | {
            input: { json: { name: string } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/marketing/lists/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { delete_contacts?: boolean | undefined } }
            output: { job_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { delete_contacts?: boolean | undefined } }
            output: string
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { delete_contacts?: boolean | undefined } }
            output: { errors: { [x: string]: unknown }[] }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { contact_sample?: boolean | undefined } }
            output: {
              _metadata?: Selfmetadata | undefined
              contact_count?: number | undefined
              id?: string | undefined
              name?: string | undefined
              contact_sample?: ContactDetails2 | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { contact_sample?: boolean | undefined } }
            output: Error[]
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: { name?: string | undefined } }
            output: List
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { name?: string | undefined } }
            output: { errors?: Error[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { name?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/marketing/lists/:id/contacts': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { contact_ids: string } }
            output: { job_id?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { query: { contact_ids: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { contact_ids: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/marketing/lists/:id/contacts/count': {
      $get:
        | {
            input: { param: { id: string } }
            output: { billable_count?: number | undefined; contact_count?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/marketing/segments': {
      $get:
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: { results: SegmentSummary[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                name: string
                parent_list_ids?: string[] | undefined
                query_dsl: string
                parent_list_id?: string | undefined
              }
            }
            output: FullSegment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                parent_list_ids?: string[] | undefined
                query_dsl: string
                parent_list_id?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                parent_list_ids?: string[] | undefined
                query_dsl: string
                parent_list_id?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                parent_list_ids?: string[] | undefined
                query_dsl: string
                parent_list_id?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name: string
                parent_list_ids?: string[] | undefined
                query_dsl: string
                parent_list_id?: string | undefined
              }
            }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/segments/2.0': {
      $get:
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: AllSegmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                parent_list_ids?: string | undefined
                no_parent_list_id?: boolean | undefined
              }
            }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: SegmentWriteV2 }
            output: SegmentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SegmentWriteV2 }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: SegmentWriteV2 }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: SegmentWriteV2 }; output: {}; outputFormat: string; status: 429 }
        | {
            input: { json: SegmentWriteV2 }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/segments/2.0/:segment_id': {
      $delete:
        | {
            input: { param: { segment_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { segment_id: string } }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { segment_id: string } }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { segment_id: string } } & {
              query: { contacts_sample?: boolean | undefined }
            }
            output: SegmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { contacts_sample?: boolean | undefined }
            }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { contacts_sample?: boolean | undefined }
            }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { segment_id: string } } & { json: SegmentUpdate }
            output: SegmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: string } } & { json: SegmentUpdate }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: string } } & { json: SegmentUpdate }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { segment_id: string } } & { json: SegmentUpdate }
            output: ErrorsSegV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/segments/delete': {
      $post:
        | {
            input: { json: { ids?: string[] | undefined } }
            output: {
              errors?:
                | {
                    error?: string | undefined
                    id?: string | undefined
                    resources?:
                      | { ids?: string[] | undefined; type?: string | undefined }
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ids?: string[] | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { ids?: string[] | undefined } }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { ids?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { ids?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { ids?: string[] | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { ids?: string[] | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/segments/:segment_id': {
      $delete:
        | {
            input: { param: { segment_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { segment_id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { segment_id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { segment_id: string } }
            output: { errors: { field: string; message: string }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { segment_id: string } }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { segment_id: string } } & {
              query: { query_json?: boolean | undefined }
            }
            output: FullSegment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { query_json?: boolean | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { query_json?: boolean | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { query_json?: boolean | undefined }
            }
            output: { errors: { field: string; message: string }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { segment_id: string } } & {
              query: { query_json?: boolean | undefined }
            }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { segment_id: string } } & { json: SegmentWriteV2 }
            output: FullSegment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { segment_id: string } } & { json: SegmentWriteV2 }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { segment_id: string } } & { json: SegmentWriteV2 }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { segment_id: string } } & { json: SegmentWriteV2 }
            output: { errors: { field: string; message: string }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { segment_id: string } } & { json: SegmentWriteV2 }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/senders': {
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                address: string
                address_2?: string | undefined
                city: string
                country: string
                from: { email: string; name: string }
                nickname: string
                reply_to?: { email: string; name?: string | undefined } | undefined
                state?: string | undefined
                zip?: string | undefined
              }
            }
            output: SenderID
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                address: string
                address_2?: string | undefined
                city: string
                country: string
                from: { email: string; name: string }
                nickname: string
                reply_to?: { email: string; name?: string | undefined } | undefined
                state?: string | undefined
                zip?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                address: string
                address_2?: string | undefined
                city: string
                country: string
                from: { email: string; name: string }
                nickname: string
                reply_to?: { email: string; name?: string | undefined } | undefined
                state?: string | undefined
                zip?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                address: string
                address_2?: string | undefined
                city: string
                country: string
                from: { email: string; name: string }
                nickname: string
                reply_to?: { email: string; name?: string | undefined } | undefined
                state?: string | undefined
                zip?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                address: string
                address_2?: string | undefined
                city: string
                country: string
                from: { email: string; name: string }
                nickname: string
                reply_to?: { email: string; name?: string | undefined } | undefined
                state?: string | undefined
                zip?: string | undefined
              }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/singlesends': {
      $delete:
        | {
            input: { query: { ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { ids?: string[] | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { ids?: string[] | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { page_size?: number | undefined; page_token?: string | undefined } }
            output: {
              _metadata?: Metadata | undefined
              result?: SinglesendResponseShort[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page_size?: number | undefined; page_token?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: SinglesendRequest }
            output: SinglesendResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SinglesendRequest }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SinglesendRequest }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/singlesends/categories': {
      $get:
        | {
            input: {}
            output: { categories?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/singlesends/search': {
      $post:
        | {
            input: {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { json: SinglesendSearch }
            output: {
              _metadata?: Metadata | undefined
              result?: SinglesendResponseShort[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { json: SinglesendSearch }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/marketing/singlesends/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } }
            output: SinglesendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: SinglesendRequest }
            output: SinglesendResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: SinglesendRequest }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SinglesendRequest }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SinglesendRequest }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { id: string } } & { json: { name?: string | undefined } }
            output: SinglesendResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: { name?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { name?: string | undefined } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/singlesends/:id/schedule': {
      $delete:
        | {
            input: { param: { id: string } }
            output: SinglesendSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & { json: { send_at: 'now' } }
            output: { send_at?: string | undefined; status?: 'scheduled' | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: { send_at: 'now' } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { send_at: 'now' } }
            output: {
              errors?:
                | {
                    error_id?: string | undefined
                    field?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/marketing/stats/automations': {
      $get:
        | {
            input: {
              query: {
                automation_ids?: string[] | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: AutomationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                automation_ids?: string[] | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/marketing/stats/automations/export': {
      $get:
        | {
            input: { query: { ids?: string[] | undefined; timezone?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids?: string[] | undefined; timezone?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/marketing/stats/automations/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                group_by?: 'step_id'[] | undefined
                step_ids?: string[] | undefined
                aggregated_by?: 'day' | 'total' | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                timezone?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: AutomationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                group_by?: 'step_id'[] | undefined
                step_ids?: string[] | undefined
                aggregated_by?: 'day' | 'total' | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                timezone?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                group_by?: 'step_id'[] | undefined
                step_ids?: string[] | undefined
                aggregated_by?: 'day' | 'total' | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                timezone?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/marketing/stats/automations/:id/links': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                group_by?: 'step_id'[] | undefined
                step_ids?: string[] | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: AutomationsLinkStatsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                group_by?: 'step_id'[] | undefined
                step_ids?: string[] | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                group_by?: 'step_id'[] | undefined
                step_ids?: string[] | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/marketing/stats/singlesends': {
      $get:
        | {
            input: {
              query: {
                singlesend_ids?: string[] | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: SinglesendsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                singlesend_ids?: string[] | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/marketing/stats/singlesends/export': {
      $get:
        | {
            input: { query: { ids?: string[] | undefined; timezone?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids?: string[] | undefined; timezone?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/marketing/stats/singlesends/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                aggregated_by?: 'day' | 'total' | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                timezone?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
                group_by?: ('ab_variation' | 'ab_phase')[] | undefined
              }
            }
            output: SinglesendsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                aggregated_by?: 'day' | 'total' | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                timezone?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
                group_by?: ('ab_variation' | 'ab_phase')[] | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                aggregated_by?: 'day' | 'total' | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                timezone?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
                group_by?: ('ab_variation' | 'ab_phase')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/marketing/stats/singlesends/:id/links': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                group_by?: ('ab_variation' | 'ab_phase')[] | undefined
                ab_variation_id?: string | undefined
                ab_phase_id?: 'test' | 'send' | undefined
              }
            }
            output: SinglesendsLinkStatsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                group_by?: ('ab_variation' | 'ab_phase')[] | undefined
                ab_variation_id?: string | undefined
                ab_phase_id?: 'test' | 'send' | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                group_by?: ('ab_variation' | 'ab_phase')[] | undefined
                ab_variation_id?: string | undefined
                ab_phase_id?: 'test' | 'send' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/marketing/test/send_email': {
      $post:
        | {
            input: {
              json: {
                custom_unsubscribe_url?: string | undefined
                emails: string[]
                from_address?: string | undefined
                sender_id?: number | undefined
                suppression_group_id?: number | undefined
                template_id: string
                version_id_override?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                custom_unsubscribe_url?: string | undefined
                emails: string[]
                from_address?: string | undefined
                sender_id?: number | undefined
                suppression_group_id?: number | undefined
                template_id: string
                version_id_override?: string | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/messages': {
      $get:
        | {
            input: { query: { query: string; limit?: number | undefined } } & {
              header: {
                'X-Query-Id'?: string | undefined
                'X-Cursor'?: string | undefined
                Authorization: string
              }
            }
            output: {
              messages?:
                | {
                    from_email?: string | undefined
                    msg_id?: string | undefined
                    status?: 'processed' | 'delivered' | 'not delivered' | undefined
                    subject?: string | undefined
                    to_email?: string | undefined
                    clicks_count?: number | undefined
                    last_event_time?: number | undefined
                    opens_count?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; limit?: number | undefined } } & {
              header: {
                'X-Query-Id'?: string | undefined
                'X-Cursor'?: string | undefined
                Authorization: string
              }
            }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { query: string; limit?: number | undefined } } & {
              header: {
                'X-Query-Id'?: string | undefined
                'X-Cursor'?: string | undefined
                Authorization: string
              }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/messages/download': {
      $post:
        | {
            input: { query: { query?: string | undefined } } & { header: { Authorization: string } }
            output: { message?: string | undefined; status?: 'pending' | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { query?: string | undefined } } & { header: { Authorization: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { query?: string | undefined } } & { header: { Authorization: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { query?: string | undefined } } & { header: { Authorization: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/download/:download_uuid': {
      $get:
        | {
            input: { param: { download_uuid: string } } & { header: { Authorization: string } }
            output: { csv: string; presigned_url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { download_uuid: string } } & { header: { Authorization: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { download_uuid: string } } & { header: { Authorization: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/:msg_id': {
      $get:
        | {
            input: { param: { msg_id: string } } & { header: { Authorization: string } }
            output: {
              from_email?: string | undefined
              msg_id?: string | undefined
              status?: 'processed' | 'delivered' | 'not delivered' | undefined
              subject?: string | undefined
              to_email?: string | undefined
              api_key_id: string
              asm_group_id: number
              categories: string[]
              events: {
                attempt_num?: number | undefined
                bounce_type: 'soft' | 'hard'
                event_name:
                  | 'bounced'
                  | 'opened'
                  | 'clicked'
                  | 'processed'
                  | 'dropped'
                  | 'delivered'
                  | 'deferred'
                  | 'spam_report'
                  | 'unsubscribe'
                  | 'group_unsubscribe'
                  | 'group_resubscribe'
                http_user_agent: string
                mx_server: string
                processed: string
                reason?: string | undefined
                url?: string | undefined
              }[]
              originating_ip: string
              outbound_ip: string
              outbound_ip_type: 'dedicated' | 'shared'
              teammate: string
              template_id: string
              unique_args: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { msg_id: string } } & { header: { Authorization: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { msg_id: string } } & { header: { Authorization: string } }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { msg_id: string } } & { header: { Authorization: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/partner_settings': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: {
          result?:
            | { description: string; enabled: boolean; name: string; title: string }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/partner_settings/new_relic': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: PartnerSettingsNewRelic
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: {
            enable_subuser_statistics?: boolean | undefined
            enabled?: boolean | undefined
            license_key?: string | undefined
          }
        }
        output: PartnerSettingsNewRelic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/scopes': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { scopes: string[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors: { field?: ({ [x: string]: unknown } | null) | undefined; message: string }[]
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scopes/requests': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          email?: string | undefined
          first_name?: string | undefined
          id?: number | undefined
          last_name?: string | undefined
          scope_group_name?: string | undefined
          username?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/scopes/requests/:request_id': {
      $delete:
        | {
            input: { param: { request_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { request_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { request_id: string } }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/scopes/requests/:request_id/approve': {
      $patch:
        | {
            input: { param: { request_id: string } }
            output: { scope_group_name?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { request_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { request_id: string } }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/senders': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: { result?: SenderID[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                address?: string | undefined
                address_2?: string | undefined
                city?: string | undefined
                country?: string | undefined
                from?: { [x: string]: unknown } | undefined
                nickname?: string | undefined
                reply_to?: { [x: string]: unknown } | undefined
                state?: string | undefined
                zip?: string | undefined
              }
            }
            output: SenderID
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: {
                address?: string | undefined
                address_2?: string | undefined
                city?: string | undefined
                country?: string | undefined
                from?: { [x: string]: unknown } | undefined
                nickname?: string | undefined
                reply_to?: { [x: string]: unknown } | undefined
                state?: string | undefined
                zip?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/senders/:sender_id': {
      $delete:
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: SenderID
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: SenderIdRequest }
            output: SenderID
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: SenderIdRequest }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: SenderIdRequest }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: SenderIdRequest }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/senders/:sender_id/resend_verification': {
      $post:
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sender_id: number } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sso/certificates': {
      $post:
        | {
            input: {
              json: {
                enabled?: boolean | undefined
                integration_id: string
                public_certificate: string
              }
            }
            output: SsoCertificateBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                enabled?: boolean | undefined
                integration_id: string
                public_certificate: string
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                enabled?: boolean | undefined
                integration_id: string
                public_certificate: string
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                enabled?: boolean | undefined
                integration_id: string
                public_certificate: string
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                enabled?: boolean | undefined
                integration_id: string
                public_certificate: string
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                enabled?: boolean | undefined
                integration_id: string
                public_certificate: string
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sso/certificates/:cert_id': {
      $delete:
        | {
            input: { param: { cert_id: string } }
            output: SsoCertificateBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { cert_id: string } }
            output: SsoCertificateBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cert_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { cert_id: string } } & {
              json: {
                enabled?: boolean | undefined
                integration_id?: string | undefined
                public_certificate?: string | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cert_id: string } } & {
              json: {
                enabled?: boolean | undefined
                integration_id?: string | undefined
                public_certificate?: string | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cert_id: string } } & {
              json: {
                enabled?: boolean | undefined
                integration_id?: string | undefined
                public_certificate?: string | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cert_id: string } } & {
              json: {
                enabled?: boolean | undefined
                integration_id?: string | undefined
                public_certificate?: string | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cert_id: string } } & {
              json: {
                enabled?: boolean | undefined
                integration_id?: string | undefined
                public_certificate?: string | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sso/integrations': {
      $get:
        | {
            input: { query: { si?: boolean | undefined } }
            output: SsoIntegration[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateIntegrationRequest }
            output: SsoIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateIntegrationRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateIntegrationRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateIntegrationRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateIntegrationRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateIntegrationRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sso/integrations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } }
            output: SsoIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } } & {
              json: CreateIntegrationRequest
            }
            output: SsoIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } } & {
              json: CreateIntegrationRequest
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } } & {
              json: CreateIntegrationRequest
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } } & {
              json: CreateIntegrationRequest
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } } & {
              json: CreateIntegrationRequest
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { si?: boolean | undefined } } & {
              json: CreateIntegrationRequest
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sso/integrations/:integration_id/certificates': {
      $get:
        | {
            input: { param: { integration_id: string } }
            output: SsoCertificateBody[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integration_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integration_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integration_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integration_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { integration_id: string } }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sso/teammates': {
      $post:
        | {
            input: { json: SsoTeammateRequest }
            output: SsoTeammateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SsoTeammateRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SsoTeammateRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SsoTeammateRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SsoTeammateRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: SsoTeammateRequest }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sso/teammates/:username': {
      $patch:
        | {
            input: { param: { username: string } } & {
              json: {
                first_name?: string | undefined
                is_admin?: boolean | undefined
                last_name?: string | undefined
                scopes?: string[] | undefined
              }
            }
            output: SsoTeammatesPatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              json: {
                first_name?: string | undefined
                is_admin?: boolean | undefined
                last_name?: string | undefined
                scopes?: string[] | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { username: string } } & {
              json: {
                first_name?: string | undefined
                is_admin?: boolean | undefined
                last_name?: string | undefined
                scopes?: string[] | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { username: string } } & {
              json: {
                first_name?: string | undefined
                is_admin?: boolean | undefined
                last_name?: string | undefined
                scopes?: string[] | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { username: string } } & {
              json: {
                first_name?: string | undefined
                is_admin?: boolean | undefined
                last_name?: string | undefined
                scopes?: string[] | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { username: string } } & {
              json: {
                first_name?: string | undefined
                is_admin?: boolean | undefined
                last_name?: string | undefined
                scopes?: string[] | undefined
              }
            }
            output: SsoErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/stats': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
            start_date: string
            end_date?: string | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { date: string; stats: { metrics?: StatsAdvancedGlobalStats | undefined }[] }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subusers': {
      $get:
        | {
            input: {
              query: {
                username?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Subuser[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                username?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { email: string; ips: string[]; password: string; username: string } }
            output: SubuserPost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; ips: string[]; password: string; username: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { email: string; ips: string[]; password: string; username: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { email: string; ips: string[]; password: string; username: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { email: string; ips: string[]; password: string; username: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subusers/reputations': {
      $get: {
        input: { query: { usernames?: string | undefined } }
        output: { reputation: number; username: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subusers/stats': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
            subusers: string
            start_date: string
            end_date?: string | undefined
          }
        }
        output: CategoryStats
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subusers/stats/monthly': {
      $get: {
        input: {
          query: {
            date: string
            subuser?: string | undefined
            sort_by_metric?:
              | 'blocks'
              | 'bounces'
              | 'clicks'
              | 'delivered'
              | 'opens'
              | 'requests'
              | 'unique_clicks'
              | 'unique_opens'
              | 'unsubscribes'
              | undefined
            sort_by_direction?: 'desc' | 'asc' | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: SubuserStats
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subusers/stats/sums': {
      $get: {
        input: {
          query: {
            sort_by_direction?: 'desc' | 'asc' | undefined
            start_date: string
            end_date?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
            aggregated_by?: string | undefined
            sort_by_metric?: string | undefined
          }
        }
        output: CategoryStats
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subusers/:subuser_name': {
      $delete:
        | {
            input: { param: { subuser_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { subuser_name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { subuser_name: string } } & {
              json: { disabled?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { subuser_name: string } } & {
              json: { disabled?: boolean | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subuser_name: string } } & {
              json: { disabled?: boolean | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subuser_name: string } } & {
              json: { disabled?: boolean | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subusers/:subuser_name/ips': {
      $put:
        | {
            input: { param: { subuser_name: string } } & { json: string[] }
            output: { ips?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subuser_name: string } } & { json: string[] }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/subusers/:subuser_name/monitor': {
      $delete:
        | {
            input: { param: { subuser_name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { subuser_name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subuser_name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { subuser_name: string } }
            output: Monitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subuser_name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subuser_name: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { subuser_name: string } } & { json: Monitor }
            output: Monitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subuser_name: string } } & { json: Monitor }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subuser_name: string } } & { json: Monitor }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { subuser_name: string } } & { json: Monitor }
            output: Monitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subuser_name: string } } & { json: Monitor }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subuser_name: string } } & { json: Monitor }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/subusers/:subuser_name/stats/monthly': {
      $get: {
        input: { param: { subuser_name: string } } & {
          query: {
            date: string
            sort_by_metric?: string | undefined
            sort_by_direction?: 'desc' | 'asc' | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: SubuserStats
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppression/blocks': {
      $delete: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { delete_all?: boolean | undefined; emails?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: {
          query: {
            start_time?: number | undefined
            end_time?: number | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: BlocksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppression/blocks/:email': {
      $delete: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: BlocksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppression/bounces': {
      $delete:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { delete_all?: boolean | undefined; emails?: string[] | undefined }
            }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { delete_all?: boolean | undefined; emails?: string[] | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { query: { start_time?: number | undefined; end_time?: number | undefined } } & {
              header: { Accept: string; 'on-behalf-of'?: string | undefined }
            }
            output: BounceResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start_time?: number | undefined; end_time?: number | undefined } } & {
              header: { Accept: string; 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/suppression/bounces/:email': {
      $delete:
        | {
            input: { param: { email: string } } & { query: { email_address: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { [x: string]: unknown } | null }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { email: string } } & { query: { email_address: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { [x: string]: unknown } | null }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
      $get: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: BounceResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppression/invalid_emails': {
      $delete: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { delete_all?: boolean | undefined; emails?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: {
          query: {
            start_time?: number | undefined
            end_time?: number | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: InvalidEmail[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppression/invalid_emails/:email': {
      $delete: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: InvalidEmail[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppression/spam_reports': {
      $delete: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { delete_all?: boolean | undefined; emails?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: {
          query: {
            start_time?: number | undefined
            end_time?: number | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: SpamReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppression/spam_reports/:email': {
      $delete: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { email: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: SpamReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/suppression/unsubscribes': {
      $get: {
        input: {
          query: {
            start_time?: number | undefined
            end_time?: number | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { created: number; email: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/teammates': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: {
          result?:
            | {
                address?: string | undefined
                address2?: string | undefined
                city?: string | undefined
                country?: string | undefined
                email?: string | undefined
                first_name?: string | undefined
                is_admin?: boolean | undefined
                last_name?: string | undefined
                phone?: string | undefined
                state?: string | undefined
                user_type?: 'admin' | 'owner' | 'teammate' | undefined
                username?: string | undefined
                website?: string | undefined
                zip?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { email: string; is_admin: boolean; scopes: string[] }
            }
            output: {
              email?: string | undefined
              is_admin?: boolean | undefined
              scopes?: { [x: string]: unknown }[] | undefined
              token?: string | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { email: string; is_admin: boolean; scopes: string[] }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/teammates/pending': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          result?:
            | {
                email?: string | undefined
                expiration_date?: number | undefined
                is_admin?: boolean | undefined
                scopes?: string[] | undefined
                token?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/teammates/pending/:token': {
      $delete:
        | {
            input: { param: { token: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { token: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teammates/pending/:token/resend': {
      $post:
        | {
            input: { param: { token: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              email?: string | undefined
              is_admin?: boolean | undefined
              scopes?: string[] | undefined
              token?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teammates/:username': {
      $delete:
        | {
            input: { param: { username: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { username: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { username: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          address?: string | undefined
          address2?: string | undefined
          city?: string | undefined
          country?: string | undefined
          email?: string | undefined
          first_name?: string | undefined
          is_admin?: boolean | undefined
          last_name?: string | undefined
          phone?: string | undefined
          scopes?: { [x: string]: unknown }[] | undefined
          state?: string | undefined
          user_type?: 'admin' | 'owner' | 'teammate' | undefined
          username?: string | undefined
          website?: string | undefined
          zip?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { username: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { is_admin: boolean; scopes: string[] } }
            output: {
              address?: string | undefined
              address2?: string | undefined
              city?: string | undefined
              country?: string | undefined
              email?: string | undefined
              first_name?: string | undefined
              is_admin?: boolean | undefined
              last_name?: string | undefined
              phone?: string | undefined
              scopes?: string[] | undefined
              state?: string | undefined
              user_type?: 'admin' | 'owner' | 'teammate' | undefined
              username?: string | undefined
              website?: string | undefined
              zip?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { is_admin: boolean; scopes: string[] } }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { username: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { is_admin: boolean; scopes: string[] } }
            output: {
              errors?: { field?: string | undefined; message?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/templates': {
      $get:
        | {
            input: {
              query: {
                generations?: 'legacy' | 'dynamic' | 'legacy,dynamic' | undefined
                page_size: number
                page_token?: string | undefined
              }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              _metadata?: Metadata | undefined
              result?: TransactionalTemplatesTemplateLean[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                generations?: 'legacy' | 'dynamic' | 'legacy,dynamic' | undefined
                page_size: number
                page_token?: string | undefined
              }
            } & { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    ''?: string | undefined
                    error_id?: string | undefined
                    message?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $post: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { generation?: 'legacy' | 'dynamic' | undefined; name: string }
        }
        output: TransactionalTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/templates/:template_id': {
      $delete: {
        input: { param: { template_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { template_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: TransactionalTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { template_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & { json: { name?: string | undefined } }
        output: TransactionalTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { template_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & { json: { name?: string | undefined } }
        output: TransactionalTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/templates/:template_id/versions': {
      $post: {
        input: { param: { template_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & { json: TransactionalTemplateVersionCreate }
        output: TransactionalTemplateVersionOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/templates/:template_id/versions/:version_id': {
      $delete: {
        input: { param: { template_id: string; version_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { template_id: string; version_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: TransactionalTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { template_id: string; version_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & { json: TransactionalTemplateVersionCreate }
        output: TransactionalTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/:template_id/versions/:version_id/activate': {
      $post: {
        input: { param: { template_id: string; version_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: TransactionalTemplateVersionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tracking_settings': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          result?:
            | {
                description?: string | undefined
                enabled?: boolean | undefined
                name?: string | undefined
                title?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tracking_settings/click': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: ClickTracking
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { enabled?: boolean | undefined }
        }
        output: ClickTracking
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tracking_settings/google_analytics': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: GoogleAnalyticsSettings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: GoogleAnalyticsSettings
        }
        output: GoogleAnalyticsSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tracking_settings/open': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: { enabled: boolean }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { enabled?: boolean | undefined }
        }
        output: { enabled: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tracking_settings/subscription': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: SubscriptionTrackingSettings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: SubscriptionTrackingSettings
        }
        output: SubscriptionTrackingSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/account': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: { reputation: number; type: 'free' | 'paid' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/credits': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          last_reset: string
          next_reset: string
          overage: number
          remain: number
          reset_frequency: string
          total: number
          used: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/email': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: { email: string }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { email?: string | undefined }
        }
        output: { email: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/password': {
      $put: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { new_password: string; old_password: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/profile': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: {
          address: string
          address2?: string | undefined
          city: string
          company: string
          country: string
          first_name: string
          last_name: string
          phone: string
          state: string
          website: string
          zip: string
        }
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: UserProfile }
            output: UserProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: UserProfile }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/user/scheduled_sends': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: UserScheduledSendStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              errors?:
                | {
                    field?: string | undefined
                    help?: { [x: string]: unknown } | undefined
                    message?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { batch_id: string; status: 'pause' | 'cancel' }
            }
            output: UserScheduledSendStatus
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { batch_id: string; status: 'pause' | 'cancel' }
            }
            output: {
              errors?:
                | {
                    field?: string | undefined
                    help?: { [x: string]: unknown } | undefined
                    message?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { batch_id: string; status: 'pause' | 'cancel' }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { batch_id: string; status: 'pause' | 'cancel' }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { batch_id: string; status: 'pause' | 'cancel' }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { batch_id: string; status: 'pause' | 'cancel' }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/scheduled_sends/:batch_id': {
      $delete:
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?:
                | {
                    field?: string | undefined
                    help?: { [x: string]: unknown } | undefined
                    message?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: UserScheduledSendStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: {
              errors?:
                | {
                    field?: string | undefined
                    help?: { [x: string]: unknown } | undefined
                    message?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { status: 'cancel' | 'pause' } }
            output: { [x: string]: unknown } | null
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { status: 'cancel' | 'pause' } }
            output: {
              errors?:
                | {
                    field?: string | undefined
                    help?: { [x: string]: unknown } | undefined
                    message?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { status: 'cancel' | 'pause' } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { status: 'cancel' | 'pause' } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { status: 'cancel' | 'pause' } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: { status: 'cancel' | 'pause' } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/settings/enforced_tls': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: EnforcedTlsRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: EnforcedTlsRequestResponse
            }
            output: EnforcedTlsRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: EnforcedTlsRequestResponse
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: EnforcedTlsRequestResponse
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: EnforcedTlsRequestResponse
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: EnforcedTlsRequestResponse
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/username': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: { user_id: number; username: string }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { username?: string | undefined }
        }
        output: { username: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/webhooks/event/settings': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: EventWebhookResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: EventWebhookUpdateOauthRequest
        }
        output: EventWebhookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/webhooks/event/settings/signed': {
      $get: {
        input: { header: { 'on-behalf-of'?: string | undefined } }
        output: { public_key: string }
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled: boolean }
            }
            output: { public_key: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled: boolean }
            }
            output: {
              errors?: { field?: (string | null) | undefined; message: string }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled: boolean }
            }
            output: {
              errors?: { field?: (string | null) | undefined; message: string }[] | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & {
              json: { enabled: boolean }
            }
            output: {
              errors?: { field?: (string | null) | undefined; message: string }[] | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/webhooks/event/test': {
      $post: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: {
            oauth_client_id?: string | undefined
            oauth_client_secret?: string | undefined
            oauth_token_url?: string | undefined
            url?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/user/webhooks/parse/settings': {
      $get:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { result?: ParseSetting[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: ParseSetting }
            output: ParseSetting
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: ParseSetting }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: ParseSetting }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: ParseSetting }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } } & { json: ParseSetting }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/webhooks/parse/settings/:hostname': {
      $delete:
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ParseSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: ParseSetting }
            output: ParseSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: ParseSetting }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: ParseSetting }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: ParseSetting }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hostname: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            } & { json: ParseSetting }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/user/webhooks/parse/stats': {
      $get: {
        input: {
          query: {
            limit?: string | undefined
            offset?: string | undefined
            aggregated_by?: 'day' | 'week' | 'month' | undefined
            start_date: string
            end_date?: string | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { date: string; stats: { metrics?: { received: number } | undefined }[] }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/validations/email': {
      $post: {
        input: { json: { email: string; source?: string | undefined } }
        output: {
          result: {
            checks: {
              additional: { has_known_bounces: boolean; has_suspected_bounces: boolean }
              domain: {
                has_mx_or_a_record: boolean
                has_valid_address_syntax: boolean
                is_suspected_disposable_address: boolean
              }
              local_part: { is_suspected_role_address: boolean }
            }
            email: string
            host: string
            ip_address: string
            local: string
            score: number
            source?: string | undefined
            suggestion?: string | undefined
            verdict: 'Valid' | 'Risky' | 'Invalid'
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/verified_senders': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                lastSeenID?: number | undefined
                id?: number | undefined
              }
            }
            output: { results?: VerifiedSenderResponseSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                lastSeenID?: number | undefined
                id?: number | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                lastSeenID?: number | undefined
                id?: number | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                lastSeenID?: number | undefined
                id?: number | undefined
              }
            }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                lastSeenID?: number | undefined
                id?: number | undefined
              }
            }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: VerifiedSenderRequestSchema }
            output: VerifiedSenderResponseSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: VerifiedSenderRequestSchema }
            output: { errors: { error_id: string; field?: string | undefined; message: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: VerifiedSenderRequestSchema }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: VerifiedSenderRequestSchema }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: VerifiedSenderRequestSchema }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: VerifiedSenderRequestSchema }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/verified_senders/domains': {
      $get:
        | {
            input: {}
            output: { results: { hard_failures: string[]; soft_failures: string[] } }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 401 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 403 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/verified_senders/resend/:id': {
      $post:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } }
            output: { errors: { error_id: string; message: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { errors: { error_id: string; message: string }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/verified_senders/steps_completed': {
      $get:
        | {
            input: {}
            output: {
              results?:
                | { domain_verified?: boolean | undefined; sender_verified?: boolean | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 401 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 403 }
        | { input: {}; output: GlobalErrorResponseSchema; outputFormat: 'json'; status: 404 }
        | {
            input: {}
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/verified_senders/verify/:token': {
      $get:
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { token: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } }
            output: { errors: { error_id: string; message: string }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { token: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/verified_senders/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { id: string } }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { errors?: { error_id: string; message: string }[] | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { errors: { error_id: string; message: string }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: VerifiedSenderRequestSchema }
            output: VerifiedSenderResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: VerifiedSenderRequestSchema }
            output: { errors: { error_id: string; field?: string | undefined; message: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: VerifiedSenderRequestSchema }
            output: GlobalErrorResponseSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: VerifiedSenderRequestSchema }
            output: { errors: { error_id: string; message: string }[] }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: VerifiedSenderRequestSchema }
            output: { errors: { error_id: string; message: string }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: VerifiedSenderRequestSchema }
            output: { errors?: { message?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/whitelabel/dns/email': {
      $post:
        | {
            input: {
              json: {
                domain_id: number
                email: string
                link_id: number
                message?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json: {
                domain_id: number
                email: string
                link_id: number
                message?: string | undefined
              }
            }
            output: {
              errors?: { error?: string | undefined; field?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/whitelabel/domains': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            exclude_subusers?: boolean | undefined
            username?: string | undefined
            domain?: string | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: DomainAuthentication_200Response
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: {
            automatic_security?: boolean | undefined
            custom_dkim_selector?: string | undefined
            custom_spf?: boolean | undefined
            default?: boolean | undefined
            domain: string
            ips?: string[] | undefined
            subdomain?: string | undefined
            username?: string | undefined
          }
        }
        output: AuthenticationDomain
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/whitelabel/domains/default': {
      $get: {
        input: { query: { domain?: string | undefined } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: DomainAuthentication_200Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/domains/subuser': {
      $delete: {
        input: { query: { username?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { query: { username: string } }
        output: DomainAuthenticationDomainSpf
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/domains/:domain_id': {
      $delete: {
        input: { param: { domain_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { domain_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: AuthenticationDomain
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { domain_id: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        } & { json: { custom_spf?: boolean | undefined; default?: boolean | undefined } }
        output: DomainAuthentication_200Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/domains/:domain_id/subuser': {
      $post: {
        input: { param: { domain_id: number } } & { json: { username: string } }
        output: DomainAuthenticationDomainSpf
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/whitelabel/domains/:id/ips': {
      $post: {
        input: { param: { id: number } } & { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { ip: string }
        }
        output: DomainAuthenticationDomainSpf
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/domains/:id/ips/:ip': {
      $delete: {
        input: { param: { id: number; ip: string } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: DomainAuthenticationDomainSpf
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/domains/:id/validate': {
      $post:
        | {
            input: { param: { id: number } } & { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              id?: number | undefined
              valid?: boolean | undefined
              validation_results?:
                | {
                    dkim1?:
                      | { reason?: (string | null) | undefined; valid?: boolean | undefined }
                      | undefined
                    dkim2?:
                      | { reason?: (string | null) | undefined; valid?: boolean | undefined }
                      | undefined
                    mail_cname?:
                      | { reason?: (string | null) | undefined; valid?: boolean | undefined }
                      | undefined
                    spf?:
                      | { reason?: (string | null) | undefined; valid?: boolean | undefined }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors?: { message: string }[] | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/whitelabel/ips': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            ip?: string | undefined
          }
        } & { header: { 'on-behalf-of'?: string | undefined } }
        output: ReverseDns[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { domain: string; ip: string; subdomain?: string | undefined }
        }
        output: ReverseDns
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/whitelabel/ips/:id': {
      $delete: {
        input: { param: { id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: ReverseDns
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/ips/:id/validate': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              id: number
              valid: true | false
              validation_results: {
                a_record?: { reason: string | null; valid: true | false } | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/whitelabel/links': {
      $get: {
        input: { query: { limit?: number | undefined } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: LinkBranding_200Response[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'on-behalf-of'?: string | undefined } } & {
          json: {
            default?: true | false | undefined
            domain: string
            subdomain?: string | undefined
          }
        }
        output: LinkBranding_200Response
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/whitelabel/links/default': {
      $get: {
        input: { query: { domain?: string | undefined } } & {
          header: { 'on-behalf-of'?: string | undefined }
        }
        output: LinkBranding_200Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/links/subuser': {
      $delete: {
        input: { query: { username: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { query: { username: string } }
        output: LinkBranding_200Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/links/:id': {
      $delete: {
        input: { param: { id: number } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { id: number } } & { header: { 'on-behalf-of'?: string | undefined } }
        output: LinkBranding_200Response
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { header: { 'on-behalf-of'?: string | undefined } } & {
          json: { default?: true | false | undefined }
        }
        output: LinkBranding_200Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/whitelabel/links/:id/validate': {
      $post:
        | {
            input: { param: { id: number } } & { header: { 'on-behalf-of'?: string | undefined } }
            output: {
              id: number
              valid: true | false
              validation_results: {
                domain_cname: { reason: string | null; valid: true | false }
                owner_cname?: { reason: string | null; valid: true | false } | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { header: { 'on-behalf-of'?: string | undefined } }
            output: { errors: { message: string }[] }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/whitelabel/links/:link_id/subuser': {
      $post: {
        input: { param: { link_id: number } } & { json: { username?: string | undefined } }
        output: LinkBranding_200Response
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
