import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSMPMeteringServiceBatchMeterUsage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMPMeteringServiceMeterUsage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSMPMeteringService.MeterUsage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMPMeteringService.MeterUsage'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMPMeteringServiceRegisterUsage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMPMeteringService.RegisterUsage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMPMeteringService.RegisterUsage'].$post(args, options),
  )
}

export async function postXAmzTargetAWSMPMeteringServiceResolveCustomer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMPMeteringService.ResolveCustomer'].$post(args, options),
  )
}
