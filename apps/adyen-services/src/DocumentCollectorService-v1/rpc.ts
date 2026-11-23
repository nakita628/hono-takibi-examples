import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCrossBorderInvoices(
  args: InferRequestType<typeof client.crossBorderInvoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crossBorderInvoices.$post(args, options))
}
