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

export async function postV1NameRun(
  args: InferRequestType<(typeof client.v1)[':name:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:run'].$post(args, options))
}

export async function postV1NameStop(
  args: InferRequestType<(typeof client.v1)[':name:stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:stop'].$post(args, options))
}

export async function getV1ParentJobs(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobs.$get(args, options))
}

export async function getV1ParentPipelines(
  args: InferRequestType<(typeof client.v1)[':parent']['pipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].pipelines.$get(args, options))
}

export async function postV1ParentPipelines(
  args: InferRequestType<(typeof client.v1)[':parent']['pipelines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].pipelines.$post(args, options))
}
