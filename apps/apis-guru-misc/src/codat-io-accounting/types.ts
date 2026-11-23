type BankAccountBankAccountRef = { id?: string | undefined; name?: string | undefined }
type TransferTransferAccountCurrency = string
type BillPaymentBillPaymentLineLinkCurrencyRate = number | null
type DateTime = string
type DirectCostTrackingInvoiceTo = { dataType?: string | undefined; id?: string | undefined }
type AccountTransactionAccountTransactionLine = {
  amount?: number | undefined
  description?: (string | null) | undefined
  recordRef?: DirectCostTrackingInvoiceTo | undefined
}
type Metadata = { isDeleted?: (boolean | null) | undefined }
type AccountTransaction = {
  bankAccountRef?: BankAccountBankAccountRef | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  date?: DateTime | undefined
  id?: string | undefined
  lines?: (AccountTransactionAccountTransactionLine[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  status?: 'Unknown' | 'Unreconciled' | 'Reconciled' | 'Void' | undefined
  totalAmount?: number | undefined
  transactionId?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type HalRef = { href?: string | undefined }
type Links = {
  current: HalRef
  next?: HalRef | undefined
  previous?: HalRef | undefined
  self: HalRef
}
type AccountTransactions = {
  results?: AccountTransaction[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BankAccount = {
  accountName?: (string | null) | undefined
  accountNumber?: (string | null) | undefined
  accountType?: 'Unknown' | 'Credit' | 'Debit' | undefined
  availableBalance?: (number | null) | undefined
  balance?: (number | null) | undefined
  currency?: TransferTransferAccountCurrency | undefined
  iBan?: (string | null) | undefined
  id?: string | undefined
  institution?: (string | null) | undefined
  metadata?: Metadata | undefined
  nominalCode?: (string | null) | undefined
  overdraftLimit?: (number | null) | undefined
  sortCode?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type BankAccounts = {
  results?: BankAccount[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BankTransactionsBankTransactionType =
  | 'Unknown'
  | 'Credit'
  | 'Debit'
  | 'Int'
  | 'Div'
  | 'Fee'
  | 'SerChg'
  | 'Dep'
  | 'Atm'
  | 'Pos'
  | 'Xfer'
  | 'Check'
  | 'Payment'
  | 'Cash'
  | 'DirectDep'
  | 'DirectDebit'
  | 'RepeatPmt'
  | 'Other'
type BankTransactionsBankTransactionLine = {
  amount?: number | undefined
  balance?: number | undefined
  clearedOnDate?: DateTime | undefined
  counterparty?: (string | null) | undefined
  description?: (string | null) | undefined
  id?: string | undefined
  reconciled?: boolean | undefined
  reference?: (string | null) | undefined
  transactionType?: BankTransactionsBankTransactionType | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type BankTransactions = {
  accountId?: (string | null) | undefined
  transactions?: (BankTransactionsBankTransactionLine[] | null) | undefined
}
type BankTransactionsResponse = {
  results?: BankTransactions[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Attachment = {
  contentType?: (string | null) | undefined
  dateCreated?: DateTime | undefined
  fileSize?: (number | null) | undefined
  id?: string | undefined
  includeWhenSent?: boolean | undefined
  name?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type AttachmentsDataset = { attachments?: (Attachment[] | null) | undefined }
type TransferAllOf0ContactRef = { dataType?: (string | null) | undefined; id: string }
type AccountAccountRef = { id?: string | undefined; name?: string | undefined }
type ItemItemRef = { id: string; name?: (string | null) | undefined }
type TaxRateTaxRateRef = {
  effectiveTaxRate?: number | undefined
  id?: string | undefined
  name?: string | undefined
}
type DirectCostTracking = {
  invoiceTo?: DirectCostTrackingInvoiceTo | undefined
  recordRefs: DirectCostTrackingInvoiceTo[]
}
type TrackingCategoryTrackingCategoryRef = { id: string; name?: (string | null) | undefined }
type DirectCostDirectCostLineItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  discountAmount?: (number | null) | undefined
  discountPercentage?: (number | null) | undefined
  itemRef?: ItemItemRef | undefined
  quantity: number
  subTotal?: (number | null) | undefined
  taxAmount?: (number | null) | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  totalAmount?: (number | null) | undefined
  tracking?: DirectCostTracking | undefined
  trackingCategoryRefs?: (TrackingCategoryTrackingCategoryRef[] | null) | undefined
  unitAmount: number
}
type BillAllOf0PaymentAllocationsItemsPaymentAllocationPayment = {
  accountRef?: AccountAccountRef | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  id?: string | undefined
  note?: (string | null) | undefined
  paidOnDate?: DateTime | undefined
  reference?: (string | null) | undefined
  totalAmount?: number | undefined
}
type BillAllOf0PaymentAllocationsItems = {
  allocation: {
    allocatedOnDate?: DateTime | undefined
    currency?: TransferTransferAccountCurrency | undefined
    currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
    totalAmount?: number | undefined
  }
  payment: BillAllOf0PaymentAllocationsItemsPaymentAllocationPayment
}
type BillAllOf0SupplementalData = {
  content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined
}
type DirectCost = {
  contactRef?: TransferAllOf0ContactRef | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?: DirectCostDirectCostLineItem[] | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?: BillAllOf0PaymentAllocationsItems[] | undefined
  reference?: (string | null) | undefined
  subTotal?: number | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  taxAmount?: number | undefined
  totalAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type DirectCosts = {
  results?: DirectCost[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type DirectIncomeDirectIncomeLineItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  discountAmount?: (number | null) | undefined
  discountPercentage?: (number | null) | undefined
  itemRef?: ItemItemRef | undefined
  quantity: number
  subTotal?: (number | null) | undefined
  taxAmount?: (number | null) | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  totalAmount?: (number | null) | undefined
  trackingCategoryRefs?: (TrackingCategoryTrackingCategoryRef[] | null) | undefined
  unitAmount: number
}
type DirectIncome = {
  contactRef?: TransferAllOf0ContactRef | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?: DirectIncomeDirectIncomeLineItem[] | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?: BillAllOf0PaymentAllocationsItems[] | undefined
  reference?: (string | null) | undefined
  subTotal?: number | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  taxAmount?: number | undefined
  totalAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type DirectIncomes = {
  results?: DirectIncome[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TransferTransferAccount = {
  accountRef?: AccountAccountRef | undefined
  amount?: number | undefined
  currency?: TransferTransferAccountCurrency | undefined
}
type Transfer = {
  contactRef?: TransferAllOf0ContactRef | undefined
  date?: DateTime | undefined
  depositedRecordRefs?: (string[] | null) | undefined
  description?: (string | null) | undefined
  from?: TransferTransferAccount | undefined
  id?: string | undefined
  metadata?: Metadata | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  to?: TransferTransferAccount | undefined
  trackingCategoryRefs?: (TrackingCategoryTrackingCategoryRef[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Transfers = {
  results?: Transfer[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PushOptionPushOptionType =
  | 'Array'
  | 'Object'
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'DateTime'
  | 'File'
  | 'MultiPart'
type PushOptionPushOptionChoice = {
  description?: string | undefined
  displayName?: string | undefined
  required?: boolean | undefined
  type?: PushOptionPushOptionType | undefined
  value?: string | undefined
}
type PushOptionPushFieldValidation = {
  details: string
  field?: string | undefined
  ref?: (string | null) | undefined
}
type PushOptionPushValidationInfo = {
  information?: (PushOptionPushFieldValidation[] | null) | undefined
  warnings?: (PushOptionPushFieldValidation[] | null) | undefined
}
type PushOptionPushOptionProperty = {
  description: string
  displayName: string
  options?: (PushOptionPushOptionChoice[] | null) | undefined
  properties?: ({ [x: string]: PushOptionPushOptionProperty } | null) | undefined
  required: boolean
  type: PushOptionPushOptionType
  validation?: PushOptionPushValidationInfo | undefined
}
type PushOption = {
  description?: string | undefined
  displayName: string
  options?: (PushOptionPushOptionChoice[] | null) | undefined
  properties?: ({ [x: string]: PushOptionPushOptionProperty } | null) | undefined
  required: boolean
  type: PushOptionPushOptionType
  validation?: PushOptionPushValidationInfo | undefined
}
type AccountAccountStatus = 'Unknown' | 'Active' | 'Archived' | 'Pending'
type AccountAccountType = 'Unknown' | 'Asset' | 'Expense' | 'Income' | 'Liability' | 'Equity'
type ValidDataTypeLinks = {
  links?: (string[] | null) | undefined
  property?: (string | null) | undefined
}
type Account = {
  currency?: TransferTransferAccountCurrency | undefined
  currentBalance?: (number | null) | undefined
  description?: (string | null) | undefined
  fullyQualifiedCategory?: (string | null) | undefined
  fullyQualifiedName?: (string | null) | undefined
  id?: string | undefined
  isBankAccount?: boolean | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  nominalCode?: (string | null) | undefined
  status?: AccountAccountStatus | undefined
  type?: AccountAccountType | undefined
  validDatatypeLinks?: (ValidDataTypeLinks[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type DataType =
  | 'accountTransactions'
  | 'balanceSheet'
  | 'bankAccounts'
  | 'bankTransactions'
  | 'billCreditNotes'
  | 'billPayments'
  | 'bills'
  | 'cashFlowStatement'
  | 'chartOfAccounts'
  | 'company'
  | 'creditNotes'
  | 'customers'
  | 'directCosts'
  | 'directIncomes'
  | 'invoices'
  | 'items'
  | 'journalEntries'
  | 'journals'
  | 'paymentMethods'
  | 'payments'
  | 'profitAndLoss'
  | 'purchaseOrders'
  | 'salesOrders'
  | 'suppliers'
  | 'taxRates'
  | 'trackingCategories'
  | 'transfers'
  | 'banking-accountBalances'
  | 'banking-accounts'
  | 'banking-transactionCategories'
  | 'banking-transactions'
  | 'commerce-companyInfo'
  | 'commerce-customers'
  | 'commerce-disputes'
  | 'commerce-locations'
  | 'commerce-orders'
  | 'commerce-paymentMethods'
  | 'commerce-payments'
  | 'commerce-productCategories'
  | 'commerce-products'
  | 'commerce-taxComponents'
  | 'commerce-transactions'
type PushOperationSummaryPushOperationRef = {
  dataType?: DataType | undefined
  id?: string | undefined
}
type PushOperationSummaryPushChangeType =
  | 'Unknown'
  | 'Created'
  | 'Modified'
  | 'Deleted'
  | 'AttachmentUploaded'
type PushOperationSummaryPushOperationChange = {
  attachmentId?: (string | null) | undefined
  recordRef?: PushOperationSummaryPushOperationRef | undefined
  type?: PushOperationSummaryPushChangeType | undefined
}
type PushOperationSummaryPushOperationStatus = 'Pending' | 'Failed' | 'Success' | 'TimedOut'
type PushOperationSummaryValidationItem = {
  itemId?: (string | null) | undefined
  message?: (string | null) | undefined
  validatorName?: (string | null) | undefined
}
type PushOperationSummaryValidation = {
  errors?: (PushOperationSummaryValidationItem[] | null) | undefined
  warnings?: (PushOperationSummaryValidationItem[] | null) | undefined
}
type CreateAccountResponse = {
  data?: Account | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type CreateBankAccountResponse = {
  data?: Account | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type CreateBankTransactionsResponse = {
  data?: BankTransactions | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type UpdateBankAccountResponse = {
  data?: BankAccount | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type CustomerCustomerRef = { companyName?: (string | null) | undefined; id: string }
type BillCreditNoteBillCreditNoteLineItemTrackingBilledToType =
  | 'Unknown'
  | 'NotApplicable'
  | 'Customer'
  | 'Project'
type ProjectRef = { id: string; name?: (string | null) | undefined }
type BillCreditNoteBillCreditNoteLineItemTracking = {
  categoryRefs: TrackingCategoryTrackingCategoryRef[]
  customerRef?: CustomerCustomerRef | undefined
  isBilledTo: BillCreditNoteBillCreditNoteLineItemTrackingBilledToType
  isRebilledTo: BillCreditNoteBillCreditNoteLineItemTrackingBilledToType
  projectRef?: ProjectRef | undefined
}
type BillCreditNoteBillCreditNoteLineItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  discountAmount?: (number | null) | undefined
  discountPercentage?: (number | null) | undefined
  itemRef?: ItemItemRef | undefined
  quantity: number
  subTotal?: (number | null) | undefined
  taxAmount?: (number | null) | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  totalAmount?: (number | null) | undefined
  tracking?: BillCreditNoteBillCreditNoteLineItemTracking | undefined
  trackingCategoryRefs?: (TrackingCategoryTrackingCategoryRef[] | null) | undefined
  unitAmount: number
}
type BillCreditNoteBillCreditNoteStatus =
  | 'Unknown'
  | 'Draft'
  | 'Submitted'
  | 'Paid'
  | 'Void'
  | 'PartiallyPaid'
type SupplierSupplierRef = { id: string; supplierName?: (string | null) | undefined }
type BillAllOf0WithholdingTaxItems = { amount: number; name: string }
type BillCreditNote = {
  allocatedOnDate?: DateTime | undefined
  billCreditNoteNumber?: (string | null) | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  discountPercentage?: number | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?: (BillCreditNoteBillCreditNoteLineItem[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?: (BillAllOf0PaymentAllocationsItems[] | null) | undefined
  remainingCredit?: number | undefined
  status?: BillCreditNoteBillCreditNoteStatus | undefined
  subTotal?: number | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  supplierRef?: SupplierSupplierRef | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalTaxAmount?: number | undefined
  withholdingTax?: (BillAllOf0WithholdingTaxItems[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateBillCreditNoteResponse = {
  data?: BillCreditNote | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type UpdateBillCreditNoteResponse = {
  data?: BillCreditNote | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type BillPaymentBillPaymentLineLinkType =
  | 'Unknown'
  | 'Unlinked'
  | 'Bill'
  | 'Other'
  | 'CreditNote'
  | 'BillPayment'
  | 'PaymentOnAccount'
  | 'Refund'
  | 'ManualJournal'
  | 'Discount'
type BillPaymentBillPaymentLineLink = {
  amount?: (number | null) | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  id?: (string | null) | undefined
  type: BillPaymentBillPaymentLineLinkType
}
type BillPaymentBillPaymentLine = {
  allocatedOnDate?: DateTime | undefined
  amount: number
  links?: (BillPaymentBillPaymentLineLink[] | null) | undefined
}
type PaymentMethodPaymentMethodRef = { id?: string | undefined; name?: (string | null) | undefined }
type BillPayment = {
  accountRef?: AccountAccountRef | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  date?: DateTime | undefined
  id?: string | undefined
  lines?: (BillPaymentBillPaymentLine[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentMethodRef?: PaymentMethodPaymentMethodRef | undefined
  reference?: (string | null) | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  supplierRef?: SupplierSupplierRef | undefined
  totalAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateBillPaymentResponse = {
  data?: BillPayment | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type PushOperationSummary = {
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type BillBillLineItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  discountAmount?: (number | null) | undefined
  discountPercentage?: (number | null) | undefined
  isDirectCost?: boolean | undefined
  itemRef?: ItemItemRef | undefined
  quantity: number
  subTotal?: (number | null) | undefined
  taxAmount?: (number | null) | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  totalAmount?: (number | null) | undefined
  tracking?: BillCreditNoteBillCreditNoteLineItemTracking | undefined
  trackingCategoryRefs?: (TrackingCategoryTrackingCategoryRef[] | null) | undefined
  unitAmount: number
}
type PurchaseOrderPurchaseOrderRef = {
  id?: string | undefined
  purchaseOrderNumber?: (string | null) | undefined
}
type BillBillStatus = 'Unknown' | 'Open' | 'PartiallyPaid' | 'Paid' | 'Void' | 'Draft'
type Bill = {
  amountDue?: (number | null) | undefined
  currency?: {} | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  dueDate?: {} | undefined
  id?: string | undefined
  issueDate?: {} | undefined
  lineItems?: (BillBillLineItem[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?: (BillAllOf0PaymentAllocationsItems[] | null) | undefined
  purchaseOrderRefs?: (PurchaseOrderPurchaseOrderRef[] | null) | undefined
  reference?: (string | null) | undefined
  status?: BillBillStatus | undefined
  subTotal?: number | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  supplierRef?: SupplierSupplierRef | undefined
  taxAmount?: number | undefined
  totalAmount?: number | undefined
  withholdingTax?: (BillAllOf0WithholdingTaxItems[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateBillResponse = {
  data?: Bill | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type UpdateBillResponse = {
  data?: Bill | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type CreditNoteCreditNoteLineItemTrackingBilledToType = 'Unknown' | 'NotApplicable' | 'Project'
type CreditNoteCreditNoteLineItemTracking = {
  categoryRefs: TrackingCategoryTrackingCategoryRef[]
  customerRef?: CustomerCustomerRef | undefined
  isBilledTo: CreditNoteCreditNoteLineItemTrackingBilledToType
  isRebilledTo: CreditNoteCreditNoteLineItemTrackingBilledToType
  projectRef?: ProjectRef | undefined
}
type CreditNoteCreditNoteLineItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  discountAmount?: (number | null) | undefined
  discountPercentage?: (number | null) | undefined
  isDirectIncome?: boolean | undefined
  itemRef?: ItemItemRef | undefined
  quantity: number
  subTotal?: (number | null) | undefined
  taxAmount?: (number | null) | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  totalAmount?: (number | null) | undefined
  tracking?: CreditNoteCreditNoteLineItemTracking | undefined
  trackingCategoryRefs?: (TrackingCategoryTrackingCategoryRef[] | null) | undefined
  unitAmount: number
}
type CreditNoteCreditNoteStatus =
  | 'Unknown'
  | 'Draft'
  | 'Submitted'
  | 'Paid'
  | 'Void'
  | 'PartiallyPaid'
type CreditNote = {
  additionalTaxAmount?: number | undefined
  additionalTaxPercentage?: number | undefined
  allocatedOnDate?: DateTime | undefined
  creditNoteNumber?: (string | null) | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  customerRef?: CustomerCustomerRef | undefined
  discountPercentage?: number | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?: (CreditNoteCreditNoteLineItem[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?: (BillAllOf0PaymentAllocationsItems[] | null) | undefined
  remainingCredit?: number | undefined
  status?: CreditNoteCreditNoteStatus | undefined
  subTotal?: number | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalTaxAmount?: number | undefined
  withholdingTax?: (BillAllOf0WithholdingTaxItems[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateCreditNoteResponse = {
  data?: CreditNote | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type UpdateCreditNoteResponse = {
  data?: CreditNote | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type CompanyDatasetAddressesItemsAddressType = 'Unknown' | 'Billing' | 'Delivery'
type CompanyDatasetAddressesItems = {
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  line1?: (string | null) | undefined
  line2?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  region?: (string | null) | undefined
  type: CompanyDatasetAddressesItemsAddressType
}
type CompanyDatasetPhoneNumbersItemsPhoneNumberType =
  | 'Primary'
  | 'Landline'
  | 'Mobile'
  | 'Fax'
  | 'Unknown'
type CompanyDatasetPhoneNumbersItems = {
  number: string | null
  type: CompanyDatasetPhoneNumbersItemsPhoneNumberType
}
type CustomerCustomerStatus = 'Unknown' | 'Active' | 'Archived'
type CustomerContact = {
  address?: CompanyDatasetAddressesItems | undefined
  email?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  name?: (string | null) | undefined
  phone?: (CompanyDatasetPhoneNumbersItems[] | null) | undefined
  status: CustomerCustomerStatus
}
type Customer = {
  addresses?: (CompanyDatasetAddressesItems[] | null) | undefined
  contactName?: (string | null) | undefined
  contacts?: (CustomerContact[] | null) | undefined
  customerName?: (string | null) | undefined
  defaultCurrency?: TransferTransferAccountCurrency | undefined
  emailAddress?: (string | null) | undefined
  id?: string | undefined
  metadata?: Metadata | undefined
  phone?: (string | null) | undefined
  registrationNumber?: (string | null) | undefined
  status?: CustomerCustomerStatus | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  taxNumber?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateCustomerResponse = {
  data?: Customer | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type UpdateCustomerResponse = {
  data?: Customer | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type CreateDirectCostResponse = {
  data?: DirectCost | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type CreateDirectIncomeResponse = {
  data?: DirectIncome | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type InvoiceInvoiceLineItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  discountAmount?: (number | null) | undefined
  discountPercentage?: (number | null) | undefined
  isDirectIncome?: boolean | undefined
  itemRef?: ItemItemRef | undefined
  quantity: number
  subTotal?: (number | null) | undefined
  taxAmount?: (number | null) | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  totalAmount?: (number | null) | undefined
  tracking?: CreditNoteCreditNoteLineItemTracking | undefined
  trackingCategoryRefs?: (TrackingCategoryTrackingCategoryRef[] | null) | undefined
  unitAmount: number
}
type InvoiceInvoiceStatus = 'Unknown' | 'Draft' | 'Submitted' | 'PartiallyPaid' | 'Paid' | 'Void'
type Invoice = {
  additionalTaxAmount?: number | undefined
  additionalTaxPercentage?: number | undefined
  amountDue?: number | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  customerRef?: CustomerCustomerRef | undefined
  discountPercentage?: (number | null) | undefined
  dueDate?: DateTime | undefined
  id?: string | undefined
  invoiceNumber?: (string | null) | undefined
  issueDate?: DateTime | undefined
  lineItems?: (InvoiceInvoiceLineItem[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paidOnDate?: DateTime | undefined
  paymentAllocations?: (BillAllOf0PaymentAllocationsItems[] | null) | undefined
  salesOrderRefs?: (string[] | null) | undefined
  status?: InvoiceInvoiceStatus | undefined
  subTotal?: (number | null) | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  totalAmount?: number | undefined
  totalDiscount?: (number | null) | undefined
  totalTaxAmount?: number | undefined
  withholdingTax?: (BillAllOf0WithholdingTaxItems[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateInvoiceResponse = {
  data?: Invoice | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type UpdateInvoiceResponse = {
  data?: Invoice | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type ItemBillItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  unitPrice?: (number | null) | undefined
}
type ItemInvoiceItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  unitPrice?: (number | null) | undefined
}
type ItemItemStatus = 'Unknown' | 'Active' | 'Archived'
type ItemItemType = unknown
type Item = {
  billItem?: ItemBillItem | undefined
  code?: (string | null) | undefined
  id?: string | undefined
  invoiceItem?: ItemInvoiceItem | undefined
  isBillItem?: boolean | undefined
  isInvoiceItem?: boolean | undefined
  itemStatus?: ItemItemStatus | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  type?: ItemItemType | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateItemResponse = {
  data?: Item | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type SalesOrderSalesOrderLineItemTracking = {
  recordRefs?: (DirectCostTrackingInvoiceTo[] | null) | undefined
}
type JournalEntryJournalLine = {
  accountRef?: AccountAccountRef | undefined
  currency?: (string | null) | undefined
  description?: (string | null) | undefined
  netAmount: number
  tracking?: SalesOrderSalesOrderLineItemTracking | undefined
}
type JournalJournalRef = { id: string; name?: (string | null) | undefined }
type JournalEntry = {
  createdOn?: DateTime | undefined
  description?: (string | null) | undefined
  id?: string | undefined
  journalLines?: (JournalEntryJournalLine[] | null) | undefined
  journalRef?: JournalJournalRef | undefined
  metadata?: Metadata | undefined
  postedOn?: DateTime | undefined
  recordRef?: DirectCostTrackingInvoiceTo | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  updatedOn?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateJournalEntryResponse = {
  data?: JournalEntry | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type JournalJournalStatus = 'Unknown' | 'Active' | 'Archived'
type Journal = {
  createdOn?: DateTime | undefined
  hasChildren?: boolean | undefined
  id?: string | undefined
  journalCode?: (string | null) | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  parentId?: (string | null) | undefined
  status?: JournalJournalStatus | undefined
  type?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type PaymentPaymentLinkType =
  | 'Unknown'
  | 'Unlinked'
  | 'Invoice'
  | 'CreditNote'
  | 'Other'
  | 'Refund'
  | 'Payment'
  | 'PaymentOnAccount'
  | 'ManualJournal'
  | 'Discount'
type PaymentPaymentLineLink = {
  amount?: (number | null) | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  id?: string | undefined
  type: PaymentPaymentLinkType
}
type PaymentPaymentLine = {
  allocatedOnDate?: DateTime | undefined
  amount: number
  links?: (PaymentPaymentLineLink[] | null) | undefined
}
type Payment = {
  accountRef?: AccountAccountRef | undefined
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  customerRef?: CustomerCustomerRef | undefined
  date?: DateTime | undefined
  id?: string | undefined
  lines?: (PaymentPaymentLine[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentMethodRef?: PaymentMethodPaymentMethodRef | undefined
  reference?: (string | null) | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  totalAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreatePaymentResponse = {
  data?: Payment | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type PurchaseOrderPurchaseOrderLineItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  discountAmount?: number | undefined
  discountPercentage?: number | undefined
  itemRef?: ItemItemRef | undefined
  quantity?: number | undefined
  subTotal?: number | undefined
  taxAmount?: number | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  totalAmount?: number | undefined
  trackingCategoryRefs?: (TrackingCategoryTrackingCategoryRef[] | null) | undefined
  unitAmount?: number | undefined
}
type SalesOrderAllOf0ShipTo = {
  address?: CompanyDatasetAddressesItems | undefined
  contact?:
    | {
        email?: (string | null) | undefined
        name?: (string | null) | undefined
        phone?: (string | null) | undefined
      }
    | undefined
}
type PurchaseOrderPurchaseOrderStatus = 'Unknown' | 'Draft' | 'Open' | 'Closed' | 'Void'
type PurchaseOrder = {
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  deliveryDate?: DateTime | undefined
  expectedDeliveryDate?: DateTime | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?: (PurchaseOrderPurchaseOrderLineItem[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentDueDate?: DateTime | undefined
  purchaseOrderNumber?: (string | null) | undefined
  shipTo?: SalesOrderAllOf0ShipTo | undefined
  status?: PurchaseOrderPurchaseOrderStatus | undefined
  subTotal?: number | undefined
  supplierRef?: SupplierSupplierRef | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalTaxAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreatePurchaseOrderResponse = {
  data?: PurchaseOrder | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type UpdatePurchaseOrderResponse = {
  data?: PurchaseOrder | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type SupplierSupplierStatus = 'Unknown' | 'Active' | 'Archived'
type Supplier = {
  addresses?: (CompanyDatasetAddressesItems[] | null) | undefined
  contactName?: (string | null) | undefined
  defaultCurrency?: (string | null) | undefined
  emailAddress?: (string | null) | undefined
  id?: string | undefined
  metadata?: Metadata | undefined
  phone?: (string | null) | undefined
  registrationNumber?: (string | null) | undefined
  status?: SupplierSupplierStatus | undefined
  supplementalData?: BillAllOf0SupplementalData | undefined
  supplierName?: (string | null) | undefined
  taxNumber?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateSupplierResponse = {
  data?: Supplier | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type CreateTransferResponse = {
  data?: Transfer | undefined
  changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: PushOperationSummaryPushOperationStatus
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?: PushOperationSummaryValidation | undefined
}
type Accounts = {
  results?: Account[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type ModifiedDatesAllOf0 = { modifiedDate?: DateTime | undefined }
type ModifiedDatesAllOf1 = { sourceModifiedDate?: DateTime | undefined }
type BankStatementAccount = {
  accountName?: (string | null) | undefined
  accountNumber?: (string | null) | undefined
  availableBalance?: (number | null) | undefined
  balance?: (number | null) | undefined
  currency?: (string | null) | undefined
  fromDate?: DateTime | undefined
  iban?: (string | null) | undefined
  id?: string | undefined
  institution?: (string | null) | undefined
  modifiedDate?: ModifiedDatesAllOf0 | undefined
  nominalCode?: (string | null) | undefined
  overdraftLimit?: (number | null) | undefined
  sortCode?: (string | null) | undefined
  sourceModifiedDate?: ModifiedDatesAllOf1 | undefined
  toDate?: DateTime | undefined
}
type BankAccountTransactions = {
  results?: BankTransactionsBankTransactionLine[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BillCreditNotes = {
  results?: BillCreditNote[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BillPayments = {
  results?: BillPayment[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Bills = {
  results?: Bill[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type CreditNotes = {
  results?: CreditNote[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Customers = {
  results?: Customer[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type ReportLine = {
  accountId?: (string | null) | undefined
  items?: (ReportLine[] | null) | undefined
  name?: (string | null) | undefined
  value: number
}
type BalanceSheetBalanceSheet = {
  assets?: ReportLine | undefined
  date?: DateTime | undefined
  equity?: ReportLine | undefined
  liabilities?: ReportLine | undefined
  netAssets: number
}
type BalanceSheet = {
  currency: TransferTransferAccountCurrency
  earliestAvailableMonth?: DateTime | undefined
  mostRecentAvailableMonth?: DateTime | undefined
  reports: BalanceSheetBalanceSheet[]
}
type CashFlowStatementReportBasis = 'Unknown' | 'Accrual' | 'Cash'
type CashFlowStatementReportInput = 'Unknown' | 'Indirect' | 'Direct'
type CashFlowStatementCashFlowStatement = {
  cashPayments?: ReportLine | undefined
  cashReceipts?: ReportLine | undefined
  fromDate?: DateTime | undefined
  toDate?: DateTime | undefined
}
type CashFlowStatement = {
  currency: TransferTransferAccountCurrency
  earliestAvailableMonth?: DateTime | undefined
  mostRecentAvailableMonth?: DateTime | undefined
  reportBasis: CashFlowStatementReportBasis
  reportInput: CashFlowStatementReportInput
  reports: CashFlowStatementCashFlowStatement[]
}
type ProfitAndLossReportReportBasis = 'Unknown' | 'Accrual' | 'Cash'
type ProfitAndLossReportProfitAndLossReport = {
  costOfSales?: ReportLine | undefined
  expenses?: ReportLine | undefined
  fromDate?: DateTime | undefined
  grossProfit: number
  income?: ReportLine | undefined
  netOperatingProfit: number
  netOtherIncome: number
  netProfit: number
  otherExpenses?: ReportLine | undefined
  otherIncome?: ReportLine | undefined
  toDate?: DateTime | undefined
}
type ProfitAndLossReport = {
  currency: string
  earliestAvailableMonth?: DateTime | undefined
  mostRecentAvailableMonth?: DateTime | undefined
  reportBasis: ProfitAndLossReportReportBasis
  reports: ProfitAndLossReportProfitAndLossReport[]
}
type CompanyDataset = {
  accountingPlatformRef?: (string | null) | undefined
  addresses?: (CompanyDatasetAddressesItems[] | null) | undefined
  baseCurrency?: (string | null) | undefined
  companyLegalName?: (string | null) | undefined
  companyName?: (string | null) | undefined
  createdDate?: DateTime | undefined
  financialYearStartDate?: DateTime | undefined
  ledgerLockDate?: DateTime | undefined
  phoneNumbers?: (CompanyDatasetPhoneNumbersItems[] | null) | undefined
  registrationNumber?: (string | null) | undefined
  sourceUrls?: ({ [x: string]: string | null } | null) | undefined
  taxNumber?: (string | null) | undefined
  webLinks?:
    | ({ type?: 'Website' | 'Social' | 'Unknown' | undefined; url?: string | undefined }[] | null)
    | undefined
}
type Dataset = {
  companyId: string
  completed?: DateTime | undefined
  connectionId: string
  dataType?: (string | null) | undefined
  datasetLogsUrl?: (string | null) | undefined
  errorMessage?: (string | null) | undefined
  id: string
  isCompleted: boolean
  isErrored: boolean
  progress: number
  requested: DateTime
  status:
    | 'Initial'
    | 'Queued'
    | 'Fetching'
    | 'MapQueued'
    | 'Mapping'
    | 'Complete'
    | 'FetchError'
    | 'MapError'
    | 'InternalError'
    | 'ProcessingQueued'
    | 'Processing'
    | 'ProcessingError'
    | 'ValidationQueued'
    | 'Validating'
    | 'ValidationError'
    | 'AuthError'
    | 'Cancelled'
    | 'NotSupported'
    | 'RateLimitError'
    | 'PermissionsError'
    | 'PrerequisiteNotMet'
  validationInformationUrl?: (string | null) | undefined
}
type Invoices = {
  results?: Invoice[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Items = {
  results?: Item[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type JournalEntries = {
  results?: JournalEntry[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Journals = {
  results?: Journal[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PaymentMethods = {
  results?: Bill[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PaymentMethodPaymentMethodStatus = 'Unknown' | 'Active' | 'Archived'
type PaymentMethodPaymentMethodType =
  | 'Unknown'
  | 'Cash'
  | 'Check'
  | 'CreditCard'
  | 'DebitCard'
  | 'BankTransfer'
  | 'Other'
type PaymentMethod = {
  id?: string | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  status?: PaymentMethodPaymentMethodStatus | undefined
  type?: PaymentMethodPaymentMethodType | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Payments = {
  results?: Payments[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PurchaseOrders = {
  results?: PurchaseOrder[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type SalesOrderSalesOrderInvoiceStatus =
  | 'Unknown'
  | 'PartiallyInvoiced'
  | 'Invoiced'
  | 'NotInvoiced'
type SalesOrderSalesOrderLineItem = {
  accountRef?: AccountAccountRef | undefined
  description?: (string | null) | undefined
  discountAmount?: number | undefined
  discountPercentage?: number | undefined
  itemRef?: ItemItemRef | undefined
  quantity?: number | undefined
  subTotal?: number | undefined
  taxAmount?: number | undefined
  taxRateRef?: TaxRateTaxRateRef | undefined
  totalAmount?: number | undefined
  tracking?: SalesOrderSalesOrderLineItemTracking | undefined
  unitAmount?: number | undefined
}
type SalesOrderSalesOrderStatus = 'Unknown' | 'Draft' | 'Open' | 'Closed' | 'Void'
type SalesOrder = {
  currency?: TransferTransferAccountCurrency | undefined
  currencyRate?: BillPaymentBillPaymentLineLinkCurrencyRate | undefined
  customerPurchaseOrderNumber?: (string | null) | undefined
  customerRef?: CustomerCustomerRef | undefined
  expectedDeliveryDate?: DateTime | undefined
  id?: string | undefined
  invoicingStatus?: SalesOrderSalesOrderInvoiceStatus | undefined
  issueDate?: DateTime | undefined
  lineItems?: (SalesOrderSalesOrderLineItem[] | null) | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  salesOrderNumber?: (string | null) | undefined
  shipTo?: SalesOrderAllOf0ShipTo | undefined
  status?: SalesOrderSalesOrderStatus | undefined
  subTotal?: number | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalTaxAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type SalesOrders = {
  results?: SalesOrder[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Suppliers = {
  results?: Supplier[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TaxRateTaxRateComponent = {
  isCompound: boolean
  name?: (string | null) | undefined
  rate?: (number | null) | undefined
}
type TaxRateTaxRateStatus = 'Unknown' | 'Active' | 'Archived'
type TaxRate = {
  code?: (string | null) | undefined
  components?: (TaxRateTaxRateComponent[] | null) | undefined
  effectiveTaxRate?: (number | null) | undefined
  id?: string | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  status?: TaxRateTaxRateStatus | undefined
  totalTaxRate?: (number | null) | undefined
  validDatatypeLinks?: (ValidDataTypeLinks[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type TaxRates = {
  results?: TaxRate[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TrackingCategoryStatus = 'Unknown' | 'Active' | 'Archived'
type TrackingCategory = {
  hasChildren?: boolean | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  parentId?: (string | null) | undefined
  status?: TrackingCategoryStatus | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type TrackingCategories = {
  results?: TrackingCategory[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TrackingCategoryTree = {
  hasChildren?: boolean | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  parentId?: (string | null) | undefined
  status?: TrackingCategoryStatus | undefined
  subCategories?: (TrackingCategoryTree[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type AgedCreditorReportAgedCreditorAgedCurrencyOutstandingItems = {
  agedOutstandingAmounts?:
    | {
        amount?: number | undefined
        details?: { amount?: number | undefined; name?: string | undefined }[] | undefined
        fromDate?: DateTime | undefined
        toDate?: DateTime | undefined
      }[]
    | undefined
  currency?: TransferTransferAccountCurrency | undefined
}
type AgedCreditorReportAgedCreditor = {
  agedCurrencyOutstanding?: AgedCreditorReportAgedCreditorAgedCurrencyOutstandingItems[] | undefined
  supplierId?: string | undefined
  supplierName?: string | undefined
}
type AgedCreditorReport = {
  data?: AgedCreditorReportAgedCreditor[] | undefined
  generated?: DateTime | undefined
  reportDate?: DateTime | undefined
}
type AgedDebtorReportAgedDebtor = {
  agedCurrencyOutstanding?: AgedCreditorReportAgedCreditorAgedCurrencyOutstandingItems[] | undefined
  customerId?: string | undefined
  customerName?: string | undefined
}
type AgedDebtorReport = {
  data?: AgedDebtorReportAgedDebtor[] | undefined
  generated?: DateTime | undefined
  reportDate?: DateTime | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/companies/:companyId/connections/:connectionId/data/accountTransactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: AccountTransactions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/accountTransactions/:accountTransactionId': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountTransactionId: string } }
        output: AccountTransaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bankAccounts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BankAccounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId': {
      $get: {
        input: { param: { companyId: string; accountId: string; connectionId: string } }
        output: BankAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId/bankTransactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BankTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments': {
      $get: {
        input: { param: { billId: string; companyId: string; connectionId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments/:attachmentId': {
      $get: {
        input: {
          param: { attachmentId: string; billId: string; companyId: string; connectionId: string }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: { attachmentId: string; billId: string; companyId: string; connectionId: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments': {
      $get: {
        input: { param: { companyId: string; connectionId: string; customerId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            companyId: string
            connectionId: string
            customerId: string
            attachmentId: string
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            companyId: string
            connectionId: string
            customerId: string
            attachmentId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: DirectCosts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId': {
      $get: {
        input: { param: { companyId: string; connectionId: string; directCostId: string } }
        output: DirectCost
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments': {
      $get: {
        input: { param: { companyId: string; connectionId: string; directCostId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            attachmentId: string
            companyId: string
            connectionId: string
            directCostId: string
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            attachmentId: string
            companyId: string
            connectionId: string
            directCostId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: DirectIncomes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId': {
      $get: {
        input: { param: { directIncomeId: string; companyId: string; connectionId: string } }
        output: DirectIncome
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments': {
      $get: {
        input: { param: { companyId: string; connectionId: string; directIncomeId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            companyId: string
            connectionId: string
            directIncomeId: string
            attachmentId: string
          }
        } & { query: { timeoutInMinutes?: number | undefined } }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            attachmentId: string
            companyId: string
            connectionId: string
            directIncomeId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments': {
      $get: {
        input: { param: { invoiceId: string; companyId: string; connectionId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            invoiceId: string
            attachmentId: string
            companyId: string
            connectionId: string
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            invoiceId: string
            attachmentId: string
            companyId: string
            connectionId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments': {
      $get: {
        input: { param: { supplierId: string; companyId: string; connectionId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            supplierId: string
            companyId: string
            connectionId: string
            attachmentId: string
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            supplierId: string
            companyId: string
            connectionId: string
            attachmentId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/transfers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Transfers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/transfers/:transferId': {
      $get: {
        input: { param: { companyId: string; connectionId: string; transferId: string } }
        output: Transfer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/bankAccounts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/bankAccounts/:accountId/bankTransactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/billCreditNotes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/billPayments': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/bills': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/chartOfAccounts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/creditNotes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/customers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/directCosts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/directIncomes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/invoices': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/items': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/journalEntries': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/journals': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/payments': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/purchaseOrders': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/suppliers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/transfers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/accounts': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Account }
        output: CreateAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bankAccounts': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            allowSyncOnPushComplete?: boolean | undefined
            timeoutInMinutes?: number | undefined
          }
        } & { json: BankAccount }
        output: CreateBankAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bankAccounts/:accountId/bankTransactions': {
      $post: {
        input: { param: { companyId: string; connectionId: string; accountId: string } } & {
          query: {
            allowSyncOnPushComplete?: boolean | undefined
            timeoutInMinutes?: number | undefined
          }
        } & { json: BankTransactions }
        output: CreateBankTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bankAccounts/:bankAccountId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; bankAccountId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: BankAccount }
        output: UpdateBankAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/billCreditNotes': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: BillCreditNote }
        output: CreateBillCreditNoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/billCreditNotes/:billCreditNoteId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; billCreditNoteId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: BillCreditNote }
        output: UpdateBillCreditNoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/billPayments': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: BillPayment }
        output: CreateBillPaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/billPayments/:billPaymentId': {
      $delete: {
        input: { param: { companyId: string; connectionId: string; billPaymentId: string } }
        output: PushOperationSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bills': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Bill }
        output: CreateBillResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bills/:billId': {
      $delete: {
        input: { param: { billId: string; companyId: string; connectionId: string } }
        output: PushOperationSummary
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { billId: string; companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: Bill }
        output: UpdateBillResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bills/:billId/attachments': {
      $post: {
        input: { param: { billId: string; companyId: string; connectionId: string } } & {
          form: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/creditNotes': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: CreditNote }
        output: CreateCreditNoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/creditNotes/:creditNoteId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; creditNoteId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: CreditNote }
        output: UpdateCreditNoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/customers': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Customer }
        output: CreateCustomerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/customers/:customerId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; customerId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: Customer }
        output: UpdateCustomerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/directCosts': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: DirectCost }
        output: CreateDirectCostResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/directCosts/:directCostId/attachment': {
      $post: {
        input: { param: { companyId: string; connectionId: string; directCostId: string } } & {
          form: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/directIncomes': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: DirectIncome }
        output: CreateDirectIncomeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/directIncomes/:directIncomeId/attachment': {
      $post: {
        input: { param: { directIncomeId: string; companyId: string; connectionId: string } } & {
          form: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/invoices': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Invoice }
        output: CreateInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/invoices/:invoiceId': {
      $delete: {
        input: { param: { invoiceId: string; companyId: string; connectionId: string } }
        output: PushOperationSummary
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { invoiceId: string; companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: Invoice }
        output: UpdateInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/invoices/:invoiceId/attachment': {
      $post: {
        input: { param: { invoiceId: string; companyId: string; connectionId: string } } & {
          form: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/items': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Item }
        output: CreateItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/journalEntries': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: JournalEntry }
        output: CreateJournalEntryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/journalEntries/:journalEntryId': {
      $delete: {
        input: { param: { journalEntryId: string; companyId: string; connectionId: string } }
        output: PushOperationSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/journals': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Journal }
        output: {
          data?: Journal | undefined
          changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
          companyId: string
          completedOnUtc?: DateTime | undefined
          dataConnectionKey: string
          dataType?: DataType | undefined
          errorMessage?: (string | null) | undefined
          pushOperationKey: string
          requestedOnUtc: DateTime
          status: PushOperationSummaryPushOperationStatus
          statusCode: number
          timeoutInMinutes?: (number | null) | undefined
          timeoutInSeconds?: (number | null) | undefined
          validation?: PushOperationSummaryValidation | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/payments': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Payment }
        output: CreatePaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/purchaseOrders': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: PurchaseOrder }
        output: CreatePurchaseOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/purchaseOrders/:purchaseOrderId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; purchaseOrderId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: PurchaseOrder }
        output: UpdatePurchaseOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/suppliers': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Supplier }
        output: CreateSupplierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/suppliers/:supplierId': {
      $put: {
        input: { param: { supplierId: string; companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: Supplier }
        output: {
          data?: Supplier | undefined
          changes?: (PushOperationSummaryPushOperationChange[] | null) | undefined
          companyId: string
          completedOnUtc?: DateTime | undefined
          dataConnectionKey: string
          dataType?: DataType | undefined
          errorMessage?: (string | null) | undefined
          pushOperationKey: string
          requestedOnUtc: DateTime
          status: PushOperationSummaryPushOperationStatus
          statusCode: number
          timeoutInMinutes?: (number | null) | undefined
          timeoutInSeconds?: (number | null) | undefined
          validation?: PushOperationSummaryValidation | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/transfers': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & { json: Transfer }
        output: CreateTransferResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/accounts': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Accounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/accounts/:accountId': {
      $get: {
        input: { param: { companyId: string; accountId: string } }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/bankAccounts/:accountId': {
      $get: {
        input: { param: { companyId: string; accountId: string } } & {
          query: { query?: string | undefined }
        }
        output: BankStatementAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/bankAccounts/:accountId/transactions': {
      $get: {
        input: { param: { companyId: string; accountId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BankAccountTransactions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/billCreditNotes': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BillCreditNotes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/billCreditNotes/:billCreditNoteId': {
      $get: {
        input: { param: { companyId: string; billCreditNoteId: string } }
        output: BillCreditNote
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/billPayments': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BillPayments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/billPayments/:billPaymentId': {
      $get: {
        input: { param: { companyId: string; billPaymentId: string } }
        output: BillPayment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/bills': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Bills
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/bills/:billId': {
      $get: {
        input: { param: { billId: string; companyId: string } }
        output: Bill
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/creditNotes': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: CreditNotes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/creditNotes/:creditNoteId': {
      $get: {
        input: { param: { companyId: string; creditNoteId: string } }
        output: CreditNote
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/customers': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Customers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/customers/:customerId': {
      $get: {
        input: { param: { companyId: string; customerId: string } }
        output: Customer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/financials/balanceSheet': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            periodLength: number
            periodsToCompare: number
            startMonth?: DateTime | undefined
          }
        }
        output: BalanceSheet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/financials/cashFlowStatement': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            periodLength: number
            periodsToCompare: number
            startMonth?: DateTime | undefined
          }
        }
        output: CashFlowStatement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/financials/profitAndLoss': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            periodLength: number
            periodsToCompare: number
            startMonth?: DateTime | undefined
          }
        }
        output: ProfitAndLossReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/info': {
      $get: {
        input: { param: { companyId: string } }
        output: CompanyDataset
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { companyId: string } }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/invoices': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Invoices
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/invoices/:invoiceId': {
      $get: {
        input: { param: { invoiceId: string; companyId: string } }
        output: Invoice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/invoices/:invoiceId/pdf': {
      $get: {
        input: { param: { invoiceId: string; companyId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/items': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Items
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/items/:itemId': {
      $get: {
        input: { param: { itemId: string; companyId: string } }
        output: Item
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/journalEntries': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: JournalEntries
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/journalEntries/:journalEntryId': {
      $get: {
        input: { param: { journalEntryId: string; companyId: string } }
        output: JournalEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/journals': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Journals
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/journals/:journalId': {
      $get: {
        input: { param: { journalId: string; companyId: string } }
        output: Journal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/paymentMethods': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: PaymentMethods
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/paymentMethods/:paymentMethodId': {
      $get: {
        input: { param: { companyId: string; paymentMethodId: string } }
        output: PaymentMethod
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/payments': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Payments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/payments/:paymentId': {
      $get: {
        input: { param: { paymentId: string; companyId: string } }
        output: Payment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/purchaseOrders': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: PurchaseOrders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/purchaseOrders/:purchaseOrderId': {
      $get: {
        input: { param: { purchaseOrderId: string; companyId: string } }
        output: PurchaseOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/salesOrders': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: SalesOrders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/salesOrders/:salesOrderId': {
      $get: {
        input: { param: { salesOrderId: string; companyId: string } }
        output: SalesOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/suppliers': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Suppliers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/suppliers/:supplierId': {
      $get: {
        input: { param: { supplierId: string; companyId: string } }
        output: Supplier
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/taxRates': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: TaxRates
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/taxRates/:taxRateId': {
      $get: {
        input: { param: { companyId: string; taxRateId: string } }
        output: TaxRate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/trackingCategories': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: TrackingCategories
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/trackingCategories/:trackingCategoryId': {
      $get: {
        input: { param: { companyId: string; trackingCategoryId: string } }
        output: TrackingCategoryTree
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/agedCreditor': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            reportDate?: string | undefined
            numberOfPeriods?: number | undefined
            periodLengthDays?: number | undefined
          }
        }
        output: AgedCreditorReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/agedCreditor/available': {
      $get: {
        input: { param: { companyId: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/agedDebtor': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            reportDate?: string | undefined
            numberOfPeriods?: number | undefined
            periodLengthDays?: number | undefined
          }
        }
        output: AgedDebtorReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/agedDebtor/available': {
      $get: {
        input: { param: { companyId: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
