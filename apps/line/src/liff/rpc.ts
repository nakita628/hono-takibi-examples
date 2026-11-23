import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLiffV1Apps(options?: ClientRequestOptions) {
  return await parseResponse(client.liff.v1.apps.$get(undefined, options))
}

export async function postLiffV1Apps(
  args: InferRequestType<typeof client.liff.v1.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.liff.v1.apps.$post(args, options))
}

export async function putLiffV1AppsLiffId(
  args: InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.liff.v1.apps[':liffId'].$put(args, options))
}

export async function deleteLiffV1AppsLiffId(
  args: InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.liff.v1.apps[':liffId'].$delete(args, options))
}
