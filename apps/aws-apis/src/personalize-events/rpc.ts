import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEvents(
  args: InferRequestType<typeof client.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$post(args, options))
}

export async function postItems(
  args: InferRequestType<typeof client.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items.$post(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}
