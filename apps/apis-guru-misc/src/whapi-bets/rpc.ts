import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBetComplex(
  args: InferRequestType<typeof client.bet.complex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bet.complex.$post(args, options))
}

export async function postBetSingle(
  args: InferRequestType<typeof client.bet.single.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bet.single.$post(args, options))
}

export async function postBetslips(
  args: InferRequestType<typeof client.betslips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.betslips.$post(args, options))
}

export async function getFreebets(
  args: InferRequestType<typeof client.freebets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.freebets.$get(args, options))
}

export async function getHistory(
  args: InferRequestType<typeof client.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.$get(args, options))
}

export async function putBetIdCashin(
  args: InferRequestType<(typeof client)[':betId']['cashin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':betId'].cashin.$put(args, options))
}
