import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTemplatesTemplateTokenCompile(
  args: InferRequestType<(typeof client.templates)[':template-token']['compile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template-token'].compile.$post(args, options))
}
