import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCheckSpelling(
  args: InferRequestType<typeof client.check_spelling.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.check_spelling.$post(args, options))
}
