import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreateNotificationRule(
  args: InferRequestType<typeof client.createNotificationRule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createNotificationRule.$post(args, options))
}

export async function postDeleteNotificationRule(
  args: InferRequestType<typeof client.deleteNotificationRule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteNotificationRule.$post(args, options))
}

export async function postDeleteTarget(
  args: InferRequestType<typeof client.deleteTarget.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteTarget.$post(args, options))
}

export async function postDescribeNotificationRule(
  args: InferRequestType<typeof client.describeNotificationRule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeNotificationRule.$post(args, options))
}

export async function postListEventTypes(
  args: InferRequestType<typeof client.listEventTypes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listEventTypes.$post(args, options))
}

export async function postListNotificationRules(
  args: InferRequestType<typeof client.listNotificationRules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listNotificationRules.$post(args, options))
}

export async function postListTagsForResource(
  args: InferRequestType<typeof client.listTagsForResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listTagsForResource.$post(args, options))
}

export async function postListTargets(
  args: InferRequestType<typeof client.listTargets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listTargets.$post(args, options))
}

export async function postSubscribe(
  args: InferRequestType<typeof client.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscribe.$post(args, options))
}

export async function postTagResource(
  args: InferRequestType<typeof client.tagResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagResource.$post(args, options))
}

export async function postUnsubscribe(
  args: InferRequestType<typeof client.unsubscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unsubscribe.$post(args, options))
}

export async function postUntagResourceResourceArnTagKeys(
  args: InferRequestType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.untagResource[':resourceArn#tagKeys'].$post(args, options))
}

export async function postUpdateNotificationRule(
  args: InferRequestType<typeof client.updateNotificationRule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateNotificationRule.$post(args, options))
}
