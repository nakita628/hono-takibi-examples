import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postErcerCertificate(
  args: InferRequestType<typeof client.ercer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ercer.certificate.$post(args, options))
}

export async function postPfdawCertificate(
  args: InferRequestType<typeof client.pfdaw.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pfdaw.certificate.$post(args, options))
}

export async function postTpcerCertificate(
  args: InferRequestType<typeof client.tpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tpcer.certificate.$post(args, options))
}
