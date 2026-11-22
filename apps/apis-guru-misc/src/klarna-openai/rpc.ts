import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPublicOpenaiV0Products(
  args: InferRequestType<typeof client.public.openai.v0.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.openai.v0.products.$get(args, options))
}
