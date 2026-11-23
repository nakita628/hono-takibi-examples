import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetcitymatch(
  args: InferRequestType<typeof client.getcitymatch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getcitymatch.$get(args, options))
}
