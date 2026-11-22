import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function postHvcerCertificate(
  args: InferRequestType<typeof client.hvcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hvcer.certificate.$post(args, options))
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

export async function postSvcerCertificate(
  args: InferRequestType<typeof client.svcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.svcer.certificate.$post(args, options))
}
