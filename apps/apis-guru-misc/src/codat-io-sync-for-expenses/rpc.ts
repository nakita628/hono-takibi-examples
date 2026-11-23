import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCompaniesCompanyIdSyncExpensesConfig(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.config.$get(args, options),
  )
}

export async function postCompaniesCompanyIdSyncExpensesConfig(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.config.$post(args, options),
  )
}

export async function postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpense(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['connections']['partnerExpense']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.connections.partnerExpense.$post(args, options),
  )
}

export async function postCompaniesCompanyIdSyncExpensesDataExpenseTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['data']['expense-transactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.data['expense-transactions'].$post(args, options),
  )
}

export async function getCompaniesCompanyIdSyncExpensesMappingOptions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['mappingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.mappingOptions.$get(args, options),
  )
}

export async function postCompaniesCompanyIdSyncExpensesSyncs(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.syncs.$post(args, options),
  )
}

export async function getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatus(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['lastSuccessful']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.syncs.lastSuccessful.status.$get(args, options),
  )
}

export async function getCompaniesCompanyIdSyncExpensesSyncsLatestStatus(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['latest']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.syncs.latest.status.$get(args, options),
  )
}

export async function getCompaniesCompanyIdSyncExpensesSyncsListStatus(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs']['list']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.syncs.list.status.$get(args, options),
  )
}

export async function getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatus(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.syncs[':syncId'].status.$get(args, options),
  )
}

export async function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions.$get(args, options),
  )
}

export async function getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
      ':transactionId'
    ].$get(args, options),
  )
}

export async function postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachments(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['expenses']['syncs'][':syncId']['transactions'][':transactionId']['attachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.expenses.syncs[':syncId'].transactions[
      ':transactionId'
    ].attachments.$post(args, options),
  )
}
