import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Jobs(
  args: InferRequestType<typeof client.v1.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.$get(args, options))
}

export async function postV1Jobs(
  args: InferRequestType<typeof client.v1.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.$post(args, options))
}

export async function getV1JobsJobId(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs[':jobId'].$get(args, options))
}

export async function deleteV1JobsJobId(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs[':jobId'].$delete(args, options))
}

export async function getV1JobsJobIdReports(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs[':jobId'].reports.$get(args, options))
}

export async function getV1JobsJobIdReportsReportId(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs[':jobId'].reports[':reportId'].$get(args, options))
}

export async function getV1MediaResourceName(
  args: InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.media[':resourceName'].$get(args, options))
}

export async function getV1ReportTypes(
  args: InferRequestType<typeof client.v1.reportTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reportTypes.$get(args, options))
}
