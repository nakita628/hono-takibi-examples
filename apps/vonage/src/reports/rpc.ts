import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Reports(
  args: InferRequestType<typeof client.v2.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reports.$get(args, options))
}

export async function postV2Reports(
  args: InferRequestType<typeof client.v2.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reports.$post(args, options))
}

export async function getV2ReportsRecords(
  args: InferRequestType<typeof client.v2.reports.records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reports.records.$get(args, options))
}

export async function getV2ReportsReportId(
  args: InferRequestType<(typeof client.v2.reports)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reports[':report_id'].$get(args, options))
}

export async function deleteV2ReportsReportId(
  args: InferRequestType<(typeof client.v2.reports)[':report_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reports[':report_id'].$delete(args, options))
}

export async function getV3MediaFileId(
  args: InferRequestType<(typeof client.v3.media)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.media[':file_id'].$get(args, options))
}
