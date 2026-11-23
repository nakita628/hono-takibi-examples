import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1ParentDeliveryData(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['deliveryData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].deliveryData.$get(args, options))
}
