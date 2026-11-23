import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRoute,
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute,
  deleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute,
  deleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataTransfersRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersRoute,
  getCompaniesCompanyIdDataAccountsAccountIdRoute,
  getCompaniesCompanyIdDataAccountsRoute,
  getCompaniesCompanyIdDataBankAccountsAccountIdRoute,
  getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsRoute,
  getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRoute,
  getCompaniesCompanyIdDataBillCreditNotesRoute,
  getCompaniesCompanyIdDataBillPaymentsBillPaymentIdRoute,
  getCompaniesCompanyIdDataBillPaymentsRoute,
  getCompaniesCompanyIdDataBillsBillIdRoute,
  getCompaniesCompanyIdDataBillsRoute,
  getCompaniesCompanyIdDataCreditNotesCreditNoteIdRoute,
  getCompaniesCompanyIdDataCreditNotesRoute,
  getCompaniesCompanyIdDataCustomersCustomerIdRoute,
  getCompaniesCompanyIdDataCustomersRoute,
  getCompaniesCompanyIdDataFinancialsBalanceSheetRoute,
  getCompaniesCompanyIdDataFinancialsCashFlowStatementRoute,
  getCompaniesCompanyIdDataFinancialsProfitAndLossRoute,
  getCompaniesCompanyIdDataInfoRoute,
  getCompaniesCompanyIdDataInvoicesInvoiceIdPdfRoute,
  getCompaniesCompanyIdDataInvoicesInvoiceIdRoute,
  getCompaniesCompanyIdDataInvoicesRoute,
  getCompaniesCompanyIdDataItemsItemIdRoute,
  getCompaniesCompanyIdDataItemsRoute,
  getCompaniesCompanyIdDataJournalEntriesJournalEntryIdRoute,
  getCompaniesCompanyIdDataJournalEntriesRoute,
  getCompaniesCompanyIdDataJournalsJournalIdRoute,
  getCompaniesCompanyIdDataJournalsRoute,
  getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRoute,
  getCompaniesCompanyIdDataPaymentMethodsRoute,
  getCompaniesCompanyIdDataPaymentsPaymentIdRoute,
  getCompaniesCompanyIdDataPaymentsRoute,
  getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRoute,
  getCompaniesCompanyIdDataPurchaseOrdersRoute,
  getCompaniesCompanyIdDataSalesOrdersRoute,
  getCompaniesCompanyIdDataSalesOrdersSalesOrderIdRoute,
  getCompaniesCompanyIdDataSuppliersRoute,
  getCompaniesCompanyIdDataSuppliersSupplierIdRoute,
  getCompaniesCompanyIdDataTaxRatesRoute,
  getCompaniesCompanyIdDataTaxRatesTaxRateIdRoute,
  getCompaniesCompanyIdDataTrackingCategoriesRoute,
  getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdRoute,
  getCompaniesCompanyIdReportsAgedCreditorAvailableRoute,
  getCompaniesCompanyIdReportsAgedCreditorRoute,
  getCompaniesCompanyIdReportsAgedDebtorAvailableRoute,
  getCompaniesCompanyIdReportsAgedDebtorRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushAccountsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBillsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushCustomersRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushItemsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushJournalsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushPaymentsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushSuppliersRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushTransfersRoute,
  postCompaniesCompanyIdDataInfoRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdRoute,
} from '../routes'

export const getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataTransfersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushAccountsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdRouteHandler: RouteHandler<
  typeof putCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRouteHandler: RouteHandler<
  typeof putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRouteHandler: RouteHandler<
  typeof deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushBillsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushBillsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRouteHandler: RouteHandler<
  typeof deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRouteHandler: RouteHandler<
  typeof putCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdRouteHandler: RouteHandler<
  typeof putCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushCustomersRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdRouteHandler: RouteHandler<
  typeof putCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof deleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof putCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushItemsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdRouteHandler: RouteHandler<
  typeof deleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushJournalsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushJournalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushPaymentsRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRouteHandler: RouteHandler<
  typeof putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushSuppliersRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushSuppliersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdRouteHandler: RouteHandler<
  typeof putCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdConnectionsConnectionIdPushTransfersRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdConnectionsConnectionIdPushTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataAccountsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataAccountsAccountIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataBankAccountsAccountIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataBankAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataBillCreditNotesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataBillCreditNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataBillPaymentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataBillPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataBillPaymentsBillPaymentIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataBillPaymentsBillPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataBillsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataBillsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataBillsBillIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataBillsBillIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataCreditNotesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataCreditNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataCreditNotesCreditNoteIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataCreditNotesCreditNoteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataCustomersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataCustomersCustomerIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataFinancialsBalanceSheetRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataFinancialsBalanceSheetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataFinancialsCashFlowStatementRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataFinancialsCashFlowStatementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataFinancialsProfitAndLossRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataFinancialsProfitAndLossRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataInfoRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCompaniesCompanyIdDataInfoRouteHandler: RouteHandler<
  typeof postCompaniesCompanyIdDataInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataInvoicesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataInvoicesInvoiceIdPdfRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataInvoicesInvoiceIdPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataItemsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataItemsItemIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataJournalEntriesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataJournalEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataJournalEntriesJournalEntryIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataJournalEntriesJournalEntryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataJournalsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataJournalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataJournalsJournalIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataJournalsJournalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataPaymentMethodsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataPaymentsRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataPaymentsPaymentIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataPaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataPurchaseOrdersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataPurchaseOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataSalesOrdersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataSalesOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataSalesOrdersSalesOrderIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataSalesOrdersSalesOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataSuppliersRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataSuppliersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataSuppliersSupplierIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataSuppliersSupplierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataTaxRatesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataTaxRatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataTaxRatesTaxRateIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataTaxRatesTaxRateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataTrackingCategoriesRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataTrackingCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdReportsAgedCreditorRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdReportsAgedCreditorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdReportsAgedCreditorAvailableRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdReportsAgedCreditorAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdReportsAgedDebtorRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdReportsAgedDebtorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompaniesCompanyIdReportsAgedDebtorAvailableRouteHandler: RouteHandler<
  typeof getCompaniesCompanyIdReportsAgedDebtorAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
