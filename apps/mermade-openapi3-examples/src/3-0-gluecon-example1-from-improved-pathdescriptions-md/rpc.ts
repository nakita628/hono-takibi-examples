import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSpeakers(options?: ClientRequestOptions) {
  return await parseResponse(client.speakers.$get(undefined, options))
}

export async function postSpeakers(options?: ClientRequestOptions) {
  return await parseResponse(client.speakers.$post(undefined, options))
}

export async function deleteSpeakers(options?: ClientRequestOptions) {
  return await parseResponse(client.speakers.$delete(undefined, options))
}
