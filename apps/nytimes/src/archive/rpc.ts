import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getYearMonthJson(
  args: InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':year'][':month.json'].$get(args, options))
}
