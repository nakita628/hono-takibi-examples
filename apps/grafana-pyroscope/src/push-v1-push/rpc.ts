import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPushV1PusherServicePush(
  args: InferRequestType<(typeof client)['push.v1.PusherService']['Push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['push.v1.PusherService'].Push.$post(args, options))
}
