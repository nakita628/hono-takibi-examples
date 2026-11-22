import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSvgconvert(
  args: InferRequestType<typeof client.svgconvert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.svgconvert.$post(args, options))
}
