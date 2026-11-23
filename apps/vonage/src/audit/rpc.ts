import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function optionsEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.events.$options(undefined, options))
}

export async function getEventsId(
  args: InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].$get(args, options))
}
