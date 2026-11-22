import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postExudeTypeData(
  args: InferRequestType<(typeof client.exude)[':type']['data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exude[':type'].data.$post(args, options))
}

export async function postExudeTypeFile(
  args: InferRequestType<(typeof client.exude)[':type']['file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exude[':type'].file.$post(args, options))
}
