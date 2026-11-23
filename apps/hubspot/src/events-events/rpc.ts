import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEventsEventOccurrences202609(
  args: InferRequestType<(typeof client.events)['event-occurrences']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['event-occurrences']['2026-09'].$get(args, options))
}

export async function getEventsEventOccurrences202609EventTypes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.events['event-occurrences']['2026-09']['event-types'].$get(undefined, options),
  )
}
