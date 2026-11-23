import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSectionFormat(
  args: InferRequestType<(typeof client)[':section.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':section.:format'].$get(args, options))
}
