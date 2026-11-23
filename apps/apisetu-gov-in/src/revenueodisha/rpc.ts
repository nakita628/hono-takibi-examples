import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRdcerCertificate(
  args: InferRequestType<typeof client.rdcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rdcer.certificate.$post(args, options))
}

export async function postRor1bCertificate(
  args: InferRequestType<typeof client.ror1b.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ror1b.certificate.$post(args, options))
}
