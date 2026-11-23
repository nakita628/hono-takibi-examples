import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAdcrdCertificate(
  args: InferRequestType<typeof client.adcrd.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adcrd.certificate.$post(args, options))
}
