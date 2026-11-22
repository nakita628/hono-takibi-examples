import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getTest(options?: ClientRequestOptions) {
  return await parseResponse(client.test.$get(undefined, options))
}

export async function getTest2(options?: ClientRequestOptions) {
  return await parseResponse(client.test2.$get(undefined, options))
}
