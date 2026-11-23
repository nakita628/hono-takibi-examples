import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function getHealth(
  args: InferRequestType<typeof client.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.$get(args, options))
}

export async function postV0DataPath(
  args: InferRequestType<(typeof client.v0.data)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.data[':path'].$post(args, options))
}

export async function postV1Compile(
  args: InferRequestType<typeof client.v1.compile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.compile.$post(args, options))
}

export async function getV1Config(
  args: InferRequestType<typeof client.v1.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.config.$get(args, options))
}

export async function getV1DataPath(
  args: InferRequestType<(typeof client.v1.data)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data[':path'].$get(args, options))
}

export async function putV1DataPath(
  args: InferRequestType<(typeof client.v1.data)[':path']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data[':path'].$put(args, options))
}

export async function postV1DataPath(
  args: InferRequestType<(typeof client.v1.data)[':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data[':path'].$post(args, options))
}

export async function deleteV1DataPath(
  args: InferRequestType<(typeof client.v1.data)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data[':path'].$delete(args, options))
}

export async function patchV1DataPath(
  args: InferRequestType<(typeof client.v1.data)[':path']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data[':path'].$patch(args, options))
}

export async function getV1Policies(
  args: InferRequestType<typeof client.v1.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.policies.$get(args, options))
}

export async function getV1PoliciesId(
  args: InferRequestType<(typeof client.v1.policies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.policies[':id'].$get(args, options))
}

export async function putV1PoliciesId(
  args: InferRequestType<(typeof client.v1.policies)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.policies[':id'].$put(args, options))
}

export async function deleteV1PoliciesId(
  args: InferRequestType<(typeof client.v1.policies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.policies[':id'].$delete(args, options))
}

export async function getV1Query(
  args: InferRequestType<typeof client.v1.query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query.$get(args, options))
}

export async function postV1Query(
  args: InferRequestType<typeof client.v1.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query.$post(args, options))
}
