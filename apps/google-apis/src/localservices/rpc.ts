import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AccountReportsSearch(
  args: InferRequestType<(typeof client.v1)['accountReports:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accountReports:search'].$get(args, options))
}

export async function getV1DetailedLeadReportsSearch(
  args: InferRequestType<(typeof client.v1)['detailedLeadReports:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['detailedLeadReports:search'].$get(args, options))
}
