import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1betaBucketAddFirebase(
  args: InferRequestType<(typeof client.v1beta)[':bucket:addFirebase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':bucket:addFirebase'].$post(args, options))
}

export async function postV1betaBucketRemoveFirebase(
  args: InferRequestType<(typeof client.v1beta)[':bucket:removeFirebase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':bucket:removeFirebase'].$post(args, options))
}

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function getV1betaParentBuckets(
  args: InferRequestType<(typeof client.v1beta)[':parent']['buckets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].buckets.$get(args, options))
}
