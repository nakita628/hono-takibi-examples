import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCmcerCertificate(
  args: InferRequestType<typeof client.cmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cmcer.certificate.$post(args, options))
}

export async function postCncerCertificate(
  args: InferRequestType<typeof client.cncer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cncer.certificate.$post(args, options))
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

export async function postDpcerCertificate(
  args: InferRequestType<typeof client.dpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dpcer.certificate.$post(args, options))
}

export async function postDscerCertificate(
  args: InferRequestType<typeof client.dscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dscer.certificate.$post(args, options))
}

export async function postFmcerCertificate(
  args: InferRequestType<typeof client.fmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fmcer.certificate.$post(args, options))
}

export async function postIdcerCertificate(
  args: InferRequestType<typeof client.idcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.idcer.certificate.$post(args, options))
}

export async function postImcerCertificate(
  args: InferRequestType<typeof client.imcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imcer.certificate.$post(args, options))
}

export async function postIncerCertificate(
  args: InferRequestType<typeof client.incer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incer.certificate.$post(args, options))
}

export async function postLfcerCertificate(
  args: InferRequestType<typeof client.lfcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lfcer.certificate.$post(args, options))
}

export async function postLhcerCertificate(
  args: InferRequestType<typeof client.lhcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lhcer.certificate.$post(args, options))
}

export async function postLocerCertificate(
  args: InferRequestType<typeof client.locer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locer.certificate.$post(args, options))
}

export async function postMncerCertificate(
  args: InferRequestType<typeof client.mncer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mncer.certificate.$post(args, options))
}

export async function postNrcerCertificate(
  args: InferRequestType<typeof client.nrcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nrcer.certificate.$post(args, options))
}

export async function postNtcerCertificate(
  args: InferRequestType<typeof client.ntcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntcer.certificate.$post(args, options))
}

export async function postOscerCertificate(
  args: InferRequestType<typeof client.oscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oscer.certificate.$post(args, options))
}

export async function postPncerCertificate(
  args: InferRequestType<typeof client.pncer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pncer.certificate.$post(args, options))
}

export async function postPscerCertificate(
  args: InferRequestType<typeof client.pscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pscer.certificate.$post(args, options))
}

export async function postRlcerCertificate(
  args: InferRequestType<typeof client.rlcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rlcer.certificate.$post(args, options))
}

export async function postRscerCertificate(
  args: InferRequestType<typeof client.rscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rscer.certificate.$post(args, options))
}

export async function postSlcerCertificate(
  args: InferRequestType<typeof client.slcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slcer.certificate.$post(args, options))
}

export async function postVlcerCertificate(
  args: InferRequestType<typeof client.vlcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vlcer.certificate.$post(args, options))
}

export async function postWwcerCertificate(
  args: InferRequestType<typeof client.wwcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wwcer.certificate.$post(args, options))
}
