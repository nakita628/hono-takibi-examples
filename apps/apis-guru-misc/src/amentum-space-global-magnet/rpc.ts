import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMagneticField(
  args: InferRequestType<typeof client.magnetic_field.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.magnetic_field.$get(args, options))
}
