import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1CloudPlugin(
  args: InferRequestType<(typeof client.api.v1)['cloud-plugin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['cloud-plugin'].$get(args, options))
}

export async function getApiV1LlmApi(
  args: InferRequestType<(typeof client.api.v1)['llm-api']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['llm-api'].$get(args, options))
}
