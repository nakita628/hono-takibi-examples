import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putAnythingTopLevelArray(
  args: InferRequestType<(typeof client.anything)['top-level-array']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['top-level-array'].$put(args, options))
}

export async function postAnythingTopLevelArray(
  args: InferRequestType<(typeof client.anything)['top-level-array']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['top-level-array'].$post(args, options))
}

export async function postAnythingTopLevelObjectSimple(
  args: InferRequestType<(typeof client.anything)['top-level-object']['simple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['top-level-object'].simple.$post(args, options))
}

export async function postTopLevelObjectOfEverything(
  args: InferRequestType<(typeof client)['top-level-object']['of-everything']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['top-level-object']['of-everything'].$post(args, options))
}

export async function postMultischemaOfEverything(
  args: InferRequestType<(typeof client.multischema)['of-everything']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.multischema['of-everything'].$post(args, options))
}
