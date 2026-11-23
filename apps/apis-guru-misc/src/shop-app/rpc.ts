import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOpenaiDetails(
  args: InferRequestType<typeof client.openai.details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.openai.details.$get(args, options))
}

export async function getOpenaiSearch(
  args: InferRequestType<typeof client.openai.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.openai.search.$get(args, options))
}
