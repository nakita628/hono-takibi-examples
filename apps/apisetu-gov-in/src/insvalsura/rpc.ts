import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSkcerCertificate(
  args: InferRequestType<typeof client.skcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skcer.certificate.$post(args, options))
}

export async function postSkmstCertificate(
  args: InferRequestType<typeof client.skmst.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skmst.certificate.$post(args, options))
}
