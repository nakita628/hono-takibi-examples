import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEgcerCertificate(
  args: InferRequestType<typeof client.egcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.egcer.certificate.$post(args, options))
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

export async function postLhcerCertificate(
  args: InferRequestType<typeof client.lhcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lhcer.certificate.$post(args, options))
}

export async function postObcerCertificate(
  args: InferRequestType<typeof client.obcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.obcer.certificate.$post(args, options))
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
