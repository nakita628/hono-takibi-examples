import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postVisitorIdentification202609TokensCreate(
  args: InferRequestType<
    (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['visitor-identification']['2026-09'].tokens.create.$post(args, options),
  )
}
