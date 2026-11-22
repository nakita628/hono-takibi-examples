import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDataDivisionsGroupedbyparty(
  args: InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.Divisions.groupedbyparty.$get(args, options))
}

export async function getDataDivisionsMembervoting(
  args: InferRequestType<typeof client.data.Divisions.membervoting.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.Divisions.membervoting.$get(args, options))
}

export async function getDataDivisionsSearch(
  args: InferRequestType<typeof client.data.Divisions.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.Divisions.search.$get(args, options))
}

export async function getDataDivisionsSearchTotalResults(
  args: InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.Divisions.searchTotalResults.$get(args, options))
}

export async function getDataDivisionsDivisionId(
  args: InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.Divisions[':divisionId'].$get(args, options))
}
