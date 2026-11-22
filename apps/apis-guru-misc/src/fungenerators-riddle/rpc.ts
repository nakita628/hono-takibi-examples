import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRiddle(
  args: InferRequestType<typeof client.riddle.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.riddle.$get(args, options))
}

export async function putRiddle(
  args: InferRequestType<typeof client.riddle.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.riddle.$put(args, options))
}

export async function postRiddle(
  args: InferRequestType<typeof client.riddle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.riddle.$post(args, options))
}

export async function deleteRiddle(
  args: InferRequestType<typeof client.riddle.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.riddle.$delete(args, options))
}

export async function getRiddleRandom(
  args: InferRequestType<typeof client.riddle.random.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.riddle.random.$get(args, options))
}

export async function getRiddleSearch(
  args: InferRequestType<typeof client.riddle.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.riddle.search.$get(args, options))
}
