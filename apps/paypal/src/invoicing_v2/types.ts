type InvoiceStatus =
  | 'DRAFT'
  | 'SENT'
  | 'SCHEDULED'
  | 'PAID'
  | 'MARKED_AS_PAID'
  | 'CANCELLED'
  | 'REFUNDED'
  | 'PARTIALLY_PAID'
  | 'PARTIALLY_REFUNDED'
  | 'MARKED_AS_REFUNDED'
  | 'UNPAID'
  | 'PAYMENT_PENDING'
  | 'AUTO_CANCELLED'
  | 'PAID_EXTERNAL'
  | 'REFUNDED_EXTERNAL'
  | 'SHARED'
type CurrencyCode = string
type DateTime = string
type FileReference = {
  id?: string | undefined
  reference_url?: string | undefined
  content_type?: string | undefined
  create_time?: DateTime | undefined
  size?: string | undefined
}
type FileReferenceList = FileReference[]
type DateNoTime = string
type PaymentTermType =
  | 'DUE_ON_RECEIPT'
  | 'DUE_ON_DATE_SPECIFIED'
  | 'NET_10'
  | 'NET_15'
  | 'NET_30'
  | 'NET_45'
  | 'NET_60'
  | 'NET_90'
  | 'NO_DUE_DATE'
type InvoicePaymentTerm = {
  term_type?: PaymentTermType | undefined
  due_date?: DateNoTime | undefined
}
type InvoiceCreationFlow = 'MULTIPLE_RECIPIENTS_GROUP' | 'BATCH' | 'REGULAR_SINGLE'
type Metadata = {
  create_time?: DateTime | undefined
  created_by?: string | undefined
  last_update_time?: DateTime | undefined
  last_updated_by?: string | undefined
  cancel_time?: DateTime | undefined
  cancelled_by?: string | undefined
  first_sent_time?: DateTime | undefined
  last_sent_time?: DateTime | undefined
  last_sent_by?: string | undefined
  created_by_flow?: InvoiceCreationFlow | undefined
  recipient_view_url?: string | undefined
  invoicer_view_url?: string | undefined
}
type InvoiceDetail = {
  reference?: string | undefined
  currency_code: CurrencyCode
  note?: string | undefined
  terms_and_conditions?: string | undefined
  memo?: string | undefined
  attachments?: FileReferenceList | undefined
  invoice_number?: string | undefined
  invoice_date?: DateNoTime | undefined
  payment_term?: InvoicePaymentTerm | undefined
  metadata?: Metadata | undefined
}
type Name = {
  prefix?: string | undefined
  given_name?: string | undefined
  surname?: string | undefined
  middle_name?: string | undefined
  suffix?: string | undefined
  alternate_full_name?: string | undefined
  full_name?: string | undefined
}
type CountryCode = string
type AddressDetails = {
  street_number?: string | undefined
  street_name?: string | undefined
  street_type?: string | undefined
  delivery_service?: string | undefined
  building_name?: string | undefined
  sub_building?: string | undefined
}
type AddressPortable = {
  address_line_1?: string | undefined
  address_line_2?: string | undefined
  address_line_3?: string | undefined
  admin_area_4?: string | undefined
  admin_area_3?: string | undefined
  admin_area_2?: string | undefined
  admin_area_1?: string | undefined
  postal_code?: string | undefined
  country_code: CountryCode
  address_details?: AddressDetails | undefined
}
type RestrictiveEmailAddress = string
type PhoneType = 'FAX' | 'HOME' | 'MOBILE' | 'OTHER' | 'PAGER'
type PhoneDetail = {
  country_code: string
  national_number: string
  extension_number?: string | undefined
  phone_type?: PhoneType | undefined
}
type PhoneDetailList = PhoneDetail[]
type InvoicerInfo = {
  business_name?: string | undefined
  name?: Name | undefined
  address?: AddressPortable | undefined
  email_address?: RestrictiveEmailAddress | undefined
  phones?: PhoneDetailList | undefined
  website?: string | undefined
  tax_id?: string | undefined
  additional_notes?: string | undefined
  logo_url?: string | undefined
}
type DefinitionsPhoneDetailList = PhoneDetail[]
type Language = string
type BillingInfo = {
  business_name?: string | undefined
  name?: Name | undefined
  address?: AddressPortable | undefined
  email_address?: RestrictiveEmailAddress | undefined
  phones?: DefinitionsPhoneDetailList | undefined
  additional_info?: string | undefined
  language?: Language | undefined
}
type ContactNameAddress = {
  business_name?: string | undefined
  name?: Name | undefined
  address?: AddressPortable | undefined
}
type RecipientInfo = {
  billing_info?: BillingInfo | undefined
  shipping_info?: ContactNameAddress | undefined
}
type RecipientInfoList = RecipientInfo[]
type EmailAddress = string
type EmailAddressList = EmailAddress[]
type Money = { currency_code: CurrencyCode; value: string }
type Percentage = string
type Tax = {
  name: string
  percent: Percentage
  amount?: Money | undefined
  tax_note?: string | undefined
}
type Discount = { percent?: Percentage | undefined; amount?: Money | undefined }
type UnitOfMeasure = 'QUANTITY' | 'HOURS' | 'AMOUNT'
type Item = {
  id?: string | undefined
  name: string
  description?: string | undefined
  quantity: string
  unit_amount: Money
  tax?: Tax | undefined
  item_date?: DateNoTime | undefined
  discount?: Discount | undefined
  unit_of_measure?: UnitOfMeasure | undefined
}
type ItemList = Item[]
type PartialPayment = {
  allow_partial_payment?: boolean | undefined
  minimum_amount_due?: Money | undefined
}
type Configuration = {
  tax_calculated_after_discount?: boolean | undefined
  tax_inclusive?: boolean | undefined
  allow_tip?: boolean | undefined
  partial_payment?: PartialPayment | undefined
  has_conditional_rule?: boolean | undefined
  template_id?: string | undefined
}
type AggregatedDiscount = {
  invoice_discount?: Discount | undefined
  item_discount?: Money | undefined
}
type ShippingCost = { amount?: Money | undefined; tax?: Tax | undefined }
type CustomAmount = { label: string; amount?: Money | undefined }
type AmountWithBreakdown = {
  item_total?: Money | undefined
  discount?: AggregatedDiscount | undefined
  tax_total?: Money | undefined
  shipping?: ShippingCost | undefined
  custom?: CustomAmount | undefined
}
type AmountSummaryDetail = {
  currency_code?: CurrencyCode | undefined
  value?: string | undefined
  breakdown?: AmountWithBreakdown | undefined
}
type PaymentType = 'PAYPAL' | 'EXTERNAL'
type PaymentMethod =
  | 'BANK_TRANSFER'
  | 'CASH'
  | 'CHECK'
  | 'CREDIT_CARD'
  | 'DEBIT_CARD'
  | 'PAYPAL'
  | 'WIRE_TRANSFER'
  | 'OTHER'
type PaymentDetail = {
  type?: PaymentType | undefined
  payment_id?: string | undefined
  payment_date?: DateNoTime | undefined
  method: PaymentMethod
  note?: string | undefined
  amount?: Money | undefined
  shipping_info?: ContactNameAddress | undefined
}
type PaymentDetailList = PaymentDetail[]
type Payments = { paid_amount?: Money | undefined; transactions?: PaymentDetailList | undefined }
type RefundDetail = {
  type?: PaymentType | undefined
  refund_id?: string | undefined
  refund_date?: DateNoTime | undefined
  amount?: Money | undefined
  method: PaymentMethod
}
type RefundDetailList = RefundDetail[]
type Refunds = { refund_amount?: Money | undefined; transactions?: RefundDetailList | undefined }
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
}
type LinkDescriptionList = LinkDescription[]
type Invoice = {
  id?: string | undefined
  parent_id?: string | undefined
  status?: InvoiceStatus | undefined
  detail: InvoiceDetail
  invoicer?: InvoicerInfo | undefined
  primary_recipients?: RecipientInfoList | undefined
  additional_recipients?: EmailAddressList | undefined
  items?: ItemList | undefined
  configuration?: Configuration | undefined
  amount?: AmountSummaryDetail | undefined
  due_amount?: Money | undefined
  gratuity?: Money | undefined
  payments?: Payments | undefined
  refunds?: Refunds | undefined
  links?: LinkDescriptionList | undefined
}
type ErrorLocation = 'body' | 'path' | 'query'
type ErrorDetails = {
  field?: string | undefined
  value?: string | undefined
  location?: ErrorLocation | undefined
  issue: string
  description?: string | undefined
}
type ErrorLinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | undefined
}
type Error_403 = {
  name?: 'NOT_AUTHORIZED' | undefined
  message?: 'Authorization failed due to insufficient permissions.' | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_500 = {
  name?: 'INTERNAL_SERVER_ERROR' | undefined
  message?: 'An internal server error occurred.' | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_400 = {
  name?: 'INVALID_REQUEST' | undefined
  message?: 'Request is not well-formed, syntactically incorrect, or violates schema.' | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_401 = {
  name?: 'AUTHENTICATION_FAILURE' | undefined
  message?:
    | 'Authentication failed due to missing authorization header, or invalid authentication credentials.'
    | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_404 = {
  name?: 'RESOURCE_NOT_FOUND' | undefined
  message?: 'The specified resource does not exist.' | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_409 = {
  name?: 'RESOURCE_CONFLICT' | undefined
  message?: 'The server has detected a conflict while processing this request.' | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_415 = {
  name?: 'UNSUPPORTED_MEDIA_TYPE' | undefined
  message?: "The server does not support the request payload's media type." | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_422 = {
  name?: 'UNPROCESSABLE_ENTITY' | undefined
  message?:
    | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
    | undefined
  details?: ErrorDetails[] | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type Error_503 = {
  name?: 'SERVICE_UNAVAILABLE' | undefined
  message?: 'Service Unavailable.' | undefined
  debug_id?: string | undefined
  links?: ErrorLinkDescription[] | undefined
}
type ErrorDefault =
  | Error_400
  | Error_401
  | Error_403
  | Error_404
  | Error_409
  | Error_415
  | Error_422
  | Error_500
  | Error_503
type InvoiceList = Invoice[]
type Invoices = {
  total_pages?: number | undefined
  total_items?: number | undefined
  items?: InvoiceList | undefined
  links?: LinkDescriptionList | undefined
}
type Notification = {
  subject?: string | undefined
  note?: string | undefined
  send_to_invoicer?: boolean | undefined
  send_to_recipient?: boolean | undefined
  additional_recipients?: EmailAddressList | undefined
}
type PaymentReference = { payment_id?: string | undefined }
type RefundReference = { refund_id?: string | undefined }
type QrConfig = {
  width?: number | undefined
  height?: number | undefined
  action?: string | undefined
}
type Fetchtype = { fetch_id?: boolean | undefined }
type InvoiceNumber = { invoice_number?: string | undefined; invoice_id?: string | undefined }
type InvoiceStatusList = InvoiceStatus[]
type AmountRange = { lower_amount: Money; upper_amount: Money }
type DateRange = { start: DateNoTime; end: DateNoTime }
type DateTimeRange = { start: DateTime; end: DateTime }
type Fields = string
type FieldsList = Fields[]
type SearchData = {
  recipient_email?: string | undefined
  recipient_first_name?: string | undefined
  recipient_last_name?: string | undefined
  recipient_business_name?: string | undefined
  invoice_number?: string | undefined
  status?: InvoiceStatusList | undefined
  reference?: string | undefined
  currency_code?: CurrencyCode | undefined
  memo?: string | undefined
  total_amount_range?: AmountRange | undefined
  invoice_date_range?: DateRange | undefined
  due_date_range?: DateRange | undefined
  payment_date_range?: DateTimeRange | undefined
  creation_date_range?: DateTimeRange | undefined
  archived?: boolean | undefined
  fields?: FieldsList | undefined
}
type AddressPortableList = AddressPortable[]
type TemplatesDefinitionsPhoneDetailList = PhoneDetail[]
type PaymentTerm = { term_type?: PaymentTermType | undefined }
type TemplateMetadata = {
  create_time?: DateTime | undefined
  created_by?: string | undefined
  last_update_time?: DateTime | undefined
  last_updated_by?: string | undefined
}
type TemplateDetail = {
  reference?: string | undefined
  currency_code: CurrencyCode
  note?: string | undefined
  terms_and_conditions?: string | undefined
  memo?: string | undefined
  attachments?: FileReferenceList | undefined
  payment_term?: PaymentTerm | undefined
  metadata?: TemplateMetadata | undefined
}
type DefinitionsRecipientInfoList = RecipientInfo[]
type DefinitionsItemList = Item[]
type TemplateConfiguration = {
  tax_calculated_after_discount?: boolean | undefined
  tax_inclusive?: boolean | undefined
  allow_tip?: boolean | undefined
  partial_payment?: PartialPayment | undefined
  has_conditional_rule?: boolean | undefined
}
type TemplateInfo = {
  detail?: TemplateDetail | undefined
  invoicer?: InvoicerInfo | undefined
  primary_recipients?: DefinitionsRecipientInfoList | undefined
  additional_recipients?: EmailAddressList | undefined
  items?: DefinitionsItemList | undefined
  configuration?: TemplateConfiguration | undefined
  amount?: AmountSummaryDetail | undefined
  due_amount?: Money | undefined
}
type TemplateItemField =
  | 'ITEMS_QUANTITY'
  | 'ITEMS_DESCRIPTION'
  | 'ITEMS_DATE'
  | 'ITEMS_DISCOUNT'
  | 'ITEMS_TAX'
type TemplateDisplayPreference = { hidden?: boolean | undefined }
type TemplateItemSetting = {
  field_name?: TemplateItemField | undefined
  display_preference?: TemplateDisplayPreference | undefined
}
type TemplateItemSettingList = TemplateItemSetting[]
type TemplateSubtotalField = 'DISCOUNT' | 'SHIPPING' | 'CUSTOM'
type TemplateSubtotalSetting = {
  field_name?: TemplateSubtotalField | undefined
  display_preference?: TemplateDisplayPreference | undefined
}
type TemplateSubtotalSettingList = TemplateSubtotalSetting[]
type TemplateSettings = {
  template_item_settings?: TemplateItemSettingList | undefined
  template_subtotal_settings?: TemplateSubtotalSettingList | undefined
}
type Template = {
  id?: string | undefined
  name?: string | undefined
  default_template?: boolean | undefined
  template_info?: TemplateInfo | undefined
  settings?: TemplateSettings | undefined
  unit_of_measure?: UnitOfMeasure | undefined
  standard_template?: boolean | undefined
  links?: LinkDescriptionList | undefined
}
type TemplateList = Template[]
type Templates = {
  addresses?: AddressPortableList | undefined
  emails?: EmailAddress | undefined
  phones?: TemplatesDefinitionsPhoneDetailList | undefined
  templates?: TemplateList | undefined
  links?: LinkDescriptionList | undefined
}
type Connection = {
  platform_name?: string | undefined
  last_sync_time?: DateTime | undefined
  last_sync_status?: 'IN_PROGRESS' | 'SUCCESS' | 'FAILED' | undefined
}
type ConnectionList = Connection[]
type Connections = { connections?: ConnectionList | undefined }
type ConnectionsList = Connections[]
type InvoiceConnectionDetails = {
  id?: string | undefined
  connection_status?: ConnectionsList | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/invoicing/invoices': {
      $post:
        | { input: { json: Invoice }; output: Invoice; outputFormat: 'json'; status: 201 }
        | { input: { json: Invoice }; output: Invoice; outputFormat: 'text'; status: 201 }
        | {
            input: { json: Invoice }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Address line2 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'National Number length should be between 1 and 14.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Address line1 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Country code is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Custom label length should be less than 50 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Given name length should be less than 140 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Language is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Admin area1 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Item quantity length should be 1 and 14.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Surname length should be less than 140 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Attachment reference url length should be between 1 and 2000.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Country code length should be 2 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Business name length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Minimum due amount length should be less than 32 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Attachment id length should be between 1 and 255.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Admin area2 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Tax name length should be less than 100.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Website url length should be less than 2048 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Postal code length should be less than 60 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'National Number is not valid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Memo length should be less than 4000 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Item name length should be less than 200 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'country code length should be between 1 and 3.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Template Id length should be less than 22 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Logo url length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Invoice note length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Reference field length should be less than 120 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Due date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Terms and Conditions length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Email address length should be between 3 and 254.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Additional data length should be less than 4000.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Additional information value length should be less than 40 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Tax id length should be less than 100 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Invoice date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Invoice date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Invoice number length should be less than 25 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Item Date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Item description length should be less than 1000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Shipping Tax name length should be less than 100 characters.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Invoice }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Address line2 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'National Number length should be between 1 and 14.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Address line1 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Country code is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Custom label length should be less than 50 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Given name length should be less than 140 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Language is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Admin area1 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Item quantity length should be 1 and 14.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Surname length should be less than 140 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Attachment reference url length should be between 1 and 2000.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Country code length should be 2 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Business name length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Minimum due amount length should be less than 32 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Attachment id length should be between 1 and 255.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Admin area2 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Tax name length should be less than 100.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Website url length should be less than 2048 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Postal code length should be less than 60 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'National Number is not valid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Memo length should be less than 4000 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Item name length should be less than 200 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'country code length should be between 1 and 3.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Template Id length should be less than 22 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Logo url length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Invoice note length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Reference field length should be less than 120 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Due date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Terms and Conditions length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Email address length should be between 3 and 254.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Additional data length should be less than 4000.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Additional information value length should be less than 40 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Tax id length should be less than 100 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Invoice date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Invoice date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Invoice number length should be less than 25 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Item Date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Item description length should be less than 1000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Shipping Tax name length should be less than 100 characters.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | { input: { json: Invoice }; output: Error_403; outputFormat: 'json'; status: 403 }
        | { input: { json: Invoice }; output: Error_403; outputFormat: 'text'; status: 403 }
        | {
            input: { json: Invoice }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | {
                    issue?: 'USER_NOT_FOUND' | undefined
                    description?:
                      | 'User is not associated with paypal based on invoicer email.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: Invoice }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | {
                    issue?: 'USER_NOT_FOUND' | undefined
                    description?:
                      | 'User is not associated with paypal based on invoicer email.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 422
          }
        | { input: { json: Invoice }; output: Error_500; outputFormat: 'json'; status: 500 }
        | { input: { json: Invoice }; output: Error_500; outputFormat: 'text'; status: 500 }
        | { input: { json: Invoice }; output: ErrorDefault; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: Invoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: Invoices
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'Value exceeds max value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'Value less than minimum value.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'Value exceeds max value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'Value less than minimum value.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: Error_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: Error_403
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
                fields?: string | undefined
              }
            }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id/send': {
      $post:
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: LinkDescription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: LinkDescription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: LinkDescription
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: LinkDescription
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_400
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_403
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_422
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_422
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id/remind': {
      $post:
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'the value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_ARRAY_MAX_ITEMS' | undefined
                        description?:
                          | 'Only maximum of 100 email address is supported in additional recipients.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'the value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_ARRAY_MAX_ITEMS' | undefined
                        description?:
                          | 'Only maximum of 100 email address is supported in additional recipients.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | {
                    issue?: 'CANNOT_REMIND_INVOICE' | undefined
                    description?:
                      | 'You cannot remind an invoice which is in DRAFT status. Only UNPAID, SENT and PARTIALLY_PAID invoices can be reminded.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | {
                    issue?: 'CANNOT_REMIND_INVOICE' | undefined
                    description?:
                      | 'You cannot remind an invoice which is in DRAFT status. Only UNPAID, SENT and PARTIALLY_PAID invoices can be reminded.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id/cancel': {
      $post:
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Field value exceeded the maximum allowed number of characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_ARRAY_MAX_ITEMS' | undefined
                        description?:
                          | 'Only maximum of 100 email address is supported in additional recipients.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'CANNOT_CANCEL_DRAFT_INVOICE' | undefined
                        description?: 'Draft invoice cannot be canceled.' | undefined
                      }
                    | {
                        issue?: 'CANNOT_CANCEL_PAID_INVOICE' | undefined
                        description?: 'Cannot cancel a paid or partially paid invoice.' | undefined
                      }
                    | {
                        issue?: 'CANNOT_CANCEL_REFUNDED_INVOICE' | undefined
                        description?:
                          | 'Cannot cancel a refunded or partially refunded invoice.'
                          | undefined
                      }
                    | {
                        issue?: 'CANNOT_CANCEL_SCHEDULED_INVOICE' | undefined
                        description?: 'Cannot cancel a scheduled invoice.' | undefined
                      }
                    | {
                        issue?: 'INVOICE_CANCELED_ALREADY' | undefined
                        description?: 'Invoice is already cancelled.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: Notification }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id/payments': {
      $post:
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: PaymentReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: PaymentReference
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?:
                          | 'Payment method is missing. Please provide a valid payment method.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PAYMENT_METHOD' | undefined
                        description?:
                          | 'The value provided is not an acceptable method of payment.'
                          | undefined
                      }
                    | {
                        issue?: 'NOT_SUPPORTED' | undefined
                        description?: 'Currency code is not supported.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?:
                          | 'Amount value is missing. Please provide a valid amount.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Amount value cannot be greater than the maximum limit of 32 characters length.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'Amount value is invalid. Should be a numeric value.'
                          | undefined
                      }
                    | {
                        issue?: 'VALUE_CANNOT_BE_ZERO' | undefined
                        description?:
                          | 'Payment amount cannot be zero. Please provide a valid amount.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_DECIMAL_VALUE' | undefined
                        description?:
                          | 'Payment amount value is invalid. Can have non-negative value with maximum 7 digits and upto 2 fractions.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_VALUE' | undefined
                        description?:
                          | 'Payment amount value is invalid. Can have non-negative value with maximum 6 digits.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Date should be of format yyyy-mm-dd.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?:
                          | 'Payment method is missing. Please provide a valid payment method.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PAYMENT_METHOD' | undefined
                        description?:
                          | 'The value provided is not an acceptable method of payment.'
                          | undefined
                      }
                    | {
                        issue?: 'NOT_SUPPORTED' | undefined
                        description?: 'Currency code is not supported.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?:
                          | 'Amount value is missing. Please provide a valid amount.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Amount value cannot be greater than the maximum limit of 32 characters length.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'Amount value is invalid. Should be a numeric value.'
                          | undefined
                      }
                    | {
                        issue?: 'VALUE_CANNOT_BE_ZERO' | undefined
                        description?:
                          | 'Payment amount cannot be zero. Please provide a valid amount.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_DECIMAL_VALUE' | undefined
                        description?:
                          | 'Payment amount value is invalid. Can have non-negative value with maximum 7 digits and upto 2 fractions.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_VALUE' | undefined
                        description?:
                          | 'Payment amount value is invalid. Can have non-negative value with maximum 6 digits.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Date should be of format yyyy-mm-dd.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'PAYMENT_AMOUNT_GREATER_THAN_AMOUNT_DUE' | undefined
                        description?: 'Payment amount is greater than the amount due.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INVOICE_TYPE' | undefined
                        description?:
                          | 'The invoice type is not valid for paying an invoice.'
                          | undefined
                      }
                    | {
                        issue?: 'CANNOT_PROCESS_PAYMENTS' | undefined
                        description?:
                          | 'Current invoice state does not support payment processing.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'PAYMENT_AMOUNT_GREATER_THAN_AMOUNT_DUE' | undefined
                        description?: 'Payment amount is greater than the amount due.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INVOICE_TYPE' | undefined
                        description?:
                          | 'The invoice type is not valid for paying an invoice.'
                          | undefined
                      }
                    | {
                        issue?: 'CANNOT_PROCESS_PAYMENTS' | undefined
                        description?:
                          | 'Current invoice state does not support payment processing.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: PaymentDetail }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id/payments/:transaction_id': {
      $delete:
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | {
                    issue?: 'CANNOT_DELETE_EXTERNAL_PAYMENT' | undefined
                    description?:
                      | 'The external payment cannot be deleted as the recorded refund cannot exceed the recored payment for an invoice.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id/refunds': {
      $post:
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: RefundReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: RefundReference
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?:
                          | 'Payment method is missing. Please provide a valid payment method.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_REFUND_METHOD' | undefined
                        description?:
                          | 'The value provided is not an acceptable method of refund.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'The value provided is not an acceptable method of refund.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'NOT_SUPPORTED' | undefined
                        description?:
                          | 'Currency code is not supported. Please provide a valid currency code.'
                          | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?:
                          | 'Amount value is missing. Please provide a valid amount.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'Amount value is invalid. Should be a numeric value.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Amount value cannot be greater than the maximum limit of 32 characters length.'
                          | undefined
                      }
                    | {
                        issue?: 'VALUE_CANNOT_BE_ZERO' | undefined
                        description?: 'Refund amount cannot be zero.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_VALUE' | undefined
                        description?:
                          | 'Refund amount value is invalid. Can have non-negative value with maximum 6 digits.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_DECIMAL_VALUE' | undefined
                        description?:
                          | 'Refund amount value is invalid. Can have non-negative value with maximum 7 digits and upto 2 fractions.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?:
                          | 'Payment method is missing. Please provide a valid payment method.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_REFUND_METHOD' | undefined
                        description?:
                          | 'The value provided is not an acceptable method of refund.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'The value provided is not an acceptable method of refund.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'NOT_SUPPORTED' | undefined
                        description?:
                          | 'Currency code is not supported. Please provide a valid currency code.'
                          | undefined
                      }
                    | {
                        issue?: 'MISSING_REQUIRED_PARAMETER' | undefined
                        description?:
                          | 'Amount value is missing. Please provide a valid amount.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'Amount value is invalid. Should be a numeric value.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Amount value cannot be greater than the maximum limit of 32 characters length.'
                          | undefined
                      }
                    | {
                        issue?: 'VALUE_CANNOT_BE_ZERO' | undefined
                        description?: 'Refund amount cannot be zero.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_VALUE' | undefined
                        description?:
                          | 'Refund amount value is invalid. Can have non-negative value with maximum 6 digits.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_DECIMAL_VALUE' | undefined
                        description?:
                          | 'Refund amount value is invalid. Can have non-negative value with maximum 7 digits and upto 2 fractions.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_REFUND_AMOUNT' | undefined
                        description?:
                          | 'Recorded refunds cannot exceed recorded payments.'
                          | undefined
                      }
                    | {
                        issue?: 'CANNOT_PROCESS_REFUNDS' | undefined
                        description?: 'Current invoice state does not support refunds.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_REFUND_AMOUNT' | undefined
                        description?:
                          | 'Recorded refunds cannot exceed recorded payments.'
                          | undefined
                      }
                    | {
                        issue?: 'CANNOT_PROCESS_REFUNDS' | undefined
                        description?: 'Current invoice state does not support refunds.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: RefundDetail }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id/refunds/:transaction_id': {
      $delete:
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_400
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { invoice_id: string; transaction_id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id/generate-qr-code': {
      $post:
        | {
            input: { param: { invoice_id: string } } & { json: QrConfig }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & { json: QrConfig }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'Value exceeds max value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'Value less than minimum value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'Value of the field does not conform to the expected format.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & { json: QrConfig }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & { json: QrConfig }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & { json: QrConfig }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & { json: QrConfig }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/generate-next-invoice-number': {
      $post:
        | { input: { json: Fetchtype }; output: InvoiceNumber; outputFormat: 'json'; status: 200 }
        | { input: { json: Fetchtype }; output: Error_400; outputFormat: 'json'; status: 400 }
        | { input: { json: Fetchtype }; output: Error_403; outputFormat: 'json'; status: 403 }
        | { input: { json: Fetchtype }; output: Error_500; outputFormat: 'json'; status: 500 }
        | { input: { json: Fetchtype }; output: ErrorDefault; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/invoicing/invoices/:invoice_id': {
      $get:
        | {
            input: { param: { invoice_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Address line2 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'National Number length should be between 1 and 14.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Address line1 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Country code is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Custom label length should be less than 50 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Given name length should be less than 140 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Language is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Admin area1 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Item quantity length should be 1 and 14.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Surname length should be less than 140 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Attachment reference url length should be between 1 and 2000.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Country code length should be 2 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Business name length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Minimum due amount length should be less than 32 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Attachment id length should be between 1 and 255.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Admin area2 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Tax name length should be less than 100.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Website url length should be less than 2048 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Postal code length should be less than 60 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'National Number is not valid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Memo length should be less than 4000 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Item name length should be less than 200 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'country code length should be between 1 and 3.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Template Id length should be less than 22 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Logo url length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Invoice note length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Reference field length should be less than 120 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Due date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Terms and Conditions length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Email address length should be between 3 and 254.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Additional data length should be less than 4000.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Additional information value length should be less than 40 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Tax id length should be less than 100 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Invoice date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Invoice date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Invoice number length should be less than 25 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Item Date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Item description length should be less than 1000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Shipping Tax name length should be less than 100 characters.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Address line2 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'National Number length should be between 1 and 14.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Address line1 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Country code is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Custom label length should be less than 50 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Given name length should be less than 140 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Language is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Admin area1 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Item quantity length should be 1 and 14.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Surname length should be less than 140 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Attachment reference url length should be between 1 and 2000.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Country code length should be 2 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Business name length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Minimum due amount length should be less than 32 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Attachment id length should be between 1 and 255.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Admin area2 length should be less than 300 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Tax name length should be less than 100.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Website url length should be less than 2048 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Postal code length should be less than 60 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'National Number is not valid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Memo length should be less than 4000 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Item name length should be less than 200 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'country code length should be between 1 and 3.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Template Id length should be less than 22 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Logo url length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Invoice note length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Reference field length should be less than 120 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Due date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Terms and Conditions length should be less than 4000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Email address length should be between 3 and 254.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Additional data length should be less than 4000.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Additional information value length should be less than 40 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Tax id length should be less than 100 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Invoice date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Invoice date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Invoice number length should be less than 25 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?: 'Item Date is invalid.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Item description length should be less than 1000 characters.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?:
                          | 'Shipping Tax name length should be less than 100 characters.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_NOT_FOUND' | undefined
                        description?:
                          | 'User is not associated with paypal based on invoicer email.'
                          | undefined
                      }
                    | {
                        issue?: 'AUTH_FLOW_REQUIRED' | undefined
                        description?: 'User is required to pass auth challenge' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'USER_NOT_FOUND' | undefined
                        description?:
                          | 'User is not associated with paypal based on invoicer email.'
                          | undefined
                      }
                    | {
                        issue?: 'AUTH_FLOW_REQUIRED' | undefined
                        description?: 'User is required to pass auth challenge' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: {
                send_to_recipient?: boolean | undefined
                send_to_invoicer?: boolean | undefined
              }
            } & { json: Invoice }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { invoice_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invoice_id: string } }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { invoice_id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/search-invoices': {
      $post:
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: Invoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: Invoices
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'Value exceeds max value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'Value less than minimum value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'the value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_ARRAY_MAX_ITEMS' | undefined
                        description?:
                          | 'the number of items in an array parameter is too large.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'the value of a field is either too short or too long.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'the value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'the value of a field does not conform to the expected format.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'Value exceeds max value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'Value less than minimum value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'the value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_ARRAY_MAX_ITEMS' | undefined
                        description?:
                          | 'the number of items in an array parameter is too large.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'the value of a field is either too short or too long.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'the value of a field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'the value of a field does not conform to the expected format.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: Error_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: Error_403
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                total_required?: boolean | undefined
              }
            } & { json: SearchData }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/templates': {
      $get:
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: Templates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: Templates
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'Value exceeds max value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'Value less than minimum value.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'INVALID_INTEGER_MAX_VALUE' | undefined
                        description?: 'Value exceeds max value.' | undefined
                      }
                    | {
                        issue?: 'INVALID_INTEGER_MIN_VALUE' | undefined
                        description?: 'Value less than minimum value.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: Error_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: Error_403
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: {
                fields?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
              }
            }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: Template }; output: Template; outputFormat: 'json'; status: 201 }
        | { input: { json: Template }; output: Template; outputFormat: 'text'; status: 201 }
        | {
            input: { json: Template }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'TEMPLATE_NAME_ALREADY_EXISTS' | undefined
                        description?: 'Template name already exists.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Template name length should be between 1 and 500.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'the value of a field is either too short or too long.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Value of the field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'the value of a field does not conform to the expected format.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Template }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'TEMPLATE_NAME_ALREADY_EXISTS' | undefined
                        description?: 'Template name already exists.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Template name length should be between 1 and 500.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'the value of a field is either too short or too long.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Value of the field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'the value of a field does not conform to the expected format.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | { input: { json: Template }; output: Error_403; outputFormat: 'json'; status: 403 }
        | { input: { json: Template }; output: Error_403; outputFormat: 'text'; status: 403 }
        | {
            input: { json: Template }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | {
                    issue?: 'CANNOT_CANCEL_DRAFT_INVOICE' | undefined
                    description?: 'Cannot cancel a draft invoice.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: Template }
            output: {
              name?: 'UNPROCESSABLE_ENTITY' | undefined
              message?:
                | 'The requested action could not be performed, semantically incorrect, or failed business validation.'
                | undefined
              details?:
                | {
                    issue?: 'CANNOT_CANCEL_DRAFT_INVOICE' | undefined
                    description?: 'Cannot cancel a draft invoice.' | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 422
          }
        | { input: { json: Template }; output: Error_500; outputFormat: 'json'; status: 500 }
        | { input: { json: Template }; output: Error_500; outputFormat: 'text'; status: 500 }
        | { input: { json: Template }; output: ErrorDefault; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/invoicing/templates/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: Template
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested template is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested template is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { template_id: string } }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_id: string } }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { template_id: string } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { template_id: string } }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { template_id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { template_id: string } } & { json: Template }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & { json: Template }
            output: {
              name?: 'INVALID_REQUEST' | undefined
              message?:
                | 'Request is not well-formed, syntactically incorrect, or violates schema.'
                | undefined
              details?:
                | (
                    | {
                        issue?: 'TEMPLATE_NAME_ALREADY_EXISTS' | undefined
                        description?: 'Template name already exists.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Template name length should be between 1 and 500.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?: 'Currency code length should be 3 characters.' | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_LENGTH' | undefined
                        description?:
                          | 'Value of the field is either too short or too long.'
                          | undefined
                      }
                    | {
                        issue?: 'INVALID_STRING_MAX_LENGTH' | undefined
                        description?: 'Value of the field is too long.' | undefined
                      }
                    | {
                        issue?: 'INVALID_PARAMETER_SYNTAX' | undefined
                        description?:
                          | 'Value of the field does not conform to the expected format.'
                          | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } } & { json: Template }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | {
                    issue?: 'PERMISSION_DENIED' | undefined
                    description?:
                      | 'The requested invoice is not associated with the requested user.'
                      | undefined
                  }[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_id: string } } & { json: Template }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_id: string } } & { json: Template }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { template_id: string } } & { json: Template }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { template_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { template_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | (
                    | {
                        issue?: 'PERMISSION_DENIED' | undefined
                        description?:
                          | 'The requested template is not associated with the requested user.'
                          | undefined
                      }
                    | {
                        issue?: 'CANNOT_DELETE_GLOBAL_TEMPLATE' | undefined
                        description?: 'Global templates cannot be deleted.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_id: string } }
            output: {
              name?: 'NOT_AUTHORIZED' | undefined
              message?: 'Authorization failed due to insufficient permissions.' | undefined
              details?:
                | (
                    | {
                        issue?: 'PERMISSION_DENIED' | undefined
                        description?:
                          | 'The requested template is not associated with the requested user.'
                          | undefined
                      }
                    | {
                        issue?: 'CANNOT_DELETE_GLOBAL_TEMPLATE' | undefined
                        description?: 'Global templates cannot be deleted.' | undefined
                      }
                  )[]
                | undefined
              debug_id?: string | undefined
              links?: ErrorLinkDescription[] | undefined
            }
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { template_id: string } }
            output: Error_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_id: string } }
            output: Error_404
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { template_id: string } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { template_id: string } }
            output: Error_500
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { template_id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v2/invoicing/accounting-sync/merchant/connections': {
      $get:
        | { input: {}; output: Connections; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error_400; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Error_403; outputFormat: 'json'; status: 403 }
        | { input: {}; output: Error_404; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error_500; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorDefault; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/invoicing/accounting-sync/invoices/:id/connections': {
      $get:
        | {
            input: { param: { id: string } }
            output: InvoiceConnectionDetails
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error_400; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: Error_403; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error_404; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error_500; outputFormat: 'json'; status: 500 }
        | {
            input: { param: { id: string } }
            output: ErrorDefault
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
