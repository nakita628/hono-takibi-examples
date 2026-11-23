import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Countries(
  args: InferRequestType<typeof client.v1.countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.countries.$get(args, options))
}

export async function getV1CountriesCountryKey(
  args: InferRequestType<(typeof client.v1.countries)[':countryKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.countries[':countryKey'].$get(args, options))
}
