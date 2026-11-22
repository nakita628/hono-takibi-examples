import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postChangeStatus(
  args: InferRequestType<typeof client.changeStatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changeStatus.$post(args, options))
}

export async function postCheckBalance(
  args: InferRequestType<typeof client.checkBalance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checkBalance.$post(args, options))
}

export async function postIssue(
  args: InferRequestType<typeof client.issue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue.$post(args, options))
}

export async function postLoad(
  args: InferRequestType<typeof client.load.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.load.$post(args, options))
}

export async function postMergeBalance(
  args: InferRequestType<typeof client.mergeBalance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mergeBalance.$post(args, options))
}

export async function postVoidTransaction(
  args: InferRequestType<typeof client.voidTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voidTransaction.$post(args, options))
}
