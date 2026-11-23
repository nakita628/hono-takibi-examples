import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.info.$get(undefined, options))
}

export async function getInfoEntry(
  args: InferRequestType<(typeof client.info)[':entry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info[':entry'].$get(args, options))
}

export async function getLinks(
  args: InferRequestType<typeof client.links.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.links.$get(args, options))
}

export async function getReferences(
  args: InferRequestType<typeof client.references.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.references.$get(args, options))
}

export async function getReferencesEntryId(
  args: InferRequestType<(typeof client.references)[':entry_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.references[':entry_id'].$get(args, options))
}

export async function getStructures(
  args: InferRequestType<typeof client.structures.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.structures.$get(args, options))
}

export async function getStructuresEntryId(
  args: InferRequestType<(typeof client.structures)[':entry_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.structures[':entry_id'].$get(args, options))
}

export async function getVersions(options?: ClientRequestOptions) {
  return await parseResponse(client.versions.$get(undefined, options))
}
