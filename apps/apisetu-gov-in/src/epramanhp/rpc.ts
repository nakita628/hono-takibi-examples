import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAgcerCertificate(
  args: InferRequestType<typeof client.agcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agcer.certificate.$post(args, options))
}

export async function postBacerCertificate(
  args: InferRequestType<typeof client.bacer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bacer.certificate.$post(args, options))
}

export async function postBhcerCertificate(
  args: InferRequestType<typeof client.bhcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bhcer.certificate.$post(args, options))
}

export async function postChcerCertificate(
  args: InferRequestType<typeof client.chcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chcer.certificate.$post(args, options))
}

export async function postDccerCertificate(
  args: InferRequestType<typeof client.dccer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dccer.certificate.$post(args, options))
}

export async function postFfcerCertificate(
  args: InferRequestType<typeof client.ffcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ffcer.certificate.$post(args, options))
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

export async function postMncerCertificate(
  args: InferRequestType<typeof client.mncer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mncer.certificate.$post(args, options))
}

export async function postObcerCertificate(
  args: InferRequestType<typeof client.obcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.obcer.certificate.$post(args, options))
}

export async function postPsprtCertificate(
  args: InferRequestType<typeof client.psprt.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.psprt.certificate.$post(args, options))
}

export async function postRacerCertificate(
  args: InferRequestType<typeof client.racer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.racer.certificate.$post(args, options))
}

export async function postRmcerCertificate(
  args: InferRequestType<typeof client.rmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rmcer.certificate.$post(args, options))
}

export async function postShcerCertificate(
  args: InferRequestType<typeof client.shcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shcer.certificate.$post(args, options))
}
