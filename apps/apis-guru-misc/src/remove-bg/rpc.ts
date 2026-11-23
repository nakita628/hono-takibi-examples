import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function postImprove(
  args: InferRequestType<typeof client.improve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.improve.$post(args, options))
}

export async function postRemovebg(
  args: InferRequestType<typeof client.removebg.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.removebg.$post(args, options))
}
