import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2ChallengeGenerate(
  args: InferRequestType<(typeof client.v2)['challenge:generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['challenge:generate'].$post(args, options))
}

export async function postV2ChallengeVerify(
  args: InferRequestType<(typeof client.v2)['challenge:verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['challenge:verify'].$post(args, options))
}
