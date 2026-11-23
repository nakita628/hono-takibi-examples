import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BankAccountsIdRoute,
  deleteV1CashPaymentsIdRoute,
  deleteV1CashReceiptsIdRoute,
  deleteV1CustomersIdRoute,
  deleteV1PaymentsIdRoute,
  deleteV1ProductsIdRoute,
  deleteV1PurchasesIdRoute,
  deleteV1QuotesIdRoute,
  deleteV1SalesCreditNotesIdRoute,
  deleteV1SalesEntriesIdRoute,
  deleteV1SalesInvoicesIdRoute,
  deleteV1SalesRepsIdRoute,
  deleteV1SuppliersIdRoute,
  getV1AccountsRoute,
  getV1AnalysisCategoriesRoute,
  getV1BankAccountsIdRoute,
  getV1BankAccountsRoute,
  getV1BookTranTypesRoute,
  getV1CashPaymentsIdRoute,
  getV1CashPaymentsRoute,
  getV1CashReceiptsIdRoute,
  getV1CashReceiptsRoute,
  getV1CategoryTypesRoute,
  getV1CompanySettingsRoute,
  getV1CompanySetupConfigGetCompanyOptionsRoute,
  getV1CompanySetupConfigGetFinancialYearRoute,
  getV1CompanySetupConfigRoute,
  getV1CustomersIdRoute,
  getV1CustomersItemIdAccountTransRoute,
  getV1CustomersItemIdOpeningBalanceListRoute,
  getV1CustomersItemIdOpeningBalanceRoute,
  getV1CustomersItemIdQuotesRoute,
  getV1CustomersRoute,
  getV1OwnerTypeGroupsRoute,
  getV1OwnerTypesRoute,
  getV1PaymentsIdRoute,
  getV1PaymentsRoute,
  getV1ProductsIdRoute,
  getV1ProductsRoute,
  getV1ProductTypesRoute,
  getV1PurchasesIdRoute,
  getV1PurchasesRoute,
  getV1QuotesIdRoute,
  getV1QuotesRoute,
  getV1SalesCreditNotesIdRoute,
  getV1SalesCreditNotesRoute,
  getV1SalesEntriesIdRoute,
  getV1SalesEntriesRoute,
  getV1SalesInvoicesIdRoute,
  getV1SalesInvoicesRoute,
  getV1SalesRepsIdRoute,
  getV1SalesRepsRoute,
  getV1SalesRoute,
  getV1SuppliersIdRoute,
  getV1SuppliersItemIdAccountTransRoute,
  getV1SuppliersItemIdOpeningBalanceListRoute,
  getV1SuppliersItemIdOpeningBalanceRoute,
  getV1SuppliersRoute,
  getV1UserDefinedFieldsRoute,
  getV1VatAnalysisTypesRoute,
  getV1VatCategoriesRoute,
  getV1VatRatesRoute,
  getV1VatTypesRoute,
  postV1BankAccountsRoute,
  postV1CashPaymentsRoute,
  postV1CashReceiptsRoute,
  postV1CustomersRoute,
  postV1EmailSendEmailStatementRoute,
  postV1EmailSendQuoteRoute,
  postV1EmailSendSalesInvoiceRoute,
  postV1PaymentsRoute,
  postV1ProductsRoute,
  postV1PurchasesRoute,
  postV1QuotesCreateQuoteWithGeneratingReferenceRoute,
  postV1QuotesGenerateSaleInvoiceRoute,
  postV1QuotesRoute,
  postV1SalesCreditNotesRoute,
  postV1SalesEntriesRoute,
  postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceRoute,
  postV1SalesInvoicesRoute,
  postV1SalesRepsRoute,
  postV1SuppliersRoute,
  postV1VatCategoriesVatRatesRoute,
  putV1BankAccountsBatchRoute,
  putV1BankAccountsIdRoute,
  putV1CashPaymentsBatchRoute,
  putV1CashPaymentsIdRoute,
  putV1CashReceiptsBatchRoute,
  putV1CashReceiptsIdRoute,
  putV1CustomersBatchRoute,
  putV1CustomersIdRoute,
  putV1PaymentsBatchRoute,
  putV1PaymentsIdRoute,
  putV1ProductsBatchRoute,
  putV1ProductsIdRoute,
  putV1PurchasesBatchRoute,
  putV1PurchasesIdRoute,
  putV1QuotesBatchRoute,
  putV1QuotesCloseIdRoute,
  putV1QuotesIdRoute,
  putV1QuotesReopenIdRoute,
  putV1SalesCreditNotesBatchRoute,
  putV1SalesCreditNotesIdRoute,
  putV1SalesEntriesBatchRoute,
  putV1SalesEntriesIdRoute,
  putV1SalesInvoicesBatchRoute,
  putV1SalesInvoicesIdRoute,
  putV1SalesRepsBatchRoute,
  putV1SalesRepsIdRoute,
  putV1SuppliersBatchRoute,
  putV1SuppliersIdRoute,
} from './routes'
import {
  deleteV1BankAccountsIdRouteHandler,
  deleteV1CashPaymentsIdRouteHandler,
  deleteV1CashReceiptsIdRouteHandler,
  deleteV1CustomersIdRouteHandler,
  deleteV1PaymentsIdRouteHandler,
  deleteV1ProductsIdRouteHandler,
  deleteV1PurchasesIdRouteHandler,
  deleteV1QuotesIdRouteHandler,
  deleteV1SalesCreditNotesIdRouteHandler,
  deleteV1SalesEntriesIdRouteHandler,
  deleteV1SalesInvoicesIdRouteHandler,
  deleteV1SalesRepsIdRouteHandler,
  deleteV1SuppliersIdRouteHandler,
  getV1AccountsRouteHandler,
  getV1AnalysisCategoriesRouteHandler,
  getV1BankAccountsIdRouteHandler,
  getV1BankAccountsRouteHandler,
  getV1BookTranTypesRouteHandler,
  getV1CashPaymentsIdRouteHandler,
  getV1CashPaymentsRouteHandler,
  getV1CashReceiptsIdRouteHandler,
  getV1CashReceiptsRouteHandler,
  getV1CategoryTypesRouteHandler,
  getV1CompanySettingsRouteHandler,
  getV1CompanySetupConfigGetCompanyOptionsRouteHandler,
  getV1CompanySetupConfigGetFinancialYearRouteHandler,
  getV1CompanySetupConfigRouteHandler,
  getV1CustomersIdRouteHandler,
  getV1CustomersItemIdAccountTransRouteHandler,
  getV1CustomersItemIdOpeningBalanceListRouteHandler,
  getV1CustomersItemIdOpeningBalanceRouteHandler,
  getV1CustomersItemIdQuotesRouteHandler,
  getV1CustomersRouteHandler,
  getV1OwnerTypeGroupsRouteHandler,
  getV1OwnerTypesRouteHandler,
  getV1PaymentsIdRouteHandler,
  getV1PaymentsRouteHandler,
  getV1ProductsIdRouteHandler,
  getV1ProductsRouteHandler,
  getV1ProductTypesRouteHandler,
  getV1PurchasesIdRouteHandler,
  getV1PurchasesRouteHandler,
  getV1QuotesIdRouteHandler,
  getV1QuotesRouteHandler,
  getV1SalesCreditNotesIdRouteHandler,
  getV1SalesCreditNotesRouteHandler,
  getV1SalesEntriesIdRouteHandler,
  getV1SalesEntriesRouteHandler,
  getV1SalesInvoicesIdRouteHandler,
  getV1SalesInvoicesRouteHandler,
  getV1SalesRepsIdRouteHandler,
  getV1SalesRepsRouteHandler,
  getV1SalesRouteHandler,
  getV1SuppliersIdRouteHandler,
  getV1SuppliersItemIdAccountTransRouteHandler,
  getV1SuppliersItemIdOpeningBalanceListRouteHandler,
  getV1SuppliersItemIdOpeningBalanceRouteHandler,
  getV1SuppliersRouteHandler,
  getV1UserDefinedFieldsRouteHandler,
  getV1VatAnalysisTypesRouteHandler,
  getV1VatCategoriesRouteHandler,
  getV1VatRatesRouteHandler,
  getV1VatTypesRouteHandler,
  postV1BankAccountsRouteHandler,
  postV1CashPaymentsRouteHandler,
  postV1CashReceiptsRouteHandler,
  postV1CustomersRouteHandler,
  postV1EmailSendEmailStatementRouteHandler,
  postV1EmailSendQuoteRouteHandler,
  postV1EmailSendSalesInvoiceRouteHandler,
  postV1PaymentsRouteHandler,
  postV1ProductsRouteHandler,
  postV1PurchasesRouteHandler,
  postV1QuotesCreateQuoteWithGeneratingReferenceRouteHandler,
  postV1QuotesGenerateSaleInvoiceRouteHandler,
  postV1QuotesRouteHandler,
  postV1SalesCreditNotesRouteHandler,
  postV1SalesEntriesRouteHandler,
  postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceRouteHandler,
  postV1SalesInvoicesRouteHandler,
  postV1SalesRepsRouteHandler,
  postV1SuppliersRouteHandler,
  postV1VatCategoriesVatRatesRouteHandler,
  putV1BankAccountsBatchRouteHandler,
  putV1BankAccountsIdRouteHandler,
  putV1CashPaymentsBatchRouteHandler,
  putV1CashPaymentsIdRouteHandler,
  putV1CashReceiptsBatchRouteHandler,
  putV1CashReceiptsIdRouteHandler,
  putV1CustomersBatchRouteHandler,
  putV1CustomersIdRouteHandler,
  putV1PaymentsBatchRouteHandler,
  putV1PaymentsIdRouteHandler,
  putV1ProductsBatchRouteHandler,
  putV1ProductsIdRouteHandler,
  putV1PurchasesBatchRouteHandler,
  putV1PurchasesIdRouteHandler,
  putV1QuotesBatchRouteHandler,
  putV1QuotesCloseIdRouteHandler,
  putV1QuotesIdRouteHandler,
  putV1QuotesReopenIdRouteHandler,
  putV1SalesCreditNotesBatchRouteHandler,
  putV1SalesCreditNotesIdRouteHandler,
  putV1SalesEntriesBatchRouteHandler,
  putV1SalesEntriesIdRouteHandler,
  putV1SalesInvoicesBatchRouteHandler,
  putV1SalesInvoicesIdRouteHandler,
  putV1SalesRepsBatchRouteHandler,
  putV1SalesRepsIdRouteHandler,
  putV1SuppliersBatchRouteHandler,
  putV1SuppliersIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AccountsRoute, getV1AccountsRouteHandler)
  .openapi(getV1AnalysisCategoriesRoute, getV1AnalysisCategoriesRouteHandler)
  .openapi(getV1BankAccountsRoute, getV1BankAccountsRouteHandler)
  .openapi(postV1BankAccountsRoute, postV1BankAccountsRouteHandler)
  .openapi(putV1BankAccountsBatchRoute, putV1BankAccountsBatchRouteHandler)
  .openapi(deleteV1BankAccountsIdRoute, deleteV1BankAccountsIdRouteHandler)
  .openapi(getV1BankAccountsIdRoute, getV1BankAccountsIdRouteHandler)
  .openapi(putV1BankAccountsIdRoute, putV1BankAccountsIdRouteHandler)
  .openapi(getV1BookTranTypesRoute, getV1BookTranTypesRouteHandler)
  .openapi(getV1CashPaymentsRoute, getV1CashPaymentsRouteHandler)
  .openapi(postV1CashPaymentsRoute, postV1CashPaymentsRouteHandler)
  .openapi(putV1CashPaymentsBatchRoute, putV1CashPaymentsBatchRouteHandler)
  .openapi(deleteV1CashPaymentsIdRoute, deleteV1CashPaymentsIdRouteHandler)
  .openapi(getV1CashPaymentsIdRoute, getV1CashPaymentsIdRouteHandler)
  .openapi(putV1CashPaymentsIdRoute, putV1CashPaymentsIdRouteHandler)
  .openapi(getV1CashReceiptsRoute, getV1CashReceiptsRouteHandler)
  .openapi(postV1CashReceiptsRoute, postV1CashReceiptsRouteHandler)
  .openapi(putV1CashReceiptsBatchRoute, putV1CashReceiptsBatchRouteHandler)
  .openapi(deleteV1CashReceiptsIdRoute, deleteV1CashReceiptsIdRouteHandler)
  .openapi(getV1CashReceiptsIdRoute, getV1CashReceiptsIdRouteHandler)
  .openapi(putV1CashReceiptsIdRoute, putV1CashReceiptsIdRouteHandler)
  .openapi(getV1CategoryTypesRoute, getV1CategoryTypesRouteHandler)
  .openapi(getV1CompanySettingsRoute, getV1CompanySettingsRouteHandler)
  .openapi(getV1CompanySetupConfigRoute, getV1CompanySetupConfigRouteHandler)
  .openapi(
    getV1CompanySetupConfigGetCompanyOptionsRoute,
    getV1CompanySetupConfigGetCompanyOptionsRouteHandler,
  )
  .openapi(
    getV1CompanySetupConfigGetFinancialYearRoute,
    getV1CompanySetupConfigGetFinancialYearRouteHandler,
  )
  .openapi(getV1CustomersRoute, getV1CustomersRouteHandler)
  .openapi(postV1CustomersRoute, postV1CustomersRouteHandler)
  .openapi(putV1CustomersBatchRoute, putV1CustomersBatchRouteHandler)
  .openapi(deleteV1CustomersIdRoute, deleteV1CustomersIdRouteHandler)
  .openapi(getV1CustomersIdRoute, getV1CustomersIdRouteHandler)
  .openapi(putV1CustomersIdRoute, putV1CustomersIdRouteHandler)
  .openapi(getV1CustomersItemIdAccountTransRoute, getV1CustomersItemIdAccountTransRouteHandler)
  .openapi(getV1CustomersItemIdOpeningBalanceRoute, getV1CustomersItemIdOpeningBalanceRouteHandler)
  .openapi(
    getV1CustomersItemIdOpeningBalanceListRoute,
    getV1CustomersItemIdOpeningBalanceListRouteHandler,
  )
  .openapi(getV1CustomersItemIdQuotesRoute, getV1CustomersItemIdQuotesRouteHandler)
  .openapi(postV1EmailSendEmailStatementRoute, postV1EmailSendEmailStatementRouteHandler)
  .openapi(postV1EmailSendQuoteRoute, postV1EmailSendQuoteRouteHandler)
  .openapi(postV1EmailSendSalesInvoiceRoute, postV1EmailSendSalesInvoiceRouteHandler)
  .openapi(getV1OwnerTypeGroupsRoute, getV1OwnerTypeGroupsRouteHandler)
  .openapi(getV1OwnerTypesRoute, getV1OwnerTypesRouteHandler)
  .openapi(getV1PaymentsRoute, getV1PaymentsRouteHandler)
  .openapi(postV1PaymentsRoute, postV1PaymentsRouteHandler)
  .openapi(putV1PaymentsBatchRoute, putV1PaymentsBatchRouteHandler)
  .openapi(deleteV1PaymentsIdRoute, deleteV1PaymentsIdRouteHandler)
  .openapi(getV1PaymentsIdRoute, getV1PaymentsIdRouteHandler)
  .openapi(putV1PaymentsIdRoute, putV1PaymentsIdRouteHandler)
  .openapi(getV1ProductTypesRoute, getV1ProductTypesRouteHandler)
  .openapi(getV1ProductsRoute, getV1ProductsRouteHandler)
  .openapi(postV1ProductsRoute, postV1ProductsRouteHandler)
  .openapi(putV1ProductsBatchRoute, putV1ProductsBatchRouteHandler)
  .openapi(deleteV1ProductsIdRoute, deleteV1ProductsIdRouteHandler)
  .openapi(getV1ProductsIdRoute, getV1ProductsIdRouteHandler)
  .openapi(putV1ProductsIdRoute, putV1ProductsIdRouteHandler)
  .openapi(getV1PurchasesRoute, getV1PurchasesRouteHandler)
  .openapi(postV1PurchasesRoute, postV1PurchasesRouteHandler)
  .openapi(putV1PurchasesBatchRoute, putV1PurchasesBatchRouteHandler)
  .openapi(deleteV1PurchasesIdRoute, deleteV1PurchasesIdRouteHandler)
  .openapi(getV1PurchasesIdRoute, getV1PurchasesIdRouteHandler)
  .openapi(putV1PurchasesIdRoute, putV1PurchasesIdRouteHandler)
  .openapi(getV1QuotesRoute, getV1QuotesRouteHandler)
  .openapi(postV1QuotesRoute, postV1QuotesRouteHandler)
  .openapi(putV1QuotesBatchRoute, putV1QuotesBatchRouteHandler)
  .openapi(putV1QuotesCloseIdRoute, putV1QuotesCloseIdRouteHandler)
  .openapi(
    postV1QuotesCreateQuoteWithGeneratingReferenceRoute,
    postV1QuotesCreateQuoteWithGeneratingReferenceRouteHandler,
  )
  .openapi(postV1QuotesGenerateSaleInvoiceRoute, postV1QuotesGenerateSaleInvoiceRouteHandler)
  .openapi(putV1QuotesReopenIdRoute, putV1QuotesReopenIdRouteHandler)
  .openapi(deleteV1QuotesIdRoute, deleteV1QuotesIdRouteHandler)
  .openapi(getV1QuotesIdRoute, getV1QuotesIdRouteHandler)
  .openapi(putV1QuotesIdRoute, putV1QuotesIdRouteHandler)
  .openapi(getV1SalesRoute, getV1SalesRouteHandler)
  .openapi(getV1SalesCreditNotesRoute, getV1SalesCreditNotesRouteHandler)
  .openapi(postV1SalesCreditNotesRoute, postV1SalesCreditNotesRouteHandler)
  .openapi(putV1SalesCreditNotesBatchRoute, putV1SalesCreditNotesBatchRouteHandler)
  .openapi(deleteV1SalesCreditNotesIdRoute, deleteV1SalesCreditNotesIdRouteHandler)
  .openapi(getV1SalesCreditNotesIdRoute, getV1SalesCreditNotesIdRouteHandler)
  .openapi(putV1SalesCreditNotesIdRoute, putV1SalesCreditNotesIdRouteHandler)
  .openapi(getV1SalesEntriesRoute, getV1SalesEntriesRouteHandler)
  .openapi(postV1SalesEntriesRoute, postV1SalesEntriesRouteHandler)
  .openapi(putV1SalesEntriesBatchRoute, putV1SalesEntriesBatchRouteHandler)
  .openapi(deleteV1SalesEntriesIdRoute, deleteV1SalesEntriesIdRouteHandler)
  .openapi(getV1SalesEntriesIdRoute, getV1SalesEntriesIdRouteHandler)
  .openapi(putV1SalesEntriesIdRoute, putV1SalesEntriesIdRouteHandler)
  .openapi(getV1SalesInvoicesRoute, getV1SalesInvoicesRouteHandler)
  .openapi(postV1SalesInvoicesRoute, postV1SalesInvoicesRouteHandler)
  .openapi(putV1SalesInvoicesBatchRoute, putV1SalesInvoicesBatchRouteHandler)
  .openapi(
    postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceRoute,
    postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceRouteHandler,
  )
  .openapi(deleteV1SalesInvoicesIdRoute, deleteV1SalesInvoicesIdRouteHandler)
  .openapi(getV1SalesInvoicesIdRoute, getV1SalesInvoicesIdRouteHandler)
  .openapi(putV1SalesInvoicesIdRoute, putV1SalesInvoicesIdRouteHandler)
  .openapi(getV1SalesRepsRoute, getV1SalesRepsRouteHandler)
  .openapi(postV1SalesRepsRoute, postV1SalesRepsRouteHandler)
  .openapi(putV1SalesRepsBatchRoute, putV1SalesRepsBatchRouteHandler)
  .openapi(deleteV1SalesRepsIdRoute, deleteV1SalesRepsIdRouteHandler)
  .openapi(getV1SalesRepsIdRoute, getV1SalesRepsIdRouteHandler)
  .openapi(putV1SalesRepsIdRoute, putV1SalesRepsIdRouteHandler)
  .openapi(getV1SuppliersRoute, getV1SuppliersRouteHandler)
  .openapi(postV1SuppliersRoute, postV1SuppliersRouteHandler)
  .openapi(putV1SuppliersBatchRoute, putV1SuppliersBatchRouteHandler)
  .openapi(deleteV1SuppliersIdRoute, deleteV1SuppliersIdRouteHandler)
  .openapi(getV1SuppliersIdRoute, getV1SuppliersIdRouteHandler)
  .openapi(putV1SuppliersIdRoute, putV1SuppliersIdRouteHandler)
  .openapi(getV1SuppliersItemIdAccountTransRoute, getV1SuppliersItemIdAccountTransRouteHandler)
  .openapi(getV1SuppliersItemIdOpeningBalanceRoute, getV1SuppliersItemIdOpeningBalanceRouteHandler)
  .openapi(
    getV1SuppliersItemIdOpeningBalanceListRoute,
    getV1SuppliersItemIdOpeningBalanceListRouteHandler,
  )
  .openapi(getV1UserDefinedFieldsRoute, getV1UserDefinedFieldsRouteHandler)
  .openapi(getV1VatAnalysisTypesRoute, getV1VatAnalysisTypesRouteHandler)
  .openapi(getV1VatCategoriesRoute, getV1VatCategoriesRouteHandler)
  .openapi(postV1VatCategoriesVatRatesRoute, postV1VatCategoriesVatRatesRouteHandler)
  .openapi(getV1VatRatesRoute, getV1VatRatesRouteHandler)
  .openapi(getV1VatTypesRoute, getV1VatTypesRouteHandler)

export default app
