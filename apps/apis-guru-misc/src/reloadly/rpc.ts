import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getQuestions(options?: ClientRequestOptions) {
  return await parseResponse(client.questions.$get(undefined, options))
}

export async function postQuestions(
  args: InferRequestType<typeof client.questions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.questions.$post(args, options))
}
