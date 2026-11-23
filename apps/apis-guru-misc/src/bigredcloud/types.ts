type AccountDto = {
  accountGroup?: string | undefined
  accountType?: string | undefined
  code?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
}
type PageResultAccountDto = {
  Count?: bigint | undefined
  Items?: AccountDto[] | undefined
  NextPageLink?: string | undefined
}
type AnalysisCategoryDto = {
  accountCode?: string | undefined
  accountId?: bigint | undefined
  categoryTypeId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  orderIndex?: number | undefined
}
type PageResultAnalysisCategoryDto = {
  Count?: bigint | undefined
  Items?: AnalysisCategoryDto[] | undefined
  NextPageLink?: string | undefined
}
type BankAccountQueryDto = {
  acCode?: string | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  address?: string[] | undefined
  bankFeedSource?: number | undefined
  businessIdentifierCodes?: string | undefined
  categoryId?: bigint | undefined
  creditorScheme?: string | undefined
  details?: string | undefined
  id?: bigint | undefined
  internationalBankAccountNumber?: string | undefined
  isDefaultBank?: boolean | undefined
  lastChq?: string | undefined
  nominalAcCode?: string | undefined
  sortCode?: string | undefined
  timestamp?: string | undefined
}
type PageResultBankAccountQueryDto = {
  Count?: bigint | undefined
  Items?: BankAccountQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type BankAccountDto = {
  acCode?: string | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  address?: string[] | undefined
  bankFeedSource?: number | undefined
  businessIdentifierCodes?: string | undefined
  categoryId?: bigint | undefined
  creditorScheme?: string | undefined
  details?: string | undefined
  id?: bigint | undefined
  internationalBankAccountNumber?: string | undefined
  isDefaultBank?: boolean | undefined
  lastChq?: string | undefined
  nominalAcCode?: string | undefined
  oBalance?: number | undefined
  sortCode?: string | undefined
  timestamp?: string | undefined
}
type BatchItemBankAccountDto = { item?: BankAccountDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type BookTranTypeDto = {
  code?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
}
type PageResultBookTranTypeDto = {
  Count?: bigint | undefined
  Items?: BookTranTypeDto[] | undefined
  NextPageLink?: string | undefined
}
type AcEntryDto = {
  accountCode?: string | undefined
  analysisCategoryId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  value?: number | undefined
}
type AcudfValueDto = {
  description?: string | undefined
  id?: bigint | undefined
  userDefinedFieldId?: bigint | undefined
  value?: string | undefined
}
type CashPaymentQueryDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bankAccountCode?: string | undefined
  bankAccountId?: bigint | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  detailCollection?: string[] | undefined
  discount?: number | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  ledger?: number | undefined
  lodgement?: number | undefined
  note?: string | undefined
  plaidTransactionId?: string | undefined
  procDate?: string | undefined
  supplierId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
  unallocated?: number | undefined
}
type PageResultCashPaymentQueryDto = {
  Count?: bigint | undefined
  Items?: CashPaymentQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type CashPaymentDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bankAccountCode?: string | undefined
  bankAccountId?: bigint | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  detailCollection?: string[] | undefined
  discount?: number | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  ledger?: number | undefined
  lodgement?: number | undefined
  note?: string | undefined
  plaidTransactionId?: string | undefined
  procDate?: string | undefined
  supplierId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
}
type BatchItemCashPaymentDto = { item?: CashPaymentDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type VatEntryDto = {
  amount?: number | undefined
  id?: bigint | undefined
  percentage?: number | undefined
  vatRateId?: bigint | undefined
}
type CashReceiptQueryDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerId?: bigint | undefined
  detailCollection?: string[] | undefined
  discount?: number | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  ledger?: number | undefined
  note?: string | undefined
  plaidTransactionId?: string | undefined
  procDate?: string | undefined
  timestamp?: string | undefined
  total?: number | undefined
  unallocated?: number | undefined
  vatEntries?: VatEntryDto[] | undefined
  vatTypeId?: bigint | undefined
}
type PageResultCashReceiptQueryDto = {
  Count?: bigint | undefined
  Items?: CashReceiptQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type CashReceiptDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerId?: bigint | undefined
  detailCollection?: string[] | undefined
  discount?: number | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  ledger?: number | undefined
  note?: string | undefined
  plaidTransactionId?: string | undefined
  procDate?: string | undefined
  timestamp?: string | undefined
  total?: number | undefined
  unallocated?: number | undefined
  vatEntries?: VatEntryDto[] | undefined
  vatTypeId?: bigint | undefined
}
type BatchItemCashReceiptDto = { item?: CashReceiptDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type CategoryTypeDto = { description?: string | undefined; id?: bigint | undefined }
type PageResultCategoryTypeDto = {
  Count?: bigint | undefined
  Items?: CategoryTypeDto[] | undefined
  NextPageLink?: string | undefined
}
type CompanySettingDto = {
  enableVOCRReporting?: boolean | undefined
  id?: bigint | undefined
  useAllocations?: boolean | undefined
  value?: string | undefined
  vocrSettingValue?: boolean | undefined
}
type PageResultCompanySettingDto = {
  Count?: bigint | undefined
  Items?: CompanySettingDto[] | undefined
  NextPageLink?: string | undefined
}
type CompanyFinancialYearViewModel = {
  firstMonth?: number | undefined
  startMonth?: number | undefined
  startYear?: number | undefined
}
type CompanyGeneralDetaisViewModel = {
  companyAddresses?: string[] | undefined
  companyName?: string | undefined
  currencyCode?: string | undefined
  currencyDescription?: string | undefined
  currencyId?: bigint | undefined
  currentcySymbol?: string | undefined
  emails?: string[] | undefined
  faxes?: string[] | undefined
  phones?: string[] | undefined
  regionDescription?: string | undefined
  regionId?: bigint | undefined
  vatReg?: string | undefined
}
type CompanyOptionViewModel = {
  allowEntryOfGrossPriceInInvoicing?: boolean | undefined
  creditInputForReverseChargeVAT?: boolean | undefined
  creditNoteJournalAgeingName?: string | undefined
  creditNoteJournalAgeingValue?: number | undefined
  discrepancyAllowed?: number | undefined
  enableVOCRReporting?: boolean | undefined
  marginVatScheme?: boolean | undefined
  printOSItemsOnly?: boolean | undefined
  purchasesVatAnalysisType?: bigint | undefined
  salesVatAnalysisType?: bigint | undefined
  useAllocations?: boolean | undefined
  useNominal?: boolean | undefined
  useNominalCode?: boolean | undefined
  vocrSettingValue?: boolean | undefined
}
type CompanyReferenceSettingViewModel = {
  creditorsJournal?: boolean | undefined
  debtorsJournal?: boolean | undefined
  purchases?: boolean | undefined
  sales?: boolean | undefined
}
type CompanySetupConfigViewModel = {
  financialYear?: CompanyFinancialYearViewModel | undefined
  generalDetails?: CompanyGeneralDetaisViewModel | undefined
  options?: CompanyOptionViewModel | undefined
  referenceSettings?: CompanyReferenceSettingViewModel | undefined
}
type CompanyOptionDto = {
  allowEntryOfGrossPriceInInvoicing?: boolean | undefined
  creditInputForReverseChargeVAT?: boolean | undefined
  creditNoteJournalAgeingName?: string | undefined
  creditNoteJournalAgeingValue?: number | undefined
  discrepancyAllowed?: number | undefined
  enableVOCRReporting?: boolean | undefined
  marginVatScheme?: boolean | undefined
  printOSItemsOnly?: boolean | undefined
  purchasesVatAnalysisType?: bigint | undefined
  salesVatAnalysisType?: bigint | undefined
  useAllocations?: boolean | undefined
  useNominal?: boolean | undefined
  useNominalCode?: boolean | undefined
  vocrSettingValue?: boolean | undefined
}
type FinancialYearDto = {
  firstMonth?: number | undefined
  startMonth?: number | undefined
  startYear?: number | undefined
}
type EFTBankDto = {
  branch?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  sortCode?: string | undefined
}
type CustomerQueryDto = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  additionalEmails?: string[] | undefined
  address?: string[] | undefined
  authCode?: string | undefined
  bank?: EFTBankDto | undefined
  businessIdentifierCode?: string | undefined
  code?: string | undefined
  contact?: string | undefined
  delivery?: string[] | undefined
  eFTReference?: string | undefined
  email?: string | undefined
  fax?: string | undefined
  id?: bigint | undefined
  internationalBankAccountNumber?: string | undefined
  mobile?: string | undefined
  name?: string | undefined
  ourCode?: string | undefined
  ownerTypeId?: bigint | undefined
  phone?: string | undefined
  timestamp?: string | undefined
  vatAnalysisTypeId?: bigint | undefined
  vatReg?: string | undefined
  vatType?: bigint | undefined
}
type PageResultCustomerQueryDto = {
  Count?: bigint | undefined
  Items?: CustomerQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type OwnerOpeningBalanceInPeriodsDto = {
  currentMonth?: number | undefined
  oneMonthOld?: number | undefined
  threeMonthsOld?: number | undefined
  twoMonthsOld?: number | undefined
}
type OwnerOpeningBalanceVatEntryDto = {
  amount?: number | undefined
  vatRateId?: bigint | undefined
}
type OwnerOpeningBalanceDto = {
  entryDate?: string | undefined
  id?: bigint | undefined
  isChanged?: boolean | undefined
  procDate?: string | undefined
  reference?: string | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalVAT?: number | undefined
  unpaid?: number | undefined
  vatEntries?: OwnerOpeningBalanceVatEntryDto[] | undefined
}
type CustomerDto = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  additionalEmails?: string[] | undefined
  address?: string[] | undefined
  authCode?: string | undefined
  bank?: EFTBankDto | undefined
  businessIdentifierCode?: string | undefined
  code?: string | undefined
  contact?: string | undefined
  delivery?: string[] | undefined
  eFTReference?: string | undefined
  email?: string | undefined
  fax?: string | undefined
  id?: bigint | undefined
  internationalBankAccountNumber?: string | undefined
  ledgerBalance?: number | undefined
  mobile?: string | undefined
  name?: string | undefined
  openingBalance?: OwnerOpeningBalanceInPeriodsDto | undefined
  openingBalances?: OwnerOpeningBalanceDto[] | undefined
  ourCode?: string | undefined
  ownerTypeId?: bigint | undefined
  phone?: string | undefined
  timestamp?: string | undefined
  vatAnalysisTypeId?: bigint | undefined
  vatReg?: string | undefined
  vatType?: bigint | undefined
}
type BatchItemCustomerDto = { item?: CustomerDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type AccountTranDto = {
  bookTranId?: bigint | undefined
  bookTranTypeId?: bigint | undefined
  bookTransactionReference?: string | undefined
  bookTypeDesc?: string | undefined
  credit?: number | undefined
  debit?: number | undefined
  id?: bigint | undefined
  procDate?: string | undefined
}
type QuoteAcEntriesDto = {
  accountCode?: string | undefined
  analysisCategoryId?: bigint | undefined
  companyId?: bigint | undefined
  id?: bigint | undefined
  quoteProductTranId?: bigint | undefined
  value?: number | undefined
}
type QuoteProductTransDto = {
  acEntries?: QuoteAcEntriesDto[] | undefined
  amount?: number | undefined
  companyId?: bigint | undefined
  id?: bigint | undefined
  percentage?: number | undefined
  productCode?: string | undefined
  productId?: bigint | undefined
  quantity?: number | undefined
  tranNotes?: string[] | undefined
  unitPrice?: number | undefined
  vatAmount?: number | undefined
  vatAnalysisTypeId?: bigint | undefined
  vatRateId?: bigint | undefined
}
type QuoteDto = {
  acCode?: string | undefined
  closedDate?: string | undefined
  comments?: string | undefined
  companyId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerOwnerId?: bigint | undefined
  customerOwnerName?: string | undefined
  ddNumber?: string | undefined
  deliveryList?: string | undefined
  deliveryTo?: string[] | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  layoutType?: number | undefined
  note?: string | undefined
  poNumber?: string | undefined
  procDate?: string | undefined
  productTrans?: QuoteProductTransDto[] | undefined
  reference?: string | undefined
  saleInvoiceId?: bigint | undefined
  saleRepCode?: string | undefined
  saleRepId?: bigint | undefined
  timeStamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVat?: number | undefined
  vatTypeId?: bigint | undefined
}
type EmailStatementDto = {
  bccAddresses?: string[] | undefined
  customerId?: bigint | undefined
  fromPeriod?: string | undefined
  messageBody?: string | undefined
  minimumBalance?: number | undefined
  toAddress?: string | undefined
  toPeriod?: string | undefined
}
type EmailQuoteDto = {
  bccAddresses?: string[] | undefined
  messageBody?: string | undefined
  quoteId?: bigint | undefined
  toAddress?: string | undefined
}
type SalesInvoiceEmailInfoDto = {
  bccAddresses?: string[] | undefined
  messageBody?: string | undefined
  salesInvoiceId?: bigint | undefined
  toAddress?: string | undefined
}
type OwnerTypeGroupDto = { description?: string | undefined; id?: bigint | undefined }
type PageResultOwnerTypeGroupDto = {
  Count?: bigint | undefined
  Items?: OwnerTypeGroupDto[] | undefined
  NextPageLink?: string | undefined
}
type OwnerTypeDto = {
  description?: string | undefined
  id?: bigint | undefined
  recordTypeGroupId?: bigint | undefined
}
type PageResultOwnerTypeDto = {
  Count?: bigint | undefined
  Items?: OwnerTypeDto[] | undefined
  NextPageLink?: string | undefined
}
type PaymentQueryDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bankAccountCode?: string | undefined
  bankAccountId?: bigint | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  detailCollection?: string[] | undefined
  discount?: number | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  note?: string | undefined
  plaidTransactionId?: string | undefined
  procDate?: string | undefined
  reference?: string | undefined
  supplierId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
  transferBankCode?: string | undefined
  transferBankId?: bigint | undefined
  unallocated?: number | undefined
}
type PageResultPaymentQueryDto = {
  Count?: bigint | undefined
  Items?: PaymentQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type PaymentDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bankAccountCode?: string | undefined
  bankAccountId?: bigint | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  detailCollection?: string[] | undefined
  discount?: number | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  note?: string | undefined
  plaidTransactionId?: string | undefined
  procDate?: string | undefined
  reference?: string | undefined
  supplierId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
  transferBankCode?: string | undefined
  transferBankId?: bigint | undefined
  unallocated?: number | undefined
}
type BatchItemPaymentDto = { item?: PaymentDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type ProductDto = {
  details?: string[] | undefined
  grossUnitPrice?: boolean | undefined
  hasDefaultVatRate?: boolean | undefined
  id?: bigint | undefined
  productTypeId?: bigint | undefined
  stockCode?: string | undefined
  timestamp?: string | undefined
  unitPrice?: number | undefined
  vatAnalysisTypeId?: bigint | undefined
  vatRateId?: bigint | undefined
}
type PageResultProductDto = {
  Count?: bigint | undefined
  Items?: ProductDto[] | undefined
  NextPageLink?: string | undefined
}
type BatchItemProductDto = { item?: ProductDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type PurchaseQueryDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  detailCollection?: string[] | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  netGoods?: number | undefined
  netServices?: number | undefined
  note?: string | undefined
  postponedAccounting?: boolean | undefined
  procDate?: string | undefined
  reference?: string | undefined
  supplierId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVAT?: number | undefined
  unallocated?: number | undefined
  unpaid?: number | undefined
  vatEntries?: VatEntryDto[] | undefined
  vatTypeId?: bigint | undefined
}
type PageResultPurchaseQueryDto = {
  Count?: bigint | undefined
  Items?: PurchaseQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type PurchaseDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  detailCollection?: string[] | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  isDiscrepancyAccepted?: boolean | undefined
  netGoods?: number | undefined
  netServices?: number | undefined
  note?: string | undefined
  postponedAccounting?: boolean | undefined
  procDate?: string | undefined
  reference?: string | undefined
  supplierId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVAT?: number | undefined
  unallocated?: number | undefined
  unpaid?: number | undefined
  vatEntries?: VatEntryDto[] | undefined
  vatTypeId?: bigint | undefined
}
type BatchItemPurchaseDto = { item?: PurchaseDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type PageResultQuoteDto = {
  Count?: bigint | undefined
  Items?: QuoteDto[] | undefined
  NextPageLink?: string | undefined
}
type BatchItemQuoteDto = { item?: QuoteDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type ProductTranDto = {
  acEntries?: AcEntryDto[] | undefined
  amount?: number | undefined
  amountNet: number
  id?: bigint | undefined
  percentage?: number | undefined
  productCode?: string | undefined
  productId?: bigint | undefined
  quantity?: number | undefined
  tranNotes?: string[] | undefined
  unitPrice?: number | undefined
  vat?: number | undefined
  vatAnalysisTypeId?: bigint | undefined
  vatRateId?: bigint | undefined
}
type SalesInvoiceCreditNoteDto = {
  acCode?: string | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerId?: bigint | undefined
  deliveryTo?: string[] | undefined
  details?: string | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  loType?: string | undefined
  netGoods?: number | undefined
  netServices?: number | undefined
  note?: string | undefined
  ourReference?: string | undefined
  procDate?: string | undefined
  productTrans?: ProductTranDto[] | undefined
  quoteId?: bigint | undefined
  reference?: string | undefined
  saleRepCode?: string | undefined
  saleRepId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVAT?: number | undefined
  unpaid?: number | undefined
  vatTypeId?: bigint | undefined
  yourReference?: string | undefined
}
type QuoteGeneratingInvoiceDto = {
  quoteId?: bigint | undefined
  saleInvoice?: SalesInvoiceCreditNoteDto | undefined
}
type SalesQueryDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerId?: bigint | undefined
  details?: string | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  loType?: string | undefined
  note?: string | undefined
  procDate?: string | undefined
  reference?: string | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVAT?: number | undefined
  unpaid?: number | undefined
  vatEntries?: VatEntryDto[] | undefined
  vatTypeId?: bigint | undefined
}
type PageResultSalesQueryDto = {
  Count?: bigint | undefined
  Items?: SalesQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type ProductTranQueryDto = {
  acEntries?: AcEntryDto[] | undefined
  amount?: number | undefined
  amountNet?: number | undefined
  id?: bigint | undefined
  percentage?: number | undefined
  productCode?: string | undefined
  productId?: bigint | undefined
  quantity?: number | undefined
  tranNotes?: string[] | undefined
  unitPrice?: number | undefined
  vat?: number | undefined
  vatAnalysisTypeId?: bigint | undefined
  vatRateId?: bigint | undefined
}
type SalesCreditNoteQueryDto = {
  acCode?: string | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerId?: bigint | undefined
  deliveryTo?: string[] | undefined
  details?: string | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  loType?: string | undefined
  netGoods?: number | undefined
  netServices?: number | undefined
  note?: string | undefined
  ourReference?: string | undefined
  procDate?: string | undefined
  productTrans?: ProductTranQueryDto[] | undefined
  quoteId?: bigint | undefined
  reference?: string | undefined
  saleRepCode?: string | undefined
  saleRepId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVAT?: number | undefined
  unpaid?: number | undefined
  vatTypeId?: bigint | undefined
  yourReference?: string | undefined
}
type PageResultSalesCreditNoteQueryDto = {
  Count?: bigint | undefined
  Items?: SalesCreditNoteQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type BatchItemSalesInvoiceCreditNoteDto = {
  item?: SalesInvoiceCreditNoteDto | undefined
  opCode?: 1 | 2 | 3 | undefined
}
type SalesEntryQueryDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerId?: bigint | undefined
  detailCollection?: string[] | undefined
  details?: string | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  netGoods?: number | undefined
  netServices?: number | undefined
  note?: string | undefined
  procDate?: string | undefined
  reference?: string | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVAT?: number | undefined
  unpaid?: number | undefined
  vatEntries?: VatEntryDto[] | undefined
  vatTypeId?: bigint | undefined
}
type PageResultSalesEntryQueryDto = {
  Count?: bigint | undefined
  Items?: SalesEntryQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type SalesEntryDto = {
  acCode?: string | undefined
  acEntries?: AcEntryDto[] | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerId?: bigint | undefined
  detailCollection?: string[] | undefined
  details?: string | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  netGoods?: number | undefined
  netServices?: number | undefined
  note?: string | undefined
  procDate?: string | undefined
  reference?: string | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVAT?: number | undefined
  unpaid?: number | undefined
  vatEntries?: VatEntryDto[] | undefined
  vatTypeId?: bigint | undefined
}
type BatchItemSalesEntryDto = { item?: SalesEntryDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type SalesInvoiceQueryDto = {
  acCode?: string | undefined
  bookTranTypeId?: bigint | undefined
  customFields?: AcudfValueDto[] | undefined
  customerId?: bigint | undefined
  deliveryTo?: string[] | undefined
  details?: string | undefined
  entryDate?: string | undefined
  id?: bigint | undefined
  loType?: string | undefined
  netGoods?: number | undefined
  netServices?: number | undefined
  note?: string | undefined
  ourReference?: string | undefined
  procDate?: string | undefined
  productTrans?: ProductTranQueryDto[] | undefined
  quoteId?: bigint | undefined
  reference?: string | undefined
  saleRepCode?: string | undefined
  saleRepId?: bigint | undefined
  timestamp?: string | undefined
  total?: number | undefined
  totalNet?: number | undefined
  totalVAT?: number | undefined
  unpaid?: number | undefined
  vatTypeId?: bigint | undefined
  yourReference?: string | undefined
}
type PageResultSalesInvoiceQueryDto = {
  Count?: bigint | undefined
  Items?: SalesInvoiceQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type SaleRepsDto = {
  code?: string | undefined
  companyId?: bigint | undefined
  email?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  phone?: string | undefined
  timeStamp?: string | undefined
}
type PageResultSaleRepsDto = {
  Count?: bigint | undefined
  Items?: SaleRepsDto[] | undefined
  NextPageLink?: string | undefined
}
type BatchItemSaleRepsDto = { item?: SaleRepsDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type SupplierQueryDto = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  additionalEmails?: string[] | undefined
  address?: string[] | undefined
  authCode?: string | undefined
  bank?: EFTBankDto | undefined
  businessIdentifierCode?: string | undefined
  code?: string | undefined
  contact?: string | undefined
  eFTReference?: string | undefined
  email?: string | undefined
  fax?: string | undefined
  id?: bigint | undefined
  internationalBankAccountNumber?: string | undefined
  mobile?: string | undefined
  name?: string | undefined
  ourCode?: string | undefined
  ownerTypeId?: bigint | undefined
  phone?: string | undefined
  postponedAccounting?: boolean | undefined
  timestamp?: string | undefined
  vatAnalysisTypeId?: bigint | undefined
  vatReg?: string | undefined
  vatType?: bigint | undefined
}
type PageResultSupplierQueryDto = {
  Count?: bigint | undefined
  Items?: SupplierQueryDto[] | undefined
  NextPageLink?: string | undefined
}
type SupplierDto = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  additionalEmails?: string[] | undefined
  address?: string[] | undefined
  authCode?: string | undefined
  bank?: EFTBankDto | undefined
  businessIdentifierCode?: string | undefined
  code?: string | undefined
  contact?: string | undefined
  eFTReference?: string | undefined
  email?: string | undefined
  fax?: string | undefined
  id?: bigint | undefined
  internationalBankAccountNumber?: string | undefined
  ledgerBalance?: number | undefined
  mobile?: string | undefined
  name?: string | undefined
  openingBalance?: OwnerOpeningBalanceInPeriodsDto | undefined
  openingBalances?: OwnerOpeningBalanceDto[] | undefined
  ourCode?: string | undefined
  ownerTypeId?: bigint | undefined
  phone?: string | undefined
  postponedAccounting?: boolean | undefined
  timestamp?: string | undefined
  vatAnalysisTypeId?: bigint | undefined
  vatReg?: string | undefined
  vatType?: bigint | undefined
}
type BatchItemSupplierDto = { item?: SupplierDto | undefined; opCode?: 1 | 2 | 3 | undefined }
type UserDefinedFieldDto = {
  categoryTypeId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  orderIndex?: number | undefined
}
type PageResultUserDefinedFieldDto = {
  Count?: bigint | undefined
  Items?: UserDefinedFieldDto[] | undefined
  NextPageLink?: string | undefined
}
type VatAnalysisTypeDto = { description?: string | undefined; id?: bigint | undefined }
type PageResultVatAnalysisTypeDto = {
  Count?: bigint | undefined
  Items?: VatAnalysisTypeDto[] | undefined
  NextPageLink?: string | undefined
}
type VatCategoryDto = { description?: string | undefined; id?: bigint | undefined }
type PageResultVatCategoryDto = {
  Count?: bigint | undefined
  Items?: VatCategoryDto[] | undefined
  NextPageLink?: string | undefined
}
type VatRateDto = {
  id?: bigint | undefined
  isActive?: boolean | undefined
  isDefault?: boolean | undefined
  orderIndex?: number | undefined
  percentage?: number | undefined
  timestamp?: string | undefined
  vatCategoryId?: bigint | undefined
}
type VatRatesByVatCategoryDto = {
  vatCategoryId?: bigint | undefined
  vatRates?: VatRateDto[] | undefined
}
type PageResultVatRateDto = {
  Count?: bigint | undefined
  Items?: VatRateDto[] | undefined
  NextPageLink?: string | undefined
}
type VatTypeDto = {
  code?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
  isNotApplicable?: boolean | undefined
  isOnlyZero?: boolean | undefined
}
type PageResultVatTypeDto = {
  Count?: bigint | undefined
  Items?: VatTypeDto[] | undefined
  NextPageLink?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/accounts': {
      $get: { input: {}; output: PageResultAccountDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/analysisCategories': {
      $get: { input: {}; output: PageResultAnalysisCategoryDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/bankAccounts': {
      $get: { input: {}; output: PageResultBankAccountQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: BankAccountDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/bankAccounts/batch': {
      $put: {
        input: { json: BatchItemBankAccountDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/bankAccounts/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: BankAccountDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: BankAccountDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/bookTranTypes': {
      $get: { input: {}; output: PageResultBookTranTypeDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/cashPayments': {
      $get: { input: {}; output: PageResultCashPaymentQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CashPaymentDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cashPayments/batch': {
      $put: {
        input: { json: BatchItemCashPaymentDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cashPayments/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: CashPaymentDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: CashPaymentDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cashReceipts': {
      $get: { input: {}; output: PageResultCashReceiptQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CashReceiptDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cashReceipts/batch': {
      $put: {
        input: { json: BatchItemCashReceiptDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cashReceipts/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: CashReceiptDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: CashReceiptDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/categoryTypes': {
      $get: { input: {}; output: PageResultCategoryTypeDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/companySettings': {
      $get: { input: {}; output: PageResultCompanySettingDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/companySetupConfig': {
      $get: { input: {}; output: CompanySetupConfigViewModel; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/companySetupConfig/getCompanyOptions': {
      $get: { input: {}; output: CompanyOptionDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/companySetupConfig/getFinancialYear': {
      $get: { input: {}; output: FinancialYearDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/customers': {
      $get: { input: {}; output: PageResultCustomerQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CustomerDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/customers/batch': {
      $put: {
        input: { json: BatchItemCustomerDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/customers/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } } & { query: { needBalance?: boolean | undefined } }
        output: CustomerDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: CustomerDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/customers/:itemId/accountTrans': {
      $get: {
        input: { param: { itemId: bigint } }
        output: AccountTranDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/customers/:itemId/openingBalance': {
      $get: {
        input: { param: { itemId: bigint } }
        output: OwnerOpeningBalanceInPeriodsDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/customers/:itemId/openingBalanceList': {
      $get: {
        input: { param: { itemId: bigint } }
        output: OwnerOpeningBalanceDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/customers/:itemId/quotes': {
      $get: {
        input: { param: { itemId: bigint } }
        output: QuoteDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/sendEmailStatement': {
      $post: {
        input: { json: EmailStatementDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/sendQuote': {
      $post: {
        input: { json: EmailQuoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/email/sendSalesInvoice': {
      $post: {
        input: { json: SalesInvoiceEmailInfoDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ownerTypeGroups': {
      $get: { input: {}; output: PageResultOwnerTypeGroupDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/ownerTypes': {
      $get: { input: {}; output: PageResultOwnerTypeDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/payments': {
      $get: { input: {}; output: PageResultPaymentQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: PaymentDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payments/batch': {
      $put: {
        input: { json: BatchItemPaymentDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payments/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: PaymentDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: PaymentDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/productTypes': {
      $get: { input: {}; output: PageResultOwnerTypeDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/products': {
      $get: { input: {}; output: PageResultProductDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: ProductDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/products/batch': {
      $put: {
        input: { json: BatchItemProductDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/products/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: ProductDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: ProductDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/purchases': {
      $get: { input: {}; output: PageResultPurchaseQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: PurchaseDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/purchases/batch': {
      $put: {
        input: { json: BatchItemPurchaseDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/purchases/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: PurchaseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: PurchaseDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/quotes': {
      $get: { input: {}; output: PageResultQuoteDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: QuoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/quotes/batch': {
      $put: {
        input: { json: BatchItemQuoteDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/quotes/close/:id': {
      $put: {
        input: { param: { id: bigint } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/quotes/createQuoteWithGeneratingReference': {
      $post: {
        input: { json: QuoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/quotes/generateSaleInvoice': {
      $post: {
        input: { json: QuoteGeneratingInvoiceDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/quotes/reopen/:id': {
      $put: {
        input: { param: { id: bigint } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/quotes/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: QuoteDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: QuoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/sales': {
      $get: { input: {}; output: PageResultSalesQueryDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/salesCreditNotes': {
      $get: {
        input: {}
        output: PageResultSalesCreditNoteQueryDto
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: SalesInvoiceCreditNoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesCreditNotes/batch': {
      $put: {
        input: { json: BatchItemSalesInvoiceCreditNoteDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesCreditNotes/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: SalesInvoiceCreditNoteDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: SalesInvoiceCreditNoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesEntries': {
      $get: { input: {}; output: PageResultSalesEntryQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SalesEntryDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesEntries/batch': {
      $put: {
        input: { json: BatchItemSalesEntryDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesEntries/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: SalesEntryDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: SalesEntryDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesInvoices': {
      $get: { input: {}; output: PageResultSalesInvoiceQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SalesInvoiceCreditNoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesInvoices/batch': {
      $put: {
        input: { json: BatchItemSalesInvoiceCreditNoteDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesInvoices/createSaleInvoiceWithGeneratingReference': {
      $post: {
        input: { json: SalesInvoiceCreditNoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesInvoices/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: SalesInvoiceCreditNoteDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: SalesInvoiceCreditNoteDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesReps': {
      $get: { input: {}; output: PageResultSaleRepsDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SaleRepsDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesReps/batch': {
      $put: {
        input: { json: BatchItemSaleRepsDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/salesReps/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } }
        output: SaleRepsDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: SaleRepsDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/suppliers': {
      $get: { input: {}; output: PageResultSupplierQueryDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SupplierDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/suppliers/batch': {
      $put: {
        input: { json: BatchItemSupplierDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/suppliers/:id': {
      $delete: {
        input: { param: { id: bigint } } & { query: { timestamp: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: bigint } } & { query: { needBalance?: boolean | undefined } }
        output: SupplierDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: bigint } } & { json: SupplierDto }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/suppliers/:itemId/accountTrans': {
      $get: {
        input: { param: { itemId: bigint } }
        output: AccountTranDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/suppliers/:itemId/openingBalance': {
      $get: {
        input: { param: { itemId: bigint } }
        output: OwnerOpeningBalanceInPeriodsDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/suppliers/:itemId/openingBalanceList': {
      $get: {
        input: { param: { itemId: bigint } }
        output: OwnerOpeningBalanceDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/userDefinedFields': {
      $get: { input: {}; output: PageResultUserDefinedFieldDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/vatAnalysisTypes': {
      $get: { input: {}; output: PageResultVatAnalysisTypeDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/vatCategories': {
      $get: { input: {}; output: PageResultVatCategoryDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/vatCategories/vatRates': {
      $post: {
        input: { json: VatRatesByVatCategoryDto[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/vatRates': {
      $get: { input: {}; output: PageResultVatRateDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/vatTypes': {
      $get: { input: {}; output: PageResultVatTypeDto; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
