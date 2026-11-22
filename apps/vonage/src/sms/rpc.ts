import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postFormat(
  args: InferRequestType<(typeof client)[':format']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].$post(args, options))
}
