import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBulkLookup(
  args: InferRequestType<typeof client.BulkLookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BulkLookup.$get(args, options))
}

export async function getCountry(
  args: InferRequestType<typeof client.Country.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Country.$get(args, options))
}

export async function getGeoIP(
  args: InferRequestType<typeof client.GeoIP.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GeoIP.$get(args, options))
}

export async function getIPLookup(
  args: InferRequestType<typeof client.IPLookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.IPLookup.$get(args, options))
}

export async function getBadWords(
  args: InferRequestType<typeof client.badWords.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.badWords.$get(args, options))
}
