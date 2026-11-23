import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1NameLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].locations.$get(args, options))
}

export async function postV1beta1NamePause(
  args: InferRequestType<(typeof client.v1beta1)[':name:pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:pause'].$post(args, options))
}

export async function postV1beta1NameResume(
  args: InferRequestType<(typeof client.v1beta1)[':name:resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:resume'].$post(args, options))
}

export async function postV1beta1NameRun(
  args: InferRequestType<(typeof client.v1beta1)[':name:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:run'].$post(args, options))
}

export async function getV1beta1ParentJobs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].jobs.$get(args, options))
}

export async function postV1beta1ParentJobs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].jobs.$post(args, options))
}
