import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEgm2008GeoidHeight(
  args: InferRequestType<typeof client.egm2008.geoid_height.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.egm2008.geoid_height.$get(args, options))
}

export async function getEgm2008GravityAnomaly(
  args: InferRequestType<typeof client.egm2008.gravity_anomaly.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.egm2008.gravity_anomaly.$get(args, options))
}
