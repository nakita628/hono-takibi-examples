import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postHpcerCertificate(
  args: InferRequestType<typeof client.hpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hpcer.certificate.$post(args, options))
}
