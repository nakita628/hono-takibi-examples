import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBulkMd5(options?: ClientRequestOptions) {
  return await parseResponse(client.bulk.md5.$post(undefined, options))
}

export async function postBulkSha1(options?: ClientRequestOptions) {
  return await parseResponse(client.bulk.sha1.$post(undefined, options))
}

export async function getChildrenSha1CountCursor(
  args: InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.children[':sha1'][':count'][':cursor'].$get(args, options))
}

export async function getInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.info.$get(undefined, options))
}

export async function getLookupMd5Md5(
  args: InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.md5[':md5'].$get(args, options))
}

export async function getLookupSha1Sha1(
  args: InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.sha1[':sha1'].$get(args, options))
}

export async function getLookupSha256Sha256(
  args: InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lookup.sha256[':sha256'].$get(args, options))
}

export async function getParentsSha1CountCursor(
  args: InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parents[':sha1'][':count'][':cursor'].$get(args, options))
}

export async function getSessionCreateName(
  args: InferRequestType<(typeof client.session.create)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session.create[':name'].$get(args, options))
}

export async function getSessionGetName(
  args: InferRequestType<(typeof client.session.get)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session.get[':name'].$get(args, options))
}

export async function getStatsTop(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.top.$get(undefined, options))
}
