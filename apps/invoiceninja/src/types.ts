type Account = { id?: string | undefined; account_sms_verified?: string | undefined }
type CompanySettings = {
  currency_id: string
  timezone_id?: string | undefined
  date_format_id?: string | undefined
  military_time?: boolean | undefined
  language_id?: string | undefined
  show_currency_code?: boolean | undefined
  payment_terms?: number | undefined
  company_gateway_ids?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  default_task_rate?: number | undefined
  send_reminders?: boolean | undefined
  enable_client_portal_tasks?: boolean | undefined
  email_style?: 'plain' | 'light' | 'dark' | 'custom' | undefined
  reply_to_email?: string | undefined
  bcc_email?: string | undefined
  pdf_email_attachment?: boolean | undefined
  ubl_email_attachment?: boolean | undefined
  email_style_custom?: string | undefined
  counter_number_applied?: 'when_saved' | 'when_sent' | 'when_paid' | undefined
  quote_number_applied?: 'when_saved' | 'when_sent' | undefined
  custom_message_dashboard?: string | undefined
  custom_message_unpaid_invoice?: string | undefined
  custom_message_paid_invoice?: string | undefined
  custom_message_unapproved_quote?: string | undefined
  lock_invoices?: 'off' | 'when_sent' | 'when_paid' | 'end_of_month' | undefined
  auto_archive_invoice?: boolean | undefined
  auto_archive_quote?: boolean | undefined
  auto_convert_quote?: boolean | undefined
  inclusive_taxes?: boolean | undefined
  translations?: { [x: string]: unknown } | undefined
  task_number_pattern?: string | undefined
  task_number_counter?: number | undefined
  reminder_send_time?: number | undefined
  expense_number_pattern?: string | undefined
  expense_number_counter?: number | undefined
  vendor_number_pattern?: string | undefined
  vendor_number_counter?: number | undefined
  ticket_number_pattern?: string | undefined
  ticket_number_counter?: number | undefined
  payment_number_pattern?: string | undefined
  payment_number_counter?: number | undefined
  invoice_number_pattern?: string | undefined
  invoice_number_counter?: number | undefined
  quote_number_pattern?: string | undefined
  quote_number_counter?: number | undefined
  client_number_pattern?: string | undefined
  client_number_counter?: number | undefined
  credit_number_pattern?: string | undefined
  credit_number_counter?: number | undefined
  recurring_invoice_number_prefix?: string | undefined
  reset_counter_frequency_id?: number | undefined
  reset_counter_date?: string | undefined
  counter_padding?: number | undefined
  shared_invoice_quote_counter?: boolean | undefined
  update_products?: boolean | undefined
  convert_products?: boolean | undefined
  fill_products?: boolean | undefined
  invoice_terms?: string | undefined
  quote_terms?: string | undefined
  invoice_taxes?: number | undefined
  invoice_design_id?: string | undefined
  quote_design_id?: string | undefined
  invoice_footer?: string | undefined
  invoice_labels?: string | undefined
  tax_rate1?: number | undefined
  tax_name1?: string | undefined
  tax_rate2?: number | undefined
  tax_name2?: string | undefined
  tax_rate3?: number | undefined
  tax_name3?: string | undefined
  payment_type_id?: string | undefined
  custom_fields?: string | undefined
  email_footer?: string | undefined
  email_sending_method?:
    | 'default'
    | 'gmail'
    | 'office365'
    | 'client_postmark'
    | 'client_mailgun'
    | 'mailgun'
    | 'client_brevo'
    | undefined
  gmail_sending_user_id?: string | undefined
  email_subject_invoice?: string | undefined
  email_subject_quote?: string | undefined
  email_subject_payment?: string | undefined
  email_template_invoice?: string | undefined
  email_template_quote?: string | undefined
  email_template_payment?: string | undefined
  email_subject_reminder1?: string | undefined
  email_subject_reminder2?: string | undefined
  email_subject_reminder3?: string | undefined
  email_subject_reminder_endless?: string | undefined
  email_template_reminder1?: string | undefined
  email_template_reminder2?: string | undefined
  email_template_reminder3?: string | undefined
  email_template_reminder_endless?: string | undefined
  enable_portal_password?: boolean | undefined
  show_accept_invoice_terms?: boolean | undefined
  show_accept_quote_terms?: boolean | undefined
  require_invoice_signature?: boolean | undefined
  require_quote_signature?: boolean | undefined
  name?: string | undefined
  company_logo?: string | undefined
  website?: string | undefined
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postal_code?: string | undefined
  phone?: string | undefined
  email?: string | undefined
  country_id?: string | undefined
  vat_number?: string | undefined
  page_size?: string | undefined
  font_size?: number | undefined
  primary_font?: string | undefined
  secondary_font?: string | undefined
  hide_paid_to_date?: boolean | undefined
  embed_documents?: boolean | undefined
  all_pages_header?: boolean | undefined
  all_pages_footer?: boolean | undefined
  document_email_attachment?: boolean | undefined
  enable_client_portal_password?: boolean | undefined
  enable_email_markup?: boolean | undefined
  enable_client_portal_dashboard?: boolean | undefined
  enable_client_portal?: boolean | undefined
  email_template_statement?: string | undefined
  email_subject_statement?: string | undefined
  signature_on_pdf?: boolean | undefined
  quote_footer?: string | undefined
  email_subject_custom1?: string | undefined
  email_subject_custom2?: string | undefined
  email_subject_custom3?: string | undefined
  email_template_custom1?: string | undefined
  email_template_custom2?: string | undefined
  email_template_custom3?: string | undefined
  enable_reminder1?: boolean | undefined
  enable_reminder2?: boolean | undefined
  enable_reminder3?: boolean | undefined
  num_days_reminder1?: number | undefined
  num_days_reminder2?: number | undefined
  num_days_reminder3?: number | undefined
  schedule_reminder1?: 'after_invoice_date' | 'before_due_date' | 'after_due_date' | undefined
  schedule_reminder2?: 'after_invoice_date' | 'before_due_date' | 'after_due_date' | undefined
  schedule_reminder3?: 'after_invoice_date' | 'before_due_date' | 'after_due_date' | undefined
  late_fee_amount1?: number | undefined
  late_fee_amount2?: number | undefined
  late_fee_amount3?: number | undefined
  endless_reminder_frequency_id?: string | undefined
  client_online_payment_notification?: boolean | undefined
  client_manual_payment_notification?: boolean | undefined
  enable_e_invoice?: boolean | undefined
  default_expense_payment_type_id?: string | undefined
  e_invoice_type?: string | undefined
  mailgun_endpoint?: 'api.mailgun.net' | 'api.eu.mailgun.net' | undefined
  client_initiated_payments?: boolean | undefined
  client_initiated_payments_minimum?: number | undefined
  sync_invoice_quote_columns?: boolean | undefined
  show_task_item_description?: boolean | undefined
  allow_billable_task_items?: boolean | undefined
  accept_client_input_quote_approval?: boolean | undefined
  custom_sending_email?: string | undefined
  show_paid_stamp?: boolean | undefined
  show_shipping_address?: boolean | undefined
  company_logo_size?: number | undefined
  show_email_footer?: boolean | undefined
  email_alignment?: 'left' | 'center' | 'right' | undefined
  auto_bill_standard_invoices?: boolean | undefined
  postmark_secret?: string | undefined
  mailgun_secret?: string | undefined
  mailgun_domain?: string | undefined
  send_email_on_mark_paid?: boolean | undefined
  vendor_portal_enable_uploads?: boolean | undefined
  besr_id?: string | undefined
  qr_iban?: string | undefined
  email_subject_purchase_order?: string | undefined
  email_template_purchase_order?: string | undefined
  require_purchase_order_signature?: boolean | undefined
  purchase_order_public_notes?: string | undefined
  purchase_order_terms?: string | undefined
  purchase_order_footer?: string | undefined
  purchase_order_design_id?: string | undefined
  purchase_order_number_pattern?: string | undefined
  purchase_order_number_counter?: number | undefined
  page_numbering_alignment?: 'left' | 'center' | 'right' | undefined
  page_numbering?: boolean | undefined
  auto_archive_invoice_cancelled?: boolean | undefined
  email_from_name?: string | undefined
  show_all_tasks_client_portal?: 'all' | 'uninvoiced' | 'invoiced' | undefined
  entity_send_time?: number | undefined
  shared_invoice_credit_counter?: boolean | undefined
  reply_to_name?: string | undefined
  hide_empty_columns_on_pdf?: boolean | undefined
  enable_reminder_endless?: boolean | undefined
  use_credits_payment?: boolean | undefined
  recurring_invoice_number_pattern?: string | undefined
  recurring_invoice_number_counter?: number | undefined
  client_portal_under_payment_minimum?: number | undefined
  auto_bill_date?: 'on_send_date' | 'on_due_date' | undefined
  primary_color?: string | undefined
  secondary_color?: string | undefined
  client_portal_allow_under_payment?: boolean | undefined
  client_portal_allow_over_payment?: boolean | undefined
  auto_bill?: 'off' | 'always' | 'optin' | 'optout' | undefined
  client_portal_terms?: string | undefined
  client_portal_privacy_policy?: string | undefined
  client_can_register?: boolean | undefined
  portal_design_id?: string | undefined
  late_fee_endless_percent?: number | undefined
  late_fee_endless_amount?: number | undefined
  auto_email_invoice?: boolean | undefined
  email_signature?: string | undefined
  classification?: string | undefined
  valid_until?: string | undefined
  credit_terms?: string | undefined
  credit_footer?: string | undefined
}
type Company = {
  id?: string | undefined
  size_id?: string | undefined
  industry_id?: string | undefined
  slack_webhook_url?: string | undefined
  google_analytics_key?: string | undefined
  portal_mode?: string | undefined
  subdomain?: string | undefined
  portal_domain?: string | undefined
  enabled_tax_rates?: number | undefined
  fill_products?: boolean | undefined
  convert_products?: boolean | undefined
  update_products?: boolean | undefined
  show_product_details?: boolean | undefined
  show_product_cost?: boolean | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  enable_product_cost?: boolean | undefined
  enable_product_quantity?: boolean | undefined
  default_quantity?: boolean | undefined
  custom_surcharge_taxes1?: boolean | undefined
  custom_surcharge_taxes2?: boolean | undefined
  custom_surcharge_taxes3?: boolean | undefined
  custom_surcharge_taxes4?: { [x: string]: unknown } | undefined
  logo?: File | undefined
  company_key?: string | undefined
  client_can_register?: boolean | undefined
  enabled_modules?: number | undefined
  db?: string | undefined
  first_day_of_week?: string | undefined
  first_month_of_year?: string | undefined
  enabled_item_tax_rates?: number | undefined
  is_large?: boolean | undefined
  default_auto_bill?: string | undefined
  mark_expenses_invoiceable?: boolean | undefined
  mark_expenses_paid?: boolean | undefined
  invoice_expense_documents?: boolean | undefined
  auto_start_tasks?: boolean | undefined
  invoice_task_timelog?: boolean | undefined
  invoice_task_documents?: boolean | undefined
  show_tasks_table?: boolean | undefined
  is_disabled?: boolean | undefined
  default_task_is_date_based?: boolean | undefined
  enable_product_discount?: boolean | undefined
  calculate_expense_tax_by_amount?: boolean | undefined
  expense_inclusive_taxes?: boolean | undefined
  session_timeout?: number | undefined
  oauth_password_required?: boolean | undefined
  invoice_task_datelog?: boolean | undefined
  default_password_timeout?: number | undefined
  show_task_end_date?: boolean | undefined
  markdown_enabled?: boolean | undefined
  report_include_drafts?: boolean | undefined
  client_registration_fields?: { [x: string]: unknown } | undefined
  stop_on_unpaid_recurring?: boolean | undefined
  use_quote_terms_on_conversion?: boolean | undefined
  enable_applying_payments?: boolean | undefined
  track_inventory?: boolean | undefined
  inventory_notification_threshold?: number | undefined
  stock_notification?: boolean | undefined
  matomo_url?: string | undefined
  matomo_id?: string | undefined
  enabled_expense_tax_rates?: number | undefined
  invoice_task_project?: boolean | undefined
  report_include_deleted?: boolean | undefined
  invoice_task_lock?: boolean | undefined
  convert_payment_currency?: boolean | undefined
  convert_expense_currency?: boolean | undefined
  notify_vendor_when_paid?: boolean | undefined
  invoice_task_hours?: boolean | undefined
  calculate_taxes?: boolean | undefined
  tax_data?: { [x: string]: unknown } | undefined
  e_invoice_certificate?: string | undefined
  e_invoice_certificate_passphrase?: string | undefined
  origin_tax_data?: { [x: string]: unknown } | undefined
  invoice_task_project_header?: boolean | undefined
  invoice_task_item_description?: boolean | undefined
  expense_mailbox?: string | undefined
  expense_mailbox_active?: boolean | undefined
  inbound_mailbox_allow_company_users?: boolean | undefined
  inbound_mailbox_allow_vendors?: boolean | undefined
  inbound_mailbox_allow_clients?: boolean | undefined
  inbound_mailbox_allow_unknown?: boolean | undefined
  inbound_mailbox_whitelist?: string | undefined
  inbound_mailbox_blacklist?: string | undefined
  smtp_host?: string | undefined
  smtp_port?: number | undefined
  smtp_encryption?: 'tls' | 'ssl' | undefined
  smtp_local_domain?: string | undefined
  smtp_verify_peer?: boolean | undefined
  e_invoice?: { [x: string]: unknown } | undefined
  legal_entity_id?: number | undefined
  convert_rate_to_client?: boolean | undefined
  e_invoicing_token?: string | undefined
  enable_shop_api?: boolean | undefined
  markdown_email_enabled?: boolean | undefined
  use_comma_as_decimal_place?: boolean | undefined
  settings?: CompanySettings | undefined
}
type UserRef = {
  id?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  signature?: string | undefined
  avatar?: string | undefined
  accepted_terms_version?: string | undefined
  oauth_user_id?: string | undefined
  oauth_provider_id?: string | undefined
  language_id?: string | undefined
  verified_phone_number?: boolean | undefined
  sms_verification_code?: string | undefined
  oauth_user_token_expiry?: string | undefined
  has_password?: boolean | undefined
  last_confirmed_email_address?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  is_deleted?: boolean | undefined
  google_2fa_secret?: string | undefined
  passkey_enabled?: boolean | undefined
  passkey_count?: number | undefined
  oauth_user_refresh_token?: string | undefined
  oauth_user_token?: { [x: string]: unknown } | undefined
  shopify_user_id?: string | undefined
  user_logged_in_notification?: boolean | undefined
}
type CompanyToken = {
  name?: string | undefined
  token?: string | undefined
  is_system?: boolean | undefined
}
type CompanyUser = {
  permissions?: string | undefined
  settings?: { [x: string]: unknown } | undefined
  react_settings?: { [x: string]: unknown } | undefined
  is_owner?: boolean | undefined
  is_admin?: boolean | undefined
  is_locked?: boolean | undefined
  updated_at?: number | undefined
  deleted_at?: number | undefined
  account?: Account | undefined
  company?: Company | undefined
  user?: UserRef | undefined
  token?: CompanyToken | undefined
}
type AuthenticationError = { message?: string | undefined }
type AuthorizationError = {
  message?: string | undefined
  errors?: { value?: string[] | undefined } | undefined
}
type ValidationError = {
  message?: string | undefined
  errors?: { value?: string[] | undefined } | undefined
}
type RateLimiterError = {
  message?: string | undefined
  errors?: { value?: string[] | undefined } | undefined
}
type Error = { message?: string | undefined; code?: number | undefined }
type CompanyUserRef = {
  permissions?: string | undefined
  settings?: { [x: string]: unknown } | undefined
  react_settings?: { [x: string]: unknown } | undefined
  is_owner?: boolean | undefined
  is_admin?: boolean | undefined
  is_locked?: boolean | undefined
  updated_at?: number | undefined
  deleted_at?: number | undefined
  account?: Account | undefined
  company?: Company | undefined
  user?: UserRef | undefined
  token?: CompanyToken | undefined
}
type User = {
  id?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  signature?: string | undefined
  avatar?: string | undefined
  accepted_terms_version?: string | undefined
  oauth_user_id?: string | undefined
  oauth_provider_id?: string | undefined
  language_id?: string | undefined
  verified_phone_number?: boolean | undefined
  sms_verification_code?: string | undefined
  oauth_user_token_expiry?: string | undefined
  has_password?: boolean | undefined
  last_confirmed_email_address?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  is_deleted?: boolean | undefined
  google_2fa_secret?: string | undefined
  passkey_enabled?: boolean | undefined
  passkey_count?: number | undefined
  company_user?: CompanyUserRef | undefined
}
type ClientContact = {
  id?: string | undefined
  user_id?: string | undefined
  client_id?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  email?: string | undefined
  accepted_terms_version?: string | undefined
  password?: string | undefined
  confirmation_code?: string | undefined
  token?: string | undefined
  contact_key?: string | undefined
  is_primary?: boolean | undefined
  confirmed?: boolean | undefined
  is_locked?: boolean | undefined
  send_email?: boolean | undefined
  cc_only?: boolean | undefined
  can_sign?: boolean | undefined
  failed_logins?: number | undefined
  email_verified_at?: number | undefined
  last_login?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  deleted_at?: number | undefined
}
type CountryType = number
type ClientSettings = {
  currency_id: string
  timezone_id?: string | undefined
  date_format_id?: string | undefined
  military_time?: boolean | undefined
  language_id?: string | undefined
  show_currency_code?: boolean | undefined
  payment_terms?: number | undefined
  company_gateway_ids?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  default_task_rate?: number | undefined
  send_reminders?: boolean | undefined
  enable_client_portal_tasks?: boolean | undefined
  email_style?: string | undefined
  reply_to_email?: string | undefined
  bcc_email?: string | undefined
  pdf_email_attachment?: boolean | undefined
  ubl_email_attachment?: boolean | undefined
  email_style_custom?: string | undefined
  counter_number_applied?: string | undefined
  quote_number_applied?: string | undefined
  custom_message_dashboard?: string | undefined
  custom_message_unpaid_invoice?: string | undefined
  custom_message_paid_invoice?: string | undefined
  custom_message_unapproved_quote?: string | undefined
  lock_invoices?: boolean | undefined
  auto_archive_invoice?: boolean | undefined
  auto_archive_quote?: boolean | undefined
  auto_convert_quote?: boolean | undefined
  inclusive_taxes?: boolean | undefined
  task_number_pattern?: string | undefined
  task_number_counter?: number | undefined
  reminder_send_time?: number | undefined
  expense_number_pattern?: string | undefined
  expense_number_counter?: number | undefined
  vendor_number_pattern?: string | undefined
  vendor_number_counter?: number | undefined
  ticket_number_pattern?: string | undefined
  ticket_number_counter?: number | undefined
  payment_number_pattern?: string | undefined
  payment_number_counter?: number | undefined
  invoice_number_pattern?: string | undefined
  invoice_number_counter?: number | undefined
  quote_number_pattern?: string | undefined
  quote_number_counter?: number | undefined
  client_number_pattern?: string | undefined
  client_number_counter?: number | undefined
  credit_number_pattern?: string | undefined
  credit_number_counter?: number | undefined
  recurring_invoice_number_prefix?: string | undefined
  reset_counter_frequency_id?: number | undefined
  reset_counter_date?: string | undefined
  counter_padding?: number | undefined
  shared_invoice_quote_counter?: boolean | undefined
  update_products?: boolean | undefined
  convert_products?: boolean | undefined
  fill_products?: boolean | undefined
  invoice_terms?: string | undefined
  quote_terms?: string | undefined
  invoice_taxes?: number | undefined
  invoice_design_id?: string | undefined
  quote_design_id?: string | undefined
  invoice_footer?: string | undefined
  invoice_labels?: string | undefined
  tax_rate1?: number | undefined
  tax_name1?: string | undefined
  tax_rate2?: number | undefined
  tax_name2?: string | undefined
  tax_rate3?: number | undefined
  tax_name3?: string | undefined
  payment_type_id?: string | undefined
  custom_fields?: string | undefined
  email_footer?: string | undefined
  email_sending_method?: string | undefined
  gmail_sending_user_id?: string | undefined
  email_subject_invoice?: string | undefined
  email_subject_quote?: string | undefined
  email_subject_payment?: string | undefined
  email_template_invoice?: string | undefined
  email_template_quote?: string | undefined
  email_template_payment?: string | undefined
  email_subject_reminder1?: string | undefined
  email_subject_reminder2?: string | undefined
  email_subject_reminder3?: string | undefined
  email_subject_reminder_endless?: string | undefined
  email_template_reminder1?: string | undefined
  email_template_reminder2?: string | undefined
  email_template_reminder3?: string | undefined
  email_template_reminder_endless?: string | undefined
  enable_portal_password?: boolean | undefined
  show_accept_invoice_terms?: boolean | undefined
  show_accept_quote_terms?: boolean | undefined
  require_invoice_signature?: boolean | undefined
  require_quote_signature?: boolean | undefined
  name?: string | undefined
  company_logo?: { [x: string]: unknown } | undefined
  website?: string | undefined
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postal_code?: string | undefined
  phone?: string | undefined
  email?: string | undefined
  country_id?: string | undefined
  vat_number?: string | undefined
  page_size?: string | undefined
  font_size?: number | undefined
  primary_font?: string | undefined
  secondary_font?: string | undefined
  hide_paid_to_date?: boolean | undefined
  embed_documents?: boolean | undefined
  all_pages_header?: boolean | undefined
  all_pages_footer?: boolean | undefined
  document_email_attachment?: boolean | undefined
  enable_client_portal_password?: boolean | undefined
  enable_email_markup?: boolean | undefined
  enable_client_portal_dashboard?: boolean | undefined
  enable_client_portal?: boolean | undefined
  email_template_statement?: string | undefined
  email_subject_statement?: string | undefined
  signature_on_pdf?: boolean | undefined
  quote_footer?: string | undefined
  email_subject_custom1?: string | undefined
  email_subject_custom2?: string | undefined
  email_subject_custom3?: string | undefined
  email_template_custom1?: string | undefined
  email_template_custom2?: string | undefined
  email_template_custom3?: string | undefined
  enable_reminder1?: boolean | undefined
  enable_reminder2?: boolean | undefined
  enable_reminder3?: boolean | undefined
  num_days_reminder1?: number | undefined
  num_days_reminder2?: number | undefined
  num_days_reminder3?: number | undefined
  schedule_reminder1?: string | undefined
  schedule_reminder2?: string | undefined
  schedule_reminder3?: string | undefined
  late_fee_amount1?: number | undefined
  late_fee_amount2?: number | undefined
  late_fee_amount3?: number | undefined
  endless_reminder_frequency_id?: string | undefined
  client_online_payment_notification?: boolean | undefined
  client_manual_payment_notification?: boolean | undefined
  enable_e_invoice?: boolean | undefined
  default_expense_payment_type_id?: string | undefined
  e_invoice_type?: string | undefined
  mailgun_endpoint?: string | undefined
  client_initiated_payments?: boolean | undefined
  client_initiated_payments_minimum?: number | undefined
  sync_invoice_quote_columns?: boolean | undefined
  show_task_item_description?: boolean | undefined
  allow_billable_task_items?: boolean | undefined
  accept_client_input_quote_approval?: boolean | undefined
  custom_sending_email?: string | undefined
  show_paid_stamp?: boolean | undefined
  show_shipping_address?: boolean | undefined
  company_logo_size?: number | undefined
  show_email_footer?: boolean | undefined
  email_alignment?: string | undefined
  auto_bill_standard_invoices?: boolean | undefined
  postmark_secret?: string | undefined
  mailgun_secret?: string | undefined
  mailgun_domain?: string | undefined
  send_email_on_mark_paid?: boolean | undefined
  vendor_portal_enable_uploads?: boolean | undefined
  besr_id?: string | undefined
  qr_iban?: string | undefined
  email_subject_purchase_order?: string | undefined
  email_template_purchase_order?: string | undefined
  require_purchase_order_signature?: boolean | undefined
  purchase_order_public_notes?: string | undefined
  purchase_order_terms?: string | undefined
  purchase_order_footer?: string | undefined
  purchase_order_design_id?: string | undefined
  purchase_order_number_pattern?: string | undefined
  purchase_order_number_counter?: number | undefined
  page_numbering_alignment?: string | undefined
  page_numbering?: boolean | undefined
  auto_archive_invoice_cancelled?: boolean | undefined
  email_from_name?: string | undefined
  show_all_tasks_client_portal?: boolean | undefined
  entity_send_time?: number | undefined
  shared_invoice_credit_counter?: boolean | undefined
  reply_to_name?: string | undefined
  hide_empty_columns_on_pdf?: boolean | undefined
  enable_reminder_endless?: boolean | undefined
  use_credits_payment?: boolean | undefined
  recurring_invoice_number_pattern?: string | undefined
  recurring_invoice_number_counter?: number | undefined
  client_portal_under_payment_minimum?: number | undefined
  auto_bill_date?: string | undefined
  primary_color?: string | undefined
  secondary_color?: string | undefined
  client_portal_allow_under_payment?: boolean | undefined
  client_portal_allow_over_payment?: boolean | undefined
  auto_bill?: string | undefined
  client_portal_terms?: string | undefined
  client_portal_privacy_policy?: string | undefined
  client_can_register?: boolean | undefined
  portal_design_id?: string | undefined
  late_fee_endless_percent?: number | undefined
  late_fee_endless_amount?: number | undefined
  auto_email_invoice?: boolean | undefined
  email_signature?: string | undefined
}
type Client = {
  id?: string | undefined
  contacts?: ClientContact[] | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  name?: string | undefined
  website?: string | undefined
  private_notes?: string | undefined
  client_hash?: string | undefined
  industry_id?: number | undefined
  size_id?: number | undefined
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postal_code?: string | undefined
  phone?: string | undefined
  country_id?: CountryType | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  vat_number?: string | undefined
  id_number?: string | undefined
  number?: string | undefined
  shipping_address1?: string | undefined
  shipping_address2?: string | undefined
  shipping_city?: string | undefined
  shipping_state?: string | undefined
  shipping_postal_code?: string | undefined
  shipping_country_id?: number | undefined
  is_deleted?: boolean | undefined
  balance?: number | undefined
  paid_to_date?: number | undefined
  credit_balance?: number | undefined
  last_login?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  group_settings_id?: string | undefined
  routing_id?: string | undefined
  is_tax_exempt?: boolean | undefined
  has_valid_vat_number?: boolean | undefined
  payment_balance?: number | undefined
  settings?: ClientSettings | undefined
  classification?: string | undefined
  public_notes?: string | undefined
}
type RecurringInvoice = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  status_id?: string | undefined
  frequency_id?: number | undefined
  remaining_cycles?: number | undefined
  number?: string | undefined
  po_number?: string | undefined
  terms?: string | undefined
  public_notes?: string | undefined
  private_notes?: string | undefined
  footer?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  total_taxes?: number | undefined
  line_items?: { [x: string]: unknown } | undefined
  amount?: number | undefined
  balance?: number | undefined
  paid_to_date?: number | undefined
  discount?: number | undefined
  partial?: number | undefined
  is_amount_discount?: boolean | undefined
  is_deleted?: boolean | undefined
  uses_inclusive_taxes?: boolean | undefined
  date?: string | undefined
  last_sent_date?: string | undefined
  next_send_date?: string | undefined
  partial_due_date?: string | undefined
  due_date?: string | undefined
  settings?: CompanySettings | undefined
  last_viewed?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  custom_surcharge1?: number | undefined
  custom_surcharge2?: number | undefined
  custom_surcharge3?: number | undefined
  custom_surcharge4?: number | undefined
  custom_surcharge_tax1?: boolean | undefined
  custom_surcharge_tax2?: boolean | undefined
  custom_surcharge_tax3?: boolean | undefined
  custom_surcharge_tax4?: boolean | undefined
  location_id?: string | undefined
  auto_bill?: string | undefined
  auto_bill_enabled?: boolean | undefined
  design_id?: string | undefined
  due_date_days?: number | undefined
  e_invoice?: { [x: string]: unknown } | undefined
  exchange_rate?: number | undefined
  next_send_date_client?: string | undefined
  project_id?: string | undefined
  vendor_id?: string | undefined
}
type InvoiceItem = {
  quantity?: number | undefined
  cost?: number | undefined
  product_key?: string | undefined
  tags?: string | undefined
  product_cost?: number | undefined
  notes?: string | undefined
  discount?: number | undefined
  is_amount_discount?: boolean | undefined
  tax_name1?: string | undefined
  tax_rate1?: number | undefined
  tax_name2?: string | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  sort_id?: string | undefined
  line_total?: number | undefined
  gross_line_total?: number | undefined
  tax_amount?: number | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  type_id?: string | undefined
  tax_id?: string | undefined
}
type InvoiceInvitation = {
  id?: string | undefined
  client_contact_id?: string | undefined
  key?: string | undefined
  link?: string | undefined
  sent_date?: string | undefined
  viewed_date?: string | undefined
  opened_date?: string | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  email_error?: string | undefined
  email_status?: string | undefined
  can_sign?: boolean | undefined
}
type Invoice = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  status_id?: string | undefined
  number?: string | undefined
  po_number?: string | undefined
  terms?: string | undefined
  public_notes?: string | undefined
  private_notes?: string | undefined
  footer?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  total_taxes?: number | undefined
  line_items?: InvoiceItem[] | undefined
  invitations?: InvoiceInvitation[] | undefined
  amount?: number | undefined
  balance?: number | undefined
  paid_to_date?: number | undefined
  discount?: number | undefined
  partial?: number | undefined
  is_amount_discount?: boolean | undefined
  is_deleted?: boolean | undefined
  uses_inclusive_taxes?: boolean | undefined
  date?: string | undefined
  last_sent_date?: string | undefined
  next_send_date?: string | undefined
  partial_due_date?: string | undefined
  due_date?: string | undefined
  last_viewed?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  custom_surcharge1?: number | undefined
  custom_surcharge2?: number | undefined
  custom_surcharge3?: number | undefined
  custom_surcharge4?: number | undefined
  custom_surcharge_tax1?: boolean | undefined
  custom_surcharge_tax2?: boolean | undefined
  custom_surcharge_tax3?: boolean | undefined
  custom_surcharge_tax4?: boolean | undefined
  project_id?: string | undefined
  auto_bill_tries?: number | undefined
  auto_bill_enabled?: boolean | undefined
  subscription_id?: string | undefined
  location_id?: string | undefined
  design_id?: string | undefined
  e_invoice?: { [x: string]: unknown } | undefined
  exchange_rate?: number | undefined
  vendor_id?: string | undefined
}
type CreditInvitation = {
  id?: string | undefined
  client_contact_id?: string | undefined
  key?: string | undefined
  link?: string | undefined
  sent_date?: string | undefined
  viewed_date?: string | undefined
  opened_date?: string | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  email_error?: string | undefined
  email_status?: string | undefined
  can_sign?: boolean | undefined
}
type Credit = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  status_id?: string | undefined
  invoice_id?: string | undefined
  number?: string | undefined
  po_number?: string | undefined
  terms?: string | undefined
  public_notes?: string | undefined
  private_notes?: string | undefined
  footer?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  total_taxes?: number | undefined
  line_items?: InvoiceItem[] | undefined
  invitations?: CreditInvitation[] | undefined
  amount?: number | undefined
  balance?: number | undefined
  paid_to_date?: number | undefined
  discount?: number | undefined
  partial?: number | undefined
  is_amount_discount?: boolean | undefined
  is_deleted?: boolean | undefined
  uses_inclusive_taxes?: boolean | undefined
  date?: string | undefined
  last_sent_date?: string | undefined
  next_send_date?: string | undefined
  partial_due_date?: string | undefined
  due_date?: string | undefined
  settings?: CompanySettings | undefined
  last_viewed?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  custom_surcharge1?: number | undefined
  custom_surcharge2?: number | undefined
  custom_surcharge3?: number | undefined
  custom_surcharge4?: number | undefined
  custom_surcharge_tax1?: boolean | undefined
  custom_surcharge_tax2?: boolean | undefined
  custom_surcharge_tax3?: boolean | undefined
  custom_surcharge_tax4?: boolean | undefined
  location_id?: string | undefined
  design_id?: string | undefined
  exchange_rate?: number | undefined
  project_id?: string | undefined
  subscription_id?: string | undefined
  vendor_id?: string | undefined
}
type Quote = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  status_id?: string | undefined
  number?: string | undefined
  po_number?: string | undefined
  terms?: string | undefined
  public_notes?: string | undefined
  private_notes?: string | undefined
  footer?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  total_taxes?: number | undefined
  line_items?: InvoiceItem[] | undefined
  amount?: number | undefined
  balance?: number | undefined
  paid_to_date?: number | undefined
  discount?: number | undefined
  partial?: number | undefined
  is_amount_discount?: boolean | undefined
  is_deleted?: boolean | undefined
  uses_inclusive_taxes?: boolean | undefined
  date?: string | undefined
  last_sent_date?: string | undefined
  next_send_date?: string | undefined
  partial_due_date?: string | undefined
  due_date?: string | undefined
  settings?: CompanySettings | undefined
  last_viewed?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  custom_surcharge1?: number | undefined
  custom_surcharge2?: number | undefined
  custom_surcharge3?: number | undefined
  custom_surcharge4?: number | undefined
  custom_surcharge_tax1?: boolean | undefined
  custom_surcharge_tax2?: boolean | undefined
  custom_surcharge_tax3?: boolean | undefined
  custom_surcharge_tax4?: boolean | undefined
  location_id?: string | undefined
  design_id?: string | undefined
  exchange_rate?: number | undefined
  project_id?: string | undefined
  subscription_id?: string | undefined
  vendor_id?: string | undefined
}
type PaymentType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'
  | '32'
  | '33'
type Paymentable = {
  id?: string | undefined
  invoice_id?: string | undefined
  credit_id?: string | undefined
  refunded?: number | undefined
  amount?: number | undefined
  updated_at?: number | undefined
  created_at?: number | undefined
}
type InvoicePaymentable = { invoice_id?: string | undefined; amount?: string | undefined }
type CreditPaymentable = { credit_id?: string | undefined; amount?: string | undefined }
type Payment = {
  id?: string | undefined
  client_id?: string | undefined
  invitation_id?: string | undefined
  client_contact_id?: string | undefined
  user_id?: string | undefined
  type_id?: PaymentType | undefined
  date?: string | undefined
  transaction_reference?: string | undefined
  assigned_user_id?: string | undefined
  private_notes?: string | undefined
  is_manual?: boolean | undefined
  is_deleted?: boolean | undefined
  amount?: number | undefined
  refunded?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  company_gateway_id?: string | undefined
  paymentables?: Paymentable | undefined
  invoices?: InvoicePaymentable[] | undefined
  credits?: CreditPaymentable[] | undefined
  number?: string | undefined
  category_id?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  exchange_currency_id?: string | undefined
  exchange_rate?: number | undefined
  idempotency_key?: string | undefined
}
type Expense = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  project_id?: string | undefined
  client_id?: string | undefined
  invoice_id?: string | undefined
  bank_id?: string | undefined
  invoice_currency_id?: string | undefined
  currency_id?: string | undefined
  invoice_category_id?: string | undefined
  payment_type_id?: string | undefined
  recurring_expense_id?: string | undefined
  private_notes?: string | undefined
  public_notes?: string | undefined
  transaction_reference?: string | undefined
  transcation_id?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_amount?: number | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_name3?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_rate3?: number | undefined
  amount?: number | undefined
  foreign_amount?: number | undefined
  exchange_rate?: number | undefined
  date?: string | undefined
  payment_date?: string | undefined
  should_be_invoiced?: boolean | undefined
  is_deleted?: boolean | undefined
  invoice_documents?: boolean | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  calculate_tax_by_amount?: boolean | undefined
  category_id?: string | undefined
  number?: string | undefined
  purchase_order_id?: string | undefined
  tax_amount1?: number | undefined
  tax_amount2?: number | undefined
  tax_amount3?: number | undefined
  transaction_id?: string | undefined
  uses_inclusive_taxes?: boolean | undefined
  vendor_id?: string | undefined
}
type TagAssignment = { id: string; name: string; color?: (string | null) | undefined }
type Task = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  invoice_id?: string | undefined
  project_id?: string | undefined
  number?: string | undefined
  time_log?: string | undefined
  is_running?: boolean | undefined
  is_deleted?: boolean | undefined
  task_status_id?: string | undefined
  description?: string | undefined
  duration?: number | undefined
  task_status_order?: number | undefined
  rate?: number | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  is_date_based?: boolean | undefined
  calculated_start_date?: string | undefined
  invoice_documents?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  hash?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  status_id?: string | undefined
  status_order?: number | undefined
  status_sort_order?: number | undefined
  tags?: TagAssignment[] | undefined
}
type PurchaseOrder = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  vendor_id?: string | undefined
  status_id?: string | undefined
  number?: string | undefined
  quote_number?: string | undefined
  terms?: string | undefined
  public_notes?: string | undefined
  private_notes?: string | undefined
  footer?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  total_taxes?: number | undefined
  line_items?: InvoiceItem[] | undefined
  amount?: number | undefined
  balance?: number | undefined
  paid_to_date?: number | undefined
  discount?: number | undefined
  partial?: number | undefined
  is_amount_discount?: boolean | undefined
  is_deleted?: boolean | undefined
  uses_inclusive_taxes?: boolean | undefined
  date?: string | undefined
  last_sent_date?: string | undefined
  next_send_date?: string | undefined
  partial_due_date?: string | undefined
  due_date?: string | undefined
  settings?: CompanySettings | undefined
  last_viewed?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  custom_surcharge1?: number | undefined
  custom_surcharge2?: number | undefined
  custom_surcharge3?: number | undefined
  custom_surcharge4?: number | undefined
  custom_surcharge_tax1?: boolean | undefined
  custom_surcharge_tax2?: boolean | undefined
  custom_surcharge_tax3?: boolean | undefined
  custom_surcharge_tax4?: boolean | undefined
  backup?: string | undefined
  client_id?: string | undefined
  currency_id?: string | undefined
  design_id?: string | undefined
  exchange_rate?: number | undefined
  invoice_id?: string | undefined
  quote_id?: string | undefined
  location_id?: string | undefined
  po_number?: string | undefined
  project_id?: string | undefined
  recurring_id?: string | undefined
  reminder1_sent?: number | undefined
  reminder2_sent?: number | undefined
  reminder3_sent?: number | undefined
  reminder_last_sent?: number | undefined
}
type VendorContact = {
  id?: string | undefined
  user_id?: string | undefined
  vendor_id?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  contact_key?: string | undefined
  confirmation_code?: string | undefined
  phone?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  email?: string | undefined
  email_verified_at?: number | undefined
  password?: string | undefined
  is_primary?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  deleted_at?: number | undefined
  send_email?: boolean | undefined
  cc_only?: boolean | undefined
  can_sign?: boolean | undefined
}
type Vendor = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  contacts?: VendorContact[] | undefined
  name?: string | undefined
  classification?: string | undefined
  website?: string | undefined
  private_notes?: string | undefined
  industry_id?: string | undefined
  size_id?: string | undefined
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postal_code?: string | undefined
  phone?: string | undefined
  country_id?: string | undefined
  currency_id?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  vat_number?: string | undefined
  id_number?: string | undefined
  number?: string | undefined
  is_deleted?: boolean | undefined
  language_id?: string | undefined
  vendor_hash?: string | undefined
  transaction_name?: string | undefined
  last_login?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  display_name?: string | undefined
  is_tax_exempt?: boolean | undefined
  public_notes?: string | undefined
  routing_id?: string | undefined
}
type Activity = {
  id?: string | undefined
  activity_type_id?: string | undefined
  client_id?: string | undefined
  company_id?: string | undefined
  user_id?: string | undefined
  invoice_id?: string | undefined
  payment_id?: string | undefined
  credit_id?: string | undefined
  updated_at?: number | undefined
  expense_id?: string | undefined
  is_system?: boolean | undefined
  contact_id?: string | undefined
  task_id?: string | undefined
  notes?: string | undefined
  token_id?: string | undefined
  ip?: string | undefined
  user?: User | undefined
  client?: Client | undefined
  contact?: ClientContact | undefined
  recurring_invoice?: RecurringInvoice | undefined
  invoice?: Invoice | undefined
  credit?: Credit | undefined
  quote?: Quote | undefined
  payment?: Payment | undefined
  expense?: Expense | undefined
  task?: Task | undefined
  purchase_order?: PurchaseOrder | undefined
  vendor?: Vendor | undefined
  vendor_contact?: VendorContact | undefined
}
type Pagination = {
  total?: number | undefined
  count?: number | undefined
  per_page?: number | undefined
  current_page?: number | undefined
  total_pages?: number | undefined
  links?: { [x: string]: unknown } | undefined
}
type Meta = { pagination?: Pagination | undefined }
type BankIntegration = {
  id?: string | undefined
  user_id?: string | undefined
  provider_bank_name?: string | undefined
  bank_account_id?: number | undefined
  bank_account_name?: string | undefined
  bank_account_number?: string | undefined
  bank_account_status?: string | undefined
  bank_account_type?: string | undefined
  balance?: number | undefined
  currency?: string | undefined
}
type BankTransaction = {
  id?: string | undefined
  user_id?: string | undefined
  transaction_id?: number | undefined
  amount?: number | undefined
  currency_id?: string | undefined
  account_type?: string | undefined
  description?: string | undefined
  category_id?: number | undefined
  category_type?: string | undefined
  base_type?: string | undefined
  date?: string | undefined
  bank_account_id?: number | undefined
}
type BTRules = {
  data_key?: string | undefined
  operator?: string | undefined
  value?: string | undefined
}
type BankTransactionRule = {
  id?: string | undefined
  user_id?: string | undefined
  name?: string | undefined
  rules?: BTRules[] | undefined
  auto_convert?: boolean | undefined
  matches_on_all?: boolean | undefined
  applies_to?: string | undefined
  client_id?: string | undefined
  vendor_id?: string | undefined
  category_id?: string | undefined
}
type ClientGatewayToken = {
  id?: string | undefined
  client_id?: string | undefined
  token?: string | undefined
  routing_number?: string | undefined
  company_gateway_id?: string | undefined
  is_default?: boolean | undefined
}
type FeesAndLimits = {
  min_limit?: string | undefined
  max_limit?: string | undefined
  fee_amount?: number | undefined
  fee_percent?: number | undefined
  fee_tax_name1?: string | undefined
  fee_tax_name2?: string | undefined
  fee_tax_name3?: string | undefined
  fee_tax_rate1?: number | undefined
  fee_tax_rate2?: number | undefined
  fee_tax_rate3?: number | undefined
  fee_cap?: number | undefined
  adjust_fee_percent?: boolean | undefined
}
type CompanyGateway = {
  id?: string | undefined
  gateway_key?: string | undefined
  accepted_credit_cards?: number | undefined
  require_billing_address?: boolean | undefined
  require_shipping_address?: boolean | undefined
  config?: string | undefined
  update_details?: boolean | undefined
  fees_and_limits?: FeesAndLimits[] | undefined
}
type CompanyLedger = {
  entity_id?: string | undefined
  notes?: string | undefined
  balance?: number | undefined
  adjustment?: number | undefined
  updated_at?: number | undefined
  created_at?: number | undefined
}
type Design = {
  id?: string | undefined
  name?: string | undefined
  design?: string | undefined
  is_custom?: boolean | undefined
  is_active?: boolean | undefined
  is_deleted?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  deleted_at?: number | undefined
}
type Document = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  project_id?: string | undefined
  vendor_id?: string | undefined
  name?: string | undefined
  url?: string | undefined
  preview?: string | undefined
  type?: string | undefined
  disk?: string | undefined
  hash?: string | undefined
  is_deleted?: boolean | undefined
  is_default?: boolean | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  deleted_at?: number | undefined
}
type Template = { html?: string | undefined }
type ExpenseCategory = {
  id?: string | undefined
  name?: string | undefined
  user_id?: string | undefined
  is_deleted?: boolean | undefined
  updated_at?: number | undefined
  created_at?: number | undefined
}
type Webhook = {
  id?: string | undefined
  event_id?: string | undefined
  target_url?: string | undefined
  format?: string | undefined
}
type GroupSetting = {
  id?: string | undefined
  user_id?: string | undefined
  name?: string | undefined
  settings?: { [x: string]: unknown } | undefined
}
type PaymentTerm = {
  num_days?: number | undefined
  name?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
}
type RecurringExpense = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  invoice_id?: string | undefined
  bank_id?: string | undefined
  invoice_currency_id?: string | undefined
  expense_currency_id?: string | undefined
  invoice_category_id?: string | undefined
  payment_type_id?: string | undefined
  private_notes?: string | undefined
  public_notes?: string | undefined
  transaction_reference?: string | undefined
  transcation_id?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  amount?: number | undefined
  frequency_id?: number | undefined
  remaining_cycles?: number | undefined
  foreign_amount?: number | undefined
  exchange_rate?: number | undefined
  date?: string | undefined
  payment_date?: string | undefined
  should_be_invoiced?: boolean | undefined
  is_deleted?: boolean | undefined
  last_sent_date?: string | undefined
  next_send_date?: string | undefined
  invoice_documents?: boolean | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  calculate_tax_by_amount?: boolean | undefined
  category_id?: string | undefined
  currency_id?: string | undefined
  next_send_date_client?: string | undefined
  number?: string | undefined
  project_id?: string | undefined
  tax_amount1?: number | undefined
  tax_amount2?: number | undefined
  tax_amount3?: number | undefined
  transaction_id?: string | undefined
  uses_inclusive_taxes?: boolean | undefined
  vendor_id?: string | undefined
}
type RecurringQuote = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  status_id?: string | undefined
  frequency_id?: number | undefined
  remaining_cycles?: number | undefined
  number?: string | undefined
  po_number?: string | undefined
  terms?: string | undefined
  public_notes?: string | undefined
  private_notes?: string | undefined
  footer?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  total_taxes?: number | undefined
  line_items?: { [x: string]: unknown } | undefined
  amount?: number | undefined
  balance?: number | undefined
  paid_to_date?: number | undefined
  discount?: number | undefined
  partial?: number | undefined
  is_amount_discount?: boolean | undefined
  is_deleted?: boolean | undefined
  uses_inclusive_taxes?: boolean | undefined
  date?: string | undefined
  last_sent_date?: string | undefined
  next_send_date?: string | undefined
  partial_due_date?: string | undefined
  due_date?: string | undefined
  settings?: CompanySettings | undefined
  last_viewed?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  custom_surcharge1?: number | undefined
  custom_surcharge2?: number | undefined
  custom_surcharge3?: number | undefined
  custom_surcharge4?: number | undefined
  custom_surcharge_tax1?: boolean | undefined
  custom_surcharge_tax2?: boolean | undefined
  custom_surcharge_tax3?: boolean | undefined
  custom_surcharge_tax4?: boolean | undefined
}
type GenericReportSchema = {
  date_range?: string | undefined
  date_key?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  report_keys?: string[] | undefined
}
type Subscription = {
  id?: string | undefined
  user_id?: string | undefined
  product_id?: string | undefined
  recurring_invoice_id?: string | undefined
  is_recurring?: boolean | undefined
  frequency_id?: string | undefined
  auto_bill?: string | undefined
  promo_code?: string | undefined
  promo_discount?: number | undefined
  is_amount_discount?: boolean | undefined
  allow_cancellation?: boolean | undefined
  per_seat_enabled?: boolean | undefined
  currency_id?: number | undefined
  max_seats_limit?: number | undefined
  trial_enabled?: boolean | undefined
  trial_duration?: number | undefined
  allow_query_overrides?: boolean | undefined
  allow_plan_changes?: boolean | undefined
  refund_period?: number | undefined
  webhook_configuration?: string | undefined
  is_deleted?: boolean | undefined
  archived_at?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type InvalidInputError = {
  message?: string | undefined
  errors?: { value?: string[] | undefined } | undefined
}
type SystemLog = {
  id?: string | undefined
  user_id?: string | undefined
  client_id?: string | undefined
  event_id?: number | undefined
  category_id?: number | undefined
  type_id?: number | undefined
  log?: { [x: string]: unknown } | undefined
  updated_at?: string | undefined
  created_at?: string | undefined
}
type TaskSchedulerSchema = {
  paused?: boolean | undefined
  repeat_every?: string | undefined
  start_from?: number | undefined
  job?: string | undefined
  date_range?: string | undefined
  date_key?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  report_keys?: string[] | undefined
}
type TaskStatus = {
  id?: string | undefined
  name?: string | undefined
  color?: string | undefined
  task_status_order?: number | undefined
  created_at?: number | undefined
  is_deleted?: boolean | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
}
type TaxRate = {
  id?: string | undefined
  name?: string | undefined
  rate?: number | undefined
  is_deleted?: boolean | undefined
}
type CreditInvitationRequest = {
  id?: string | undefined
  client_contact_id: string
  key?: string | undefined
  link?: string | undefined
  sent_date?: string | undefined
  viewed_date?: string | undefined
  opened_date?: string | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  email_error?: string | undefined
  email_status?: string | undefined
}
type CreditRequest = {
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id: string
  number?: string | undefined
  po_number?: string | undefined
  terms?: string | undefined
  public_notes?: string | undefined
  private_notes?: string | undefined
  footer?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  line_items?: InvoiceItem[] | undefined
  invitations?: CreditInvitationRequest[] | undefined
  discount?: number | undefined
  partial?: number | undefined
  is_amount_discount?: boolean | undefined
  uses_inclusive_taxes?: boolean | undefined
  date?: string | undefined
  partial_due_date?: string | undefined
  due_date?: string | undefined
  custom_surcharge1?: number | undefined
  custom_surcharge2?: number | undefined
  custom_surcharge3?: number | undefined
  custom_surcharge4?: number | undefined
  custom_surcharge_tax1?: boolean | undefined
  custom_surcharge_tax2?: boolean | undefined
  custom_surcharge_tax3?: boolean | undefined
  custom_surcharge_tax4?: boolean | undefined
  project_id?: string | undefined
}
type Tag = {
  id: string
  entity_type: 'App\\Models\\Task' | 'App\\Models\\Project'
  name: string
  color: string | null
  is_deleted: boolean
  created_at?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
}
type TagRequest = {
  entity_type: 'App\\Models\\Task' | 'App\\Models\\Project'
  name: string
  color?: (string | null) | undefined
}
type TagBulkAction = { ids: string[]; action?: 'archive' | 'restore' | 'delete' | undefined }
type Location = {
  id?: string | undefined
  name?: string | undefined
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postal_code?: string | undefined
  country_id?: string | undefined
  custom_value1?: (string | null) | undefined
  custom_value2?: (string | null) | undefined
  custom_value3?: (string | null) | undefined
  custom_value4?: (string | null) | undefined
  is_deleted?: boolean | undefined
  is_shipping_location?: boolean | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  vendor_id?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
}
type LocationRequest = {
  name?: string | undefined
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postal_code?: string | undefined
  country_id?: string | undefined
  custom_value1?: (string | null) | undefined
  custom_value2?: (string | null) | undefined
  custom_value3?: (string | null) | undefined
  custom_value4?: (string | null) | undefined
  is_shipping_location?: boolean | undefined
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  vendor_id?: string | undefined
}
type GenericBulkAction = { action?: string | undefined; ids?: string[] | undefined }
type RecurringInvoiceRequest = {
  client_id: string
  date: string
  due_date: string
  frequency_id: string
  remaining_cycles?: string | undefined
  private_notes?: string | undefined
  public_notes?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  line_items?: InvoiceItem[] | undefined
}
type TaskRequest = {
  description: string
  client_id?: string | undefined
  project_id?: string | undefined
  time_log?: string | undefined
  status_id?: number | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  is_deleted?: boolean | undefined
  archived_at?: number | undefined
  due_date?: string | undefined
  priority?: number | undefined
  tags?: string[] | undefined
}
type TaskSortRequest = {
  task_ids: string[]
  status_id?: number | undefined
  sort_order?: string[] | undefined
}
type QuoteRequest = {
  client_id: string
  date: string
  due_date: string
  private_notes?: string | undefined
  public_notes?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  line_items?: InvoiceItem[] | undefined
}
type InvoiceInvitationRequest = {
  id?: string | undefined
  client_contact_id: string
  key?: string | undefined
  link?: string | undefined
  sent_date?: string | undefined
  viewed_date?: string | undefined
  opened_date?: string | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  email_error?: string | undefined
  email_status?: string | undefined
}
type InvoiceRequest = {
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  client_id: string
  location_id?: string | undefined
  number?: string | undefined
  po_number?: string | undefined
  terms?: string | undefined
  public_notes?: string | undefined
  private_notes?: string | undefined
  footer?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  tax_name1?: string | undefined
  tax_name2?: string | undefined
  tax_rate1?: number | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  line_items?: InvoiceItem[] | undefined
  invitations?: InvoiceInvitationRequest[] | undefined
  discount?: number | undefined
  partial?: number | undefined
  is_amount_discount?: boolean | undefined
  uses_inclusive_taxes?: boolean | undefined
  date?: string | undefined
  partial_due_date?: string | undefined
  due_date?: string | undefined
  custom_surcharge1?: number | undefined
  custom_surcharge2?: number | undefined
  custom_surcharge3?: number | undefined
  custom_surcharge4?: number | undefined
  custom_surcharge_tax1?: boolean | undefined
  custom_surcharge_tax2?: boolean | undefined
  custom_surcharge_tax3?: boolean | undefined
  custom_surcharge_tax4?: boolean | undefined
  project_id?: string | undefined
}
type Project = {
  id: string
  user_id: string
  assigned_user_id?: string | undefined
  client_id?: string | undefined
  name: string
  task_rate: number
  due_date?: string | undefined
  private_notes?: string | undefined
  budgeted_hours: number
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  archived_at?: number | undefined
  public_notes?: string | undefined
  is_deleted: boolean
  number?: string | undefined
  color: string
  tags?: TagAssignment[] | undefined
}
type ProjectRequest = {
  name: string
  client_id: string
  description?: string | undefined
  budgeted_hours?: number | undefined
  task_rate?: number | undefined
  due_date?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  is_deleted?: boolean | undefined
  archived_at?: number | undefined
  color?: string | undefined
  tags?: string[] | undefined
}
type VendorRequest = {
  name: string
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postal_code?: string | undefined
  country_id?: string | undefined
  phone?: string | undefined
  email?: string | undefined
  website?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  is_deleted?: boolean | undefined
  archived_at?: number | undefined
  contacts?:
    | {
        first_name?: string | undefined
        last_name?: string | undefined
        email?: string | undefined
        phone?: string | undefined
        send_email?: boolean | undefined
      }[]
    | undefined
}
type PaymentRequest = {
  client_id?: string | undefined
  client_contact_id?: string | undefined
  user_id?: string | undefined
  type_id?: PaymentType | undefined
  date?: string | undefined
  transaction_reference?: string | undefined
  assigned_user_id?: string | undefined
  private_notes?: string | undefined
  amount?: number | undefined
  invoices?: InvoicePaymentable[] | undefined
  credits?: CreditPaymentable[] | undefined
  number?: string | undefined
}
type ClientContactRequest = {
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  email?: string | undefined
  password?: string | undefined
  send_email?: boolean | undefined
  cc_only?: boolean | undefined
  can_sign?: boolean | undefined
}
type ClientRequest = {
  id?: string | undefined
  contacts: ClientContactRequest[]
  name?: string | undefined
  website?: string | undefined
  private_notes?: string | undefined
  industry_id?: number | undefined
  size_id?: number | undefined
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postal_code?: string | undefined
  phone?: string | undefined
  country_id: CountryType
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  vat_number?: string | undefined
  id_number?: string | undefined
  number?: string | undefined
  shipping_address1?: string | undefined
  shipping_address2?: string | undefined
  shipping_city?: string | undefined
  shipping_state?: string | undefined
  shipping_postal_code?: string | undefined
  shipping_country_id?: number | undefined
  is_deleted?: boolean | undefined
  group_settings_id?: string | undefined
  routing_id?: string | undefined
  is_tax_exempt?: boolean | undefined
  has_valid_vat_number?: boolean | undefined
  classification?: string | undefined
  settings?: ClientSettings | undefined
}
type PurchaseOrderRequest = {
  vendor_id: string
  date: string
  due_date: string
  private_notes?: string | undefined
  public_notes?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  line_items?:
    | {
        quantity?: number | undefined
        cost?: number | undefined
        product_key?: string | undefined
        notes?: string | undefined
        discount?: number | undefined
        is_amount_discount?: boolean | undefined
        tax_name1?: string | undefined
        tax_rate1?: number | undefined
        tax_name2?: string | undefined
        tax_rate2?: number | undefined
        tax_name3?: string | undefined
        tax_rate3?: number | undefined
        sort_id?: string | undefined
        custom_value1?: string | undefined
        custom_value2?: string | undefined
        custom_value3?: string | undefined
        custom_value4?: string | undefined
        type_id?: string | undefined
        tax_id?: string | undefined
      }[]
    | undefined
}
type Product = {
  id?: string | undefined
  user_id?: string | undefined
  assigned_user_id?: string | undefined
  project_id?: string | undefined
  vendor_id?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  product_key?: string | undefined
  notes?: string | undefined
  cost?: number | undefined
  price?: number | undefined
  quantity?: number | undefined
  tax_name1?: string | undefined
  tax_rate1?: number | undefined
  tax_name2?: string | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  archived_at?: number | undefined
  created_at?: number | undefined
  updated_at?: number | undefined
  is_deleted?: boolean | undefined
  in_stock_quantity?: number | undefined
  stock_notification?: boolean | undefined
  stock_notification_threshold?: number | undefined
  max_quantity?: number | undefined
  product_image?: string | undefined
  tax_id?: string | undefined
  income_account_id?: string | undefined
}
type ProductRequest = {
  assigned_user_id?: string | undefined
  project_id?: string | undefined
  vendor_id?: string | undefined
  custom_value1?: string | undefined
  custom_value2?: string | undefined
  custom_value3?: string | undefined
  custom_value4?: string | undefined
  product_key?: string | undefined
  notes?: string | undefined
  cost?: number | undefined
  price?: number | undefined
  quantity?: number | undefined
  tax_name1?: string | undefined
  tax_rate1?: number | undefined
  tax_name2?: string | undefined
  tax_rate2?: number | undefined
  tax_name3?: string | undefined
  tax_rate3?: number | undefined
  in_stock_quantity?: number | undefined
  stock_notification?: boolean | undefined
  stock_notification_threshold?: number | undefined
  max_quantity?: number | undefined
  product_image?: string | undefined
  tax_id?: string | undefined
  income_account_id?: string | undefined
}
type ProductBulkAction = { action: string; ids: string[]; tax_id?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/login': {
      $post:
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & {
              header: {
                'X-API-SECRET'?: string | undefined
                'X-API-TOKEN': string
                'X-Requested-With': string
              }
            } & {
              json: {
                email: string
                password?: string | undefined
                one_time_password?: string | undefined
                passkey_challenge_token?: string | undefined
                passkey_authentication?: { [x: string]: unknown } | undefined
              }
            }
            output: CompanyUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & {
              header: {
                'X-API-SECRET'?: string | undefined
                'X-API-TOKEN': string
                'X-Requested-With': string
              }
            } & {
              json: {
                email: string
                password?: string | undefined
                one_time_password?: string | undefined
                passkey_challenge_token?: string | undefined
                passkey_authentication?: { [x: string]: unknown } | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & {
              header: {
                'X-API-SECRET'?: string | undefined
                'X-API-TOKEN': string
                'X-Requested-With': string
              }
            } & {
              json: {
                email: string
                password?: string | undefined
                one_time_password?: string | undefined
                passkey_challenge_token?: string | undefined
                passkey_authentication?: { [x: string]: unknown } | undefined
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & {
              header: {
                'X-API-SECRET'?: string | undefined
                'X-API-TOKEN': string
                'X-Requested-With': string
              }
            } & {
              json: {
                email: string
                password?: string | undefined
                one_time_password?: string | undefined
                passkey_challenge_token?: string | undefined
                passkey_authentication?: { [x: string]: unknown } | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & {
              header: {
                'X-API-SECRET'?: string | undefined
                'X-API-TOKEN': string
                'X-Requested-With': string
              }
            } & {
              json: {
                email: string
                password?: string | undefined
                one_time_password?: string | undefined
                passkey_challenge_token?: string | undefined
                passkey_authentication?: { [x: string]: unknown } | undefined
              }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & {
              header: {
                'X-API-SECRET'?: string | undefined
                'X-API-TOKEN': string
                'X-Requested-With': string
              }
            } & {
              json: {
                email: string
                password?: string | undefined
                one_time_password?: string | undefined
                passkey_challenge_token?: string | undefined
                passkey_authentication?: { [x: string]: unknown } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & {
              header: {
                'X-API-SECRET'?: string | undefined
                'X-API-TOKEN': string
                'X-Requested-With': string
              }
            } & {
              json: {
                email: string
                password?: string | undefined
                one_time_password?: string | undefined
                passkey_challenge_token?: string | undefined
                passkey_authentication?: { [x: string]: unknown } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/activities': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Activity[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/activities/download_entity/:activity_id': {
      $get:
        | {
            input: { param: { activity_id: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { activity_id: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { activity_id: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { activity_id: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { activity_id: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { activity_id: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/activities/entity': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/activities/notes': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/passkeys/login/options': {
      $post:
        | { input: { json: { email: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: { email: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { email: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { email: string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | { input: { json: { email: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/settings/passkeys': {
      $get:
        | {
            input: { header: { 'X-API-TOKEN': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string } } & {
              json: {
                challenge_token: string
                credential: { [x: string]: unknown }
                name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string } } & {
              json: {
                challenge_token: string
                credential: { [x: string]: unknown }
                name?: string | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string } } & {
              json: {
                challenge_token: string
                credential: { [x: string]: unknown }
                name?: string | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string } } & {
              json: {
                challenge_token: string
                credential: { [x: string]: unknown }
                name?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/settings/passkeys/options': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/settings/passkeys/:passkey': {
      $delete:
        | {
            input: { param: { passkey: string } } & { header: { 'X-API-TOKEN': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { passkey: string } } & { header: { 'X-API-TOKEN': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { passkey: string } } & { header: { 'X-API-TOKEN': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { passkey: string } } & { header: { 'X-API-TOKEN': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/refresh': {
      $post:
        | {
            input: {
              query: {
                updated_at: number
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: CompanyUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                updated_at: number
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                updated_at: number
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                updated_at: number
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                updated_at: number
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                updated_at: number
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                updated_at: number
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/yodlee/refresh': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_integrations': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: BankIntegration[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_integrations/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_integrations/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_integrations/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_integrations/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_integrations/refresh_accounts': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_integrations/remove_account/account_id': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_integrations/get_transactions/account_id': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transactions': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: BankTransaction[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transactions/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transactions/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transactions/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transactions/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transactions/match': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transaction_rules': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: BankTransactionRule[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransactionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transaction_rules/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransactionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransactionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transaction_rules/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransactionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transaction_rules/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: BankTransactionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/bank_transaction_rules/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/charts/totals': {
      $post:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                rows?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/charts/totals_v2': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/charts/chart_summary_v2': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/charts/calculated_fields': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/client_gateway_tokens': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: ClientGatewayToken[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ClientGatewayToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/client_gateway_tokens/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ClientGatewayToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ClientGatewayToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/client_gateway_tokens/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ClientGatewayToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/client_gateway_tokens/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ClientGatewayToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/companies': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Company[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/companies/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/companies/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/companies/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/companies/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/companies/:company/default': {
      $post:
        | {
            input: { param: { company: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { company: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { company: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { company: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { company: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/companies/current': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Company
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company_gateways': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: CompanyGateway[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyGateway
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company_gateways/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyGateway
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company_gateways/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyGateway
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyGateway
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company_gateways/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyGateway
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company_gateways/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: CompanyGateway
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company_ledger': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: { data?: CompanyLedger[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/company_users': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: CompanyUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/connected_account': {
      $post:
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                include_static?: string | undefined
                clear_cache?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/designs': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Design[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Design
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/designs/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Design
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Design
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/designs/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Design
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/designs/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Design
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/designs/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Design
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/documents': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Document[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/emails': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & {
              json: {
                subject?: string | undefined
                body?: string | undefined
                entity: string
                entity_id: string
                cc_email?: string | undefined
                template:
                  | 'email_template_invoice'
                  | 'email_template_quote'
                  | 'email_template_credit'
                  | 'email_template_payment'
                  | 'email_template_payment_partial'
                  | 'email_template_statement'
                  | 'email_template_reminder1'
                  | 'email_template_reminder2'
                  | 'email_template_reminder3'
                  | 'email_template_reminder_endless'
                  | 'email_template_custom1'
                  | 'email_template_custom2'
                  | 'email_template_custom3'
                  | 'email_template_purchase_order'
                  | 'email_quote_template_reminder1'
              }
            }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & {
              json: {
                subject?: string | undefined
                body?: string | undefined
                entity: string
                entity_id: string
                cc_email?: string | undefined
                template:
                  | 'email_template_invoice'
                  | 'email_template_quote'
                  | 'email_template_credit'
                  | 'email_template_payment'
                  | 'email_template_payment_partial'
                  | 'email_template_statement'
                  | 'email_template_reminder1'
                  | 'email_template_reminder2'
                  | 'email_template_reminder3'
                  | 'email_template_reminder_endless'
                  | 'email_template_custom1'
                  | 'email_template_custom2'
                  | 'email_template_custom3'
                  | 'email_template_purchase_order'
                  | 'email_quote_template_reminder1'
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & {
              json: {
                subject?: string | undefined
                body?: string | undefined
                entity: string
                entity_id: string
                cc_email?: string | undefined
                template:
                  | 'email_template_invoice'
                  | 'email_template_quote'
                  | 'email_template_credit'
                  | 'email_template_payment'
                  | 'email_template_payment_partial'
                  | 'email_template_statement'
                  | 'email_template_reminder1'
                  | 'email_template_reminder2'
                  | 'email_template_reminder3'
                  | 'email_template_reminder_endless'
                  | 'email_template_custom1'
                  | 'email_template_custom2'
                  | 'email_template_custom3'
                  | 'email_template_purchase_order'
                  | 'email_quote_template_reminder1'
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & {
              json: {
                subject?: string | undefined
                body?: string | undefined
                entity: string
                entity_id: string
                cc_email?: string | undefined
                template:
                  | 'email_template_invoice'
                  | 'email_template_quote'
                  | 'email_template_credit'
                  | 'email_template_payment'
                  | 'email_template_payment_partial'
                  | 'email_template_statement'
                  | 'email_template_reminder1'
                  | 'email_template_reminder2'
                  | 'email_template_reminder3'
                  | 'email_template_reminder_endless'
                  | 'email_template_custom1'
                  | 'email_template_custom2'
                  | 'email_template_custom3'
                  | 'email_template_purchase_order'
                  | 'email_quote_template_reminder1'
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & {
              json: {
                subject?: string | undefined
                body?: string | undefined
                entity: string
                entity_id: string
                cc_email?: string | undefined
                template:
                  | 'email_template_invoice'
                  | 'email_template_quote'
                  | 'email_template_credit'
                  | 'email_template_payment'
                  | 'email_template_payment_partial'
                  | 'email_template_statement'
                  | 'email_template_reminder1'
                  | 'email_template_reminder2'
                  | 'email_template_reminder3'
                  | 'email_template_reminder_endless'
                  | 'email_template_custom1'
                  | 'email_template_custom2'
                  | 'email_template_custom3'
                  | 'email_template_purchase_order'
                  | 'email_quote_template_reminder1'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expense_categories': {
      $get:
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: { data?: ExpenseCategory[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ExpenseCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expense_categories/create': {
      $get:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ExpenseCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expense_categories/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ExpenseCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ExpenseCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expense_categories/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ExpenseCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expense_categories/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expenses': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Expense[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Expense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expenses/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Expense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Expense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expenses/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Expense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expenses/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Expense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expenses/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Expense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/expenses/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Expense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/export': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/group_settings': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: GroupSetting[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: GroupSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/group_settings/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: GroupSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/group_settings/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: GroupSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: GroupSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/group_settings/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: GroupSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/group_settings/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/group_settings/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/preimport': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                import_type: string
                'files[invoice]'?: File | undefined
                'files[client]'?: File | undefined
                'files[product]'?: File | undefined
                'files[payment]'?: File | undefined
                'files[vendor]'?: File | undefined
                'files[expense]'?: File | undefined
              }
            }
            output: {
              hash?: string | undefined
              mappings?:
                | {
                    [x: string]: {
                      available?: string[] | undefined
                      headers?: string[][] | undefined
                      hints?: (number | null)[] | undefined
                    }
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                import_type: string
                'files[invoice]'?: File | undefined
                'files[client]'?: File | undefined
                'files[product]'?: File | undefined
                'files[payment]'?: File | undefined
                'files[vendor]'?: File | undefined
                'files[expense]'?: File | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                import_type: string
                'files[invoice]'?: File | undefined
                'files[client]'?: File | undefined
                'files[product]'?: File | undefined
                'files[payment]'?: File | undefined
                'files[vendor]'?: File | undefined
                'files[expense]'?: File | undefined
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                import_type: string
                'files[invoice]'?: File | undefined
                'files[client]'?: File | undefined
                'files[product]'?: File | undefined
                'files[payment]'?: File | undefined
                'files[vendor]'?: File | undefined
                'files[expense]'?: File | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                import_type: string
                'files[invoice]'?: File | undefined
                'files[client]'?: File | undefined
                'files[product]'?: File | undefined
                'files[payment]'?: File | undefined
                'files[vendor]'?: File | undefined
                'files[expense]'?: File | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/import': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                hash: string
                import_type: string
                skip_header?: boolean | undefined
                column_map: { [x: string]: { mapping?: { [x: string]: string } | undefined } }
              }
            }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                hash: string
                import_type: string
                skip_header?: boolean | undefined
                column_map: { [x: string]: { mapping?: { [x: string]: string } | undefined } }
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                hash: string
                import_type: string
                skip_header?: boolean | undefined
                column_map: { [x: string]: { mapping?: { [x: string]: string } | undefined } }
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                hash: string
                import_type: string
                skip_header?: boolean | undefined
                column_map: { [x: string]: { mapping?: { [x: string]: string } | undefined } }
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                hash: string
                import_type: string
                skip_header?: boolean | undefined
                column_map: { [x: string]: { mapping?: { [x: string]: string } | undefined } }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/import_json': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apple/confirm_purchase': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/apple/process_webhook': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/claim_license': {
      $get:
        | {
            input: { query: { license_key: string; product_id: string } } & {
              header: { 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { license_key: string; product_id: string } } & {
              header: { 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { license_key: string; product_id: string } } & {
              header: { 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { license_key: string; product_id: string } } & {
              header: { 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { license_key: string; product_id: string } } & {
              header: { 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/logout': {
      $post:
        | {
            input: { query: { include?: string | undefined; index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { include?: string | undefined; index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined; index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined; index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined; index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/migration/purge/:company': {
      $post:
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/migration/purge_save_settings/:company': {
      $post:
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { company: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/migration/start': {
      $post:
        | {
            input: { query: { migration: { [x: string]: unknown } } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { migration: { [x: string]: unknown } } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { migration: { [x: string]: unknown } } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { migration: { [x: string]: unknown } } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { migration: { [x: string]: unknown } } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/one_time_token': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payment_terms': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: PaymentTerm[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PaymentTerm }
            output: PaymentTerm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PaymentTerm }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PaymentTerm }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PaymentTerm }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PaymentTerm }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payment_terms/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payment_terms/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: PaymentTerm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: PaymentTerm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payment_terms/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: PaymentTerm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payment_terms/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: PaymentTerm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/ping': {
      $get:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/health_check': {
      $get:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/last_error': {
      $get:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/postmark_webhook': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/preview': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/preview/purchase_order': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_expenses': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: RecurringExpense[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringExpense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_expenses/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringExpense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringExpense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_expenses/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringExpense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_expenses/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringExpense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_expenses/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RecurringExpense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_expenses/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RecurringExpense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_quotes': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: RecurringQuote[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_quotes/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_quotes/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_quotes/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_quotes/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RecurringQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_quotes/:id/:action': {
      $get:
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RecurringQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/contacts': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/clients': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/credits': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/documents': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/expenses': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/invoice_items': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/invoices': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/payments': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/products': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/product_sales': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/profitloss': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/quote_items': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/quotes': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/recurring_invoices': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/tasks': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/activities': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/client_contacts': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/ar_detail_report': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/ar_summary_report': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/client_balance_report': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/client_sales_report': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/tax_summary_report': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/tax_period_report': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/user_sales_report': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/projects': {
      $post:
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } } & { json: GenericReportSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reports/preview/:hash': {
      $post:
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/exports/preview/:hash': {
      $post:
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/self-update': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: {
                'X-API-TOKEN': string
                'X-API-PASSWORD': string
                'X-Requested-With': string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: {
                'X-API-TOKEN': string
                'X-API-PASSWORD': string
                'X-Requested-With': string
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: {
                'X-API-TOKEN': string
                'X-API-PASSWORD': string
                'X-Requested-With': string
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: {
                'X-API-TOKEN': string
                'X-API-PASSWORD': string
                'X-Requested-With': string
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: {
                'X-API-TOKEN': string
                'X-API-PASSWORD': string
                'X-Requested-With': string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/self-update/check_version': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/statics': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Subscription[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/subscriptions/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/scheduler': {
      $get:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/support/messages/send': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: string
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: string
            }
            output: InvalidInputError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: string
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: string
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/system_logs': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: SystemLog[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/system_logs/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: SystemLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_schedulers': {
      $get:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_schedulers/create': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: TaskSchedulerSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_schedulers/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-SECRET'?: string | undefined; 'X-Requested-With': string }
            } & { json: TaskSchedulerSchema }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_schedulers/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: TaskSchedulerSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_statuses': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: TaskStatus[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskStatus }
            output: TaskStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskStatus }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskStatus }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskStatus }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskStatus }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_statuses/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: TaskStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_statuses/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: TaskStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: TaskStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_statuses/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: TaskStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/task_statuses/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: TaskStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tax_rates': {
      $get:
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: { data?: TaxRate[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tax_rates/create': {
      $get:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: TaxRate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tax_rates/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: TaxRate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: TaxRate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tax_rates/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: TaxRate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tax_rates/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/templates': {
      $post:
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: { subject?: string | undefined; body?: string | undefined } }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: { subject?: string | undefined; body?: string | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: { subject?: string | undefined; body?: string | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: { subject?: string | undefined; body?: string | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { per_page?: number | undefined; page?: number | undefined } } & {
              header: { 'X-Requested-With': string }
            } & { json: { subject?: string | undefined; body?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/templates/preview/:hash': {
      $post:
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { hash: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/search': {
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tokens': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: CompanyToken[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tokens/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tokens/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tokens/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: CompanyToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tokens/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: CompanyToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/users': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: User[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/users/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/users/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { include?: string | undefined; token_name?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string | undefined; token_name?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string | undefined; token_name?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string | undefined; token_name?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string | undefined; token_name?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/users/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/users/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/users/:user/detach_from_company': {
      $delete:
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/users/:user/invite': {
      $post:
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/users/:user/reconfirm': {
      $post:
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/webcron': {
      $get:
        | {
            input: { header: { 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/webhooks': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Webhook[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/webhooks/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/webhooks/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/webhooks/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/webhooks/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/credits': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Credit[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: CreditRequest }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: CreditRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: CreditRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: CreditRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: CreditRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: CreditRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: CreditRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/credits/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/credits/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/credits/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/credits/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: string[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: string[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: string[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: string[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/credit/:invitation_key/download': {
      $get:
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/credits/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tags': {
      $get:
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                entity_type: 'task' | 'project'
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Tag[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                entity_type: 'task' | 'project'
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                entity_type: 'task' | 'project'
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                entity_type: 'task' | 'project'
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                entity_type: 'task' | 'project'
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                entity_type: 'task' | 'project'
                filter?: string | undefined
                sort?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: TagRequest
            }
            output: { data?: Tag | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: TagRequest
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: TagRequest
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: TagRequest
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: TagRequest
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: TagRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tags/create': {
      $get:
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Tag | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tags/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: { data?: Tag | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { name?: string | undefined; color?: (string | null) | undefined } }
            output: { data?: Tag | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { name?: string | undefined; color?: (string | null) | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { name?: string | undefined; color?: (string | null) | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { name?: string | undefined; color?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { name?: string | undefined; color?: (string | null) | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { name?: string | undefined; color?: (string | null) | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { name?: string | undefined; color?: (string | null) | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: { data?: Tag | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tags/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: { data?: Tag | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tags/bulk': {
      $post:
        | {
            input: { query: { action: 'archive' | 'restore' | 'delete' } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TagBulkAction }
            output: { data?: Tag[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { action: 'archive' | 'restore' | 'delete' } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TagBulkAction }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { action: 'archive' | 'restore' | 'delete' } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TagBulkAction }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { action: 'archive' | 'restore' | 'delete' } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TagBulkAction }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { action: 'archive' | 'restore' | 'delete' } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TagBulkAction }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { action: 'archive' | 'restore' | 'delete' } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TagBulkAction }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/locations': {
      $get:
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                name?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Location[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                name?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                name?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                name?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                name?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                name?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/locations/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: LocationRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/locations/create': {
      $get:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/locations/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_invoices': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                product_key?: string | undefined
                next_send_between?: string | undefined
                frequency_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: RecurringInvoice[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                product_key?: string | undefined
                next_send_between?: string | undefined
                frequency_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                product_key?: string | undefined
                next_send_between?: string | undefined
                frequency_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                product_key?: string | undefined
                next_send_between?: string | undefined
                frequency_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                product_key?: string | undefined
                next_send_between?: string | undefined
                frequency_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                product_key?: string | undefined
                next_send_between?: string | undefined
                frequency_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                product_key?: string | undefined
                next_send_between?: string | undefined
                frequency_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: RecurringInvoiceRequest }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: RecurringInvoiceRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: RecurringInvoiceRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: RecurringInvoiceRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: RecurringInvoiceRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: RecurringInvoiceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: RecurringInvoiceRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_invoices/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_invoices/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_invoices/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_invoices/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_invoices/:id/:action': {
      $get:
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_invoice/:invitation_key/download': {
      $get:
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/recurring_invoices/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RecurringInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tasks': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Task[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tasks/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tasks/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tasks/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tasks/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tasks/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/tasks/sort': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskSortRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskSortRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskSortRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskSortRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskSortRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskSortRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: TaskSortRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/quotes': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Quote[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/quotes/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: QuoteRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/quotes/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/quotes/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/quotes/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: { action?: string | undefined; ids?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/quotes/:id/:action': {
      $get:
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/quote/:invitation_key/download': {
      $get:
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/quotes/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/invoices': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                without_deleted_clients?: string | undefined
                overdue?: string | undefined
                payable?: string | undefined
                private_notes?: string | undefined
                date?: string | undefined
                date_range?: string | undefined
                status_id?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Invoice[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                without_deleted_clients?: string | undefined
                overdue?: string | undefined
                payable?: string | undefined
                private_notes?: string | undefined
                date?: string | undefined
                date_range?: string | undefined
                status_id?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                without_deleted_clients?: string | undefined
                overdue?: string | undefined
                payable?: string | undefined
                private_notes?: string | undefined
                date?: string | undefined
                date_range?: string | undefined
                status_id?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                without_deleted_clients?: string | undefined
                overdue?: string | undefined
                payable?: string | undefined
                private_notes?: string | undefined
                date?: string | undefined
                date_range?: string | undefined
                status_id?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                without_deleted_clients?: string | undefined
                overdue?: string | undefined
                payable?: string | undefined
                private_notes?: string | undefined
                date?: string | undefined
                date_range?: string | undefined
                status_id?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                without_deleted_clients?: string | undefined
                overdue?: string | undefined
                payable?: string | undefined
                private_notes?: string | undefined
                date?: string | undefined
                date_range?: string | undefined
                status_id?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                client_status?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                without_deleted_clients?: string | undefined
                overdue?: string | undefined
                payable?: string | undefined
                private_notes?: string | undefined
                date?: string | undefined
                date_range?: string | undefined
                status_id?: number | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: InvoiceRequest }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: InvoiceRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: InvoiceRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: InvoiceRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: InvoiceRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: InvoiceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: InvoiceRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/invoices/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/invoices/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/invoices/create': {
      $get:
        | { input: {}; output: Invoice; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AuthenticationError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: AuthorizationError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ValidationError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: RateLimiterError; outputFormat: 'json'; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/invoices/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                email_type?: string | undefined
                action?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                email_type?: string | undefined
                action?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                email_type?: string | undefined
                action?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                email_type?: string | undefined
                action?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                email_type?: string | undefined
                action?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                email_type?: string | undefined
                action?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              json: {
                email_type?: string | undefined
                action?: string | undefined
                ids?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/invoices/:id/:action': {
      $get:
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/invoice/:invitation_key/download': {
      $get:
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/invoices/:id/delivery_note': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/invoices/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/projects': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Project[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/projects/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProjectRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/projects/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/projects/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/projects/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/projects/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vendors': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Vendor[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: Vendor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vendors/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Vendor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: Vendor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: VendorRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vendors/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Vendor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vendors/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Vendor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vendors/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Vendor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/vendors/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Vendor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payments': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Payment[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                number?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: { include?: string | undefined; email_receipt?: boolean | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: PaymentRequest
            }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { include?: string | undefined; email_receipt?: boolean | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: PaymentRequest
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { include?: string | undefined; email_receipt?: boolean | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: PaymentRequest
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { include?: string | undefined; email_receipt?: boolean | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: PaymentRequest
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: { include?: string | undefined; email_receipt?: boolean | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: PaymentRequest
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { include?: string | undefined; email_receipt?: boolean | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: PaymentRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: { include?: string | undefined; email_receipt?: boolean | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: PaymentRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payments/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payments/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payments/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payments/refund': {
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: Payment }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: Payment }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: Payment }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: Payment }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: Payment }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: Payment }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: Payment }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payments/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payments/:id/:action': {
      $get:
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/payments/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                name?: string | undefined
                balance?: string | undefined
                between_balance?: string | undefined
                email?: string | undefined
                id_number?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                group?: string | undefined
                client_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Client[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                name?: string | undefined
                balance?: string | undefined
                between_balance?: string | undefined
                email?: string | undefined
                id_number?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                group?: string | undefined
                client_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                name?: string | undefined
                balance?: string | undefined
                between_balance?: string | undefined
                email?: string | undefined
                id_number?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                group?: string | undefined
                client_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                name?: string | undefined
                balance?: string | undefined
                between_balance?: string | undefined
                email?: string | undefined
                id_number?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                group?: string | undefined
                client_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                name?: string | undefined
                balance?: string | undefined
                between_balance?: string | undefined
                email?: string | undefined
                id_number?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                group?: string | undefined
                client_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                name?: string | undefined
                balance?: string | undefined
                between_balance?: string | undefined
                email?: string | undefined
                id_number?: string | undefined
                number?: string | undefined
                filter?: string | undefined
                group?: string | undefined
                client_id?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ClientRequest }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ClientRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ClientRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ClientRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ClientRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ClientRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: ClientRequest
            }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: ClientRequest
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: ClientRequest
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: ClientRequest
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: ClientRequest
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: ClientRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients/create': {
      $get:
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined; include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: GenericBulkAction }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              form: { _method?: string | undefined; 'documents[]'?: File[] | undefined }
            }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              form: { _method?: string | undefined; 'documents[]'?: File[] | undefined }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              form: { _method?: string | undefined; 'documents[]'?: File[] | undefined }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              form: { _method?: string | undefined; 'documents[]'?: File[] | undefined }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              form: { _method?: string | undefined; 'documents[]'?: File[] | undefined }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              form: { _method?: string | undefined; 'documents[]'?: File[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients/:id/purge': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients/:id/:mergeable_client_hashed_id/merge': {
      $post:
        | {
            input: { param: { id: string; mergeable_client_hashed_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; mergeable_client_hashed_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; mergeable_client_hashed_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; mergeable_client_hashed_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; mergeable_client_hashed_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; mergeable_client_hashed_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & {
              header: {
                'X-API-TOKEN': string
                'X-Requested-With': string
                'X-API-PASSWORD': string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/client_statement': {
      $post:
        | {
            input: {
              query: {
                index?: string | undefined
                include?: string | undefined
                send_email?: boolean | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: {
                start_date?: string | undefined
                end_date?: string | undefined
                client_id?: string | undefined
                show_payments_table?: boolean | undefined
                show_credits_table?: boolean | undefined
                show_aging_table?: boolean | undefined
              }
            }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                index?: string | undefined
                include?: string | undefined
                send_email?: boolean | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: {
                start_date?: string | undefined
                end_date?: string | undefined
                client_id?: string | undefined
                show_payments_table?: boolean | undefined
                show_credits_table?: boolean | undefined
                show_aging_table?: boolean | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                index?: string | undefined
                include?: string | undefined
                send_email?: boolean | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: {
                start_date?: string | undefined
                end_date?: string | undefined
                client_id?: string | undefined
                show_payments_table?: boolean | undefined
                show_credits_table?: boolean | undefined
                show_aging_table?: boolean | undefined
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                index?: string | undefined
                include?: string | undefined
                send_email?: boolean | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: {
                start_date?: string | undefined
                end_date?: string | undefined
                client_id?: string | undefined
                show_payments_table?: boolean | undefined
                show_credits_table?: boolean | undefined
                show_aging_table?: boolean | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                index?: string | undefined
                include?: string | undefined
                send_email?: boolean | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: {
                start_date?: string | undefined
                end_date?: string | undefined
                client_id?: string | undefined
                show_payments_table?: boolean | undefined
                show_credits_table?: boolean | undefined
                show_aging_table?: boolean | undefined
              }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                index?: string | undefined
                include?: string | undefined
                send_email?: boolean | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: {
                start_date?: string | undefined
                end_date?: string | undefined
                client_id?: string | undefined
                show_payments_table?: boolean | undefined
                show_credits_table?: boolean | undefined
                show_aging_table?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                index?: string | undefined
                include?: string | undefined
                send_email?: boolean | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } } & {
              json: {
                start_date?: string | undefined
                end_date?: string | undefined
                client_id?: string | undefined
                show_payments_table?: boolean | undefined
                show_credits_table?: boolean | undefined
                show_aging_table?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/reactivate_email/:bounce_id': {
      $post:
        | {
            input: { param: { bounce_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { bounce_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { bounce_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bounce_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bounce_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { bounce_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { bounce_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { bounce_id: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/clients/:client/updateTaxData': {
      $post:
        | {
            input: { param: { client: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { client: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { client: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { client: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { client: string } } & {
              query: { index?: string | undefined; include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_orders': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: PurchaseOrder[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: PurchaseOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_orders/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: PurchaseOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_order/:id': {
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: PurchaseOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: PurchaseOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_orders/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: PurchaseOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_orders/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: PurchaseOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_orders/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: number[] }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_orders/:id/:action': {
      $get:
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: PurchaseOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string; action: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_orders/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: PurchaseOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { form: { _method?: string | undefined; documents?: File[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/purchase_order/:invitation_key/download': {
      $get:
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { invitation_key: string } } & {
              query: { include?: string | undefined }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/products': {
      $get:
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                product_key?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: { data?: Product[] | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                product_key?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                product_key?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                product_key?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                product_key?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                product_key?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                include?: string | undefined
                index?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                sort?: string[] | undefined
                status?: string | undefined
                client_id?: string | undefined
                created_at?: number | undefined
                updated_at?: number | undefined
                is_deleted?: boolean | undefined
                filter_deleted_clients?: string | undefined
                vendor_id?: string | undefined
                filter?: string | undefined
                product_key?: string | undefined
              }
            } & { header: { 'X-API-TOKEN': string; 'X-Requested-With': string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/products/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/products/:id/edit': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/products/create': {
      $get:
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/products/bulk': {
      $post:
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductBulkAction }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductBulkAction }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductBulkAction }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductBulkAction }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductBulkAction }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductBulkAction }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { index?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & { json: ProductBulkAction }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/products/:id/upload': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                _method?: string | undefined
                documents?: { [x: string]: unknown }[] | undefined
              }
            }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                _method?: string | undefined
                documents?: { [x: string]: unknown }[] | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                _method?: string | undefined
                documents?: { [x: string]: unknown }[] | undefined
              }
            }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                _method?: string | undefined
                documents?: { [x: string]: unknown }[] | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                _method?: string | undefined
                documents?: { [x: string]: unknown }[] | undefined
              }
            }
            output: RateLimiterError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                _method?: string | undefined
                documents?: { [x: string]: unknown }[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } } & {
              header: { 'X-API-TOKEN': string; 'X-Requested-With': string }
            } & {
              form: {
                _method?: string | undefined
                documents?: { [x: string]: unknown }[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
