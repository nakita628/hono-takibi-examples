import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetcitystandard(
  args: InferRequestType<typeof client.getcitystandard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getcitystandard.$get(args, options))
}
