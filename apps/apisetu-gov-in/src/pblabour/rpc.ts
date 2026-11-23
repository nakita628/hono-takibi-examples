import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAlsfcCertificate(
  args: InferRequestType<typeof client.alsfc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alsfc.certificate.$post(args, options))
}

export async function postClcerCertificate(
  args: InferRequestType<typeof client.clcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clcer.certificate.$post(args, options))
}

export async function postSrcerCertificate(
  args: InferRequestType<typeof client.srcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.srcer.certificate.$post(args, options))
}
