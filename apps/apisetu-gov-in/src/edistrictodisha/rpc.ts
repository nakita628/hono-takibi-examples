import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCtcerCertificate(
  args: InferRequestType<typeof client.ctcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ctcer.certificate.$post(args, options))
}

export async function postEwcerCertificate(
  args: InferRequestType<typeof client.ewcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ewcer.certificate.$post(args, options))
}

export async function postLhcerCertificate(
  args: InferRequestType<typeof client.lhcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lhcer.certificate.$post(args, options))
}

export async function postObcerCertificate(
  args: InferRequestType<typeof client.obcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.obcer.certificate.$post(args, options))
}

export async function postRor1bCertificate(
  args: InferRequestType<typeof client.ror1b.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ror1b.certificate.$post(args, options))
}

export async function postSlcerCertificate(
  args: InferRequestType<typeof client.slcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slcer.certificate.$post(args, options))
}
