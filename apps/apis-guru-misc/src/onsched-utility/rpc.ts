import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getUtilityV1HealthHeartbeat(options?: ClientRequestOptions) {
  return await parseResponse(client.utility.v1.health.heartbeat.$get(undefined, options))
}

export async function getUtilityV1HealthThreadinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.utility.v1.health.threadinfo.$get(undefined, options))
}
