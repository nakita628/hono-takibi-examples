import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetcountrymatch(
  args: InferRequestType<typeof client.getcountrymatch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getcountrymatch.$get(args, options))
}
