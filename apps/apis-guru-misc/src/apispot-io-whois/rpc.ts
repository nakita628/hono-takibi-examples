import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBatch(options?: ClientRequestOptions) {
  return await parseResponse(client.batch.$get(undefined, options))
}

export async function postBatch(
  args: InferRequestType<typeof client.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.$post(args, options))
}

export async function getBatchId(
  args: InferRequestType<(typeof client.batch)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch[':id'].$get(args, options))
}

export async function deleteBatchId(
  args: InferRequestType<(typeof client.batch)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch[':id'].$delete(args, options))
}

export async function getDb(
  args: InferRequestType<typeof client.db.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.db.$get(args, options))
}

export async function getDomainsDomainCheck(
  args: InferRequestType<(typeof client.domains)[':domain']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain'].check.$get(args, options))
}

export async function getDomainsDomainRank(
  args: InferRequestType<(typeof client.domains)[':domain']['rank']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain'].rank.$get(args, options))
}

export async function getDomainsDomainWhois(
  args: InferRequestType<(typeof client.domains)[':domain']['whois']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain'].whois.$get(args, options))
}
