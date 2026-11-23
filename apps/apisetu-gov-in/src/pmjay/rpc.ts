import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPmjayCertificate(
  args: InferRequestType<typeof client.pmjay.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pmjay.certificate.$post(args, options))
}
