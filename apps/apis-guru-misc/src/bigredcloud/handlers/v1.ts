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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalysisCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BankAccountsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BookTranTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CashPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CashPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CashPaymentsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CashPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CashPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CashPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CashReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CashReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CashReceiptsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CashReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CashReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CashReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoryTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanySetupConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanySetupConfigGetCompanyOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanySetupConfigGetFinancialYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersItemIdAccountTransRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersItemIdOpeningBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersItemIdOpeningBalanceListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersItemIdQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailSendEmailStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailSendQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailSendSalesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OwnerTypeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OwnerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PurchasesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1QuotesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1QuotesCloseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesCreateQuoteWithGeneratingReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QuotesGenerateSaleInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1QuotesReopenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1QuotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesCreditNotesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesCreditNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesEntriesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesInvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesRepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesRepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesRepsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesRepsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesRepsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesRepsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SuppliersBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersItemIdAccountTransRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersItemIdOpeningBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersItemIdOpeningBalanceListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserDefinedFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VatAnalysisTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VatCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VatCategoriesVatRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VatRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VatTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
