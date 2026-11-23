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

export async function getV1NameConfigVersions(
  args: InferRequestType<(typeof client.v1)[':name']['configVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].configVersions.$get(args, options))
}

export async function getV1NameStates(
  args: InferRequestType<(typeof client.v1)[':name']['states']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].states.$get(args, options))
}

export async function postV1NameModifyCloudToDeviceConfig(
  args: InferRequestType<(typeof client.v1)[':name:modifyCloudToDeviceConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:modifyCloudToDeviceConfig'].$post(args, options))
}

export async function postV1NameSendCommandToDevice(
  args: InferRequestType<(typeof client.v1)[':name:sendCommandToDevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:sendCommandToDevice'].$post(args, options))
}

export async function getV1ParentDevices(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].devices.$get(args, options))
}

export async function postV1ParentDevices(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].devices.$post(args, options))
}

export async function getV1ParentRegistries(
  args: InferRequestType<(typeof client.v1)[':parent']['registries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].registries.$get(args, options))
}

export async function postV1ParentRegistries(
  args: InferRequestType<(typeof client.v1)[':parent']['registries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].registries.$post(args, options))
}

export async function postV1ParentBindDeviceToGateway(
  args: InferRequestType<(typeof client.v1)[':parent:bindDeviceToGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:bindDeviceToGateway'].$post(args, options))
}

export async function postV1ParentUnbindDeviceFromGateway(
  args: InferRequestType<(typeof client.v1)[':parent:unbindDeviceFromGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:unbindDeviceFromGateway'].$post(args, options))
}

export async function postV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$post(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
