import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIlpmtCertificate(
  args: InferRequestType<typeof client.ilpmt.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ilpmt.certificate.$post(args, options))
}
