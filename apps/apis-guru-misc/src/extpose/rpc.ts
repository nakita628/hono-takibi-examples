import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getUserExtensions(options?: ClientRequestOptions) {
  return await parseResponse(client['user-extensions'].$get(undefined, options))
}
