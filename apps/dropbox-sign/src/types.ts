type AccountApiKeySummaryResponse = {
  api_key_id: string
  account_id: string
  name: string | null
  is_primary: boolean
  last_used_at: number | null
  created_at: number
  updated_at: number
}
type WarningResponse = { warning_msg: string; warning_name: string }
type AccountApiKeyListResponse = {
  api_keys: AccountApiKeySummaryResponse[]
  warnings?: WarningResponse[] | undefined
}
type ErrorResponseError = { error_msg: string; error_path?: string | undefined; error_name: string }
type ErrorResponse = { error: ErrorResponseError }
type AccountApiKeyCreateRequest = { name: string }
type AccountApiKeyResponse = {
  api_key_id: string
  account_id: string
  name: string
  secret: string
  is_primary: boolean
  last_used_at?: (number | null) | undefined
  created_at: number
  updated_at: number
}
type AccountApiKeyCreateResponse = {
  api_key: AccountApiKeyResponse
  warnings?: WarningResponse[] | undefined
}
type AccountApiKeyGetResponse = {
  api_key: AccountApiKeySummaryResponse
  warnings?: WarningResponse[] | undefined
}
type AccountApiKeyUpdateRequest = {
  name?: (string | null) | undefined
  is_primary?: (boolean | null) | undefined
}
type AccountCreateRequest = {
  client_id?: string | undefined
  client_secret?: string | undefined
  email_address: string
  locale?: string | undefined
}
type AccountResponseQuotas = {
  api_signature_requests_left?: (number | null) | undefined
  documents_left?: (number | null) | undefined
  templates_total?: (number | null) | undefined
  templates_left?: (number | null) | undefined
  sms_verifications_left?: (number | null) | undefined
  num_fax_pages_left?: (number | null) | undefined
}
type AccountResponseUsage = { fax_pages_sent?: (number | null) | undefined }
type AccountResponseSettings = {
  signer_access_codes?: boolean | undefined
  sms_delivery?: boolean | undefined
  sms_authentication?: boolean | undefined
}
type AccountResponse = {
  account_id?: string | undefined
  email_address?: string | undefined
  is_locked?: boolean | undefined
  is_paid_hs?: boolean | undefined
  is_paid_hf?: boolean | undefined
  quotas?: AccountResponseQuotas | undefined
  callback_url?: (string | null) | undefined
  role_code?: (string | null) | undefined
  team_id?: (string | null) | undefined
  locale?: (string | null) | undefined
  usage?: AccountResponseUsage | undefined
  settings?: AccountResponseSettings | undefined
}
type OAuthTokenResponse = {
  access_token?: string | undefined
  token_type?: string | undefined
  refresh_token?: string | undefined
  expires_in?: number | undefined
  state?: (string | null) | undefined
}
type AccountCreateResponse = {
  account: AccountResponse
  oauth_data?: OAuthTokenResponse | undefined
  warnings?: WarningResponse[] | undefined
}
type AccountGetResponse = { account: AccountResponse; warnings?: WarningResponse[] | undefined }
type AccountUpdateRequest = {
  account_id?: (string | null) | undefined
  callback_url?: string | undefined
  locale?: string | undefined
}
type TeamSettingLock = 'organization_admins' | 'team_admins' | 'members'
type SettingLockResponse = { mode: TeamSettingLock; source: 'team' | 'parent_team' | 'default' }
type AccountSettingsResponseSettings = {
  company: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  custom_signing_redirect_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  custom_signing_redirect_url: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  custom_tagline: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  date_format: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  is_signature_reminders_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  request_email_from: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  request_email_signature: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  required_signature_types: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_enable_tamper_proof: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_include_distinct_pdfs: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_offer_signer_access_code: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_offer_signer_sms_authentication: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_remove_document_id: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  is_notify_on_sign_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  is_notify_on_view_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_autocomplete: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_include_requested_pdfs: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_include_requested_pdfs_for_others: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_include_sent_doc_pdfs: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_include_sent_doc_pdfs_for_others: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_send_daily_summary: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_send_embedded_signature_conf_emails: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_send_ordered_sr_email: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_send_outbound_conf_emails: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  template_link_signature_emails_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
}
type AccountSettingsResponse = {
  account_id: string
  settings: AccountSettingsResponseSettings
  warnings?: WarningResponse[] | undefined
}
type RequiredSignatureType = 'draw' | 'phone' | 'type' | 'upload'
type AccountSettingsUpdateRequest = {
  set?:
    | {
        company?: string | undefined
        custom_signing_redirect_enabled?: boolean | undefined
        custom_signing_redirect_url?: string | undefined
        custom_tagline?: string | undefined
        date_format?: {} | undefined
        is_signature_reminders_enabled?: boolean | undefined
        request_email_from?: string | undefined
        request_email_signature?: string | undefined
        required_signature_types?: RequiredSignatureType[] | undefined
        should_enable_tamper_proof?: boolean | undefined
        should_include_distinct_pdfs?: boolean | undefined
        should_offer_signer_access_code?: boolean | undefined
        should_offer_signer_sms_authentication?: boolean | undefined
        should_remove_document_id?: boolean | undefined
        is_notify_on_sign_enabled?: boolean | undefined
        is_notify_on_view_enabled?: boolean | undefined
        should_autocomplete?: boolean | undefined
        should_include_requested_pdfs?: boolean | undefined
        should_include_requested_pdfs_for_others?: boolean | undefined
        should_include_sent_doc_pdfs?: boolean | undefined
        should_include_sent_doc_pdfs_for_others?: boolean | undefined
        should_send_daily_summary?: boolean | undefined
        should_send_embedded_signature_conf_emails?: boolean | undefined
        should_send_ordered_sr_email?: boolean | undefined
        should_send_outbound_conf_emails?: boolean | undefined
        template_link_signature_emails_enabled?: boolean | undefined
      }
    | undefined
  unset?:
    | (
        | 'company'
        | 'custom_signing_redirect_enabled'
        | 'custom_signing_redirect_url'
        | 'custom_tagline'
        | 'date_format'
        | 'is_signature_reminders_enabled'
        | 'request_email_from'
        | 'request_email_signature'
        | 'required_signature_types'
        | 'should_enable_tamper_proof'
        | 'should_include_distinct_pdfs'
        | 'should_offer_signer_access_code'
        | 'should_offer_signer_sms_authentication'
        | 'should_remove_document_id'
        | 'is_notify_on_sign_enabled'
        | 'is_notify_on_view_enabled'
        | 'should_autocomplete'
        | 'should_include_requested_pdfs'
        | 'should_include_requested_pdfs_for_others'
        | 'should_include_sent_doc_pdfs'
        | 'should_include_sent_doc_pdfs_for_others'
        | 'should_send_daily_summary'
        | 'should_send_embedded_signature_conf_emails'
        | 'should_send_ordered_sr_email'
        | 'should_send_outbound_conf_emails'
        | 'template_link_signature_emails_enabled'
      )[]
    | undefined
}
type AccountVerifyRequest = { email_address: string }
type AccountVerifyResponseAccount = { email_address?: string | undefined }
type AccountVerifyResponse = {
  account?: AccountVerifyResponseAccount | undefined
  warnings?: WarningResponse[] | undefined
}
type SubOAuth = {
  callback_url?: string | undefined
  scopes?:
    | (
        | 'request_signature'
        | 'basic_account_info'
        | 'account_access'
        | 'signature_request_access'
        | 'template_access'
        | 'team_access'
        | 'api_app_access'
        | ''
      )[]
    | undefined
}
type SubOptions = { can_insert_everywhere?: boolean | undefined }
type SubWhiteLabelingOptions = {
  header_background_color?: string | undefined
  legal_version?: 'terms1' | 'terms2' | undefined
  link_color?: string | undefined
  page_background_color?: string | undefined
  primary_button_color?: string | undefined
  primary_button_color_hover?: string | undefined
  primary_button_text_color?: string | undefined
  primary_button_text_color_hover?: string | undefined
  secondary_button_color?: string | undefined
  secondary_button_color_hover?: string | undefined
  secondary_button_text_color?: string | undefined
  secondary_button_text_color_hover?: string | undefined
  text_color1?: string | undefined
  text_color2?: string | undefined
  reset_to_default?: boolean | undefined
}
type ApiAppCreateRequest = {
  callback_url?: string | undefined
  custom_logo_file?: File | undefined
  domains: string[]
  name: string
  oauth?: SubOAuth | undefined
  options?: SubOptions | undefined
  white_labeling_options?: SubWhiteLabelingOptions | undefined
}
type ApiAppResponseOAuth = {
  callback_url?: string | undefined
  secret?: (string | null) | undefined
  scopes?: string[] | undefined
  charges_users?: boolean | undefined
} | null
type ApiAppResponseOptions = { can_insert_everywhere?: boolean | undefined } | null
type ApiAppResponseOwnerAccount = {
  account_id?: string | undefined
  email_address?: string | undefined
}
type ApiAppResponseWhiteLabelingOptions = {
  header_background_color?: string | undefined
  legal_version?: string | undefined
  link_color?: string | undefined
  page_background_color?: string | undefined
  primary_button_color?: string | undefined
  primary_button_color_hover?: string | undefined
  primary_button_text_color?: string | undefined
  primary_button_text_color_hover?: string | undefined
  secondary_button_color?: string | undefined
  secondary_button_color_hover?: string | undefined
  secondary_button_text_color?: string | undefined
  secondary_button_text_color_hover?: string | undefined
  text_color1?: string | undefined
  text_color2?: string | undefined
} | null
type ApiAppResponse = {
  callback_url?: (string | null) | undefined
  client_id?: string | undefined
  created_at?: number | undefined
  domains?: string[] | undefined
  name?: string | undefined
  is_approved?: boolean | undefined
  oauth?: ApiAppResponseOAuth | undefined
  options?: ApiAppResponseOptions | undefined
  owner_account?: ApiAppResponseOwnerAccount | undefined
  white_labeling_options?: ApiAppResponseWhiteLabelingOptions | undefined
}
type ApiAppGetResponse = { api_app: ApiAppResponse; warnings?: WarningResponse[] | undefined }
type ApiAppUpdateRequest = {
  callback_url?: string | undefined
  custom_logo_file?: File | undefined
  domains?: string[] | undefined
  name?: string | undefined
  oauth?: SubOAuth | undefined
  options?: SubOptions | undefined
  white_labeling_options?: SubWhiteLabelingOptions | undefined
}
type ListInfoResponse = {
  num_pages?: number | undefined
  num_results?: (number | null) | undefined
  page?: number | undefined
  page_size?: number | undefined
}
type ApiAppListResponse = {
  api_apps: ApiAppResponse[]
  list_info: ListInfoResponse
  warnings?: WarningResponse[] | undefined
}
type BulkSendJobResponse = {
  bulk_send_job_id?: (string | null) | undefined
  total?: number | undefined
  is_creator?: boolean | undefined
  created_at?: number | undefined
}
type SignatureRequestResponseCustomFieldBase = {
  type: string
  name: string
  required?: boolean | undefined
  api_id?: string | undefined
  editor?: (string | null) | undefined
}
type SignatureRequestResponseAttachment = {
  id: string
  signer: string
  name: string
  required: boolean
  instructions?: (string | null) | undefined
  uploaded_at?: (number | null) | undefined
}
type SignatureRequestResponseDataBase = {
  api_id?: string | undefined
  signature_id?: string | undefined
  name?: string | undefined
  required?: boolean | undefined
  type?: string | undefined
}
type SignatureRequestResponseSignatures = {
  signature_id?: string | undefined
  signer_group_guid?: (string | null) | undefined
  signer_email_address?: string | undefined
  signer_name?: (string | null) | undefined
  signer_role?: (string | null) | undefined
  order?: (number | null) | undefined
  status_code?: string | undefined
  decline_reason?: (string | null) | undefined
  signed_at?: (number | null) | undefined
  last_viewed_at?: (number | null) | undefined
  last_reminded_at?: (number | null) | undefined
  has_pin?: boolean | undefined
  has_sms_auth?: (boolean | null) | undefined
  has_sms_delivery?: (boolean | null) | undefined
  sms_phone_number?: (string | null) | undefined
  reassigned_by?: (string | null) | undefined
  reassignment_reason?: (string | null) | undefined
  reassigned_from?: (string | null) | undefined
  error?: (string | null) | undefined
}
type BulkSendJobGetResponseSignatureRequests = {
  test_mode?: boolean | undefined
  signature_request_id?: string | undefined
  requester_email_address?: (string | null) | undefined
  title?: string | undefined
  original_title?: string | undefined
  subject?: (string | null) | undefined
  message?: (string | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  created_at?: number | undefined
  expires_at?: (number | null) | undefined
  is_complete?: boolean | undefined
  is_declined?: boolean | undefined
  has_error?: boolean | undefined
  files_url?: string | undefined
  signing_url?: (string | null) | undefined
  details_url?: string | undefined
  cc_email_addresses?: string[] | undefined
  signing_redirect_url?: (string | null) | undefined
  final_copy_uri?: (string | null) | undefined
  template_ids?: (string[] | null) | undefined
  custom_fields?: (SignatureRequestResponseCustomFieldBase[] | null) | undefined
  attachments?: (SignatureRequestResponseAttachment[] | null) | undefined
  response_data?: (SignatureRequestResponseDataBase[] | null) | undefined
  signatures?: SignatureRequestResponseSignatures[] | undefined
  bulk_send_job_id?: string | undefined
}
type BulkSendJobGetResponse = {
  bulk_send_job: BulkSendJobResponse
  list_info: ListInfoResponse
  signature_requests: BulkSendJobGetResponseSignatureRequests[]
  warnings?: WarningResponse[] | undefined
}
type BulkSendJobListResponse = {
  bulk_send_jobs: BulkSendJobResponse[]
  list_info: ListInfoResponse
  warnings?: WarningResponse[] | undefined
}
type DocumentFieldDetectionRequest = {
  file?: File | undefined
  file_url?: string | undefined
  detection_mode: string | string
  page_range?: string | undefined
}
type SubFormFieldsPerDocumentBase = {
  document_index: number
  api_id: string
  height: number
  name?: string | undefined
  page?: (number | null) | undefined
  required: boolean
  signer: string
  type: string
  width: number
  x: number
  y: number
}
type SubFormFieldGroup = { group_id: string; group_label: string; requirement: string }
type DocumentFieldDetectionResponseDetectionResult = {
  document_hash: string
  detection_mode: string | string
  page_count: number
  pages_analyzed: string
  detected_at: bigint
  form_fields_per_document: SubFormFieldsPerDocumentBase[]
  form_field_groups: SubFormFieldGroup[]
  warnings: WarningResponse[]
  errors: ErrorResponseError[]
  suggestions: string[]
}
type DocumentFieldDetectionResponse = {
  detection_result: DocumentFieldDetectionResponseDetectionResult
  warnings?: WarningResponse[] | undefined
}
type SubEditorOptions = {
  allow_edit_signers?: boolean | undefined
  allow_edit_documents?: boolean | undefined
}
type SubMergeField = { name: string; type: 'text' | 'checkbox' }
type EmbeddedEditUrlRequest = {
  allow_edit_ccs?: boolean | undefined
  cc_roles?: string[] | undefined
  editor_options?: SubEditorOptions | undefined
  force_signer_roles?: boolean | undefined
  force_subject_message?: boolean | undefined
  merge_fields?: SubMergeField[] | undefined
  preview_only?: boolean | undefined
  show_preview?: boolean | undefined
  show_progress_stepper?: boolean | undefined
  test_mode?: boolean | undefined
}
type EmbeddedEditUrlResponseEmbedded = {
  edit_url?: string | undefined
  expires_at?: number | undefined
}
type EmbeddedEditUrlResponse = {
  embedded: EmbeddedEditUrlResponseEmbedded
  warnings?: WarningResponse[] | undefined
}
type EmbeddedSignUrlResponseEmbedded = {
  sign_url?: string | undefined
  expires_at?: number | undefined
}
type EmbeddedSignUrlResponse = {
  embedded: EmbeddedSignUrlResponseEmbedded
  warnings?: WarningResponse[] | undefined
}
type FaxResponseTransmission = {
  recipient: string
  status_code:
    | 'success'
    | 'transmitting'
    | 'error_could_not_fax'
    | 'error_unknown'
    | 'error_busy'
    | 'error_no_answer'
    | 'error_disconnected'
    | 'error_bad_destination'
  sent_at?: number | undefined
}
type FaxResponse = {
  fax_id: string
  title: string
  original_title: string
  subject?: (string | null) | undefined
  message?: (string | null) | undefined
  metadata: { [x: string]: { [x: string]: unknown } }
  created_at: number
  sender: string
  files_url: string
  final_copy_uri?: (string | null) | undefined
  transmissions: FaxResponseTransmission[]
  test_mode: boolean
}
type FaxGetResponse = { fax: FaxResponse; warnings?: WarningResponse[] | undefined }
type FaxLineAddUserRequest = {
  number: string
  account_id?: string | undefined
  email_address?: string | undefined
}
type FaxLineResponseFaxLine = {
  number?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  accounts?: AccountResponse[] | undefined
}
type FaxLineResponse = { fax_line: FaxLineResponseFaxLine; warnings?: WarningResponse | undefined }
type FaxLineAreaCodeGetResponse = { area_codes: number[] }
type FaxLineCreateRequest = {
  area_code: number
  country: 'CA' | 'US' | 'UK'
  city?: string | undefined
  account_id?: string | undefined
}
type FaxLineDeleteRequest = { number: string }
type FaxLineListResponse = {
  list_info: ListInfoResponse
  fax_lines: FaxLineResponseFaxLine[]
  warnings?: WarningResponse | undefined
}
type FaxLineRemoveUserRequest = {
  number: string
  account_id?: string | undefined
  email_address?: string | undefined
}
type FaxListResponse = { faxes: FaxResponse[]; list_info: ListInfoResponse }
type FaxSendRequest = {
  recipient: string
  sender?: string | undefined
  files?: File[] | undefined
  file_urls?: string[] | undefined
  test_mode?: boolean | undefined
  cover_page_to?: string | undefined
  cover_page_from?: string | undefined
  cover_page_message?: string | undefined
  title?: string | undefined
}
type OAuthTokenGenerateRequest = {
  client_id: string
  client_secret: string
  code: string
  grant_type: string
  state: string
}
type OAuthTokenRefreshRequest = {
  grant_type: string
  refresh_token: string
  client_id?: string | undefined
  client_secret?: string | undefined
}
type ReportCreateRequest = {
  end_date: string
  report_type: ('user_activity' | 'document_status' | 'sms_activity' | 'fax_usage')[]
  start_date: string
}
type ReportResponse = {
  success?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  report_type?: ('user_activity' | 'document_status' | 'sms_activity' | 'fax_usage')[] | undefined
}
type ReportCreateResponse = { report: ReportResponse; warnings?: WarningResponse[] | undefined }
type SubBulkSignerListCustomField = { name: string; value: string }
type SubSignatureRequestTemplateSigner = {
  role: string
  name: string
  email_address: string
  pin?: string | undefined
  sms_phone_number?: string | undefined
  sms_phone_number_type?: 'authentication' | 'delivery' | undefined
}
type SubBulkSignerList = {
  custom_fields?: SubBulkSignerListCustomField[] | undefined
  signers?: SubSignatureRequestTemplateSigner[] | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type SubCC = { role: string; email_address: string }
type SubCustomField = {
  editor?: string | undefined
  name: string
  required?: boolean | undefined
  value?: string | undefined
}
type SignatureRequestBulkCreateEmbeddedWithTemplateRequest = {
  template_ids: string[]
  signer_file?: File | undefined
  signer_list?: SubBulkSignerList[] | undefined
  allow_decline?: boolean | undefined
  ccs?: SubCC[] | undefined
  client_id: string
  custom_fields?: SubCustomField[] | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signing_redirect_url?: string | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  expires_at?: (number | null) | undefined
}
type BulkSendJobSendResponse = {
  bulk_send_job: BulkSendJobResponse
  warnings?: WarningResponse[] | undefined
}
type SignatureRequestBulkSendWithTemplateRequest = {
  template_ids: string[]
  signer_file?: File | undefined
  signer_list?: SubBulkSignerList[] | undefined
  allow_decline?: boolean | undefined
  ccs?: SubCC[] | undefined
  client_id?: string | undefined
  custom_fields?: SubCustomField[] | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signing_redirect_url?: string | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  expires_at?: (number | null) | undefined
}
type SubSignatureRequestSigner = {
  name: string
  email_address: string
  order?: (number | null) | undefined
  pin?: string | undefined
  sms_phone_number?: string | undefined
  sms_phone_number_type?: 'authentication' | 'delivery' | undefined
}
type SubSignatureRequestGroupedSigners = {
  group: string
  order?: (number | null) | undefined
  signers: SubSignatureRequestSigner[]
}
type SubAttachment = {
  instructions?: string | undefined
  name: string
  required?: boolean | undefined
  signer_index: number
}
type SubFieldOptions = {
  date_format:
    | 'MM / DD / YYYY'
    | 'MM - DD - YYYY'
    | 'DD / MM / YYYY'
    | 'DD - MM - YYYY'
    | 'YYYY / MM / DD'
    | 'YYYY - MM - DD'
}
type SubFormFieldRuleTrigger = {
  id: string
  operator: 'any' | 'is' | 'match' | 'none' | 'not'
  value?: string | undefined
  values?: string[] | undefined
}
type SubFormFieldRuleAction = {
  field_id?: string | undefined
  group_id?: string | undefined
  hidden: boolean
  type: 'change-field-visibility' | 'change-group-visibility'
}
type SubFormFieldRule = {
  id: string
  trigger_operator: string
  triggers: SubFormFieldRuleTrigger[]
  actions: SubFormFieldRuleAction[]
}
type SubSigningOptions = {
  default_type: 'draw' | 'phone' | 'type' | 'upload'
  draw?: boolean | undefined
  phone?: boolean | undefined
  type?: boolean | undefined
  upload?: boolean | undefined
  force_advanced_signature_details?: boolean | undefined
}
type SignatureRequestCreateEmbeddedRequest = {
  files?: File[] | undefined
  file_urls?: string[] | undefined
  signers?: SubSignatureRequestSigner[] | undefined
  grouped_signers?: SubSignatureRequestGroupedSigners[] | undefined
  allow_decline?: boolean | undefined
  allow_reassign?: boolean | undefined
  attachments?: SubAttachment[] | undefined
  cc_email_addresses?: string[] | undefined
  client_id: string
  custom_fields?: SubCustomField[] | undefined
  field_options?: SubFieldOptions | undefined
  form_field_groups?: SubFormFieldGroup[] | undefined
  form_field_rules?: SubFormFieldRule[] | undefined
  form_fields_per_document?: SubFormFieldsPerDocumentBase[] | undefined
  hide_text_tags?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signing_options?: SubSigningOptions | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  use_text_tags?: boolean | undefined
  ignore_text_tags_extraction_errors?: boolean | undefined
  populate_auto_fill_fields?: boolean | undefined
  expires_at?: (number | null) | undefined
}
type SignatureRequestResponse = {
  test_mode?: boolean | undefined
  signature_request_id?: string | undefined
  requester_email_address?: (string | null) | undefined
  title?: string | undefined
  original_title?: string | undefined
  subject?: (string | null) | undefined
  message?: (string | null) | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  created_at?: number | undefined
  expires_at?: (number | null) | undefined
  is_complete?: boolean | undefined
  is_declined?: boolean | undefined
  has_error?: boolean | undefined
  files_url?: string | undefined
  signing_url?: (string | null) | undefined
  details_url?: string | undefined
  cc_email_addresses?: string[] | undefined
  signing_redirect_url?: (string | null) | undefined
  final_copy_uri?: (string | null) | undefined
  template_ids?: (string[] | null) | undefined
  custom_fields?: (SignatureRequestResponseCustomFieldBase[] | null) | undefined
  attachments?: (SignatureRequestResponseAttachment[] | null) | undefined
  response_data?: (SignatureRequestResponseDataBase[] | null) | undefined
  signatures?: SignatureRequestResponseSignatures[] | undefined
  bulk_send_job_id?: (string | null) | undefined
}
type SignatureRequestGetResponse = {
  signature_request: SignatureRequestResponse
  warnings?: WarningResponse[] | undefined
}
type SignatureRequestCreateEmbeddedWithTemplateRequest = {
  template_ids: string[]
  allow_decline?: boolean | undefined
  ccs?: SubCC[] | undefined
  client_id: string
  custom_fields?: SubCustomField[] | undefined
  files?: File[] | undefined
  file_urls?: string[] | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signers: SubSignatureRequestTemplateSigner[]
  signing_options?: SubSigningOptions | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  populate_auto_fill_fields?: boolean | undefined
  expires_at?: (number | null) | undefined
}
type SignatureRequestEditRequest = {
  files?: File[] | undefined
  file_urls?: string[] | undefined
  signers?: SubSignatureRequestSigner[] | undefined
  grouped_signers?: SubSignatureRequestGroupedSigners[] | undefined
  allow_decline?: boolean | undefined
  allow_reassign?: boolean | undefined
  attachments?: SubAttachment[] | undefined
  cc_email_addresses?: string[] | undefined
  client_id?: string | undefined
  custom_fields?: SubCustomField[] | undefined
  field_options?: SubFieldOptions | undefined
  form_field_groups?: SubFormFieldGroup[] | undefined
  form_field_rules?: SubFormFieldRule[] | undefined
  form_fields_per_document?: SubFormFieldsPerDocumentBase[] | undefined
  hide_text_tags?: boolean | undefined
  is_eid?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signing_options?: SubSigningOptions | undefined
  signing_redirect_url?: string | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  use_text_tags?: boolean | undefined
  ignore_text_tags_extraction_errors?: boolean | undefined
  expires_at?: (number | null) | undefined
}
type SignatureRequestEditEmbeddedRequest = {
  files?: File[] | undefined
  file_urls?: string[] | undefined
  signers?: SubSignatureRequestSigner[] | undefined
  grouped_signers?: SubSignatureRequestGroupedSigners[] | undefined
  allow_decline?: boolean | undefined
  allow_reassign?: boolean | undefined
  attachments?: SubAttachment[] | undefined
  cc_email_addresses?: string[] | undefined
  client_id: string
  custom_fields?: SubCustomField[] | undefined
  field_options?: SubFieldOptions | undefined
  form_field_groups?: SubFormFieldGroup[] | undefined
  form_field_rules?: SubFormFieldRule[] | undefined
  form_fields_per_document?: SubFormFieldsPerDocumentBase[] | undefined
  hide_text_tags?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signing_options?: SubSigningOptions | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  use_text_tags?: boolean | undefined
  ignore_text_tags_extraction_errors?: boolean | undefined
  populate_auto_fill_fields?: boolean | undefined
  expires_at?: (number | null) | undefined
}
type SignatureRequestEditEmbeddedWithTemplateRequest = {
  template_ids: string[]
  allow_decline?: boolean | undefined
  ccs?: SubCC[] | undefined
  client_id: string
  custom_fields?: SubCustomField[] | undefined
  files?: File[] | undefined
  file_urls?: string[] | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signers: SubSignatureRequestTemplateSigner[]
  signing_options?: SubSigningOptions | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  populate_auto_fill_fields?: boolean | undefined
}
type SignatureRequestEditWithTemplateRequest = {
  template_ids: string[]
  allow_decline?: boolean | undefined
  ccs?: SubCC[] | undefined
  client_id?: string | undefined
  custom_fields?: SubCustomField[] | undefined
  files?: File[] | undefined
  file_urls?: string[] | undefined
  is_eid?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signers: SubSignatureRequestTemplateSigner[]
  signing_options?: SubSigningOptions | undefined
  signing_redirect_url?: string | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
}
type FileResponseDataUri = { data_uri: string }
type FileResponse = { file_url: string; expires_at: number }
type SignatureRequestListResponse = {
  signature_requests: SignatureRequestResponse[]
  list_info: ListInfoResponse
  warnings?: WarningResponse[] | undefined
}
type SignatureRequestRemindRequest = { email_address: string; name?: string | undefined }
type SignatureRequestSendRequest = {
  files?: File[] | undefined
  file_urls?: string[] | undefined
  signers?: SubSignatureRequestSigner[] | undefined
  grouped_signers?: SubSignatureRequestGroupedSigners[] | undefined
  allow_decline?: boolean | undefined
  allow_reassign?: boolean | undefined
  attachments?: SubAttachment[] | undefined
  cc_email_addresses?: string[] | undefined
  client_id?: string | undefined
  custom_fields?: SubCustomField[] | undefined
  field_options?: SubFieldOptions | undefined
  form_field_groups?: SubFormFieldGroup[] | undefined
  form_field_rules?: SubFormFieldRule[] | undefined
  form_fields_per_document?: SubFormFieldsPerDocumentBase[] | undefined
  hide_text_tags?: boolean | undefined
  is_eid?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signing_options?: SubSigningOptions | undefined
  signing_redirect_url?: string | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  use_text_tags?: boolean | undefined
  ignore_text_tags_extraction_errors?: boolean | undefined
  expires_at?: (number | null) | undefined
}
type SignatureRequestSendWithTemplateRequest = {
  template_ids: string[]
  allow_decline?: boolean | undefined
  ccs?: SubCC[] | undefined
  client_id?: string | undefined
  custom_fields?: SubCustomField[] | undefined
  files?: File[] | undefined
  file_urls?: string[] | undefined
  is_eid?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signers: SubSignatureRequestTemplateSigner[]
  signing_options?: SubSigningOptions | undefined
  signing_redirect_url?: string | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  expires_at?: (number | null) | undefined
}
type SignatureRequestUpdateRequest = {
  email_address?: string | undefined
  name?: string | undefined
  signature_id: string
  expires_at?: (number | null) | undefined
}
type TeamAddMemberRequest = {
  account_id?: string | undefined
  email_address?: string | undefined
  role?: 'Member' | 'Developer' | 'Team Manager' | 'Admin' | undefined
}
type TeamResponse = {
  name?: string | undefined
  accounts?: AccountResponse[] | undefined
  invited_accounts?: AccountResponse[] | undefined
  invited_emails?: string[] | undefined
  team_id?: string | undefined
  parent_team_id?: (string | null) | undefined
}
type TeamGetResponse = { team: TeamResponse; warnings?: WarningResponse[] | undefined }
type TeamCreateRequest = { name?: string | undefined; parent_team_id?: string | undefined }
type TeamUpdateRequest = { name?: string | undefined }
type TeamParentResponse = { team_id?: string | undefined; name?: string | undefined } | null
type TeamInfoResponse = {
  team_id?: string | undefined
  team_parent?: TeamParentResponse | undefined
  name?: string | undefined
  num_members?: number | undefined
  num_sub_teams?: number | undefined
}
type TeamGetInfoResponse = { team: TeamInfoResponse; warnings?: WarningResponse[] | undefined }
type TeamInviteResponse = {
  email_address?: string | undefined
  team_id?: string | undefined
  role?: string | undefined
  sent_at?: number | undefined
  redeemed_at?: number | undefined
  expires_at?: number | undefined
}
type TeamInvitesResponse = {
  team_invites: TeamInviteResponse[]
  warnings?: WarningResponse[] | undefined
}
type TeamMemberResponse = {
  account_id?: string | undefined
  email_address?: string | undefined
  role?: string | undefined
}
type TeamMembersResponse = {
  team_members: TeamMemberResponse[]
  list_info: ListInfoResponse
  warnings?: WarningResponse[] | undefined
}
type TeamRemoveMemberRequest = {
  account_id?: string | undefined
  email_address?: string | undefined
  new_owner_email_address?: string | undefined
  new_team_id?: string | undefined
  new_role?: 'Member' | 'Developer' | 'Team Manager' | 'Admin' | undefined
}
type TeamSettingsResponseSettings = {
  company: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  custom_signing_redirect_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  custom_signing_redirect_url: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  custom_tagline: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  date_format: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  is_signature_reminders_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  request_email_from: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  request_email_signature: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  required_signature_types: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_enable_tamper_proof: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_include_distinct_pdfs: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_offer_signer_access_code: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_offer_signer_sms_authentication: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_remove_document_id: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  data_residency: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  allow_team_delete_document_for_everyone: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  allow_team_download_csv: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  lock_team_template_creation: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  lock_team_template_gallery: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  self_sign_message: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  self_sign_title: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  signature_request_message: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  signature_request_title: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  multifactor_auth_app: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  multifactor_auth_sms: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  qualified_esignature_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  sms_signature_delivery: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  nom151_enabled: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  should_enable_in_person_signing: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  everyone_has_signed_email: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  timezone: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
  notify_cc_recipients_setting: {
    value: { [x: string]: unknown } | null
    is_inherited: boolean
    source: 'account' | 'team' | 'parent_team' | 'default'
    type: 'boolean' | 'integer' | 'string' | 'array'
    writable: boolean
    lock: SettingLockResponse
  }
}
type TeamSettingsResponse = {
  team_id: string
  settings: TeamSettingsResponseSettings
  warnings?: WarningResponse[] | undefined
}
type NotifyCCRecipientEvent = 'send' | 'complete' | 'view' | 'decline' | 'delegate'
type TeamSettingsUpdateRequest = {
  set?:
    | {
        company?: string | undefined
        custom_signing_redirect_enabled?: boolean | undefined
        custom_signing_redirect_url?: string | undefined
        custom_tagline?: string | undefined
        date_format?: {} | undefined
        is_signature_reminders_enabled?: boolean | undefined
        request_email_from?: string | undefined
        request_email_signature?: string | undefined
        required_signature_types?: RequiredSignatureType[] | undefined
        should_enable_tamper_proof?: boolean | undefined
        should_include_distinct_pdfs?: boolean | undefined
        should_offer_signer_access_code?: boolean | undefined
        should_offer_signer_sms_authentication?: boolean | undefined
        should_remove_document_id?: boolean | undefined
        data_residency?: {} | undefined
        allow_team_delete_document_for_everyone?: boolean | undefined
        allow_team_download_csv?: boolean | undefined
        lock_team_template_creation?: boolean | undefined
        lock_team_template_gallery?: boolean | undefined
        self_sign_message?: string | undefined
        self_sign_title?: string | undefined
        signature_request_message?: string | undefined
        signature_request_title?: string | undefined
        multifactor_auth_app?: boolean | undefined
        multifactor_auth_sms?: boolean | undefined
        qualified_esignature_enabled?: boolean | undefined
        sms_signature_delivery?: boolean | undefined
        nom151_enabled?: boolean | undefined
        should_enable_in_person_signing?: boolean | undefined
        everyone_has_signed_email?: string | undefined
        timezone?: string | undefined
        notify_cc_recipients_setting?: NotifyCCRecipientEvent[] | undefined
      }
    | undefined
  lock?:
    | {
        company?: {} | undefined
        custom_signing_redirect_enabled?: {} | undefined
        custom_signing_redirect_url?: {} | undefined
        custom_tagline?: {} | undefined
        date_format?: {} | undefined
        is_signature_reminders_enabled?: {} | undefined
        request_email_from?: {} | undefined
        request_email_signature?: {} | undefined
        required_signature_types?: {} | undefined
        should_enable_tamper_proof?: {} | undefined
        should_include_distinct_pdfs?: {} | undefined
        should_offer_signer_access_code?: {} | undefined
        should_offer_signer_sms_authentication?: {} | undefined
        should_remove_document_id?: {} | undefined
        data_residency?: {} | undefined
        allow_team_delete_document_for_everyone?: {} | undefined
        allow_team_download_csv?: {} | undefined
        lock_team_template_creation?: {} | undefined
        lock_team_template_gallery?: {} | undefined
        self_sign_message?: {} | undefined
        self_sign_title?: {} | undefined
        signature_request_message?: {} | undefined
        signature_request_title?: {} | undefined
        multifactor_auth_app?: {} | undefined
        multifactor_auth_sms?: {} | undefined
        qualified_esignature_enabled?: {} | undefined
        sms_signature_delivery?: {} | undefined
        nom151_enabled?: {} | undefined
        should_enable_in_person_signing?: {} | undefined
        everyone_has_signed_email?: {} | undefined
        timezone?: {} | undefined
        notify_cc_recipients_setting?: {} | undefined
      }
    | undefined
  unset?:
    | (
        | 'company'
        | 'custom_signing_redirect_enabled'
        | 'custom_signing_redirect_url'
        | 'custom_tagline'
        | 'date_format'
        | 'is_signature_reminders_enabled'
        | 'request_email_from'
        | 'request_email_signature'
        | 'required_signature_types'
        | 'should_enable_tamper_proof'
        | 'should_include_distinct_pdfs'
        | 'should_offer_signer_access_code'
        | 'should_offer_signer_sms_authentication'
        | 'should_remove_document_id'
        | 'data_residency'
        | 'allow_team_delete_document_for_everyone'
        | 'allow_team_download_csv'
        | 'lock_team_template_creation'
        | 'lock_team_template_gallery'
        | 'self_sign_message'
        | 'self_sign_title'
        | 'signature_request_message'
        | 'signature_request_title'
        | 'multifactor_auth_app'
        | 'multifactor_auth_sms'
        | 'qualified_esignature_enabled'
        | 'sms_signature_delivery'
        | 'nom151_enabled'
        | 'should_enable_in_person_signing'
        | 'everyone_has_signed_email'
        | 'timezone'
        | 'notify_cc_recipients_setting'
      )[]
    | undefined
}
type SubTeamResponse = { team_id?: string | undefined; name?: string | undefined }
type TeamSubTeamsResponse = {
  sub_teams: SubTeamResponse[]
  list_info: ListInfoResponse
  warnings?: WarningResponse[] | undefined
}
type TemplateAddUserRequest = {
  account_id?: string | undefined
  email_address?: string | undefined
  skip_notification?: boolean | undefined
}
type TemplateResponseSignerRole = { name?: string | undefined; order?: number | undefined }
type TemplateResponseCCRole = { name?: string | undefined }
type TemplateResponseDocumentFieldGroupRule = {
  requirement?: string | undefined
  groupLabel?: string | undefined
}
type TemplateResponseDocumentFieldGroup = {
  name?: string | undefined
  rule?: TemplateResponseDocumentFieldGroupRule | undefined
}
type TemplateResponseDocumentFormFieldBase = {
  api_id?: string | undefined
  name?: string | undefined
  type: string
  signer?: string | undefined
  x?: number | undefined
  y?: number | undefined
  width?: number | undefined
  height?: number | undefined
  required?: boolean | undefined
}
type TemplateResponseDocumentCustomFieldBase = {
  api_id?: string | undefined
  name?: string | undefined
  type: string
  signer?: (string | null) | undefined
  x?: number | undefined
  y?: number | undefined
  width?: number | undefined
  height?: number | undefined
  required?: boolean | undefined
  group?: (string | null) | undefined
}
type TemplateResponseDocumentStaticFieldBase = {
  api_id?: string | undefined
  name?: string | undefined
  type: string
  signer?: string | undefined
  x?: number | undefined
  y?: number | undefined
  width?: number | undefined
  height?: number | undefined
  required?: boolean | undefined
  group?: (string | null) | undefined
}
type TemplateResponseDocument = {
  name?: string | undefined
  index?: number | undefined
  field_groups?: TemplateResponseDocumentFieldGroup[] | undefined
  form_fields?: TemplateResponseDocumentFormFieldBase[] | undefined
  custom_fields?: TemplateResponseDocumentCustomFieldBase[] | undefined
  static_fields?: TemplateResponseDocumentStaticFieldBase[] | undefined
}
type TemplateResponseAccountQuota = {
  templates_left?: number | undefined
  api_signature_requests_left?: number | undefined
  documents_left?: number | undefined
  sms_verifications_left?: number | undefined
}
type TemplateResponseAccount = {
  account_id?: string | undefined
  email_address?: string | undefined
  is_locked?: boolean | undefined
  is_paid_hs?: boolean | undefined
  is_paid_hf?: boolean | undefined
  quotas?: TemplateResponseAccountQuota | undefined
}
type TemplateResponse = {
  template_id?: string | undefined
  title?: string | undefined
  message?: string | undefined
  updated_at?: number | undefined
  is_embedded?: (boolean | null) | undefined
  is_creator?: boolean | undefined
  can_edit?: boolean | undefined
  is_locked?: boolean | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signer_roles?: TemplateResponseSignerRole[] | undefined
  cc_roles?: TemplateResponseCCRole[] | undefined
  documents?: TemplateResponseDocument[] | undefined
  custom_fields?: (TemplateResponseDocumentCustomFieldBase[] | null) | undefined
  named_form_fields?: (TemplateResponseDocumentFormFieldBase[] | null) | undefined
  accounts?: TemplateResponseAccount[] | undefined
  attachments?: SignatureRequestResponseAttachment[] | undefined
}
type TemplateGetResponse = { template: TemplateResponse; warnings?: WarningResponse[] | undefined }
type SubTemplateRole = { name?: string | undefined; order?: (number | null) | undefined }
type TemplateCreateRequest = {
  files?: File[] | undefined
  file_urls?: string[] | undefined
  allow_reassign?: boolean | undefined
  attachments?: SubAttachment[] | undefined
  cc_roles?: string[] | undefined
  client_id?: string | undefined
  field_options?: SubFieldOptions | undefined
  form_field_groups?: SubFormFieldGroup[] | undefined
  form_field_rules?: SubFormFieldRule[] | undefined
  form_fields_per_document: SubFormFieldsPerDocumentBase[]
  merge_fields?: SubMergeField[] | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  signer_roles: SubTemplateRole[]
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  use_preexisting_fields?: boolean | undefined
  ignore_text_tags_extraction_errors?: boolean | undefined
}
type TemplateCreateResponseTemplate = { template_id?: string | undefined }
type TemplateCreateResponse = {
  template: TemplateCreateResponseTemplate
  warnings?: WarningResponse[] | undefined
}
type TemplateCreateEmbeddedDraftRequest = {
  files?: File[] | undefined
  file_urls?: string[] | undefined
  allow_ccs?: boolean | undefined
  allow_reassign?: boolean | undefined
  attachments?: SubAttachment[] | undefined
  cc_roles?: string[] | undefined
  client_id: string
  editor_options?: SubEditorOptions | undefined
  field_options?: SubFieldOptions | undefined
  force_signer_roles?: boolean | undefined
  force_subject_message?: boolean | undefined
  form_field_groups?: SubFormFieldGroup[] | undefined
  form_field_rules?: SubFormFieldRule[] | undefined
  form_fields_per_document?: SubFormFieldsPerDocumentBase[] | undefined
  merge_fields?: SubMergeField[] | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  show_preview?: boolean | undefined
  show_progress_stepper?: boolean | undefined
  signer_roles?: SubTemplateRole[] | undefined
  skip_me_now?: boolean | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  title?: string | undefined
  use_preexisting_fields?: boolean | undefined
  ignore_text_tags_extraction_errors?: boolean | undefined
}
type TemplateCreateEmbeddedDraftResponseTemplate = {
  template_id?: string | undefined
  edit_url?: string | undefined
  expires_at?: number | undefined
  warnings?: WarningResponse[] | undefined
}
type TemplateCreateEmbeddedDraftResponse = {
  template: TemplateCreateEmbeddedDraftResponseTemplate
  warnings?: WarningResponse[] | undefined
}
type TemplateListResponse = {
  templates: TemplateResponse[]
  list_info: ListInfoResponse
  warnings?: WarningResponse[] | undefined
}
type TemplateRemoveUserRequest = {
  account_id?: string | undefined
  email_address?: string | undefined
}
type TemplateUpdateFilesRequest = {
  client_id?: string | undefined
  files?: File[] | undefined
  file_urls?: string[] | undefined
  message?: string | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
}
type TemplateUpdateFilesResponseTemplate = {
  template_id?: string | undefined
  warnings?: WarningResponse[] | undefined
}
type TemplateUpdateFilesResponse = { template: TemplateUpdateFilesResponseTemplate }
type SubUnclaimedDraftSigner = {
  email_address: string
  name: string
  order?: (number | null) | undefined
}
type UnclaimedDraftCreateRequest = {
  files?: File[] | undefined
  file_urls?: string[] | undefined
  allow_decline?: boolean | undefined
  attachments?: SubAttachment[] | undefined
  cc_email_addresses?: string[] | undefined
  client_id?: string | undefined
  custom_fields?: SubCustomField[] | undefined
  field_options?: SubFieldOptions | undefined
  form_field_groups?: SubFormFieldGroup[] | undefined
  form_field_rules?: SubFormFieldRule[] | undefined
  form_fields_per_document?: SubFormFieldsPerDocumentBase[] | undefined
  hide_text_tags?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  show_progress_stepper?: boolean | undefined
  signers?: SubUnclaimedDraftSigner[] | undefined
  signing_options?: SubSigningOptions | undefined
  signing_redirect_url?: string | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  type: 'send_document' | 'request_signature'
  use_preexisting_fields?: boolean | undefined
  use_text_tags?: boolean | undefined
  ignore_text_tags_extraction_errors?: boolean | undefined
  expires_at?: (number | null) | undefined
}
type UnclaimedDraftResponse = {
  signature_request_id?: (string | null) | undefined
  claim_url?: string | undefined
  signing_redirect_url?: (string | null) | undefined
  requesting_redirect_url?: (string | null) | undefined
  expires_at?: (number | null) | undefined
  test_mode?: boolean | undefined
}
type UnclaimedDraftCreateResponse = {
  unclaimed_draft: UnclaimedDraftResponse
  warnings?: WarningResponse[] | undefined
}
type UnclaimedDraftCreateEmbeddedRequest = {
  files?: File[] | undefined
  file_urls?: string[] | undefined
  allow_ccs?: boolean | undefined
  allow_decline?: boolean | undefined
  allow_reassign?: boolean | undefined
  attachments?: SubAttachment[] | undefined
  cc_email_addresses?: string[] | undefined
  client_id: string
  custom_fields?: SubCustomField[] | undefined
  editor_options?: SubEditorOptions | undefined
  field_options?: SubFieldOptions | undefined
  force_signer_page?: boolean | undefined
  force_subject_message?: boolean | undefined
  form_field_groups?: SubFormFieldGroup[] | undefined
  form_field_rules?: SubFormFieldRule[] | undefined
  form_fields_per_document?: SubFormFieldsPerDocumentBase[] | undefined
  hide_text_tags?: boolean | undefined
  hold_request?: boolean | undefined
  is_for_embedded_signing?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  requester_email_address: string
  requesting_redirect_url?: string | undefined
  show_preview?: boolean | undefined
  show_progress_stepper?: boolean | undefined
  signers?: SubUnclaimedDraftSigner[] | undefined
  signing_options?: SubSigningOptions | undefined
  signing_redirect_url?: string | undefined
  skip_me_now?: boolean | undefined
  subject?: string | undefined
  test_mode?: boolean | undefined
  type?: 'send_document' | 'request_signature' | undefined
  use_preexisting_fields?: boolean | undefined
  use_text_tags?: boolean | undefined
  ignore_text_tags_extraction_errors?: boolean | undefined
  populate_auto_fill_fields?: boolean | undefined
  expires_at?: (number | null) | undefined
}
type SubUnclaimedDraftTemplateSigner = { role: string; name: string; email_address: string }
type UnclaimedDraftCreateEmbeddedWithTemplateRequest = {
  allow_decline?: boolean | undefined
  allow_reassign?: boolean | undefined
  ccs?: SubCC[] | undefined
  client_id: string
  custom_fields?: SubCustomField[] | undefined
  editor_options?: SubEditorOptions | undefined
  field_options?: SubFieldOptions | undefined
  files?: File[] | undefined
  file_urls?: string[] | undefined
  force_signer_roles?: boolean | undefined
  force_subject_message?: boolean | undefined
  hold_request?: boolean | undefined
  is_for_embedded_signing?: boolean | undefined
  message?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  preview_only?: boolean | undefined
  requester_email_address: string
  requesting_redirect_url?: string | undefined
  show_preview?: boolean | undefined
  show_progress_stepper?: boolean | undefined
  signers?: SubUnclaimedDraftTemplateSigner[] | undefined
  signing_options?: SubSigningOptions | undefined
  signing_redirect_url?: string | undefined
  skip_me_now?: boolean | undefined
  subject?: string | undefined
  template_ids: string[]
  test_mode?: boolean | undefined
  title?: string | undefined
  populate_auto_fill_fields?: boolean | undefined
  allow_ccs?: boolean | undefined
}
type UnclaimedDraftEditAndResendRequest = {
  client_id: string
  editor_options?: SubEditorOptions | undefined
  is_for_embedded_signing?: boolean | undefined
  requester_email_address?: string | undefined
  requesting_redirect_url?: string | undefined
  show_progress_stepper?: boolean | undefined
  signing_redirect_url?: string | undefined
  test_mode?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api_key': {
      $get:
        | {
            input: { query: { account_id?: string | undefined } }
            output: AccountApiKeyListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { account_id?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { account_id?: string | undefined } } & {
              json: AccountApiKeyCreateRequest
            }
            output: AccountApiKeyCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { account_id?: string | undefined } } & {
              json: AccountApiKeyCreateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api_key/:api_key_id': {
      $get:
        | {
            input: { param: { api_key_id: string } } & {
              query: { account_id?: string | undefined }
            }
            output: AccountApiKeyGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key_id: string } } & {
              query: { account_id?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { api_key_id: string } } & {
              query: { account_id?: string | undefined }
            } & { json: AccountApiKeyUpdateRequest }
            output: AccountApiKeyGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key_id: string } } & {
              query: { account_id?: string | undefined }
            } & { json: AccountApiKeyUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { api_key_id: string } } & {
              query: { account_id?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { api_key_id: string } } & {
              query: { account_id?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/account/create': {
      $post:
        | {
            input: { json: AccountCreateRequest }
            output: AccountCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/account': {
      $get:
        | {
            input: {
              query: { account_id?: string | undefined; email_address?: string | undefined }
            }
            output: AccountGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { account_id?: string | undefined; email_address?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { json: AccountUpdateRequest }
            output: AccountGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/account/settings': {
      $get:
        | {
            input: { query: { account_id?: string | undefined } }
            output: AccountSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { account_id?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { account_id?: string | undefined } } & {
              json: AccountSettingsUpdateRequest
            }
            output: AccountSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { account_id?: string | undefined } } & {
              json: AccountSettingsUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/account/verify': {
      $post:
        | {
            input: { json: AccountVerifyRequest }
            output: AccountVerifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountVerifyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api_app': {
      $post:
        | {
            input: { json: ApiAppCreateRequest } & { form: ApiAppCreateRequest }
            output: ApiAppGetResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApiAppCreateRequest } & { form: ApiAppCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api_app/:client_id': {
      $get:
        | {
            input: { param: { client_id: string } }
            output: ApiAppGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { client_id: string } } & { json: ApiAppUpdateRequest } & {
              form: ApiAppUpdateRequest
            }
            output: ApiAppGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & { json: ApiAppUpdateRequest } & {
              form: ApiAppUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { client_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api_app/list': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ApiAppListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/bulk_send_job/:bulk_send_job_id': {
      $get:
        | {
            input: { param: { bulk_send_job_id: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: BulkSendJobGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulk_send_job_id: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/bulk_send_job/list': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: BulkSendJobListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/document/detect_fields': {
      $post:
        | {
            input: { json: DocumentFieldDetectionRequest } & { form: DocumentFieldDetectionRequest }
            output: DocumentFieldDetectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DocumentFieldDetectionRequest } & { form: DocumentFieldDetectionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/embedded/edit_url/:template_id': {
      $post:
        | {
            input: { param: { template_id: string } } & { json: EmbeddedEditUrlRequest }
            output: EmbeddedEditUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & { json: EmbeddedEditUrlRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/embedded/sign_url/:signature_id': {
      $get:
        | {
            input: { param: { signature_id: string } }
            output: EmbeddedSignUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax/:fax_id': {
      $get:
        | {
            input: { param: { fax_id: string } }
            output: FaxGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fax_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | { input: { param: { fax_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { fax_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax/files/:fax_id': {
      $get:
        | { input: { param: { fax_id: string } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { fax_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax_line/add_user': {
      $put:
        | {
            input: { json: FaxLineAddUserRequest }
            output: FaxLineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FaxLineAddUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax_line/area_codes': {
      $get:
        | {
            input: {
              query: {
                country: 'CA' | 'US' | 'UK'
                state?:
                  | 'AK'
                  | 'AL'
                  | 'AR'
                  | 'AZ'
                  | 'CA'
                  | 'CO'
                  | 'CT'
                  | 'DC'
                  | 'DE'
                  | 'FL'
                  | 'GA'
                  | 'HI'
                  | 'IA'
                  | 'ID'
                  | 'IL'
                  | 'IN'
                  | 'KS'
                  | 'KY'
                  | 'LA'
                  | 'MA'
                  | 'MD'
                  | 'ME'
                  | 'MI'
                  | 'MN'
                  | 'MO'
                  | 'MS'
                  | 'MT'
                  | 'NC'
                  | 'ND'
                  | 'NE'
                  | 'NH'
                  | 'NJ'
                  | 'NM'
                  | 'NV'
                  | 'NY'
                  | 'OH'
                  | 'OK'
                  | 'OR'
                  | 'PA'
                  | 'RI'
                  | 'SC'
                  | 'SD'
                  | 'TN'
                  | 'TX'
                  | 'UT'
                  | 'VA'
                  | 'VT'
                  | 'WA'
                  | 'WI'
                  | 'WV'
                  | 'WY'
                  | undefined
                province?:
                  | 'AB'
                  | 'BC'
                  | 'MB'
                  | 'NB'
                  | 'NL'
                  | 'NT'
                  | 'NS'
                  | 'NU'
                  | 'ON'
                  | 'PE'
                  | 'QC'
                  | 'SK'
                  | 'YT'
                  | undefined
                city?: string | undefined
              }
            }
            output: FaxLineAreaCodeGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                country: 'CA' | 'US' | 'UK'
                state?:
                  | 'AK'
                  | 'AL'
                  | 'AR'
                  | 'AZ'
                  | 'CA'
                  | 'CO'
                  | 'CT'
                  | 'DC'
                  | 'DE'
                  | 'FL'
                  | 'GA'
                  | 'HI'
                  | 'IA'
                  | 'ID'
                  | 'IL'
                  | 'IN'
                  | 'KS'
                  | 'KY'
                  | 'LA'
                  | 'MA'
                  | 'MD'
                  | 'ME'
                  | 'MI'
                  | 'MN'
                  | 'MO'
                  | 'MS'
                  | 'MT'
                  | 'NC'
                  | 'ND'
                  | 'NE'
                  | 'NH'
                  | 'NJ'
                  | 'NM'
                  | 'NV'
                  | 'NY'
                  | 'OH'
                  | 'OK'
                  | 'OR'
                  | 'PA'
                  | 'RI'
                  | 'SC'
                  | 'SD'
                  | 'TN'
                  | 'TX'
                  | 'UT'
                  | 'VA'
                  | 'VT'
                  | 'WA'
                  | 'WI'
                  | 'WV'
                  | 'WY'
                  | undefined
                province?:
                  | 'AB'
                  | 'BC'
                  | 'MB'
                  | 'NB'
                  | 'NL'
                  | 'NT'
                  | 'NS'
                  | 'NU'
                  | 'ON'
                  | 'PE'
                  | 'QC'
                  | 'SK'
                  | 'YT'
                  | undefined
                city?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax_line/create': {
      $post:
        | {
            input: { json: FaxLineCreateRequest }
            output: FaxLineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FaxLineCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax_line': {
      $get:
        | {
            input: { query: { number: string } }
            output: FaxLineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { number: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete: {
        input: { json: FaxLineDeleteRequest }
        output: ErrorResponse
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/fax_line/list': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                show_team_lines?: boolean | undefined
              }
            }
            output: FaxLineListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                show_team_lines?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax_line/remove_user': {
      $put:
        | {
            input: { json: FaxLineRemoveUserRequest }
            output: FaxLineResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FaxLineRemoveUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax/list': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: FaxListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/fax/send': {
      $post:
        | {
            input: { json: FaxSendRequest } & { form: FaxSendRequest }
            output: FaxGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FaxSendRequest } & { form: FaxSendRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/oauth/token': {
      $post:
        | {
            input: { json: OAuthTokenGenerateRequest }
            output: OAuthTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OAuthTokenGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/oauth/token?refresh': {
      $post:
        | {
            input: { json: OAuthTokenRefreshRequest }
            output: OAuthTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OAuthTokenRefreshRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/report/create': {
      $post:
        | {
            input: { json: ReportCreateRequest }
            output: ReportCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReportCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/bulk_create_embedded_with_template': {
      $post:
        | {
            input: { json: SignatureRequestBulkCreateEmbeddedWithTemplateRequest } & {
              form: SignatureRequestBulkCreateEmbeddedWithTemplateRequest
            }
            output: BulkSendJobSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignatureRequestBulkCreateEmbeddedWithTemplateRequest } & {
              form: SignatureRequestBulkCreateEmbeddedWithTemplateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/bulk_send_with_template': {
      $post:
        | {
            input: { json: SignatureRequestBulkSendWithTemplateRequest } & {
              form: SignatureRequestBulkSendWithTemplateRequest
            }
            output: BulkSendJobSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignatureRequestBulkSendWithTemplateRequest } & {
              form: SignatureRequestBulkSendWithTemplateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/cancel/:signature_request_id': {
      $post: {
        input: { param: { signature_request_id: string } }
        output: ErrorResponse
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/signature_request/create_embedded': {
      $post:
        | {
            input: { json: SignatureRequestCreateEmbeddedRequest } & {
              form: SignatureRequestCreateEmbeddedRequest
            }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignatureRequestCreateEmbeddedRequest } & {
              form: SignatureRequestCreateEmbeddedRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/create_embedded_with_template': {
      $post:
        | {
            input: { json: SignatureRequestCreateEmbeddedWithTemplateRequest } & {
              form: SignatureRequestCreateEmbeddedWithTemplateRequest
            }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignatureRequestCreateEmbeddedWithTemplateRequest } & {
              form: SignatureRequestCreateEmbeddedWithTemplateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/edit/:signature_request_id': {
      $put:
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestEditRequest
            } & { form: SignatureRequestEditRequest }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestEditRequest
            } & { form: SignatureRequestEditRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/edit_embedded/:signature_request_id': {
      $put:
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestEditEmbeddedRequest
            } & { form: SignatureRequestEditEmbeddedRequest }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestEditEmbeddedRequest
            } & { form: SignatureRequestEditEmbeddedRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/edit_embedded_with_template/:signature_request_id': {
      $put:
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestEditEmbeddedWithTemplateRequest
            } & { form: SignatureRequestEditEmbeddedWithTemplateRequest }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestEditEmbeddedWithTemplateRequest
            } & { form: SignatureRequestEditEmbeddedWithTemplateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/edit_with_template/:signature_request_id': {
      $put:
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestEditWithTemplateRequest
            } & { form: SignatureRequestEditWithTemplateRequest }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestEditWithTemplateRequest
            } & { form: SignatureRequestEditWithTemplateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/files/:signature_request_id': {
      $get:
        | {
            input: { param: { signature_request_id: string } } & {
              query: { file_type?: 'pdf' | 'zip' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              query: { file_type?: 'pdf' | 'zip' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              query: { file_type?: 'pdf' | 'zip' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/files_as_data_uri/:signature_request_id': {
      $get:
        | {
            input: { param: { signature_request_id: string } }
            output: FileResponseDataUri
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/files_as_file_url/:signature_request_id': {
      $get:
        | {
            input: { param: { signature_request_id: string } } & {
              query: { force_download?: number | undefined }
            }
            output: FileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              query: { force_download?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/:signature_request_id': {
      $get:
        | {
            input: { param: { signature_request_id: string } }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/list': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                query?: string | undefined
              }
            }
            output: SignatureRequestListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                query?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/release_hold/:signature_request_id': {
      $post:
        | {
            input: { param: { signature_request_id: string } }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/remind/:signature_request_id': {
      $post:
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestRemindRequest
            }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestRemindRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/remove/:signature_request_id': {
      $post: {
        input: { param: { signature_request_id: string } }
        output: ErrorResponse
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/signature_request/send': {
      $post:
        | {
            input: { json: SignatureRequestSendRequest } & { form: SignatureRequestSendRequest }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignatureRequestSendRequest } & { form: SignatureRequestSendRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/send_with_template': {
      $post:
        | {
            input: { json: SignatureRequestSendWithTemplateRequest } & {
              form: SignatureRequestSendWithTemplateRequest
            }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignatureRequestSendWithTemplateRequest } & {
              form: SignatureRequestSendWithTemplateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/signature_request/update/:signature_request_id': {
      $post:
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestUpdateRequest
            }
            output: SignatureRequestGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              json: SignatureRequestUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/add_member': {
      $put:
        | {
            input: { query: { team_id?: string | undefined } } & { json: TeamAddMemberRequest }
            output: TeamGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { team_id?: string | undefined } } & { json: TeamAddMemberRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/create': {
      $post:
        | {
            input: { json: TeamCreateRequest }
            output: TeamGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TeamCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/destroy': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/team': {
      $get:
        | { input: {}; output: TeamGetResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
      $put:
        | {
            input: { json: TeamUpdateRequest }
            output: TeamGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TeamUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/info': {
      $get:
        | {
            input: { query: { team_id?: string | undefined } }
            output: TeamGetInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { team_id?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/invites': {
      $get:
        | {
            input: { query: { email_address?: string | undefined } }
            output: TeamInvitesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { email_address?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/members/:team_id': {
      $get:
        | {
            input: { param: { team_id: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: TeamMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/remove_member': {
      $post:
        | {
            input: { json: TeamRemoveMemberRequest }
            output: TeamGetResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TeamRemoveMemberRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/settings': {
      $get:
        | {
            input: { query: { team_id?: string | undefined } }
            output: TeamSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { team_id?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { team_id?: string | undefined } } & { json: TeamSettingsUpdateRequest }
            output: TeamSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { team_id?: string | undefined } } & { json: TeamSettingsUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/team/sub_teams/:team_id': {
      $get:
        | {
            input: { param: { team_id: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: TeamSubTeamsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { team_id: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/add_user/:template_id': {
      $post:
        | {
            input: { param: { template_id: string } } & { json: TemplateAddUserRequest }
            output: TemplateGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & { json: TemplateAddUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/create': {
      $post:
        | {
            input: { json: TemplateCreateRequest } & { form: TemplateCreateRequest }
            output: TemplateCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplateCreateRequest } & { form: TemplateCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/create_embedded_draft': {
      $post:
        | {
            input: { json: TemplateCreateEmbeddedDraftRequest } & {
              form: TemplateCreateEmbeddedDraftRequest
            }
            output: TemplateCreateEmbeddedDraftResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplateCreateEmbeddedDraftRequest } & {
              form: TemplateCreateEmbeddedDraftRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/delete/:template_id': {
      $post: {
        input: { param: { template_id: string } }
        output: ErrorResponse
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/template/files/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } } & {
              query: { file_type?: 'pdf' | 'zip' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              query: { file_type?: 'pdf' | 'zip' | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              query: { file_type?: 'pdf' | 'zip' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/files_as_data_uri/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: FileResponseDataUri
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/files_as_file_url/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } } & {
              query: { force_download?: number | undefined }
            }
            output: FileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              query: { force_download?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: TemplateGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/list': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                query?: string | undefined
              }
            }
            output: TemplateListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                query?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/remove_user/:template_id': {
      $post:
        | {
            input: { param: { template_id: string } } & { json: TemplateRemoveUserRequest }
            output: TemplateGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & { json: TemplateRemoveUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/update_files/:template_id': {
      $post:
        | {
            input: { param: { template_id: string } } & { json: TemplateUpdateFilesRequest } & {
              form: TemplateUpdateFilesRequest
            }
            output: TemplateUpdateFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & { json: TemplateUpdateFilesRequest } & {
              form: TemplateUpdateFilesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/unclaimed_draft/create': {
      $post:
        | {
            input: { json: UnclaimedDraftCreateRequest } & { form: UnclaimedDraftCreateRequest }
            output: UnclaimedDraftCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UnclaimedDraftCreateRequest } & { form: UnclaimedDraftCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/unclaimed_draft/create_embedded': {
      $post:
        | {
            input: { json: UnclaimedDraftCreateEmbeddedRequest } & {
              form: UnclaimedDraftCreateEmbeddedRequest
            }
            output: UnclaimedDraftCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UnclaimedDraftCreateEmbeddedRequest } & {
              form: UnclaimedDraftCreateEmbeddedRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/unclaimed_draft/create_embedded_with_template': {
      $post:
        | {
            input: { json: UnclaimedDraftCreateEmbeddedWithTemplateRequest } & {
              form: UnclaimedDraftCreateEmbeddedWithTemplateRequest
            }
            output: UnclaimedDraftCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UnclaimedDraftCreateEmbeddedWithTemplateRequest } & {
              form: UnclaimedDraftCreateEmbeddedWithTemplateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/unclaimed_draft/edit_and_resend/:signature_request_id': {
      $post:
        | {
            input: { param: { signature_request_id: string } } & {
              json: UnclaimedDraftEditAndResendRequest
            }
            output: UnclaimedDraftCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { signature_request_id: string } } & {
              json: UnclaimedDraftEditAndResendRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
