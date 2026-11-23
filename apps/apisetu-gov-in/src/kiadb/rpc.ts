import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAlltrCertificate(
  args: InferRequestType<typeof client.alltr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alltr.certificate.$post(args, options))
}

export async function postBknocCertificate(
  args: InferRequestType<typeof client.bknoc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bknoc.certificate.$post(args, options))
}

export async function postBpcerCertificate(
  args: InferRequestType<typeof client.bpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bpcer.certificate.$post(args, options))
}

export async function postCfltrCertificate(
  args: InferRequestType<typeof client.cfltr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cfltr.certificate.$post(args, options))
}

export async function postLcsagCertificate(
  args: InferRequestType<typeof client.lcsag.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lcsag.certificate.$post(args, options))
}

export async function postPscerCertificate(
  args: InferRequestType<typeof client.pscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pscer.certificate.$post(args, options))
}

export async function postPsnocCertificate(
  args: InferRequestType<typeof client.psnoc.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.psnoc.certificate.$post(args, options))
}

export async function postWtrblCertificate(
  args: InferRequestType<typeof client.wtrbl.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wtrbl.certificate.$post(args, options))
}
