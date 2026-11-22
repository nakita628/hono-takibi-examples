import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMicerCertificate(
  args: InferRequestType<typeof client.micer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.micer.certificate.$post(args, options))
}

export async function postPvcerCertificate(
  args: InferRequestType<typeof client.pvcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pvcer.certificate.$post(args, options))
}
