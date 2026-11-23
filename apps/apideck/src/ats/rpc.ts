import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAtsApplicants(
  args: InferRequestType<typeof client.ats.applicants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ats.applicants.$get(args, options))
}

export async function postAtsApplicants(
  args: InferRequestType<typeof client.ats.applicants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ats.applicants.$post(args, options))
}

export async function getAtsApplicantsId(
  args: InferRequestType<(typeof client.ats.applicants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ats.applicants[':id'].$get(args, options))
}

export async function getAtsJobs(
  args: InferRequestType<typeof client.ats.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ats.jobs.$get(args, options))
}

export async function getAtsJobsId(
  args: InferRequestType<(typeof client.ats.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ats.jobs[':id'].$get(args, options))
}
