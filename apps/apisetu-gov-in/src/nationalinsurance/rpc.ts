import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCripcCertificate(
  args: InferRequestType<typeof client.cripc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cripc.certificate.$post(args, options))
}

export async function postCvipcCertificate(
  args: InferRequestType<typeof client.cvipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cvipc.certificate.$post(args, options))
}

export async function postEgipcCertificate(
  args: InferRequestType<typeof client.egipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.egipc.certificate.$post(args, options))
}

export async function postGicerCertificate(
  args: InferRequestType<typeof client.gicer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gicer.certificate.$post(args, options))
}

export async function postHlipcCertificate(
  args: InferRequestType<typeof client.hlipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hlipc.certificate.$post(args, options))
}

export async function postHmipcCertificate(
  args: InferRequestType<typeof client.hmipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hmipc.certificate.$post(args, options))
}

export async function postMiipcCertificate(
  args: InferRequestType<typeof client.miipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.miipc.certificate.$post(args, options))
}

export async function postMripcCertificate(
  args: InferRequestType<typeof client.mripc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mripc.certificate.$post(args, options))
}

export async function postPripcCertificate(
  args: InferRequestType<typeof client.pripc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pripc.certificate.$post(args, options))
}

export async function postTwipcCertificate(
  args: InferRequestType<typeof client.twipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.twipc.certificate.$post(args, options))
}
