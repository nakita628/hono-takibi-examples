import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1IecIec(
  args: InferRequestType<(typeof client.v1.iec)[':iec']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.iec[':iec'].$get(args, options))
}
