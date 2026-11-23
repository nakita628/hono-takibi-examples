import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function postV1beta1NameMarkAccepted(
  args: InferRequestType<(typeof client.v1beta1)[':name:markAccepted']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:markAccepted'].$post(args, options))
}

export async function postV1beta1NameMarkClaimed(
  args: InferRequestType<(typeof client.v1beta1)[':name:markClaimed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:markClaimed'].$post(args, options))
}

export async function postV1beta1NameMarkDismissed(
  args: InferRequestType<(typeof client.v1beta1)[':name:markDismissed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:markDismissed'].$post(args, options))
}

export async function postV1beta1NameMarkFailed(
  args: InferRequestType<(typeof client.v1beta1)[':name:markFailed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:markFailed'].$post(args, options))
}

export async function postV1beta1NameMarkSucceeded(
  args: InferRequestType<(typeof client.v1beta1)[':name:markSucceeded']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:markSucceeded'].$post(args, options))
}

export async function getV1beta1ParentInsights(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].insights.$get(args, options))
}

export async function getV1beta1ParentRecommendations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].recommendations.$get(args, options))
}
