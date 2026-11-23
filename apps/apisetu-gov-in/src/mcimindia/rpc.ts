import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGovidCertificate(
  args: InferRequestType<typeof client.govid.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.govid.certificate.$post(args, options))
}

export async function postPhcerCertificate(
  args: InferRequestType<typeof client.phcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phcer.certificate.$post(args, options))
}
