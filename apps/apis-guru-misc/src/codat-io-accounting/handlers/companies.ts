import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBankAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBankAccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillPaymentsBillPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillsBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataCreditNotesCreditNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataFinancialsBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataFinancialsCashFlowStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataFinancialsProfitAndLossRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdDataInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataInvoicesInvoiceIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataJournalEntriesJournalEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataJournalsJournalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataSalesOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataSalesOrdersSalesOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataSuppliersSupplierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataTaxRatesTaxRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsAgedCreditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsAgedCreditorAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsAgedDebtorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsAgedDebtorAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
