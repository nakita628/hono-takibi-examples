import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCocerCertificate(
  args: InferRequestType<typeof client.cocer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cocer.certificate.$post(args, options))
}

export async function postRfcerCertificate(
  args: InferRequestType<typeof client.rfcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rfcer.certificate.$post(args, options))
}
