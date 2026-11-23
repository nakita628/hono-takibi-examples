import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnythingNumbers(
  args: InferRequestType<typeof client.anything.numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.numbers.$get(args, options))
}
