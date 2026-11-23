import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnythingStrings(
  args: InferRequestType<typeof client.anything.strings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.strings.$get(args, options))
}

export async function putAnythingStrings(
  args: InferRequestType<typeof client.anything.strings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.strings.$put(args, options))
}

export async function postAnythingStrings(
  args: InferRequestType<typeof client.anything.strings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything.strings.$post(args, options))
}
