import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBrlcsCertificate(
  args: InferRequestType<typeof client.brlcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.brlcs.certificate.$post(args, options))
}

export async function postDpcerCertificate(
  args: InferRequestType<typeof client.dpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dpcer.certificate.$post(args, options))
}

export async function postFmcerCertificate(
  args: InferRequestType<typeof client.fmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fmcer.certificate.$post(args, options))
}

export async function postIncerCertificate(
  args: InferRequestType<typeof client.incer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incer.certificate.$post(args, options))
}

export async function postLccepCertificate(
  args: InferRequestType<typeof client.lccep.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lccep.certificate.$post(args, options))
}

export async function postNdcerCertificate(
  args: InferRequestType<typeof client.ndcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ndcer.certificate.$post(args, options))
}

export async function postObcerCertificate(
  args: InferRequestType<typeof client.obcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.obcer.certificate.$post(args, options))
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

export async function postRucerCertificate(
  args: InferRequestType<typeof client.rucer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rucer.certificate.$post(args, options))
}

export async function postSicrdCertificate(
  args: InferRequestType<typeof client.sicrd.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sicrd.certificate.$post(args, options))
}

export async function postVlcerCertificate(
  args: InferRequestType<typeof client.vlcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vlcer.certificate.$post(args, options))
}
