import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGrants(
  args: InferRequestType<typeof client.grants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grants.$get(args, options))
}

export async function postGrants(
  args: InferRequestType<typeof client.grants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grants.$post(args, options))
}

export async function getGrantsId(
  args: InferRequestType<(typeof client.grants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grants[':id'].$get(args, options))
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

export async function getTransfers(
  args: InferRequestType<typeof client.transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers.$get(args, options))
}

export async function postTransfers(
  args: InferRequestType<typeof client.transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers.$post(args, options))
}

export async function postTransfersApprove(
  args: InferRequestType<typeof client.transfers.approve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers.approve.$post(args, options))
}

export async function postTransfersCancel(
  args: InferRequestType<typeof client.transfers.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers.cancel.$post(args, options))
}

export async function getTransfersId(
  args: InferRequestType<(typeof client.transfers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers[':id'].$get(args, options))
}

export async function postTransfersTransferIdReturns(
  args: InferRequestType<(typeof client.transfers)[':transferId']['returns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers[':transferId'].returns.$post(args, options))
}

export async function postCashouts(
  args: InferRequestType<typeof client.cashouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cashouts.$post(args, options))
}
