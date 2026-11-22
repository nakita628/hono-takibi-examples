import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCncerCertificate(
  args: InferRequestType<typeof client.cncer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cncer.certificate.$post(args, options))
}

export async function postMutanCertificate(
  args: InferRequestType<typeof client.mutan.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutan.certificate.$post(args, options))
}
