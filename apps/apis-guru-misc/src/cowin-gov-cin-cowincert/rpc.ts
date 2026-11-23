import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPdfCertificate(
  args: InferRequestType<typeof client.pdf.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pdf.certificate.$post(args, options))
}
