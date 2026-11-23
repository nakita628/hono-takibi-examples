import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetcurrencyrate(
  args: InferRequestType<typeof client.getcurrencyrate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getcurrencyrate.$get(args, options))
}
