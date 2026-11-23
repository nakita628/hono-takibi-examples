import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1BannersId(
  args: InferRequestType<(typeof client.api.v1.banners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.banners[':id'].$get(args, options))
}

export async function getApiV1Banners(
  args: InferRequestType<typeof client.api.v1.banners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.banners.$get(args, options))
}

export async function postApiV1BannersDismiss(
  args: InferRequestType<(typeof client.api.v1)['banners.dismiss']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['banners.dismiss'].$post(args, options))
}

export async function getApiV1PushGet(
  args: InferRequestType<(typeof client.api.v1)['push.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['push.get'].$get(args, options))
}

export async function postApiV1PushToken(
  args: InferRequestType<(typeof client.api.v1)['push.token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['push.token'].$post(args, options))
}

export async function deleteApiV1PushToken(
  args: InferRequestType<(typeof client.api.v1)['push.token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['push.token'].$delete(args, options))
}

export async function getApiV1PushInfo(
  args: InferRequestType<(typeof client.api.v1)['push.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['push.info'].$get(args, options))
}

export async function postApiV1PushTest(
  args: InferRequestType<(typeof client.api.v1)['push.test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['push.test'].$post(args, options))
}
