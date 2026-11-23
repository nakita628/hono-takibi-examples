import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCheckFormat(
  args: InferRequestType<(typeof client.check)[':format']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check[':format'].$post(args, options))
}

export async function postControlFormat(
  args: InferRequestType<(typeof client.control)[':format']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.control[':format'].$post(args, options))
}

export async function postNetworkUnblock(
  args: InferRequestType<(typeof client)['network-unblock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['network-unblock'].$post(args, options))
}

export async function postPsd2Format(
  args: InferRequestType<(typeof client.psd2)[':format']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.psd2[':format'].$post(args, options))
}

export async function getSearchFormat(
  args: InferRequestType<(typeof client.search)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search[':format'].$get(args, options))
}

export async function postFormat(
  args: InferRequestType<(typeof client)[':format']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].$post(args, options))
}
