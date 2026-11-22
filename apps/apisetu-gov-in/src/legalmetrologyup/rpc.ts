import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDelcsCertificate(
  args: InferRequestType<typeof client.delcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delcs.certificate.$post(args, options))
}

export async function postMalcsCertificate(
  args: InferRequestType<typeof client.malcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.malcs.certificate.$post(args, options))
}

export async function postPalcsCertificate(
  args: InferRequestType<typeof client.palcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.palcs.certificate.$post(args, options))
}

export async function postRelcsCertificate(
  args: InferRequestType<typeof client.relcs.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relcs.certificate.$post(args, options))
}
