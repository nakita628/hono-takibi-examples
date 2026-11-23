import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2TriggerWorkflowUrl(
  args: InferRequestType<(typeof client.v2.trigger)[':workflowUrl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.trigger[':workflowUrl'].$post(args, options))
}

export async function postV2BatchTrigger(
  args: InferRequestType<typeof client.v2.batch.trigger.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.batch.trigger.$post(args, options))
}

export async function deleteV2WorkflowsRunsWorkflowRunId(
  args: InferRequestType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.runs[':workflowRunId'].$delete(args, options))
}

export async function deleteV2WorkflowsRuns(
  args: InferRequestType<typeof client.v2.workflows.runs.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.runs.$delete(args, options))
}

export async function postV2MessagesMessageIdRetry(
  args: InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.messages[':messageId'].retry.$post(args, options))
}

export async function getV2WorkflowsBulkActions(
  args: InferRequestType<typeof client.v2.workflows.bulkActions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.bulkActions.$get(args, options))
}

export async function getV2WorkflowsBulkActionsActionId(
  args: InferRequestType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.bulkActions[':actionId'].$get(args, options))
}

export async function getV2WorkflowsLogs(
  args: InferRequestType<typeof client.v2.workflows.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.logs.$get(args, options))
}

export async function getV2WorkflowsDlq(
  args: InferRequestType<typeof client.v2.workflows.dlq.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq.$get(args, options))
}

export async function deleteV2WorkflowsDlq(
  args: InferRequestType<typeof client.v2.workflows.dlq.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq.$delete(args, options))
}

export async function getV2WorkflowsDlqDlqId(
  args: InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq[':dlqId'].$get(args, options))
}

export async function deleteV2WorkflowsDlqDlqId(
  args: InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq[':dlqId'].$delete(args, options))
}

export async function postV2WorkflowsDlqResumeDlqId(
  args: InferRequestType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq.resume[':dlqId'].$post(args, options))
}

export async function postV2WorkflowsDlqResume(
  args: InferRequestType<typeof client.v2.workflows.dlq.resume.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq.resume.$post(args, options))
}

export async function postV2WorkflowsDlqRestartDlqId(
  args: InferRequestType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq.restart[':dlqId'].$post(args, options))
}

export async function postV2WorkflowsDlqRestart(
  args: InferRequestType<typeof client.v2.workflows.dlq.restart.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq.restart.$post(args, options))
}

export async function postV2WorkflowsDlqCallbackDlqId(
  args: InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq.callback[':dlqId'].$post(args, options))
}

export async function deleteV2WorkflowsDlqCallbackDlqId(
  args: InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.workflows.dlq.callback[':dlqId'].$delete(args, options))
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

export async function getV2KeysRotate(
  args: InferRequestType<typeof client.v2.keys.rotate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.keys.rotate.$get(args, options))
}

export async function postV2KeysRotate(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.keys.rotate.$post(undefined, options))
}

export async function postV2NotifyEventId(
  args: InferRequestType<(typeof client.v2.notify)[':eventId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.notify[':eventId'].$post(args, options))
}

export async function postV2NotifyWorkflowRunIdEventId(
  args: InferRequestType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.notify[':workflowRunId'][':eventId'].$post(args, options))
}

export async function getV2WaitersEventId(
  args: InferRequestType<(typeof client.v2.waiters)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.waiters[':eventId'].$get(args, options))
}
