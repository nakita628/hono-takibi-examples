import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDataIpGeolocationFull(
  args: InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data['ip-geolocation-full'].$get(args, options))
}

export async function getDataIpGeolocationWithConfidence(
  args: InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data['ip-geolocation-with-confidence'].$get(args, options))
}
