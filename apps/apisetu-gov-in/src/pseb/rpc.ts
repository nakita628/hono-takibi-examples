import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCemstCertificate(
  args: InferRequestType<typeof client.cemst.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cemst.certificate.$post(args, options))
}

export async function postCfmstCertificate(
  args: InferRequestType<typeof client.cfmst.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cfmst.certificate.$post(args, options))
}

export async function postHscerCertificate(
  args: InferRequestType<typeof client.hscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hscer.certificate.$post(args, options))
}

export async function postMicerCertificate(
  args: InferRequestType<typeof client.micer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.micer.certificate.$post(args, options))
}

export async function postSscerCertificate(
  args: InferRequestType<typeof client.sscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sscer.certificate.$post(args, options))
}
