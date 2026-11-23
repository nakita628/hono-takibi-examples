import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountNumbers(
  args: InferRequestType<typeof client.account.numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.numbers.$get(args, options))
}

export async function postNumberBuy(
  args: InferRequestType<typeof client.number.buy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number.buy.$post(args, options))
}

export async function postNumberCancel(
  args: InferRequestType<typeof client.number.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number.cancel.$post(args, options))
}

export async function getNumberSearch(
  args: InferRequestType<typeof client.number.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number.search.$get(args, options))
}

export async function postNumberUpdate(
  args: InferRequestType<typeof client.number.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.number.update.$post(args, options))
}
