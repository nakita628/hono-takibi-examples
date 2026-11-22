import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function getJobs(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$get(args, options))
}

export async function postJobs(
  args: InferRequestType<typeof client.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$post(args, options))
}

export async function getJobsId(
  args: InferRequestType<(typeof client.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].$get(args, options))
}

export async function deleteJobsId(
  args: InferRequestType<(typeof client.jobs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].$delete(args, options))
}

export async function getJobsIdCaptions(
  args: InferRequestType<(typeof client.jobs)[':id']['captions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].captions.$get(args, options))
}

export async function getJobsIdTranscript(
  args: InferRequestType<(typeof client.jobs)[':id']['transcript']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].transcript.$get(args, options))
}
