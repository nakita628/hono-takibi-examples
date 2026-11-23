import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2betaName(
  args: InferRequestType<(typeof client.v2beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name'].$get(args, options))
}

export async function getV2betaNameLocations(
  args: InferRequestType<(typeof client.v2beta)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name'].locations.$get(args, options))
}

export async function getV2betaNameOperations(
  args: InferRequestType<(typeof client.v2beta)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name'].operations.$get(args, options))
}

export async function postV2betaNameCancel(
  args: InferRequestType<(typeof client.v2beta)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:cancel'].$post(args, options))
}

export async function postV2betaParentPipelinesRun(
  args: InferRequestType<(typeof client.v2beta)[':parent']['pipelines:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent']['pipelines:run'].$post(args, options))
}
