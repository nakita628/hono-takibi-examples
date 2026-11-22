import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getNames(options?: ClientRequestOptions) {
  return await parseResponse(client.names.$get(undefined, options))
}
