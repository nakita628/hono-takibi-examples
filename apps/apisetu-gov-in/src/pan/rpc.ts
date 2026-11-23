import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPancrCertificate(
  args: InferRequestType<typeof client.pancr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pancr.certificate.$post(args, options))
}
