import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPerfectpdfApi(
  args: InferRequestType<typeof client.perfectpdf.api.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.perfectpdf.api.$post(args, options))
}
