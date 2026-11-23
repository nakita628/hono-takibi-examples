import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEscerCertificate(
  args: InferRequestType<typeof client.escer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.escer.certificate.$post(args, options))
}

export async function postSkcerCertificate(
  args: InferRequestType<typeof client.skcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skcer.certificate.$post(args, options))
}
