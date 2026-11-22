import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDgmstCertificate(
  args: InferRequestType<typeof client.dgmst.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dgmst.certificate.$post(args, options))
}
