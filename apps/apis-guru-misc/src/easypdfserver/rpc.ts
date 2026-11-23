import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMakePdf(
  args: InferRequestType<(typeof client)['make-pdf']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['make-pdf'].$post(args, options))
}
