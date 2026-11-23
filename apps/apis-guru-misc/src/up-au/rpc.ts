import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function getAccountsAccountIdTransactions(
  args: InferRequestType<(typeof client.accounts)[':accountId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].transactions.$get(args, options))
}

export async function getAccountsId(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].$get(args, options))
}

export async function getCategories(
  args: InferRequestType<typeof client.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$get(args, options))
}

export async function getCategoriesId(
  args: InferRequestType<(typeof client.categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':id'].$get(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function getTransactionsId(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].$get(args, options))
}

export async function patchTransactionsTransactionIdRelationshipsCategory(
  args: InferRequestType<
    (typeof client.transactions)[':transactionId']['relationships']['category']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transactions[':transactionId'].relationships.category.$patch(args, options),
  )
}

export async function postTransactionsTransactionIdRelationshipsTags(
  args: InferRequestType<
    (typeof client.transactions)[':transactionId']['relationships']['tags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transactions[':transactionId'].relationships.tags.$post(args, options),
  )
}

export async function deleteTransactionsTransactionIdRelationshipsTags(
  args: InferRequestType<
    (typeof client.transactions)[':transactionId']['relationships']['tags']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transactions[':transactionId'].relationships.tags.$delete(args, options),
  )
}

export async function getUtilPing(options?: ClientRequestOptions) {
  return await parseResponse(client.util.ping.$get(undefined, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$get(args, options))
}

export async function deleteWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$delete(args, options))
}

export async function getWebhooksWebhookIdLogs(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].logs.$get(args, options))
}

export async function postWebhooksWebhookIdPing(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['ping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].ping.$post(args, options))
}
