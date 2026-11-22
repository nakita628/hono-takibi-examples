import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getReportDefinitionReportId(
  args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reportDefinition[':reportId'].$get(args, options))
}

export async function putReportDefinitionReportId(
  args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reportDefinition[':reportId'].$put(args, options))
}

export async function deleteReportDefinitionReportId(
  args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reportDefinition[':reportId'].$delete(args, options))
}

export async function postImportApplicationUsage(
  args: InferRequestType<typeof client.importApplicationUsage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.importApplicationUsage.$post(args, options))
}

export async function getReportDefinition(
  args: InferRequestType<typeof client.reportDefinition.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reportDefinition.$get(args, options))
}

export async function postReportDefinition(
  args: InferRequestType<typeof client.reportDefinition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reportDefinition.$post(args, options))
}
