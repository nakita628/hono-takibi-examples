import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEtcerCertificate(
  args: InferRequestType<typeof client.etcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etcer.certificate.$post(args, options))
}

export async function postGovidCertificate(
  args: InferRequestType<typeof client.govid.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.govid.certificate.$post(args, options))
}

export async function postSicerCertificate(
  args: InferRequestType<typeof client.sicer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sicer.certificate.$post(args, options))
}
