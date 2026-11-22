import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$get(args, options))
}

export async function putAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$put(args, options))
}

export async function deleteAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$delete(args, options))
}

export async function getAccountsIdTransactions(
  args: InferRequestType<(typeof client.accounts)[':id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].transactions.$get(args, options))
}

export async function getAttachmentsId(
  args: InferRequestType<(typeof client.attachments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':id'].$get(args, options))
}

export async function putAttachmentsId(
  args: InferRequestType<(typeof client.attachments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':id'].$put(args, options))
}

export async function deleteAttachmentsId(
  args: InferRequestType<(typeof client.attachments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':id'].$delete(args, options))
}

export async function getCategoriesId(
  args: InferRequestType<(typeof client.categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':id'].$get(args, options))
}

export async function putCategoriesId(
  args: InferRequestType<(typeof client.categories)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':id'].$put(args, options))
}

export async function deleteCategoriesId(
  args: InferRequestType<(typeof client.categories)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':id'].$delete(args, options))
}

export async function postCategoriesIdCategoryRules(
  args: InferRequestType<(typeof client.categories)[':id']['category_rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':id'].category_rules.$post(args, options))
}

export async function getCategoriesIdTransactions(
  args: InferRequestType<(typeof client.categories)[':id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':id'].transactions.$get(args, options))
}

export async function getCurrencies(options?: ClientRequestOptions) {
  return await parseResponse(client.currencies.$get(undefined, options))
}

export async function getCurrenciesId(
  args: InferRequestType<(typeof client.currencies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.currencies[':id'].$get(args, options))
}

export async function getEventsId(
  args: InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].$get(args, options))
}

export async function putEventsId(
  args: InferRequestType<(typeof client.events)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].$put(args, options))
}

export async function deleteEventsId(
  args: InferRequestType<(typeof client.events)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].$delete(args, options))
}

export async function getInstitutionsId(
  args: InferRequestType<(typeof client.institutions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions[':id'].$get(args, options))
}

export async function putInstitutionsId(
  args: InferRequestType<(typeof client.institutions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions[':id'].$put(args, options))
}

export async function deleteInstitutionsId(
  args: InferRequestType<(typeof client.institutions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions[':id'].$delete(args, options))
}

export async function getInstitutionsIdAccounts(
  args: InferRequestType<(typeof client.institutions)[':id']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions[':id'].accounts.$get(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getScenariosIdEvents(
  args: InferRequestType<(typeof client.scenarios)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenarios[':id'].events.$get(args, options))
}

export async function postScenariosIdEvents(
  args: InferRequestType<(typeof client.scenarios)[':id']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenarios[':id'].events.$post(args, options))
}

export async function getTimeZones(options?: ClientRequestOptions) {
  return await parseResponse(client.time_zones.$get(undefined, options))
}

export async function getTransactionAccountsId(
  args: InferRequestType<(typeof client.transaction_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction_accounts[':id'].$get(args, options))
}

export async function putTransactionAccountsId(
  args: InferRequestType<(typeof client.transaction_accounts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction_accounts[':id'].$put(args, options))
}

export async function getTransactionAccountsIdTransactions(
  args: InferRequestType<(typeof client.transaction_accounts)[':id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction_accounts[':id'].transactions.$get(args, options))
}

export async function postTransactionAccountsIdTransactions(
  args: InferRequestType<(typeof client.transaction_accounts)[':id']['transactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction_accounts[':id'].transactions.$post(args, options))
}

export async function getTransactionsId(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].$get(args, options))
}

export async function putTransactionsId(
  args: InferRequestType<(typeof client.transactions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].$put(args, options))
}

export async function deleteTransactionsId(
  args: InferRequestType<(typeof client.transactions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].$delete(args, options))
}

export async function getTransactionsIdAttachments(
  args: InferRequestType<(typeof client.transactions)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].attachments.$get(args, options))
}

export async function postTransactionsIdAttachments(
  args: InferRequestType<(typeof client.transactions)[':id']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].attachments.$post(args, options))
}

export async function deleteTransactionsTransactionIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.transactions)[':transaction_id']['attachments'][':attachment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transactions[':transaction_id'].attachments[':attachment_id'].$delete(args, options),
  )
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function putUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$put(args, options))
}

export async function getUsersIdAccounts(
  args: InferRequestType<(typeof client.users)[':id']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].accounts.$get(args, options))
}

export async function putUsersIdAccounts(
  args: InferRequestType<(typeof client.users)[':id']['accounts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].accounts.$put(args, options))
}

export async function postUsersIdAccounts(
  args: InferRequestType<(typeof client.users)[':id']['accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].accounts.$post(args, options))
}

export async function getUsersIdAttachments(
  args: InferRequestType<(typeof client.users)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].attachments.$get(args, options))
}

export async function postUsersIdAttachments(
  args: InferRequestType<(typeof client.users)[':id']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].attachments.$post(args, options))
}

export async function getUsersIdBudget(
  args: InferRequestType<(typeof client.users)[':id']['budget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].budget.$get(args, options))
}

export async function getUsersIdBudgetSummary(
  args: InferRequestType<(typeof client.users)[':id']['budget_summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].budget_summary.$get(args, options))
}

export async function getUsersIdCategories(
  args: InferRequestType<(typeof client.users)[':id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].categories.$get(args, options))
}

export async function postUsersIdCategories(
  args: InferRequestType<(typeof client.users)[':id']['categories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].categories.$post(args, options))
}

export async function getUsersIdCategoryRules(
  args: InferRequestType<(typeof client.users)[':id']['category_rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].category_rules.$get(args, options))
}

export async function getUsersIdEvents(
  args: InferRequestType<(typeof client.users)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].events.$get(args, options))
}

export async function deleteUsersIdForecastCache(
  args: InferRequestType<(typeof client.users)[':id']['forecast_cache']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].forecast_cache.$delete(args, options))
}

export async function getUsersIdInstitutions(
  args: InferRequestType<(typeof client.users)[':id']['institutions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].institutions.$get(args, options))
}

export async function postUsersIdInstitutions(
  args: InferRequestType<(typeof client.users)[':id']['institutions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].institutions.$post(args, options))
}

export async function getUsersIdLabels(
  args: InferRequestType<(typeof client.users)[':id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].labels.$get(args, options))
}

export async function getUsersIdSavedSearches(
  args: InferRequestType<(typeof client.users)[':id']['saved_searches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].saved_searches.$get(args, options))
}

export async function getUsersIdTransactionAccounts(
  args: InferRequestType<(typeof client.users)[':id']['transaction_accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].transaction_accounts.$get(args, options))
}

export async function getUsersIdTransactions(
  args: InferRequestType<(typeof client.users)[':id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].transactions.$get(args, options))
}

export async function getUsersIdTrendAnalysis(
  args: InferRequestType<(typeof client.users)[':id']['trend_analysis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].trend_analysis.$get(args, options))
}
