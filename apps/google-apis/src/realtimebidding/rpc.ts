import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1alphaNameActivate(
  args: InferRequestType<(typeof client.v1alpha)[':name:activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':name:activate'].$post(args, options))
}

export async function postV1alphaNameArchive(
  args: InferRequestType<(typeof client.v1alpha)[':name:archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':name:archive'].$post(args, options))
}

export async function getV1alphaParentBiddingFunctions(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].biddingFunctions.$get(args, options))
}

export async function postV1alphaParentBiddingFunctions(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].biddingFunctions.$post(args, options))
}
