import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiPlugins(options?: ClientRequestOptions) {
  return await parseResponse(client.api.plugins.$get(undefined, options))
}

export async function getPlugins(options?: ClientRequestOptions) {
  return await parseResponse(client.plugins.$get(undefined, options))
}
