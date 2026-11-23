import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBadge(
  args: InferRequestType<typeof client.badge.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.badge.$get(args, options))
}

export async function getConvert(
  args: InferRequestType<typeof client.convert.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convert.$get(args, options))
}

export async function postConvert(
  args: InferRequestType<typeof client.convert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convert.$post(args, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getValidate(
  args: InferRequestType<typeof client.validate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validate.$get(args, options))
}

export async function postValidate(
  args: InferRequestType<typeof client.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validate.$post(args, options))
}
