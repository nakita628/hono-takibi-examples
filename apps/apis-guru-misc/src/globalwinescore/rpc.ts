import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGlobalwinescoresIndex(
  args: InferRequestType<typeof client.globalwinescores.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.globalwinescores.index.$get(args, options))
}

export async function getGlobalwinescoresLatestIndex(
  args: InferRequestType<typeof client.globalwinescores.latest.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.globalwinescores.latest.index.$get(args, options))
}
