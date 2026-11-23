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

export async function postEwcerCertificate(
  args: InferRequestType<typeof client.ewcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ewcer.certificate.$post(args, options))
}

export async function postObcerCertificate(
  args: InferRequestType<typeof client.obcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.obcer.certificate.$post(args, options))
}

export async function postRacerCertificate(
  args: InferRequestType<typeof client.racer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.racer.certificate.$post(args, options))
}

export async function postRscerCertificate(
  args: InferRequestType<typeof client.rscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rscer.certificate.$post(args, options))
}

export async function postShcerCertificate(
  args: InferRequestType<typeof client.shcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shcer.certificate.$post(args, options))
}
