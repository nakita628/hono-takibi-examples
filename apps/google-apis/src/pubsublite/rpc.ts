import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1AdminName(
  args: InferRequestType<(typeof client.v1.admin)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name'].$get(args, options))
}

export async function deleteV1AdminName(
  args: InferRequestType<(typeof client.v1.admin)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name'].$delete(args, options))
}

export async function patchV1AdminName(
  args: InferRequestType<(typeof client.v1.admin)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name'].$patch(args, options))
}

export async function getV1AdminNameOperations(
  args: InferRequestType<(typeof client.v1.admin)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name'].operations.$get(args, options))
}

export async function getV1AdminNamePartitions(
  args: InferRequestType<(typeof client.v1.admin)[':name']['partitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name'].partitions.$get(args, options))
}

export async function getV1AdminNameSubscriptions(
  args: InferRequestType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name'].subscriptions.$get(args, options))
}

export async function getV1AdminNameTopics(
  args: InferRequestType<(typeof client.v1.admin)[':name']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name'].topics.$get(args, options))
}

export async function postV1AdminNameCancel(
  args: InferRequestType<(typeof client.v1.admin)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name:cancel'].$post(args, options))
}

export async function postV1AdminNameSeek(
  args: InferRequestType<(typeof client.v1.admin)[':name:seek']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':name:seek'].$post(args, options))
}

export async function getV1AdminParentReservations(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':parent'].reservations.$get(args, options))
}

export async function postV1AdminParentReservations(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':parent'].reservations.$post(args, options))
}

export async function getV1AdminParentSubscriptions(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':parent'].subscriptions.$get(args, options))
}

export async function postV1AdminParentSubscriptions(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':parent'].subscriptions.$post(args, options))
}

export async function getV1AdminParentTopics(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':parent'].topics.$get(args, options))
}

export async function postV1AdminParentTopics(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.admin[':parent'].topics.$post(args, options))
}

export async function getV1CursorParentCursors(
  args: InferRequestType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cursor[':parent'].cursors.$get(args, options))
}

export async function postV1CursorSubscriptionCommitCursor(
  args: InferRequestType<(typeof client.v1.cursor)[':subscription:commitCursor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.cursor[':subscription:commitCursor'].$post(args, options))
}

export async function postV1TopicStatsTopicComputeHeadCursor(
  args: InferRequestType<(typeof client.v1.topicStats)[':topic:computeHeadCursor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.topicStats[':topic:computeHeadCursor'].$post(args, options))
}

export async function postV1TopicStatsTopicComputeMessageStats(
  args: InferRequestType<(typeof client.v1.topicStats)[':topic:computeMessageStats']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.topicStats[':topic:computeMessageStats'].$post(args, options),
  )
}

export async function postV1TopicStatsTopicComputeTimeCursor(
  args: InferRequestType<(typeof client.v1.topicStats)[':topic:computeTimeCursor']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.topicStats[':topic:computeTimeCursor'].$post(args, options))
}
