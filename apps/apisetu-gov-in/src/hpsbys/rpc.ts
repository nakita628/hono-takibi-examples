import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRsbycCertificate(
  args: InferRequestType<typeof client.rsbyc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rsbyc.certificate.$post(args, options))
}
