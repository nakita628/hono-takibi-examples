import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIncerCertificate(
  args: InferRequestType<typeof client.incer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incer.certificate.$post(args, options))
}

export async function postRmcerCertificate(
  args: InferRequestType<typeof client.rmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rmcer.certificate.$post(args, options))
}

export async function postRscerCertificate(
  args: InferRequestType<typeof client.rscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rscer.certificate.$post(args, options))
}

export async function postSicrdCertificate(
  args: InferRequestType<typeof client.sicrd.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sicrd.certificate.$post(args, options))
}
