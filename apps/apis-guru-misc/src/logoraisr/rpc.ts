import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPreviewsFileIdIndex(
  args: InferRequestType<(typeof client.previews)[':file_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.previews[':file_id'].index.$get(args, options))
}

export async function getProcessesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.processes.index.$get(undefined, options))
}

export async function getProjectsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.projects.index.$get(undefined, options))
}

export async function postProjectsIndex(
  args: InferRequestType<typeof client.projects.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.index.$post(args, options))
}

export async function getProjectsProjectNumberIndex(
  args: InferRequestType<(typeof client.projects)[':project_number']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_number'].index.$get(args, options))
}

export async function getReportsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.reports.index.$get(undefined, options))
}

export async function postReportsIndex(
  args: InferRequestType<typeof client.reports.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.index.$post(args, options))
}

export async function getReportsReportNumberIndex(
  args: InferRequestType<(typeof client.reports)[':report_number']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':report_number'].index.$get(args, options))
}

export async function getResultsResultFileIdIndex(
  args: InferRequestType<(typeof client.results)[':result_file_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.results[':result_file_id'].index.$get(args, options))
}

export async function postUploadsIndex(
  args: InferRequestType<typeof client.uploads.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads.index.$post(args, options))
}
