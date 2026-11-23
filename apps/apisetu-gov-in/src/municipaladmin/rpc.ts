import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postKecerCertificate(
  args: InferRequestType<typeof client.kecer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kecer.certificate.$post(args, options))
}

export async function postTapcnCertificate(
  args: InferRequestType<typeof client.tapcn.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tapcn.certificate.$post(args, options))
}

export async function postTdlcsCertificate(
  args: InferRequestType<typeof client.tdlcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tdlcs.certificate.$post(args, options))
}

export async function postUgdcnCertificate(
  args: InferRequestType<typeof client.ugdcn.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ugdcn.certificate.$post(args, options))
}
