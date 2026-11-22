import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postVochseCertificate(
  args: InferRequestType<typeof client.vochse.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vochse.certificate.$post(args, options))
}
