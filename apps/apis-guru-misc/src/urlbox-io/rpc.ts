import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1RenderSync(
  args: InferRequestType<typeof client.v1.render.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.render.sync.$post(args, options))
}
