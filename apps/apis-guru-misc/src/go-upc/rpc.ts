import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCodeCode(
  args: InferRequestType<(typeof client.code)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.code[':code'].$get(args, options))
}
