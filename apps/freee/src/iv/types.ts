type DeliverySlipIndexResponseDeliverySlips = {
  id: bigint
  company_id: bigint
  delivery_slip_number: string
  subject: string
  template_id?: bigint | undefined
  delivery_slip_date: string
  issue_date?: (string | null) | undefined
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  total_amount: number
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
  sales_management_origin?: boolean | undefined
}
type DeliverySlipIndexResponse = { delivery_slips: DeliverySlipIndexResponseDeliverySlips[] }
type BadRequestErrors = { type?: string | undefined; messages?: string[] | undefined }
type BadRequest = { status_code?: number | undefined; errors?: BadRequestErrors[] | undefined }
type UnauthorizedError = { message?: string | undefined; messages?: string | undefined }
type ForbiddenErrorErrors = { type?: string | undefined; messages?: string[] | undefined }
type ForbiddenError = {
  status_code?: number | undefined
  errors?: ForbiddenErrorErrors[] | undefined
}
type AccessDeniedError = {
  error?: string | undefined
  message?: string | undefined
  code?: string | undefined
}
type InternalServerErrorErrors = { type?: string | undefined; messages?: string[] | undefined }
type InternalServerError = {
  status_code?: number | undefined
  errors?: InternalServerErrorErrors[] | undefined
}
type DeliverySlipRequestLines = {
  type?: 'item' | 'text' | undefined
  description?: string | undefined
  unit?: string | undefined
  quantity?: number | undefined
  unit_price?: string | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding?: boolean | undefined
  account_item_id?: number | undefined
  tax_code?: number | undefined
  item_id?: number | undefined
  section_id?: number | undefined
  tag_ids?: number[] | undefined
  segment_1_tag_id?: bigint | undefined
  segment_2_tag_id?: bigint | undefined
  segment_3_tag_id?: bigint | undefined
}
type DeliverySlipRequest = {
  company_id: bigint
  template_id?: bigint | undefined
  delivery_slip_number?: string | undefined
  branch_no?: number | undefined
  delivery_slip_date: string
  issue_date?: string | undefined
  subject?: string | undefined
  tax_entry_method: 'in' | 'out'
  tax_fraction: 'omit' | 'round_up' | 'round'
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method: 'in' | 'out'
  delivery_slip_note?: string | undefined
  memo?: string | undefined
  partner_id?: bigint | undefined
  partner_code?: string | undefined
  partner_title: '御中' | '様' | '(空白)' | '（空白）'
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_email_cc?: string | undefined
  partner_contact_email_to?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  partner_sending_method?: 'email' | 'posting' | 'email_and_posting' | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  lines: DeliverySlipRequestLines[]
}
type DeliverySlipResponseDeliverySlipTemplate = {
  title?: string | undefined
  invoice_registration_number?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  message?: string | undefined
}
type DeliverySlipResponseDeliverySlipLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
  account_item_id?: (number | null) | undefined
  tax_code?: (number | null) | undefined
  item_id?: (number | null) | undefined
  section_id?: (number | null) | undefined
  tag_ids?: number[] | undefined
  segment_1_tag_id?: (bigint | null) | undefined
  segment_2_tag_id?: (bigint | null) | undefined
  segment_3_tag_id?: (bigint | null) | undefined
}
type DeliverySlipResponseDeliverySlip = {
  id: bigint
  company_id: bigint
  delivery_slip_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  delivery_slip_date: string
  issue_date?: (string | null) | undefined
  payment_date?: (string | null) | undefined
  payment_type?: 'transfer' | 'direct_debit' | undefined
  delivery_slip_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_email_cc?: string | undefined
  partner_contact_email_to?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  partner_bank_account?: string | undefined
  partner_sending_method?: 'email' | 'posting' | 'email_and_posting' | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: DeliverySlipResponseDeliverySlipTemplate | undefined
  lines: DeliverySlipResponseDeliverySlipLines[]
  report_url: string
}
type DeliverySlipResponse = { delivery_slip: DeliverySlipResponseDeliverySlip }
type TemplateIndexResponseTemplates = { id: number; name: string }
type TemplateIndexResponse = { templates: TemplateIndexResponseTemplates[] }
type DeliverySlipShowResponseDeliverySlipLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
}
type DeliverySlipShowResponseDeliverySlip = {
  id: bigint
  company_id: bigint
  delivery_slip_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  delivery_slip_date: string
  issue_date?: (string | null) | undefined
  delivery_slip_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: DeliverySlipResponseDeliverySlipTemplate | undefined
  lines: DeliverySlipShowResponseDeliverySlipLines[]
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
  sales_management_origin?: boolean | undefined
}
type DeliverySlipShowResponse = { delivery_slip: DeliverySlipShowResponseDeliverySlip }
type NotfoundErrorErrors = { type?: string | undefined; messages?: string[] | undefined }
type NotfoundError = {
  status_code?: number | undefined
  errors?: NotfoundErrorErrors[] | undefined
}
type DeliverySlipCancelStatusResponse = {
  delivery_slip: { id: bigint; cancel_status: 'canceled' | 'uncanceled' }
}
type InvoiceIndexResponseInvoices = {
  id: bigint
  company_id: bigint
  invoice_number: string
  subject: string
  template_id?: bigint | undefined
  billing_date: string
  issue_date?: (string | null) | undefined
  payment_date?: (string | null) | undefined
  payment_type?: 'transfer' | 'direct_debit' | 'card' | 'cash' | 'bill_payable' | undefined
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled' | 'canceled' | 'unprocessed' | 'failed'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  total_amount: number
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_brought_forward: number | null
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
  sales_management_origin?: boolean | undefined
}
type InvoiceIndexResponse = { invoices: InvoiceIndexResponseInvoices[] }
type InvoiceRequestLines = {
  type?: 'item' | 'text' | undefined
  description?: string | undefined
  sales_date?: string | undefined
  unit?: string | undefined
  quantity?: number | undefined
  unit_price?: string | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding?: boolean | undefined
  account_item_id?: number | undefined
  tax_code?: number | undefined
  item_id?: number | undefined
  section_id?: number | undefined
  tag_ids?: number[] | undefined
  segment_1_tag_id?: bigint | undefined
  segment_2_tag_id?: bigint | undefined
  segment_3_tag_id?: bigint | undefined
}
type InvoiceRequest = {
  company_id: bigint
  template_id?: bigint | undefined
  invoice_number?: string | undefined
  branch_no?: number | undefined
  billing_date: string
  issue_date?: string | undefined
  payment_date?: string | undefined
  payment_type?: 'transfer' | 'direct_debit' | 'card' | undefined
  subject?: string | undefined
  tax_entry_method: 'in' | 'out'
  tax_fraction: 'omit' | 'round_up' | 'round'
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method: 'in' | 'out'
  include_amount_brought_forward?: boolean | undefined
  amount_brought_forward?: bigint | undefined
  invoice_note?: string | undefined
  memo?: string | undefined
  partner_id?: bigint | undefined
  partner_code?: string | undefined
  partner_title: '御中' | '様' | '(空白)' | '（空白）'
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_email_cc?: string | undefined
  partner_contact_email_to?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  partner_sending_method?: 'email' | 'posting' | 'email_and_posting' | undefined
  partner_bank_account?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  bank_account_to_transfer?: string | undefined
  lines: InvoiceRequestLines[]
}
type InvoiceResponseInvoiceTemplate = {
  title?: string | undefined
  invoice_registration_number?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  bank_account_to_transfer?: string | undefined
  message?: string | undefined
}
type InvoiceResponseInvoiceLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  sales_date?: (string | null) | undefined
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
  account_item_id?: (number | null) | undefined
  tax_code?: (number | null) | undefined
  item_id?: (number | null) | undefined
  section_id?: (number | null) | undefined
  tag_ids?: number[] | undefined
  segment_1_tag_id?: (bigint | null) | undefined
  segment_2_tag_id?: (bigint | null) | undefined
  segment_3_tag_id?: (bigint | null) | undefined
}
type InvoiceResponseInvoice = {
  id: bigint
  company_id: bigint
  invoice_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  billing_date: string
  issue_date?: (string | null) | undefined
  payment_date?: (string | null) | undefined
  payment_type?: 'transfer' | 'direct_debit' | 'card' | 'cash' | 'bill_payable' | undefined
  invoice_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled' | 'canceled' | 'unprocessed' | 'failed'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  amount_brought_forward: number | null
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_email_cc?: string | undefined
  partner_contact_email_to?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  partner_bank_account?: string | undefined
  partner_sending_method?: 'email' | 'posting' | 'email_and_posting' | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  bank_account_to_transfer?: string | undefined
  template?: InvoiceResponseInvoiceTemplate | undefined
  lines: InvoiceResponseInvoiceLines[]
  report_url: string
}
type InvoiceResponse = { invoice: InvoiceResponseInvoice }
type InvoiceShowResponseInvoiceLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  sales_date?: (string | null) | undefined
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
}
type InvoiceShowResponseInvoice = {
  id: bigint
  company_id: bigint
  invoice_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  billing_date: string
  issue_date?: (string | null) | undefined
  payment_date?: (string | null) | undefined
  payment_type?: 'transfer' | 'direct_debit' | 'card' | 'cash' | 'bill_payable' | undefined
  invoice_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled' | 'canceled' | 'unprocessed' | 'failed'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  amount_brought_forward: number | null
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  partner_bank_account?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  bank_account_to_transfer?: string | undefined
  template?: InvoiceResponseInvoiceTemplate | undefined
  lines: InvoiceShowResponseInvoiceLines[]
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
  sales_management_origin?: boolean | undefined
}
type InvoiceShowResponse = { invoice: InvoiceShowResponseInvoice }
type InvoiceCancelStatusResponse = {
  invoice: { id: bigint; cancel_status: 'canceled' | 'uncanceled' }
}
type PaymentNoticeIndexResponsePaymentNotices = {
  id: bigint
  company_id: bigint
  payment_notice_number: string
  subject: string
  template_id?: bigint | undefined
  payment_notice_date: string
  collects_on?: (string | null) | undefined
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  total_amount: number
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
}
type PaymentNoticeIndexResponse = { payment_notices: PaymentNoticeIndexResponsePaymentNotices[] }
type PaymentNoticeRequestLines = {
  type?: 'item' | 'text' | undefined
  description?: string | undefined
  sales_date?: string | undefined
  unit?: string | undefined
  quantity?: number | undefined
  unit_price?: string | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
}
type PaymentNoticeRequest = {
  company_id: bigint
  template_id?: bigint | undefined
  payment_notice_number?: string | undefined
  branch_no?: number | undefined
  payment_notice_date: string
  collects_on?: string | undefined
  payment_condition?: string | undefined
  subject?: string | undefined
  tax_entry_method: 'in' | 'out'
  tax_fraction: 'omit' | 'round_up' | 'round'
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  payment_notice_note?: string | undefined
  memo?: string | undefined
  partner_id?: bigint | undefined
  partner_code?: string | undefined
  partner_title: '御中' | '様' | '(空白)' | '（空白）'
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  lines: PaymentNoticeRequestLines[]
}
type PaymentNoticeResponsePaymentNoticeTemplate = {
  title?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  message?: string | undefined
}
type PaymentNoticeResponsePaymentNoticeLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  sales_date?: (string | null) | undefined
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  amount_excluding_tax?: (number | null) | undefined
}
type PaymentNoticeResponsePaymentNotice = {
  id: bigint
  company_id: bigint
  payment_notice_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  payment_notice_date: string
  collects_on?: (string | null) | undefined
  payment_condition?: string | undefined
  payment_notice_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: PaymentNoticeResponsePaymentNoticeTemplate | undefined
  lines: PaymentNoticeResponsePaymentNoticeLines[]
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
}
type PaymentNoticeResponse = { payment_notice: PaymentNoticeResponsePaymentNotice }
type PaymentNoticeShowResponsePaymentNoticeLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  sales_date?: (string | null) | undefined
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  amount_excluding_tax?: (number | null) | undefined
}
type PaymentNoticeShowResponsePaymentNotice = {
  id: bigint
  company_id: bigint
  payment_notice_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  payment_notice_date: string
  collects_on?: (string | null) | undefined
  payment_condition?: string | undefined
  payment_notice_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: PaymentNoticeResponsePaymentNoticeTemplate | undefined
  lines: PaymentNoticeShowResponsePaymentNoticeLines[]
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
}
type PaymentNoticeShowResponse = { payment_notice: PaymentNoticeShowResponsePaymentNotice }
type PaymentNoticeCancelStatusResponse = {
  payment_notice: { id: bigint; cancel_status: 'canceled' | 'uncanceled' }
}
type PurchaseOrderIndexResponsePurchaseOrders = {
  id: bigint
  company_id: bigint
  purchase_order_number: string
  subject: string
  template_id?: bigint | undefined
  purchase_order_date: string
  issue_date?: (string | null) | undefined
  collects_on?: (string | null) | undefined
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  payment_status: 'settled' | 'unsettled'
  deal_id?: (bigint | null) | undefined
  total_amount: number
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
}
type PurchaseOrderIndexResponse = { purchase_orders: PurchaseOrderIndexResponsePurchaseOrders[] }
type PurchaseOrderRequestLines = {
  type?: 'item' | 'text' | undefined
  description?: string | undefined
  unit?: string | undefined
  quantity?: number | undefined
  unit_price?: string | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding?: boolean | undefined
  account_item_id?: number | undefined
  tax_code?: number | undefined
  item_id?: number | undefined
  section_id?: number | undefined
  tag_ids?: number[] | undefined
  segment_1_tag_id?: bigint | undefined
  segment_2_tag_id?: bigint | undefined
  segment_3_tag_id?: bigint | undefined
}
type PurchaseOrderRequest = {
  company_id: bigint
  template_id?: bigint | undefined
  purchase_order_number?: string | undefined
  branch_no?: number | undefined
  purchase_order_date: string
  issue_date?: string | undefined
  subject?: string | undefined
  tax_entry_method: 'in' | 'out'
  tax_fraction: 'omit' | 'round_up' | 'round'
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method: 'in' | 'out'
  purchase_order_note?: string | undefined
  collects_on?: string | undefined
  delivery_deadline?: string | undefined
  delivery_location?: string | undefined
  payment_condition?: string | undefined
  memo?: string | undefined
  partner_id?: bigint | undefined
  partner_code?: string | undefined
  partner_title: '御中' | '様' | '(空白)' | '（空白）'
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  lines: PurchaseOrderRequestLines[]
}
type PurchaseOrderResponsePurchaseOrderTemplate = {
  title?: string | undefined
  invoice_registration_number?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  message?: string | undefined
}
type PurchaseOrderResponsePurchaseOrderLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
  account_item_id?: (number | null) | undefined
  tax_code?: (number | null) | undefined
  item_id?: (number | null) | undefined
  section_id?: (number | null) | undefined
  tag_ids?: number[] | undefined
  segment_1_tag_id?: (bigint | null) | undefined
  segment_2_tag_id?: (bigint | null) | undefined
  segment_3_tag_id?: (bigint | null) | undefined
}
type PurchaseOrderResponsePurchaseOrder = {
  id: bigint
  company_id: bigint
  purchase_order_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  purchase_order_date: string
  issue_date?: (string | null) | undefined
  purchase_order_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: PurchaseOrderResponsePurchaseOrderTemplate | undefined
  lines: PurchaseOrderResponsePurchaseOrderLines[]
  report_url: string
}
type PurchaseOrderResponse = { purchase_order: PurchaseOrderResponsePurchaseOrder }
type PurchaseOrderShowResponsePurchaseOrderLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
}
type PurchaseOrderShowResponsePurchaseOrder = {
  id: bigint
  company_id: bigint
  purchase_order_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  purchase_order_date: string
  issue_date?: (string | null) | undefined
  purchase_order_note: string
  order_date?: (string | null) | undefined
  delivery_deadline?: (string | null) | undefined
  delivery_location?: (string | null) | undefined
  payment_condition?: (string | null) | undefined
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: PurchaseOrderResponsePurchaseOrderTemplate | undefined
  lines: PurchaseOrderShowResponsePurchaseOrderLines[]
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
}
type PurchaseOrderShowResponse = { purchase_order: PurchaseOrderShowResponsePurchaseOrder }
type PurchaseOrderCancelStatusResponse = {
  purchase_order: { id: bigint; cancel_status: 'canceled' | 'uncanceled' }
}
type QuotationIndexResponseQuotations = {
  id: bigint
  company_id: bigint
  quotation_number: string
  subject: string
  template_id?: bigint | undefined
  quotation_date: string
  expiration_date?: (string | null) | undefined
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  total_amount: number
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
  sales_management_origin?: boolean | undefined
}
type QuotationIndexResponse = { quotations: QuotationIndexResponseQuotations[] }
type QuotationRequestLines = {
  type?: 'item' | 'text' | undefined
  description?: string | undefined
  unit?: string | undefined
  quantity?: number | undefined
  unit_price?: string | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding?: boolean | undefined
}
type QuotationRequest = {
  company_id: bigint
  template_id?: bigint | undefined
  quotation_number?: string | undefined
  branch_no?: number | undefined
  quotation_date: string
  expiration_date?: string | undefined
  delivery_deadline?: string | undefined
  delivery_location?: string | undefined
  subject?: string | undefined
  tax_entry_method: 'in' | 'out'
  tax_fraction: 'omit' | 'round_up' | 'round'
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method: 'in' | 'out'
  quotation_note?: string | undefined
  memo?: string | undefined
  partner_id?: bigint | undefined
  partner_code?: string | undefined
  partner_title: '御中' | '様' | '(空白)' | '（空白）'
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_email_cc?: string | undefined
  partner_contact_email_to?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  partner_sending_method?: 'email' | 'posting' | 'email_and_posting' | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  lines: QuotationRequestLines[]
}
type QuotationResponseQuotationTemplate = {
  title?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  message?: string | undefined
}
type QuotationResponseQuotationLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
}
type QuotationResponseQuotation = {
  id: bigint
  company_id: bigint
  quotation_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  quotation_date: string
  expiration_date?: (string | null) | undefined
  delivery_deadline: string
  delivery_location: string
  quotation_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_email_cc?: string | undefined
  partner_contact_email_to?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  partner_sending_method?: 'email' | 'posting' | 'email_and_posting' | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: QuotationResponseQuotationTemplate | undefined
  lines: QuotationResponseQuotationLines[]
  report_url: string
}
type QuotationResponse = { quotation: QuotationResponseQuotation }
type QuotationShowResponseQuotationLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
}
type QuotationShowResponseQuotation = {
  id: bigint
  company_id: bigint
  quotation_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  quotation_date: string
  expiration_date?: (string | null) | undefined
  delivery_deadline: string
  delivery_location: string
  quotation_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  cancel_status: 'canceled' | 'uncanceled'
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: QuotationResponseQuotationTemplate | undefined
  lines: QuotationShowResponseQuotationLines[]
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
  sales_management_origin?: boolean | undefined
}
type QuotationShowResponse = { quotation: QuotationShowResponseQuotation }
type QuotationCancelStatusResponse = {
  quotation: { id: bigint; cancel_status: 'canceled' | 'uncanceled' }
}
type ReceiptIndexResponseReceipts = {
  id: bigint
  company_id: bigint
  receipt_number: string
  subject: string
  template_id?: bigint | undefined
  receipt_date: string
  issue_date?: (string | null) | undefined
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  total_amount: number
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
}
type ReceiptIndexResponse = { receipts: ReceiptIndexResponseReceipts[] }
type ReceiptRequestLines = {
  type?: 'item' | 'text' | undefined
  description?: string | undefined
  unit?: string | undefined
  quantity?: number | undefined
  unit_price?: string | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding?: boolean | undefined
  account_item_id?: number | undefined
  tax_code?: number | undefined
  item_id?: number | undefined
  section_id?: number | undefined
  tag_ids?: number[] | undefined
  segment_1_tag_id?: bigint | undefined
  segment_2_tag_id?: bigint | undefined
  segment_3_tag_id?: bigint | undefined
}
type ReceiptRequest = {
  company_id: bigint
  template_id?: bigint | undefined
  receipt_number?: string | undefined
  branch_no?: number | undefined
  receipt_date: string
  issue_date?: string | undefined
  subject?: string | undefined
  tax_entry_method: 'in' | 'out'
  tax_fraction: 'omit' | 'round_up' | 'round'
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method: 'in' | 'out'
  receipt_note?: string | undefined
  memo?: string | undefined
  partner_id?: bigint | undefined
  partner_code?: string | undefined
  partner_title: '御中' | '様' | '(空白)' | '（空白）'
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  lines: ReceiptRequestLines[]
}
type ReceiptResponseReceiptTemplate = {
  title?: string | undefined
  invoice_registration_number?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  message?: string | undefined
}
type ReceiptResponseReceiptLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
  account_item_id?: (number | null) | undefined
  tax_code?: (number | null) | undefined
  item_id?: (number | null) | undefined
  section_id?: (number | null) | undefined
  tag_ids?: number[] | undefined
  segment_1_tag_id?: (bigint | null) | undefined
  segment_2_tag_id?: (bigint | null) | undefined
  segment_3_tag_id?: (bigint | null) | undefined
}
type ReceiptResponseReceipt = {
  id: bigint
  company_id: bigint
  receipt_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  receipt_date: string
  issue_date?: (string | null) | undefined
  receipt_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: ReceiptResponseReceiptTemplate | undefined
  lines: ReceiptResponseReceiptLines[]
  report_url: string
}
type ReceiptResponse = { receipt: ReceiptResponseReceipt }
type ReceiptShowResponseReceiptLines = {
  id: bigint
  type: 'item' | 'text'
  description: string
  unit?: string | undefined
  quantity?: (number | null) | undefined
  unit_price?: (string | null) | undefined
  tax_rate?: 0 | 8 | 10 | undefined
  reduced_tax_rate?: boolean | undefined
  withholding: boolean
  amount_excluding_tax?: (number | null) | undefined
}
type ReceiptShowResponseReceipt = {
  id: bigint
  company_id: bigint
  receipt_number: string
  branch_no?: (number | null) | undefined
  subject: string
  template_id?: bigint | undefined
  template_name?: string | undefined
  receipt_date: string
  issue_date?: (string | null) | undefined
  receipt_note: string
  memo: string
  sending_status: 'sent' | 'unsent'
  payment_status: 'settled' | 'unsettled'
  cancel_status: 'canceled' | 'uncanceled'
  deal_status: 'registered' | 'unregistered'
  deal_id?: (bigint | null) | undefined
  tax_entry_method?: 'in' | 'out' | undefined
  tax_fraction?: 'omit' | 'round_up' | 'round' | undefined
  line_amount_fraction?: 'omit' | 'round_up' | 'round' | undefined
  withholding_tax_entry_method?: 'in' | 'out' | undefined
  total_amount: number
  created_at: string
  amount_withholding_tax?: (number | null) | undefined
  amount_including_tax: number
  amount_excluding_tax: number
  amount_tax: number
  amount_including_tax_10?: (number | null) | undefined
  amount_excluding_tax_10?: (number | null) | undefined
  amount_tax_10?: (number | null) | undefined
  amount_including_tax_8?: (number | null) | undefined
  amount_excluding_tax_8?: (number | null) | undefined
  amount_tax_8?: (number | null) | undefined
  amount_including_tax_8_reduced?: (number | null) | undefined
  amount_excluding_tax_8_reduced?: (number | null) | undefined
  amount_tax_8_reduced?: (number | null) | undefined
  amount_including_tax_0?: (number | null) | undefined
  amount_excluding_tax_0?: (number | null) | undefined
  amount_tax_0?: (number | null) | undefined
  partner_id: bigint
  partner_code?: (string | null) | undefined
  partner_name?: string | undefined
  partner_title?: '御中' | '様' | '(空白)' | undefined
  partner_address_zipcode?: string | undefined
  partner_address_prefecture_code?: number | undefined
  partner_address_street_name1?: string | undefined
  partner_address_street_name2?: string | undefined
  partner_contact_department?: string | undefined
  partner_contact_name?: string | undefined
  partner_display_name?: string | undefined
  company_contact_name?: string | undefined
  company_name?: string | undefined
  company_description?: string | undefined
  template?: ReceiptResponseReceiptTemplate | undefined
  lines: ReceiptShowResponseReceiptLines[]
  email_url_file_downloaded_at?: (string | null) | undefined
  email_url_file_downloaded_status?: 'downloaded' | 'undownloaded' | undefined
  report_url: string
}
type ReceiptShowResponse = { receipt: ReceiptShowResponseReceipt }
type ReceiptCancelStatusResponse = {
  receipt: { id: bigint; cancel_status: 'canceled' | 'uncanceled' }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/delivery_slips': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                delivery_slip_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_delivery_slip_date?: string | undefined
                end_delivery_slip_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: DeliverySlipIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                delivery_slip_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_delivery_slip_date?: string | undefined
                end_delivery_slip_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                delivery_slip_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_delivery_slip_date?: string | undefined
                end_delivery_slip_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                delivery_slip_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_delivery_slip_date?: string | undefined
                end_delivery_slip_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                delivery_slip_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_delivery_slip_date?: string | undefined
                end_delivery_slip_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                delivery_slip_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_delivery_slip_date?: string | undefined
                end_delivery_slip_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: DeliverySlipRequest }
            output: DeliverySlipResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DeliverySlipRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeliverySlipRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeliverySlipRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeliverySlipRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeliverySlipRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/delivery_slips/templates': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: TemplateIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/delivery_slips/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: DeliverySlipShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: DeliverySlipRequest }
            output: DeliverySlipResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: DeliverySlipRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: DeliverySlipRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: DeliverySlipRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: DeliverySlipRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: DeliverySlipRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: DeliverySlipRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/delivery_slips/:id/cancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: DeliverySlipCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/delivery_slips/:id/uncancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: DeliverySlipCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/invoices': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                invoice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?:
                  | 'settled'
                  | 'unsettled'
                  | 'canceled'
                  | 'unprocessed'
                  | 'failed'
                  | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_billing_date?: string | undefined
                end_billing_date?: string | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: InvoiceIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                invoice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?:
                  | 'settled'
                  | 'unsettled'
                  | 'canceled'
                  | 'unprocessed'
                  | 'failed'
                  | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_billing_date?: string | undefined
                end_billing_date?: string | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                invoice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?:
                  | 'settled'
                  | 'unsettled'
                  | 'canceled'
                  | 'unprocessed'
                  | 'failed'
                  | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_billing_date?: string | undefined
                end_billing_date?: string | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                invoice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?:
                  | 'settled'
                  | 'unsettled'
                  | 'canceled'
                  | 'unprocessed'
                  | 'failed'
                  | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_billing_date?: string | undefined
                end_billing_date?: string | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                invoice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?:
                  | 'settled'
                  | 'unsettled'
                  | 'canceled'
                  | 'unprocessed'
                  | 'failed'
                  | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_billing_date?: string | undefined
                end_billing_date?: string | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                invoice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                payment_status?:
                  | 'settled'
                  | 'unsettled'
                  | 'canceled'
                  | 'unprocessed'
                  | 'failed'
                  | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_billing_date?: string | undefined
                end_billing_date?: string | undefined
                start_payment_date?: string | undefined
                end_payment_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: InvoiceRequest }
            output: InvoiceResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: InvoiceRequest }; output: BadRequest; outputFormat: 'json'; status: 400 }
        | {
            input: { json: InvoiceRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InvoiceRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: InvoiceRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: InvoiceRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/invoices/templates': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: TemplateIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/invoices/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: InvoiceShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: InvoiceRequest }
            output: InvoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: InvoiceRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: InvoiceRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: InvoiceRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: InvoiceRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: InvoiceRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: InvoiceRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/invoices/:id/cancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InvoiceCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/invoices/:id/uncancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InvoiceCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payment_notices': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                payment_notice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_payment_notice_date?: string | undefined
                end_payment_notice_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PaymentNoticeIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                payment_notice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_payment_notice_date?: string | undefined
                end_payment_notice_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                payment_notice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_payment_notice_date?: string | undefined
                end_payment_notice_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                payment_notice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_payment_notice_date?: string | undefined
                end_payment_notice_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                payment_notice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_payment_notice_date?: string | undefined
                end_payment_notice_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                payment_notice_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_payment_notice_date?: string | undefined
                end_payment_notice_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: PaymentNoticeRequest }
            output: PaymentNoticeResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PaymentNoticeRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentNoticeRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentNoticeRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentNoticeRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentNoticeRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payment_notices/templates': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: TemplateIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payment_notices/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: PaymentNoticeShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: PaymentNoticeRequest }
            output: PaymentNoticeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: PaymentNoticeRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: PaymentNoticeRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: PaymentNoticeRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: PaymentNoticeRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: PaymentNoticeRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: PaymentNoticeRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payment_notices/:id/cancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: PaymentNoticeCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payment_notices/:id/uncancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: PaymentNoticeCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/purchase_orders': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                purchase_order_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PurchaseOrderIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                purchase_order_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                purchase_order_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                purchase_order_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                purchase_order_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                purchase_order_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: PurchaseOrderRequest }
            output: PurchaseOrderResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PurchaseOrderRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PurchaseOrderRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PurchaseOrderRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PurchaseOrderRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PurchaseOrderRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/purchase_orders/templates': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: TemplateIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/purchase_orders/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: PurchaseOrderShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: PurchaseOrderRequest }
            output: PurchaseOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: PurchaseOrderRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: PurchaseOrderRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: PurchaseOrderRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: PurchaseOrderRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: PurchaseOrderRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: PurchaseOrderRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/purchase_orders/:id/cancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: PurchaseOrderCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/purchase_orders/:id/uncancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: PurchaseOrderCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/quotations': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                quotation_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                start_expiration_date?: string | undefined
                end_expiration_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: QuotationIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                quotation_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                start_expiration_date?: string | undefined
                end_expiration_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                quotation_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                start_expiration_date?: string | undefined
                end_expiration_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                quotation_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                start_expiration_date?: string | undefined
                end_expiration_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                quotation_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                start_expiration_date?: string | undefined
                end_expiration_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                quotation_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                start_expiration_date?: string | undefined
                end_expiration_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sales_management_origin?: boolean | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: QuotationRequest }
            output: QuotationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: QuotationRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: QuotationRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: QuotationRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: QuotationRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: QuotationRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/quotations/templates': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: TemplateIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/quotations/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: QuotationShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: QuotationRequest }
            output: QuotationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: QuotationRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: QuotationRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: QuotationRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: QuotationRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: QuotationRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: QuotationRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/quotations/:id/cancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: QuotationCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/quotations/:id/uncancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: QuotationCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/receipts': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                receipt_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_receipt_date?: string | undefined
                end_receipt_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ReceiptIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                receipt_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_receipt_date?: string | undefined
                end_receipt_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                receipt_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_receipt_date?: string | undefined
                end_receipt_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                receipt_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_receipt_date?: string | undefined
                end_receipt_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                receipt_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_receipt_date?: string | undefined
                end_receipt_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                receipt_number?: string | undefined
                subject?: string | undefined
                partner_ids?: string | undefined
                deal_status?: 'registered' | 'unregistered' | undefined
                sending_status?: 'sent' | 'unsent' | undefined
                payment_status?: 'settled' | 'unsettled' | undefined
                cancel_status?: 'canceled' | 'uncanceled' | undefined
                start_receipt_date?: string | undefined
                end_receipt_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ReceiptRequest }
            output: ReceiptResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ReceiptRequest }; output: BadRequest; outputFormat: 'json'; status: 400 }
        | {
            input: { json: ReceiptRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ReceiptRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ReceiptRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ReceiptRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/receipts/templates': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: TemplateIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/receipts/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: ReceiptShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: ReceiptRequest }
            output: ReceiptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: ReceiptRequest }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ReceiptRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ReceiptRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ReceiptRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ReceiptRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ReceiptRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/receipts/:id/cancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ReceiptCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/receipts/:id/uncancel': {
      $put:
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ReceiptCancelStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: { company_id: bigint } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
