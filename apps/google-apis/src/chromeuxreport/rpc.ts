import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1RecordsQueryHistoryRecord(
  args: InferRequestType<(typeof client.v1)['records:queryHistoryRecord']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['records:queryHistoryRecord'].$post(args, options))
}

export async function postV1RecordsQueryRecord(
  args: InferRequestType<(typeof client.v1)['records:queryRecord']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['records:queryRecord'].$post(args, options))
}
