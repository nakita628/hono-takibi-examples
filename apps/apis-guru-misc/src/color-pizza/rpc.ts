import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function getListsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.lists.index.$get(undefined, options))
}

export async function getNamesIndex(
  args: InferRequestType<typeof client.names.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.names.index.$get(args, options))
}

export async function getSwatchIndex(
  args: InferRequestType<typeof client.swatch.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.swatch.index.$get(args, options))
}
