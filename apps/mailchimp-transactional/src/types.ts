type AllowlistsAddRequest = { key: string; email: string; comment?: string | undefined }
type AllowlistsAddResponse = { email: string; added: boolean }
type InvalidKeyError = { status: string; code: 401; name: 'Invalid_Key'; message: string }
type ValidationError = { status: string; code: number; name: 'ValidationError'; message: string }
type ServerError = { status: string; code: number; name: string; message: string }
type AllowlistsListRequest = { key: string; email?: string | undefined }
type AllowlistsListResponse = { email: string; detail: string; created_at: string }[]
type AllowlistsDeleteRequest = { key: string; email: string }
type AllowlistsDeleteResponse = { email: string; deleted: boolean }
type ExportsInfoRequest = { key: string; id: string }
type Export = {
  id: string
  created_at: string
  type: 'reject' | 'whitelist' | 'allowlist' | 'activity'
  finished_at?: (string | null) | undefined
  state: 'waiting' | 'working' | 'complete' | 'error'
  result_url?: (string | null) | undefined
}
type ExportNotFoundError = { status: string; code: number; name: string; message: string }
type ExportsListRequest = { key: string }
type ExportsListResponse = Export[]
type ExportsRejectsRequest = { key: string; notify_email?: string | undefined }
type ExportsWhitelistRequest = { key: string; notify_email?: string | undefined }
type ExportsAllowlistRequest = { key: string; notify_email?: string | undefined }
type ApiKey = { key: string }
type ExportsActivityRequest = {
  key: ApiKey
  notify_email?: string | undefined
  date_from?: string | undefined
  date_to?: string | undefined
  tags?: string[] | undefined
  senders?: string[] | undefined
  states?: ('sent' | 'rejected' | 'bounced' | 'soft-bounced' | 'spam' | 'unsub')[] | undefined
  api_keys?: string[] | undefined
}
type IPsListRequest = { key: string }
type IPsWarmupStatus = {
  warming_up: boolean
  start_at?: (string | null) | undefined
  end_at?: (string | null) | undefined
}
type IP = {
  ip: string
  created_at: string
  pool: string
  domain: string
  custom_dns: { enabled: boolean; valid: boolean; error?: (string | null) | undefined }
  warmup: IPsWarmupStatus
}
type IPsListResponse = IP[]
type IPsInfoRequest = { key: string; ip: string }
type IPsProvisionRequest = {
  key: string
  warmup?: boolean | undefined
  pool?: (string | null) | undefined
}
type IPsProvisionResponse = { requested_at: string }
type PaymentRequiredError = { status: string; code: 10; name: 'PaymentRequired'; message: string }
type IPPoolNotFoundError = { status: string; code: number; name: string; message: string }
type IPsStartWarmupRequest = { key: string; ip: string }
type IPNotFoundError = { status: string; code: number; name: string; message: string }
type IPsCancelWarmupRequest = { key: string; ip: string }
type IPsSetPoolRequest = {
  key: string
  ip: string
  pool: string
  create_pool?: boolean | undefined
}
type IPInvalidEmptyDefaultPoolError = {
  status: string
  code: number
  name: string
  message: string
}
type IPOrPoolNotFoundError = { status: string; code: number; name: string; message: string }
type IPsDeleteRequest = { key: string; ip: string }
type IPsDeleteResponse = { ip: string; deleted: boolean }
type IPsListPoolsRequest = { key: string }
type IPsPool = { name: string; created_at: string; ips: IP[] }
type IPsListPoolsResponse = IPsPool[]
type IPsPoolInfoRequest = { key: string; pool: string }
type IPsCreatePoolRequest = { key: string; pool: string }
type IPsDeletePoolRequest = { key: string; pool: string }
type IPsDeletePoolResponse = { pool: string; deleted: boolean }
type IPInvalidDeletePoolError = { status: string; code: number; name: string; message: string }
type IPsCheckCustomDnsRequest = { key: string; ip: string; domain: string }
type IPsCheckCustomDnsResponse = { valid: boolean; error?: (string | null) | undefined }
type IPsSetCustomDnsRequest = { key: string; ip: string; domain: string }
type IPInvalidCustomDnsError = { status: string; code: number; name: string; message: string }
type InboundDomainsRequest = { key: string }
type InboundDomain = { domain: string; created_at: string; valid_mx: boolean }
type InboundDomainsResponse = InboundDomain[]
type InboundAddDomainRequest = { key: string; domain: string }
type InboundCheckDomainRequest = { key: string; domain: string }
type InboundDomainNotFoundError = { status: string; code: number; name: string; message: string }
type InboundDeleteDomainRequest = { key: string; domain: string }
type InboundRoutesRequest = { key: string; domain: string }
type InboundRoute = { id: string; pattern: string; url: string }
type InboundRoutesResponse = InboundRoute[]
type InboundAddRouteRequest = { key: string; domain: string; pattern: string; url: string }
type InboundUpdateRouteRequest = {
  key: string
  id: string
  pattern?: (string | null) | undefined
  url?: (string | null) | undefined
}
type InboundRouteNotFoundError = { status: string; code: number; name: string; message: string }
type InboundDeleteRouteRequest = { key: string; id: string }
type InboundSendRawRequest = {
  key: string
  raw_message: string
  to?: (string[] | null) | undefined
  mail_from?: (string | null) | undefined
  helo?: (string | null) | undefined
  client_address?: (string | null) | undefined
}
type InboundSendRawResponse =
  | { email: string; pattern: string; url: string }[]
  | { [x: string]: unknown }
type MctemplatesInfoRequest = { key: string; mc_template_id: number }
type MctemplatesInfoResponse = {
  mc_template_id: number
  mc_template_name: string
  labels: string[]
  code: string
  subject: string
  from_email: string
  from_name: string
  text: string
  publish_code: string
  publish_text: string
  published_at: string
  created_at: string
  updated_at: string
  draft_updated_at: string
  is_broken_template: boolean
}
type MctemplateNotFoundError = { status: string; code: number; name: string; message: string }
type MctemplatesListRequest = { key: string; search_query?: (string | null) | undefined }
type MctemplatesMcTemplate = {
  mc_template_id: number
  mc_template_name: string
  labels: string[]
  code: string
  subject: string
  from_email: string
  from_name: string
  text: string
  publish_code: string
  publish_text: string
  published_at: string
  created_at: string
  updated_at: string
  draft_updated_at: string
  is_broken_template: boolean
}
type MctemplatesListResponse = MctemplatesMcTemplate[]
type MctemplatesRenderRequest = {
  key: string
  mc_template_id: number
  mc_template_version?: 'published' | 'draft' | undefined
  merge_vars?: ({ name?: string | undefined; content?: string | undefined }[] | null) | undefined
}
type MctemplatesRenderResponse = { html: string }
type MctemplateInvalidVersionError = { status: string; code: number; name: string; message: string }
type MctemplatesTimeSeriesRequest = { key: string; mc_template_id: number }
type MctemplatesTimeSeries = {
  sent: number
  hard_bounces: number
  soft_bounces: number
  rejects: number
  complaints: number
  unsubs: number
  opens: number
  unique_opens: number
  clicks: number
  unique_clicks: number
  time: string
}
type MctemplatesTimeSeriesResponse = MctemplatesTimeSeries[]
type MergeVar = { name?: string | undefined; content?: string | undefined }
type MessagesRequestComponent = {
  html?: (string | null) | undefined
  text?: (string | null) | undefined
  subject?: (string | null) | undefined
  from_email?: (string | null) | undefined
  from_name?: (string | null) | undefined
  to?:
    | {
        email?: string | undefined
        name?: (string | null) | undefined
        type?: 'to' | 'cc' | 'bcc' | undefined
      }[]
    | undefined
  headers?: { [x: string]: unknown } | undefined
  important?: (boolean | null) | undefined
  track_opens?: (boolean | null) | undefined
  track_clicks?: (boolean | null) | undefined
  auto_text?: (boolean | null) | undefined
  auto_html?: (boolean | null) | undefined
  inline_css?: (boolean | null) | undefined
  url_strip_qs?: (boolean | null) | undefined
  preserve_recipients?: (boolean | null) | undefined
  view_content_link?: (boolean | null) | undefined
  bcc_address?: (string | null) | undefined
  tracking_domain?: (string | null) | undefined
  signing_domain?: (string | null) | undefined
  return_path_domain?: (string | null) | undefined
  merge?: (boolean | null) | undefined
  merge_language?: 'mailchimp' | 'handlebars' | undefined
  global_merge_vars?: MergeVar[] | undefined
  merge_vars?: { rcpt?: string | undefined; vars?: MergeVar[] | undefined }[] | undefined
  tags?: string[] | undefined
  subaccount?: (string | null) | undefined
  google_analytics_domains?: string[] | undefined
  google_analytics_campaign?: string[] | string | undefined
  metadata?: { [x: string]: unknown } | undefined
  recipient_metadata?:
    | { rcpt?: string | undefined; values?: { [x: string]: unknown } | undefined }[]
    | undefined
  attachments?:
    | { type?: string | undefined; name?: string | undefined; content?: string | undefined }[]
    | undefined
  images?:
    | { type?: string | undefined; name?: string | undefined; content?: string | undefined }[]
    | undefined
}
type MessagesSendRequest = {
  key: string
  message: MessagesRequestComponent
  async?: (boolean | null) | undefined
  ip_pool?: string | undefined
  send_at?: string | undefined
}
type MessagesSendResult = {
  email: string
  status: 'sent' | 'queued' | 'scheduled' | 'rejected' | 'invalid'
  reject_reason?:
    | 'hard-bounce'
    | 'soft-bounce'
    | 'spam'
    | 'unsub'
    | 'custom'
    | 'invalid-sender'
    | 'invalid'
    | 'test-mode-limit'
    | 'unsigned'
    | 'rule'
    | undefined
  queued_reason?:
    | 'attachments'
    | 'multiple-recipients'
    | 'free-trial-sends-exhausted'
    | 'hourly-quota-exhausted'
    | 'monthly-limit-reached'
    | 'sending-paused'
    | 'sending-suspended'
    | 'account-suspended'
    | 'sending-backlogged'
    | undefined
  _id: string
}
type MessagesSendResponse = MessagesSendResult[]
type MessageSubaccountNotFoundError = {
  status: string
  code: number
  name: string
  message: string
}
type MessagesSendTemplateRequest = {
  key: string
  template_name: string
  template_content: { name?: string | undefined; content?: string | undefined }[]
  message: MessagesRequestComponent
  async?: (boolean | null) | undefined
  ip_pool?: string | undefined
  send_at?: string | undefined
}
type Error = { status: string; code: number; name: string; message: string }
type MessagesSendMcTemplateRequest = {
  key: string
  mc_template_id: number
  mc_template_version?: 'draft' | 'published' | undefined
  message: MessagesRequestComponent
  async?: (boolean | null) | undefined
  ip_pool?: string | undefined
  send_at?: string | undefined
}
type MessagesSearchRequest = {
  key: string
  query?: string | undefined
  date_from?: (string | null) | undefined
  date_to?: (string | null) | undefined
  tags?: (string[] | null) | undefined
  senders?: (string[] | null) | undefined
  api_keys?: (string[] | null) | undefined
  limit?: number | undefined
}
type MessagesOpenDetail = { ts: number; ip: string; location: string; ua: string }
type MessagesClickDetail = { ts: number; url: string; ip: string; location: string; ua: string }
type MessagesSmtpEvent = {
  ts: number
  type: 'sent' | 'bounced' | 'rejected' | 'delivered'
  diag: string
  source_ip: string
  destination_ip: string
  size: number
}
type MessagesEmailInfo = {
  ts: number
  _id: string
  tags: string[]
  sender: string
  template?: (string | null) | undefined
  mc_template?: (string | null) | undefined
  subject: string
  email: string
  opens: number
  clicks: number
  opens_detail: MessagesOpenDetail[]
  clicks_detail: MessagesClickDetail[]
  state: 'sent' | 'bounced' | 'rejected' | 'queued' | 'scheduled' | 'canceled'
  metadata?: { [x: string]: unknown } | undefined
  smtp_events: MessagesSmtpEvent[]
  diag: string | null
  subaccount: string | null
  resends: { [x: string]: unknown }[]
  reject: { reason?: string | undefined; last_event_at?: string | undefined } | null
  bounce_description?: string | undefined
}
type MessagesSmsEvent = {
  ts: number
  state: 'sent' | 'delivered' | 'failed' | 'canceled'
  sub_state?: (string | null) | undefined
}
type MessagesSmsInfo = {
  ts: number
  _id: string
  tags: string[]
  opens: number
  clicks: number
  opens_detail: MessagesOpenDetail[]
  clicks_detail: MessagesClickDetail[]
  state: 'sent' | 'bounced' | 'rejected' | 'queued' | 'scheduled' | 'canceled'
  metadata?: { [x: string]: unknown } | undefined
  channel: 'sms'
  to: string
  from: string
  text: string
  consent: 'onetime' | 'recurring' | 'recurring-no-confirm'
  sms_events: MessagesSmsEvent[]
  subaccount?: (string | null) | undefined
  reject?: ({ reason?: string | undefined; last_event_at?: string | undefined } | null) | undefined
}
type MessagesSearchResponse = (MessagesEmailInfo | MessagesSmsInfo)[]
type MessageServiceUnavailableError = {
  status: string
  code: number
  name: string
  message: string
}
type MessagesSearchTimeSeriesRequest = {
  key: string
  query?: string | undefined
  date_from?: (string | null) | undefined
  date_to?: (string | null) | undefined
  tags?: (string[] | null) | undefined
  senders?: (string[] | null) | undefined
}
type MessagesSearchTimeSeries = {
  time: string
  sent: number
  opens: number
  clicks: number
  hard_bounces: number
  soft_bounces: number
  rejects: number
  complaints: number
  unsubs: number
  unique_opens: number
  unique_clicks: number
}
type MessagesSearchTimeSeriesResponse = MessagesSearchTimeSeries[]
type MessagesInfoRequest = { key: string; id: string }
type MessagesInfoResponse = MessagesEmailInfo | MessagesSmsInfo
type MessageNotFoundError = { status: string; code: number; name: string; message: string }
type MessagesContentRequest = { key: string; id: string }
type MessagesEmailContent = {
  ts: number
  _id: string
  tags: string[]
  from_email: string
  from_name?: (string | null) | undefined
  subject: string
  to: { email: string; name?: string | undefined }
  headers: { [x: string]: string }
  text: string
  html: string
  attachments: { name: string; type: string; content: string }[]
}
type MessagesSmsContent = {
  ts: number
  _id: string
  tags: string[]
  channel: 'sms'
  to: string
  from: string
  text: string
  state: 'sent' | 'bounced' | 'rejected' | 'queued' | 'scheduled' | 'canceled'
}
type MessagesContentResponse = MessagesEmailContent | MessagesSmsContent
type MessagesParseRequest = { key: string; raw_message: string }
type MessagesParseResponse = {
  headers: { [x: string]: string }
  text: string
  text_flowed: boolean
  attachments: {
    name?: string | undefined
    type?: string | undefined
    content?: string | undefined
    binary?: boolean | undefined
  }[]
  from_email: string
  from_name: string
  html?: (string | null) | undefined
  to?: { email?: string | undefined; name?: (string | null) | undefined }[] | undefined
  subject?: (string | null) | undefined
}
type MessagesSendRawRequest = {
  key: string
  raw_message: string
  from_email?: (string | null) | undefined
  from_name?: (string | null) | undefined
  to?: string[] | undefined
  async?: (boolean | null) | undefined
  ip_pool?: string | undefined
  send_at?: string | undefined
  return_path_domain?: (string | null) | undefined
}
type MessagesListScheduledRequest = { key: string; to?: (string | null) | undefined }
type MessagesScheduled = {
  _id: string
  created_at: string
  send_at: string
  from_email: string
  to: string
  subject: string
}
type MessagesListScheduledResponse = MessagesScheduled[]
type MessagesCancelScheduledRequest = { key: string; id: string }
type MessagesRescheduleRequest = { key: string; id: string; send_at: string }
type MessagesSendSmsRequest = {
  key: string
  message: {
    sms: {
      text: string
      to: string[]
      from: string
      consent: 'onetime' | 'recurring' | 'recurring-no-confirm'
      track_clicks?: boolean | undefined
    }
    merge?: boolean | undefined
    merge_language?: string | undefined
    global_merge_vars?: MergeVar[] | undefined
    merge_vars?: { rcpt?: string | undefined; vars?: MergeVar[] | undefined }[] | undefined
  }
  async?: (boolean | null) | undefined
}
type MessagesSmsMessage = {
  to: string
  from: string
  status: 'sent' | 'queued' | 'scheduled' | 'rejected' | 'invalid'
  reject_reason?:
    | 'hard-bounce'
    | 'soft-bounce'
    | 'spam'
    | 'unsub'
    | 'custom'
    | 'invalid-sender'
    | 'invalid'
    | 'test-mode-limit'
    | 'unsigned'
    | 'rule'
    | undefined
  queue_reason?: 'async requested by user' | 'multiple recipients' | undefined
  _id: string
}
type MessagesSendSmsResponse = MessagesSmsMessage[]
type MessageSmsSubaccountNotFoundError = {
  status: string
  code: number
  name: string
  message: string
}
type MetadataListRequest = { key: string }
type MetadataResponseData = {
  name: string
  state: 'active' | 'delete' | 'index' | 'failed'
  view_template?: (string | null) | undefined
}
type MetadataListResponse = MetadataResponseData[]
type MetadataAddRequest = { key: string; name: string; view_template?: (string | null) | undefined }
type MetadataUpdateRequest = { key: string; name: string; view_template: string }
type MetadataNotFoundError = { status: string; code: number; name: string; message: string }
type MetadataDeleteRequest = { key: string; name: string }
type RejectsAddRequest = {
  key: string
  email: string
  comment?: string | undefined
  subaccount?: string | undefined
}
type RejectsAddResponse = { email: string; added: boolean }
type RejectSubaccountNotFoundError = { status: string; code: number; name: string; message: string }
type RejectsAddSmsRequest = {
  key: string
  phone: string
  comment?: string | undefined
  subaccount?: string | undefined
}
type RejectsSmsReject = {
  phone: string
  added?: boolean | undefined
  deleted?: boolean | undefined
  subaccount?: (string | null) | undefined
}
type RejectsListRequest = {
  key: string
  email?: string | undefined
  include_expired?: boolean | undefined
  subaccount?: string | undefined
}
type RejectsListResponse = {
  email: string
  reason: 'hard-bounce' | 'soft-bounce' | 'spam' | 'unsub' | 'custom'
  detail: string
  created_at: string
  last_event_at: string
  expires_at: string
  expired: boolean
  sender?:
    | ({
        address?: string | undefined
        created_at?: string | undefined
        sent?: number | undefined
        hard_bounces?: number | undefined
        soft_bounces?: number | undefined
        rejects?: number | undefined
        complaints?: number | undefined
        unsubs?: number | undefined
      } | null)
    | undefined
  subaccount?: (string | null) | undefined
}[]
type RequestLimitExceededError = {
  status: string
  code: 429
  name: 'RequestLimitExceeded'
  message: string
}
type RejectsListSmsRequest = {
  key: string
  phone?: string | undefined
  include_expired?: boolean | undefined
  subaccount?: string | undefined
}
type RejectsListSmsResponse = {
  phone: string
  created_at: string
  expires_at?: (string | null) | undefined
  expired: boolean
  subaccount?: (string | null) | undefined
}[]
type RejectsDeleteRequest = { key: string; email: string; subaccount?: string | undefined }
type RejectsDeleteResponse = { email: string; deleted: boolean; subaccount?: string | undefined }
type RejectEmailNotFoundError = { status: string; code: number; name: string; message: string }
type RejectsDeleteSmsRequest = { key: string; phone: string; subaccount?: string | undefined }
type RejectPhoneNotFoundError = { status: string; code: number; name: string; message: string }
type SendersListRequest = { key: string }
type Sender = {
  address?: string | undefined
  created_at?: string | undefined
  sent?: number | undefined
  hard_bounces?: number | undefined
  soft_bounces?: number | undefined
  rejects?: number | undefined
  complaints?: number | undefined
  unsubs?: number | undefined
  opens?: number | undefined
  clicks?: number | undefined
  unique_clicks?: number | undefined
  unique_opens?: number | undefined
}
type SendersListResponse = Sender[]
type SendersDomainsRequest = { key: string }
type VerificationDetail = {
  valid?: boolean | undefined
  valid_after?: string | undefined
  error?: string | undefined
}
type DmarcDetail = { valid?: boolean | undefined; error?: string | undefined }
type SendersSenderDomain = {
  domain?: string | undefined
  created_at?: string | undefined
  last_tested_at?: string | undefined
  spf?: VerificationDetail | undefined
  dkim?: VerificationDetail | undefined
  dkim2?: VerificationDetail | undefined
  dmarc?: DmarcDetail | undefined
  verified_at?: string | undefined
  valid_signing?: boolean | undefined
  verify_txt_key?: string | undefined
}
type SendersDomainsResponse = SendersSenderDomain[]
type SendersAddDomainRequest = { key: string; domain: string }
type SendersCheckDomainRequest = { key: string; domain: string }
type SendersVerifyDomainRequest = { key: string; domain: string; mailbox: string }
type SendersVerifyDomainResponse = {
  status: 'sent' | 'already_verified'
  domain: string
  email: string
}
type SendersInfoRequest = { key: string; address: string }
type StatsWindow = {
  sent?: number | undefined
  hard_bounces?: number | undefined
  soft_bounces?: number | undefined
  rejects?: number | undefined
  complaints?: number | undefined
  unsubs?: number | undefined
  opens?: number | undefined
  unique_opens?: number | undefined
  clicks?: number | undefined
  unique_clicks?: number | undefined
}
type SendersInfoResponse = {
  address?: string | undefined
  created_at?: string | undefined
  sent?: number | undefined
  hard_bounces?: number | undefined
  soft_bounces?: number | undefined
  rejects?: number | undefined
  complaints?: number | undefined
  unsubs?: number | undefined
  opens?: number | undefined
  clicks?: number | undefined
  unique_clicks?: number | undefined
  unique_opens?: number | undefined
  stats?:
    | {
        today?: StatsWindow | undefined
        last_7_days?: StatsWindow | undefined
        last_30_days?: StatsWindow | undefined
        last_60_days?: StatsWindow | undefined
        last_90_days?: StatsWindow | undefined
      }
    | undefined
}
type SenderNotFoundError = { status: string; code: number; name: string; message: string }
type SendersTimeSeriesRequest = { key: string; address: string }
type SendersHourStat = {
  time?: string | undefined
  sent?: number | undefined
  hard_bounces?: number | undefined
  soft_bounces?: number | undefined
  rejects?: number | undefined
  complaints?: number | undefined
  opens?: number | undefined
  unique_opens?: number | undefined
  clicks?: number | undefined
  unique_clicks?: number | undefined
}
type SendersTimeSeriesResponse = SendersHourStat[]
type SendersDeleteDomainRequest = { key: string; domain: string }
type SenderCannotDeleteVerifiedError = {
  status: string
  code: number
  name: string
  message: string
}
type SenderDomainNotFoundError = { status: string; code: number; name: string; message: string }
type SubaccountsListRequest = { key: string; q?: string | undefined }
type SubaccountsSubaccount = {
  id: string
  name?: string | undefined
  created_at: string
  first_sent_at?: (string | null) | undefined
  status: 'active' | 'paused'
  reputation: number
  sent_weekly: number
  sent_monthly: number
  sent_total: number
  custom_quota?: number | undefined
}
type SubaccountsListResponse = SubaccountsSubaccount[]
type SubaccountsAddRequest = {
  key: string
  id: string
  name?: (string | null) | undefined
  notes?: (string | null) | undefined
  custom_quota?: (number | null) | undefined
}
type SubaccountsInfoRequest = { key: string; id: string }
type SubaccountsInfoResponse = {
  id: string
  name?: string | undefined
  created_at: string
  first_sent_at?: (string | null) | undefined
  status: 'active' | 'paused'
  reputation: number
  sent_weekly: number
  sent_monthly: number
  sent_total: number
  custom_quota?: number | undefined
  sent_hourly: number
  hourly_quota: number
  notes: string
  last_30_days: StatsWindow
}
type SubaccountNotFoundError = { status: string; code: number; name: string; message: string }
type SubaccountsUpdateRequest = {
  key: string
  id: string
  name?: (string | null) | undefined
  notes?: (string | null) | undefined
  custom_quota?: (number | null) | undefined
}
type SubaccountsDeleteRequest = { key: string; id: string }
type SubaccountsPauseRequest = { key: string; id: string }
type SubaccountsResumeRequest = { key: string; id: string }
type TagsListRequest = { key: string }
type TagsTag = {
  user_id: number
  tag: string
  sent: number
  hard_bounces: number
  soft_bounces: number
  rejects: number
  complaints: number
  unsubs: number
  opens: number
  clicks: number
  content_reviews: number
  content_rejections: number
  reject_resets: number
  unique_opens: number
  unique_clicks: number
  reputation: number
  confidence: number
}
type TagsListResponse = TagsTag[]
type TagsDeleteRequest = { key: string; tag?: string | undefined }
type TagsDeleteResponse = {
  tag: string
  sent: number
  hard_bounces: number
  soft_bounces: number
  rejects: number
  complaints: number
  unsubs: number
  opens: number
  clicks: number
  unique_opens: number
  unique_clicks: number
  reputation: number
}
type TagInvalidNameError = { status: string; code: number; name: string; message: string }
type TagsInfoRequest = { key: string; tag?: string | undefined }
type TagsInfoResponse = {
  tag: string
  sent: number
  hard_bounces: number
  soft_bounces: number
  rejects: number
  complaints: number
  unsubs: number
  opens: number
  clicks: number
  unique_opens: number
  unique_clicks: number
  reputation: number
  stats: {
    today: StatsWindow
    last_7_days: StatsWindow
    last_30_days: StatsWindow
    last_60_days: StatsWindow
    last_90_days: StatsWindow
  }
}
type TagsTimeSeriesRequest = { key: string; tag?: string | undefined }
type TagsTagTimeSeries = {
  sent: number
  hard_bounces: number
  soft_bounces: number
  rejects: number
  complaints: number
  unsubs: number
  opens: number
  unique_opens: number
  clicks: number
  unique_clicks: number
  time: string
}
type TagsTimeSeriesResponse = TagsTagTimeSeries[]
type TagsAllTimeSeriesRequest = { key: string }
type TagsTimeSeriesWithTag = {
  sent: number
  hard_bounces: number
  soft_bounces: number
  rejects: number
  complaints: number
  unsubs: number
  opens: number
  unique_opens: number
  clicks: number
  unique_clicks: number
  time: string
  tag?: string | undefined
}
type TagsAllTimeSeriesResponse = TagsTimeSeriesWithTag[]
type TemplatesAddRequest = {
  key: string
  name: string
  from_email?: (string | null) | undefined
  from_name?: (string | null) | undefined
  subject?: (string | null) | undefined
  code?: (string | null) | undefined
  text?: (string | null) | undefined
  publish?: boolean | undefined
  labels?: string[] | undefined
}
type TemplatesTemplate = {
  slug: string
  name: string
  labels: string[]
  code: string | null
  subject: string | null
  from_email: string | null
  from_name: string | null
  text: string | null
  publish_name: string
  publish_code: string | null
  publish_subject: string | null
  publish_from_email: string | null
  publish_from_name: string | null
  publish_text: string | null
  published_at: string | null
  created_at: string
  updated_at: string
  draft_updated_at: string
  is_broken_template: boolean
}
type TemplateInvalidDataError = { status: string; code: number; name: string; message: string }
type TemplatesInfoRequest = { key: string; name: string }
type TemplateNotFoundError = { status: string; code: number; name: string; message: string }
type TemplatesUpdateRequest = {
  key: string
  name: string
  from_email?: (string | null) | undefined
  from_name?: (string | null) | undefined
  subject?: (string | null) | undefined
  code?: (string | null) | undefined
  text?: (string | null) | undefined
  publish?: boolean | undefined
  labels?: (string[] | null) | undefined
}
type TemplatesPublishRequest = { key: string; name: string }
type TemplatesDeleteRequest = { key: string; name: string }
type TemplatesListRequest = { key: string; label?: (string | null) | undefined }
type TemplatesListResponse = TemplatesTemplate[]
type TemplatesTimeSeriesRequest = { key: string; name: string }
type TemplatesTemplateHistory = {
  time: string
  sent: number
  hard_bounces: number
  soft_bounces: number
  rejects: number
  complaints: number
  opens: number
  unique_opens: number
  clicks: number
  unique_clicks: number
}
type TemplatesTimeSeriesResponse = TemplatesTemplateHistory[]
type TemplateContent = { name?: (string | null) | undefined; content?: (string | null) | undefined }
type TemplatesRenderRequest = {
  key: string
  template_name: string
  template_content: TemplateContent[]
  merge_vars?: (MergeVar[] | null) | undefined
}
type TemplatesRenderResponse = { html: string }
type UrlsTrackingDomainsRequest = { key: string }
type TrackingDomain = {
  domain: string
  created_at: string
  last_tested_at: string
  cname: { valid: boolean; valid_after: string | null; error: string | null }
  valid_tracking: boolean
}
type UrlsTrackingDomainsResponse = TrackingDomain[]
type UrlsAddTrackingDomainRequest = { key: string; domain: string }
type UrlInvalidDomainError = { status: string; code: number; name: string; message: string }
type UrlsCheckTrackingDomainRequest = { key: string; domain: string }
type UrlNotFoundError = { status: string; code: number; name: string; message: string }
type UrlsDeleteTrackingDomainRequest = { key: string; domain: string }
type UrlCannotDeleteVerifiedError = { status: string; code: number; name: string; message: string }
type UsersInfoRequest = { key: string }
type UsersInfoResponse = {
  username: string
  created_at: string
  public_id: string
  reputation: number
  hourly_quota: number
  backlog: number
  stats: {
    today: StatsWindow
    last_7_days: StatsWindow
    last_30_days: StatsWindow
    last_60_days: StatsWindow
    last_90_days: StatsWindow
    all_time: StatsWindow
  }
}
type UsersPingRequest = { key: string }
type UsersPingResponse = 'PONG!'
type UsersPing2Request = { key: string }
type UsersPing2Response = { PING: 'PONG!' }
type UsersSendersRequest = { key: string }
type UsersSendersResponse = Sender[]
type WebhooksListRequest = { key: string }
type Webhook = {
  id: number
  url: string
  auth_key?: (string | null) | undefined
  description?: (string | null) | undefined
  events: string[]
  created_at: string
  last_sent_at?: (string | null) | undefined
  batches_sent: number
  events_sent: number
  last_error?: (string | null) | undefined
}
type WebhooksListResponse = Webhook[]
type WebhooksAddRequest = {
  key: string
  url?: string | undefined
  description?: (string | null) | undefined
  events?: string[] | undefined
}
type WebhooksInfoRequest = { key: string; id?: number | undefined }
type WebhookNotFoundError = { status: string; code: number; name: string; message: string }
type WebhooksUpdateRequest = {
  key: string
  id?: number | undefined
  url?: string | undefined
  description?: (string | null) | undefined
  events?: string[] | undefined
}
type WebhooksDeleteRequest = { key: string; id?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/allowlists/add': {
      $post:
        | {
            input: { json: AllowlistsAddRequest }
            output: AllowlistsAddResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AllowlistsAddRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AllowlistsAddRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AllowlistsAddRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/allowlists/list': {
      $post:
        | {
            input: { json: AllowlistsListRequest }
            output: AllowlistsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AllowlistsListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AllowlistsListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/allowlists/delete': {
      $post:
        | {
            input: { json: AllowlistsDeleteRequest }
            output: AllowlistsDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AllowlistsDeleteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AllowlistsDeleteRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AllowlistsDeleteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/info': {
      $post:
        | { input: { json: ExportsInfoRequest }; output: Export; outputFormat: 'json'; status: 200 }
        | {
            input: { json: ExportsInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExportsInfoRequest }
            output: ExportNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ExportsInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/list': {
      $post:
        | {
            input: { json: ExportsListRequest }
            output: ExportsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportsListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExportsListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/rejects': {
      $post:
        | {
            input: { json: ExportsRejectsRequest }
            output: Export
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportsRejectsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExportsRejectsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/whitelist': {
      $post:
        | {
            input: { json: ExportsWhitelistRequest }
            output: Export
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportsWhitelistRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExportsWhitelistRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/allowlist': {
      $post:
        | {
            input: { json: ExportsAllowlistRequest }
            output: Export
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportsAllowlistRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExportsAllowlistRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/exports/activity': {
      $post:
        | {
            input: { json: ExportsActivityRequest }
            output: Export
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ExportsActivityRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ExportsActivityRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/list': {
      $post:
        | {
            input: { json: IPsListRequest }
            output: IPsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPsListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/info': {
      $post:
        | { input: { json: IPsInfoRequest }; output: IP; outputFormat: 'json'; status: 200 }
        | {
            input: { json: IPsInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/provision': {
      $post:
        | {
            input: { json: IPsProvisionRequest }
            output: IPsProvisionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPsProvisionRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsProvisionRequest }
            output: PaymentRequiredError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: IPsProvisionRequest }
            output: IPPoolNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IPsProvisionRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/start-warmup': {
      $post:
        | { input: { json: IPsStartWarmupRequest }; output: IP; outputFormat: 'json'; status: 200 }
        | {
            input: { json: IPsStartWarmupRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsStartWarmupRequest }
            output: IPNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IPsStartWarmupRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/cancel-warmup': {
      $post:
        | { input: { json: IPsCancelWarmupRequest }; output: IP; outputFormat: 'json'; status: 200 }
        | {
            input: { json: IPsCancelWarmupRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsCancelWarmupRequest }
            output: IPNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IPsCancelWarmupRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/set-pool': {
      $post:
        | { input: { json: IPsSetPoolRequest }; output: IP; outputFormat: 'json'; status: 200 }
        | {
            input: { json: IPsSetPoolRequest }
            output: IPInvalidEmptyDefaultPoolError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IPsSetPoolRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsSetPoolRequest }
            output: IPOrPoolNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IPsSetPoolRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/delete': {
      $post:
        | {
            input: { json: IPsDeleteRequest }
            output: IPsDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPsDeleteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsDeleteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/list-pools': {
      $post:
        | {
            input: { json: IPsListPoolsRequest }
            output: IPsListPoolsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPsListPoolsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsListPoolsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/pool-info': {
      $post:
        | {
            input: { json: IPsPoolInfoRequest }
            output: IPsPool
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPsPoolInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsPoolInfoRequest }
            output: IPPoolNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IPsPoolInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/create-pool': {
      $post:
        | {
            input: { json: IPsCreatePoolRequest }
            output: IPsPool
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPsCreatePoolRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsCreatePoolRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/delete-pool': {
      $post:
        | {
            input: { json: IPsDeletePoolRequest }
            output: IPsDeletePoolResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPsDeletePoolRequest }
            output: IPInvalidDeletePoolError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IPsDeletePoolRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsDeletePoolRequest }
            output: IPPoolNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IPsDeletePoolRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/check-custom-dns': {
      $post:
        | {
            input: { json: IPsCheckCustomDnsRequest }
            output: IPsCheckCustomDnsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPsCheckCustomDnsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsCheckCustomDnsRequest }
            output: IPNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IPsCheckCustomDnsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ips/set-custom-dns': {
      $post:
        | { input: { json: IPsSetCustomDnsRequest }; output: IP; outputFormat: 'json'; status: 200 }
        | {
            input: { json: IPsSetCustomDnsRequest }
            output: IPInvalidCustomDnsError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IPsSetCustomDnsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IPsSetCustomDnsRequest }
            output: IPNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: IPsSetCustomDnsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/domains': {
      $post:
        | {
            input: { json: InboundDomainsRequest }
            output: InboundDomainsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundDomainsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundDomainsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/add-domain': {
      $post:
        | {
            input: { json: InboundAddDomainRequest }
            output: InboundDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundAddDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundAddDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/check-domain': {
      $post:
        | {
            input: { json: InboundCheckDomainRequest }
            output: InboundDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundCheckDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundCheckDomainRequest }
            output: InboundDomainNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InboundCheckDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/delete-domain': {
      $post:
        | {
            input: { json: InboundDeleteDomainRequest }
            output: InboundDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundDeleteDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundDeleteDomainRequest }
            output: InboundDomainNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InboundDeleteDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/routes': {
      $post:
        | {
            input: { json: InboundRoutesRequest }
            output: InboundRoutesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundRoutesRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundRoutesRequest }
            output: InboundDomainNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InboundRoutesRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/add-route': {
      $post:
        | {
            input: { json: InboundAddRouteRequest }
            output: InboundRoute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundAddRouteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundAddRouteRequest }
            output: InboundDomainNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InboundAddRouteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/update-route': {
      $post:
        | {
            input: { json: InboundUpdateRouteRequest }
            output: InboundRoute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundUpdateRouteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundUpdateRouteRequest }
            output: InboundRouteNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InboundUpdateRouteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/delete-route': {
      $post:
        | {
            input: { json: InboundDeleteRouteRequest }
            output: InboundRoute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundDeleteRouteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundDeleteRouteRequest }
            output: InboundRouteNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InboundDeleteRouteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/inbound/send-raw': {
      $post:
        | {
            input: { json: InboundSendRawRequest }
            output: InboundSendRawResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InboundSendRawRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InboundSendRawRequest }
            output: InboundDomainNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InboundSendRawRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mctemplates/info': {
      $post:
        | {
            input: { json: MctemplatesInfoRequest }
            output: MctemplatesInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MctemplatesInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MctemplatesInfoRequest }
            output: MctemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MctemplatesInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mctemplates/list': {
      $post:
        | {
            input: { json: MctemplatesListRequest }
            output: MctemplatesListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MctemplatesListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MctemplatesListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mctemplates/render': {
      $post:
        | {
            input: { json: MctemplatesRenderRequest }
            output: MctemplatesRenderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MctemplatesRenderRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MctemplatesRenderRequest }
            output: MctemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MctemplatesRenderRequest }
            output: MctemplateInvalidVersionError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: MctemplatesRenderRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mctemplates/time-series': {
      $post:
        | {
            input: { json: MctemplatesTimeSeriesRequest }
            output: MctemplatesTimeSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MctemplatesTimeSeriesRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MctemplatesTimeSeriesRequest }
            output: MctemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MctemplatesTimeSeriesRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/send': {
      $post:
        | {
            input: { json: MessagesSendRequest }
            output: MessagesSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesSendRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesSendRequest }
            output: PaymentRequiredError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: MessagesSendRequest }
            output: MessageSubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesSendRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/send-template': {
      $post:
        | {
            input: { json: MessagesSendTemplateRequest }
            output: MessagesSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesSendTemplateRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesSendTemplateRequest }
            output: PaymentRequiredError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: MessagesSendTemplateRequest }
            output: Error | Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesSendTemplateRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/send-mc-template': {
      $post:
        | {
            input: { json: MessagesSendMcTemplateRequest }
            output: MessagesSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesSendMcTemplateRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesSendMcTemplateRequest }
            output: PaymentRequiredError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: MessagesSendMcTemplateRequest }
            output: Error | Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesSendMcTemplateRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/search': {
      $post:
        | {
            input: { json: MessagesSearchRequest }
            output: MessagesSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesSearchRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesSearchRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: MessagesSearchRequest }
            output: MessageServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/messages/search-time-series': {
      $post:
        | {
            input: { json: MessagesSearchTimeSeriesRequest }
            output: MessagesSearchTimeSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesSearchTimeSeriesRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesSearchTimeSeriesRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: MessagesSearchTimeSeriesRequest }
            output: MessageServiceUnavailableError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/messages/info': {
      $post:
        | {
            input: { json: MessagesInfoRequest }
            output: MessagesInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesInfoRequest }
            output: MessageNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/content': {
      $post:
        | {
            input: { json: MessagesContentRequest }
            output: MessagesContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesContentRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesContentRequest }
            output: MessageNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesContentRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/parse': {
      $post:
        | {
            input: { json: MessagesParseRequest }
            output: MessagesParseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesParseRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesParseRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: MessagesParseRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/send-raw': {
      $post:
        | {
            input: { json: MessagesSendRawRequest }
            output: MessagesSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesSendRawRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesSendRawRequest }
            output: PaymentRequiredError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: MessagesSendRawRequest }
            output: MessageSubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesSendRawRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/list-scheduled': {
      $post:
        | {
            input: { json: MessagesListScheduledRequest }
            output: MessagesListScheduledResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesListScheduledRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesListScheduledRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/cancel-scheduled': {
      $post:
        | {
            input: { json: MessagesCancelScheduledRequest }
            output: MessagesScheduled
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesCancelScheduledRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesCancelScheduledRequest }
            output: MessageNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesCancelScheduledRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/reschedule': {
      $post:
        | {
            input: { json: MessagesRescheduleRequest }
            output: MessagesScheduled
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesRescheduleRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesRescheduleRequest }
            output: MessageNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesRescheduleRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/messages/send-sms': {
      $post:
        | {
            input: { json: MessagesSendSmsRequest }
            output: MessagesSendSmsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessagesSendSmsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MessagesSendSmsRequest }
            output: MessageSmsSubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MessagesSendSmsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metadata/list': {
      $post:
        | {
            input: { json: MetadataListRequest }
            output: MetadataListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MetadataListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MetadataListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metadata/add': {
      $post:
        | {
            input: { json: MetadataAddRequest }
            output: MetadataResponseData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MetadataAddRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MetadataAddRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: MetadataAddRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metadata/update': {
      $post:
        | {
            input: { json: MetadataUpdateRequest }
            output: MetadataResponseData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MetadataUpdateRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MetadataUpdateRequest }
            output: MetadataNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MetadataUpdateRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metadata/delete': {
      $post:
        | {
            input: { json: MetadataDeleteRequest }
            output: MetadataResponseData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MetadataDeleteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MetadataDeleteRequest }
            output: MetadataNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MetadataDeleteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rejects/add': {
      $post:
        | {
            input: { json: RejectsAddRequest }
            output: RejectsAddResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RejectsAddRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RejectsAddRequest }
            output: RejectSubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RejectsAddRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RejectsAddRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rejects/add-sms': {
      $post:
        | {
            input: { json: RejectsAddSmsRequest }
            output: RejectsSmsReject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RejectsAddSmsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RejectsAddSmsRequest }
            output: RejectSubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RejectsAddSmsRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RejectsAddSmsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rejects/list': {
      $post:
        | {
            input: { json: RejectsListRequest }
            output: RejectsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RejectsListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RejectsListRequest }
            output: RejectSubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RejectsListRequest }
            output: RequestLimitExceededError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: RejectsListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rejects/list-sms': {
      $post:
        | {
            input: { json: RejectsListSmsRequest }
            output: RejectsListSmsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RejectsListSmsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RejectsListSmsRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RejectsListSmsRequest }
            output: RequestLimitExceededError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: RejectsListSmsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rejects/delete': {
      $post:
        | {
            input: { json: RejectsDeleteRequest }
            output: RejectsDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RejectsDeleteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RejectsDeleteRequest }
            output: RejectEmailNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RejectsDeleteRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RejectsDeleteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rejects/delete-sms': {
      $post:
        | {
            input: { json: RejectsDeleteSmsRequest }
            output: RejectsSmsReject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RejectsDeleteSmsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RejectsDeleteSmsRequest }
            output: RejectPhoneNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RejectsDeleteSmsRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RejectsDeleteSmsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/senders/list': {
      $post:
        | {
            input: { json: SendersListRequest }
            output: SendersListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SendersListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SendersListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/senders/domains': {
      $post:
        | {
            input: { json: SendersDomainsRequest }
            output: SendersDomainsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SendersDomainsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SendersDomainsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/senders/add-domain': {
      $post:
        | {
            input: { json: SendersAddDomainRequest }
            output: SendersSenderDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SendersAddDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SendersAddDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/senders/check-domain': {
      $post:
        | {
            input: { json: SendersCheckDomainRequest }
            output: SendersSenderDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SendersCheckDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SendersCheckDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/senders/verify-domain': {
      $post:
        | {
            input: { json: SendersVerifyDomainRequest }
            output: SendersVerifyDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SendersVerifyDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SendersVerifyDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/senders/info': {
      $post:
        | {
            input: { json: SendersInfoRequest }
            output: SendersInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SendersInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SendersInfoRequest }
            output: SenderNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SendersInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/senders/time-series': {
      $post:
        | {
            input: { json: SendersTimeSeriesRequest }
            output: SendersTimeSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SendersTimeSeriesRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SendersTimeSeriesRequest }
            output: SenderNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SendersTimeSeriesRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/senders/delete-domain': {
      $post:
        | {
            input: { json: SendersDeleteDomainRequest }
            output: SendersSenderDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SendersDeleteDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SendersDeleteDomainRequest }
            output: SenderCannotDeleteVerifiedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SendersDeleteDomainRequest }
            output: SenderDomainNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SendersDeleteDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subaccounts/list': {
      $post:
        | {
            input: { json: SubaccountsListRequest }
            output: SubaccountsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountsListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubaccountsListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subaccounts/add': {
      $post:
        | {
            input: { json: SubaccountsAddRequest }
            output: SubaccountsSubaccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountsAddRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubaccountsAddRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SubaccountsAddRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subaccounts/info': {
      $post:
        | {
            input: { json: SubaccountsInfoRequest }
            output: SubaccountsInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountsInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubaccountsInfoRequest }
            output: SubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SubaccountsInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subaccounts/update': {
      $post:
        | {
            input: { json: SubaccountsUpdateRequest }
            output: SubaccountsSubaccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountsUpdateRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubaccountsUpdateRequest }
            output: SubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SubaccountsUpdateRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subaccounts/delete': {
      $post:
        | {
            input: { json: SubaccountsDeleteRequest }
            output: SubaccountsSubaccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountsDeleteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubaccountsDeleteRequest }
            output: SubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SubaccountsDeleteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subaccounts/pause': {
      $post:
        | {
            input: { json: SubaccountsPauseRequest }
            output: SubaccountsSubaccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountsPauseRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubaccountsPauseRequest }
            output: SubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SubaccountsPauseRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/subaccounts/resume': {
      $post:
        | {
            input: { json: SubaccountsResumeRequest }
            output: SubaccountsSubaccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountsResumeRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubaccountsResumeRequest }
            output: SubaccountNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SubaccountsResumeRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags/list': {
      $post:
        | {
            input: { json: TagsListRequest }
            output: TagsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TagsListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagsListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags/delete': {
      $post:
        | {
            input: { json: TagsDeleteRequest }
            output: TagsDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TagsDeleteRequest }
            output: TagInvalidNameError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TagsDeleteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagsDeleteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags/info': {
      $post:
        | {
            input: { json: TagsInfoRequest }
            output: TagsInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TagsInfoRequest }
            output: TagInvalidNameError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TagsInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagsInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags/time-series': {
      $post:
        | {
            input: { json: TagsTimeSeriesRequest }
            output: TagsTimeSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TagsTimeSeriesRequest }
            output: TagInvalidNameError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TagsTimeSeriesRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagsTimeSeriesRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tags/all-time-series': {
      $post:
        | {
            input: { json: TagsAllTimeSeriesRequest }
            output: TagsAllTimeSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TagsAllTimeSeriesRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TagsAllTimeSeriesRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/add': {
      $post:
        | {
            input: { json: TemplatesAddRequest }
            output: TemplatesTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplatesAddRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplatesAddRequest }
            output: TemplateInvalidDataError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TemplatesAddRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/info': {
      $post:
        | {
            input: { json: TemplatesInfoRequest }
            output: TemplatesTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplatesInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplatesInfoRequest }
            output: TemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TemplatesInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/update': {
      $post:
        | {
            input: { json: TemplatesUpdateRequest }
            output: TemplatesTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplatesUpdateRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplatesUpdateRequest }
            output: TemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TemplatesUpdateRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/publish': {
      $post:
        | {
            input: { json: TemplatesPublishRequest }
            output: TemplatesTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplatesPublishRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplatesPublishRequest }
            output: TemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TemplatesPublishRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/delete': {
      $post:
        | {
            input: { json: TemplatesDeleteRequest }
            output: TemplatesTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplatesDeleteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplatesDeleteRequest }
            output: TemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TemplatesDeleteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/list': {
      $post:
        | {
            input: { json: TemplatesListRequest }
            output: TemplatesListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplatesListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplatesListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/time-series': {
      $post:
        | {
            input: { json: TemplatesTimeSeriesRequest }
            output: TemplatesTimeSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplatesTimeSeriesRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplatesTimeSeriesRequest }
            output: TemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TemplatesTimeSeriesRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/render': {
      $post:
        | {
            input: { json: TemplatesRenderRequest }
            output: TemplatesRenderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplatesRenderRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplatesRenderRequest }
            output: TemplateNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TemplatesRenderRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/urls/tracking-domains': {
      $post:
        | {
            input: { json: UrlsTrackingDomainsRequest }
            output: UrlsTrackingDomainsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UrlsTrackingDomainsRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UrlsTrackingDomainsRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/urls/add-tracking-domain': {
      $post:
        | {
            input: { json: UrlsAddTrackingDomainRequest }
            output: TrackingDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UrlsAddTrackingDomainRequest }
            output: UrlInvalidDomainError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UrlsAddTrackingDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UrlsAddTrackingDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/urls/check-tracking-domain': {
      $post:
        | {
            input: { json: UrlsCheckTrackingDomainRequest }
            output: TrackingDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UrlsCheckTrackingDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UrlsCheckTrackingDomainRequest }
            output: UrlNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UrlsCheckTrackingDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/urls/delete-tracking-domain': {
      $post:
        | {
            input: { json: UrlsDeleteTrackingDomainRequest }
            output: TrackingDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UrlsDeleteTrackingDomainRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UrlsDeleteTrackingDomainRequest }
            output: UrlCannotDeleteVerifiedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UrlsDeleteTrackingDomainRequest }
            output: UrlNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UrlsDeleteTrackingDomainRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/info': {
      $post:
        | {
            input: { json: UsersInfoRequest }
            output: UsersInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UsersInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UsersInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/ping': {
      $post:
        | {
            input: { json: UsersPingRequest }
            output: UsersPingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UsersPingRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UsersPingRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/ping2': {
      $post:
        | {
            input: { json: UsersPing2Request }
            output: UsersPing2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UsersPing2Request }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UsersPing2Request }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/senders': {
      $post:
        | {
            input: { json: UsersSendersRequest }
            output: UsersSendersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UsersSendersRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UsersSendersRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/list': {
      $post:
        | {
            input: { json: WebhooksListRequest }
            output: WebhooksListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhooksListRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebhooksListRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/add': {
      $post:
        | {
            input: { json: WebhooksAddRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhooksAddRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebhooksAddRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/info': {
      $post:
        | {
            input: { json: WebhooksInfoRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhooksInfoRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebhooksInfoRequest }
            output: WebhookNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WebhooksInfoRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/update': {
      $post:
        | {
            input: { json: WebhooksUpdateRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhooksUpdateRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebhooksUpdateRequest }
            output: WebhookNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WebhooksUpdateRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhooks/delete': {
      $post:
        | {
            input: { json: WebhooksDeleteRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhooksDeleteRequest }
            output: InvalidKeyError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebhooksDeleteRequest }
            output: WebhookNotFoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WebhooksDeleteRequest }
            output: ServerError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
