import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAecmwCertificate(
  args: InferRequestType<typeof client.aecmw.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aecmw.certificate.$post(args, options))
}

export async function postAemtwCertificate(
  args: InferRequestType<typeof client.aemtw.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aemtw.certificate.$post(args, options))
}

export async function postAgcerCertificate(
  args: InferRequestType<typeof client.agcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agcer.certificate.$post(args, options))
}

export async function postAlimwCertificate(
  args: InferRequestType<typeof client.alimw.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alimw.certificate.$post(args, options))
}

export async function postArcmwCertificate(
  args: InferRequestType<typeof client.arcmw.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.arcmw.certificate.$post(args, options))
}

export async function postArmtwCertificate(
  args: InferRequestType<typeof client.armtw.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.armtw.certificate.$post(args, options))
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

export async function postBpcrdCertificate(
  args: InferRequestType<typeof client.bpcrd.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bpcrd.certificate.$post(args, options))
}

export async function postBtcerCertificate(
  args: InferRequestType<typeof client.btcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.btcer.certificate.$post(args, options))
}

export async function postCecerCertificate(
  args: InferRequestType<typeof client.cecer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cecer.certificate.$post(args, options))
}

export async function postChcerCertificate(
  args: InferRequestType<typeof client.chcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chcer.certificate.$post(args, options))
}

export async function postClcerCertificate(
  args: InferRequestType<typeof client.clcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clcer.certificate.$post(args, options))
}

export async function postCoprgCertificate(
  args: InferRequestType<typeof client.coprg.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coprg.certificate.$post(args, options))
}

export async function postDccerCertificate(
  args: InferRequestType<typeof client.dccer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dccer.certificate.$post(args, options))
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

export async function postErcerCertificate(
  args: InferRequestType<typeof client.ercer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ercer.certificate.$post(args, options))
}

export async function postFfcerCertificate(
  args: InferRequestType<typeof client.ffcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ffcer.certificate.$post(args, options))
}

export async function postIgcerCertificate(
  args: InferRequestType<typeof client.igcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.igcer.certificate.$post(args, options))
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

export async function postMnrgaCertificate(
  args: InferRequestType<typeof client.mnrga.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mnrga.certificate.$post(args, options))
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

export async function postRmcerCertificate(
  args: InferRequestType<typeof client.rmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rmcer.certificate.$post(args, options))
}

export async function postSecerCertificate(
  args: InferRequestType<typeof client.secer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secer.certificate.$post(args, options))
}

export async function postShcerCertificate(
  args: InferRequestType<typeof client.shcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shcer.certificate.$post(args, options))
}

export async function postSicrdCertificate(
  args: InferRequestType<typeof client.sicrd.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sicrd.certificate.$post(args, options))
}

export async function postSrcerCertificate(
  args: InferRequestType<typeof client.srcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.srcer.certificate.$post(args, options))
}
