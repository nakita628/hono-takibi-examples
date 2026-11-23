import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApmclCertificate(
  args: InferRequestType<typeof client.apmcl.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apmcl.certificate.$post(args, options))
}
