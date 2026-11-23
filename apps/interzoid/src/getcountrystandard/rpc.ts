import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetcountrystandard(
  args: InferRequestType<typeof client.getcountrystandard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getcountrystandard.$get(args, options))
}
