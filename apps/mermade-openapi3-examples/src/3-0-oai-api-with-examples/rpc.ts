import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getV2(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.$get(undefined, options))
}
