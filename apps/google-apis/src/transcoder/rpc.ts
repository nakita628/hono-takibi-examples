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

export async function getV1ParentJobTemplates(
  args: InferRequestType<(typeof client.v1)[':parent']['jobTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobTemplates.$get(args, options))
}

export async function postV1ParentJobTemplates(
  args: InferRequestType<(typeof client.v1)[':parent']['jobTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobTemplates.$post(args, options))
}

export async function getV1ParentJobs(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobs.$get(args, options))
}

export async function postV1ParentJobs(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobs.$post(args, options))
}
