import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreateNotificationConfiguration(
  args: InferRequestType<typeof client.createNotificationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createNotificationConfiguration.$post(args, options))
}

export async function postDeleteNotificationConfigurations(
  args: InferRequestType<typeof client.deleteNotificationConfigurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteNotificationConfigurations.$post(args, options))
}

export async function postGetNotificationConfiguration(
  args: InferRequestType<typeof client.getNotificationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getNotificationConfiguration.$post(args, options))
}

export async function postGetNotificationConfigurationList(
  args: InferRequestType<typeof client.getNotificationConfigurationList.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getNotificationConfigurationList.$post(args, options))
}

export async function postTestNotificationConfiguration(
  args: InferRequestType<typeof client.testNotificationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.testNotificationConfiguration.$post(args, options))
}

export async function postUpdateNotificationConfiguration(
  args: InferRequestType<typeof client.updateNotificationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateNotificationConfiguration.$post(args, options))
}
