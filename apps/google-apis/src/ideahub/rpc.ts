import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1alphaIdeas(
  args: InferRequestType<typeof client.v1alpha.ideas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha.ideas.$get(args, options))
}

export async function patchV1alphaName(
  args: InferRequestType<(typeof client.v1alpha)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':name'].$patch(args, options))
}

export async function postV1alphaParentIdeaActivities(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['ideaActivities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].ideaActivities.$post(args, options))
}

export async function getV1alphaParentIdeas(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['ideas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].ideas.$get(args, options))
}

export async function getV1alphaParentLocales(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['locales']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha[':parent'].locales.$get(args, options))
}
