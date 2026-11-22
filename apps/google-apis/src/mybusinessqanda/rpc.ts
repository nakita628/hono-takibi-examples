import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function deleteV1NameAnswersDelete(
  args: InferRequestType<(typeof client.v1)[':name']['answers:delete']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name']['answers:delete'].$delete(args, options))
}

export async function getV1Parent(
  args: InferRequestType<(typeof client.v1)[':parent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].$get(args, options))
}

export async function postV1Parent(
  args: InferRequestType<(typeof client.v1)[':parent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].$post(args, options))
}

export async function getV1ParentAnswers(
  args: InferRequestType<(typeof client.v1)[':parent']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].answers.$get(args, options))
}

export async function postV1ParentAnswersUpsert(
  args: InferRequestType<(typeof client.v1)[':parent']['answers:upsert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['answers:upsert'].$post(args, options))
}
