import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiBusinessItemId(
  args: InferRequestType<(typeof client.api.BusinessItem)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.BusinessItem[':id'].$get(args, options))
}

export async function getApiGovernmentOrganisation(options?: ClientRequestOptions) {
  return await parseResponse(client.api.GovernmentOrganisation.$get(undefined, options))
}

export async function getApiSeriesMembership(options?: ClientRequestOptions) {
  return await parseResponse(client.api.SeriesMembership.$get(undefined, options))
}

export async function getApiTreaty(
  args: InferRequestType<typeof client.api.Treaty.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Treaty.$get(args, options))
}

export async function getApiTreatyId(
  args: InferRequestType<(typeof client.api.Treaty)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Treaty[':id'].$get(args, options))
}

export async function getApiTreatyIdBusinessItems(
  args: InferRequestType<(typeof client.api.Treaty)[':id']['BusinessItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Treaty[':id'].BusinessItems.$get(args, options))
}
