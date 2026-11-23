import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getForecastSettings202609ForecastTypes(options?: ClientRequestOptions) {
  return await parseResponse(
    client['forecast-settings']['2026-09']['forecast-types'].$get(undefined, options),
  )
}

export async function getForecastSettings202609ForecastTypesForecastTypeId(
  args: InferRequestType<
    (typeof client)['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['forecast-settings']['2026-09']['forecast-types'][':forecastTypeId'].$get(args, options),
  )
}
