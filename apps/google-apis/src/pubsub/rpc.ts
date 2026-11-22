import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putV1beta2Name(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':name'].$put(args, options))
}

export async function getV1beta2ProjectSubscriptions(
  args: InferRequestType<(typeof client.v1beta2)[':project']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':project'].subscriptions.$get(args, options))
}

export async function getV1beta2ProjectTopics(
  args: InferRequestType<(typeof client.v1beta2)[':project']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':project'].topics.$get(args, options))
}

export async function getV1beta2ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta2)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta2ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta2)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta2ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta2)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':resource:testIamPermissions'].$post(args, options))
}

export async function getV1beta2Subscription(
  args: InferRequestType<(typeof client.v1beta2)[':subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':subscription'].$get(args, options))
}

export async function deleteV1beta2Subscription(
  args: InferRequestType<(typeof client.v1beta2)[':subscription']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':subscription'].$delete(args, options))
}

export async function postV1beta2SubscriptionAcknowledge(
  args: InferRequestType<(typeof client.v1beta2)[':subscription:acknowledge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':subscription:acknowledge'].$post(args, options))
}

export async function postV1beta2SubscriptionModifyAckDeadline(
  args: InferRequestType<(typeof client.v1beta2)[':subscription:modifyAckDeadline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':subscription:modifyAckDeadline'].$post(args, options))
}

export async function postV1beta2SubscriptionModifyPushConfig(
  args: InferRequestType<(typeof client.v1beta2)[':subscription:modifyPushConfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':subscription:modifyPushConfig'].$post(args, options))
}

export async function postV1beta2SubscriptionPull(
  args: InferRequestType<(typeof client.v1beta2)[':subscription:pull']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':subscription:pull'].$post(args, options))
}

export async function getV1beta2Topic(
  args: InferRequestType<(typeof client.v1beta2)[':topic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':topic'].$get(args, options))
}

export async function deleteV1beta2Topic(
  args: InferRequestType<(typeof client.v1beta2)[':topic']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':topic'].$delete(args, options))
}

export async function getV1beta2TopicSubscriptions(
  args: InferRequestType<(typeof client.v1beta2)[':topic']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':topic'].subscriptions.$get(args, options))
}

export async function postV1beta2TopicPublish(
  args: InferRequestType<(typeof client.v1beta2)[':topic:publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta2[':topic:publish'].$post(args, options))
}
