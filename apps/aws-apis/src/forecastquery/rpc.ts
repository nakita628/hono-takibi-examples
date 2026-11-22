import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonForecastRuntimeQueryForecast(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryForecast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecastRuntime.QueryForecast'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonForecastRuntimeQueryWhatIfForecast(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast'].$post(args, options),
  )
}
