import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCripcCertificate(
  args: InferRequestType<typeof client.cripc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cripc.certificate.$post(args, options))
}

export async function postHlipcCertificate(
  args: InferRequestType<typeof client.hlipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hlipc.certificate.$post(args, options))
}

export async function postTwipcCertificate(
  args: InferRequestType<typeof client.twipc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.twipc.certificate.$post(args, options))
}
