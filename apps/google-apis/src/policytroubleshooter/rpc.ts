import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1IamTroubleshoot(
  args: InferRequestType<(typeof client.v1)['iam:troubleshoot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['iam:troubleshoot'].$post(args, options))
}
