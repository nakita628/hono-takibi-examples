import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2alpha1PipelinesRun(
  args: InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha1['pipelines:run'].$post(args, options))
}

export async function postV2alpha1WorkersIdCheckIn(
  args: InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha1.workers[':id:checkIn'].$post(args, options))
}

export async function postV2alpha1IdCheckIn(
  args: InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha1[':id:checkIn'].$post(args, options))
}

export async function getV2alpha1Name(
  args: InferRequestType<(typeof client.v2alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha1[':name'].$get(args, options))
}

export async function postV2alpha1NameCancel(
  args: InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2alpha1[':name:cancel'].$post(args, options))
}
