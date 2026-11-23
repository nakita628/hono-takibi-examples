import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOfrepV1EvaluateFlagsKey(
  args: InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ofrep.v1.evaluate.flags[':key'].$post(args, options))
}

export async function postOfrepV1EvaluateFlags(
  args: InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ofrep.v1.evaluate.flags.$post(args, options))
}
