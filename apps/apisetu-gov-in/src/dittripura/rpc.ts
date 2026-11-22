import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postChcerCertificate(
  args: InferRequestType<typeof client.chcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chcer.certificate.$post(args, options))
}

export async function postDncerCertificate(
  args: InferRequestType<typeof client.dncer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dncer.certificate.$post(args, options))
}

export async function postDpcerCertificate(
  args: InferRequestType<typeof client.dpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dpcer.certificate.$post(args, options))
}

export async function postFslcsCertificate(
  args: InferRequestType<typeof client.fslcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fslcs.certificate.$post(args, options))
}

export async function postGrredCertificate(
  args: InferRequestType<typeof client.grred.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grred.certificate.$post(args, options))
}

export async function postIncerCertificate(
  args: InferRequestType<typeof client.incer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incer.certificate.$post(args, options))
}

export async function postIsoalCertificate(
  args: InferRequestType<typeof client.isoal.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.isoal.certificate.$post(args, options))
}

export async function postLvcerCertificate(
  args: InferRequestType<typeof client.lvcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lvcer.certificate.$post(args, options))
}

export async function postMalcsCertificate(
  args: InferRequestType<typeof client.malcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.malcs.certificate.$post(args, options))
}

export async function postMpkbyCertificate(
  args: InferRequestType<typeof client.mpkby.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mpkby.certificate.$post(args, options))
}

export async function postObcerCertificate(
  args: InferRequestType<typeof client.obcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.obcer.certificate.$post(args, options))
}

export async function postRitinCertificate(
  args: InferRequestType<typeof client.ritin.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ritin.certificate.$post(args, options))
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

export async function postShcerCertificate(
  args: InferRequestType<typeof client.shcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shcer.certificate.$post(args, options))
}

export async function postSmcerCertificate(
  args: InferRequestType<typeof client.smcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smcer.certificate.$post(args, options))
}

export async function postSslcsCertificate(
  args: InferRequestType<typeof client.sslcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sslcs.certificate.$post(args, options))
}

export async function postVrwmiCertificate(
  args: InferRequestType<typeof client.vrwmi.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrwmi.certificate.$post(args, options))
}
