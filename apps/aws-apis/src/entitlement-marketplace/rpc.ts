import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSMPEntitlementServiceGetEntitlements(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMPEntitlementService.GetEntitlements'].$post(args, options),
  )
}
