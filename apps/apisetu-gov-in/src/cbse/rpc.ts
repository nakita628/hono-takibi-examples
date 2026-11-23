import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postHpcerCertificate(
  args: InferRequestType<typeof client.hpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hpcer.certificate.$post(args, options))
}

export async function postHscerCertificate(
  args: InferRequestType<typeof client.hscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hscer.certificate.$post(args, options))
}

export async function postHsmgrCertificate(
  args: InferRequestType<typeof client.hsmgr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hsmgr.certificate.$post(args, options))
}

export async function postNchscCertificate(
  args: InferRequestType<typeof client.nchsc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nchsc.certificate.$post(args, options))
}

export async function postNctscCertificate(
  args: InferRequestType<typeof client.nctsc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nctsc.certificate.$post(args, options))
}

export async function postNsescCertificate(
  args: InferRequestType<typeof client.nsesc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nsesc.certificate.$post(args, options))
}

export async function postNstscCertificate(
  args: InferRequestType<typeof client.nstsc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nstsc.certificate.$post(args, options))
}

export async function postNtltrCertificate(
  args: InferRequestType<typeof client.ntltr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntltr.certificate.$post(args, options))
}

export async function postNtmksCertificate(
  args: InferRequestType<typeof client.ntmks.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ntmks.certificate.$post(args, options))
}

export async function postSkhscCertificate(
  args: InferRequestType<typeof client.skhsc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skhsc.certificate.$post(args, options))
}

export async function postSktscCertificate(
  args: InferRequestType<typeof client.sktsc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sktsc.certificate.$post(args, options))
}

export async function postSpcerCertificate(
  args: InferRequestType<typeof client.spcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spcer.certificate.$post(args, options))
}

export async function postSscerCertificate(
  args: InferRequestType<typeof client.sscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sscer.certificate.$post(args, options))
}

export async function postSsmgrCertificate(
  args: InferRequestType<typeof client.ssmgr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssmgr.certificate.$post(args, options))
}

export async function postTetcrCertificate(
  args: InferRequestType<typeof client.tetcr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tetcr.certificate.$post(args, options))
}

export async function postTetmsCertificate(
  args: InferRequestType<typeof client.tetms.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tetms.certificate.$post(args, options))
}
