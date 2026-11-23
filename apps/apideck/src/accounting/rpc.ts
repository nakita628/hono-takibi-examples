import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountingBalanceSheet(
  args: InferRequestType<(typeof client.accounting)['balance-sheet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['balance-sheet'].$get(args, options))
}

export async function getAccountingBills(
  args: InferRequestType<typeof client.accounting.bills.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.bills.$get(args, options))
}

export async function postAccountingBills(
  args: InferRequestType<typeof client.accounting.bills.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.bills.$post(args, options))
}

export async function getAccountingBillsId(
  args: InferRequestType<(typeof client.accounting.bills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.bills[':id'].$get(args, options))
}

export async function deleteAccountingBillsId(
  args: InferRequestType<(typeof client.accounting.bills)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.bills[':id'].$delete(args, options))
}

export async function patchAccountingBillsId(
  args: InferRequestType<(typeof client.accounting.bills)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.bills[':id'].$patch(args, options))
}

export async function getAccountingCompanyInfo(
  args: InferRequestType<(typeof client.accounting)['company-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['company-info'].$get(args, options))
}

export async function getAccountingCreditNotes(
  args: InferRequestType<(typeof client.accounting)['credit-notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['credit-notes'].$get(args, options))
}

export async function postAccountingCreditNotes(
  args: InferRequestType<(typeof client.accounting)['credit-notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['credit-notes'].$post(args, options))
}

export async function getAccountingCreditNotesId(
  args: InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['credit-notes'][':id'].$get(args, options))
}

export async function deleteAccountingCreditNotesId(
  args: InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['credit-notes'][':id'].$delete(args, options))
}

export async function patchAccountingCreditNotesId(
  args: InferRequestType<(typeof client.accounting)['credit-notes'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['credit-notes'][':id'].$patch(args, options))
}

export async function getAccountingCustomers(
  args: InferRequestType<typeof client.accounting.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers.$get(args, options))
}

export async function postAccountingCustomers(
  args: InferRequestType<typeof client.accounting.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers.$post(args, options))
}

export async function getAccountingCustomersId(
  args: InferRequestType<(typeof client.accounting.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers[':id'].$get(args, options))
}

export async function deleteAccountingCustomersId(
  args: InferRequestType<(typeof client.accounting.customers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers[':id'].$delete(args, options))
}

export async function patchAccountingCustomersId(
  args: InferRequestType<(typeof client.accounting.customers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.customers[':id'].$patch(args, options))
}

export async function getAccountingInvoiceItems(
  args: InferRequestType<(typeof client.accounting)['invoice-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['invoice-items'].$get(args, options))
}

export async function postAccountingInvoiceItems(
  args: InferRequestType<(typeof client.accounting)['invoice-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['invoice-items'].$post(args, options))
}

export async function getAccountingInvoiceItemsId(
  args: InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['invoice-items'][':id'].$get(args, options))
}

export async function deleteAccountingInvoiceItemsId(
  args: InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['invoice-items'][':id'].$delete(args, options))
}

export async function patchAccountingInvoiceItemsId(
  args: InferRequestType<(typeof client.accounting)['invoice-items'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['invoice-items'][':id'].$patch(args, options))
}

export async function getAccountingInvoices(
  args: InferRequestType<typeof client.accounting.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.invoices.$get(args, options))
}

export async function postAccountingInvoices(
  args: InferRequestType<typeof client.accounting.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.invoices.$post(args, options))
}

export async function getAccountingInvoicesId(
  args: InferRequestType<(typeof client.accounting.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.invoices[':id'].$get(args, options))
}

export async function deleteAccountingInvoicesId(
  args: InferRequestType<(typeof client.accounting.invoices)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.invoices[':id'].$delete(args, options))
}

export async function patchAccountingInvoicesId(
  args: InferRequestType<(typeof client.accounting.invoices)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.invoices[':id'].$patch(args, options))
}

export async function getAccountingJournalEntries(
  args: InferRequestType<(typeof client.accounting)['journal-entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['journal-entries'].$get(args, options))
}

export async function postAccountingJournalEntries(
  args: InferRequestType<(typeof client.accounting)['journal-entries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['journal-entries'].$post(args, options))
}

export async function getAccountingJournalEntriesId(
  args: InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['journal-entries'][':id'].$get(args, options))
}

export async function deleteAccountingJournalEntriesId(
  args: InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['journal-entries'][':id'].$delete(args, options))
}

export async function patchAccountingJournalEntriesId(
  args: InferRequestType<(typeof client.accounting)['journal-entries'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['journal-entries'][':id'].$patch(args, options))
}

export async function getAccountingLedgerAccounts(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['ledger-accounts'].$get(args, options))
}

export async function postAccountingLedgerAccounts(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['ledger-accounts'].$post(args, options))
}

export async function getAccountingLedgerAccountsId(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['ledger-accounts'][':id'].$get(args, options))
}

export async function deleteAccountingLedgerAccountsId(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['ledger-accounts'][':id'].$delete(args, options))
}

export async function patchAccountingLedgerAccountsId(
  args: InferRequestType<(typeof client.accounting)['ledger-accounts'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['ledger-accounts'][':id'].$patch(args, options))
}

export async function getAccountingPayments(
  args: InferRequestType<typeof client.accounting.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.payments.$get(args, options))
}

export async function postAccountingPayments(
  args: InferRequestType<typeof client.accounting.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.payments.$post(args, options))
}

export async function getAccountingPaymentsId(
  args: InferRequestType<(typeof client.accounting.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.payments[':id'].$get(args, options))
}

export async function deleteAccountingPaymentsId(
  args: InferRequestType<(typeof client.accounting.payments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.payments[':id'].$delete(args, options))
}

export async function patchAccountingPaymentsId(
  args: InferRequestType<(typeof client.accounting.payments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.payments[':id'].$patch(args, options))
}

export async function getAccountingProfitAndLoss(
  args: InferRequestType<(typeof client.accounting)['profit-and-loss']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['profit-and-loss'].$get(args, options))
}

export async function getAccountingSuppliers(
  args: InferRequestType<typeof client.accounting.suppliers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.suppliers.$get(args, options))
}

export async function postAccountingSuppliers(
  args: InferRequestType<typeof client.accounting.suppliers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.suppliers.$post(args, options))
}

export async function getAccountingSuppliersId(
  args: InferRequestType<(typeof client.accounting.suppliers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.suppliers[':id'].$get(args, options))
}

export async function deleteAccountingSuppliersId(
  args: InferRequestType<(typeof client.accounting.suppliers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.suppliers[':id'].$delete(args, options))
}

export async function patchAccountingSuppliersId(
  args: InferRequestType<(typeof client.accounting.suppliers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.suppliers[':id'].$patch(args, options))
}

export async function getAccountingTaxRates(
  args: InferRequestType<(typeof client.accounting)['tax-rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['tax-rates'].$get(args, options))
}

export async function postAccountingTaxRates(
  args: InferRequestType<(typeof client.accounting)['tax-rates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['tax-rates'].$post(args, options))
}

export async function getAccountingTaxRatesId(
  args: InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['tax-rates'][':id'].$get(args, options))
}

export async function deleteAccountingTaxRatesId(
  args: InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['tax-rates'][':id'].$delete(args, options))
}

export async function patchAccountingTaxRatesId(
  args: InferRequestType<(typeof client.accounting)['tax-rates'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting['tax-rates'][':id'].$patch(args, options))
}
