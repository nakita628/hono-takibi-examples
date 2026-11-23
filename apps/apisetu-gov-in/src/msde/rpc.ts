import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIticrCertificate(
  args: InferRequestType<typeof client.iticr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.iticr.certificate.$post(args, options))
}
