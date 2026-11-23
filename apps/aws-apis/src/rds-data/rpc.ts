import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBatchExecute(
  args: InferRequestType<typeof client.BatchExecute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchExecute.$post(args, options))
}

export async function postBeginTransaction(
  args: InferRequestType<typeof client.BeginTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BeginTransaction.$post(args, options))
}

export async function postCommitTransaction(
  args: InferRequestType<typeof client.CommitTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CommitTransaction.$post(args, options))
}

export async function postExecuteSql(
  args: InferRequestType<typeof client.ExecuteSql.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ExecuteSql.$post(args, options))
}

export async function postExecute(
  args: InferRequestType<typeof client.Execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Execute.$post(args, options))
}

export async function postRollbackTransaction(
  args: InferRequestType<typeof client.RollbackTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RollbackTransaction.$post(args, options))
}
