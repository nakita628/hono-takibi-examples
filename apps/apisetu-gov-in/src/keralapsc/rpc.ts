import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOtcerCertificate(
  args: InferRequestType<typeof client.otcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.otcer.certificate.$post(args, options))
}
