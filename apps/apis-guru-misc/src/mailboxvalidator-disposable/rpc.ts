import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1EmailDisposable(
  args: InferRequestType<typeof client.v1.email.disposable.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.disposable.$get(args, options))
}
