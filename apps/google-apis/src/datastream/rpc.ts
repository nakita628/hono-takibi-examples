import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1NameLocations(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].locations.$get(args, options))
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

export async function getV1NameFetchStaticIps(
  args: InferRequestType<(typeof client.v1)[':name:fetchStaticIps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:fetchStaticIps'].$get(args, options))
}

export async function postV1ObjectStartBackfillJob(
  args: InferRequestType<(typeof client.v1)[':object:startBackfillJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':object:startBackfillJob'].$post(args, options))
}

export async function postV1ObjectStopBackfillJob(
  args: InferRequestType<(typeof client.v1)[':object:stopBackfillJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':object:stopBackfillJob'].$post(args, options))
}

export async function getV1ParentConnectionProfiles(
  args: InferRequestType<(typeof client.v1)[':parent']['connectionProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].connectionProfiles.$get(args, options))
}

export async function postV1ParentConnectionProfiles(
  args: InferRequestType<(typeof client.v1)[':parent']['connectionProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].connectionProfiles.$post(args, options))
}

export async function postV1ParentConnectionProfilesDiscover(
  args: InferRequestType<(typeof client.v1)[':parent']['connectionProfiles:discover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent']['connectionProfiles:discover'].$post(args, options),
  )
}

export async function getV1ParentObjects(
  args: InferRequestType<(typeof client.v1)[':parent']['objects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].objects.$get(args, options))
}

export async function postV1ParentObjectsLookup(
  args: InferRequestType<(typeof client.v1)[':parent']['objects:lookup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['objects:lookup'].$post(args, options))
}

export async function getV1ParentPrivateConnections(
  args: InferRequestType<(typeof client.v1)[':parent']['privateConnections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].privateConnections.$get(args, options))
}

export async function postV1ParentPrivateConnections(
  args: InferRequestType<(typeof client.v1)[':parent']['privateConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].privateConnections.$post(args, options))
}

export async function getV1ParentRoutes(
  args: InferRequestType<(typeof client.v1)[':parent']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].routes.$get(args, options))
}

export async function postV1ParentRoutes(
  args: InferRequestType<(typeof client.v1)[':parent']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].routes.$post(args, options))
}

export async function getV1ParentStreams(
  args: InferRequestType<(typeof client.v1)[':parent']['streams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].streams.$get(args, options))
}

export async function postV1ParentStreams(
  args: InferRequestType<(typeof client.v1)[':parent']['streams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].streams.$post(args, options))
}
