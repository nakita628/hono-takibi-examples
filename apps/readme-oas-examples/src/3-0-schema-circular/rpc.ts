import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putNestedTest(
  args: InferRequestType<typeof client.nestedTest.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nestedTest.$put(args, options))
}

export async function putCircular(
  args: InferRequestType<typeof client.circular.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.circular.$put(args, options))
}

export async function postNotQuiteCircular(
  args: InferRequestType<(typeof client)['not-quite-circular']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['not-quite-circular'].$post(args, options))
}
