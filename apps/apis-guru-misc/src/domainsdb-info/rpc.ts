import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDomainsSearch(
  args: InferRequestType<typeof client.domains.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.search.$get(args, options))
}

export async function getDomainsTldZoneId(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.tld[':zone_id'].$get(args, options))
}

export async function getDomainsTldZoneIdDownload(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.tld[':zone_id'].download.$get(args, options))
}

export async function getDomainsTldZoneIdSearch(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.tld[':zone_id'].search.$get(args, options))
}

export async function getDomainsUpdatesAdded(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.updates.added.$get(args, options))
}

export async function getDomainsUpdatesAddedDownload(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.updates.added.download.$get(args, options))
}

export async function getDomainsUpdatesDeleted(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.updates.deleted.$get(args, options))
}

export async function getDomainsUpdatesDeletedDownload(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.updates.deleted.download.$get(args, options))
}

export async function getDomainsUpdatesList(
  args: InferRequestType<typeof client.domains.updates.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.updates.list.$get(args, options))
}

export async function getInfoApi(
  args: InferRequestType<typeof client.info.api.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info.api.$get(args, options))
}

export async function getInfoStatIndex(
  args: InferRequestType<typeof client.info.stat.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info.stat.index.$get(args, options))
}

export async function getInfoStatZone(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info.stat[':zone'].$get(args, options))
}

export async function getInfoTldIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.info.tld.index.$get(undefined, options))
}

export async function getInfoTldZone(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info.tld[':zone'].$get(args, options))
}
