import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postHvcerCertificate(
  args: InferRequestType<typeof client.hvcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hvcer.certificate.$post(args, options))
}

export async function postSvcerCertificate(
  args: InferRequestType<typeof client.svcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.svcer.certificate.$post(args, options))
}
