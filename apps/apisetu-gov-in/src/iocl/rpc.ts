import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postLpgsvCertificate(
  args: InferRequestType<typeof client.lpgsv.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lpgsv.certificate.$post(args, options))
}

export async function postLpgtvCertificate(
  args: InferRequestType<typeof client.lpgtv.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lpgtv.certificate.$post(args, options))
}
