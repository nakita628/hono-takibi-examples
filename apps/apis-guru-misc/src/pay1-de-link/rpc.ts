import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1PaymentLinks(
  args: InferRequestType<(typeof client.v1)['payment-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-links'].$get(args, options))
}

export async function postV1PaymentLinks(
  args: InferRequestType<(typeof client.v1)['payment-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-links'].$post(args, options))
}

export async function getV1PaymentLinksLinkId(
  args: InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-links'][':linkId'].$get(args, options))
}

export async function putV1PaymentLinksLinkId(
  args: InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-links'][':linkId'].$put(args, options))
}
