import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDrvlcCertificate(
  args: InferRequestType<typeof client.drvlc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drvlc.certificate.$post(args, options))
}

export async function postFitcerCertificate(
  args: InferRequestType<typeof client.fitcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fitcer.certificate.$post(args, options))
}

export async function postRvcerCertificate(
  args: InferRequestType<typeof client.rvcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rvcer.certificate.$post(args, options))
}

export async function postVhinscCertificate(
  args: InferRequestType<typeof client.vhinsc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vhinsc.certificate.$post(args, options))
}

export async function postVhtaxCertificate(
  args: InferRequestType<typeof client.vhtax.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vhtax.certificate.$post(args, options))
}
