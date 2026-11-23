import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postChcerCertificate(
  args: InferRequestType<typeof client.chcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chcer.certificate.$post(args, options))
}

export async function postDmcerCertificate(
  args: InferRequestType<typeof client.dmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dmcer.certificate.$post(args, options))
}

export async function postDpcerCertificate(
  args: InferRequestType<typeof client.dpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dpcer.certificate.$post(args, options))
}

export async function postIncerCertificate(
  args: InferRequestType<typeof client.incer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incer.certificate.$post(args, options))
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
