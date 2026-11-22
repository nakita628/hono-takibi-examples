import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProfilingGroupsProfilingGroupNameNotificationConfiguration(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].notificationConfiguration.$get(args, options),
  )
}

export async function postProfilingGroupsProfilingGroupNameNotificationConfiguration(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].notificationConfiguration.$post(args, options),
  )
}

export async function postProfilingGroupsProfilingGroupNameFramesDashMetrics(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['frames']['-']['metrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].frames['-'].metrics.$post(args, options),
  )
}

export async function postProfilingGroupsProfilingGroupNameConfigureAgent(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['configureAgent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].configureAgent.$post(args, options),
  )
}

export async function postProfilingGroupsClientToken(
  args: InferRequestType<(typeof client)['profilingGroups#clientToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['profilingGroups#clientToken'].$post(args, options))
}

export async function getProfilingGroupsProfilingGroupName(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profilingGroups[':profilingGroupName'].$get(args, options))
}

export async function putProfilingGroupsProfilingGroupName(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profilingGroups[':profilingGroupName'].$put(args, options))
}

export async function deleteProfilingGroupsProfilingGroupName(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profilingGroups[':profilingGroupName'].$delete(args, options))
}

export async function getInternalFindingsReports(
  args: InferRequestType<typeof client.internal.findingsReports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.internal.findingsReports.$get(args, options))
}

export async function getProfilingGroupsProfilingGroupNamePolicy(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].policy.$get(args, options),
  )
}

export async function getProfilingGroupsProfilingGroupNameProfile(
  args: InferRequestType<(typeof client.profilingGroups)[':profilingGroupName']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].profile.$get(args, options),
  )
}

export async function getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTime(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['recommendations#endTime&startTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.internal.profilingGroups[':profilingGroupName'][
      'recommendations#endTime&startTime'
    ].$get(args, options),
  )
}

export async function getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTime(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['findingsReports#endTime&startTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.internal.profilingGroups[':profilingGroupName'][
      'findingsReports#endTime&startTime'
    ].$get(args, options),
  )
}

export async function getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTime(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['profileTimes#endTime&period&startTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName']['profileTimes#endTime&period&startTime'].$get(
      args,
      options,
    ),
  )
}

export async function getProfilingGroups(
  args: InferRequestType<typeof client.profilingGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profilingGroups.$get(args, options))
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

export async function postProfilingGroupsProfilingGroupNameAgentProfileContentType(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['agentProfile#Content-Type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName']['agentProfile#Content-Type'].$post(args, options),
  )
}

export async function putProfilingGroupsProfilingGroupNamePolicyActionGroup(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].policy[':actionGroup'].$put(args, options),
  )
}

export async function deleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelId(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['notificationConfiguration'][':channelId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].notificationConfiguration[':channelId'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionId(
  args: InferRequestType<
    (typeof client.profilingGroups)[':profilingGroupName']['policy'][':actionGroup#revisionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profilingGroups[':profilingGroupName'].policy[':actionGroup#revisionId'].$delete(
      args,
      options,
    ),
  )
}

export async function postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedback(
  args: InferRequestType<
    (typeof client.internal.profilingGroups)[':profilingGroupName']['anomalies'][':anomalyInstanceId']['feedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.internal.profilingGroups[':profilingGroupName'].anomalies[
      ':anomalyInstanceId'
    ].feedback.$post(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
