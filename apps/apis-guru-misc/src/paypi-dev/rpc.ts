import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCheckCode(
  args: InferRequestType<typeof client.checkCode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checkCode.$post(args, options))
}

export async function postSendCode(
  args: InferRequestType<typeof client.sendCode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendCode.$post(args, options))
}
