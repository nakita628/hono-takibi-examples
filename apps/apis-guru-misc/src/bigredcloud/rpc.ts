import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Accounts(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.accounts.$get(undefined, options))
}

export async function getV1AnalysisCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.analysisCategories.$get(undefined, options))
}

export async function getV1BankAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.bankAccounts.$get(undefined, options))
}

export async function postV1BankAccounts(
  args: InferRequestType<typeof client.v1.bankAccounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bankAccounts.$post(args, options))
}

export async function putV1BankAccountsBatch(
  args: InferRequestType<typeof client.v1.bankAccounts.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bankAccounts.batch.$put(args, options))
}

export async function getV1BankAccountsId(
  args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bankAccounts[':id'].$get(args, options))
}

export async function putV1BankAccountsId(
  args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bankAccounts[':id'].$put(args, options))
}

export async function deleteV1BankAccountsId(
  args: InferRequestType<(typeof client.v1.bankAccounts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bankAccounts[':id'].$delete(args, options))
}

export async function getV1BookTranTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.bookTranTypes.$get(undefined, options))
}

export async function getV1CashPayments(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.cashPayments.$get(undefined, options))
}

export async function postV1CashPayments(
  args: InferRequestType<typeof client.v1.cashPayments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashPayments.$post(args, options))
}

export async function putV1CashPaymentsBatch(
  args: InferRequestType<typeof client.v1.cashPayments.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashPayments.batch.$put(args, options))
}

export async function getV1CashPaymentsId(
  args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashPayments[':id'].$get(args, options))
}

export async function putV1CashPaymentsId(
  args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashPayments[':id'].$put(args, options))
}

export async function deleteV1CashPaymentsId(
  args: InferRequestType<(typeof client.v1.cashPayments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashPayments[':id'].$delete(args, options))
}

export async function getV1CashReceipts(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.cashReceipts.$get(undefined, options))
}

export async function postV1CashReceipts(
  args: InferRequestType<typeof client.v1.cashReceipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashReceipts.$post(args, options))
}

export async function putV1CashReceiptsBatch(
  args: InferRequestType<typeof client.v1.cashReceipts.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashReceipts.batch.$put(args, options))
}

export async function getV1CashReceiptsId(
  args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashReceipts[':id'].$get(args, options))
}

export async function putV1CashReceiptsId(
  args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashReceipts[':id'].$put(args, options))
}

export async function deleteV1CashReceiptsId(
  args: InferRequestType<(typeof client.v1.cashReceipts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cashReceipts[':id'].$delete(args, options))
}

export async function getV1CategoryTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.categoryTypes.$get(undefined, options))
}

export async function getV1CompanySettings(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.companySettings.$get(undefined, options))
}

export async function getV1CompanySetupConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.companySetupConfig.$get(undefined, options))
}

export async function getV1CompanySetupConfigGetCompanyOptions(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.companySetupConfig.getCompanyOptions.$get(undefined, options),
  )
}

export async function getV1CompanySetupConfigGetFinancialYear(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.companySetupConfig.getFinancialYear.$get(undefined, options))
}

export async function getV1Customers(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.customers.$get(undefined, options))
}

export async function postV1Customers(
  args: InferRequestType<typeof client.v1.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers.$post(args, options))
}

export async function putV1CustomersBatch(
  args: InferRequestType<typeof client.v1.customers.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers.batch.$put(args, options))
}

export async function getV1CustomersId(
  args: InferRequestType<(typeof client.v1.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':id'].$get(args, options))
}

export async function putV1CustomersId(
  args: InferRequestType<(typeof client.v1.customers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':id'].$put(args, options))
}

export async function deleteV1CustomersId(
  args: InferRequestType<(typeof client.v1.customers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':id'].$delete(args, options))
}

export async function getV1CustomersItemIdAccountTrans(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['accountTrans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':itemId'].accountTrans.$get(args, options))
}

export async function getV1CustomersItemIdOpeningBalance(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':itemId'].openingBalance.$get(args, options))
}

export async function getV1CustomersItemIdOpeningBalanceList(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['openingBalanceList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':itemId'].openingBalanceList.$get(args, options))
}

export async function getV1CustomersItemIdQuotes(
  args: InferRequestType<(typeof client.v1.customers)[':itemId']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':itemId'].quotes.$get(args, options))
}

export async function postV1EmailSendEmailStatement(
  args: InferRequestType<typeof client.v1.email.sendEmailStatement.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.sendEmailStatement.$post(args, options))
}

export async function postV1EmailSendQuote(
  args: InferRequestType<typeof client.v1.email.sendQuote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.sendQuote.$post(args, options))
}

export async function postV1EmailSendSalesInvoice(
  args: InferRequestType<typeof client.v1.email.sendSalesInvoice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.sendSalesInvoice.$post(args, options))
}

export async function getV1OwnerTypeGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.ownerTypeGroups.$get(undefined, options))
}

export async function getV1OwnerTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.ownerTypes.$get(undefined, options))
}

export async function getV1Payments(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.payments.$get(undefined, options))
}

export async function postV1Payments(
  args: InferRequestType<typeof client.v1.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.$post(args, options))
}

export async function putV1PaymentsBatch(
  args: InferRequestType<typeof client.v1.payments.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.batch.$put(args, options))
}

export async function getV1PaymentsId(
  args: InferRequestType<(typeof client.v1.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':id'].$get(args, options))
}

export async function putV1PaymentsId(
  args: InferRequestType<(typeof client.v1.payments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':id'].$put(args, options))
}

export async function deleteV1PaymentsId(
  args: InferRequestType<(typeof client.v1.payments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':id'].$delete(args, options))
}

export async function getV1ProductTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.productTypes.$get(undefined, options))
}

export async function getV1Products(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.products.$get(undefined, options))
}

export async function postV1Products(
  args: InferRequestType<typeof client.v1.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products.$post(args, options))
}

export async function putV1ProductsBatch(
  args: InferRequestType<typeof client.v1.products.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products.batch.$put(args, options))
}

export async function getV1ProductsId(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':id'].$get(args, options))
}

export async function putV1ProductsId(
  args: InferRequestType<(typeof client.v1.products)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':id'].$put(args, options))
}

export async function deleteV1ProductsId(
  args: InferRequestType<(typeof client.v1.products)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':id'].$delete(args, options))
}

export async function getV1Purchases(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.purchases.$get(undefined, options))
}

export async function postV1Purchases(
  args: InferRequestType<typeof client.v1.purchases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.purchases.$post(args, options))
}

export async function putV1PurchasesBatch(
  args: InferRequestType<typeof client.v1.purchases.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.purchases.batch.$put(args, options))
}

export async function getV1PurchasesId(
  args: InferRequestType<(typeof client.v1.purchases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.purchases[':id'].$get(args, options))
}

export async function putV1PurchasesId(
  args: InferRequestType<(typeof client.v1.purchases)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.purchases[':id'].$put(args, options))
}

export async function deleteV1PurchasesId(
  args: InferRequestType<(typeof client.v1.purchases)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.purchases[':id'].$delete(args, options))
}

export async function getV1Quotes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.quotes.$get(undefined, options))
}

export async function postV1Quotes(
  args: InferRequestType<typeof client.v1.quotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes.$post(args, options))
}

export async function putV1QuotesBatch(
  args: InferRequestType<typeof client.v1.quotes.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes.batch.$put(args, options))
}

export async function putV1QuotesCloseId(
  args: InferRequestType<(typeof client.v1.quotes.close)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes.close[':id'].$put(args, options))
}

export async function postV1QuotesCreateQuoteWithGeneratingReference(
  args: InferRequestType<typeof client.v1.quotes.createQuoteWithGeneratingReference.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.quotes.createQuoteWithGeneratingReference.$post(args, options),
  )
}

export async function postV1QuotesGenerateSaleInvoice(
  args: InferRequestType<typeof client.v1.quotes.generateSaleInvoice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes.generateSaleInvoice.$post(args, options))
}

export async function putV1QuotesReopenId(
  args: InferRequestType<(typeof client.v1.quotes.reopen)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes.reopen[':id'].$put(args, options))
}

export async function getV1QuotesId(
  args: InferRequestType<(typeof client.v1.quotes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':id'].$get(args, options))
}

export async function putV1QuotesId(
  args: InferRequestType<(typeof client.v1.quotes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':id'].$put(args, options))
}

export async function deleteV1QuotesId(
  args: InferRequestType<(typeof client.v1.quotes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':id'].$delete(args, options))
}

export async function getV1Sales(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.sales.$get(undefined, options))
}

export async function getV1SalesCreditNotes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.salesCreditNotes.$get(undefined, options))
}

export async function postV1SalesCreditNotes(
  args: InferRequestType<typeof client.v1.salesCreditNotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesCreditNotes.$post(args, options))
}

export async function putV1SalesCreditNotesBatch(
  args: InferRequestType<typeof client.v1.salesCreditNotes.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesCreditNotes.batch.$put(args, options))
}

export async function getV1SalesCreditNotesId(
  args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesCreditNotes[':id'].$get(args, options))
}

export async function putV1SalesCreditNotesId(
  args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesCreditNotes[':id'].$put(args, options))
}

export async function deleteV1SalesCreditNotesId(
  args: InferRequestType<(typeof client.v1.salesCreditNotes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesCreditNotes[':id'].$delete(args, options))
}

export async function getV1SalesEntries(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.salesEntries.$get(undefined, options))
}

export async function postV1SalesEntries(
  args: InferRequestType<typeof client.v1.salesEntries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesEntries.$post(args, options))
}

export async function putV1SalesEntriesBatch(
  args: InferRequestType<typeof client.v1.salesEntries.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesEntries.batch.$put(args, options))
}

export async function getV1SalesEntriesId(
  args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesEntries[':id'].$get(args, options))
}

export async function putV1SalesEntriesId(
  args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesEntries[':id'].$put(args, options))
}

export async function deleteV1SalesEntriesId(
  args: InferRequestType<(typeof client.v1.salesEntries)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesEntries[':id'].$delete(args, options))
}

export async function getV1SalesInvoices(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.salesInvoices.$get(undefined, options))
}

export async function postV1SalesInvoices(
  args: InferRequestType<typeof client.v1.salesInvoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesInvoices.$post(args, options))
}

export async function putV1SalesInvoicesBatch(
  args: InferRequestType<typeof client.v1.salesInvoices.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesInvoices.batch.$put(args, options))
}

export async function postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReference(
  args: InferRequestType<
    typeof client.v1.salesInvoices.createSaleInvoiceWithGeneratingReference.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.salesInvoices.createSaleInvoiceWithGeneratingReference.$post(args, options),
  )
}

export async function getV1SalesInvoicesId(
  args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesInvoices[':id'].$get(args, options))
}

export async function putV1SalesInvoicesId(
  args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesInvoices[':id'].$put(args, options))
}

export async function deleteV1SalesInvoicesId(
  args: InferRequestType<(typeof client.v1.salesInvoices)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesInvoices[':id'].$delete(args, options))
}

export async function getV1SalesReps(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.salesReps.$get(undefined, options))
}

export async function postV1SalesReps(
  args: InferRequestType<typeof client.v1.salesReps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesReps.$post(args, options))
}

export async function putV1SalesRepsBatch(
  args: InferRequestType<typeof client.v1.salesReps.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesReps.batch.$put(args, options))
}

export async function getV1SalesRepsId(
  args: InferRequestType<(typeof client.v1.salesReps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesReps[':id'].$get(args, options))
}

export async function putV1SalesRepsId(
  args: InferRequestType<(typeof client.v1.salesReps)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesReps[':id'].$put(args, options))
}

export async function deleteV1SalesRepsId(
  args: InferRequestType<(typeof client.v1.salesReps)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesReps[':id'].$delete(args, options))
}

export async function getV1Suppliers(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.suppliers.$get(undefined, options))
}

export async function postV1Suppliers(
  args: InferRequestType<typeof client.v1.suppliers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.suppliers.$post(args, options))
}

export async function putV1SuppliersBatch(
  args: InferRequestType<typeof client.v1.suppliers.batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.suppliers.batch.$put(args, options))
}

export async function getV1SuppliersId(
  args: InferRequestType<(typeof client.v1.suppliers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.suppliers[':id'].$get(args, options))
}

export async function putV1SuppliersId(
  args: InferRequestType<(typeof client.v1.suppliers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.suppliers[':id'].$put(args, options))
}

export async function deleteV1SuppliersId(
  args: InferRequestType<(typeof client.v1.suppliers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.suppliers[':id'].$delete(args, options))
}

export async function getV1SuppliersItemIdAccountTrans(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['accountTrans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.suppliers[':itemId'].accountTrans.$get(args, options))
}

export async function getV1SuppliersItemIdOpeningBalance(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.suppliers[':itemId'].openingBalance.$get(args, options))
}

export async function getV1SuppliersItemIdOpeningBalanceList(
  args: InferRequestType<(typeof client.v1.suppliers)[':itemId']['openingBalanceList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.suppliers[':itemId'].openingBalanceList.$get(args, options))
}

export async function getV1UserDefinedFields(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.userDefinedFields.$get(undefined, options))
}

export async function getV1VatAnalysisTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.vatAnalysisTypes.$get(undefined, options))
}

export async function getV1VatCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.vatCategories.$get(undefined, options))
}

export async function postV1VatCategoriesVatRates(
  args: InferRequestType<typeof client.v1.vatCategories.vatRates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vatCategories.vatRates.$post(args, options))
}

export async function getV1VatRates(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.vatRates.$get(undefined, options))
}

export async function getV1VatTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.vatTypes.$get(undefined, options))
}
