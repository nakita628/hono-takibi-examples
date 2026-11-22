import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1LocationFetchMultiDailyMetricsTimeSeries(
  args: InferRequestType<(typeof client.v1)[':location:fetchMultiDailyMetricsTimeSeries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':location:fetchMultiDailyMetricsTimeSeries'].$get(args, options),
  )
}

export async function getV1NameGetDailyMetricsTimeSeries(
  args: InferRequestType<(typeof client.v1)[':name:getDailyMetricsTimeSeries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:getDailyMetricsTimeSeries'].$get(args, options))
}

export async function getV1ParentSearchkeywordsImpressionsMonthly(
  args: InferRequestType<
    (typeof client.v1)[':parent']['searchkeywords']['impressions']['monthly']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].searchkeywords.impressions.monthly.$get(args, options),
  )
}
