import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIDRoute,
  deleteContactGroupsContactGroupIDContactsContactIDRoute,
  deleteContactGroupsContactGroupIDContactsRoute,
  deleteCreditNotesCreditNoteIDAllocationsAllocationIDRoute,
  deleteItemsItemIDRoute,
  deleteLinkedTransactionsLinkedTransactionIDRoute,
  deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRoute,
  deletePrepaymentsPrepaymentIDAllocationsAllocationIDRoute,
  deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute,
  deleteTrackingCategoriesTrackingCategoryIDRoute,
  getAccountsAccountIDAttachmentsAttachmentIDRoute,
  getAccountsAccountIDAttachmentsFileNameRoute,
  getAccountsAccountIDAttachmentsRoute,
  getAccountsAccountIDRoute,
  getAccountsRoute,
  getBankTransactionsBankTransactionIDAttachmentsAttachmentIDRoute,
  getBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
  getBankTransactionsBankTransactionIDAttachmentsRoute,
  getBankTransactionsBankTransactionIDHistoryRoute,
  getBankTransactionsBankTransactionIDRoute,
  getBankTransactionsRoute,
  getBankTransfersBankTransferIDAttachmentsAttachmentIDRoute,
  getBankTransfersBankTransferIDAttachmentsFileNameRoute,
  getBankTransfersBankTransferIDAttachmentsRoute,
  getBankTransfersBankTransferIDHistoryRoute,
  getBankTransfersBankTransferIDRoute,
  getBankTransfersRoute,
  getBatchPaymentsBatchPaymentIDHistoryRoute,
  getBatchPaymentsBatchPaymentIDRoute,
  getBatchPaymentsRoute,
  getBrandingThemesBrandingThemeIDPaymentServicesRoute,
  getBrandingThemesBrandingThemeIDRoute,
  getBrandingThemesRoute,
  getBudgetsBudgetIDRoute,
  getBudgetsRoute,
  getContactGroupsContactGroupIDRoute,
  getContactGroupsRoute,
  getContactsContactIDAttachmentsAttachmentIDRoute,
  getContactsContactIDAttachmentsFileNameRoute,
  getContactsContactIDAttachmentsRoute,
  getContactsContactIDCISSettingsRoute,
  getContactsContactIDHistoryRoute,
  getContactsContactIDRoute,
  getContactsContactNumberRoute,
  getContactsRoute,
  getCreditNotesCreditNoteIDAttachmentsAttachmentIDRoute,
  getCreditNotesCreditNoteIDAttachmentsFileNameRoute,
  getCreditNotesCreditNoteIDAttachmentsRoute,
  getCreditNotesCreditNoteIDHistoryRoute,
  getCreditNotesCreditNoteIDPdfRoute,
  getCreditNotesCreditNoteIDRoute,
  getCreditNotesRoute,
  getCurrenciesRoute,
  getExpenseClaimsExpenseClaimIDHistoryRoute,
  getExpenseClaimsExpenseClaimIDRoute,
  getExpenseClaimsRoute,
  getInvoiceRemindersSettingsRoute,
  getInvoicesInvoiceIDAttachmentsAttachmentIDRoute,
  getInvoicesInvoiceIDAttachmentsFileNameRoute,
  getInvoicesInvoiceIDAttachmentsRoute,
  getInvoicesInvoiceIDHistoryRoute,
  getInvoicesInvoiceIDOnlineInvoiceRoute,
  getInvoicesInvoiceIDPdfRoute,
  getInvoicesInvoiceIDRoute,
  getInvoicesRoute,
  getItemsItemIDHistoryRoute,
  getItemsItemIDRoute,
  getItemsRoute,
  getJournalsJournalIDRoute,
  getJournalsJournalNumberRoute,
  getJournalsRoute,
  getLinkedTransactionsLinkedTransactionIDRoute,
  getLinkedTransactionsRoute,
  getManualJournalsManualJournalIDAttachmentsAttachmentIDRoute,
  getManualJournalsManualJournalIDAttachmentsFileNameRoute,
  getManualJournalsManualJournalIDAttachmentsRoute,
  getManualJournalsManualJournalIDHistoryRoute,
  getManualJournalsManualJournalIDRoute,
  getManualJournalsRoute,
  getOrganisationActionsRoute,
  getOrganisationOrganisationIDCISSettingsRoute,
  getOrganisationRoute,
  getOverpaymentsOverpaymentIDHistoryRoute,
  getOverpaymentsOverpaymentIDRoute,
  getOverpaymentsRoute,
  getPaymentServicesRoute,
  getPaymentsPaymentIDHistoryRoute,
  getPaymentsPaymentIDRoute,
  getPaymentsRoute,
  getPrepaymentsPrepaymentIDHistoryRoute,
  getPrepaymentsPrepaymentIDRoute,
  getPrepaymentsRoute,
  getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDRoute,
  getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
  getPurchaseOrdersPurchaseOrderIDAttachmentsRoute,
  getPurchaseOrdersPurchaseOrderIDHistoryRoute,
  getPurchaseOrdersPurchaseOrderIDPdfRoute,
  getPurchaseOrdersPurchaseOrderIDRoute,
  getPurchaseOrdersPurchaseOrderNumberRoute,
  getPurchaseOrdersRoute,
  getQuotesQuoteIDAttachmentsAttachmentIDRoute,
  getQuotesQuoteIDAttachmentsFileNameRoute,
  getQuotesQuoteIDAttachmentsRoute,
  getQuotesQuoteIDHistoryRoute,
  getQuotesQuoteIDPdfRoute,
  getQuotesQuoteIDRoute,
  getQuotesRoute,
  getReceiptsReceiptIDAttachmentsAttachmentIDRoute,
  getReceiptsReceiptIDAttachmentsFileNameRoute,
  getReceiptsReceiptIDAttachmentsRoute,
  getReceiptsReceiptIDHistoryRoute,
  getReceiptsReceiptIDRoute,
  getReceiptsRoute,
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDRoute,
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsRoute,
  getRepeatingInvoicesRepeatingInvoiceIDHistoryRoute,
  getRepeatingInvoicesRepeatingInvoiceIDRoute,
  getRepeatingInvoicesRoute,
  getReportsAgedPayablesByContactRoute,
  getReportsAgedReceivablesByContactRoute,
  getReportsBalanceSheetRoute,
  getReportsBankSummaryRoute,
  getReportsBudgetSummaryRoute,
  getReportsExecutiveSummaryRoute,
  getReportsProfitAndLossRoute,
  getReportsReportIDRoute,
  getReportsRoute,
  getReportsTenNinetyNineRoute,
  getReportsTrialBalanceRoute,
  getTaxRatesRoute,
  getTaxRatesTaxTypeRoute,
  getTrackingCategoriesRoute,
  getTrackingCategoriesTrackingCategoryIDRoute,
  getUsersRoute,
  getUsersUserIDRoute,
  postAccountsAccountIDAttachmentsFileNameRoute,
  postAccountsAccountIDRoute,
  postBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
  postBankTransactionsBankTransactionIDRoute,
  postBankTransactionsRoute,
  postBankTransfersBankTransferIDAttachmentsFileNameRoute,
  postBankTransfersBankTransferIDRoute,
  postBankTransfersRoute,
  postBatchPaymentsBatchPaymentIDRoute,
  postBatchPaymentsRoute,
  postBrandingThemesBrandingThemeIDPaymentServicesRoute,
  postContactGroupsContactGroupIDRoute,
  postContactsContactIDAttachmentsFileNameRoute,
  postContactsContactIDRoute,
  postContactsRoute,
  postCreditNotesCreditNoteIDAttachmentsFileNameRoute,
  postCreditNotesCreditNoteIDRoute,
  postCreditNotesRoute,
  postExpenseClaimsExpenseClaimIDRoute,
  postInvoicesInvoiceIDAttachmentsFileNameRoute,
  postInvoicesInvoiceIDEmailRoute,
  postInvoicesInvoiceIDRoute,
  postInvoicesRoute,
  postItemsItemIDRoute,
  postItemsRoute,
  postLinkedTransactionsLinkedTransactionIDRoute,
  postManualJournalsManualJournalIDAttachmentsFileNameRoute,
  postManualJournalsManualJournalIDRoute,
  postManualJournalsRoute,
  postPaymentsPaymentIDRoute,
  postPaymentsRoute,
  postPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
  postPurchaseOrdersPurchaseOrderIDRoute,
  postPurchaseOrdersRoute,
  postQuotesQuoteIDAttachmentsFileNameRoute,
  postQuotesQuoteIDRoute,
  postQuotesRoute,
  postReceiptsReceiptIDAttachmentsFileNameRoute,
  postReceiptsReceiptIDRoute,
  postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
  postRepeatingInvoicesRepeatingInvoiceIDRoute,
  postRepeatingInvoicesRoute,
  postSetupRoute,
  postTaxRatesRoute,
  postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute,
  postTrackingCategoriesTrackingCategoryIDRoute,
  putAccountsAccountIDAttachmentsFileNameRoute,
  putAccountsRoute,
  putBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
  putBankTransactionsBankTransactionIDHistoryRoute,
  putBankTransactionsRoute,
  putBankTransfersBankTransferIDAttachmentsFileNameRoute,
  putBankTransfersBankTransferIDHistoryRoute,
  putBankTransfersRoute,
  putBatchPaymentsBatchPaymentIDHistoryRoute,
  putBatchPaymentsRoute,
  putContactGroupsContactGroupIDContactsRoute,
  putContactGroupsRoute,
  putContactsContactIDAttachmentsFileNameRoute,
  putContactsContactIDHistoryRoute,
  putContactsRoute,
  putCreditNotesCreditNoteIDAllocationsRoute,
  putCreditNotesCreditNoteIDAttachmentsFileNameRoute,
  putCreditNotesCreditNoteIDHistoryRoute,
  putCreditNotesRoute,
  putCurrenciesRoute,
  putExpenseClaimsExpenseClaimIDHistoryRoute,
  putExpenseClaimsRoute,
  putInvoicesInvoiceIDAttachmentsFileNameRoute,
  putInvoicesInvoiceIDHistoryRoute,
  putInvoicesRoute,
  putItemsItemIDHistoryRoute,
  putItemsRoute,
  putLinkedTransactionsRoute,
  putManualJournalsManualJournalIDAttachmentsFileNameRoute,
  putManualJournalsManualJournalIDHistoryRoute,
  putManualJournalsRoute,
  putOverpaymentsOverpaymentIDAllocationsRoute,
  putOverpaymentsOverpaymentIDHistoryRoute,
  putPaymentServicesRoute,
  putPaymentsPaymentIDHistoryRoute,
  putPaymentsRoute,
  putPrepaymentsPrepaymentIDAllocationsRoute,
  putPrepaymentsPrepaymentIDHistoryRoute,
  putPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
  putPurchaseOrdersPurchaseOrderIDHistoryRoute,
  putPurchaseOrdersRoute,
  putQuotesQuoteIDAttachmentsFileNameRoute,
  putQuotesQuoteIDHistoryRoute,
  putQuotesRoute,
  putReceiptsReceiptIDAttachmentsFileNameRoute,
  putReceiptsReceiptIDHistoryRoute,
  putReceiptsRoute,
  putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
  putRepeatingInvoicesRepeatingInvoiceIDHistoryRoute,
  putRepeatingInvoicesRoute,
  putTaxRatesRoute,
  putTrackingCategoriesRoute,
  putTrackingCategoriesTrackingCategoryIDOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountingHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBatchPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBatchPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchPaymentsBatchPaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBatchPaymentsBatchPaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchPaymentsBatchPaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBatchPaymentsBatchPaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransactionsBankTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransactionsBankTransactionIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransactionsBankTransactionIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransactionsBankTransactionIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransfersBankTransferIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransfersBankTransferIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransfersBankTransferIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransfersBankTransferIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingThemesBrandingThemeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingThemesBrandingThemeIDPaymentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrandingThemesBrandingThemeIDPaymentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsContactIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDCISSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsContactIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactGroupsContactGroupIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactGroupsContactGroupIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactGroupsContactGroupIDContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactGroupsContactGroupIDContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactGroupsContactGroupIDContactsContactIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesCreditNoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesCreditNoteIDAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCreditNotesCreditNoteIDAllocationsAllocationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesCreditNoteIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExpenseClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExpenseClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExpenseClaimsExpenseClaimIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExpenseClaimsExpenseClaimIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExpenseClaimsExpenseClaimIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExpenseClaimsExpenseClaimIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDOnlineInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIDEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesInvoiceIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoiceRemindersSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsItemIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItemsItemIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJournalsJournalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJournalsJournalNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinkedTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinkedTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinkedTransactionsLinkedTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinkedTransactionsLinkedTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinkedTransactionsLinkedTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManualJournalsManualJournalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManualJournalsManualJournalIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManualJournalsManualJournalIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManualJournalsManualJournalIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationOrganisationIDCISSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOverpaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOverpaymentsOverpaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOverpaymentsOverpaymentIDAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOverpaymentsOverpaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOverpaymentsOverpaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsPaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsPaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentsPaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaymentsPrepaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrepaymentsPrepaymentIDAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrepaymentsPrepaymentIDAllocationsAllocationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaymentsPrepaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrepaymentsPrepaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersPurchaseOrderIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersPurchaseOrderIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesQuoteIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotesQuoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotesQuoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotesQuoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReceiptsReceiptIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReceiptsReceiptIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsReceiptIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsReceiptIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsReceiptIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepeatingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepeatingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepeatingInvoicesRepeatingInvoiceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepeatingInvoicesRepeatingInvoiceIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepeatingInvoicesRepeatingInvoiceIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsTenNinetyNineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsAgedPayablesByContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsAgedReceivablesByContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsBankSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsReportIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsBudgetSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsExecutiveSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsProfitAndLossRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsTrialBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxRatesTaxTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingCategoriesTrackingCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingCategoriesTrackingCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrackingCategoriesTrackingCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTrackingCategoriesTrackingCategoryIDOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
