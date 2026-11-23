import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBtcerCertificate(
  args: InferRequestType<typeof client.btcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.btcer.certificate.$post(args, options))
}

export async function postDtcerCertificate(
  args: InferRequestType<typeof client.dtcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dtcer.certificate.$post(args, options))
}
