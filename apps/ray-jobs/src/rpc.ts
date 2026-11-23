import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.version.$get(undefined, options))
}

export async function getApiJobs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.jobs.$get(undefined, options))
}

export async function postApiJobs(
  args: InferRequestType<typeof client.api.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs.$post(args, options))
}

export async function getApiJobsSubmissionId(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':submission_id'].$get(args, options))
}

export async function deleteApiJobsSubmissionId(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':submission_id'].$delete(args, options))
}

export async function postApiJobsSubmissionIdStop(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':submission_id'].stop.$post(args, options))
}

export async function getApiJobsSubmissionIdLogs(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':submission_id'].logs.$get(args, options))
}

export async function getApiJobsSubmissionIdLogsTail(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['logs']['tail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':submission_id'].logs.tail.$get(args, options))
}
