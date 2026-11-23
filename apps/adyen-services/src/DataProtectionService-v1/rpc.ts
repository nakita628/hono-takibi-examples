import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRequestSubjectErasure(
  args: InferRequestType<typeof client.requestSubjectErasure.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requestSubjectErasure.$post(args, options))
}
