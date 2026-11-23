import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRdcerCertificate(
  args: InferRequestType<typeof client.rdcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rdcer.certificate.$post(args, options))
}

export async function postRegriiCertificate(
  args: InferRequestType<typeof client.regrii.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regrii.certificate.$post(args, options))
}

export async function postRmcerCertificate(
  args: InferRequestType<typeof client.rmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rmcer.certificate.$post(args, options))
}
