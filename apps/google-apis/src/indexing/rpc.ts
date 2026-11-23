import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3UrlNotificationsMetadata(
  args: InferRequestType<typeof client.v3.urlNotifications.metadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.urlNotifications.metadata.$get(args, options))
}

export async function postV3UrlNotificationsPublish(
  args: InferRequestType<(typeof client.v3)['urlNotifications:publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['urlNotifications:publish'].$post(args, options))
}
