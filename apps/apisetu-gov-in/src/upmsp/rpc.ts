import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postHscerCertificate(
  args: InferRequestType<typeof client.hscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hscer.certificate.$post(args, options))
}

export async function postSscerCertificate(
  args: InferRequestType<typeof client.sscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sscer.certificate.$post(args, options))
}
