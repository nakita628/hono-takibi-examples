import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetPerformanceInsightsv20180227DescribeDimensionKeys(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys'].$post(args, options),
  )
}

export async function postXAmzTargetPerformanceInsightsv20180227GetDimensionKeyDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPerformanceInsightsv20180227GetResourceMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetPerformanceInsightsv20180227GetResourceMetrics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics'].$post(args, options),
  )
}

export async function postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceDimensions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetrics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics'].$post(
      args,
      options,
    ),
  )
}
