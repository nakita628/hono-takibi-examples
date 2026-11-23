import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetQLDBSessionSendCommand(
  args: InferRequestType<(typeof client)['#X-Amz-Target=QLDBSession.SendCommand']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=QLDBSession.SendCommand'].$post(args, options))
}
