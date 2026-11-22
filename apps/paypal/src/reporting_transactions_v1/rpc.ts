import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ReportingTransactions(
  args: InferRequestType<typeof client.v1.reporting.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.transactions.$get(args, options))
}

export async function getV1ReportingBalances(
  args: InferRequestType<typeof client.v1.reporting.balances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.balances.$get(args, options))
}
