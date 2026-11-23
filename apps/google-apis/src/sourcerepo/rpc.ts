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

export async function getV1NameConfig(
  args: InferRequestType<(typeof client.v1)[':name']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].config.$get(args, options))
}

export async function patchV1NameConfig(
  args: InferRequestType<(typeof client.v1)[':name']['config']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].config.$patch(args, options))
}

export async function getV1NameRepos(
  args: InferRequestType<(typeof client.v1)[':name']['repos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].repos.$get(args, options))
}

export async function postV1NameSync(
  args: InferRequestType<(typeof client.v1)[':name:sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:sync'].$post(args, options))
}

export async function postV1ParentRepos(
  args: InferRequestType<(typeof client.v1)[':parent']['repos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].repos.$post(args, options))
}

export async function getV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$get(args, options))
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
