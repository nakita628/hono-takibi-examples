import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCreateReplicationSet(
  args: InferRequestType<typeof client.createReplicationSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createReplicationSet.$post(args, options))
}

export async function postCreateResponsePlan(
  args: InferRequestType<typeof client.createResponsePlan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createResponsePlan.$post(args, options))
}

export async function postCreateTimelineEvent(
  args: InferRequestType<typeof client.createTimelineEvent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createTimelineEvent.$post(args, options))
}

export async function postDeleteIncidentRecord(
  args: InferRequestType<typeof client.deleteIncidentRecord.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteIncidentRecord.$post(args, options))
}

export async function postDeleteReplicationSetArn(
  args: InferRequestType<(typeof client)['deleteReplicationSet#arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['deleteReplicationSet#arn'].$post(args, options))
}

export async function postDeleteResourcePolicy(
  args: InferRequestType<typeof client.deleteResourcePolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteResourcePolicy.$post(args, options))
}

export async function postDeleteResponsePlan(
  args: InferRequestType<typeof client.deleteResponsePlan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteResponsePlan.$post(args, options))
}

export async function postDeleteTimelineEvent(
  args: InferRequestType<typeof client.deleteTimelineEvent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteTimelineEvent.$post(args, options))
}

export async function getGetIncidentRecordArn(
  args: InferRequestType<(typeof client)['getIncidentRecord#arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['getIncidentRecord#arn'].$get(args, options))
}

export async function getGetReplicationSetArn(
  args: InferRequestType<(typeof client)['getReplicationSet#arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['getReplicationSet#arn'].$get(args, options))
}

export async function postGetResourcePoliciesResourceArn(
  args: InferRequestType<(typeof client)['getResourcePolicies#resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['getResourcePolicies#resourceArn'].$post(args, options))
}

export async function getGetResponsePlanArn(
  args: InferRequestType<(typeof client)['getResponsePlan#arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['getResponsePlan#arn'].$get(args, options))
}

export async function getGetTimelineEventEventIdIncidentRecordArn(
  args: InferRequestType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['getTimelineEvent#eventId&incidentRecordArn'].$get(args, options),
  )
}

export async function postListIncidentRecords(
  args: InferRequestType<typeof client.listIncidentRecords.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listIncidentRecords.$post(args, options))
}

export async function postListRelatedItems(
  args: InferRequestType<typeof client.listRelatedItems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listRelatedItems.$post(args, options))
}

export async function postListReplicationSets(
  args: InferRequestType<typeof client.listReplicationSets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listReplicationSets.$post(args, options))
}

export async function postListResponsePlans(
  args: InferRequestType<typeof client.listResponsePlans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listResponsePlans.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postListTimelineEvents(
  args: InferRequestType<typeof client.listTimelineEvents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listTimelineEvents.$post(args, options))
}

export async function postPutResourcePolicy(
  args: InferRequestType<typeof client.putResourcePolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.putResourcePolicy.$post(args, options))
}

export async function postStartIncident(
  args: InferRequestType<typeof client.startIncident.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.startIncident.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postUpdateDeletionProtection(
  args: InferRequestType<typeof client.updateDeletionProtection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateDeletionProtection.$post(args, options))
}

export async function postUpdateIncidentRecord(
  args: InferRequestType<typeof client.updateIncidentRecord.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateIncidentRecord.$post(args, options))
}

export async function postUpdateRelatedItems(
  args: InferRequestType<typeof client.updateRelatedItems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateRelatedItems.$post(args, options))
}

export async function postUpdateReplicationSet(
  args: InferRequestType<typeof client.updateReplicationSet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateReplicationSet.$post(args, options))
}

export async function postUpdateResponsePlan(
  args: InferRequestType<typeof client.updateResponsePlan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateResponsePlan.$post(args, options))
}

export async function postUpdateTimelineEvent(
  args: InferRequestType<typeof client.updateTimelineEvent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateTimelineEvent.$post(args, options))
}
