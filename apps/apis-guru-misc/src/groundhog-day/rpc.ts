import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.$get(undefined, options))
}

export async function getApiV1Groundhogs(
  args: InferRequestType<typeof client.api.v1.groundhogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.groundhogs.$get(args, options))
}

export async function getApiV1GroundhogsSlug(
  args: InferRequestType<(typeof client.api.v1.groundhogs)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.groundhogs[':slug'].$get(args, options))
}

export async function getApiV1Predictions(
  args: InferRequestType<typeof client.api.v1.predictions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.predictions.$get(args, options))
}

export async function getApiV1Spec(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.spec.$get(undefined, options))
}
