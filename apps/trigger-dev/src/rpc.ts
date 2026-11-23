import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiV1Events(
  args: InferRequestType<typeof client.api.v1.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.events.$post(args, options))
}

export async function postApiV3Batches(
  args: InferRequestType<typeof client.api.v3.batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.batches.$post(args, options))
}

export async function postApiV3BatchesBatchIdItems(
  args: InferRequestType<(typeof client.api.v3.batches)[':batchId']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.batches[':batchId'].items.$post(args, options))
}
