import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPodocCertificate(
  args: InferRequestType<typeof client.podoc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.podoc.certificate.$post(args, options))
}
