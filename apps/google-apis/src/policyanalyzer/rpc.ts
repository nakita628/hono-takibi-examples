import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1ParentActivitiesQuery(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['activities:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['activities:query'].$get(args, options))
}
