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
} from './routes'
import {
  deleteAccountsAccountIDRouteHandler,
  deleteContactGroupsContactGroupIDContactsContactIDRouteHandler,
  deleteContactGroupsContactGroupIDContactsRouteHandler,
  deleteCreditNotesCreditNoteIDAllocationsAllocationIDRouteHandler,
  deleteItemsItemIDRouteHandler,
  deleteLinkedTransactionsLinkedTransactionIDRouteHandler,
  deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRouteHandler,
  deletePrepaymentsPrepaymentIDAllocationsAllocationIDRouteHandler,
  deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRouteHandler,
  deleteTrackingCategoriesTrackingCategoryIDRouteHandler,
  getAccountsAccountIDAttachmentsAttachmentIDRouteHandler,
  getAccountsAccountIDAttachmentsFileNameRouteHandler,
  getAccountsAccountIDAttachmentsRouteHandler,
  getAccountsAccountIDRouteHandler,
  getAccountsRouteHandler,
  getBankTransactionsBankTransactionIDAttachmentsAttachmentIDRouteHandler,
  getBankTransactionsBankTransactionIDAttachmentsFileNameRouteHandler,
  getBankTransactionsBankTransactionIDAttachmentsRouteHandler,
  getBankTransactionsBankTransactionIDHistoryRouteHandler,
  getBankTransactionsBankTransactionIDRouteHandler,
  getBankTransactionsRouteHandler,
  getBankTransfersBankTransferIDAttachmentsAttachmentIDRouteHandler,
  getBankTransfersBankTransferIDAttachmentsFileNameRouteHandler,
  getBankTransfersBankTransferIDAttachmentsRouteHandler,
  getBankTransfersBankTransferIDHistoryRouteHandler,
  getBankTransfersBankTransferIDRouteHandler,
  getBankTransfersRouteHandler,
  getBatchPaymentsBatchPaymentIDHistoryRouteHandler,
  getBatchPaymentsBatchPaymentIDRouteHandler,
  getBatchPaymentsRouteHandler,
  getBrandingThemesBrandingThemeIDPaymentServicesRouteHandler,
  getBrandingThemesBrandingThemeIDRouteHandler,
  getBrandingThemesRouteHandler,
  getBudgetsBudgetIDRouteHandler,
  getBudgetsRouteHandler,
  getContactGroupsContactGroupIDRouteHandler,
  getContactGroupsRouteHandler,
  getContactsContactIDAttachmentsAttachmentIDRouteHandler,
  getContactsContactIDAttachmentsFileNameRouteHandler,
  getContactsContactIDAttachmentsRouteHandler,
  getContactsContactIDCISSettingsRouteHandler,
  getContactsContactIDHistoryRouteHandler,
  getContactsContactIDRouteHandler,
  getContactsContactNumberRouteHandler,
  getContactsRouteHandler,
  getCreditNotesCreditNoteIDAttachmentsAttachmentIDRouteHandler,
  getCreditNotesCreditNoteIDAttachmentsFileNameRouteHandler,
  getCreditNotesCreditNoteIDAttachmentsRouteHandler,
  getCreditNotesCreditNoteIDHistoryRouteHandler,
  getCreditNotesCreditNoteIDPdfRouteHandler,
  getCreditNotesCreditNoteIDRouteHandler,
  getCreditNotesRouteHandler,
  getCurrenciesRouteHandler,
  getExpenseClaimsExpenseClaimIDHistoryRouteHandler,
  getExpenseClaimsExpenseClaimIDRouteHandler,
  getExpenseClaimsRouteHandler,
  getInvoiceRemindersSettingsRouteHandler,
  getInvoicesInvoiceIDAttachmentsAttachmentIDRouteHandler,
  getInvoicesInvoiceIDAttachmentsFileNameRouteHandler,
  getInvoicesInvoiceIDAttachmentsRouteHandler,
  getInvoicesInvoiceIDHistoryRouteHandler,
  getInvoicesInvoiceIDOnlineInvoiceRouteHandler,
  getInvoicesInvoiceIDPdfRouteHandler,
  getInvoicesInvoiceIDRouteHandler,
  getInvoicesRouteHandler,
  getItemsItemIDHistoryRouteHandler,
  getItemsItemIDRouteHandler,
  getItemsRouteHandler,
  getJournalsJournalIDRouteHandler,
  getJournalsJournalNumberRouteHandler,
  getJournalsRouteHandler,
  getLinkedTransactionsLinkedTransactionIDRouteHandler,
  getLinkedTransactionsRouteHandler,
  getManualJournalsManualJournalIDAttachmentsAttachmentIDRouteHandler,
  getManualJournalsManualJournalIDAttachmentsFileNameRouteHandler,
  getManualJournalsManualJournalIDAttachmentsRouteHandler,
  getManualJournalsManualJournalIDHistoryRouteHandler,
  getManualJournalsManualJournalIDRouteHandler,
  getManualJournalsRouteHandler,
  getOrganisationActionsRouteHandler,
  getOrganisationOrganisationIDCISSettingsRouteHandler,
  getOrganisationRouteHandler,
  getOverpaymentsOverpaymentIDHistoryRouteHandler,
  getOverpaymentsOverpaymentIDRouteHandler,
  getOverpaymentsRouteHandler,
  getPaymentServicesRouteHandler,
  getPaymentsPaymentIDHistoryRouteHandler,
  getPaymentsPaymentIDRouteHandler,
  getPaymentsRouteHandler,
  getPrepaymentsPrepaymentIDHistoryRouteHandler,
  getPrepaymentsPrepaymentIDRouteHandler,
  getPrepaymentsRouteHandler,
  getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDRouteHandler,
  getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRouteHandler,
  getPurchaseOrdersPurchaseOrderIDAttachmentsRouteHandler,
  getPurchaseOrdersPurchaseOrderIDHistoryRouteHandler,
  getPurchaseOrdersPurchaseOrderIDPdfRouteHandler,
  getPurchaseOrdersPurchaseOrderIDRouteHandler,
  getPurchaseOrdersPurchaseOrderNumberRouteHandler,
  getPurchaseOrdersRouteHandler,
  getQuotesQuoteIDAttachmentsAttachmentIDRouteHandler,
  getQuotesQuoteIDAttachmentsFileNameRouteHandler,
  getQuotesQuoteIDAttachmentsRouteHandler,
  getQuotesQuoteIDHistoryRouteHandler,
  getQuotesQuoteIDPdfRouteHandler,
  getQuotesQuoteIDRouteHandler,
  getQuotesRouteHandler,
  getReceiptsReceiptIDAttachmentsAttachmentIDRouteHandler,
  getReceiptsReceiptIDAttachmentsFileNameRouteHandler,
  getReceiptsReceiptIDAttachmentsRouteHandler,
  getReceiptsReceiptIDHistoryRouteHandler,
  getReceiptsReceiptIDRouteHandler,
  getReceiptsRouteHandler,
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDRouteHandler,
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRouteHandler,
  getRepeatingInvoicesRepeatingInvoiceIDAttachmentsRouteHandler,
  getRepeatingInvoicesRepeatingInvoiceIDHistoryRouteHandler,
  getRepeatingInvoicesRepeatingInvoiceIDRouteHandler,
  getRepeatingInvoicesRouteHandler,
  getReportsAgedPayablesByContactRouteHandler,
  getReportsAgedReceivablesByContactRouteHandler,
  getReportsBalanceSheetRouteHandler,
  getReportsBankSummaryRouteHandler,
  getReportsBudgetSummaryRouteHandler,
  getReportsExecutiveSummaryRouteHandler,
  getReportsProfitAndLossRouteHandler,
  getReportsReportIDRouteHandler,
  getReportsRouteHandler,
  getReportsTenNinetyNineRouteHandler,
  getReportsTrialBalanceRouteHandler,
  getTaxRatesRouteHandler,
  getTaxRatesTaxTypeRouteHandler,
  getTrackingCategoriesRouteHandler,
  getTrackingCategoriesTrackingCategoryIDRouteHandler,
  getUsersRouteHandler,
  getUsersUserIDRouteHandler,
  postAccountsAccountIDAttachmentsFileNameRouteHandler,
  postAccountsAccountIDRouteHandler,
  postBankTransactionsBankTransactionIDAttachmentsFileNameRouteHandler,
  postBankTransactionsBankTransactionIDRouteHandler,
  postBankTransactionsRouteHandler,
  postBankTransfersBankTransferIDAttachmentsFileNameRouteHandler,
  postBankTransfersBankTransferIDRouteHandler,
  postBankTransfersRouteHandler,
  postBatchPaymentsBatchPaymentIDRouteHandler,
  postBatchPaymentsRouteHandler,
  postBrandingThemesBrandingThemeIDPaymentServicesRouteHandler,
  postContactGroupsContactGroupIDRouteHandler,
  postContactsContactIDAttachmentsFileNameRouteHandler,
  postContactsContactIDRouteHandler,
  postContactsRouteHandler,
  postCreditNotesCreditNoteIDAttachmentsFileNameRouteHandler,
  postCreditNotesCreditNoteIDRouteHandler,
  postCreditNotesRouteHandler,
  postExpenseClaimsExpenseClaimIDRouteHandler,
  postInvoicesInvoiceIDAttachmentsFileNameRouteHandler,
  postInvoicesInvoiceIDEmailRouteHandler,
  postInvoicesInvoiceIDRouteHandler,
  postInvoicesRouteHandler,
  postItemsItemIDRouteHandler,
  postItemsRouteHandler,
  postLinkedTransactionsLinkedTransactionIDRouteHandler,
  postManualJournalsManualJournalIDAttachmentsFileNameRouteHandler,
  postManualJournalsManualJournalIDRouteHandler,
  postManualJournalsRouteHandler,
  postPaymentsPaymentIDRouteHandler,
  postPaymentsRouteHandler,
  postPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRouteHandler,
  postPurchaseOrdersPurchaseOrderIDRouteHandler,
  postPurchaseOrdersRouteHandler,
  postQuotesQuoteIDAttachmentsFileNameRouteHandler,
  postQuotesQuoteIDRouteHandler,
  postQuotesRouteHandler,
  postReceiptsReceiptIDAttachmentsFileNameRouteHandler,
  postReceiptsReceiptIDRouteHandler,
  postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRouteHandler,
  postRepeatingInvoicesRepeatingInvoiceIDRouteHandler,
  postRepeatingInvoicesRouteHandler,
  postSetupRouteHandler,
  postTaxRatesRouteHandler,
  postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRouteHandler,
  postTrackingCategoriesTrackingCategoryIDRouteHandler,
  putAccountsAccountIDAttachmentsFileNameRouteHandler,
  putAccountsRouteHandler,
  putBankTransactionsBankTransactionIDAttachmentsFileNameRouteHandler,
  putBankTransactionsBankTransactionIDHistoryRouteHandler,
  putBankTransactionsRouteHandler,
  putBankTransfersBankTransferIDAttachmentsFileNameRouteHandler,
  putBankTransfersBankTransferIDHistoryRouteHandler,
  putBankTransfersRouteHandler,
  putBatchPaymentsBatchPaymentIDHistoryRouteHandler,
  putBatchPaymentsRouteHandler,
  putContactGroupsContactGroupIDContactsRouteHandler,
  putContactGroupsRouteHandler,
  putContactsContactIDAttachmentsFileNameRouteHandler,
  putContactsContactIDHistoryRouteHandler,
  putContactsRouteHandler,
  putCreditNotesCreditNoteIDAllocationsRouteHandler,
  putCreditNotesCreditNoteIDAttachmentsFileNameRouteHandler,
  putCreditNotesCreditNoteIDHistoryRouteHandler,
  putCreditNotesRouteHandler,
  putCurrenciesRouteHandler,
  putExpenseClaimsExpenseClaimIDHistoryRouteHandler,
  putExpenseClaimsRouteHandler,
  putInvoicesInvoiceIDAttachmentsFileNameRouteHandler,
  putInvoicesInvoiceIDHistoryRouteHandler,
  putInvoicesRouteHandler,
  putItemsItemIDHistoryRouteHandler,
  putItemsRouteHandler,
  putLinkedTransactionsRouteHandler,
  putManualJournalsManualJournalIDAttachmentsFileNameRouteHandler,
  putManualJournalsManualJournalIDHistoryRouteHandler,
  putManualJournalsRouteHandler,
  putOverpaymentsOverpaymentIDAllocationsRouteHandler,
  putOverpaymentsOverpaymentIDHistoryRouteHandler,
  putPaymentServicesRouteHandler,
  putPaymentsPaymentIDHistoryRouteHandler,
  putPaymentsRouteHandler,
  putPrepaymentsPrepaymentIDAllocationsRouteHandler,
  putPrepaymentsPrepaymentIDHistoryRouteHandler,
  putPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRouteHandler,
  putPurchaseOrdersPurchaseOrderIDHistoryRouteHandler,
  putPurchaseOrdersRouteHandler,
  putQuotesQuoteIDAttachmentsFileNameRouteHandler,
  putQuotesQuoteIDHistoryRouteHandler,
  putQuotesRouteHandler,
  putReceiptsReceiptIDAttachmentsFileNameRouteHandler,
  putReceiptsReceiptIDHistoryRouteHandler,
  putReceiptsRouteHandler,
  putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRouteHandler,
  putRepeatingInvoicesRepeatingInvoiceIDHistoryRouteHandler,
  putRepeatingInvoicesRouteHandler,
  putTaxRatesRouteHandler,
  putTrackingCategoriesRouteHandler,
  putTrackingCategoriesTrackingCategoryIDOptionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(putAccountsRoute, putAccountsRouteHandler)
  .openapi(getAccountsAccountIDRoute, getAccountsAccountIDRouteHandler)
  .openapi(postAccountsAccountIDRoute, postAccountsAccountIDRouteHandler)
  .openapi(deleteAccountsAccountIDRoute, deleteAccountsAccountIDRouteHandler)
  .openapi(getAccountsAccountIDAttachmentsRoute, getAccountsAccountIDAttachmentsRouteHandler)
  .openapi(
    getAccountsAccountIDAttachmentsAttachmentIDRoute,
    getAccountsAccountIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getAccountsAccountIDAttachmentsFileNameRoute,
    getAccountsAccountIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postAccountsAccountIDAttachmentsFileNameRoute,
    postAccountsAccountIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putAccountsAccountIDAttachmentsFileNameRoute,
    putAccountsAccountIDAttachmentsFileNameRouteHandler,
  )
  .openapi(getBatchPaymentsRoute, getBatchPaymentsRouteHandler)
  .openapi(putBatchPaymentsRoute, putBatchPaymentsRouteHandler)
  .openapi(postBatchPaymentsRoute, postBatchPaymentsRouteHandler)
  .openapi(getBatchPaymentsBatchPaymentIDRoute, getBatchPaymentsBatchPaymentIDRouteHandler)
  .openapi(postBatchPaymentsBatchPaymentIDRoute, postBatchPaymentsBatchPaymentIDRouteHandler)
  .openapi(
    getBatchPaymentsBatchPaymentIDHistoryRoute,
    getBatchPaymentsBatchPaymentIDHistoryRouteHandler,
  )
  .openapi(
    putBatchPaymentsBatchPaymentIDHistoryRoute,
    putBatchPaymentsBatchPaymentIDHistoryRouteHandler,
  )
  .openapi(getBankTransactionsRoute, getBankTransactionsRouteHandler)
  .openapi(putBankTransactionsRoute, putBankTransactionsRouteHandler)
  .openapi(postBankTransactionsRoute, postBankTransactionsRouteHandler)
  .openapi(
    getBankTransactionsBankTransactionIDRoute,
    getBankTransactionsBankTransactionIDRouteHandler,
  )
  .openapi(
    postBankTransactionsBankTransactionIDRoute,
    postBankTransactionsBankTransactionIDRouteHandler,
  )
  .openapi(
    getBankTransactionsBankTransactionIDAttachmentsRoute,
    getBankTransactionsBankTransactionIDAttachmentsRouteHandler,
  )
  .openapi(
    getBankTransactionsBankTransactionIDAttachmentsAttachmentIDRoute,
    getBankTransactionsBankTransactionIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
    getBankTransactionsBankTransactionIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
    postBankTransactionsBankTransactionIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
    putBankTransactionsBankTransactionIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    getBankTransactionsBankTransactionIDHistoryRoute,
    getBankTransactionsBankTransactionIDHistoryRouteHandler,
  )
  .openapi(
    putBankTransactionsBankTransactionIDHistoryRoute,
    putBankTransactionsBankTransactionIDHistoryRouteHandler,
  )
  .openapi(getBankTransfersRoute, getBankTransfersRouteHandler)
  .openapi(putBankTransfersRoute, putBankTransfersRouteHandler)
  .openapi(postBankTransfersRoute, postBankTransfersRouteHandler)
  .openapi(getBankTransfersBankTransferIDRoute, getBankTransfersBankTransferIDRouteHandler)
  .openapi(postBankTransfersBankTransferIDRoute, postBankTransfersBankTransferIDRouteHandler)
  .openapi(
    getBankTransfersBankTransferIDAttachmentsRoute,
    getBankTransfersBankTransferIDAttachmentsRouteHandler,
  )
  .openapi(
    getBankTransfersBankTransferIDAttachmentsAttachmentIDRoute,
    getBankTransfersBankTransferIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getBankTransfersBankTransferIDAttachmentsFileNameRoute,
    getBankTransfersBankTransferIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postBankTransfersBankTransferIDAttachmentsFileNameRoute,
    postBankTransfersBankTransferIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putBankTransfersBankTransferIDAttachmentsFileNameRoute,
    putBankTransfersBankTransferIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    getBankTransfersBankTransferIDHistoryRoute,
    getBankTransfersBankTransferIDHistoryRouteHandler,
  )
  .openapi(
    putBankTransfersBankTransferIDHistoryRoute,
    putBankTransfersBankTransferIDHistoryRouteHandler,
  )
  .openapi(getBrandingThemesRoute, getBrandingThemesRouteHandler)
  .openapi(getBrandingThemesBrandingThemeIDRoute, getBrandingThemesBrandingThemeIDRouteHandler)
  .openapi(
    getBrandingThemesBrandingThemeIDPaymentServicesRoute,
    getBrandingThemesBrandingThemeIDPaymentServicesRouteHandler,
  )
  .openapi(
    postBrandingThemesBrandingThemeIDPaymentServicesRoute,
    postBrandingThemesBrandingThemeIDPaymentServicesRouteHandler,
  )
  .openapi(getBudgetsRoute, getBudgetsRouteHandler)
  .openapi(getBudgetsBudgetIDRoute, getBudgetsBudgetIDRouteHandler)
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(putContactsRoute, putContactsRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(getContactsContactNumberRoute, getContactsContactNumberRouteHandler)
  .openapi(getContactsContactIDRoute, getContactsContactIDRouteHandler)
  .openapi(postContactsContactIDRoute, postContactsContactIDRouteHandler)
  .openapi(getContactsContactIDAttachmentsRoute, getContactsContactIDAttachmentsRouteHandler)
  .openapi(
    getContactsContactIDAttachmentsAttachmentIDRoute,
    getContactsContactIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getContactsContactIDAttachmentsFileNameRoute,
    getContactsContactIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postContactsContactIDAttachmentsFileNameRoute,
    postContactsContactIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putContactsContactIDAttachmentsFileNameRoute,
    putContactsContactIDAttachmentsFileNameRouteHandler,
  )
  .openapi(getContactsContactIDCISSettingsRoute, getContactsContactIDCISSettingsRouteHandler)
  .openapi(getContactsContactIDHistoryRoute, getContactsContactIDHistoryRouteHandler)
  .openapi(putContactsContactIDHistoryRoute, putContactsContactIDHistoryRouteHandler)
  .openapi(getContactGroupsRoute, getContactGroupsRouteHandler)
  .openapi(putContactGroupsRoute, putContactGroupsRouteHandler)
  .openapi(getContactGroupsContactGroupIDRoute, getContactGroupsContactGroupIDRouteHandler)
  .openapi(postContactGroupsContactGroupIDRoute, postContactGroupsContactGroupIDRouteHandler)
  .openapi(
    putContactGroupsContactGroupIDContactsRoute,
    putContactGroupsContactGroupIDContactsRouteHandler,
  )
  .openapi(
    deleteContactGroupsContactGroupIDContactsRoute,
    deleteContactGroupsContactGroupIDContactsRouteHandler,
  )
  .openapi(
    deleteContactGroupsContactGroupIDContactsContactIDRoute,
    deleteContactGroupsContactGroupIDContactsContactIDRouteHandler,
  )
  .openapi(getCreditNotesRoute, getCreditNotesRouteHandler)
  .openapi(putCreditNotesRoute, putCreditNotesRouteHandler)
  .openapi(postCreditNotesRoute, postCreditNotesRouteHandler)
  .openapi(getCreditNotesCreditNoteIDRoute, getCreditNotesCreditNoteIDRouteHandler)
  .openapi(postCreditNotesCreditNoteIDRoute, postCreditNotesCreditNoteIDRouteHandler)
  .openapi(
    getCreditNotesCreditNoteIDAttachmentsRoute,
    getCreditNotesCreditNoteIDAttachmentsRouteHandler,
  )
  .openapi(
    getCreditNotesCreditNoteIDAttachmentsAttachmentIDRoute,
    getCreditNotesCreditNoteIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getCreditNotesCreditNoteIDAttachmentsFileNameRoute,
    getCreditNotesCreditNoteIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postCreditNotesCreditNoteIDAttachmentsFileNameRoute,
    postCreditNotesCreditNoteIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putCreditNotesCreditNoteIDAttachmentsFileNameRoute,
    putCreditNotesCreditNoteIDAttachmentsFileNameRouteHandler,
  )
  .openapi(getCreditNotesCreditNoteIDPdfRoute, getCreditNotesCreditNoteIDPdfRouteHandler)
  .openapi(
    putCreditNotesCreditNoteIDAllocationsRoute,
    putCreditNotesCreditNoteIDAllocationsRouteHandler,
  )
  .openapi(
    deleteCreditNotesCreditNoteIDAllocationsAllocationIDRoute,
    deleteCreditNotesCreditNoteIDAllocationsAllocationIDRouteHandler,
  )
  .openapi(getCreditNotesCreditNoteIDHistoryRoute, getCreditNotesCreditNoteIDHistoryRouteHandler)
  .openapi(putCreditNotesCreditNoteIDHistoryRoute, putCreditNotesCreditNoteIDHistoryRouteHandler)
  .openapi(getCurrenciesRoute, getCurrenciesRouteHandler)
  .openapi(putCurrenciesRoute, putCurrenciesRouteHandler)
  .openapi(getExpenseClaimsRoute, getExpenseClaimsRouteHandler)
  .openapi(putExpenseClaimsRoute, putExpenseClaimsRouteHandler)
  .openapi(getExpenseClaimsExpenseClaimIDRoute, getExpenseClaimsExpenseClaimIDRouteHandler)
  .openapi(postExpenseClaimsExpenseClaimIDRoute, postExpenseClaimsExpenseClaimIDRouteHandler)
  .openapi(
    getExpenseClaimsExpenseClaimIDHistoryRoute,
    getExpenseClaimsExpenseClaimIDHistoryRouteHandler,
  )
  .openapi(
    putExpenseClaimsExpenseClaimIDHistoryRoute,
    putExpenseClaimsExpenseClaimIDHistoryRouteHandler,
  )
  .openapi(getInvoicesRoute, getInvoicesRouteHandler)
  .openapi(putInvoicesRoute, putInvoicesRouteHandler)
  .openapi(postInvoicesRoute, postInvoicesRouteHandler)
  .openapi(getInvoicesInvoiceIDRoute, getInvoicesInvoiceIDRouteHandler)
  .openapi(postInvoicesInvoiceIDRoute, postInvoicesInvoiceIDRouteHandler)
  .openapi(getInvoicesInvoiceIDPdfRoute, getInvoicesInvoiceIDPdfRouteHandler)
  .openapi(getInvoicesInvoiceIDAttachmentsRoute, getInvoicesInvoiceIDAttachmentsRouteHandler)
  .openapi(
    getInvoicesInvoiceIDAttachmentsAttachmentIDRoute,
    getInvoicesInvoiceIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getInvoicesInvoiceIDAttachmentsFileNameRoute,
    getInvoicesInvoiceIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postInvoicesInvoiceIDAttachmentsFileNameRoute,
    postInvoicesInvoiceIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putInvoicesInvoiceIDAttachmentsFileNameRoute,
    putInvoicesInvoiceIDAttachmentsFileNameRouteHandler,
  )
  .openapi(getInvoicesInvoiceIDOnlineInvoiceRoute, getInvoicesInvoiceIDOnlineInvoiceRouteHandler)
  .openapi(postInvoicesInvoiceIDEmailRoute, postInvoicesInvoiceIDEmailRouteHandler)
  .openapi(getInvoicesInvoiceIDHistoryRoute, getInvoicesInvoiceIDHistoryRouteHandler)
  .openapi(putInvoicesInvoiceIDHistoryRoute, putInvoicesInvoiceIDHistoryRouteHandler)
  .openapi(getInvoiceRemindersSettingsRoute, getInvoiceRemindersSettingsRouteHandler)
  .openapi(getItemsRoute, getItemsRouteHandler)
  .openapi(putItemsRoute, putItemsRouteHandler)
  .openapi(postItemsRoute, postItemsRouteHandler)
  .openapi(getItemsItemIDRoute, getItemsItemIDRouteHandler)
  .openapi(postItemsItemIDRoute, postItemsItemIDRouteHandler)
  .openapi(deleteItemsItemIDRoute, deleteItemsItemIDRouteHandler)
  .openapi(getItemsItemIDHistoryRoute, getItemsItemIDHistoryRouteHandler)
  .openapi(putItemsItemIDHistoryRoute, putItemsItemIDHistoryRouteHandler)
  .openapi(getJournalsRoute, getJournalsRouteHandler)
  .openapi(getJournalsJournalIDRoute, getJournalsJournalIDRouteHandler)
  .openapi(getJournalsJournalNumberRoute, getJournalsJournalNumberRouteHandler)
  .openapi(getLinkedTransactionsRoute, getLinkedTransactionsRouteHandler)
  .openapi(putLinkedTransactionsRoute, putLinkedTransactionsRouteHandler)
  .openapi(
    getLinkedTransactionsLinkedTransactionIDRoute,
    getLinkedTransactionsLinkedTransactionIDRouteHandler,
  )
  .openapi(
    postLinkedTransactionsLinkedTransactionIDRoute,
    postLinkedTransactionsLinkedTransactionIDRouteHandler,
  )
  .openapi(
    deleteLinkedTransactionsLinkedTransactionIDRoute,
    deleteLinkedTransactionsLinkedTransactionIDRouteHandler,
  )
  .openapi(getManualJournalsRoute, getManualJournalsRouteHandler)
  .openapi(putManualJournalsRoute, putManualJournalsRouteHandler)
  .openapi(postManualJournalsRoute, postManualJournalsRouteHandler)
  .openapi(getManualJournalsManualJournalIDRoute, getManualJournalsManualJournalIDRouteHandler)
  .openapi(postManualJournalsManualJournalIDRoute, postManualJournalsManualJournalIDRouteHandler)
  .openapi(
    getManualJournalsManualJournalIDAttachmentsRoute,
    getManualJournalsManualJournalIDAttachmentsRouteHandler,
  )
  .openapi(
    getManualJournalsManualJournalIDAttachmentsAttachmentIDRoute,
    getManualJournalsManualJournalIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getManualJournalsManualJournalIDAttachmentsFileNameRoute,
    getManualJournalsManualJournalIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postManualJournalsManualJournalIDAttachmentsFileNameRoute,
    postManualJournalsManualJournalIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putManualJournalsManualJournalIDAttachmentsFileNameRoute,
    putManualJournalsManualJournalIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    getManualJournalsManualJournalIDHistoryRoute,
    getManualJournalsManualJournalIDHistoryRouteHandler,
  )
  .openapi(
    putManualJournalsManualJournalIDHistoryRoute,
    putManualJournalsManualJournalIDHistoryRouteHandler,
  )
  .openapi(getOrganisationRoute, getOrganisationRouteHandler)
  .openapi(getOrganisationActionsRoute, getOrganisationActionsRouteHandler)
  .openapi(
    getOrganisationOrganisationIDCISSettingsRoute,
    getOrganisationOrganisationIDCISSettingsRouteHandler,
  )
  .openapi(getOverpaymentsRoute, getOverpaymentsRouteHandler)
  .openapi(getOverpaymentsOverpaymentIDRoute, getOverpaymentsOverpaymentIDRouteHandler)
  .openapi(
    putOverpaymentsOverpaymentIDAllocationsRoute,
    putOverpaymentsOverpaymentIDAllocationsRouteHandler,
  )
  .openapi(
    deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRoute,
    deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRouteHandler,
  )
  .openapi(
    getOverpaymentsOverpaymentIDHistoryRoute,
    getOverpaymentsOverpaymentIDHistoryRouteHandler,
  )
  .openapi(
    putOverpaymentsOverpaymentIDHistoryRoute,
    putOverpaymentsOverpaymentIDHistoryRouteHandler,
  )
  .openapi(getPaymentsRoute, getPaymentsRouteHandler)
  .openapi(putPaymentsRoute, putPaymentsRouteHandler)
  .openapi(postPaymentsRoute, postPaymentsRouteHandler)
  .openapi(getPaymentsPaymentIDRoute, getPaymentsPaymentIDRouteHandler)
  .openapi(postPaymentsPaymentIDRoute, postPaymentsPaymentIDRouteHandler)
  .openapi(getPaymentsPaymentIDHistoryRoute, getPaymentsPaymentIDHistoryRouteHandler)
  .openapi(putPaymentsPaymentIDHistoryRoute, putPaymentsPaymentIDHistoryRouteHandler)
  .openapi(getPaymentServicesRoute, getPaymentServicesRouteHandler)
  .openapi(putPaymentServicesRoute, putPaymentServicesRouteHandler)
  .openapi(getPrepaymentsRoute, getPrepaymentsRouteHandler)
  .openapi(getPrepaymentsPrepaymentIDRoute, getPrepaymentsPrepaymentIDRouteHandler)
  .openapi(
    putPrepaymentsPrepaymentIDAllocationsRoute,
    putPrepaymentsPrepaymentIDAllocationsRouteHandler,
  )
  .openapi(
    deletePrepaymentsPrepaymentIDAllocationsAllocationIDRoute,
    deletePrepaymentsPrepaymentIDAllocationsAllocationIDRouteHandler,
  )
  .openapi(getPrepaymentsPrepaymentIDHistoryRoute, getPrepaymentsPrepaymentIDHistoryRouteHandler)
  .openapi(putPrepaymentsPrepaymentIDHistoryRoute, putPrepaymentsPrepaymentIDHistoryRouteHandler)
  .openapi(getPurchaseOrdersRoute, getPurchaseOrdersRouteHandler)
  .openapi(putPurchaseOrdersRoute, putPurchaseOrdersRouteHandler)
  .openapi(postPurchaseOrdersRoute, postPurchaseOrdersRouteHandler)
  .openapi(
    getPurchaseOrdersPurchaseOrderIDPdfRoute,
    getPurchaseOrdersPurchaseOrderIDPdfRouteHandler,
  )
  .openapi(getPurchaseOrdersPurchaseOrderIDRoute, getPurchaseOrdersPurchaseOrderIDRouteHandler)
  .openapi(postPurchaseOrdersPurchaseOrderIDRoute, postPurchaseOrdersPurchaseOrderIDRouteHandler)
  .openapi(
    getPurchaseOrdersPurchaseOrderNumberRoute,
    getPurchaseOrdersPurchaseOrderNumberRouteHandler,
  )
  .openapi(
    getPurchaseOrdersPurchaseOrderIDHistoryRoute,
    getPurchaseOrdersPurchaseOrderIDHistoryRouteHandler,
  )
  .openapi(
    putPurchaseOrdersPurchaseOrderIDHistoryRoute,
    putPurchaseOrdersPurchaseOrderIDHistoryRouteHandler,
  )
  .openapi(
    getPurchaseOrdersPurchaseOrderIDAttachmentsRoute,
    getPurchaseOrdersPurchaseOrderIDAttachmentsRouteHandler,
  )
  .openapi(
    getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDRoute,
    getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
    getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
    postPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute,
    putPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRouteHandler,
  )
  .openapi(getQuotesRoute, getQuotesRouteHandler)
  .openapi(putQuotesRoute, putQuotesRouteHandler)
  .openapi(postQuotesRoute, postQuotesRouteHandler)
  .openapi(getQuotesQuoteIDRoute, getQuotesQuoteIDRouteHandler)
  .openapi(postQuotesQuoteIDRoute, postQuotesQuoteIDRouteHandler)
  .openapi(getQuotesQuoteIDHistoryRoute, getQuotesQuoteIDHistoryRouteHandler)
  .openapi(putQuotesQuoteIDHistoryRoute, putQuotesQuoteIDHistoryRouteHandler)
  .openapi(getQuotesQuoteIDPdfRoute, getQuotesQuoteIDPdfRouteHandler)
  .openapi(getQuotesQuoteIDAttachmentsRoute, getQuotesQuoteIDAttachmentsRouteHandler)
  .openapi(
    getQuotesQuoteIDAttachmentsAttachmentIDRoute,
    getQuotesQuoteIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getQuotesQuoteIDAttachmentsFileNameRoute,
    getQuotesQuoteIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postQuotesQuoteIDAttachmentsFileNameRoute,
    postQuotesQuoteIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putQuotesQuoteIDAttachmentsFileNameRoute,
    putQuotesQuoteIDAttachmentsFileNameRouteHandler,
  )
  .openapi(getReceiptsRoute, getReceiptsRouteHandler)
  .openapi(putReceiptsRoute, putReceiptsRouteHandler)
  .openapi(getReceiptsReceiptIDRoute, getReceiptsReceiptIDRouteHandler)
  .openapi(postReceiptsReceiptIDRoute, postReceiptsReceiptIDRouteHandler)
  .openapi(getReceiptsReceiptIDAttachmentsRoute, getReceiptsReceiptIDAttachmentsRouteHandler)
  .openapi(
    getReceiptsReceiptIDAttachmentsAttachmentIDRoute,
    getReceiptsReceiptIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getReceiptsReceiptIDAttachmentsFileNameRoute,
    getReceiptsReceiptIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postReceiptsReceiptIDAttachmentsFileNameRoute,
    postReceiptsReceiptIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putReceiptsReceiptIDAttachmentsFileNameRoute,
    putReceiptsReceiptIDAttachmentsFileNameRouteHandler,
  )
  .openapi(getReceiptsReceiptIDHistoryRoute, getReceiptsReceiptIDHistoryRouteHandler)
  .openapi(putReceiptsReceiptIDHistoryRoute, putReceiptsReceiptIDHistoryRouteHandler)
  .openapi(getRepeatingInvoicesRoute, getRepeatingInvoicesRouteHandler)
  .openapi(putRepeatingInvoicesRoute, putRepeatingInvoicesRouteHandler)
  .openapi(postRepeatingInvoicesRoute, postRepeatingInvoicesRouteHandler)
  .openapi(
    getRepeatingInvoicesRepeatingInvoiceIDRoute,
    getRepeatingInvoicesRepeatingInvoiceIDRouteHandler,
  )
  .openapi(
    postRepeatingInvoicesRepeatingInvoiceIDRoute,
    postRepeatingInvoicesRepeatingInvoiceIDRouteHandler,
  )
  .openapi(
    getRepeatingInvoicesRepeatingInvoiceIDAttachmentsRoute,
    getRepeatingInvoicesRepeatingInvoiceIDAttachmentsRouteHandler,
  )
  .openapi(
    getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDRoute,
    getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDRouteHandler,
  )
  .openapi(
    getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
    getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
    postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute,
    putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRouteHandler,
  )
  .openapi(
    getRepeatingInvoicesRepeatingInvoiceIDHistoryRoute,
    getRepeatingInvoicesRepeatingInvoiceIDHistoryRouteHandler,
  )
  .openapi(
    putRepeatingInvoicesRepeatingInvoiceIDHistoryRoute,
    putRepeatingInvoicesRepeatingInvoiceIDHistoryRouteHandler,
  )
  .openapi(getReportsTenNinetyNineRoute, getReportsTenNinetyNineRouteHandler)
  .openapi(getReportsAgedPayablesByContactRoute, getReportsAgedPayablesByContactRouteHandler)
  .openapi(getReportsAgedReceivablesByContactRoute, getReportsAgedReceivablesByContactRouteHandler)
  .openapi(getReportsBalanceSheetRoute, getReportsBalanceSheetRouteHandler)
  .openapi(getReportsBankSummaryRoute, getReportsBankSummaryRouteHandler)
  .openapi(getReportsReportIDRoute, getReportsReportIDRouteHandler)
  .openapi(getReportsBudgetSummaryRoute, getReportsBudgetSummaryRouteHandler)
  .openapi(getReportsExecutiveSummaryRoute, getReportsExecutiveSummaryRouteHandler)
  .openapi(getReportsRoute, getReportsRouteHandler)
  .openapi(getReportsProfitAndLossRoute, getReportsProfitAndLossRouteHandler)
  .openapi(getReportsTrialBalanceRoute, getReportsTrialBalanceRouteHandler)
  .openapi(postSetupRoute, postSetupRouteHandler)
  .openapi(getTaxRatesRoute, getTaxRatesRouteHandler)
  .openapi(putTaxRatesRoute, putTaxRatesRouteHandler)
  .openapi(postTaxRatesRoute, postTaxRatesRouteHandler)
  .openapi(getTaxRatesTaxTypeRoute, getTaxRatesTaxTypeRouteHandler)
  .openapi(getTrackingCategoriesRoute, getTrackingCategoriesRouteHandler)
  .openapi(putTrackingCategoriesRoute, putTrackingCategoriesRouteHandler)
  .openapi(
    getTrackingCategoriesTrackingCategoryIDRoute,
    getTrackingCategoriesTrackingCategoryIDRouteHandler,
  )
  .openapi(
    postTrackingCategoriesTrackingCategoryIDRoute,
    postTrackingCategoriesTrackingCategoryIDRouteHandler,
  )
  .openapi(
    deleteTrackingCategoriesTrackingCategoryIDRoute,
    deleteTrackingCategoriesTrackingCategoryIDRouteHandler,
  )
  .openapi(
    putTrackingCategoriesTrackingCategoryIDOptionsRoute,
    putTrackingCategoriesTrackingCategoryIDOptionsRouteHandler,
  )
  .openapi(
    postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute,
    postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRouteHandler,
  )
  .openapi(
    deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute,
    deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRouteHandler,
  )
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersUserIDRoute, getUsersUserIDRouteHandler)

export default app
