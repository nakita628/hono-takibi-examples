import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1HashesSearch(
  args: InferRequestType<(typeof client.v1)['hashes:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['hashes:search'].$get(args, options))
}

export async function getV1ThreatListsComputeDiff(
  args: InferRequestType<(typeof client.v1)['threatLists:computeDiff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['threatLists:computeDiff'].$get(args, options))
}

export async function getV1UrisSearch(
  args: InferRequestType<(typeof client.v1)['uris:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['uris:search'].$get(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function getV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$get(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1ParentSubmissions(
  args: InferRequestType<(typeof client.v1)[':parent']['submissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].submissions.$post(args, options))
}
