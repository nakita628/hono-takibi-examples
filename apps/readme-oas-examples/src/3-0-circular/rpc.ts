import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnything(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.$get(undefined, options))
}
