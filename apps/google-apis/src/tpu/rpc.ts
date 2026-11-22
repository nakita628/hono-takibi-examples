import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function getV2NameLocations(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].locations.$get(args, options))
}

export async function getV2NameOperations(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].operations.$get(args, options))
}

export async function postV2NameCancel(
  args: InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:cancel'].$post(args, options))
}

export async function postV2NameGetGuestAttributes(
  args: InferRequestType<(typeof client.v2)[':name:getGuestAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:getGuestAttributes'].$post(args, options))
}

export async function postV2NameStart(
  args: InferRequestType<(typeof client.v2)[':name:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:start'].$post(args, options))
}

export async function postV2NameStop(
  args: InferRequestType<(typeof client.v2)[':name:stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:stop'].$post(args, options))
}

export async function getV2ParentAcceleratorTypes(
  args: InferRequestType<(typeof client.v2)[':parent']['acceleratorTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].acceleratorTypes.$get(args, options))
}

export async function getV2ParentNodes(
  args: InferRequestType<(typeof client.v2)[':parent']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].nodes.$get(args, options))
}

export async function postV2ParentNodes(
  args: InferRequestType<(typeof client.v2)[':parent']['nodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].nodes.$post(args, options))
}

export async function getV2ParentRuntimeVersions(
  args: InferRequestType<(typeof client.v2)[':parent']['runtimeVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].runtimeVersions.$get(args, options))
}

export async function postV2ParentGenerateServiceIdentity(
  args: InferRequestType<(typeof client.v2)[':parent:generateServiceIdentity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent:generateServiceIdentity'].$post(args, options))
}
