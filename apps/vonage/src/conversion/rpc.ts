import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSms(
  args: InferRequestType<typeof client.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.$post(args, options))
}

export async function postVoice(
  args: InferRequestType<typeof client.voice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice.$post(args, options))
}
