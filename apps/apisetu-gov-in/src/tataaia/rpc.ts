import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postLicerCertificate(
  args: InferRequestType<typeof client.licer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licer.certificate.$post(args, options))
}

export async function postPrcptCertificate(
  args: InferRequestType<typeof client.prcpt.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prcpt.certificate.$post(args, options))
}
