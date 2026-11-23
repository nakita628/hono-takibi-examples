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

export async function postHlipcCertificate(
  args: InferRequestType<typeof client.hlipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hlipc.certificate.$post(args, options))
}

export async function postMiipcCertificate(
  args: InferRequestType<typeof client.miipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.miipc.certificate.$post(args, options))
}

export async function postTripcCertificate(
  args: InferRequestType<typeof client.tripc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tripc.certificate.$post(args, options))
}

export async function postTwipcCertificate(
  args: InferRequestType<typeof client.twipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.twipc.certificate.$post(args, options))
}
