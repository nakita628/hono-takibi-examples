import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postJsontoxml(
  args: InferRequestType<typeof client.jsontoxml.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jsontoxml.$post(args, options))
}

export async function postXmltojson(
  args: InferRequestType<typeof client.xmltojson.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.xmltojson.$post(args, options))
}
