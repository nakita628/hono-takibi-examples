import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getReisezentren(
  args: InferRequestType<typeof client.reisezentren.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reisezentren.$get(args, options))
}

export async function getReisezentrenLocLatLon(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reisezentren.loc[':lat'][':lon'].$get(args, options))
}

export async function getReisezentrenLocLatLonDist(
  args: InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reisezentren.loc[':lat'][':lon'][':dist'].$get(args, options))
}

export async function getReisezentrenId(
  args: InferRequestType<(typeof client.reisezentren)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reisezentren[':id'].$get(args, options))
}
