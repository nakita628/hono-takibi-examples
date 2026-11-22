import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBtcerCertificate(
  args: InferRequestType<typeof client.btcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.btcer.certificate.$post(args, options))
}

export async function postCtcerCertificate(
  args: InferRequestType<typeof client.ctcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ctcer.certificate.$post(args, options))
}

export async function postDtcerCertificate(
  args: InferRequestType<typeof client.dtcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dtcer.certificate.$post(args, options))
}

export async function postEwcerCertificate(
  args: InferRequestType<typeof client.ewcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ewcer.certificate.$post(args, options))
}

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
