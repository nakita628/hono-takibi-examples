type AccountType =
  | 'BANK'
  | 'CURRENT'
  | 'CURRLIAB'
  | 'DEPRECIATN'
  | 'DIRECTCOSTS'
  | 'EQUITY'
  | 'EXPENSE'
  | 'FIXED'
  | 'INVENTORY'
  | 'LIABILITY'
  | 'NONCURRENT'
  | 'OTHERINCOME'
  | 'OVERHEADS'
  | 'PREPAYMENT'
  | 'REVENUE'
  | 'SALES'
  | 'TERMLIAB'
  | 'PAYG'
type CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EEK'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SKK'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZMK'
  | 'ZWD'
type ValidationError = { Message?: string | undefined }
type Account = {
  Code?: string | undefined
  Name?: string | undefined
  AccountID?: string | undefined
  Type?: AccountType | undefined
  BankAccountNumber?: string | undefined
  Status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | undefined
  Description?: string | undefined
  BankAccountType?: 'BANK' | 'CREDITCARD' | 'PAYPAL' | 'NONE' | '' | undefined
  CurrencyCode?: CurrencyCode | undefined
  TaxType?: string | undefined
  EnablePaymentsToAccount?: boolean | undefined
  ShowInExpenseClaims?: boolean | undefined
  Class?: 'ASSET' | 'EQUITY' | 'EXPENSE' | 'LIABILITY' | 'REVENUE' | undefined
  SystemAccount?:
    | 'DEBTORS'
    | 'CREDITORS'
    | 'BANKCURRENCYGAIN'
    | 'GST'
    | 'GSTONIMPORTS'
    | 'HISTORICAL'
    | 'REALISEDCURRENCYGAIN'
    | 'RETAINEDEARNINGS'
    | 'ROUNDING'
    | 'TRACKINGTRANSFERS'
    | 'UNPAIDEXPCLM'
    | 'UNREALISEDCURRENCYGAIN'
    | 'WAGEPAYABLES'
    | 'CISASSETS'
    | 'CISASSET'
    | 'CISLABOUR'
    | 'CISLABOUREXPENSE'
    | 'CISLABOURINCOME'
    | 'CISLIABILITY'
    | 'CISMATERIALS'
    | ''
    | undefined
  ReportingCode?: string | undefined
  ReportingCodeName?: string | undefined
  HasAttachments?: boolean | undefined
  UpdatedDateUTC?: string | undefined
  CreatedDateUTC?: string | undefined
  AddToWatchlist?: boolean | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type Accounts = { Accounts?: Account[] | undefined }
type Element = {
  ValidationErrors?: ValidationError[] | undefined
  BatchPaymentID?: string | undefined
  BankTransactionID?: string | undefined
  CreditNoteID?: string | undefined
  ContactID?: string | undefined
  InvoiceID?: string | undefined
  ItemID?: string | undefined
  PurchaseOrderID?: string | undefined
}
type Error = {
  ErrorNumber?: number | undefined
  Type?: string | undefined
  Message?: string | undefined
  Elements?: Element[] | undefined
}
type Attachment = {
  AttachmentID?: string | undefined
  FileName?: string | undefined
  Url?: string | undefined
  MimeType?: string | undefined
  ContentLength?: number | undefined
  IncludeOnline?: boolean | undefined
}
type Attachments = { Attachments?: Attachment[] | undefined }
type ContactPerson = {
  FirstName?: string | undefined
  LastName?: string | undefined
  EmailAddress?: string | undefined
  IncludeInEmails?: boolean | undefined
}
type Address = {
  AddressType?: 'POBOX' | 'STREET' | undefined
  AddressLine1?: string | undefined
  AddressLine2?: string | undefined
  AddressLine3?: string | undefined
  AddressLine4?: string | undefined
  City?: string | undefined
  Region?: string | undefined
  PostalCode?: string | undefined
  Country?: string | undefined
  AttentionTo?: string | undefined
}
type Phone = {
  PhoneType?: 'DEFAULT' | 'DDI' | 'MOBILE' | 'FAX' | 'OFFICE' | undefined
  PhoneNumber?: string | undefined
  PhoneAreaCode?: string | undefined
  PhoneCountryCode?: string | undefined
}
type SalesTrackingCategory = {
  TrackingCategoryName?: string | undefined
  TrackingOptionName?: string | undefined
}
type PaymentTermType =
  | 'DAYSAFTERBILLDATE'
  | 'DAYSAFTERBILLMONTH'
  | 'OFCURRENTMONTH'
  | 'OFFOLLOWINGMONTH'
type Bill = { Day?: number | undefined; Type?: PaymentTermType | undefined }
type PaymentTerm = { Bills?: Bill | undefined; Sales?: Bill | undefined }
type ContactGroup = {
  Name?: string | undefined
  Status?: 'ACTIVE' | 'DELETED' | undefined
  ContactGroupID?: string | undefined
  Contacts?: Contact[] | undefined
}
type BrandingTheme = {
  BrandingThemeID?: string | undefined
  Name?: string | undefined
  LogoUrl?: string | undefined
  Type?: 'INVOICE' | undefined
  SortOrder?: number | undefined
  CreatedDateUTC?: string | undefined
}
type BatchPaymentDetails = {
  BankAccountNumber?: string | undefined
  BankAccountName?: string | undefined
  Details?: string | undefined
  Code?: string | undefined
  Reference?: string | undefined
}
type AccountsReceivable = { Outstanding?: number | undefined; Overdue?: number | undefined }
type AccountsPayable = { Outstanding?: number | undefined; Overdue?: number | undefined }
type Balances = {
  AccountsReceivable?: AccountsReceivable | undefined
  AccountsPayable?: AccountsPayable | undefined
}
type Contact = {
  ContactID?: string | undefined
  MergedToContactID?: string | undefined
  ContactNumber?: string | undefined
  AccountNumber?: string | undefined
  ContactStatus?: 'ACTIVE' | 'ARCHIVED' | 'GDPRREQUEST' | undefined
  Name?: string | undefined
  FirstName?: string | undefined
  LastName?: string | undefined
  CompanyNumber?: string | undefined
  EmailAddress?: string | undefined
  ContactPersons?: ContactPerson[] | undefined
  BankAccountDetails?: string | undefined
  TaxNumber?: string | undefined
  TaxNumberType?: 'SSN' | 'EIN' | 'ITIN' | 'ATIN' | undefined
  AccountsReceivableTaxType?: string | undefined
  AccountsPayableTaxType?: string | undefined
  Addresses?: Address[] | undefined
  Phones?: Phone[] | undefined
  IsSupplier?: boolean | undefined
  IsCustomer?: boolean | undefined
  SalesDefaultLineAmountType?: 'INCLUSIVE' | 'EXCLUSIVE' | 'NONE' | undefined
  PurchasesDefaultLineAmountType?: 'INCLUSIVE' | 'EXCLUSIVE' | 'NONE' | undefined
  DefaultCurrency?: CurrencyCode | undefined
  XeroNetworkKey?: string | undefined
  SalesDefaultAccountCode?: string | undefined
  PurchasesDefaultAccountCode?: string | undefined
  SalesTrackingCategories?: SalesTrackingCategory[] | undefined
  PurchasesTrackingCategories?: SalesTrackingCategory[] | undefined
  TrackingCategoryName?: string | undefined
  TrackingCategoryOption?: string | undefined
  PaymentTerms?: PaymentTerm | undefined
  UpdatedDateUTC?: string | undefined
  ContactGroups?: ContactGroup[] | undefined
  Website?: string | undefined
  BrandingTheme?: BrandingTheme | undefined
  BatchPayments?: BatchPaymentDetails | undefined
  Discount?: number | undefined
  Balances?: Balances | undefined
  Attachments?: Attachment[] | undefined
  HasAttachments?: boolean | undefined
  ValidationErrors?: ValidationError[] | undefined
  HasValidationErrors?: boolean | undefined
  StatusAttributeString?: string | undefined
}
type LineItemItem = {
  Code?: string | undefined
  Name?: string | undefined
  ItemID?: string | undefined
}
type LineItemTracking = {
  TrackingCategoryID?: string | undefined
  TrackingOptionID?: string | undefined
  Name?: string | undefined
  Option?: string | undefined
}
type TaxBreakdownComponent = {
  TaxComponentId?: string | undefined
  Type?:
    | 'SYSGST/USCOUNTRY'
    | 'SYSGST/USSTATE'
    | 'SYSGST/USCOUNTY'
    | 'SYSGST/USCITY'
    | 'SYSGST/USSPECIAL'
    | undefined
  Name?: string | undefined
  TaxPercentage?: number | undefined
  TaxAmount?: number | undefined
  TaxableAmount?: number | undefined
  NonTaxableAmount?: number | undefined
  ExemptAmount?: number | undefined
  StateAssignedNo?: string | undefined
  JurisdictionRegion?: string | undefined
}
type LineItem = {
  LineItemID?: string | undefined
  Description?: string | undefined
  Quantity?: number | undefined
  UnitAmount?: number | undefined
  ItemCode?: string | undefined
  AccountCode?: string | undefined
  AccountID?: string | undefined
  TaxType?: string | undefined
  TaxAmount?: number | undefined
  Item?: LineItemItem | undefined
  LineAmount?: number | undefined
  Tracking?: LineItemTracking[] | undefined
  DiscountRate?: number | undefined
  DiscountAmount?: number | undefined
  RepeatingInvoiceID?: string | undefined
  Taxability?: 'TAXABLE' | 'NON_TAXABLE' | 'EXEMPT' | 'PART_TAXABLE' | 'NOT_APPLICABLE' | undefined
  SalesTaxCodeId?: number | undefined
  TaxBreakdown?: TaxBreakdownComponent[] | undefined
}
type LineAmountTypes = 'Exclusive' | 'Inclusive' | 'NoTax'
type Overpayment = {
  Type?: 'RECEIVE-OVERPAYMENT' | 'SPEND-OVERPAYMENT' | 'AROVERPAYMENT' | undefined
  Contact?: Contact | undefined
  Date?: string | undefined
  Status?: 'AUTHORISED' | 'PAID' | 'VOIDED' | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  LineItems?: LineItem[] | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  UpdatedDateUTC?: string | undefined
  UpdatedDateUTCString?: string | undefined
  CurrencyCode?: CurrencyCode | undefined
  OverpaymentID?: string | undefined
  CurrencyRate?: number | undefined
  RemainingCredit?: number | undefined
  Allocations?: Allocation[] | undefined
  AppliedAmount?: number | undefined
  Payments?: Payment[] | undefined
  HasAttachments?: boolean | undefined
  Reference?: string | undefined
  Attachments?: Attachment[] | undefined
}
type InvoiceAddress = {
  InvoiceAddressType?: 'FROM' | 'TO' | undefined
  AddressLine1?: string | undefined
  AddressLine2?: string | undefined
  AddressLine3?: string | undefined
  AddressLine4?: string | undefined
  City?: string | undefined
  Region?: string | undefined
  PostalCode?: string | undefined
  Country?: string | undefined
}
type CreditNote = {
  Type?: 'ACCPAYCREDIT' | 'ACCRECCREDIT' | undefined
  Contact?: Contact | undefined
  Date?: string | undefined
  DueDate?: string | undefined
  Status?: 'DRAFT' | 'SUBMITTED' | 'DELETED' | 'AUTHORISED' | 'PAID' | 'VOIDED' | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  LineItems?: LineItem[] | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  CISDeduction?: number | undefined
  CISRate?: number | undefined
  UpdatedDateUTC?: string | undefined
  UpdatedDateUTCString?: string | undefined
  CurrencyCode?: CurrencyCode | undefined
  FullyPaidOnDate?: string | undefined
  CreditNoteID?: string | undefined
  CreditNoteNumber?: string | undefined
  Reference?: string | undefined
  SentToContact?: boolean | undefined
  CurrencyRate?: number | undefined
  RemainingCredit?: number | undefined
  Allocations?: Allocation[] | undefined
  AppliedAmount?: number | undefined
  Payments?: Payment[] | undefined
  BrandingThemeID?: string | undefined
  StatusAttributeString?: string | undefined
  HasAttachments?: boolean | undefined
  HasErrors?: boolean | undefined
  ValidationErrors?: ValidationError[] | undefined
  Warnings?: ValidationError[] | undefined
  InvoiceAddresses?: InvoiceAddress[] | undefined
}
type Allocation = {
  AllocationID?: string | undefined
  Invoice: Invoice
  Overpayment?: Overpayment | undefined
  Prepayment?: Prepayment | undefined
  CreditNote?: CreditNote | undefined
  Amount: number
  Date: string
  IsDeleted?: boolean | undefined
  StatusAttributeString?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type Prepayment = {
  Type?: 'RECEIVE-PREPAYMENT' | 'SPEND-PREPAYMENT' | 'ARPREPAYMENT' | 'APPREPAYMENT' | undefined
  Contact?: Contact | undefined
  Date?: string | undefined
  Status?: 'AUTHORISED' | 'PAID' | 'VOIDED' | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  LineItems?: LineItem[] | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  Reference?: string | undefined
  InvoiceNumber?: string | undefined
  UpdatedDateUTC?: string | undefined
  UpdatedDateUTCString?: string | undefined
  CurrencyCode?: CurrencyCode | undefined
  PrepaymentID?: string | undefined
  BrandingThemeID?: string | undefined
  CurrencyRate?: number | undefined
  RemainingCredit?: number | undefined
  Allocations?: Allocation[] | undefined
  Payments?: Payment[] | undefined
  AppliedAmount?: number | undefined
  HasAttachments?: boolean | undefined
  Attachments?: Attachment[] | undefined
}
type Invoice = {
  Type?:
    | 'ACCPAY'
    | 'ACCPAYCREDIT'
    | 'APOVERPAYMENT'
    | 'APPREPAYMENT'
    | 'ACCREC'
    | 'ACCRECCREDIT'
    | 'AROVERPAYMENT'
    | 'ARPREPAYMENT'
    | undefined
  Contact?: Contact | undefined
  LineItems?: LineItem[] | undefined
  Date?: string | undefined
  DueDate?: string | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  InvoiceNumber?: string | undefined
  Reference?: string | undefined
  BrandingThemeID?: string | undefined
  Url?: string | undefined
  CurrencyCode?: CurrencyCode | undefined
  CurrencyRate?: number | undefined
  Status?: 'DRAFT' | 'SUBMITTED' | 'DELETED' | 'AUTHORISED' | 'PAID' | 'VOIDED' | undefined
  SentToContact?: boolean | undefined
  ExpectedPaymentDate?: string | undefined
  PlannedPaymentDate?: string | undefined
  CISDeduction?: number | undefined
  CISRate?: number | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  TotalDiscount?: number | undefined
  RoundingAmount?: number | undefined
  EnteredTotal?: number | undefined
  InvoiceID?: string | undefined
  RepeatingInvoiceID?: string | undefined
  HasAttachments?: boolean | undefined
  IsDiscounted?: boolean | undefined
  Payments?: Payment[] | undefined
  Prepayments?: Prepayment[] | undefined
  Overpayments?: Overpayment[] | undefined
  AmountDue?: number | undefined
  AmountPaid?: number | undefined
  FullyPaidOnDate?: string | undefined
  AmountCredited?: number | undefined
  UpdatedDateUTC?: string | undefined
  UpdatedDateUTCString?: string | undefined
  CreditNotes?: CreditNote[] | undefined
  Attachments?: Attachment[] | undefined
  HasErrors?: boolean | undefined
  StatusAttributeString?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
  Warnings?: ValidationError[] | undefined
  InvoiceAddresses?: InvoiceAddress[] | undefined
}
type Payment = {
  Invoice?: Invoice | undefined
  CreditNote?: CreditNote | undefined
  Prepayment?: Prepayment | undefined
  Overpayment?: Overpayment | undefined
  InvoiceNumber?: string | undefined
  CreditNoteNumber?: string | undefined
  BatchPayment?: BatchPayment | undefined
  Account?: Account | undefined
  Code?: string | undefined
  Date?: string | undefined
  CurrencyRate?: number | undefined
  Amount?: number | undefined
  BankAmount?: number | undefined
  Reference?: string | undefined
  IsReconciled?: boolean | undefined
  Status?: 'AUTHORISED' | 'DELETED' | undefined
  PaymentType?:
    | 'ACCRECPAYMENT'
    | 'ACCPAYPAYMENT'
    | 'ARCREDITPAYMENT'
    | 'APCREDITPAYMENT'
    | 'AROVERPAYMENTPAYMENT'
    | 'ARPREPAYMENTPAYMENT'
    | 'APPREPAYMENTPAYMENT'
    | 'APOVERPAYMENTPAYMENT'
    | undefined
  UpdatedDateUTC?: string | undefined
  UpdatedDateUTCString?: string | undefined
  PaymentID?: string | undefined
  BatchPaymentID?: string | undefined
  BankAccountNumber?: string | undefined
  Particulars?: string | undefined
  Details?: string | undefined
  HasAccount?: boolean | undefined
  HasValidationErrors?: boolean | undefined
  StatusAttributeString?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
  Warnings?: ValidationError[] | undefined
}
type BatchPayment = {
  Account?: Account | undefined
  Reference?: string | undefined
  Particulars?: string | undefined
  Code?: string | undefined
  Details?: string | undefined
  Narrative?: string | undefined
  BatchPaymentID?: string | undefined
  DateString?: string | undefined
  Date?: string | undefined
  Amount?: number | undefined
  Payments?: Payment[] | undefined
  Type?: 'PAYBATCH' | 'RECBATCH' | undefined
  Status?: 'AUTHORISED' | 'DELETED' | undefined
  TotalAmount?: number | undefined
  UpdatedDateUTC?: string | undefined
  IsReconciled?: boolean | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type BatchPayments = { BatchPayments?: BatchPayment[] | undefined }
type BatchPaymentDelete = { BatchPaymentID: string; Status: string }
type BatchPaymentDeleteByUrlParam = { Status: string }
type HistoryRecord = {
  Details?: string | undefined
  Changes?: string | undefined
  User?: string | undefined
  DateUTC?: string | undefined
}
type HistoryRecords = { HistoryRecords?: HistoryRecord[] | undefined }
type Pagination = {
  page?: number | undefined
  pageSize?: number | undefined
  pageCount?: number | undefined
  itemCount?: number | undefined
}
type BankTransaction = {
  Type:
    | 'RECEIVE'
    | 'RECEIVE-OVERPAYMENT'
    | 'RECEIVE-PREPAYMENT'
    | 'SPEND'
    | 'SPEND-OVERPAYMENT'
    | 'SPEND-PREPAYMENT'
    | 'RECEIVE-TRANSFER'
    | 'SPEND-TRANSFER'
  Contact?: Contact | undefined
  LineItems: LineItem[]
  BankAccount: Account
  IsReconciled?: boolean | undefined
  Date?: string | undefined
  Reference?: string | undefined
  CurrencyCode?: CurrencyCode | undefined
  CurrencyRate?: number | undefined
  Url?: string | undefined
  Status?: 'AUTHORISED' | 'DELETED' | 'VOIDED' | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  BankTransactionID?: string | undefined
  PrepaymentID?: string | undefined
  OverpaymentID?: string | undefined
  UpdatedDateUTC?: string | undefined
  HasAttachments?: boolean | undefined
  StatusAttributeString?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type BankTransactions = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  BankTransactions?: BankTransaction[] | undefined
}
type TrackingReference = {
  TrackingCategoryID: string
  TrackingOptionID: string
  Name?: string | undefined
  Option?: string | undefined
}
type BankTransfer = {
  FromBankAccount: Account
  ToBankAccount: Account
  Amount: number
  Date?: string | undefined
  BankTransferID?: string | undefined
  CurrencyRate?: number | undefined
  FromBankTransactionID?: string | undefined
  ToBankTransactionID?: string | undefined
  FromIsReconciled?: boolean | undefined
  ToIsReconciled?: boolean | undefined
  Reference?: string | undefined
  HasAttachments?: boolean | undefined
  CreatedDateUTC?: string | undefined
  Status?: 'AUTHORISED' | 'DELETED' | undefined
  FromTracking?: TrackingReference[] | undefined
  ToTracking?: TrackingReference[] | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type BankTransfers = { BankTransfers?: BankTransfer[] | undefined }
type BankTransferDelete = { BankTransferID: string; Status: string }
type BankTransfersDelete = { BankTransfers?: BankTransferDelete[] | undefined }
type BankTransferDeleteByUrlParam = { Status: string }
type BrandingThemes = { BrandingThemes?: BrandingTheme[] | undefined }
type PaymentService = {
  PaymentServiceID?: string | undefined
  PaymentServiceName?: string | undefined
  PaymentServiceUrl?: string | undefined
  PayNowText?: string | undefined
  PaymentServiceType?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type PaymentServices = { PaymentServices?: PaymentService[] | undefined }
type BudgetBalance = { Period?: string | undefined; Amount?: number | undefined }
type BudgetLine = {
  AccountID?: string | undefined
  AccountCode?: string | undefined
  BudgetBalances?: BudgetBalance[] | undefined
}
type TrackingOption = {
  TrackingOptionID?: string | undefined
  Name?: string | undefined
  Status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | undefined
  TrackingCategoryID?: string | undefined
}
type TrackingCategory = {
  TrackingCategoryID?: string | undefined
  TrackingOptionID?: string | undefined
  Name?: string | undefined
  Option?: string | undefined
  Status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | undefined
  Options?: TrackingOption[] | undefined
}
type Budget = {
  BudgetID?: string | undefined
  CreatedIn?: 'XERO_ANALYTICS' | 'BUDGETS_MANAGER' | undefined
  Type?: 'OVERALL' | 'TRACKING' | undefined
  Description?: string | undefined
  UpdatedDateUTC?: string | undefined
  BudgetLines?: BudgetLine[] | undefined
  Tracking?: TrackingCategory[] | undefined
}
type Budgets = { Budgets?: Budget[] | undefined }
type Contacts = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  Contacts?: Contact[] | undefined
}
type CISSetting = { CISEnabled?: boolean | undefined; Rate?: number | undefined }
type CISSettings = { CISSettings?: CISSetting[] | undefined }
type ContactGroups = { ContactGroups?: ContactGroup[] | undefined }
type CreditNotes = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  CreditNotes?: CreditNote[] | undefined
}
type Allocations = { Allocations?: Allocation[] | undefined }
type Currency = { Code?: CurrencyCode | undefined; Description?: string | undefined }
type Currencies = { Currencies?: Currency[] | undefined }
type User = {
  UserID?: string | undefined
  EmailAddress?: string | undefined
  FirstName?: string | undefined
  LastName?: string | undefined
  UpdatedDateUTC?: string | undefined
  IsSubscriber?: boolean | undefined
  OrganisationRole?:
    | 'READONLY'
    | 'INVOICEONLY'
    | 'STANDARD'
    | 'FINANCIALADVISER'
    | 'MANAGEDCLIENT'
    | 'CASHBOOKCLIENT'
    | 'UNKNOWN'
    | 'REMOVED'
    | undefined
}
type Receipt = {
  Date?: string | undefined
  Contact?: Contact | undefined
  LineItems?: LineItem[] | undefined
  User?: User | undefined
  Reference?: string | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  ReceiptID?: string | undefined
  Status?: 'DRAFT' | 'SUBMITTED' | 'AUTHORISED' | 'DECLINED' | 'VOIDED' | undefined
  ReceiptNumber?: string | undefined
  UpdatedDateUTC?: string | undefined
  HasAttachments?: boolean | undefined
  Url?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
  Warnings?: ValidationError[] | undefined
  Attachments?: Attachment[] | undefined
}
type ExpenseClaim = {
  ExpenseClaimID?: string | undefined
  Status?: 'SUBMITTED' | 'AUTHORISED' | 'PAID' | 'VOIDED' | 'DELETED' | undefined
  Payments?: Payment[] | undefined
  User?: User | undefined
  Receipts?: Receipt[] | undefined
  UpdatedDateUTC?: string | undefined
  Total?: number | undefined
  AmountDue?: number | undefined
  AmountPaid?: number | undefined
  PaymentDueDate?: string | undefined
  ReportingDate?: string | undefined
  ReceiptID?: string | undefined
}
type ExpenseClaims = { ExpenseClaims?: ExpenseClaim[] | undefined }
type Invoices = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  Invoices?: Invoice[] | undefined
}
type OnlineInvoice = { OnlineInvoiceUrl?: string | undefined }
type OnlineInvoices = { OnlineInvoices?: OnlineInvoice[] | undefined }
type RequestEmpty = { Status?: string | undefined }
type InvoiceReminder = { Enabled?: boolean | undefined }
type InvoiceReminders = { InvoiceReminders?: InvoiceReminder[] | undefined }
type Purchase = {
  UnitPrice?: number | undefined
  AccountCode?: string | undefined
  COGSAccountCode?: string | undefined
  TaxType?: string | undefined
}
type Item = {
  Code: string
  InventoryAssetAccountCode?: string | undefined
  Name?: string | undefined
  IsSold?: boolean | undefined
  IsPurchased?: boolean | undefined
  Description?: string | undefined
  PurchaseDescription?: string | undefined
  PurchaseDetails?: Purchase | undefined
  SalesDetails?: Purchase | undefined
  IsTrackedAsInventory?: boolean | undefined
  TotalCostPool?: number | undefined
  QuantityOnHand?: number | undefined
  QuantityAvailable?: number | undefined
  QuantityOnBackOrder?: number | undefined
  UpdatedDateUTC?: string | undefined
  ItemID?: string | undefined
  StatusAttributeString?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type Items = { Items?: Item[] | undefined }
type JournalLine = {
  JournalLineID?: string | undefined
  AccountID?: string | undefined
  AccountCode?: string | undefined
  AccountType?: AccountType | undefined
  AccountName?: string | undefined
  Description?: string | undefined
  NetAmount?: number | undefined
  GrossAmount?: number | undefined
  TaxAmount?: number | undefined
  TaxType?: string | undefined
  TaxName?: string | undefined
  TrackingCategories?: TrackingCategory[] | undefined
}
type Journal = {
  JournalID?: string | undefined
  JournalDate?: string | undefined
  JournalNumber?: number | undefined
  CreatedDateUTC?: string | undefined
  Reference?: string | undefined
  SourceID?: string | undefined
  SourceType?:
    | 'ACCREC'
    | 'ACCPAY'
    | 'ACCRECCREDIT'
    | 'ACCPAYCREDIT'
    | 'ACCRECPAYMENT'
    | 'ACCPAYPAYMENT'
    | 'ARCREDITPAYMENT'
    | 'APCREDITPAYMENT'
    | 'CASHREC'
    | 'CASHPAID'
    | 'TRANSFER'
    | 'ARPREPAYMENT'
    | 'APPREPAYMENT'
    | 'AROVERPAYMENT'
    | 'APOVERPAYMENT'
    | 'EXPCLAIM'
    | 'EXPPAYMENT'
    | 'MANJOURNAL'
    | 'PAYSLIP'
    | 'WAGEPAYABLE'
    | 'INTEGRATEDPAYROLLPE'
    | 'INTEGRATEDPAYROLLPT'
    | 'EXTERNALSPENDMONEY'
    | 'INTEGRATEDPAYROLLPTPAYMENT'
    | 'INTEGRATEDPAYROLLCN'
    | undefined
  JournalLines?: JournalLine[] | undefined
}
type Journals = { Warnings?: ValidationError[] | undefined; Journals?: Journal[] | undefined }
type LinkedTransaction = {
  SourceTransactionID?: string | undefined
  SourceLineItemID?: string | undefined
  ContactID?: string | undefined
  TargetTransactionID?: string | undefined
  TargetLineItemID?: string | undefined
  LinkedTransactionID?: string | undefined
  Status?: 'APPROVED' | 'DRAFT' | 'ONDRAFT' | 'BILLED' | 'VOIDED' | undefined
  Type?: 'BILLABLEEXPENSE' | undefined
  UpdatedDateUTC?: string | undefined
  SourceTransactionTypeCode?: 'ACCPAY' | 'SPEND' | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type LinkedTransactions = { LinkedTransactions?: LinkedTransaction[] | undefined }
type ManualJournalLine = {
  LineAmount?: number | undefined
  AccountCode?: string | undefined
  AccountID?: string | undefined
  Description?: string | undefined
  TaxType?: string | undefined
  Tracking?: TrackingCategory[] | undefined
  TaxAmount?: number | undefined
  IsBlank?: boolean | undefined
}
type ManualJournal = {
  Narration: string
  JournalLines?: ManualJournalLine[] | undefined
  Date?: string | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  Status?: 'DRAFT' | 'POSTED' | 'DELETED' | 'VOIDED' | 'ARCHIVED' | undefined
  Url?: string | undefined
  ShowOnCashBasisReports?: boolean | undefined
  HasAttachments?: boolean | undefined
  UpdatedDateUTC?: string | undefined
  ManualJournalID?: string | undefined
  StatusAttributeString?: string | undefined
  Warnings?: ValidationError[] | undefined
  ValidationErrors?: ValidationError[] | undefined
  Attachments?: Attachment[] | undefined
}
type ManualJournals = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  ManualJournals?: ManualJournal[] | undefined
}
type CountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AN'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GQ'
  | 'GR'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'XK'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'
type TimeZone =
  | 'AFGHANISTANSTANDARDTIME'
  | 'ALASKANSTANDARDTIME'
  | 'ALEUTIANSTANDARDTIME'
  | 'ALTAISTANDARDTIME'
  | 'ARABIANSTANDARDTIME'
  | 'ARABICSTANDARDTIME'
  | 'ARABSTANDARDTIME'
  | 'ARGENTINASTANDARDTIME'
  | 'ASTRAKHANSTANDARDTIME'
  | 'ATLANTICSTANDARDTIME'
  | 'AUSCENTRALSTANDARDTIME'
  | 'AUSCENTRALWSTANDARDTIME'
  | 'AUSEASTERNSTANDARDTIME'
  | 'AZERBAIJANSTANDARDTIME'
  | 'AZORESSTANDARDTIME'
  | 'BAHIASTANDARDTIME'
  | 'BANGLADESHSTANDARDTIME'
  | 'BELARUSSTANDARDTIME'
  | 'BOUGAINVILLESTANDARDTIME'
  | 'CANADACENTRALSTANDARDTIME'
  | 'CAPEVERDESTANDARDTIME'
  | 'CAUCASUSSTANDARDTIME'
  | 'CENAUSTRALIASTANDARDTIME'
  | 'CENTRALAMERICASTANDARDTIME'
  | 'CENTRALASIASTANDARDTIME'
  | 'CENTRALBRAZILIANSTANDARDTIME'
  | 'CENTRALEUROPEANSTANDARDTIME'
  | 'CENTRALEUROPESTANDARDTIME'
  | 'CENTRALPACIFICSTANDARDTIME'
  | 'CENTRALSTANDARDTIME'
  | 'CENTRALSTANDARDTIME(MEXICO)'
  | 'CHATHAMISLANDSSTANDARDTIME'
  | 'CHINASTANDARDTIME'
  | 'CUBASTANDARDTIME'
  | 'DATELINESTANDARDTIME'
  | 'EAFRICASTANDARDTIME'
  | 'EASTERISLANDSTANDARDTIME'
  | 'EASTERNSTANDARDTIME'
  | 'EASTERNSTANDARDTIME(MEXICO)'
  | 'EAUSTRALIASTANDARDTIME'
  | 'EEUROPESTANDARDTIME'
  | 'EGYPTSTANDARDTIME'
  | 'EKATERINBURGSTANDARDTIME'
  | 'ESOUTHAMERICASTANDARDTIME'
  | 'FIJISTANDARDTIME'
  | 'FLESTANDARDTIME'
  | 'GEORGIANSTANDARDTIME'
  | 'GMTSTANDARDTIME'
  | 'GREENLANDSTANDARDTIME'
  | 'GREENWICHSTANDARDTIME'
  | 'GTBSTANDARDTIME'
  | 'HAITISTANDARDTIME'
  | 'HAWAIIANSTANDARDTIME'
  | 'INDIASTANDARDTIME'
  | 'IRANSTANDARDTIME'
  | 'ISRAELSTANDARDTIME'
  | 'JORDANSTANDARDTIME'
  | 'KALININGRADSTANDARDTIME'
  | 'KAMCHATKASTANDARDTIME'
  | 'KOREASTANDARDTIME'
  | 'LIBYASTANDARDTIME'
  | 'LINEISLANDSSTANDARDTIME'
  | 'LORDHOWESTANDARDTIME'
  | 'MAGADANSTANDARDTIME'
  | 'MAGALLANESSTANDARDTIME'
  | 'MARQUESASSTANDARDTIME'
  | 'MAURITIUSSTANDARDTIME'
  | 'MIDATLANTICSTANDARDTIME'
  | 'MIDDLEEASTSTANDARDTIME'
  | 'MONTEVIDEOSTANDARDTIME'
  | 'MOROCCOSTANDARDTIME'
  | 'MOUNTAINSTANDARDTIME'
  | 'MOUNTAINSTANDARDTIME(MEXICO)'
  | 'MYANMARSTANDARDTIME'
  | 'NAMIBIASTANDARDTIME'
  | 'NCENTRALASIASTANDARDTIME'
  | 'NEPALSTANDARDTIME'
  | 'NEWFOUNDLANDSTANDARDTIME'
  | 'NEWZEALANDSTANDARDTIME'
  | 'NORFOLKSTANDARDTIME'
  | 'NORTHASIAEASTSTANDARDTIME'
  | 'NORTHASIASTANDARDTIME'
  | 'NORTHKOREASTANDARDTIME'
  | 'OMSKSTANDARDTIME'
  | 'PACIFICSASTANDARDTIME'
  | 'PACIFICSTANDARDTIME'
  | 'PACIFICSTANDARDTIME(MEXICO)'
  | 'PAKISTANSTANDARDTIME'
  | 'PARAGUAYSTANDARDTIME'
  | 'QYZYLORDASTANDARDTIME'
  | 'ROMANCESTANDARDTIME'
  | 'RUSSIANSTANDARDTIME'
  | 'RUSSIATIMEZONE10'
  | 'RUSSIATIMEZONE11'
  | 'RUSSIATIMEZONE3'
  | 'SAEASTERNSTANDARDTIME'
  | 'SAINTPIERRESTANDARDTIME'
  | 'SAKHALINSTANDARDTIME'
  | 'SAMOASTANDARDTIME'
  | 'SAOTOMESTANDARDTIME'
  | 'SAPACIFICSTANDARDTIME'
  | 'SARATOVSTANDARDTIME'
  | 'SAWESTERNSTANDARDTIME'
  | 'SEASIASTANDARDTIME'
  | 'SINGAPORESTANDARDTIME'
  | 'SOUTHAFRICASTANDARDTIME'
  | 'SOUTHSUDANSTANDARDTIME'
  | 'SRILANKASTANDARDTIME'
  | 'SUDANSTANDARDTIME'
  | 'SYRIASTANDARDTIME'
  | 'TAIPEISTANDARDTIME'
  | 'TASMANIASTANDARDTIME'
  | 'TOCANTINSSTANDARDTIME'
  | 'TOKYOSTANDARDTIME'
  | 'TOMSKSTANDARDTIME'
  | 'TONGASTANDARDTIME'
  | 'TRANSBAIKALSTANDARDTIME'
  | 'TURKEYSTANDARDTIME'
  | 'TURKSANDCAICOSSTANDARDTIME'
  | 'ULAANBAATARSTANDARDTIME'
  | 'USEASTERNSTANDARDTIME'
  | 'USMOUNTAINSTANDARDTIME'
  | 'UTC'
  | 'UTC+12'
  | 'UTC+13'
  | 'UTC02'
  | 'UTC08'
  | 'UTC09'
  | 'UTC11'
  | 'VENEZUELASTANDARDTIME'
  | 'VLADIVOSTOKSTANDARDTIME'
  | 'VOLGOGRADSTANDARDTIME'
  | 'WAUSTRALIASTANDARDTIME'
  | 'WCENTRALAFRICASTANDARDTIME'
  | 'WESTASIASTANDARDTIME'
  | 'WESTBANKSTANDARDTIME'
  | 'WESTPACIFICSTANDARDTIME'
  | 'WEUROPESTANDARDTIME'
  | 'WMONGOLIASTANDARDTIME'
  | 'YAKUTSKSTANDARDTIME'
  | 'YUKONSTANDARDTIME'
type AddressForOrganisation = {
  AddressType?: 'POBOX' | 'STREET' | 'DELIVERY' | undefined
  AddressLine1?: string | undefined
  AddressLine2?: string | undefined
  AddressLine3?: string | undefined
  AddressLine4?: string | undefined
  City?: string | undefined
  Region?: string | undefined
  PostalCode?: string | undefined
  Country?: string | undefined
  AttentionTo?: string | undefined
}
type ExternalLink = {
  LinkType?: 'Facebook' | 'GooglePlus' | 'LinkedIn' | 'Twitter' | 'Website' | undefined
  Url?: string | undefined
  Description?: string | undefined
}
type Organisation = {
  OrganisationID?: string | undefined
  APIKey?: string | undefined
  Name?: string | undefined
  LegalName?: string | undefined
  PaysTax?: boolean | undefined
  Version?:
    | 'AU'
    | 'NZ'
    | 'GLOBAL'
    | 'UK'
    | 'US'
    | 'AUONRAMP'
    | 'NZONRAMP'
    | 'GLOBALONRAMP'
    | 'UKONRAMP'
    | 'USONRAMP'
    | undefined
  OrganisationType?:
    | 'ACCOUNTING_PRACTICE'
    | 'COMPANY'
    | 'CHARITY'
    | 'CLUB_OR_SOCIETY'
    | 'INDIVIDUAL'
    | 'LOOK_THROUGH_COMPANY'
    | 'NOT_FOR_PROFIT'
    | 'PARTNERSHIP'
    | 'S_CORPORATION'
    | 'SELF_MANAGED_SUPERANNUATION_FUND'
    | 'SOLE_TRADER'
    | 'SUPERANNUATION_FUND'
    | 'TRUST'
    | 'PERSONAL'
    | 'SINGLEMEMBERLLC'
    | 'CCORPORATIONLLC'
    | 'PARTNERSHIPLLC'
    | 'SCORPORATIONLLC'
    | 'LLC'
    | 'NOTLLC'
    | 'UNSPECIFIED'
    | undefined
  BaseCurrency?: CurrencyCode | undefined
  CountryCode?: CountryCode | undefined
  IsDemoCompany?: boolean | undefined
  OrganisationStatus?: string | undefined
  RegistrationNumber?: string | undefined
  EmployerIdentificationNumber?: string | undefined
  TaxNumber?: string | undefined
  FinancialYearEndDay?: number | undefined
  FinancialYearEndMonth?: number | undefined
  SalesTaxBasis?:
    | 'PAYMENTS'
    | 'INVOICE'
    | 'NONE'
    | 'CASH'
    | 'ACCRUAL'
    | 'FLATRATECASH'
    | 'FLATRATEACCRUAL'
    | 'ACCRUALS'
    | undefined
  SalesTaxPeriod?:
    | 'MONTHLY'
    | 'QUARTERLY1'
    | 'QUARTERLY2'
    | 'QUARTERLY3'
    | 'ANNUALLY'
    | 'ONEMONTHS'
    | 'TWOMONTHS'
    | 'SIXMONTHS'
    | '1MONTHLY'
    | '2MONTHLY'
    | '3MONTHLY'
    | '6MONTHLY'
    | 'QUARTERLY'
    | 'YEARLY'
    | 'NONE'
    | undefined
  DefaultSalesTax?: string | undefined
  DefaultPurchasesTax?: string | undefined
  PeriodLockDate?: string | undefined
  EndOfYearLockDate?: string | undefined
  CreatedDateUTC?: string | undefined
  Timezone?: TimeZone | undefined
  OrganisationEntityType?:
    | 'ACCOUNTING_PRACTICE'
    | 'COMPANY'
    | 'CHARITY'
    | 'CLUB_OR_SOCIETY'
    | 'INDIVIDUAL'
    | 'LOOK_THROUGH_COMPANY'
    | 'NOT_FOR_PROFIT'
    | 'PARTNERSHIP'
    | 'S_CORPORATION'
    | 'SELF_MANAGED_SUPERANNUATION_FUND'
    | 'SOLE_TRADER'
    | 'SUPERANNUATION_FUND'
    | 'TRUST'
    | 'PERSONAL'
    | 'SINGLEMEMBERLLC'
    | 'CCORPORATIONLLC'
    | 'PARTNERSHIPLLC'
    | 'SCORPORATIONLLC'
    | 'LLC'
    | 'NOTLLC'
    | 'UNSPECIFIED'
    | undefined
  ShortCode?: string | undefined
  Class?:
    | 'DEMO'
    | 'TRIAL'
    | 'STARTER'
    | 'STANDARD'
    | 'PREMIUM'
    | 'PREMIUM_20'
    | 'PREMIUM_50'
    | 'PREMIUM_100'
    | 'LEDGER'
    | 'GST_CASHBOOK'
    | 'NON_GST_CASHBOOK'
    | 'ULTIMATE'
    | 'LITE'
    | 'ULTIMATE_10'
    | 'ULTIMATE_20'
    | 'ULTIMATE_50'
    | 'ULTIMATE_100'
    | 'IGNITE'
    | 'GROW'
    | 'COMPREHENSIVE'
    | 'SIMPLE'
    | 'BASICLITE'
    | 'ULTRA'
    | undefined
  Edition?: 'BUSINESS' | 'PARTNER' | undefined
  LineOfBusiness?: string | undefined
  Addresses?: AddressForOrganisation[] | undefined
  Phones?: Phone[] | undefined
  ExternalLinks?: ExternalLink[] | undefined
  PaymentTerms?: PaymentTerm | undefined
}
type Organisations = { Organisations?: Organisation[] | undefined }
type Action = { Name?: string | undefined; Status?: 'ALLOWED' | 'NOT-ALLOWED' | undefined }
type Actions = { Actions?: Action[] | undefined }
type CISOrgSetting = {
  CISContractorEnabled?: boolean | undefined
  CISSubContractorEnabled?: boolean | undefined
  Rate?: number | undefined
}
type CISOrgSettings = { CISSettings?: CISOrgSetting[] | undefined }
type Overpayments = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  Overpayments?: Overpayment[] | undefined
}
type Payments = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  Payments?: Payment[] | undefined
}
type PaymentDelete = { Status: string }
type Prepayments = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  Prepayments?: Prepayment[] | undefined
}
type PurchaseOrder = {
  Contact?: Contact | undefined
  LineItems?: LineItem[] | undefined
  Date?: string | undefined
  DeliveryDate?: string | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  PurchaseOrderNumber?: string | undefined
  Reference?: string | undefined
  BrandingThemeID?: string | undefined
  CurrencyCode?: CurrencyCode | undefined
  Status?: 'DRAFT' | 'SUBMITTED' | 'AUTHORISED' | 'BILLED' | 'DELETED' | undefined
  SentToContact?: boolean | undefined
  DeliveryAddress?: string | undefined
  AttentionTo?: string | undefined
  Telephone?: string | undefined
  DeliveryInstructions?: string | undefined
  ExpectedArrivalDate?: string | undefined
  PurchaseOrderID?: string | undefined
  CurrencyRate?: number | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  TotalDiscount?: number | undefined
  HasAttachments?: boolean | undefined
  UpdatedDateUTC?: string | undefined
  StatusAttributeString?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
  Warnings?: ValidationError[] | undefined
  Attachments?: Attachment[] | undefined
}
type PurchaseOrders = {
  pagination?: Pagination | undefined
  Warnings?: ValidationError[] | undefined
  PurchaseOrders?: PurchaseOrder[] | undefined
}
type QuoteStatusCodes = 'DRAFT' | 'SENT' | 'DECLINED' | 'ACCEPTED' | 'INVOICED' | 'DELETED'
type QuoteLineAmountTypes = 'EXCLUSIVE' | 'INCLUSIVE' | 'NOTAX'
type Quote = {
  QuoteID?: string | undefined
  QuoteNumber?: string | undefined
  Reference?: string | undefined
  Terms?: string | undefined
  Contact?: Contact | undefined
  LineItems?: LineItem[] | undefined
  Date?: string | undefined
  DateString?: string | undefined
  ExpiryDate?: string | undefined
  ExpiryDateString?: string | undefined
  Status?: QuoteStatusCodes | undefined
  CurrencyCode?: CurrencyCode | undefined
  CurrencyRate?: number | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  TotalDiscount?: number | undefined
  Title?: string | undefined
  Summary?: string | undefined
  BrandingThemeID?: string | undefined
  UpdatedDateUTC?: string | undefined
  LineAmountTypes?: QuoteLineAmountTypes | undefined
  StatusAttributeString?: string | undefined
  ValidationErrors?: ValidationError[] | undefined
}
type Quotes = { Quotes?: Quote[] | undefined }
type Receipts = { Receipts?: Receipt[] | undefined }
type Schedule = {
  Period?: number | undefined
  Unit?: 'WEEKLY' | 'MONTHLY' | undefined
  DueDate?: number | undefined
  DueDateType?:
    | 'DAYSAFTERBILLDATE'
    | 'DAYSAFTERBILLMONTH'
    | 'DAYSAFTERINVOICEDATE'
    | 'DAYSAFTERINVOICEMONTH'
    | 'OFCURRENTMONTH'
    | 'OFFOLLOWINGMONTH'
    | undefined
  StartDate?: string | undefined
  NextScheduledDate?: string | undefined
  EndDate?: string | undefined
}
type RepeatingInvoice = {
  Type?: 'ACCPAY' | 'ACCREC' | undefined
  Contact?: Contact | undefined
  Schedule?: Schedule | undefined
  LineItems?: LineItem[] | undefined
  LineAmountTypes?: LineAmountTypes | undefined
  Reference?: string | undefined
  BrandingThemeID?: string | undefined
  CurrencyCode?: CurrencyCode | undefined
  Status?: 'DRAFT' | 'AUTHORISED' | 'DELETED' | undefined
  SubTotal?: number | undefined
  TotalTax?: number | undefined
  Total?: number | undefined
  RepeatingInvoiceID?: string | undefined
  ID?: string | undefined
  HasAttachments?: boolean | undefined
  Attachments?: Attachment[] | undefined
  ApprovedForSending?: boolean | undefined
  SendCopy?: boolean | undefined
  MarkAsSent?: boolean | undefined
  IncludePDF?: boolean | undefined
}
type RepeatingInvoices = { RepeatingInvoices?: RepeatingInvoice[] | undefined }
type TenNinetyNineContact = {
  Box1?: number | undefined
  Box2?: number | undefined
  Box3?: number | undefined
  Box4?: number | undefined
  Box5?: number | undefined
  Box6?: number | undefined
  Box7?: number | undefined
  Box8?: number | undefined
  Box9?: number | undefined
  Box10?: number | undefined
  Box11?: number | undefined
  Box13?: number | undefined
  Box14?: number | undefined
  Name?: string | undefined
  FederalTaxIDType?: string | undefined
  City?: string | undefined
  Zip?: string | undefined
  State?: string | undefined
  Email?: string | undefined
  StreetAddress?: string | undefined
  TaxID?: string | undefined
  ContactId?: string | undefined
  LegalName?: string | undefined
  BusinessName?: string | undefined
  FederalTaxClassification?:
    | 'SOLE_PROPRIETOR'
    | 'PARTNERSHIP'
    | 'TRUST_OR_ESTATE'
    | 'NONPROFIT'
    | 'C_CORP'
    | 'S_CORP'
    | 'OTHER'
    | undefined
}
type Report = {
  ReportName?: string | undefined
  ReportType?: 'AgedPayablesByContact' | undefined
  ReportTitle?: string | undefined
  ReportDate?: string | undefined
  UpdatedDateUTC?: string | undefined
  Contacts?: TenNinetyNineContact[] | undefined
}
type Reports = { Reports?: Report[] | undefined }
type RowType = 'Header' | 'Section' | 'Row' | 'SummaryRow'
type ReportAttribute = { Id?: string | undefined; Value?: string | undefined }
type ReportCell = { Value?: string | undefined; Attributes?: ReportAttribute[] | undefined }
type ReportRow = {
  RowType?: RowType | undefined
  Title?: string | undefined
  Cells?: ReportCell[] | undefined
}
type ReportRows = {
  RowType?: RowType | undefined
  Title?: string | undefined
  Cells?: ReportCell[] | undefined
  Rows?: ReportRow[] | undefined
}
type ReportFields = {
  FieldID?: string | undefined
  Description?: string | undefined
  Value?: string | undefined
}
type ReportWithRow = {
  ReportID?: string | undefined
  ReportName?: string | undefined
  ReportTitle?: string | undefined
  ReportType?: string | undefined
  ReportTitles?: string[] | undefined
  ReportDate?: string | undefined
  Rows?: ReportRows[] | undefined
  UpdatedDateUTC?: string | undefined
  Fields?: ReportFields[] | undefined
}
type ReportWithRows = { Reports?: ReportWithRow[] | undefined }
type ConversionDate = { Month?: number | undefined; Year?: number | undefined }
type BalanceDetails = {
  Balance?: number | undefined
  CurrencyCode?: string | undefined
  CurrencyRate?: number | undefined
}
type ConversionBalances = {
  AccountCode?: string | undefined
  Balance?: number | undefined
  BalanceDetails?: BalanceDetails[] | undefined
}
type Setup = {
  ConversionDate?: ConversionDate | undefined
  ConversionBalances?: ConversionBalances[] | undefined
  Accounts?: Account[] | undefined
}
type ImportSummaryAccounts = {
  Total?: number | undefined
  New?: number | undefined
  Updated?: number | undefined
  Deleted?: number | undefined
  Locked?: number | undefined
  System?: number | undefined
  Errored?: number | undefined
  Present?: boolean | undefined
  NewOrUpdated?: number | undefined
}
type ImportSummaryOrganisation = { Present?: boolean | undefined }
type ImportSummary = {
  Accounts?: ImportSummaryAccounts | undefined
  Organisation?: ImportSummaryOrganisation | undefined
}
type ImportSummaryObject = { ImportSummary?: ImportSummary | undefined }
type TaxComponent = {
  Name?: string | undefined
  Rate?: number | undefined
  IsCompound?: boolean | undefined
  IsNonRecoverable?: boolean | undefined
}
type TaxRate = {
  Name?: string | undefined
  TaxType?: string | undefined
  TaxComponents?: TaxComponent[] | undefined
  Status?: 'ACTIVE' | 'DELETED' | 'ARCHIVED' | 'PENDING' | undefined
  ReportTaxType?:
    | 'AVALARA'
    | 'BASEXCLUDED'
    | 'CAPITALSALESOUTPUT'
    | 'CAPITALEXPENSESINPUT'
    | 'ECOUTPUT'
    | 'ECOUTPUTSERVICES'
    | 'ECINPUT'
    | 'ECACQUISITIONS'
    | 'EXEMPTEXPENSES'
    | 'EXEMPTINPUT'
    | 'EXEMPTOUTPUT'
    | 'GSTONIMPORTS'
    | 'INPUT'
    | 'INPUTTAXED'
    | 'MOSSSALES'
    | 'NONE'
    | 'NONEOUTPUT'
    | 'OUTPUT'
    | 'PURCHASESINPUT'
    | 'SALESOUTPUT'
    | 'EXEMPTCAPITAL'
    | 'EXEMPTEXPORT'
    | 'CAPITALEXINPUT'
    | 'GSTONCAPIMPORTS'
    | 'GSTONCAPITALIMPORTS'
    | 'REVERSECHARGES'
    | 'PAYMENTS'
    | 'INVOICE'
    | 'CASH'
    | 'ACCRUAL'
    | 'FLATRATECASH'
    | 'FLATRATEACCRUAL'
    | 'ACCRUALS'
    | 'TXCA'
    | 'SRCAS'
    | 'DSOUTPUT'
    | 'BLINPUT2'
    | 'EPINPUT'
    | 'IMINPUT2'
    | 'MEINPUT'
    | 'IGDSINPUT2'
    | 'ESN33OUTPUT'
    | 'OPINPUT'
    | 'OSOUTPUT'
    | 'TXN33INPUT'
    | 'TXESSINPUT'
    | 'TXREINPUT'
    | 'TXPETINPUT'
    | 'NRINPUT'
    | 'ES33OUTPUT'
    | 'ZERORATEDINPUT'
    | 'ZERORATEDOUTPUT'
    | 'DRCHARGESUPPLY'
    | 'DRCHARGE'
    | 'CAPINPUT'
    | 'CAPIMPORTS'
    | 'IMINPUT'
    | 'INPUT2'
    | 'CIUINPUT'
    | 'SRINPUT'
    | 'OUTPUT2'
    | 'SROUTPUT'
    | 'CAPOUTPUT'
    | 'SROUTPUT2'
    | 'CIUOUTPUT'
    | 'ZROUTPUT'
    | 'ZREXPORT'
    | 'ACC28PLUS'
    | 'ACCUPTO28'
    | 'OTHEROUTPUT'
    | 'SHOUTPUT'
    | 'ZRINPUT'
    | 'BADDEBT'
    | 'OTHERINPUT'
    | 'BADDEBTRELIEF'
    | 'IGDSINPUT3'
    | 'SROVR'
    | 'TOURISTREFUND'
    | 'TXRCN33'
    | 'TXRCRE'
    | 'TXRCESS'
    | 'TXRCTS'
    | 'CAPEXINPUT'
    | 'UNDEFINED'
    | 'CAPEXOUTPUT'
    | 'ZEROEXPOUTPUT'
    | 'GOODSIMPORT'
    | 'NONEINPUT'
    | 'NOTREPORTED'
    | 'SROVRRS'
    | 'SROVRLVG'
    | 'SRLVG'
    | 'IM'
    | 'IMESS'
    | 'IMN33'
    | 'IMRE'
    | 'BADDEBTRECOVERY'
    | 'USSALESTAX'
    | 'BLINPUT3'
    | undefined
  CanApplyToAssets?: boolean | undefined
  CanApplyToEquity?: boolean | undefined
  CanApplyToExpenses?: boolean | undefined
  CanApplyToLiabilities?: boolean | undefined
  CanApplyToRevenue?: boolean | undefined
  DisplayTaxRate?: number | undefined
  EffectiveRate?: number | undefined
}
type TaxRates = { TaxRates?: TaxRate[] | undefined }
type TrackingCategories = { TrackingCategories?: TrackingCategory[] | undefined }
type TrackingOptions = { Options?: TrackingOption[] | undefined }
type Users = { Users?: User[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Accounts': {
      $get: {
        input: { query: { where?: string | undefined; order?: string | undefined } } & {
          header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string }
        }
        output: Accounts
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Account }
            output: Accounts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Account }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Accounts/:AccountID': {
      $get: {
        input: { param: { AccountID: string } } & { header: { 'xero-tenant-id': string } }
        output: Accounts
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { AccountID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Accounts }
            output: Accounts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Accounts }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { AccountID: string } } & { header: { 'xero-tenant-id': string } }
            output: Accounts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountID: string } } & { header: { 'xero-tenant-id': string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Accounts/:AccountID/Attachments': {
      $get: {
        input: { param: { AccountID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Accounts/:AccountID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { AccountID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Accounts/:AccountID/Attachments/:FileName': {
      $get: {
        input: { param: { AccountID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { AccountID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { AccountID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BatchPayments': {
      $get: {
        input: { query: { where?: string | undefined; order?: string | undefined } } & {
          header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string }
        }
        output: BatchPayments
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BatchPayments }
            output: BatchPayments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BatchPayments }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BatchPaymentDelete }
            output: BatchPayments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BatchPaymentDelete }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BatchPayments/:BatchPaymentID': {
      $get: {
        input: { param: { BatchPaymentID: string } } & { header: { 'xero-tenant-id': string } }
        output: BatchPayments
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { BatchPaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BatchPaymentDeleteByUrlParam }
            output: BatchPayments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BatchPaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BatchPaymentDeleteByUrlParam }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BatchPayments/:BatchPaymentID/History': {
      $get: {
        input: { param: { BatchPaymentID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { BatchPaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BatchPaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankTransactions': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            page?: number | undefined
            unitdp?: number | undefined
            pageSize?: number | undefined
            References?: string[] | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: BankTransactions
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: BankTransactions
            }
            output: BankTransactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: BankTransactions
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: BankTransactions
            }
            output: BankTransactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: BankTransactions
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankTransactions/:BankTransactionID': {
      $get: {
        input: { param: { BankTransactionID: string } } & {
          query: { unitdp?: number | undefined }
        } & { header: { 'xero-tenant-id': string } }
        output: BankTransactions
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { BankTransactionID: string } } & {
              query: { unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: BankTransactions
            }
            output: BankTransactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BankTransactionID: string } } & {
              query: { unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: BankTransactions
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankTransactions/:BankTransactionID/Attachments': {
      $get: {
        input: { param: { BankTransactionID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BankTransactions/:BankTransactionID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { BankTransactionID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/BankTransactions/:BankTransactionID/Attachments/:FileName': {
      $get: {
        input: { param: { BankTransactionID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { BankTransactionID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BankTransactionID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { BankTransactionID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BankTransactionID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankTransactions/:BankTransactionID/History': {
      $get: {
        input: { param: { BankTransactionID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { BankTransactionID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BankTransactionID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankTransfers': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            includeDeleted?: boolean | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: BankTransfers
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BankTransfers }
            output: BankTransfers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BankTransfers }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BankTransfersDelete }
            output: BankTransfers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BankTransfersDelete }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankTransfers/:BankTransferID': {
      $get: {
        input: { param: { BankTransferID: string } } & { header: { 'xero-tenant-id': string } }
        output: BankTransfers
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { BankTransferID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BankTransferDeleteByUrlParam }
            output: BankTransfers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BankTransferID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: BankTransferDeleteByUrlParam }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankTransfers/:BankTransferID/Attachments': {
      $get: {
        input: { param: { BankTransferID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BankTransfers/:BankTransferID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { BankTransferID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/BankTransfers/:BankTransferID/Attachments/:FileName': {
      $get: {
        input: { param: { BankTransferID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { BankTransferID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BankTransferID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { BankTransferID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BankTransferID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BankTransfers/:BankTransferID/History': {
      $get: {
        input: { param: { BankTransferID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { BankTransferID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BankTransferID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/BrandingThemes': {
      $get: {
        input: { header: { 'xero-tenant-id': string } }
        output: BrandingThemes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BrandingThemes/:BrandingThemeID': {
      $get: {
        input: { param: { BrandingThemeID: string } } & { header: { 'xero-tenant-id': string } }
        output: BrandingThemes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BrandingThemes/:BrandingThemeID/PaymentServices': {
      $get: {
        input: { param: { BrandingThemeID: string } } & { header: { 'xero-tenant-id': string } }
        output: PaymentServices
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { BrandingThemeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PaymentServices }
            output: PaymentServices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BrandingThemeID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PaymentServices }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Budgets': {
      $get: {
        input: {
          query: {
            IDs?: string | undefined
            DateTo?: string | undefined
            DateFrom?: string | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: Budgets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Budgets/:BudgetID': {
      $get: {
        input: { param: { BudgetID: string } } & {
          query: { DateTo?: string | undefined; DateFrom?: string | undefined }
        } & { header: { 'xero-tenant-id': string } }
        output: Budgets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Contacts': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            IDs?: string[] | undefined
            page?: number | undefined
            includeArchived?: boolean | undefined
            summaryOnly?: boolean | undefined
            searchTerm?: string | undefined
            pageSize?: number | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: Contacts
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Contacts }
            output: Contacts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Contacts }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Contacts }
            output: Contacts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Contacts }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Contacts/:ContactNumber': {
      $get: {
        input: { param: { ContactNumber: string } } & { header: { 'xero-tenant-id': string } }
        output: Contacts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Contacts/:ContactID': {
      $get: {
        input: { param: { ContactID: string } } & { header: { 'xero-tenant-id': string } }
        output: Contacts
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ContactID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Contacts }
            output: Contacts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Contacts }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Contacts/:ContactID/Attachments': {
      $get: {
        input: { param: { ContactID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Contacts/:ContactID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { ContactID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Contacts/:ContactID/Attachments/:FileName': {
      $get: {
        input: { param: { ContactID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { ContactID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { ContactID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Contacts/:ContactID/CISSettings': {
      $get: {
        input: { param: { ContactID: string } } & { header: { 'xero-tenant-id': string } }
        output: CISSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Contacts/:ContactID/History': {
      $get: {
        input: { param: { ContactID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { ContactID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ContactGroups': {
      $get: {
        input: { query: { where?: string | undefined; order?: string | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: ContactGroups
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ContactGroups }
            output: ContactGroups
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ContactGroups }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ContactGroups/:ContactGroupID': {
      $get: {
        input: { param: { ContactGroupID: string } } & { header: { 'xero-tenant-id': string } }
        output: ContactGroups
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ContactGroupID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ContactGroups }
            output: ContactGroups
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactGroupID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ContactGroups }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ContactGroups/:ContactGroupID/Contacts': {
      $put:
        | {
            input: { param: { ContactGroupID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Contacts }
            output: Contacts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContactGroupID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Contacts }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete: {
        input: { param: { ContactGroupID: string } } & { header: { 'xero-tenant-id': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/ContactGroups/:ContactGroupID/Contacts/:ContactID': {
      $delete:
        | {
            input: { param: { ContactGroupID: string; ContactID: string } } & {
              header: { 'xero-tenant-id': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ContactGroupID: string; ContactID: string } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CreditNotes': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            page?: number | undefined
            unitdp?: number | undefined
            pageSize?: number | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: CreditNotes
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: CreditNotes
            }
            output: CreditNotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: CreditNotes
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: CreditNotes
            }
            output: CreditNotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: CreditNotes
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CreditNotes/:CreditNoteID': {
      $get: {
        input: { param: { CreditNoteID: string } } & { query: { unitdp?: number | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: CreditNotes
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { CreditNoteID: string } } & {
              query: { unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: CreditNotes
            }
            output: CreditNotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CreditNoteID: string } } & {
              query: { unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: CreditNotes
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CreditNotes/:CreditNoteID/Attachments': {
      $get: {
        input: { param: { CreditNoteID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreditNotes/:CreditNoteID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { CreditNoteID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/CreditNotes/:CreditNoteID/Attachments/:FileName': {
      $get: {
        input: { param: { CreditNoteID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { CreditNoteID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CreditNoteID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { CreditNoteID: string; FileName: string } } & {
              query: { IncludeOnline?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: string
            }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CreditNoteID: string; FileName: string } } & {
              query: { IncludeOnline?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: string
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CreditNotes/:CreditNoteID/pdf': {
      $get: {
        input: { param: { CreditNoteID: string } } & { header: { 'xero-tenant-id': string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/CreditNotes/:CreditNoteID/Allocations': {
      $put:
        | {
            input: { param: { CreditNoteID: string } } & {
              query: { summarizeErrors?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Allocations
            }
            output: Allocations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CreditNoteID: string } } & {
              query: { summarizeErrors?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Allocations
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CreditNotes/:CreditNoteID/Allocations/:AllocationID': {
      $delete: {
        input: { param: { CreditNoteID: string; AllocationID: string } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Allocation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreditNotes/:CreditNoteID/History': {
      $get: {
        input: { param: { CreditNoteID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { CreditNoteID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CreditNoteID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Currencies': {
      $get: {
        input: { query: { where?: string | undefined; order?: string | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Currencies
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
          json: Currency
        }
        output: Currencies
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ExpenseClaims': {
      $get: {
        input: { query: { where?: string | undefined; order?: string | undefined } } & {
          header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string }
        }
        output: ExpenseClaims
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ExpenseClaims }
            output: ExpenseClaims
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ExpenseClaims }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ExpenseClaims/:ExpenseClaimID': {
      $get: {
        input: { param: { ExpenseClaimID: string } } & { header: { 'xero-tenant-id': string } }
        output: ExpenseClaims
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ExpenseClaimID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ExpenseClaims }
            output: ExpenseClaims
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ExpenseClaimID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ExpenseClaims }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ExpenseClaims/:ExpenseClaimID/History': {
      $get: {
        input: { param: { ExpenseClaimID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { ExpenseClaimID: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
        } & { json: HistoryRecords }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Invoices': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            IDs?: string[] | undefined
            InvoiceNumbers?: string[] | undefined
            ContactIDs?: string[] | undefined
            Statuses?: string[] | undefined
            page?: number | undefined
            includeArchived?: boolean | undefined
            createdByMyApp?: boolean | undefined
            unitdp?: number | undefined
            summaryOnly?: boolean | undefined
            pageSize?: number | undefined
            searchTerm?: string | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: Invoices
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              query: {
                summarizeErrors?: boolean | undefined
                unitdp?: number | undefined
                allowBackorders?: boolean | undefined
              }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Invoices
            }
            output: Invoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                summarizeErrors?: boolean | undefined
                unitdp?: number | undefined
                allowBackorders?: boolean | undefined
              }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Invoices
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              query: {
                summarizeErrors?: boolean | undefined
                unitdp?: number | undefined
                allowBackorders?: boolean | undefined
              }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Invoices
            }
            output: Invoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                summarizeErrors?: boolean | undefined
                unitdp?: number | undefined
                allowBackorders?: boolean | undefined
              }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Invoices
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Invoices/:InvoiceID': {
      $get: {
        input: { param: { InvoiceID: string } } & { query: { unitdp?: number | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Invoices
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { InvoiceID: string } } & {
              query: { unitdp?: number | undefined; allowBackorders?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Invoices
            }
            output: Invoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InvoiceID: string } } & {
              query: { unitdp?: number | undefined; allowBackorders?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Invoices
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Invoices/:InvoiceID/pdf': {
      $get: {
        input: { param: { InvoiceID: string } } & { header: { 'xero-tenant-id': string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Invoices/:InvoiceID/Attachments': {
      $get: {
        input: { param: { InvoiceID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Invoices/:InvoiceID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { InvoiceID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Invoices/:InvoiceID/Attachments/:FileName': {
      $get: {
        input: { param: { InvoiceID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { InvoiceID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InvoiceID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { InvoiceID: string; FileName: string } } & {
              query: { IncludeOnline?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: string
            }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InvoiceID: string; FileName: string } } & {
              query: { IncludeOnline?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: string
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Invoices/:InvoiceID/OnlineInvoice': {
      $get: {
        input: { param: { InvoiceID: string } } & { header: { 'xero-tenant-id': string } }
        output: OnlineInvoices
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Invoices/:InvoiceID/Email': {
      $post:
        | {
            input: { param: { InvoiceID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: RequestEmpty }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { InvoiceID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: RequestEmpty }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Invoices/:InvoiceID/History': {
      $get: {
        input: { param: { InvoiceID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { InvoiceID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InvoiceID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/InvoiceReminders/Settings': {
      $get: {
        input: { header: { 'xero-tenant-id': string } }
        output: InvoiceReminders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Items': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            unitdp?: number | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: Items
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Items
            }
            output: Items
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Items
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Items
            }
            output: Items
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { summarizeErrors?: boolean | undefined; unitdp?: number | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Items
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Items/:ItemID': {
      $get: {
        input: { param: { ItemID: string } } & { query: { unitdp?: number | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Items
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ItemID: string } } & { query: { unitdp?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Items }
            output: Items
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ItemID: string } } & { query: { unitdp?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Items }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { ItemID: string } } & { header: { 'xero-tenant-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ItemID: string } } & { header: { 'xero-tenant-id': string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Items/:ItemID/History': {
      $get: {
        input: { param: { ItemID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { ItemID: string } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
        } & { json: HistoryRecords }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Journals': {
      $get: {
        input: { query: { offset?: number | undefined; paymentsOnly?: boolean | undefined } } & {
          header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string }
        }
        output: Journals
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Journals/:JournalID': {
      $get: {
        input: { param: { JournalID: string } } & { header: { 'xero-tenant-id': string } }
        output: Journals
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Journals/:JournalNumber': {
      $get: {
        input: { param: { JournalNumber: number } } & { header: { 'xero-tenant-id': string } }
        output: Journals
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/LinkedTransactions': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            LinkedTransactionID?: string | undefined
            SourceTransactionID?: string | undefined
            ContactID?: string | undefined
            Status?: string | undefined
            TargetTransactionID?: string | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: LinkedTransactions
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: LinkedTransaction }
            output: LinkedTransactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: LinkedTransaction }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/LinkedTransactions/:LinkedTransactionID': {
      $get: {
        input: { param: { LinkedTransactionID: string } } & { header: { 'xero-tenant-id': string } }
        output: LinkedTransactions
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { LinkedTransactionID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: LinkedTransactions }
            output: LinkedTransactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LinkedTransactionID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: LinkedTransactions }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { LinkedTransactionID: string } } & {
              header: { 'xero-tenant-id': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { LinkedTransactionID: string } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ManualJournals': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            page?: number | undefined
            pageSize?: number | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: ManualJournals
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ManualJournals }
            output: ManualJournals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ManualJournals }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ManualJournals }
            output: ManualJournals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ManualJournals }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ManualJournals/:ManualJournalID': {
      $get: {
        input: { param: { ManualJournalID: string } } & { header: { 'xero-tenant-id': string } }
        output: ManualJournals
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ManualJournalID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ManualJournals }
            output: ManualJournals
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ManualJournalID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: ManualJournals }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ManualJournals/:ManualJournalID/Attachments': {
      $get: {
        input: { param: { ManualJournalID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ManualJournals/:ManualJournalID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { ManualJournalID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/ManualJournals/:ManualJournalID/Attachments/:FileName': {
      $get: {
        input: { param: { ManualJournalID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { ManualJournalID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ManualJournalID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { ManualJournalID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ManualJournalID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ManualJournals/:ManualJournalID/History': {
      $get: {
        input: { param: { ManualJournalID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { ManualJournalID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ManualJournalID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Organisation': {
      $get: {
        input: { header: { 'xero-tenant-id': string } }
        output: Organisations
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Organisation/Actions': {
      $get: {
        input: { header: { 'xero-tenant-id': string } }
        output: Actions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Organisation/:OrganisationID/CISSettings': {
      $get: {
        input: { param: { OrganisationID: string } } & { header: { 'xero-tenant-id': string } }
        output: CISOrgSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Overpayments': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            page?: number | undefined
            unitdp?: number | undefined
            pageSize?: number | undefined
            References?: string[] | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: Overpayments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Overpayments/:OverpaymentID': {
      $get: {
        input: { param: { OverpaymentID: string } } & { header: { 'xero-tenant-id': string } }
        output: Overpayments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Overpayments/:OverpaymentID/Allocations': {
      $put:
        | {
            input: { param: { OverpaymentID: string } } & {
              query: { summarizeErrors?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Allocations
            }
            output: Allocations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { OverpaymentID: string } } & {
              query: { summarizeErrors?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Allocations
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Overpayments/:OverpaymentID/Allocations/:AllocationID': {
      $delete: {
        input: { param: { OverpaymentID: string; AllocationID: string } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Allocation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Overpayments/:OverpaymentID/History': {
      $get: {
        input: { param: { OverpaymentID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { OverpaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { OverpaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Payments': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            page?: number | undefined
            pageSize?: number | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: Payments
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Payments }
            output: Payments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Payments }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Payment }
            output: Payments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Payment }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Payments/:PaymentID': {
      $get: {
        input: { param: { PaymentID: string } } & { header: { 'xero-tenant-id': string } }
        output: Payments
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { PaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PaymentDelete }
            output: Payments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PaymentDelete }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Payments/:PaymentID/History': {
      $get: {
        input: { param: { PaymentID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { PaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PaymentServices': {
      $get: {
        input: { header: { 'xero-tenant-id': string } }
        output: PaymentServices
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PaymentServices }
            output: PaymentServices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PaymentServices }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Prepayments': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            page?: number | undefined
            unitdp?: number | undefined
            pageSize?: number | undefined
            InvoiceNumbers?: string[] | undefined
            References?: string[] | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: Prepayments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Prepayments/:PrepaymentID': {
      $get: {
        input: { param: { PrepaymentID: string } } & { header: { 'xero-tenant-id': string } }
        output: Prepayments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Prepayments/:PrepaymentID/Allocations': {
      $put:
        | {
            input: { param: { PrepaymentID: string } } & {
              query: { summarizeErrors?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Allocations
            }
            output: Allocations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PrepaymentID: string } } & {
              query: { summarizeErrors?: boolean | undefined }
            } & { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
              json: Allocations
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Prepayments/:PrepaymentID/Allocations/:AllocationID': {
      $delete: {
        input: { param: { PrepaymentID: string; AllocationID: string } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Allocation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Prepayments/:PrepaymentID/History': {
      $get: {
        input: { param: { PrepaymentID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { PrepaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PrepaymentID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PurchaseOrders': {
      $get: {
        input: {
          query: {
            Status?: 'DRAFT' | 'SUBMITTED' | 'AUTHORISED' | 'BILLED' | 'DELETED' | undefined
            DateFrom?: string | undefined
            DateTo?: string | undefined
            order?: string | undefined
            page?: number | undefined
            pageSize?: number | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: PurchaseOrders
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PurchaseOrders }
            output: PurchaseOrders
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PurchaseOrders }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PurchaseOrders }
            output: PurchaseOrders
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PurchaseOrders }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PurchaseOrders/:PurchaseOrderID/pdf': {
      $get: {
        input: { param: { PurchaseOrderID: string } } & { header: { 'xero-tenant-id': string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/PurchaseOrders/:PurchaseOrderID': {
      $get: {
        input: { param: { PurchaseOrderID: string } } & { header: { 'xero-tenant-id': string } }
        output: PurchaseOrders
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { PurchaseOrderID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PurchaseOrders }
            output: PurchaseOrders
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PurchaseOrderID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: PurchaseOrders }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PurchaseOrders/:PurchaseOrderNumber': {
      $get: {
        input: { param: { PurchaseOrderNumber: string } } & { header: { 'xero-tenant-id': string } }
        output: PurchaseOrders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PurchaseOrders/:PurchaseOrderID/History': {
      $get: {
        input: { param: { PurchaseOrderID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { PurchaseOrderID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PurchaseOrderID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/PurchaseOrders/:PurchaseOrderID/Attachments': {
      $get: {
        input: { param: { PurchaseOrderID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { PurchaseOrderID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/PurchaseOrders/:PurchaseOrderID/Attachments/:FileName': {
      $get: {
        input: { param: { PurchaseOrderID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { PurchaseOrderID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PurchaseOrderID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { PurchaseOrderID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { PurchaseOrderID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Quotes': {
      $get: {
        input: {
          query: {
            DateFrom?: string | undefined
            DateTo?: string | undefined
            ExpiryDateFrom?: string | undefined
            ExpiryDateTo?: string | undefined
            ContactID?: string | undefined
            Status?: string | undefined
            page?: number | undefined
            order?: string | undefined
            QuoteNumber?: string | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: Quotes
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Quotes }
            output: Quotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Quotes }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Quotes }
            output: Quotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Quotes }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Quotes/:QuoteID': {
      $get: {
        input: { param: { QuoteID: string } } & { header: { 'xero-tenant-id': string } }
        output: Quotes
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { QuoteID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Quotes }
            output: Quotes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { QuoteID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Quotes }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Quotes/:QuoteID/History': {
      $get: {
        input: { param: { QuoteID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { QuoteID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { QuoteID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Quotes/:QuoteID/pdf': {
      $get: {
        input: { param: { QuoteID: string } } & { header: { 'xero-tenant-id': string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Quotes/:QuoteID/Attachments': {
      $get: {
        input: { param: { QuoteID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Quotes/:QuoteID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { QuoteID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Quotes/:QuoteID/Attachments/:FileName': {
      $get: {
        input: { param: { QuoteID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { QuoteID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { QuoteID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { QuoteID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { QuoteID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Receipts': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            unitdp?: number | undefined
          }
        } & { header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string } }
        output: Receipts
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { query: { unitdp?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Receipts }
            output: Receipts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { unitdp?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Receipts }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Receipts/:ReceiptID': {
      $get: {
        input: { param: { ReceiptID: string } } & { query: { unitdp?: number | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Receipts
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { ReceiptID: string } } & { query: { unitdp?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Receipts }
            output: Receipts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReceiptID: string } } & { query: { unitdp?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: Receipts }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Receipts/:ReceiptID/Attachments': {
      $get: {
        input: { param: { ReceiptID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Receipts/:ReceiptID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { ReceiptID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Receipts/:ReceiptID/Attachments/:FileName': {
      $get: {
        input: { param: { ReceiptID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { ReceiptID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReceiptID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { ReceiptID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReceiptID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Receipts/:ReceiptID/History': {
      $get: {
        input: { param: { ReceiptID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { ReceiptID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReceiptID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/RepeatingInvoices': {
      $get: {
        input: { query: { where?: string | undefined; order?: string | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: RepeatingInvoices
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: RepeatingInvoices }
            output: RepeatingInvoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: RepeatingInvoices }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: RepeatingInvoices }
            output: RepeatingInvoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeErrors?: boolean | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: RepeatingInvoices }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/RepeatingInvoices/:RepeatingInvoiceID': {
      $get: {
        input: { param: { RepeatingInvoiceID: string } } & { header: { 'xero-tenant-id': string } }
        output: RepeatingInvoices
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { RepeatingInvoiceID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: RepeatingInvoices }
            output: RepeatingInvoices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { RepeatingInvoiceID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: RepeatingInvoices }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments': {
      $get: {
        input: { param: { RepeatingInvoiceID: string } } & { header: { 'xero-tenant-id': string } }
        output: Attachments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:AttachmentID': {
      $get: {
        input: { param: { RepeatingInvoiceID: string; AttachmentID: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/RepeatingInvoices/:RepeatingInvoiceID/Attachments/:FileName': {
      $get: {
        input: { param: { RepeatingInvoiceID: string; FileName: string } } & {
          header: { contentType: string; 'xero-tenant-id': string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { RepeatingInvoiceID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { RepeatingInvoiceID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { RepeatingInvoiceID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Attachments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { RepeatingInvoiceID: string; FileName: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/RepeatingInvoices/:RepeatingInvoiceID/History': {
      $get: {
        input: { param: { RepeatingInvoiceID: string } } & { header: { 'xero-tenant-id': string } }
        output: HistoryRecords
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { RepeatingInvoiceID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: HistoryRecords
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { RepeatingInvoiceID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: HistoryRecords }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Reports/TenNinetyNine': {
      $get: {
        input: { query: { reportYear?: string | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: Reports
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/AgedPayablesByContact': {
      $get: {
        input: {
          query: {
            contactId: string
            date?: string | undefined
            fromDate?: string | undefined
            toDate?: string | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/AgedReceivablesByContact': {
      $get: {
        input: {
          query: {
            contactId: string
            date?: string | undefined
            fromDate?: string | undefined
            toDate?: string | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/BalanceSheet': {
      $get: {
        input: {
          query: {
            date?: string | undefined
            periods?: number | undefined
            timeframe?: 'MONTH' | 'QUARTER' | 'YEAR' | undefined
            trackingOptionID1?: string | undefined
            trackingOptionID2?: string | undefined
            standardLayout?: boolean | undefined
            paymentsOnly?: boolean | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/BankSummary': {
      $get: {
        input: { query: { fromDate?: string | undefined; toDate?: string | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/:ReportID': {
      $get: {
        input: { param: { ReportID: string } } & { header: { 'xero-tenant-id': string } }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/BudgetSummary': {
      $get: {
        input: {
          query: {
            date?: string | undefined
            periods?: number | undefined
            timeframe?: number | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/ExecutiveSummary': {
      $get: {
        input: { query: { date?: string | undefined } } & { header: { 'xero-tenant-id': string } }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports': {
      $get: {
        input: { header: { 'xero-tenant-id': string } }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/ProfitAndLoss': {
      $get: {
        input: {
          query: {
            fromDate?: string | undefined
            toDate?: string | undefined
            periods?: number | undefined
            timeframe?: 'MONTH' | 'QUARTER' | 'YEAR' | undefined
            trackingCategoryID?: string | undefined
            trackingCategoryID2?: string | undefined
            trackingOptionID?: string | undefined
            trackingOptionID2?: string | undefined
            standardLayout?: boolean | undefined
            paymentsOnly?: boolean | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Reports/TrialBalance': {
      $get: {
        input: { query: { date?: string | undefined; paymentsOnly?: boolean | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: ReportWithRows
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Setup': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string } } & {
          json: Setup
        }
        output: ImportSummaryObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/TaxRates': {
      $get: {
        input: { query: { where?: string | undefined; order?: string | undefined } } & {
          header: { 'xero-tenant-id': string }
        }
        output: TaxRates
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TaxRates }
            output: TaxRates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TaxRates }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TaxRates }
            output: TaxRates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TaxRates }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/TaxRates/:TaxType': {
      $get: {
        input: { param: { TaxType: string } } & { header: { 'xero-tenant-id': string } }
        output: TaxRates
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/TrackingCategories': {
      $get: {
        input: {
          query: {
            where?: string | undefined
            order?: string | undefined
            includeArchived?: boolean | undefined
          }
        } & { header: { 'xero-tenant-id': string } }
        output: TrackingCategories
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TrackingCategory }
            output: TrackingCategories
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TrackingCategory }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/TrackingCategories/:TrackingCategoryID': {
      $get: {
        input: { param: { TrackingCategoryID: string } } & { header: { 'xero-tenant-id': string } }
        output: TrackingCategories
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { TrackingCategoryID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TrackingCategory }
            output: TrackingCategories
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackingCategoryID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TrackingCategory }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { TrackingCategoryID: string } } & {
              header: { 'xero-tenant-id': string }
            }
            output: TrackingCategories
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackingCategoryID: string } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/TrackingCategories/:TrackingCategoryID/Options': {
      $put:
        | {
            input: { param: { TrackingCategoryID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TrackingOption }
            output: TrackingOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackingCategoryID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TrackingOption }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/TrackingCategories/:TrackingCategoryID/Options/:TrackingOptionID': {
      $post:
        | {
            input: { param: { TrackingCategoryID: string; TrackingOptionID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TrackingOption }
            output: TrackingOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackingCategoryID: string; TrackingOptionID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined; 'xero-tenant-id': string }
            } & { json: TrackingOption }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { TrackingCategoryID: string; TrackingOptionID: string } } & {
              header: { 'xero-tenant-id': string }
            }
            output: TrackingOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackingCategoryID: string; TrackingOptionID: string } } & {
              header: { 'xero-tenant-id': string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/Users': {
      $get: {
        input: { query: { where?: string | undefined; order?: string | undefined } } & {
          header: { 'If-Modified-Since'?: string | undefined; 'xero-tenant-id': string }
        }
        output: Users
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Users/:UserID': {
      $get: {
        input: { param: { UserID: string } } & { header: { 'xero-tenant-id': string } }
        output: Users
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
