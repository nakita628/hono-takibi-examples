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

export async function getV1NameReleases(
  args: InferRequestType<(typeof client.v1)[':name']['releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].releases.$get(args, options))
}

export async function postV1NameReleases(
  args: InferRequestType<(typeof client.v1)[':name']['releases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].releases.$post(args, options))
}

export async function getV1NameRulesets(
  args: InferRequestType<(typeof client.v1)[':name']['rulesets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].rulesets.$get(args, options))
}

export async function postV1NameRulesets(
  args: InferRequestType<(typeof client.v1)[':name']['rulesets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].rulesets.$post(args, options))
}

export async function getV1NameGetExecutable(
  args: InferRequestType<(typeof client.v1)[':name:getExecutable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:getExecutable'].$get(args, options))
}

export async function postV1NameTest(
  args: InferRequestType<(typeof client.v1)[':name:test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:test'].$post(args, options))
}
