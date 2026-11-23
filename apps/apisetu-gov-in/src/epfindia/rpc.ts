import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEpfscCertificate(
  args: InferRequestType<typeof client.epfsc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.epfsc.certificate.$post(args, options))
}

export async function postPecerCertificate(
  args: InferRequestType<typeof client.pecer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pecer.certificate.$post(args, options))
}

export async function postUncrdCertificate(
  args: InferRequestType<typeof client.uncrd.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uncrd.certificate.$post(args, options))
}
