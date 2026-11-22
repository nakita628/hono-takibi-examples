import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDpicrCertificate(
  args: InferRequestType<typeof client.dpicr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dpicr.certificate.$post(args, options))
}

export async function postGovidCertificate(
  args: InferRequestType<typeof client.govid.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.govid.certificate.$post(args, options))
}
