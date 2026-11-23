import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta2InstanceApplySoftwareUpdate(
  args: InferRequestType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':instance:applySoftwareUpdate'].$post(args, options))
}

export async function postV1beta2InstanceRescheduleMaintenance(
  args: InferRequestType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':instance:rescheduleMaintenance'].$post(args, options))
}

export async function getV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$get(args, options))
}

export async function deleteV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$delete(args, options))
}

export async function patchV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$patch(args, options))
}

export async function getV1beta2NameLocations(
  args: InferRequestType<(typeof client.v1beta2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].locations.$get(args, options))
}

export async function getV1beta2NameOperations(
  args: InferRequestType<(typeof client.v1beta2)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].operations.$get(args, options))
}

export async function postV1beta2NameApplyParameters(
  args: InferRequestType<(typeof client.v1beta2)[':name:applyParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name:applyParameters'].$post(args, options))
}

export async function postV1beta2NameCancel(
  args: InferRequestType<(typeof client.v1beta2)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name:cancel'].$post(args, options))
}

export async function patchV1beta2NameUpdateParameters(
  args: InferRequestType<(typeof client.v1beta2)[':name:updateParameters']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name:updateParameters'].$patch(args, options))
}

export async function getV1beta2ParentInstances(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].instances.$get(args, options))
}

export async function postV1beta2ParentInstances(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':parent'].instances.$post(args, options))
}
