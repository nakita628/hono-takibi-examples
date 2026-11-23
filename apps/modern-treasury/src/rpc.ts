import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAccountCollectionFlows(
  args: InferRequestType<typeof client.api.account_collection_flows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.account_collection_flows.$get(args, options))
}

export async function postApiAccountCollectionFlows(
  args: InferRequestType<typeof client.api.account_collection_flows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.account_collection_flows.$post(args, options))
}

export async function getApiAccountCollectionFlowsId(
  args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.account_collection_flows[':id'].$get(args, options))
}

export async function patchApiAccountCollectionFlowsId(
  args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.account_collection_flows[':id'].$patch(args, options))
}

export async function getApiBulkRequests(
  args: InferRequestType<typeof client.api.bulk_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bulk_requests.$get(args, options))
}

export async function postApiBulkRequests(
  args: InferRequestType<typeof client.api.bulk_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bulk_requests.$post(args, options))
}

export async function getApiBulkRequestsId(
  args: InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bulk_requests[':id'].$get(args, options))
}

export async function getApiBulkResults(
  args: InferRequestType<typeof client.api.bulk_results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bulk_results.$get(args, options))
}

export async function getApiBulkResultsId(
  args: InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.bulk_results[':id'].$get(args, options))
}

export async function getApiCases(
  args: InferRequestType<typeof client.api.cases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cases.$get(args, options))
}

export async function getApiCasesId(
  args: InferRequestType<(typeof client.api.cases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cases[':id'].$get(args, options))
}

export async function getApiConnectionLegalEntities(
  args: InferRequestType<typeof client.api.connection_legal_entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connection_legal_entities.$get(args, options))
}

export async function postApiConnectionLegalEntities(
  args: InferRequestType<typeof client.api.connection_legal_entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connection_legal_entities.$post(args, options))
}

export async function getApiConnectionLegalEntitiesId(
  args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connection_legal_entities[':id'].$get(args, options))
}

export async function patchApiConnectionLegalEntitiesId(
  args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connection_legal_entities[':id'].$patch(args, options))
}

export async function getApiConnections(
  args: InferRequestType<typeof client.api.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.connections.$get(args, options))
}

export async function getApiCounterparties(
  args: InferRequestType<typeof client.api.counterparties.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.counterparties.$get(args, options))
}

export async function postApiCounterparties(
  args: InferRequestType<typeof client.api.counterparties.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.counterparties.$post(args, options))
}

export async function getApiCounterpartiesId(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.counterparties[':id'].$get(args, options))
}

export async function deleteApiCounterpartiesId(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.counterparties[':id'].$delete(args, options))
}

export async function patchApiCounterpartiesId(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.counterparties[':id'].$patch(args, options))
}

export async function postApiCounterpartiesIdCollectAccount(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.counterparties[':id'].collect_account.$post(args, options))
}

export async function getApiDocuments(
  args: InferRequestType<typeof client.api.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents.$get(args, options))
}

export async function postApiDocuments(
  args: InferRequestType<typeof client.api.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents.$post(args, options))
}

export async function getApiDocumentsId(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents[':id'].$get(args, options))
}

export async function getApiDocumentsIdDownload(
  args: InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents[':id'].download.$get(args, options))
}

export async function getApiEmbeddableFlows(
  args: InferRequestType<typeof client.api.embeddable_flows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.embeddable_flows.$get(args, options))
}

export async function postApiEmbeddableFlows(
  args: InferRequestType<typeof client.api.embeddable_flows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.embeddable_flows.$post(args, options))
}

export async function getApiEmbeddableFlowsId(
  args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.embeddable_flows[':id'].$get(args, options))
}

export async function patchApiEmbeddableFlowsId(
  args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.embeddable_flows[':id'].$patch(args, options))
}

export async function getApiEvents(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.events.$get(args, options))
}

export async function getApiEventsId(
  args: InferRequestType<(typeof client.api.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.events[':id'].$get(args, options))
}

export async function getApiExpectedPayments(
  args: InferRequestType<typeof client.api.expected_payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.expected_payments.$get(args, options))
}

export async function postApiExpectedPayments(
  args: InferRequestType<typeof client.api.expected_payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.expected_payments.$post(args, options))
}

export async function getApiExpectedPaymentsId(
  args: InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.expected_payments[':id'].$get(args, options))
}

export async function deleteApiExpectedPaymentsId(
  args: InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.expected_payments[':id'].$delete(args, options))
}

export async function patchApiExpectedPaymentsId(
  args: InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.expected_payments[':id'].$patch(args, options))
}

export async function getApiExternalAccounts(
  args: InferRequestType<typeof client.api.external_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.external_accounts.$get(args, options))
}

export async function postApiExternalAccounts(
  args: InferRequestType<typeof client.api.external_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.external_accounts.$post(args, options))
}

export async function getApiExternalAccountsId(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.external_accounts[':id'].$get(args, options))
}

export async function deleteApiExternalAccountsId(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.external_accounts[':id'].$delete(args, options))
}

export async function patchApiExternalAccountsId(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.external_accounts[':id'].$patch(args, options))
}

export async function postApiExternalAccountsIdCompleteVerification(
  args: InferRequestType<
    (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.external_accounts[':id'].complete_verification.$post(args, options),
  )
}

export async function postApiExternalAccountsIdVerify(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.external_accounts[':id'].verify.$post(args, options))
}

export async function getApiForeignExchangeQuotes(
  args: InferRequestType<typeof client.api.foreign_exchange_quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.foreign_exchange_quotes.$get(args, options))
}

export async function postApiForeignExchangeQuotes(
  args: InferRequestType<typeof client.api.foreign_exchange_quotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.foreign_exchange_quotes.$post(args, options))
}

export async function getApiForeignExchangeQuotesId(
  args: InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.foreign_exchange_quotes[':id'].$get(args, options))
}

export async function getApiHolds(
  args: InferRequestType<typeof client.api.holds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.holds.$get(args, options))
}

export async function postApiHolds(
  args: InferRequestType<typeof client.api.holds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.holds.$post(args, options))
}

export async function getApiHoldsId(
  args: InferRequestType<(typeof client.api.holds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.holds[':id'].$get(args, options))
}

export async function patchApiHoldsId(
  args: InferRequestType<(typeof client.api.holds)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.holds[':id'].$patch(args, options))
}

export async function postApiIdentifications(
  args: InferRequestType<typeof client.api.identifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.identifications.$post(args, options))
}

export async function getApiIdentificationsId(
  args: InferRequestType<(typeof client.api.identifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.identifications[':id'].$get(args, options))
}

export async function patchApiIdentificationsId(
  args: InferRequestType<(typeof client.api.identifications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.identifications[':id'].$patch(args, options))
}

export async function getApiIncomingPaymentDetails(
  args: InferRequestType<typeof client.api.incoming_payment_details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.incoming_payment_details.$get(args, options))
}

export async function getApiIncomingPaymentDetailsId(
  args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.incoming_payment_details[':id'].$get(args, options))
}

export async function patchApiIncomingPaymentDetailsId(
  args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.incoming_payment_details[':id'].$patch(args, options))
}

export async function getApiInternalAccounts(
  args: InferRequestType<typeof client.api.internal_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.internal_accounts.$get(args, options))
}

export async function postApiInternalAccounts(
  args: InferRequestType<typeof client.api.internal_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.internal_accounts.$post(args, options))
}

export async function getApiInternalAccountsId(
  args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.internal_accounts[':id'].$get(args, options))
}

export async function patchApiInternalAccountsId(
  args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.internal_accounts[':id'].$patch(args, options))
}

export async function postApiInternalAccountsIdRequestClosure(
  args: InferRequestType<(typeof client.api.internal_accounts)[':id']['request_closure']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.internal_accounts[':id'].request_closure.$post(args, options),
  )
}

export async function patchApiInternalAccountsInternalAccountIdAccountCapabilitiesId(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.internal_accounts[':internal_account_id'].account_capabilities[':id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiInternalAccountsInternalAccountIdBalanceReports(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.internal_accounts[':internal_account_id'].balance_reports.$get(args, options),
  )
}

export async function postApiInternalAccountsInternalAccountIdBalanceReports(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.internal_accounts[':internal_account_id'].balance_reports.$post(args, options),
  )
}

export async function getApiInternalAccountsInternalAccountIdBalanceReportsId(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$get(args, options),
  )
}

export async function deleteApiInternalAccountsInternalAccountIdBalanceReportsId(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiInvoices(
  args: InferRequestType<typeof client.api.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoices.$get(args, options))
}

export async function postApiInvoices(
  args: InferRequestType<typeof client.api.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoices.$post(args, options))
}

export async function getApiInvoicesId(
  args: InferRequestType<(typeof client.api.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoices[':id'].$get(args, options))
}

export async function patchApiInvoicesId(
  args: InferRequestType<(typeof client.api.invoices)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invoices[':id'].$patch(args, options))
}

export async function putApiInvoicesIdPaymentOrdersPaymentOrderId(
  args: InferRequestType<
    (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.invoices[':id'].payment_orders[':payment_order_id'].$put(args, options),
  )
}

export async function getApiInvoicesInvoiceIdInvoiceLineItems(
  args: InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.invoices[':invoice_id'].invoice_line_items.$get(args, options),
  )
}

export async function postApiInvoicesInvoiceIdInvoiceLineItems(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.invoices[':invoice_id'].invoice_line_items.$post(args, options),
  )
}

export async function getApiInvoicesInvoiceIdInvoiceLineItemsId(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.invoices[':invoice_id'].invoice_line_items[':id'].$get(args, options),
  )
}

export async function deleteApiInvoicesInvoiceIdInvoiceLineItemsId(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.invoices[':invoice_id'].invoice_line_items[':id'].$delete(args, options),
  )
}

export async function patchApiInvoicesInvoiceIdInvoiceLineItemsId(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.invoices[':invoice_id'].invoice_line_items[':id'].$patch(args, options),
  )
}

export async function getApiJournalEntries(
  args: InferRequestType<typeof client.api.journal_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.journal_entries.$get(args, options))
}

export async function getApiJournalEntriesId(
  args: InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.journal_entries[':id'].$get(args, options))
}

export async function getApiJournalReports(
  args: InferRequestType<typeof client.api.journal_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.journal_reports.$get(args, options))
}

export async function getApiJournalReportsId(
  args: InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.journal_reports[':id'].$get(args, options))
}

export async function patchApiJournalReportsId(
  args: InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.journal_reports[':id'].$patch(args, options))
}

export async function getApiJournalSources(
  args: InferRequestType<typeof client.api.journal_sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.journal_sources.$get(args, options))
}

export async function getApiJournalSourcesId(
  args: InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.journal_sources[':id'].$get(args, options))
}

export async function getApiLedgerAccountBalanceMonitors(
  args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_balance_monitors.$get(args, options))
}

export async function postApiLedgerAccountBalanceMonitors(
  args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_balance_monitors.$post(args, options))
}

export async function getApiLedgerAccountBalanceMonitorsId(
  args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_balance_monitors[':id'].$get(args, options))
}

export async function deleteApiLedgerAccountBalanceMonitorsId(
  args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_account_balance_monitors[':id'].$delete(args, options),
  )
}

export async function patchApiLedgerAccountBalanceMonitorsId(
  args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_account_balance_monitors[':id'].$patch(args, options),
  )
}

export async function getApiLedgerAccountCategories(
  args: InferRequestType<typeof client.api.ledger_account_categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_categories.$get(args, options))
}

export async function postApiLedgerAccountCategories(
  args: InferRequestType<typeof client.api.ledger_account_categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_categories.$post(args, options))
}

export async function getApiLedgerAccountCategoriesId(
  args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_categories[':id'].$get(args, options))
}

export async function deleteApiLedgerAccountCategoriesId(
  args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_categories[':id'].$delete(args, options))
}

export async function patchApiLedgerAccountCategoriesId(
  args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_categories[':id'].$patch(args, options))
}

export async function putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryId(
  args: InferRequestType<
    (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_account_categories[':id'].ledger_account_categories[':sub_category_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryId(
  args: InferRequestType<
    (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_account_categories[':id'].ledger_account_categories[
      ':sub_category_id'
    ].$delete(args, options),
  )
}

export async function putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountId(
  args: InferRequestType<
    (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_account_categories[':id'].ledger_accounts[':ledger_account_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountId(
  args: InferRequestType<
    (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_account_categories[':id'].ledger_accounts[':ledger_account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiLedgerAccountSettlements(
  args: InferRequestType<typeof client.api.ledger_account_settlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_settlements.$get(args, options))
}

export async function postApiLedgerAccountSettlements(
  args: InferRequestType<typeof client.api.ledger_account_settlements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_settlements.$post(args, options))
}

export async function getApiLedgerAccountSettlementsId(
  args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_settlements[':id'].$get(args, options))
}

export async function patchApiLedgerAccountSettlementsId(
  args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_settlements[':id'].$patch(args, options))
}

export async function deleteApiLedgerAccountSettlementsIdLedgerEntries(
  args: InferRequestType<
    (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_account_settlements[':id'].ledger_entries.$delete(args, options),
  )
}

export async function patchApiLedgerAccountSettlementsIdLedgerEntries(
  args: InferRequestType<
    (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_account_settlements[':id'].ledger_entries.$patch(args, options),
  )
}

export async function postApiLedgerAccountStatements(
  args: InferRequestType<typeof client.api.ledger_account_statements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_statements.$post(args, options))
}

export async function getApiLedgerAccountStatementsId(
  args: InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_account_statements[':id'].$get(args, options))
}

export async function getApiLedgerAccounts(
  args: InferRequestType<typeof client.api.ledger_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_accounts.$get(args, options))
}

export async function postApiLedgerAccounts(
  args: InferRequestType<typeof client.api.ledger_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_accounts.$post(args, options))
}

export async function getApiLedgerAccountsId(
  args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_accounts[':id'].$get(args, options))
}

export async function deleteApiLedgerAccountsId(
  args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_accounts[':id'].$delete(args, options))
}

export async function patchApiLedgerAccountsId(
  args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_accounts[':id'].$patch(args, options))
}

export async function getApiLedgerEntries(
  args: InferRequestType<typeof client.api.ledger_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_entries.$get(args, options))
}

export async function getApiLedgerEntriesId(
  args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_entries[':id'].$get(args, options))
}

export async function patchApiLedgerEntriesId(
  args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_entries[':id'].$patch(args, options))
}

export async function getApiLedgerTransactionVersions(
  args: InferRequestType<typeof client.api.ledger_transaction_versions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_transaction_versions.$get(args, options))
}

export async function getApiLedgerTransactions(
  args: InferRequestType<typeof client.api.ledger_transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_transactions.$get(args, options))
}

export async function postApiLedgerTransactions(
  args: InferRequestType<typeof client.api.ledger_transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_transactions.$post(args, options))
}

export async function getApiLedgerTransactionsId(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_transactions[':id'].$get(args, options))
}

export async function patchApiLedgerTransactionsId(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_transactions[':id'].$patch(args, options))
}

export async function postApiLedgerTransactionsIdPartialPost(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['partial_post']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ledger_transactions[':id'].partial_post.$post(args, options),
  )
}

export async function postApiLedgerTransactionsIdReversal(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_transactions[':id'].reversal.$post(args, options))
}

export async function getApiLedgerTransactionsIdVersions(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledger_transactions[':id'].versions.$get(args, options))
}

export async function getApiLedgers(
  args: InferRequestType<typeof client.api.ledgers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledgers.$get(args, options))
}

export async function postApiLedgers(
  args: InferRequestType<typeof client.api.ledgers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledgers.$post(args, options))
}

export async function getApiLedgersId(
  args: InferRequestType<(typeof client.api.ledgers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledgers[':id'].$get(args, options))
}

export async function deleteApiLedgersId(
  args: InferRequestType<(typeof client.api.ledgers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledgers[':id'].$delete(args, options))
}

export async function patchApiLedgersId(
  args: InferRequestType<(typeof client.api.ledgers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ledgers[':id'].$patch(args, options))
}

export async function getApiLegalEntities(
  args: InferRequestType<typeof client.api.legal_entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.legal_entities.$get(args, options))
}

export async function postApiLegalEntities(
  args: InferRequestType<typeof client.api.legal_entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.legal_entities.$post(args, options))
}

export async function getApiLegalEntitiesId(
  args: InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.legal_entities[':id'].$get(args, options))
}

export async function patchApiLegalEntitiesId(
  args: InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.legal_entities[':id'].$patch(args, options))
}

export async function postApiLegalEntityAssociations(
  args: InferRequestType<typeof client.api.legal_entity_associations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.legal_entity_associations.$post(args, options))
}

export async function deleteApiLegalEntityAssociationsId(
  args: InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.legal_entity_associations[':id'].$delete(args, options))
}

export async function getApiPaymentActions(
  args: InferRequestType<typeof client.api.payment_actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_actions.$get(args, options))
}

export async function postApiPaymentActions(
  args: InferRequestType<typeof client.api.payment_actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_actions.$post(args, options))
}

export async function getApiPaymentActionsId(
  args: InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_actions[':id'].$get(args, options))
}

export async function patchApiPaymentActionsId(
  args: InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_actions[':id'].$patch(args, options))
}

export async function getApiPaymentFlows(
  args: InferRequestType<typeof client.api.payment_flows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_flows.$get(args, options))
}

export async function postApiPaymentFlows(
  args: InferRequestType<typeof client.api.payment_flows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_flows.$post(args, options))
}

export async function getApiPaymentFlowsId(
  args: InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_flows[':id'].$get(args, options))
}

export async function patchApiPaymentFlowsId(
  args: InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_flows[':id'].$patch(args, options))
}

export async function getApiPaymentOrders(
  args: InferRequestType<typeof client.api.payment_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_orders.$get(args, options))
}

export async function postApiPaymentOrders(
  args: InferRequestType<typeof client.api.payment_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_orders.$post(args, options))
}

export async function postApiPaymentOrdersCreateAsync(
  args: InferRequestType<typeof client.api.payment_orders.create_async.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_orders.create_async.$post(args, options))
}

export async function getApiPaymentOrdersId(
  args: InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_orders[':id'].$get(args, options))
}

export async function patchApiPaymentOrdersId(
  args: InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_orders[':id'].$patch(args, options))
}

export async function getApiPaymentOrdersPaymentOrderIdReversals(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.payment_orders[':payment_order_id'].reversals.$get(args, options),
  )
}

export async function postApiPaymentOrdersPaymentOrderIdReversals(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.payment_orders[':payment_order_id'].reversals.$post(args, options),
  )
}

export async function getApiPaymentOrdersPaymentOrderIdReversalsReversalId(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.payment_orders[':payment_order_id'].reversals[':reversal_id'].$get(args, options),
  )
}

export async function getApiPaymentReferences(
  args: InferRequestType<typeof client.api.payment_references.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_references.$get(args, options))
}

export async function getApiPaymentReferencesId(
  args: InferRequestType<(typeof client.api.payment_references)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payment_references[':id'].$get(args, options))
}

export async function getApiPing(options?: ClientRequestOptions) {
  return await parseResponse(client.api.ping.$get(undefined, options))
}

export async function getApiReturns(
  args: InferRequestType<typeof client.api.returns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.returns.$get(args, options))
}

export async function postApiReturns(
  args: InferRequestType<typeof client.api.returns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.returns.$post(args, options))
}

export async function getApiReturnsId(
  args: InferRequestType<(typeof client.api.returns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.returns[':id'].$get(args, options))
}

export async function patchApiSimulationsCasesIdResolve(
  args: InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.simulations.cases[':id'].resolve.$patch(args, options))
}

export async function postApiSimulationsIncomingPaymentDetailsCreateAsync(
  args: InferRequestType<typeof client.api.simulations.incoming_payment_details.create_async.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.simulations.incoming_payment_details.create_async.$post(args, options),
  )
}

export async function patchApiSimulationsLegalEntitiesIdUpdateStatus(
  args: InferRequestType<
    (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.simulations.legal_entities[':id'].update_status.$patch(args, options),
  )
}

export async function getApiTransactionLineItems(
  args: InferRequestType<typeof client.api.transaction_line_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transaction_line_items.$get(args, options))
}

export async function postApiTransactionLineItems(
  args: InferRequestType<typeof client.api.transaction_line_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transaction_line_items.$post(args, options))
}

export async function getApiTransactionLineItemsId(
  args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transaction_line_items[':id'].$get(args, options))
}

export async function deleteApiTransactionLineItemsId(
  args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transaction_line_items[':id'].$delete(args, options))
}

export async function getApiTransactions(
  args: InferRequestType<typeof client.api.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transactions.$get(args, options))
}

export async function postApiTransactions(
  args: InferRequestType<typeof client.api.transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transactions.$post(args, options))
}

export async function getApiTransactionsId(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transactions[':id'].$get(args, options))
}

export async function deleteApiTransactionsId(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transactions[':id'].$delete(args, options))
}

export async function patchApiTransactionsId(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transactions[':id'].$patch(args, options))
}

export async function getApiTransactionsTransactionIdLineItems(
  args: InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.transactions[':transaction_id'].line_items.$get(args, options),
  )
}

export async function getApiValidationsRoutingNumbers(
  args: InferRequestType<typeof client.api.validations.routing_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.validations.routing_numbers.$get(args, options))
}

export async function getApiVirtualAccountSettings(
  args: InferRequestType<typeof client.api.virtual_account_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtual_account_settings.$get(args, options))
}

export async function postApiVirtualAccountSettings(
  args: InferRequestType<typeof client.api.virtual_account_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtual_account_settings.$post(args, options))
}

export async function getApiVirtualAccounts(
  args: InferRequestType<typeof client.api.virtual_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtual_accounts.$get(args, options))
}

export async function postApiVirtualAccounts(
  args: InferRequestType<typeof client.api.virtual_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtual_accounts.$post(args, options))
}

export async function getApiVirtualAccountsId(
  args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtual_accounts[':id'].$get(args, options))
}

export async function deleteApiVirtualAccountsId(
  args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtual_accounts[':id'].$delete(args, options))
}

export async function patchApiVirtualAccountsId(
  args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.virtual_accounts[':id'].$patch(args, options))
}

export async function getApiAccountsTypeAccountIdAccountDetails(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':accounts_type'][':account_id'].account_details.$get(args, options),
  )
}

export async function postApiAccountsTypeAccountIdAccountDetails(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':accounts_type'][':account_id'].account_details.$post(args, options),
  )
}

export async function getApiAccountsTypeAccountIdAccountDetailsId(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':accounts_type'][':account_id'].account_details[':id'].$get(args, options),
  )
}

export async function deleteApiAccountsTypeAccountIdAccountDetailsId(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':accounts_type'][':account_id'].account_details[':id'].$delete(args, options),
  )
}

export async function getApiAccountsTypeAccountIdRoutingDetails(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':accounts_type'][':account_id'].routing_details.$get(args, options),
  )
}

export async function postApiAccountsTypeAccountIdRoutingDetails(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':accounts_type'][':account_id'].routing_details.$post(args, options),
  )
}

export async function getApiAccountsTypeAccountIdRoutingDetailsId(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':accounts_type'][':account_id'].routing_details[':id'].$get(args, options),
  )
}

export async function deleteApiAccountsTypeAccountIdRoutingDetailsId(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':accounts_type'][':account_id'].routing_details[':id'].$delete(args, options),
  )
}

export async function getApiDocumentableTypeDocumentableIdDocuments(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':documentable_type'][':documentable_id'].documents.$get(args, options),
  )
}

export async function postApiDocumentableTypeDocumentableIdDocuments(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':documentable_type'][':documentable_id'].documents.$post(args, options),
  )
}

export async function getApiDocumentableTypeDocumentableIdDocumentsId(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':documentable_type'][':documentable_id'].documents[':id'].$get(args, options),
  )
}

export async function getApiDocumentableTypeDocumentableIdDocumentsIdDownload(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':documentable_type'][':documentable_id'].documents[':id'].download.$get(
      args,
      options,
    ),
  )
}

export async function getApiItemizableTypeItemizableIdLineItems(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':itemizable_type'][':itemizable_id'].line_items.$get(args, options),
  )
}

export async function getApiItemizableTypeItemizableIdLineItemsId(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$get(args, options),
  )
}

export async function patchApiItemizableTypeItemizableIdLineItemsId(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$patch(args, options),
  )
}
