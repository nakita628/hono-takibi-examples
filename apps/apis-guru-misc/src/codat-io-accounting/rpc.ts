import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.accountTransactions.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['accountTransactions'][':accountTransactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.accountTransactions[
      ':accountTransactionId'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.bankAccounts.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
      ':accountId'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.bankAccounts[
      ':accountId'
    ].bankTransactions.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.bills[
      ':billId'
    ].attachments.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.bills[':billId'].attachments[
      ':attachmentId'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownload(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['bills'][':billId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.bills[':billId'].attachments[
      ':attachmentId'
    ].download.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.customers[
      ':customerId'
    ].attachments.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.customers[
      ':customerId'
    ].attachments[':attachmentId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownload(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['customers'][':customerId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.customers[
      ':customerId'
    ].attachments[':attachmentId'].download.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCosts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directCosts.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directCosts[
      ':directCostId'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directCosts[
      ':directCostId'
    ].attachments.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directCosts[
      ':directCostId'
    ].attachments[':attachmentId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownload(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directCosts'][':directCostId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directCosts[
      ':directCostId'
    ].attachments[':attachmentId'].download.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directIncomes.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
      ':directIncomeId'
    ].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
      ':directIncomeId'
    ].attachments.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
      ':directIncomeId'
    ].attachments[':attachmentId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownload(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['directIncomes'][':directIncomeId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.directIncomes[
      ':directIncomeId'
    ].attachments[':attachmentId'].download.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.invoices[
      ':invoiceId'
    ].attachments.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.invoices[
      ':invoiceId'
    ].attachments[':attachmentId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownload(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['invoices'][':invoiceId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.invoices[
      ':invoiceId'
    ].attachments[':attachmentId'].download.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.suppliers[
      ':supplierId'
    ].attachments.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.suppliers[
      ':supplierId'
    ].attachments[':attachmentId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownload(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['suppliers'][':supplierId']['attachments'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.suppliers[
      ':supplierId'
    ].attachments[':attachmentId'].download.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataTransfers(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.transfers.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['data']['transfers'][':transferId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].data.transfers[':transferId'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.bankAccounts.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bankAccounts'][':accountId']['bankTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.bankAccounts[
      ':accountId'
    ].bankTransactions.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillCreditNotes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billCreditNotes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.billCreditNotes.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPayments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['billPayments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.billPayments.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsBills(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['bills']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.bills.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['chartOfAccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.chartOfAccounts.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsCreditNotes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['creditNotes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.creditNotes.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomers(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['customers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.customers.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCosts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directCosts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.directCosts.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['directIncomes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.directIncomes.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoices(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['invoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.invoices.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsItems(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.items.$get(args, options),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournalEntries(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journalEntries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.journalEntries.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsJournals(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['journals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.journals.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsPayments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.payments.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrders(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['purchaseOrders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.purchaseOrders.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliers(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['suppliers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.suppliers.$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfers(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['options']['transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].options.transfers.$get(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.accounts.$post(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushBankAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.bankAccounts.$post(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':accountId']['bankTransactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.bankAccounts[
      ':accountId'
    ].bankTransactions.$post(args, options),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bankAccounts'][':bankAccountId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.bankAccounts[
      ':bankAccountId'
    ].$put(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.billCreditNotes.$post(
      args,
      options,
    ),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billCreditNotes'][':billCreditNoteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.billCreditNotes[
      ':billCreditNoteId'
    ].$put(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushBillPayments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.billPayments.$post(
      args,
      options,
    ),
  )
}

export async function deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['billPayments'][':billPaymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.billPayments[
      ':billPaymentId'
    ].$delete(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushBills(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.bills.$post(args, options),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.bills[':billId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.bills[':billId'].$delete(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['bills'][':billId']['attachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.bills[
      ':billId'
    ].attachments.$post(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushCreditNotes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.creditNotes.$post(
      args,
      options,
    ),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['creditNotes'][':creditNoteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.creditNotes[
      ':creditNoteId'
    ].$put(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushCustomers(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.customers.$post(args, options),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['customers'][':customerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.customers[':customerId'].$put(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushDirectCosts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.directCosts.$post(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachment(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directCosts'][':directCostId']['attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.directCosts[
      ':directCostId'
    ].attachment.$post(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.directIncomes.$post(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachment(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['directIncomes'][':directIncomeId']['attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.directIncomes[
      ':directIncomeId'
    ].attachment.$post(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushInvoices(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.invoices.$post(args, options),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.invoices[':invoiceId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.invoices[':invoiceId'].$delete(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachment(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['invoices'][':invoiceId']['attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.invoices[
      ':invoiceId'
    ].attachment.$post(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushItems(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.items.$post(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushJournalEntries(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.journalEntries.$post(
      args,
      options,
    ),
  )
}

export async function deleteCompaniesCompanyIdConnectionsConnectionIdPushJournalEntriesJournalEntryId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journalEntries'][':journalEntryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.journalEntries[
      ':journalEntryId'
    ].$delete(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushJournals(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['journals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.journals.$post(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushPayments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['payments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.payments.$post(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrders(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.purchaseOrders.$post(
      args,
      options,
    ),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['purchaseOrders'][':purchaseOrderId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.purchaseOrders[
      ':purchaseOrderId'
    ].$put(args, options),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushSuppliers(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.suppliers.$post(args, options),
  )
}

export async function putCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['suppliers'][':supplierId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.suppliers[':supplierId'].$put(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdConnectionsConnectionIdPushTransfers(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['connections'][':connectionId']['push']['transfers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].connections[':connectionId'].push.transfers.$post(args, options),
  )
}

export async function getCompaniesCompanyIdDataAccounts(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.accounts.$get(args, options))
}

export async function getCompaniesCompanyIdDataAccountsAccountId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['accounts'][':accountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.accounts[':accountId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataBankAccountsAccountId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.bankAccounts[':accountId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataBankAccountsAccountIdTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bankAccounts'][':accountId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.bankAccounts[':accountId'].transactions.$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataBillCreditNotes(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billCreditNotes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.billCreditNotes.$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billCreditNotes'][':billCreditNoteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.billCreditNotes[':billCreditNoteId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataBillPayments(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['billPayments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.billPayments.$get(args, options))
}

export async function getCompaniesCompanyIdDataBillPaymentsBillPaymentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['billPayments'][':billPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.billPayments[':billPaymentId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataBills(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['bills']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.bills.$get(args, options))
}

export async function getCompaniesCompanyIdDataBillsBillId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['bills'][':billId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.bills[':billId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataCreditNotes(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['creditNotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.creditNotes.$get(args, options))
}

export async function getCompaniesCompanyIdDataCreditNotesCreditNoteId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['creditNotes'][':creditNoteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.creditNotes[':creditNoteId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataCustomers(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.customers.$get(args, options))
}

export async function getCompaniesCompanyIdDataCustomersCustomerId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['customers'][':customerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.customers[':customerId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataFinancialsBalanceSheet(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['balanceSheet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.financials.balanceSheet.$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataFinancialsCashFlowStatement(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['cashFlowStatement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.financials.cashFlowStatement.$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataFinancialsProfitAndLoss(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['financials']['profitAndLoss']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.financials.profitAndLoss.$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataInfo(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.info.$get(args, options))
}

export async function postCompaniesCompanyIdDataInfo(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.info.$post(args, options))
}

export async function getCompaniesCompanyIdDataInvoices(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.invoices.$get(args, options))
}

export async function getCompaniesCompanyIdDataInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.invoices[':invoiceId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataInvoicesInvoiceIdPdf(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['invoices'][':invoiceId']['pdf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.invoices[':invoiceId'].pdf.$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataItems(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.items.$get(args, options))
}

export async function getCompaniesCompanyIdDataItemsItemId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['items'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.items[':itemId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataJournalEntries(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['journalEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.journalEntries.$get(args, options))
}

export async function getCompaniesCompanyIdDataJournalEntriesJournalEntryId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['journalEntries'][':journalEntryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.journalEntries[':journalEntryId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataJournals(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['journals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.journals.$get(args, options))
}

export async function getCompaniesCompanyIdDataJournalsJournalId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['journals'][':journalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.journals[':journalId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataPaymentMethods(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['paymentMethods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.paymentMethods.$get(args, options))
}

export async function getCompaniesCompanyIdDataPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['paymentMethods'][':paymentMethodId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.paymentMethods[':paymentMethodId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataPayments(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.payments.$get(args, options))
}

export async function getCompaniesCompanyIdDataPaymentsPaymentId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['payments'][':paymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.payments[':paymentId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataPurchaseOrders(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['purchaseOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.purchaseOrders.$get(args, options))
}

export async function getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['purchaseOrders'][':purchaseOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.purchaseOrders[':purchaseOrderId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataSalesOrders(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['salesOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.salesOrders.$get(args, options))
}

export async function getCompaniesCompanyIdDataSalesOrdersSalesOrderId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['salesOrders'][':salesOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.salesOrders[':salesOrderId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataSuppliers(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['suppliers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.suppliers.$get(args, options))
}

export async function getCompaniesCompanyIdDataSuppliersSupplierId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['suppliers'][':supplierId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.suppliers[':supplierId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataTaxRates(
  args: InferRequestType<(typeof client.companies)[':companyId']['data']['taxRates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].data.taxRates.$get(args, options))
}

export async function getCompaniesCompanyIdDataTaxRatesTaxRateId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['taxRates'][':taxRateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.taxRates[':taxRateId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataTrackingCategories(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['trackingCategories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.trackingCategories.$get(args, options),
  )
}

export async function getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['data']['trackingCategories'][':trackingCategoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].data.trackingCategories[':trackingCategoryId'].$get(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdReportsAgedCreditor(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedCreditor']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].reports.agedCreditor.$get(args, options),
  )
}

export async function getCompaniesCompanyIdReportsAgedCreditorAvailable(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedCreditor']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].reports.agedCreditor.available.$get(args, options),
  )
}

export async function getCompaniesCompanyIdReportsAgedDebtor(
  args: InferRequestType<(typeof client.companies)[':companyId']['reports']['agedDebtor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].reports.agedDebtor.$get(args, options))
}

export async function getCompaniesCompanyIdReportsAgedDebtorAvailable(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['agedDebtor']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].reports.agedDebtor.available.$get(args, options),
  )
}
