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

export async function postDmcerCertificate(
  args: InferRequestType<typeof client.dmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dmcer.certificate.$post(args, options))
}

export async function postDpicrCertificate(
  args: InferRequestType<typeof client.dpicr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dpicr.certificate.$post(args, options))
}

export async function postDtcerCertificate(
  args: InferRequestType<typeof client.dtcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dtcer.certificate.$post(args, options))
}

export async function postIncerCertificate(
  args: InferRequestType<typeof client.incer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incer.certificate.$post(args, options))
}
