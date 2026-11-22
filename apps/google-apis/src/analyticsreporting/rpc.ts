import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV4ReportsBatchGet(
  args: InferRequestType<(typeof client.v4)['reports:batchGet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4['reports:batchGet'].$post(args, options))
}

export async function postV4UserActivitySearch(
  args: InferRequestType<(typeof client.v4)['userActivity:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4['userActivity:search'].$post(args, options))
}
