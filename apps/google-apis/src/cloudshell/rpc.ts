import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1EnvironmentAddPublicKey(
  args: InferRequestType<(typeof client.v1)[':environment:addPublicKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':environment:addPublicKey'].$post(args, options))
}

export async function postV1EnvironmentRemovePublicKey(
  args: InferRequestType<(typeof client.v1)[':environment:removePublicKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':environment:removePublicKey'].$post(args, options))
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

export async function postV1NameAuthorize(
  args: InferRequestType<(typeof client.v1)[':name:authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:authorize'].$post(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameStart(
  args: InferRequestType<(typeof client.v1)[':name:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:start'].$post(args, options))
}
