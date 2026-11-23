import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreateTestCardRanges(
  args: InferRequestType<typeof client.createTestCardRanges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createTestCardRanges.$post(args, options))
}
