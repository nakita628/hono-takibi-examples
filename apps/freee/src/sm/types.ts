type SalesProgression = { id: string; name: string } | null
type BusinessPhase = { id: string; name: string } | null
type ReportingSection = { id: bigint; name: string } | null
type BusinessDigest = {
  id: string
  name: string
  business_date?: (string | null) | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  code: string
  canceled: boolean
  closed: boolean
  customer?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  sales_progression?: SalesProgression | undefined
  scheduled_completion_date?: (string | null) | undefined
  completion_date?: (string | null) | undefined
  business_phase?: BusinessPhase | undefined
  reporting_section?: ReportingSection | undefined
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
}
type PaginationMeta = {
  limit_value: number
  current_offset: number
  next_offset?: (number | null) | undefined
  prev_offset?: (number | null) | undefined
  total_count: number
}
type ProductError = { status_code: number; errors: { codes: string[]; messages: string[] }[] }
type AuthError = { message?: string | undefined; code?: string | undefined }
type ChargeEmployeeId = bigint | null
type ChargeMemberId = string | null
type CustomerId = bigint | null
type ReportingSectionId = bigint | null
type InternalMemo = string | null
type BusinessMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type CustomFieldPartnerValue = {
  type: 'partner'
  id: bigint
  name: string
  code?: (string | null) | undefined
}
type CustomFieldSectionValue = { type: 'section'; id: bigint; name: string }
type CustomFieldMasterItemValue = {
  type: 'master_item'
  id: string
  name: string
  code?: (string | null) | undefined
}
type CustomFieldMemberValue = { type: 'member'; id: string; name: string }
type CustomFieldMasterValue =
  | CustomFieldPartnerValue
  | CustomFieldSectionValue
  | CustomFieldMasterItemValue
  | CustomFieldMemberValue
type CustomField = {
  value: string | number | CustomFieldMasterValue
  definition_id: string
  definition_name: string
}
type BusinessDetail = {
  id: string
  name: string
  business_date?: (string | null) | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  code: string
  canceled: boolean
  closed: boolean
  customer?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  sales_progression?: SalesProgression | undefined
  scheduled_completion_date?: (string | null) | undefined
  completion_date?: (string | null) | undefined
  business_phase?: BusinessPhase | undefined
  reporting_section?: ReportingSection | undefined
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  common_business_id?: (string | null) | undefined
  actual_profit?: (bigint | null) | undefined
  sales_totals_excluding_tax?: (bigint | null) | undefined
  procurement_totals_excluding_tax?: (bigint | null) | undefined
  other_cost_totals_excluding_tax?: (bigint | null) | undefined
  prospect_sales_order?: (bigint | null) | undefined
  prospect_purchase_order?: (bigint | null) | undefined
  prospect_other_cost?: (bigint | null) | undefined
  quotation_totals_excluding_tax?: (bigint | null) | undefined
  sales_order_totals_excluding_tax?: (bigint | null) | undefined
  delivered_totals_excluding_tax?: (bigint | null) | undefined
  bill_totals_excluding_tax?: (bigint | null) | undefined
  purchase_order_totals_excluding_tax?: (bigint | null) | undefined
  actual_other_cost?: (bigint | null) | undefined
  prospect_profit?: (bigint | null) | undefined
  budget_profit?: (bigint | null) | undefined
  margin_actual_rate_percent?: (number | null) | undefined
  budget_total_labor_cost?: (bigint | null) | undefined
  actual_total_labor_cost?: (bigint | null) | undefined
  internal_memo?: InternalMemo | undefined
  custom_fields: CustomField[]
}
type WithCompanyId = { company_id: bigint }
type DatePeriod = { from: string; to: string }
type Business = { id: string; code: string; name: string; closed: boolean } | null
type BasicCostBudget = {
  id: string
  cost_budget_no: string
  canceled: boolean
  type: 'external_procurement' | 'other_cost'
  amount_excluding_tax: bigint
  date_period: DatePeriod
  business?: Business | undefined
  memo?: (string | null) | undefined
  reporting_section?: ReportingSection | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  registered_at: string
  last_updated_at: string
}
type MemoTagDetail = { id: bigint; name: string }
type ProcurementCostBudget = {
  id: string
  cost_budget_no: string
  canceled: boolean
  type: 'procurement'
  amount_excluding_tax: bigint
  date_period: DatePeriod
  business?: Business | undefined
  memo?: (string | null) | undefined
  reporting_section?: ReportingSection | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  registered_at: string
  last_updated_at: string
  supplier?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  payment_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  master_item?: { id: string; code?: (string | null) | undefined; name: string } | undefined
  deal_line_type: { id: string; name: string }
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  tax_division: { code: number; name: string }
  account_item: { id: bigint; name: string }
  memo_tags?: (MemoTagDetail[] | null) | undefined
  item_tag?: { id: bigint; name: string } | undefined
  segment_tag_1?: { id: bigint; name: string } | undefined
  segment_tag_2?: { id: bigint; name: string } | undefined
  segment_tag_3?: { id: bigint; name: string } | undefined
  accounting_reporting_section?: { id: bigint; name: string } | undefined
}
type CostBudgetDetail = BasicCostBudget | ProcurementCostBudget
type CostBudgetMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type BusinessPhase_2 = { id: string; name: string }
type SalesProgression_2 = { id: string; name: string }
type MasterItem = {
  id: string
  code: string
  name: string
  display_name: string
  uom_name?: (string | null) | undefined
  unit_price?: (number | null) | undefined
  tax_code?: (number | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  memo_tag_ids: bigint[]
  quantity?: (number | null) | undefined
  account_item_id?: (bigint | null) | undefined
  reduced?: (boolean | null) | undefined
}
type DealLineType = {
  id: string
  code?: (string | null) | undefined
  name: string
  type: 'sales' | 'procurement'
  account_item_id: bigint
  tax_code: number
  reduced: boolean
  is_default: boolean
}
type Employee_2 = { id: number; num?: (string | null) | undefined; display_name: string }
type MasterMember = { id: string; num: string; display_name: string }
type TextCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'text'
  required: boolean
  description?: (string | null) | undefined
}
type TextareaCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'textarea'
  required: boolean
  description?: (string | null) | undefined
}
type AmountCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'amount'
  required: boolean
  description?: (string | null) | undefined
}
type QuantityCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'quantity'
  required: boolean
  description?: (string | null) | undefined
}
type NumberCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'number'
  required: boolean
  description?: (string | null) | undefined
  unit?: (string | null) | undefined
}
type DateCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'date'
  required: boolean
  description?: (string | null) | undefined
}
type EnumCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'enum'
  required: boolean
  description?: (string | null) | undefined
  enumerations: { id: string; name: string; usable: boolean }[]
}
type PartnerCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'partner'
  required: boolean
  description?: (string | null) | undefined
}
type SectionCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'section'
  required: boolean
  description?: (string | null) | undefined
}
type MasterItemCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'master_item'
  required: boolean
  description?: (string | null) | undefined
}
type MemberCustomFieldDefinition = {
  id: string
  key: string
  display_name: string
  type: 'member'
  required: boolean
  description?: (string | null) | undefined
}
type CustomFieldDefinition =
  | TextCustomFieldDefinition
  | TextareaCustomFieldDefinition
  | AmountCustomFieldDefinition
  | QuantityCustomFieldDefinition
  | NumberCustomFieldDefinition
  | DateCustomFieldDefinition
  | EnumCustomFieldDefinition
  | PartnerCustomFieldDefinition
  | SectionCustomFieldDefinition
  | MasterItemCustomFieldDefinition
  | MemberCustomFieldDefinition
type ProcurementStatus = 'not_sold' | 'partially_sold' | 'sold'
type PaymentStatus = 'none' | 'not_settled' | 'partially_settled' | 'settled'
type AmountSet = { excluding_tax: bigint; tax: bigint; including_tax: bigint }
type PurchaseOrderDigest = {
  id: string
  canceled: boolean
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  registered_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  business?: Business | undefined
  purchase_order_no: string
  branch_no?: (number | null) | undefined
  internal_subject?: (string | null) | undefined
  purchase_order_date: string
  procurements_on?: (string | null) | undefined
  supplier: { id: bigint; name: string; code?: (string | null) | undefined }
  is_qualified_invoice_issuer?: (boolean | null) | undefined
  delivery_deadline?: (string | null) | undefined
  delivery_location?: (string | null) | undefined
  purchase_order_note?: (string | null) | undefined
  issued: boolean
  issued_on?: (string | null) | undefined
  purchase_order_template?: ({ id: bigint; name: string } | null) | undefined
  purchase_order_subject?: (string | null) | undefined
  procurement_status: ProcurementStatus
  recorded_procurement_amount_excluding_tax: bigint
  remaining_procurement_amount_excluding_tax: bigint
  payment_status: PaymentStatus
  payments_on?: (string | null) | undefined
  payment_method_type: {}
  payment_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: InternalMemo | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
}
type RecipientAddress = {
  official_name?: (string | null) | undefined
  default_title?: {} | undefined
  zipcode?: (string | null) | undefined
  prefecture_code?: (bigint | null) | undefined
  street_name1?: (string | null) | undefined
  street_name2?: (string | null) | undefined
  contact_department?: (string | null) | undefined
  contact_name?: (string | null) | undefined
}
type LineType = 'basic' | 'text'
type BasicLineParams = {
  line_type: LineType
  master_item_id?: (string | null) | undefined
  deal_line_type_id: string
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  accounting_reporting_section_id?: (bigint | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  memo_tags?: (bigint[] | null) | undefined
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
}
type TextLineParams = { line_type: {}; text: string }
type PurchaseOrderLineParams = BasicLineParams | TextLineParams
type PurchaseOrderMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type AmountSetRate = {
  rate: bigint
  reduced: boolean
  amount_set: AmountSet
  amount_of_deductible_tax?: (bigint | null) | undefined
}
type MasterItemDetail = { id: string; code?: (string | null) | undefined; name: string } | null
type DealLineTypeDetail = { id: string; name: string }
type TaxTypeDetail = { code: number; name: string } | null
type AccountingReportingSectionDetail = { id: bigint; name: string } | null
type ItemTagDetail = { id: bigint; name: string } | null
type BasicLineDetail = {
  line_no: number
  line_type: LineType
  master_item?: MasterItemDetail | undefined
  deal_line_type: DealLineTypeDetail
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  amount_set: AmountSet
  tax_type?: TaxTypeDetail | undefined
  accounting_reporting_section?: AccountingReportingSectionDetail | undefined
  item_tag?: ItemTagDetail | undefined
  memo_tags?: (MemoTagDetail[] | null) | undefined
  withholding_enabled: boolean
}
type TextLineDetail = { line_no: number; line_type: {}; text: string }
type PurchaseOrderLineDetail = BasicLineDetail | TextLineDetail
type PurchaseOrderDetail = {
  id: string
  canceled: boolean
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  registered_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  business?: Business | undefined
  purchase_order_no: string
  branch_no?: (number | null) | undefined
  internal_subject?: (string | null) | undefined
  purchase_order_date: string
  procurements_on?: (string | null) | undefined
  supplier: { id: bigint; name: string; code?: (string | null) | undefined }
  is_qualified_invoice_issuer?: (boolean | null) | undefined
  delivery_deadline?: (string | null) | undefined
  delivery_location?: (string | null) | undefined
  purchase_order_note?: (string | null) | undefined
  issued: boolean
  issued_on?: (string | null) | undefined
  purchase_order_template?: ({ id: bigint; name: string } | null) | undefined
  purchase_order_subject?: (string | null) | undefined
  procurement_status: ProcurementStatus
  recorded_procurement_amount_excluding_tax: bigint
  remaining_procurement_amount_excluding_tax: bigint
  payment_status: PaymentStatus
  payments_on?: (string | null) | undefined
  payment_method_type: {}
  payment_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: InternalMemo | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  amount_set_rates: AmountSetRate[]
  recipient_address: RecipientAddress
  lines: PurchaseOrderLineDetail[]
}
type QuotationStatus = 'unanswered' | 'order_received' | 'order_lost'
type DeliveryProgress = 'not_delivered' | 'partially_delivered' | 'delivered'
type DeliveryIssueProgress = 'not_issued' | 'partially_issued' | 'issued'
type SalesStatus = 'not_sold' | 'partially_sold' | 'sold'
type BillingStatus = 'not_billed' | 'partially_billed' | 'billed' | 'none'
type QuotationListItem = {
  id: string
  canceled: boolean
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  quotation_no: string
  branch_no?: (number | null) | undefined
  quotation_date: string
  quotation_subject?: (string | null) | undefined
  internal_subject?: (string | null) | undefined
  expires_on?: (string | null) | undefined
  delivery_deadline?: (string | null) | undefined
  delivery_location?: (string | null) | undefined
  issued: boolean
  issued_on?: (string | null) | undefined
  registered_at: string
  last_updated_at: string
  total_amount: bigint
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  quotation_status: QuotationStatus
  delivery_progress: DeliveryProgress
  delivery_issue_progress: DeliveryIssueProgress
  sales_status: SalesStatus
  billing_status: BillingStatus
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  business?: Business | undefined
  internal_memo?: InternalMemo | undefined
  quotation_note?: (string | null) | undefined
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  gross_profit_amount_excluding_tax?: (number | null) | undefined
  gross_profit_rate?: (number | null) | undefined
}
type QuotationGrossProfitParams = { cost: number; memo?: (string | null) | undefined } | null
type QuotationBasicLineParams = {
  line_type: LineType
  master_item_id?: (string | null) | undefined
  deal_line_type_id: string
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  accounting_reporting_section_id?: (bigint | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  memo_tags?: (bigint[] | null) | undefined
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
  gross_profit?: QuotationGrossProfitParams | undefined
}
type QuotationLineParams = QuotationBasicLineParams | TextLineParams
type QuotationMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type QuotationGrossProfitDetail = {
  cost?: (number | null) | undefined
  sales_price: number
  memo?: (string | null) | undefined
  profit_amount: number
  total_cost?: (number | null) | undefined
  total_price: number
  total_gross_profit: number
  cost_rate?: (number | null) | undefined
  profit_rate?: (number | null) | undefined
  markup_rate?: (number | null) | undefined
} | null
type QuotationBasicLineDetail = {
  line_no: number
  line_type: LineType
  master_item?: MasterItemDetail | undefined
  deal_line_type: DealLineTypeDetail
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  amount_set: AmountSet
  tax_type?: TaxTypeDetail | undefined
  accounting_reporting_section?: AccountingReportingSectionDetail | undefined
  item_tag?: ItemTagDetail | undefined
  memo_tags?: (MemoTagDetail[] | null) | undefined
  withholding_enabled: boolean
  gross_profit?: QuotationGrossProfitDetail | undefined
}
type QuotationLineDetail = QuotationBasicLineDetail | TextLineDetail
type QuotationGrossProfitSummary = {
  gross_profit_amount_excluding_tax: number
  gross_profit_rate?: (number | null) | undefined
} | null
type QuotationDetail = {
  id: string
  canceled: boolean
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  quotation_no: string
  branch_no?: (number | null) | undefined
  quotation_date: string
  quotation_subject?: (string | null) | undefined
  internal_subject?: (string | null) | undefined
  expires_on?: (string | null) | undefined
  delivery_deadline?: (string | null) | undefined
  delivery_location?: (string | null) | undefined
  issued: boolean
  issued_on?: (string | null) | undefined
  registered_at: string
  last_updated_at: string
  total_amount: bigint
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  quotation_status: QuotationStatus
  delivery_progress: DeliveryProgress
  delivery_issue_progress: DeliveryIssueProgress
  sales_status: SalesStatus
  billing_status: BillingStatus
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  business?: Business | undefined
  internal_memo?: InternalMemo | undefined
  quotation_note?: (string | null) | undefined
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  amount_set_rates: AmountSetRate[]
  quotation_template_name: string
  recipient_address: RecipientAddress
  lines: QuotationLineDetail[]
  gross_profit_summary?: QuotationGrossProfitSummary | undefined
}
type QuotationStatusForUpdate = 'unanswered' | 'order_lost'
type QuotationStatusChangeRequest = {
  company_id: bigint
  quotation_status: QuotationStatusForUpdate
}
type CollectionStatus = 'not_settled' | 'partially_settled' | 'settled' | 'invalidated' | 'none'
type SalesOrderDigest = {
  id: string
  sales_order_no: string
  sales_order_subject?: (string | null) | undefined
  sales_order_date: string
  customer_order_no?: (string | null) | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  sales_on?: (string | null) | undefined
  delivery_progress: DeliveryProgress
  sales_status: SalesStatus
  billing_status: BillingStatus
  collection_status: CollectionStatus
  business?: Business | undefined
  quotation_id?: (string | null) | undefined
  total_amount: bigint
  canceled: boolean
}
type BillingCreatingMethodType = 'automatically' | 'manually'
type CollectionMethodType = 'transfer' | 'cash' | 'bill_payable' | 'direct_debit'
type LineParams = BasicLineParams | TextLineParams
type SalesOrderMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type LineDetail = BasicLineDetail | TextLineDetail
type SalesOrderDetail = {
  id: string
  sales_order_no: string
  sales_order_subject?: (string | null) | undefined
  sales_order_date: string
  customer_order_no?: (string | null) | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  sales_on?: (string | null) | undefined
  delivery_progress: DeliveryProgress
  sales_status: SalesStatus
  billing_status: BillingStatus
  collection_status: CollectionStatus
  business?: Business | undefined
  quotation_id?: (string | null) | undefined
  total_amount: bigint
  canceled: boolean
  amount_set_rates: AmountSetRate[]
  deliveries_on?: (string | null) | undefined
  accepts_on?: (string | null) | undefined
  delivery_template_name: string
  delivery_subject?: (string | null) | undefined
  delivery_note?: (string | null) | undefined
  delivered_excluding_tax?: (bigint | null) | undefined
  remaining_delivered_tax?: (bigint | null) | undefined
  sales_excluding_tax?: (bigint | null) | undefined
  remaining_sales_order_excluding_tax?: (bigint | null) | undefined
  billing_creating_method_type: BillingCreatingMethodType
  bills_on?: (string | null) | undefined
  billing_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  invoice_template_name: string
  invoice_subject?: (string | null) | undefined
  invoice_note?: (string | null) | undefined
  collects_on?: (string | null) | undefined
  collecting_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  collection_method_type: CollectionMethodType
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: InternalMemo | undefined
  lines: LineDetail[]
}
type DeliveryStatus = 'not_delivered' | 'delivered'
type AcceptanceStatus = 'not_accepted' | 'accepted'
type DeliveryDigest = {
  id: string
  sales_order_id?: (string | null) | undefined
  delivery_status: DeliveryStatus
  acceptance_status: AcceptanceStatus
  canceled: boolean
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  total_amount: bigint
  business?: Business | undefined
  delivery_no: string
  branch_no?: (number | null) | undefined
  internal_subject?: (string | null) | undefined
  customer_order_no?: (string | null) | undefined
  delivery_date: string
  acceptance_date?: (string | null) | undefined
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  issued: boolean
  issued_on?: (string | null) | undefined
  subject?: (string | null) | undefined
  sales_status: SalesStatus
  billing_status: BillingStatus
  collection_status: CollectionStatus
}
type DeliveryLineParams = BasicLineParams | TextLineParams
type DeliveryMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type DeliveryDetail = {
  id: string
  sales_order_id?: (string | null) | undefined
  delivery_status: DeliveryStatus
  acceptance_status: AcceptanceStatus
  canceled: boolean
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  total_amount: bigint
  business?: Business | undefined
  delivery_no: string
  branch_no?: (number | null) | undefined
  internal_subject?: (string | null) | undefined
  customer_order_no?: (string | null) | undefined
  delivery_date: string
  acceptance_date?: (string | null) | undefined
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  issued: boolean
  issued_on?: (string | null) | undefined
  subject?: (string | null) | undefined
  sales_status: SalesStatus
  billing_status: BillingStatus
  collection_status: CollectionStatus
  amount_set_rates: AmountSetRate[]
  delivery_note?: (string | null) | undefined
  delivery_template_name: string
  recipient_address: RecipientAddress
  recorded_sales_amount_excluding_tax: bigint
  remaining_sales_amount_excluding_tax: bigint
  billing_creating_method_type: BillingCreatingMethodType
  bills_on?: (string | null) | undefined
  invoice_template_name: string
  billing_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  invoice_subject?: (string | null) | undefined
  invoice_note?: (string | null) | undefined
  collects_on?: (string | null) | undefined
  collection_method_type: CollectionMethodType
  collecting_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: InternalMemo | undefined
  lines: LineDetail[]
}
type DeliveryStatusChangeRequest = { company_id: bigint; delivery_status: DeliveryStatus }
type AcceptanceStatusChangeRequest = { company_id: bigint; acceptance_status: AcceptanceStatus }
type BillingCreatingStatus = 'not_created' | 'created' | 'canceled' | 'aka_created' | 'none'
type CollectionMethodTypeWithNone = 'transfer' | 'cash' | 'bill_payable' | 'direct_debit' | 'none'
type SaleDigest = {
  id: string
  deal_id?: (bigint | null) | undefined
  canceled: boolean
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  total_amount: bigint
  business?: Business | undefined
  sales_no: string
  subject?: (string | null) | undefined
  customer_order_no?: (string | null) | undefined
  revenue_recognition_date: string
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  billing_creating_status: BillingCreatingStatus
  billing_status: BillingStatus
  collection_status: CollectionStatus
  sales_order_id?: (string | null) | undefined
  delivery_id?: (string | null) | undefined
  advance_receipt_id?: (string | null) | undefined
  periodic_sales_id?: (string | null) | undefined
  bills_on?: (string | null) | undefined
  invoice_template_name: string
  billing_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  invoice_subject?: (string | null) | undefined
  invoice_note?: (string | null) | undefined
  billing_amount_excluding_tax?: (bigint | null) | undefined
  invoice_no?: (string | null) | undefined
  bill_id?: (string | null) | undefined
  collects_on?: (string | null) | undefined
  collection_method_type: CollectionMethodTypeWithNone
  collecting_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: (string | null) | undefined
}
type SaleBasicLineParams = {
  line_type: LineType
  master_item_id?: (string | null) | undefined
  deal_line_type_id: string
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  accounting_reporting_section_id?: (bigint | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  memo_tags?: (bigint[] | null) | undefined
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
  segment_tag_1_id?: (bigint | null) | undefined
  segment_tag_2_id?: (bigint | null) | undefined
  segment_tag_3_id?: (bigint | null) | undefined
}
type LineParams_2 = SaleBasicLineParams | TextLineParams
type SaleMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type AccountItem = { id: bigint; name: string }
type SegmentTag = { id: bigint; name: string } | null
type SaleBasicLineDetail = {
  line_no: number
  line_type: LineType
  master_item?: MasterItemDetail | undefined
  deal_line_type: DealLineTypeDetail
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  amount_set: AmountSet
  tax_type?: TaxTypeDetail | undefined
  accounting_reporting_section?: AccountingReportingSectionDetail | undefined
  item_tag?: ItemTagDetail | undefined
  memo_tags?: (MemoTagDetail[] | null) | undefined
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  account_item: AccountItem
  segment_tag_1?: SegmentTag | undefined
  segment_tag_2?: SegmentTag | undefined
  segment_tag_3?: SegmentTag | undefined
}
type SaleLineDetail = SaleBasicLineDetail | TextLineDetail
type SaleDetail = {
  id: string
  deal_id?: (bigint | null) | undefined
  canceled: boolean
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  total_amount: bigint
  business?: Business | undefined
  sales_no: string
  subject?: (string | null) | undefined
  customer_order_no?: (string | null) | undefined
  revenue_recognition_date: string
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  billing_creating_status: BillingCreatingStatus
  billing_status: BillingStatus
  collection_status: CollectionStatus
  sales_order_id?: (string | null) | undefined
  delivery_id?: (string | null) | undefined
  advance_receipt_id?: (string | null) | undefined
  periodic_sales_id?: (string | null) | undefined
  bills_on?: (string | null) | undefined
  invoice_template_name: string
  billing_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  invoice_subject?: (string | null) | undefined
  invoice_note?: (string | null) | undefined
  billing_amount_excluding_tax?: (bigint | null) | undefined
  invoice_no?: (string | null) | undefined
  bill_id?: (string | null) | undefined
  collects_on?: (string | null) | undefined
  collection_method_type: CollectionMethodTypeWithNone
  collecting_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: InternalMemo | undefined
  amount_set_rates: AmountSetRate[]
  lines: SaleLineDetail[]
}
type ManualSettlementStatus = 'not_settled' | 'partially_settled' | 'settled' | 'none'
type SaleCollectionStatusChangeRequest = {
  company_id: bigint
  collection_status: ManualSettlementStatus
}
type PeriodicSaleDigest = {
  id: string
  periodic_sales_no: string
  subject?: (string | null) | undefined
  canceled: boolean
  total_schedule_count?: (number | null) | undefined
  recorded_count?: (number | null) | undefined
  advance_receipt_id?: (string | null) | undefined
  registered_at: string
  last_updated_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  business?: Business | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  billing_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  collecting_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  invoice_note?: (string | null) | undefined
  internal_memo?: InternalMemo | undefined
}
type PeriodicSaleBasicLineParams = {
  line_type: LineType
  master_item_id?: (string | null) | undefined
  deal_line_type_id: string
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  accounting_reporting_section_id?: (bigint | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  memo_tags?: (bigint[] | null) | undefined
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
  segment_tag_1_id?: (bigint | null) | undefined
  segment_tag_2_id?: (bigint | null) | undefined
  segment_tag_3_id?: (bigint | null) | undefined
}
type PeriodicSaleLineParams = PeriodicSaleBasicLineParams | TextLineParams
type PeriodicSaleMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type RecurrenceRule = {
  start_date: string
  end_date: string
  interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
  day_of_month: {}
}
type PeriodicSaleBasicLineDetail = {
  line_no: number
  line_type: LineType
  master_item?: MasterItemDetail | undefined
  deal_line_type: DealLineTypeDetail
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  amount_set: AmountSet
  tax_type?: TaxTypeDetail | undefined
  accounting_reporting_section?: AccountingReportingSectionDetail | undefined
  item_tag?: ItemTagDetail | undefined
  memo_tags?: (MemoTagDetail[] | null) | undefined
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  segment_tag_1: { id: bigint; name: string }
  segment_tag_2: { id: bigint; name: string }
  segment_tag_3: { id: bigint; name: string }
}
type PeriodicSaleLineDetail = PeriodicSaleBasicLineDetail | TextLineDetail
type BillingCreatingMethodTypeWithNone = 'automatically' | 'manually' | 'none'
type SalesEntry = {
  status: 'actual' | 'scheduled'
  sales_schedule_id?: (string | null) | undefined
  scheduled_date: string
  actual_sales_id?: (string | null) | undefined
  actual_sales_revenue_recognition_date?: (string | null) | undefined
  amount_set: { excluding_tax: bigint; tax: bigint; including_tax: bigint }
  internal_memo?: {} | undefined
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  registered_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
}
type SalesScheduleRegistrationStatus = 'none' | 'in_progress' | 'error'
type SalesScheduleDigest = {
  id: string
  periodic_sales_id: string
  advance_receipt_id?: (string | null) | undefined
  subject?: (string | null) | undefined
  customer_order_no?: (string | null) | undefined
  scheduled_date: string
  registration_status: SalesScheduleRegistrationStatus
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  bills_on?: (string | null) | undefined
  billing_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  collects_on?: (string | null) | undefined
  collecting_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: { id: bigint; name: string } | undefined
  amount_set: { excluding_tax: bigint; tax: bigint; including_tax: bigint }
  total_amount: bigint
  amount_of_withholding_tax?: (bigint | null) | undefined
  business?: { id: string; code: string; name: string; closed: boolean } | undefined
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  registered_at: string
  last_updated_at: string
}
type SalesScheduleBasicLineDetail = {
  line_no: number
  line_type: LineType
  master_item?: MasterItemDetail | undefined
  deal_line_type: DealLineTypeDetail
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  amount_set: AmountSet
  tax_type?: TaxTypeDetail | undefined
  accounting_reporting_section?: AccountingReportingSectionDetail | undefined
  item_tag?: ItemTagDetail | undefined
  memo_tags?: (MemoTagDetail[] | null) | undefined
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  account_item: AccountItem
  segment_tag_1?: SegmentTag | undefined
  segment_tag_2?: SegmentTag | undefined
  segment_tag_3?: SegmentTag | undefined
}
type SalesScheduleLineDetail = SalesScheduleBasicLineDetail | TextLineDetail
type SalesScheduleDetail = {
  id: string
  periodic_sales_id: string
  advance_receipt_id?: (string | null) | undefined
  subject?: (string | null) | undefined
  customer_order_no?: (string | null) | undefined
  scheduled_date: string
  registration_status: SalesScheduleRegistrationStatus
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  billing_creating_method_type: BillingCreatingMethodTypeWithNone
  bills_on?: (string | null) | undefined
  invoice_template_name?: (string | null) | undefined
  billing_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  invoice_subject?: (string | null) | undefined
  invoice_note?: (string | null) | undefined
  collects_on?: (string | null) | undefined
  collecting_partner?: { id: bigint; name: string; code?: (string | null) | undefined } | undefined
  collection_method_type: CollectionMethodTypeWithNone
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: InternalMemo | undefined
  amount_set: { excluding_tax: bigint; tax: bigint; including_tax: bigint }
  amount_set_rates: AmountSetRate[]
  total_amount: bigint
  amount_of_withholding_tax?: (bigint | null) | undefined
  business?: Business | undefined
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  registered_at: string
  last_updated_at: string
  lines: SalesScheduleLineDetail[]
}
type SalesScheduleBasicLineParams = {
  line_type: LineType
  master_item_id?: (string | null) | undefined
  deal_line_type_id: string
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  accounting_reporting_section_id?: (bigint | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  memo_tags?: (bigint[] | null) | undefined
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
  segment_tag_1_id?: (bigint | null) | undefined
  segment_tag_2_id?: (bigint | null) | undefined
  segment_tag_3_id?: (bigint | null) | undefined
}
type SalesScheduleLineParams = SalesScheduleBasicLineParams | TextLineParams
type SalesScheduleMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type SalesScheduleActualizationResult = {
  id: string
  sales_id: string
  registered_at: string
  last_updated_at: string
}
type OtherCostDetail = {
  id: string
  other_cost_no: string
  canceled: boolean
  amount_excluding_tax: bigint
  incurred_date: string
  memo?: (string | null) | undefined
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  business?: Business | undefined
  deal_line?: ({ deal_id: bigint; deal_line_id: bigint } | null) | undefined
}
type OtherCostMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type ProcurementPaymentStatus = 'not_settled' | 'partially_settled' | 'settled' | 'none'
type PaymentMethodType = 'transfer' | 'cash' | 'bill_payable'
type ProcurementDigest = {
  id: string
  deal_id?: (bigint | null) | undefined
  canceled: boolean
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  procurement_no: string
  internal_subject?: (string | null) | undefined
  procurement_date: string
  supplier: { id: bigint; name: string; code?: (string | null) | undefined }
  is_qualified_invoice_issuer?: (boolean | null) | undefined
  payment_status: ProcurementPaymentStatus
  payments_on: string
  payment_method_type: PaymentMethodType
  payment_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  business?: { id: string; code: string; name: string; closed: boolean } | undefined
  purchase_order_id?: (string | null) | undefined
  internal_memo?: InternalMemo | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  registered_at: string
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
}
type ProcurementLineParams = {
  master_item_id?: (string | null) | undefined
  deal_line_type_id: string
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
  business_id?: (string | null) | undefined
  purchase_order_id?: (string | null) | undefined
  accounting_reporting_section_id?: (bigint | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  memo_tags?: (bigint[] | null) | undefined
  segment_tag_1_id?: (bigint | null) | undefined
  segment_tag_2_id?: (bigint | null) | undefined
  segment_tag_3_id?: (bigint | null) | undefined
}
type ProcurementMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type ProcurementUpdateLineParams = {
  master_item_id?: (string | null) | undefined
  deal_line_type_id: string
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  withholding_enabled: boolean
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
  business_id?: (string | null) | undefined
  purchase_order_id?: (string | null) | undefined
  accounting_reporting_section_id?: (bigint | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  memo_tags?: (bigint[] | null) | undefined
  segment_tag_1_id?: (bigint | null) | undefined
  segment_tag_2_id?: (bigint | null) | undefined
  segment_tag_3_id?: (bigint | null) | undefined
}
type PurchaseOrderRef = { id: string; purchase_order_no: string } | null
type ProcurementLineDetail = {
  line_no: number
  master_item?: MasterItemDetail | undefined
  deal_line_type: DealLineTypeDetail
  account_item: AccountItem
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  tax_type?: TaxTypeDetail | undefined
  withholding_enabled: boolean
  amount_set: AmountSet
  memo_tags?: (MemoTagDetail[] | null) | undefined
  item_tag?: ItemTagDetail | undefined
  accounting_reporting_section?: AccountingReportingSectionDetail | undefined
  segment_tag_1?: SegmentTag | undefined
  segment_tag_2?: SegmentTag | undefined
  segment_tag_3?: SegmentTag | undefined
  business?: Business | undefined
  purchase_order?: PurchaseOrderRef | undefined
}
type ProcurementDetail = {
  id: string
  deal_id?: (bigint | null) | undefined
  canceled: boolean
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  procurement_no: string
  internal_subject?: (string | null) | undefined
  procurement_date: string
  supplier: { id: bigint; name: string; code?: (string | null) | undefined }
  is_qualified_invoice_issuer?: (boolean | null) | undefined
  payment_status: ProcurementPaymentStatus
  payments_on: string
  payment_method_type: PaymentMethodType
  payment_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  business?: { id: string; code: string; name: string; closed: boolean } | undefined
  purchase_order_id?: (string | null) | undefined
  internal_memo?: InternalMemo | undefined
  amount_set: AmountSet
  amount_of_withholding_tax?: (bigint | null) | undefined
  registered_at: string
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  amount_set_rates: AmountSetRate[]
  lines: ProcurementLineDetail[]
}
type ProcurementPaymentStatusChangeRequest = {
  company_id: bigint
  payment_status: ManualSettlementStatus
}
type AdvanceReceiptDigest = {
  id: string
  deal_id?: (bigint | null) | undefined
  canceled: boolean
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  amount_set: AmountSet
  total_amount: bigint
  business: { id: string; code: string; name: string; closed: boolean }
  advance_receipt_no: string
  advance_receipt_date: string
  internal_subject?: (string | null) | undefined
  customer_order_no?: (string | null) | undefined
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  bill_id?: (string | null) | undefined
  billing_status: {}
  billing_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  bills_on?: (string | null) | undefined
  is_reduced: boolean
  invoice_subject?: (string | null) | undefined
  invoice_note?: (string | null) | undefined
  collecting_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  collection_method_type: CollectionMethodType
  collects_on?: (string | null) | undefined
  collection_status: {}
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: InternalMemo | undefined
  sales_order_id?: (string | null) | undefined
  consumption_total_amount: bigint
  remaining_total_expense: bigint
}
type AdvanceReceiptBasicLineParams = {
  line_type: 'basic'
  deal_line_type_id: string
  master_item_id?: (string | null) | undefined
  description?: (string | null) | undefined
  quantity: number
  unit_price: number
  uom_name?: (string | null) | undefined
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
}
type AdvanceReceiptMinimalResponse = { id: string; registered_at: string; last_updated_at: string }
type InvoiceTemplate = {
  id: bigint
  name: string
  layout_name?: (string | null) | undefined
  is_default: boolean
  report_type: { id: {}; name: string }
}
type AdvanceReceiptBasicLineDetail = {
  line_no: number
  line_type: 'basic'
  master_item?: MasterItemDetail | undefined
  deal_line_type: DealLineTypeDetail
  description?: (string | null) | undefined
  quantity: number
  uom_name?: (string | null) | undefined
  unit_price: number
  amount_set: AmountSet
  tax_type?: TaxTypeDetail | undefined
}
type AdvanceReceiptDetail = {
  id: string
  deal_id?: (bigint | null) | undefined
  canceled: boolean
  registered_at: string
  registered_by: { id: bigint; display_name: string }
  registered_by_member?: { id: string; display_name: string } | undefined
  last_updated_at: string
  last_updated_by: { id: bigint; display_name: string }
  last_updated_by_member?: { id: string; display_name: string } | undefined
  amount_set: AmountSet
  total_amount: bigint
  business: { id: string; code: string; name: string; closed: boolean }
  advance_receipt_no: string
  advance_receipt_date: string
  internal_subject?: (string | null) | undefined
  customer_order_no?: (string | null) | undefined
  customer: { id: bigint; name: string; code?: (string | null) | undefined }
  bill_id?: (string | null) | undefined
  billing_status: {}
  billing_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  bills_on?: (string | null) | undefined
  is_reduced: boolean
  invoice_subject?: (string | null) | undefined
  invoice_note?: (string | null) | undefined
  collecting_partner: { id: bigint; name: string; code?: (string | null) | undefined }
  collection_method_type: CollectionMethodType
  collects_on?: (string | null) | undefined
  collection_status: {}
  charge_employee?: { id: bigint; display_name: string } | undefined
  charge_member?: { id: string; display_name: string } | undefined
  reporting_section?: ReportingSection | undefined
  internal_memo?: InternalMemo | undefined
  sales_order_id?: (string | null) | undefined
  consumption_total_amount: bigint
  remaining_total_expense: bigint
  account_item: { id: bigint; name: string }
  item_tag?: { id: bigint; name: string } | undefined
  memo_tags?: (MemoTagDetail[] | null) | undefined
  segment_tag_1?: { id: bigint; name: string } | undefined
  segment_tag_2?: { id: bigint; name: string } | undefined
  segment_tag_3?: { id: bigint; name: string } | undefined
  invoice_template: InvoiceTemplate
  lines: AdvanceReceiptBasicLineDetail[]
  amount_set_rates: AmountSetRate[]
}
type AdvanceReceiptReductionLineParams = {
  line_type: 'basic'
  deal_line_type_id: string
  master_item_id?: (string | null) | undefined
  description?: (string | null) | undefined
  quantity: number
  unit_price: number
  uom_name?: (string | null) | undefined
  item_tag_id?: (bigint | null) | undefined
  accounting_reporting_section_id?: (bigint | null) | undefined
  memo_tags?: (bigint[] | null) | undefined
  is_manual_tax_entry: boolean
  tax?: (bigint | null) | undefined
  segment_tag_1_id?: (bigint | null) | undefined
  segment_tag_2_id?: (bigint | null) | undefined
  segment_tag_3_id?: (bigint | null) | undefined
}
type AdvanceReceiptReductionResult = {
  id: string
  sales_id: string
  registered_at: string
  last_updated_at: string
}
type AdvanceReceiptPeriodicReductionResult = {
  id: string
  periodic_sales_id: string
  registered_at: string
  last_updated_at: string
}
type AdvanceReceiptCollectionStatusChangeRequest = {
  company_id: bigint
  collection_status: 'not_settled' | 'settled' | 'none'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/businesses': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_business_date?: string | undefined
                end_business_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'sales_progression_ids[]'?: string[] | undefined
                'business_phase_ids[]'?: string[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                code?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { businesses: BusinessDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_business_date?: string | undefined
                end_business_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'sales_progression_ids[]'?: string[] | undefined
                'business_phase_ids[]'?: string[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                code?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_business_date?: string | undefined
                end_business_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'sales_progression_ids[]'?: string[] | undefined
                'business_phase_ids[]'?: string[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                code?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_business_date?: string | undefined
                end_business_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'sales_progression_ids[]'?: string[] | undefined
                'business_phase_ids[]'?: string[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                code?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_business_date?: string | undefined
                end_business_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'sales_progression_ids[]'?: string[] | undefined
                'business_phase_ids[]'?: string[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                code?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_business_date?: string | undefined
                end_business_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'sales_progression_ids[]'?: string[] | undefined
                'business_phase_ids[]'?: string[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                code?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_business_date?: string | undefined
                end_business_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'sales_progression_ids[]'?: string[] | undefined
                'business_phase_ids[]'?: string[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                code?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: BusinessMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/businesses/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: BusinessDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: BusinessMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                name?: string | undefined
                code?: string | undefined
                business_date?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: CustomerId | undefined
                prospect_sales_order?: bigint | undefined
                sales_progression_id?: (string | null) | undefined
                scheduled_completion_date?: (string | null) | undefined
                completion_date?: (string | null) | undefined
                business_phase_id?: (string | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                common_business_id?: (string | null) | undefined
                custom_fields?:
                  | ({ definition_id: string; value: string | number }[] | null)
                  | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/businesses/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: BusinessMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/businesses/:id/close': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: BusinessMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/businesses/:id/reopen': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: BusinessMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cost_budgets': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'procurement' | 'external_procurement' | 'other_cost' | undefined
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                start_date_period?: string | undefined
                end_date_period?: string | undefined
                'master_item_ids[]'?: string[] | undefined
                start_quantity?: bigint | undefined
                end_quantity?: bigint | undefined
                start_unit_price?: bigint | undefined
                end_unit_price?: bigint | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'payment_partner_ids[]'?: bigint[] | undefined
                'accounting_reporting_section_ids[]'?: {} | undefined
                'item_tag_ids[]'?: bigint[] | undefined
                'segment_tag_1_ids[]'?: bigint[] | undefined
                'segment_tag_2_ids[]'?: bigint[] | undefined
                'segment_tag_3_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                cost_budget_no?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { cost_budgets: CostBudgetDetail[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'procurement' | 'external_procurement' | 'other_cost' | undefined
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                start_date_period?: string | undefined
                end_date_period?: string | undefined
                'master_item_ids[]'?: string[] | undefined
                start_quantity?: bigint | undefined
                end_quantity?: bigint | undefined
                start_unit_price?: bigint | undefined
                end_unit_price?: bigint | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'payment_partner_ids[]'?: bigint[] | undefined
                'accounting_reporting_section_ids[]'?: {} | undefined
                'item_tag_ids[]'?: bigint[] | undefined
                'segment_tag_1_ids[]'?: bigint[] | undefined
                'segment_tag_2_ids[]'?: bigint[] | undefined
                'segment_tag_3_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                cost_budget_no?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'procurement' | 'external_procurement' | 'other_cost' | undefined
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                start_date_period?: string | undefined
                end_date_period?: string | undefined
                'master_item_ids[]'?: string[] | undefined
                start_quantity?: bigint | undefined
                end_quantity?: bigint | undefined
                start_unit_price?: bigint | undefined
                end_unit_price?: bigint | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'payment_partner_ids[]'?: bigint[] | undefined
                'accounting_reporting_section_ids[]'?: {} | undefined
                'item_tag_ids[]'?: bigint[] | undefined
                'segment_tag_1_ids[]'?: bigint[] | undefined
                'segment_tag_2_ids[]'?: bigint[] | undefined
                'segment_tag_3_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                cost_budget_no?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'procurement' | 'external_procurement' | 'other_cost' | undefined
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                start_date_period?: string | undefined
                end_date_period?: string | undefined
                'master_item_ids[]'?: string[] | undefined
                start_quantity?: bigint | undefined
                end_quantity?: bigint | undefined
                start_unit_price?: bigint | undefined
                end_unit_price?: bigint | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'payment_partner_ids[]'?: bigint[] | undefined
                'accounting_reporting_section_ids[]'?: {} | undefined
                'item_tag_ids[]'?: bigint[] | undefined
                'segment_tag_1_ids[]'?: bigint[] | undefined
                'segment_tag_2_ids[]'?: bigint[] | undefined
                'segment_tag_3_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                cost_budget_no?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'procurement' | 'external_procurement' | 'other_cost' | undefined
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                start_date_period?: string | undefined
                end_date_period?: string | undefined
                'master_item_ids[]'?: string[] | undefined
                start_quantity?: bigint | undefined
                end_quantity?: bigint | undefined
                start_unit_price?: bigint | undefined
                end_unit_price?: bigint | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'payment_partner_ids[]'?: bigint[] | undefined
                'accounting_reporting_section_ids[]'?: {} | undefined
                'item_tag_ids[]'?: bigint[] | undefined
                'segment_tag_1_ids[]'?: bigint[] | undefined
                'segment_tag_2_ids[]'?: bigint[] | undefined
                'segment_tag_3_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                cost_budget_no?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'procurement' | 'external_procurement' | 'other_cost' | undefined
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                start_date_period?: string | undefined
                end_date_period?: string | undefined
                'master_item_ids[]'?: string[] | undefined
                start_quantity?: bigint | undefined
                end_quantity?: bigint | undefined
                start_unit_price?: bigint | undefined
                end_unit_price?: bigint | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'payment_partner_ids[]'?: bigint[] | undefined
                'accounting_reporting_section_ids[]'?: {} | undefined
                'item_tag_ids[]'?: bigint[] | undefined
                'segment_tag_1_ids[]'?: bigint[] | undefined
                'segment_tag_2_ids[]'?: bigint[] | undefined
                'segment_tag_3_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                cost_budget_no?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                type?: 'procurement' | 'external_procurement' | 'other_cost' | undefined
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                start_date_period?: string | undefined
                end_date_period?: string | undefined
                'master_item_ids[]'?: string[] | undefined
                start_quantity?: bigint | undefined
                end_quantity?: bigint | undefined
                start_unit_price?: bigint | undefined
                end_unit_price?: bigint | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'payment_partner_ids[]'?: bigint[] | undefined
                'accounting_reporting_section_ids[]'?: {} | undefined
                'item_tag_ids[]'?: bigint[] | undefined
                'segment_tag_1_ids[]'?: bigint[] | undefined
                'segment_tag_2_ids[]'?: bigint[] | undefined
                'segment_tag_3_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                cost_budget_no?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: { company_id: bigint } }
            output: CostBudgetMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cost_budgets/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: CostBudgetDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                period_from_date?: string | undefined
                period_to_date?: string | undefined
                memo?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: (bigint | null) | undefined
                amount_excluding_tax?: bigint | undefined
                supplier_id?: (bigint | null) | undefined
                payment_partner_id?: (bigint | null) | undefined
                quantity?: number | undefined
                unit_price?: number | undefined
                uom_name?: (string | null) | undefined
                master_item_id?: (string | null) | undefined
                deal_line_type_id?: string | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                memo_tag_ids?: (bigint[] | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: CostBudgetMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                period_from_date?: string | undefined
                period_to_date?: string | undefined
                memo?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: (bigint | null) | undefined
                amount_excluding_tax?: bigint | undefined
                supplier_id?: (bigint | null) | undefined
                payment_partner_id?: (bigint | null) | undefined
                quantity?: number | undefined
                unit_price?: number | undefined
                uom_name?: (string | null) | undefined
                master_item_id?: (string | null) | undefined
                deal_line_type_id?: string | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                memo_tag_ids?: (bigint[] | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                period_from_date?: string | undefined
                period_to_date?: string | undefined
                memo?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: (bigint | null) | undefined
                amount_excluding_tax?: bigint | undefined
                supplier_id?: (bigint | null) | undefined
                payment_partner_id?: (bigint | null) | undefined
                quantity?: number | undefined
                unit_price?: number | undefined
                uom_name?: (string | null) | undefined
                master_item_id?: (string | null) | undefined
                deal_line_type_id?: string | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                memo_tag_ids?: (bigint[] | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                period_from_date?: string | undefined
                period_to_date?: string | undefined
                memo?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: (bigint | null) | undefined
                amount_excluding_tax?: bigint | undefined
                supplier_id?: (bigint | null) | undefined
                payment_partner_id?: (bigint | null) | undefined
                quantity?: number | undefined
                unit_price?: number | undefined
                uom_name?: (string | null) | undefined
                master_item_id?: (string | null) | undefined
                deal_line_type_id?: string | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                memo_tag_ids?: (bigint[] | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                period_from_date?: string | undefined
                period_to_date?: string | undefined
                memo?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: (bigint | null) | undefined
                amount_excluding_tax?: bigint | undefined
                supplier_id?: (bigint | null) | undefined
                payment_partner_id?: (bigint | null) | undefined
                quantity?: number | undefined
                unit_price?: number | undefined
                uom_name?: (string | null) | undefined
                master_item_id?: (string | null) | undefined
                deal_line_type_id?: string | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                memo_tag_ids?: (bigint[] | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                period_from_date?: string | undefined
                period_to_date?: string | undefined
                memo?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: (bigint | null) | undefined
                amount_excluding_tax?: bigint | undefined
                supplier_id?: (bigint | null) | undefined
                payment_partner_id?: (bigint | null) | undefined
                quantity?: number | undefined
                unit_price?: number | undefined
                uom_name?: (string | null) | undefined
                master_item_id?: (string | null) | undefined
                deal_line_type_id?: string | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                memo_tag_ids?: (bigint[] | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                period_from_date?: string | undefined
                period_to_date?: string | undefined
                memo?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: (bigint | null) | undefined
                amount_excluding_tax?: bigint | undefined
                supplier_id?: (bigint | null) | undefined
                payment_partner_id?: (bigint | null) | undefined
                quantity?: number | undefined
                unit_price?: number | undefined
                uom_name?: (string | null) | undefined
                master_item_id?: (string | null) | undefined
                deal_line_type_id?: string | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                memo_tag_ids?: (bigint[] | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                period_from_date?: string | undefined
                period_to_date?: string | undefined
                memo?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: (bigint | null) | undefined
                amount_excluding_tax?: bigint | undefined
                supplier_id?: (bigint | null) | undefined
                payment_partner_id?: (bigint | null) | undefined
                quantity?: number | undefined
                unit_price?: number | undefined
                uom_name?: (string | null) | undefined
                master_item_id?: (string | null) | undefined
                deal_line_type_id?: string | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                memo_tag_ids?: (bigint[] | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cost_budgets/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: CostBudgetMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/master/business_phases': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: { business_phases: BusinessPhase_2[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/master/sales_progressions': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: { sales_progressions: SalesProgression_2[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/master/items': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                offset?: number | undefined
                limit?: number | undefined
                type: 'sales' | 'procurement'
              }
            }
            output: { items: MasterItem[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: number | undefined
                limit?: number | undefined
                type: 'sales' | 'procurement'
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: number | undefined
                limit?: number | undefined
                type: 'sales' | 'procurement'
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: number | undefined
                limit?: number | undefined
                type: 'sales' | 'procurement'
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: number | undefined
                limit?: number | undefined
                type: 'sales' | 'procurement'
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: number | undefined
                limit?: number | undefined
                type: 'sales' | 'procurement'
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                offset?: number | undefined
                limit?: number | undefined
                type: 'sales' | 'procurement'
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/master/deal_line_types': {
      $get:
        | {
            input: { query: { company_id: bigint; type: 'sales' | 'procurement' } }
            output: { deal_line_types: DealLineType[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint; type: 'sales' | 'procurement' } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint; type: 'sales' | 'procurement' } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint; type: 'sales' | 'procurement' } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint; type: 'sales' | 'procurement' } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { company_id: bigint; type: 'sales' | 'procurement' } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { company_id: bigint; type: 'sales' | 'procurement' } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/master/employees': {
      $get:
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: { employees: Employee_2[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/master/members': {
      $get:
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: { members: MasterMember[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { company_id: bigint; offset?: number | undefined; limit?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/master/custom_fields/business/definitions': {
      $get:
        | {
            input: { query: { company_id: bigint } }
            output: { custom_field_definitions: CustomFieldDefinition[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { company_id: bigint } }
            output: ProductError
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
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                purchase_order_no?: string | undefined
                payment_status?:
                  | 'none'
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | undefined
                issued?: boolean | undefined
                procurement_status?: 'not_sold' | 'partially_sold' | 'sold' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { purchase_orders: PurchaseOrderDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                purchase_order_no?: string | undefined
                payment_status?:
                  | 'none'
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | undefined
                issued?: boolean | undefined
                procurement_status?: 'not_sold' | 'partially_sold' | 'sold' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                purchase_order_no?: string | undefined
                payment_status?:
                  | 'none'
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | undefined
                issued?: boolean | undefined
                procurement_status?: 'not_sold' | 'partially_sold' | 'sold' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                purchase_order_no?: string | undefined
                payment_status?:
                  | 'none'
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | undefined
                issued?: boolean | undefined
                procurement_status?: 'not_sold' | 'partially_sold' | 'sold' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                purchase_order_no?: string | undefined
                payment_status?:
                  | 'none'
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | undefined
                issued?: boolean | undefined
                procurement_status?: 'not_sold' | 'partially_sold' | 'sold' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                purchase_order_no?: string | undefined
                payment_status?:
                  | 'none'
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | undefined
                issued?: boolean | undefined
                procurement_status?: 'not_sold' | 'partially_sold' | 'sold' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_purchase_order_date?: string | undefined
                end_purchase_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                purchase_order_no?: string | undefined
                payment_status?:
                  | 'none'
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | undefined
                issued?: boolean | undefined
                procurement_status?: 'not_sold' | 'partially_sold' | 'sold' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: PurchaseOrderMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/purchase_orders/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: PurchaseOrderDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                branch_no?: (number | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: PurchaseOrderMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                branch_no?: (number | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                branch_no?: (number | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                branch_no?: (number | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                branch_no?: (number | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                branch_no?: (number | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                branch_no?: (number | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                branch_no?: (number | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                purchase_order_date?: string | undefined
                procurements_on?: (string | null) | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                purchase_order_note?: (string | null) | undefined
                purchase_order_template_id?: (bigint | null) | undefined
                purchase_order_subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                payments_on?: (string | null) | undefined
                payment_method_type?: {} | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PurchaseOrderLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/purchase_orders/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: PurchaseOrderMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
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
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                quotation_no?: string | undefined
                start_gross_profit_amount_excluding_tax?: number | undefined
                end_gross_profit_amount_excluding_tax?: number | undefined
                start_gross_profit_rate?: number | undefined
                end_gross_profit_rate?: number | undefined
                quotation_status?: 'unanswered' | 'order_received' | 'order_lost' | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { quotations: QuotationListItem[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                quotation_no?: string | undefined
                start_gross_profit_amount_excluding_tax?: number | undefined
                end_gross_profit_amount_excluding_tax?: number | undefined
                start_gross_profit_rate?: number | undefined
                end_gross_profit_rate?: number | undefined
                quotation_status?: 'unanswered' | 'order_received' | 'order_lost' | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                quotation_no?: string | undefined
                start_gross_profit_amount_excluding_tax?: number | undefined
                end_gross_profit_amount_excluding_tax?: number | undefined
                start_gross_profit_rate?: number | undefined
                end_gross_profit_rate?: number | undefined
                quotation_status?: 'unanswered' | 'order_received' | 'order_lost' | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                quotation_no?: string | undefined
                start_gross_profit_amount_excluding_tax?: number | undefined
                end_gross_profit_amount_excluding_tax?: number | undefined
                start_gross_profit_rate?: number | undefined
                end_gross_profit_rate?: number | undefined
                quotation_status?: 'unanswered' | 'order_received' | 'order_lost' | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                quotation_no?: string | undefined
                start_gross_profit_amount_excluding_tax?: number | undefined
                end_gross_profit_amount_excluding_tax?: number | undefined
                start_gross_profit_rate?: number | undefined
                end_gross_profit_rate?: number | undefined
                quotation_status?: 'unanswered' | 'order_received' | 'order_lost' | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                quotation_no?: string | undefined
                start_gross_profit_amount_excluding_tax?: number | undefined
                end_gross_profit_amount_excluding_tax?: number | undefined
                start_gross_profit_rate?: number | undefined
                end_gross_profit_rate?: number | undefined
                quotation_status?: 'unanswered' | 'order_received' | 'order_lost' | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_quotation_date?: string | undefined
                end_quotation_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                quotation_no?: string | undefined
                start_gross_profit_amount_excluding_tax?: number | undefined
                end_gross_profit_amount_excluding_tax?: number | undefined
                start_gross_profit_rate?: number | undefined
                end_gross_profit_rate?: number | undefined
                quotation_status?: 'unanswered' | 'order_received' | 'order_lost' | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
              }
            }
            output: QuotationMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/quotations/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: QuotationDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: QuotationMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                quotation_date?: string | undefined
                customer_id?: bigint | undefined
                expires_on?: (string | null) | undefined
                delivery_deadline?: (string | null) | undefined
                delivery_location?: (string | null) | undefined
                quotation_template_id?: (bigint | null) | undefined
                quotation_subject?: (string | null) | undefined
                quotation_note?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: QuotationLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/quotations/:id/quotation_status': {
      $put:
        | {
            input: { param: { id: string } } & { json: QuotationStatusChangeRequest }
            output: QuotationMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: QuotationStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: QuotationStatusChangeRequest }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: QuotationStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: QuotationStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: QuotationStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: QuotationStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: QuotationStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/quotations/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: QuotationMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales_orders': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_sales_order_date?: string | undefined
                end_sales_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                sales_order_no?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { sales_orders: SalesOrderDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_sales_order_date?: string | undefined
                end_sales_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                sales_order_no?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_sales_order_date?: string | undefined
                end_sales_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                sales_order_no?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_sales_order_date?: string | undefined
                end_sales_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                sales_order_no?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_sales_order_date?: string | undefined
                end_sales_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                sales_order_no?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_sales_order_date?: string | undefined
                end_sales_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                sales_order_no?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_sales_order_date?: string | undefined
                end_sales_order_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                sales_order_no?: string | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: SalesOrderMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales_orders/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: SalesOrderDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: bigint | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: SalesOrderMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: bigint | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: bigint | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: bigint | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: bigint | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: bigint | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: bigint | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                sales_order_subject?: (string | null) | undefined
                sales_order_date?: string | undefined
                customer_order_no?: (string | null) | undefined
                customer_id?: bigint | undefined
                sales_on?: (string | null) | undefined
                deliveries_on?: (string | null) | undefined
                accepts_on?: (string | null) | undefined
                delivery_template_id?: bigint | undefined
                delivery_subject?: (string | null) | undefined
                delivery_note?: (string | null) | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                business_id?: (string | null) | undefined
                quotation_id?: (string | null) | undefined
                lines?: LineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales_orders/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: SalesOrderMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deliveries': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_delivery_date?: string | undefined
                end_delivery_date?: string | undefined
                start_acceptance_date?: string | undefined
                end_acceptance_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                delivery_no?: string | undefined
                delivery_status?: 'not_delivered' | 'delivered' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { deliveries: DeliveryDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_delivery_date?: string | undefined
                end_delivery_date?: string | undefined
                start_acceptance_date?: string | undefined
                end_acceptance_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                delivery_no?: string | undefined
                delivery_status?: 'not_delivered' | 'delivered' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_delivery_date?: string | undefined
                end_delivery_date?: string | undefined
                start_acceptance_date?: string | undefined
                end_acceptance_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                delivery_no?: string | undefined
                delivery_status?: 'not_delivered' | 'delivered' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_delivery_date?: string | undefined
                end_delivery_date?: string | undefined
                start_acceptance_date?: string | undefined
                end_acceptance_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                delivery_no?: string | undefined
                delivery_status?: 'not_delivered' | 'delivered' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_delivery_date?: string | undefined
                end_delivery_date?: string | undefined
                start_acceptance_date?: string | undefined
                end_acceptance_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                delivery_no?: string | undefined
                delivery_status?: 'not_delivered' | 'delivered' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_delivery_date?: string | undefined
                end_delivery_date?: string | undefined
                start_acceptance_date?: string | undefined
                end_acceptance_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                delivery_no?: string | undefined
                delivery_status?: 'not_delivered' | 'delivered' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_delivery_date?: string | undefined
                end_delivery_date?: string | undefined
                start_acceptance_date?: string | undefined
                end_acceptance_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                delivery_no?: string | undefined
                delivery_status?: 'not_delivered' | 'delivered' | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
              }
            }
            output: DeliveryMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deliveries/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: DeliveryDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: DeliveryMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                internal_subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                delivery_date?: string | undefined
                acceptance_date?: (string | null) | undefined
                customer_id?: bigint | undefined
                delivery_note?: (string | null) | undefined
                delivery_template_id?: (bigint | null) | undefined
                subject?: (string | null) | undefined
                recipient_address?: RecipientAddress | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: DeliveryLineParams[] | undefined
                branch_no?: (number | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deliveries/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: DeliveryMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deliveries/:id/delivery_status': {
      $put:
        | {
            input: { param: { id: string } } & { json: DeliveryStatusChangeRequest }
            output: DeliveryMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DeliveryStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DeliveryStatusChangeRequest }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: DeliveryStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: DeliveryStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: DeliveryStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: DeliveryStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: DeliveryStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deliveries/:id/acceptance_status': {
      $put:
        | {
            input: { param: { id: string } } & { json: AcceptanceStatusChangeRequest }
            output: DeliveryMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AcceptanceStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AcceptanceStatusChangeRequest }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AcceptanceStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AcceptanceStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AcceptanceStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: AcceptanceStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: AcceptanceStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_revenue_recognition_date?: string | undefined
                end_revenue_recognition_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                sales_no?: string | undefined
                billing_status?: 'not_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { sales: SaleDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_revenue_recognition_date?: string | undefined
                end_revenue_recognition_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                sales_no?: string | undefined
                billing_status?: 'not_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_revenue_recognition_date?: string | undefined
                end_revenue_recognition_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                sales_no?: string | undefined
                billing_status?: 'not_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_revenue_recognition_date?: string | undefined
                end_revenue_recognition_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                sales_no?: string | undefined
                billing_status?: 'not_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_revenue_recognition_date?: string | undefined
                end_revenue_recognition_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                sales_no?: string | undefined
                billing_status?: 'not_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_revenue_recognition_date?: string | undefined
                end_revenue_recognition_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                sales_no?: string | undefined
                billing_status?: 'not_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_revenue_recognition_date?: string | undefined
                end_revenue_recognition_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'customer_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                sales_no?: string | undefined
                billing_status?: 'not_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                billing_creating_method_type: BillingCreatingMethodType
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: SaleMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                billing_creating_method_type: BillingCreatingMethodType
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                billing_creating_method_type: BillingCreatingMethodType
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                billing_creating_method_type: BillingCreatingMethodType
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                billing_creating_method_type: BillingCreatingMethodType
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                billing_creating_method_type: BillingCreatingMethodType
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                billing_creating_method_type: BillingCreatingMethodType
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                billing_creating_method_type: BillingCreatingMethodType
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: SaleDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: bigint | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: SaleMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: bigint | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: bigint | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: bigint | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: bigint | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: bigint | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: bigint | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                revenue_recognition_date?: string | undefined
                customer_id?: bigint | undefined
                bills_on?: (string | null) | undefined
                invoice_template_id?: bigint | undefined
                billing_partner_id?: bigint | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collection_method_type?: CollectionMethodType | undefined
                collecting_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: LineParams_2[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: SaleMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales/:id/collection_status': {
      $put:
        | {
            input: { param: { id: string } } & { json: SaleCollectionStatusChangeRequest }
            output: SaleMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SaleCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SaleCollectionStatusChangeRequest }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SaleCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SaleCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SaleCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: SaleCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: SaleCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/periodic_sales': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                canceled?: boolean | undefined
                start_recurrence_period?: string | undefined
                end_recurrence_period?: string | undefined
                start_recorded_count?: number | undefined
                end_recorded_count?: number | undefined
                start_total_schedule_count?: number | undefined
                end_total_schedule_count?: number | undefined
                start_next_sales_on?: string | undefined
                end_next_sales_on?: string | undefined
                start_last_revenue_recognition_date?: string | undefined
                end_last_revenue_recognition_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                periodic_sales_no?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { periodic_sales: PeriodicSaleDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                canceled?: boolean | undefined
                start_recurrence_period?: string | undefined
                end_recurrence_period?: string | undefined
                start_recorded_count?: number | undefined
                end_recorded_count?: number | undefined
                start_total_schedule_count?: number | undefined
                end_total_schedule_count?: number | undefined
                start_next_sales_on?: string | undefined
                end_next_sales_on?: string | undefined
                start_last_revenue_recognition_date?: string | undefined
                end_last_revenue_recognition_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                periodic_sales_no?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                canceled?: boolean | undefined
                start_recurrence_period?: string | undefined
                end_recurrence_period?: string | undefined
                start_recorded_count?: number | undefined
                end_recorded_count?: number | undefined
                start_total_schedule_count?: number | undefined
                end_total_schedule_count?: number | undefined
                start_next_sales_on?: string | undefined
                end_next_sales_on?: string | undefined
                start_last_revenue_recognition_date?: string | undefined
                end_last_revenue_recognition_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                periodic_sales_no?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                canceled?: boolean | undefined
                start_recurrence_period?: string | undefined
                end_recurrence_period?: string | undefined
                start_recorded_count?: number | undefined
                end_recorded_count?: number | undefined
                start_total_schedule_count?: number | undefined
                end_total_schedule_count?: number | undefined
                start_next_sales_on?: string | undefined
                end_next_sales_on?: string | undefined
                start_last_revenue_recognition_date?: string | undefined
                end_last_revenue_recognition_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                periodic_sales_no?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                canceled?: boolean | undefined
                start_recurrence_period?: string | undefined
                end_recurrence_period?: string | undefined
                start_recorded_count?: number | undefined
                end_recorded_count?: number | undefined
                start_total_schedule_count?: number | undefined
                end_total_schedule_count?: number | undefined
                start_next_sales_on?: string | undefined
                end_next_sales_on?: string | undefined
                start_last_revenue_recognition_date?: string | undefined
                end_last_revenue_recognition_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                periodic_sales_no?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                canceled?: boolean | undefined
                start_recurrence_period?: string | undefined
                end_recurrence_period?: string | undefined
                start_recorded_count?: number | undefined
                end_recorded_count?: number | undefined
                start_total_schedule_count?: number | undefined
                end_total_schedule_count?: number | undefined
                start_next_sales_on?: string | undefined
                end_next_sales_on?: string | undefined
                start_last_revenue_recognition_date?: string | undefined
                end_last_revenue_recognition_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                periodic_sales_no?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                canceled?: boolean | undefined
                start_recurrence_period?: string | undefined
                end_recurrence_period?: string | undefined
                start_recorded_count?: number | undefined
                end_recorded_count?: number | undefined
                start_total_schedule_count?: number | undefined
                end_total_schedule_count?: number | undefined
                start_next_sales_on?: string | undefined
                end_next_sales_on?: string | undefined
                start_last_revenue_recognition_date?: string | undefined
                end_last_revenue_recognition_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                periodic_sales_no?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: PeriodicSaleMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/periodic_sales/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: {
              id: string
              periodic_sales_no: string
              subject?: (string | null) | undefined
              canceled: boolean
              total_schedule_count?: (number | null) | undefined
              recorded_count?: (number | null) | undefined
              advance_receipt_id?: (string | null) | undefined
              registered_at: string
              last_updated_at: string
              registered_by: { id: bigint; display_name: string }
              registered_by_member?: { id: string; display_name: string } | undefined
              last_updated_by: { id: bigint; display_name: string }
              last_updated_by_member?: { id: string; display_name: string } | undefined
              customer: { id: bigint; name: string; code?: (string | null) | undefined }
              business?: Business | undefined
              charge_employee?: { id: bigint; display_name: string } | undefined
              charge_member?: { id: string; display_name: string } | undefined
              reporting_section?: ReportingSection | undefined
              billing_partner?:
                | { id: bigint; name: string; code?: (string | null) | undefined }
                | undefined
              collecting_partner?:
                | { id: bigint; name: string; code?: (string | null) | undefined }
                | undefined
              invoice_note?: (string | null) | undefined
              internal_memo?: InternalMemo | undefined
              total_amount_set: AmountSet
              each_amount_set: { excluding_tax: bigint; tax: bigint; including_tax: bigint }
              each_amount_set_rates: AmountSetRate[]
              customer_order_no: string | null
              recurrence_rule: RecurrenceRule
              next_sales_on: string | null
              lines: PeriodicSaleLineDetail[]
              billing_creating_method_type: BillingCreatingMethodTypeWithNone
              bills_on_rule: { cutoff_day: {}; additional_months: number; fixed_day: {} }
              invoice_template_name?: (string | null) | undefined
              invoice_subject?: (string | null) | undefined
              collects_on_rule: { cutoff_day: {}; additional_months: number; fixed_day: {} }
              collection_method_type: CollectionMethodTypeWithNone
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: PeriodicSaleMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                recurrence_rule?:
                  | {
                      start_date: string
                      end_date: string
                      interval: '1' | '2' | '3' | '6' | '12' | 'even' | 'odd'
                      day_of_month: number
                    }
                  | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: bigint | undefined
                bills_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on_rule?:
                  | ({ cutoff_day: number; additional_months: number; fixed_day: number } | null)
                  | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: PeriodicSaleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/periodic_sales/:id/sales_entries': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { company_id: bigint; limit?: number | undefined; offset?: number | undefined }
            }
            output: { sales_entries: SalesEntry[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { company_id: bigint; limit?: number | undefined; offset?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { company_id: bigint; limit?: number | undefined; offset?: number | undefined }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { company_id: bigint; limit?: number | undefined; offset?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { company_id: bigint; limit?: number | undefined; offset?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { company_id: bigint; limit?: number | undefined; offset?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { company_id: bigint; limit?: number | undefined; offset?: number | undefined }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/periodic_sales/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: PeriodicSaleMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales_schedules': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                periodic_sales_id?: string | undefined
                start_scheduled_date?: string | undefined
                end_scheduled_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                start_bills_on?: string | undefined
                end_bills_on?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { sales_schedules: SalesScheduleDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                periodic_sales_id?: string | undefined
                start_scheduled_date?: string | undefined
                end_scheduled_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                start_bills_on?: string | undefined
                end_bills_on?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                periodic_sales_id?: string | undefined
                start_scheduled_date?: string | undefined
                end_scheduled_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                start_bills_on?: string | undefined
                end_bills_on?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                periodic_sales_id?: string | undefined
                start_scheduled_date?: string | undefined
                end_scheduled_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                start_bills_on?: string | undefined
                end_bills_on?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                periodic_sales_id?: string | undefined
                start_scheduled_date?: string | undefined
                end_scheduled_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                start_bills_on?: string | undefined
                end_bills_on?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                periodic_sales_id?: string | undefined
                start_scheduled_date?: string | undefined
                end_scheduled_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                start_bills_on?: string | undefined
                end_bills_on?: string | undefined
                start_collects_on?: string | undefined
                end_collects_on?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'reporting_section_ids[]'?: {} | undefined
                'business_ids[]'?: string[] | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales_schedules/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: SalesScheduleDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                scheduled_date?: string | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: SalesScheduleLineParams[] | undefined
              }
            }
            output: SalesScheduleMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                scheduled_date?: string | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: SalesScheduleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                scheduled_date?: string | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: SalesScheduleLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                scheduled_date?: string | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: SalesScheduleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                scheduled_date?: string | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: SalesScheduleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                scheduled_date?: string | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: SalesScheduleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                scheduled_date?: string | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: SalesScheduleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id?: bigint | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                scheduled_date?: string | undefined
                billing_creating_method_type?: BillingCreatingMethodType | undefined
                bills_on?: (string | null) | undefined
                billing_partner_id?: bigint | undefined
                invoice_template_id?: (bigint | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                collects_on?: (string | null) | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: SalesScheduleLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: SalesScheduleMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sales_schedules/:id/actualization': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: SalesScheduleActualizationResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/other_costs': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                'business_ids[]'?: string[] | undefined
                other_cost_no?: string | undefined
                canceled?: boolean | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_incurred_date?: string | undefined
                end_incurred_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { other_costs: OtherCostDetail[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                'business_ids[]'?: string[] | undefined
                other_cost_no?: string | undefined
                canceled?: boolean | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_incurred_date?: string | undefined
                end_incurred_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                'business_ids[]'?: string[] | undefined
                other_cost_no?: string | undefined
                canceled?: boolean | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_incurred_date?: string | undefined
                end_incurred_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                'business_ids[]'?: string[] | undefined
                other_cost_no?: string | undefined
                canceled?: boolean | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_incurred_date?: string | undefined
                end_incurred_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                'business_ids[]'?: string[] | undefined
                other_cost_no?: string | undefined
                canceled?: boolean | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_incurred_date?: string | undefined
                end_incurred_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                'business_ids[]'?: string[] | undefined
                other_cost_no?: string | undefined
                canceled?: boolean | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_incurred_date?: string | undefined
                end_incurred_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_amount_excluding_tax?: bigint | undefined
                end_amount_excluding_tax?: bigint | undefined
                'business_ids[]'?: string[] | undefined
                other_cost_no?: string | undefined
                canceled?: boolean | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_incurred_date?: string | undefined
                end_incurred_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax: bigint
                incurred_date: string
                memo?: (string | null) | undefined
              }
            }
            output: OtherCostMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax: bigint
                incurred_date: string
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax: bigint
                incurred_date: string
                memo?: (string | null) | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax: bigint
                incurred_date: string
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax: bigint
                incurred_date: string
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax: bigint
                incurred_date: string
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax: bigint
                incurred_date: string
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax: bigint
                incurred_date: string
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/other_costs/:id': {
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax?: bigint | undefined
                incurred_date?: string | undefined
                memo?: (string | null) | undefined
              }
            }
            output: OtherCostMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax?: bigint | undefined
                incurred_date?: string | undefined
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax?: bigint | undefined
                incurred_date?: string | undefined
                memo?: (string | null) | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax?: bigint | undefined
                incurred_date?: string | undefined
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax?: bigint | undefined
                incurred_date?: string | undefined
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax?: bigint | undefined
                incurred_date?: string | undefined
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax?: bigint | undefined
                incurred_date?: string | undefined
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                business_id?: (string | null) | undefined
                amount_excluding_tax?: bigint | undefined
                incurred_date?: string | undefined
                memo?: (string | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: OtherCostDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/other_costs/:id/restoration': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: OtherCostMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/other_costs/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: OtherCostMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/procurements': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_procurement_date?: string | undefined
                end_procurement_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                procurement_no?: string | undefined
                payment_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { procurements: ProcurementDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_procurement_date?: string | undefined
                end_procurement_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                procurement_no?: string | undefined
                payment_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_procurement_date?: string | undefined
                end_procurement_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                procurement_no?: string | undefined
                payment_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_procurement_date?: string | undefined
                end_procurement_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                procurement_no?: string | undefined
                payment_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_procurement_date?: string | undefined
                end_procurement_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                procurement_no?: string | undefined
                payment_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_procurement_date?: string | undefined
                end_procurement_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                procurement_no?: string | undefined
                payment_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                start_procurement_date?: string | undefined
                end_procurement_date?: string | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'supplier_ids[]'?: bigint[] | undefined
                'business_ids[]'?: string[] | undefined
                procurement_no?: string | undefined
                payment_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementLineParams[] | undefined
              }
            }
            output: ProcurementMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/procurements/:id': {
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementUpdateLineParams[] | undefined
              }
            }
            output: ProcurementMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementUpdateLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementUpdateLineParams[] | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementUpdateLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementUpdateLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementUpdateLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementUpdateLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                internal_subject?: (string | null) | undefined
                procurement_date?: string | undefined
                supplier_id?: bigint | undefined
                is_qualified_invoice_issuer?: (boolean | null) | undefined
                payments_on?: string | undefined
                payment_method_type?: PaymentMethodType | undefined
                payment_partner_id?: bigint | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines?: ProcurementUpdateLineParams[] | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProcurementDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/procurements/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProcurementMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/procurements/:id/payment_status': {
      $put:
        | {
            input: { param: { id: string } } & { json: ProcurementPaymentStatusChangeRequest }
            output: ProcurementMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ProcurementPaymentStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ProcurementPaymentStatusChangeRequest }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ProcurementPaymentStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ProcurementPaymentStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ProcurementPaymentStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: ProcurementPaymentStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: ProcurementPaymentStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/advance_receipts': {
      $get:
        | {
            input: {
              query: {
                company_id: bigint
                advance_receipt_no?: string | undefined
                start_advance_receipt_date?: string | undefined
                end_advance_receipt_date?: string | undefined
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'business_ids[]'?: string[] | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'invalidated'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { advance_receipts: AdvanceReceiptDigest[]; meta: PaginationMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: bigint
                advance_receipt_no?: string | undefined
                start_advance_receipt_date?: string | undefined
                end_advance_receipt_date?: string | undefined
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'business_ids[]'?: string[] | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'invalidated'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: bigint
                advance_receipt_no?: string | undefined
                start_advance_receipt_date?: string | undefined
                end_advance_receipt_date?: string | undefined
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'business_ids[]'?: string[] | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'invalidated'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: bigint
                advance_receipt_no?: string | undefined
                start_advance_receipt_date?: string | undefined
                end_advance_receipt_date?: string | undefined
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'business_ids[]'?: string[] | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'invalidated'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: bigint
                advance_receipt_no?: string | undefined
                start_advance_receipt_date?: string | undefined
                end_advance_receipt_date?: string | undefined
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'business_ids[]'?: string[] | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'invalidated'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: bigint
                advance_receipt_no?: string | undefined
                start_advance_receipt_date?: string | undefined
                end_advance_receipt_date?: string | undefined
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'business_ids[]'?: string[] | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'invalidated'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                company_id: bigint
                advance_receipt_no?: string | undefined
                start_advance_receipt_date?: string | undefined
                end_advance_receipt_date?: string | undefined
                start_registered_date?: string | undefined
                end_registered_date?: string | undefined
                start_last_updated_date?: string | undefined
                end_last_updated_date?: string | undefined
                'customer_ids[]'?: bigint[] | undefined
                'charge_employee_ids[]'?: bigint[] | undefined
                'charge_member_ids[]'?: string[] | undefined
                'business_ids[]'?: string[] | undefined
                billing_status?: 'not_billed' | 'partially_billed' | 'billed' | 'none' | undefined
                collection_status?:
                  | 'not_settled'
                  | 'partially_settled'
                  | 'settled'
                  | 'invalidated'
                  | 'none'
                  | undefined
                canceled?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                billing_partner_id?: bigint | undefined
                bills_on?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on?: string | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                sales_order_id?: (string | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: AdvanceReceiptMinimalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                billing_partner_id?: bigint | undefined
                bills_on?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on?: string | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                sales_order_id?: (string | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                billing_partner_id?: bigint | undefined
                bills_on?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on?: string | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                sales_order_id?: (string | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                billing_partner_id?: bigint | undefined
                bills_on?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on?: string | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                sales_order_id?: (string | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                billing_partner_id?: bigint | undefined
                bills_on?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on?: string | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                sales_order_id?: (string | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                billing_partner_id?: bigint | undefined
                bills_on?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on?: string | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                sales_order_id?: (string | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                billing_partner_id?: bigint | undefined
                bills_on?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on?: string | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                sales_order_id?: (string | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                billing_partner_id?: bigint | undefined
                bills_on?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                collecting_partner_id?: bigint | undefined
                collection_method_type?: CollectionMethodType | undefined
                collects_on?: string | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                invoice_note?: (string | null) | undefined
                invoice_subject?: (string | null) | undefined
                invoice_template_id?: (bigint | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                sales_order_id?: (string | null) | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/advance_receipts/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AdvanceReceiptDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { company_id: bigint } }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: AdvanceReceiptMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                account_item_id?: bigint | undefined
                accounting_reporting_section_id?: (bigint | null) | undefined
                advance_receipt_date?: string | undefined
                business_id?: string | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                customer_id?: bigint | undefined
                customer_order_no?: (string | null) | undefined
                internal_memo?: InternalMemo | undefined
                internal_subject?: (string | null) | undefined
                item_tag_id?: (bigint | null) | undefined
                lines?: AdvanceReceiptBasicLineParams[] | undefined
                memo_tags?: (bigint[] | null) | undefined
                reporting_section_id?: ReportingSectionId | undefined
                segment_tag_1_id?: (bigint | null) | undefined
                segment_tag_2_id?: (bigint | null) | undefined
                segment_tag_3_id?: (bigint | null) | undefined
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/advance_receipts/:id/cancellation': {
      $post:
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AdvanceReceiptMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: WithCompanyId }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/advance_receipts/:id/reduction': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                revenue_recognition_date: string
                customer_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: AdvanceReceiptReductionResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                revenue_recognition_date: string
                customer_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                revenue_recognition_date: string
                customer_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                revenue_recognition_date: string
                customer_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                revenue_recognition_date: string
                customer_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                revenue_recognition_date: string
                customer_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                revenue_recognition_date: string
                customer_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                revenue_recognition_date: string
                customer_id: bigint
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                sales_order_id?: (string | null) | undefined
                delivery_id?: (string | null) | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/advance_receipts/:id/periodic_reduction': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id: bigint
                recurrence_rule: RecurrenceRule
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: AdvanceReceiptPeriodicReductionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id: bigint
                recurrence_rule: RecurrenceRule
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id: bigint
                recurrence_rule: RecurrenceRule
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id: bigint
                recurrence_rule: RecurrenceRule
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id: bigint
                recurrence_rule: RecurrenceRule
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id: bigint
                recurrence_rule: RecurrenceRule
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id: bigint
                recurrence_rule: RecurrenceRule
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              json: {
                company_id: bigint
                customer_id: bigint
                recurrence_rule: RecurrenceRule
                business_id?: (string | null) | undefined
                subject?: (string | null) | undefined
                customer_order_no?: (string | null) | undefined
                charge_employee_id?: ChargeEmployeeId | undefined
                charge_member_id?: ChargeMemberId | undefined
                reporting_section_id?: ReportingSectionId | undefined
                internal_memo?: InternalMemo | undefined
                lines: AdvanceReceiptReductionLineParams[]
              }
            }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/advance_receipts/:id/collection_status': {
      $put:
        | {
            input: { param: { id: string } } & { json: AdvanceReceiptCollectionStatusChangeRequest }
            output: AdvanceReceiptMinimalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AdvanceReceiptCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AdvanceReceiptCollectionStatusChangeRequest }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AdvanceReceiptCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AdvanceReceiptCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AdvanceReceiptCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: AdvanceReceiptCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: AdvanceReceiptCollectionStatusChangeRequest }
            output: ProductError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
