import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getThingyref(options?: ClientRequestOptions) {
  return await parseResponse(client.thingyref.$get(undefined, options))
}

export async function getThing(
  args: InferRequestType<typeof client.thing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.thing.$get(args, options))
}

export async function putThing(
  args: InferRequestType<typeof client.thing.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.thing.$put(args, options))
}

export async function postThing(
  args: InferRequestType<typeof client.thing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.thing.$post(args, options))
}

export async function deleteThing(
  args: InferRequestType<typeof client.thing.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.thing.$delete(args, options))
}

export async function patchThing(
  args: InferRequestType<typeof client.thing.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.thing.$patch(args, options))
}
