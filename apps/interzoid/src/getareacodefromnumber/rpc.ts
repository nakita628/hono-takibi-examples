import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetareacodefromnumber(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getareacodefromnumber.$get(args, options))
}
