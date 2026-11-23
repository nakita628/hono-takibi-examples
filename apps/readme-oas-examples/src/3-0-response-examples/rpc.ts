import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getExample(options?: ClientRequestOptions) {
  return await parseResponse(client.example.$get(undefined, options))
}

export async function getExamples(options?: ClientRequestOptions) {
  return await parseResponse(client.examples.$get(undefined, options))
}
