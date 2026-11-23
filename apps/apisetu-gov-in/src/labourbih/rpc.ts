import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAlimwCertificate(
  args: InferRequestType<typeof client.alimw.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alimw.certificate.$post(args, options))
}

export async function postAlsblCertificate(
  args: InferRequestType<typeof client.alsbl.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alsbl.certificate.$post(args, options))
}

export async function postAlsfcCertificate(
  args: InferRequestType<typeof client.alsfc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alsfc.certificate.$post(args, options))
}

export async function postApptuCertificate(
  args: InferRequestType<typeof client.apptu.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apptu.certificate.$post(args, options))
}

export async function postClcerCertificate(
  args: InferRequestType<typeof client.clcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clcer.certificate.$post(args, options))
}

export async function postNooclCertificate(
  args: InferRequestType<typeof client.noocl.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.noocl.certificate.$post(args, options))
}

export async function postSrcerCertificate(
  args: InferRequestType<typeof client.srcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.srcer.certificate.$post(args, options))
}
