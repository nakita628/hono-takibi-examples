import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2PublishDestination(
  args: InferRequestType<(typeof client.v2.publish)[':destination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.publish[':destination'].$post(args, options))
}

export async function postV2EnqueueQueueNameDestination(
  args: InferRequestType<(typeof client.v2.enqueue)[':queueName'][':destination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.enqueue[':queueName'][':destination'].$post(args, options))
}

export async function postV2Batch(
  args: InferRequestType<typeof client.v2.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.batch.$post(args, options))
}

export async function getV2MessagesMessageId(
  args: InferRequestType<(typeof client.v2.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.messages[':messageId'].$get(args, options))
}

export async function deleteV2MessagesMessageId(
  args: InferRequestType<(typeof client.v2.messages)[':messageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.messages[':messageId'].$delete(args, options))
}

export async function postV2MessagesMessageIdRetry(
  args: InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.messages[':messageId'].retry.$post(args, options))
}

export async function deleteV2Messages(
  args: InferRequestType<typeof client.v2.messages.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.messages.$delete(args, options))
}

export async function getV2BulkActions(
  args: InferRequestType<typeof client.v2.bulkActions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bulkActions.$get(args, options))
}

export async function getV2BulkActionsActionId(
  args: InferRequestType<(typeof client.v2.bulkActions)[':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bulkActions[':actionId'].$get(args, options))
}

export async function getV2Queues(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.queues.$get(undefined, options))
}

export async function postV2Queues(
  args: InferRequestType<typeof client.v2.queues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.queues.$post(args, options))
}

export async function getV2QueuesQueueName(
  args: InferRequestType<(typeof client.v2.queues)[':queueName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.queues[':queueName'].$get(args, options))
}

export async function deleteV2QueuesQueueName(
  args: InferRequestType<(typeof client.v2.queues)[':queueName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.queues[':queueName'].$delete(args, options))
}

export async function postV2QueuesQueueNamePause(
  args: InferRequestType<(typeof client.v2.queues)[':queueName']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.queues[':queueName'].pause.$post(args, options))
}

export async function postV2QueuesQueueNameResume(
  args: InferRequestType<(typeof client.v2.queues)[':queueName']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.queues[':queueName'].resume.$post(args, options))
}

export async function postV2SchedulesDestination(
  args: InferRequestType<(typeof client.v2.schedules)[':destination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':destination'].$post(args, options))
}

export async function getV2Schedules(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.schedules.$get(undefined, options))
}

export async function getV2SchedulesScheduleId(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].$get(args, options))
}

export async function deleteV2SchedulesScheduleId(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].$delete(args, options))
}

export async function postV2SchedulesScheduleIdPause(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].pause.$post(args, options))
}

export async function postV2SchedulesScheduleIdResume(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].resume.$post(args, options))
}

export async function getV2Topics(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.topics.$get(undefined, options))
}

export async function getV2TopicsUrlGroupName(
  args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':urlGroupName'].$get(args, options))
}

export async function deleteV2TopicsUrlGroupName(
  args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':urlGroupName'].$delete(args, options))
}

export async function postV2TopicsUrlGroupNameEndpoints(
  args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':urlGroupName'].endpoints.$post(args, options))
}

export async function deleteV2TopicsUrlGroupNameEndpoints(
  args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.topics[':urlGroupName'].endpoints.$delete(args, options))
}

export async function getV2Dlq(
  args: InferRequestType<typeof client.v2.dlq.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.dlq.$get(args, options))
}

export async function deleteV2Dlq(
  args: InferRequestType<typeof client.v2.dlq.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.dlq.$delete(args, options))
}

export async function getV2DlqDlqId(
  args: InferRequestType<(typeof client.v2.dlq)[':dlqId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.dlq[':dlqId'].$get(args, options))
}

export async function deleteV2DlqDlqId(
  args: InferRequestType<(typeof client.v2.dlq)[':dlqId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.dlq[':dlqId'].$delete(args, options))
}

export async function postV2DlqRetryDlqId(
  args: InferRequestType<(typeof client.v2.dlq.retry)[':dlqId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.dlq.retry[':dlqId'].$post(args, options))
}

export async function postV2DlqRetry(
  args: InferRequestType<typeof client.v2.dlq.retry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.dlq.retry.$post(args, options))
}

export async function getV2FlowControl(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.flowControl.$get(undefined, options))
}

export async function getV2FlowControlFlowControlKey(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.flowControl[':flowControlKey'].$get(args, options))
}

export async function postV2FlowControlFlowControlKeyPause(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.flowControl[':flowControlKey'].pause.$post(args, options))
}

export async function postV2FlowControlFlowControlKeyResume(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.flowControl[':flowControlKey'].resume.$post(args, options))
}

export async function postV2FlowControlFlowControlKeyPin(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.flowControl[':flowControlKey'].pin.$post(args, options))
}

export async function postV2FlowControlFlowControlKeyUnpin(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.flowControl[':flowControlKey'].unpin.$post(args, options))
}

export async function postV2FlowControlFlowControlKeyResetRate(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.flowControl[':flowControlKey'].resetRate.$post(args, options),
  )
}

export async function getV2GlobalParallelism(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.globalParallelism.$get(undefined, options))
}

export async function getV2Keys(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.keys.$get(undefined, options))
}

export async function postV2KeysRotate(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.keys.rotate.$post(undefined, options))
}

export async function getV2Logs(
  args: InferRequestType<typeof client.v2.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.logs.$get(args, options))
}
