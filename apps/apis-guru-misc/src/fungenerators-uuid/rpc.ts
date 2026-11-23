import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getUuid(
  args: InferRequestType<typeof client.uuid.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uuid.$get(args, options))
}

export async function postUuid(
  args: InferRequestType<typeof client.uuid.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uuid.$post(args, options))
}

export async function getUuidVersionVersion(
  args: InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uuid.version[':version'].$get(args, options))
}
