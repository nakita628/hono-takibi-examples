import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1ClusterInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['cluster-info'].$get(undefined, options))
}

export async function getApiV1Namespaces(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces.$get(args, options))
}

export async function postApiV1Namespaces(
  args: InferRequestType<typeof client.api.v1.namespaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces.$post(args, options))
}

export async function getApiV1NamespacesNamespace(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].$get(args, options))
}

export async function getApiV1NamespacesNamespaceActivities(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].activities.$get(args, options))
}

export async function postApiV1NamespacesNamespaceActivitiesDeprecatedPause(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activities-deprecated'].pause.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesDeprecatedReset(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activities-deprecated'].reset.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesDeprecatedUnpause(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activities-deprecated'].unpause.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptions(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activities-deprecated']['update-options'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespaceActivitiesActivityId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdCancel(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].cancel.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdComplete(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].complete.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdFail(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].fail.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdHeartbeat(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].heartbeat.$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceActivitiesActivityIdOutcome(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].outcome.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdPause(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].pause.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdReset(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].reset.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceled(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId']['resolve-as-canceled'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdTerminate(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].terminate.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdUnpause(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId'].unpause.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptions(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].activities[':activityId']['update-options'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV1NamespacesNamespaceActivityComplete(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activity-complete'].$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceActivityCount(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activity-count'].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivityFail(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activity-fail'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivityHeartbeat(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activity-heartbeat'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceActivityResolveAsCanceled(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['activity-resolve-as-canceled'].$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceArchivedWorkflows(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['archived-workflows'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceBatchOperations(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['batch-operations'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceBatchOperationsJobId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceBatchOperationsJobId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceBatchOperationsJobIdStop(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].stop.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['current-deployment'][':deployment.series_name'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespaceCurrentDeploymentSeriesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['current-deployment'][':seriesName'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceDeployments(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].deployments.$get(args, options))
}

export async function getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].deployments[':deployment.series_name'][
      ':deployment.build_id'
    ].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachability(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].deployments[':deployment.series_name'][
      ':deployment.build_id'
    ].reachability.$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceNexusOperationCount(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['nexus-operation-count'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceNexusOperations(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['nexus-operations'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceNexusOperationsOperationId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceNexusOperationsOperationId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceNexusOperationsOperationIdCancel(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespaceNexusOperationsOperationIdPoll(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].poll.$get(
      args,
      options,
    ),
  )
}

export async function postApiV1NamespacesNamespaceNexusOperationsOperationIdTerminate(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].terminate.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespaceScheduleCount(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['schedule-count'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceSchedules(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].schedules.$get(args, options))
}

export async function getApiV1NamespacesNamespaceSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimes(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].schedules[':scheduleId']['matching-times'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV1NamespacesNamespaceSchedulesScheduleIdPatch(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].patch.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceSchedulesScheduleIdUpdate(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].update.$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceSearchAttributes(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['search-attributes'].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfig(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue']['update-config'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibility(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
      'worker-build-id-compatibility'
    ].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRules(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
      'worker-versioning-rules'
    ].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceTaskQueuesTaskQueueName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['task-queues'][':task_queue.name'].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceUpdate(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].update.$post(args, options))
}

export async function postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ].$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id'].$get(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id'].$delete(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfig(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id']['update-compute-config'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadata(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id']['update-metadata'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfig(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id']['validate-compute-config'].$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkerDeployments(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployments'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersion(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
      'set-current-version'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManager(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
      'set-manager'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersion(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
      'set-ramping-version'
    ].$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkerTaskReachability(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['worker-task-reachability'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkers(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].workers.$get(args, options))
}

export async function getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workers.describe[':workerInstanceKey'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV1NamespacesNamespaceWorkersFetchConfig(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workers['fetch-config'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkersHeartbeat(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workers.heartbeat.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkersUpdateConfig(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workers['update-config'].$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkflowCount(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['workflow-count'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkflowRules(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['workflow-rules'].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowRules(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['workflow-rules'].$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkflowRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['workflow-rules'][':ruleId'].$get(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceWorkflowRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace']['workflow-rules'][':ruleId'].$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkflows(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].workflows.$get(args, options))
}

export async function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].$get(args, options),
  )
}

export async function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistory(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].history.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverse(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'][
      'history-reverse'
    ].$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryType(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].query[
      ':query.query_type'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRule(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'][
      'trigger-rule'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdComplete(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].complete.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFail(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].fail.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeat(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].heartbeat.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPause(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].pause.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdReset(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].reset.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceled(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
      'resolve-as-canceled'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpause(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].unpause.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptions(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
      'update-options'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdPause(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].pause.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId']['signal-with-start'][
      ':signalName'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpause(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflowId'].unpause.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancel(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[
      ':workflow_execution.workflow_id'
    ].cancel.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdReset(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].reset.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].signal[
      ':signalName'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminate(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[
      ':workflow_execution.workflow_id'
    ].terminate.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptions(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'][
      'update-options'
    ].$post(args, options),
  )
}

export async function postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].update[
      ':request.input.name'
    ].$post(args, options),
  )
}

export async function getApiV1NexusEndpoints(
  args: InferRequestType<typeof client.api.v1.nexus.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nexus.endpoints.$get(args, options))
}

export async function postApiV1NexusEndpoints(
  args: InferRequestType<typeof client.api.v1.nexus.endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nexus.endpoints.$post(args, options))
}

export async function getApiV1NexusEndpointsId(
  args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nexus.endpoints[':id'].$get(args, options))
}

export async function deleteApiV1NexusEndpointsId(
  args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nexus.endpoints[':id'].$delete(args, options))
}

export async function postApiV1NexusEndpointsIdUpdate(
  args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nexus.endpoints[':id'].update.$post(args, options))
}

export async function getApiV1SystemInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['system-info'].$get(undefined, options))
}

export async function getCluster(options?: ClientRequestOptions) {
  return await parseResponse(client.cluster.$get(undefined, options))
}

export async function getClusterNamespaces(
  args: InferRequestType<typeof client.cluster.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.namespaces.$get(args, options))
}

export async function postClusterNamespaces(
  args: InferRequestType<typeof client.cluster.namespaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.namespaces.$post(args, options))
}

export async function getClusterNamespacesNamespace(
  args: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.namespaces[':namespace'].$get(args, options))
}

export async function getClusterNamespacesNamespaceSearchAttributes(
  args: InferRequestType<
    (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cluster.namespaces[':namespace']['search-attributes'].$get(args, options),
  )
}

export async function postClusterNamespacesNamespaceUpdate(
  args: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.namespaces[':namespace'].update.$post(args, options))
}

export async function getClusterNexusEndpoints(
  args: InferRequestType<typeof client.cluster.nexus.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.nexus.endpoints.$get(args, options))
}

export async function postClusterNexusEndpoints(
  args: InferRequestType<typeof client.cluster.nexus.endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.nexus.endpoints.$post(args, options))
}

export async function getClusterNexusEndpointsId(
  args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.nexus.endpoints[':id'].$get(args, options))
}

export async function deleteClusterNexusEndpointsId(
  args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.nexus.endpoints[':id'].$delete(args, options))
}

export async function postClusterNexusEndpointsIdUpdate(
  args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.nexus.endpoints[':id'].update.$post(args, options))
}

export async function getNamespacesNamespaceActivities(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace'].activities.$get(args, options))
}

export async function postNamespacesNamespaceActivitiesDeprecatedPause(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['activities-deprecated'].pause.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesDeprecatedReset(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['activities-deprecated'].reset.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesDeprecatedUnpause(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['activities-deprecated'].unpause.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesDeprecatedUpdateOptions(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['activities-deprecated']['update-options'].$post(args, options),
  )
}

export async function getNamespacesNamespaceActivitiesActivityId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].$get(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdCancel(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].cancel.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdComplete(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].complete.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdFail(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].fail.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdHeartbeat(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].heartbeat.$post(args, options),
  )
}

export async function getNamespacesNamespaceActivitiesActivityIdOutcome(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].outcome.$get(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdPause(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].pause.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdReset(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].reset.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdResolveAsCanceled(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId']['resolve-as-canceled'].$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdTerminate(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].terminate.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdUnpause(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId'].unpause.$post(args, options),
  )
}

export async function postNamespacesNamespaceActivitiesActivityIdUpdateOptions(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].activities[':activityId']['update-options'].$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceActivityComplete(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['activity-complete'].$post(args, options),
  )
}

export async function getNamespacesNamespaceActivityCount(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace']['activity-count'].$get(args, options))
}

export async function postNamespacesNamespaceActivityFail(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace']['activity-fail'].$post(args, options))
}

export async function postNamespacesNamespaceActivityHeartbeat(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['activity-heartbeat'].$post(args, options),
  )
}

export async function postNamespacesNamespaceActivityResolveAsCanceled(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['activity-resolve-as-canceled'].$post(args, options),
  )
}

export async function getNamespacesNamespaceArchivedWorkflows(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['archived-workflows'].$get(args, options),
  )
}

export async function getNamespacesNamespaceBatchOperations(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['batch-operations'].$get(args, options),
  )
}

export async function getNamespacesNamespaceBatchOperationsJobId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['batch-operations'][':jobId'].$get(args, options),
  )
}

export async function postNamespacesNamespaceBatchOperationsJobId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['batch-operations'][':jobId'].$post(args, options),
  )
}

export async function postNamespacesNamespaceBatchOperationsJobIdStop(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['batch-operations'][':jobId'].stop.$post(args, options),
  )
}

export async function postNamespacesNamespaceCurrentDeploymentDeploymentSeriesName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['current-deployment'][':deployment.series_name'].$post(
      args,
      options,
    ),
  )
}

export async function getNamespacesNamespaceCurrentDeploymentSeriesName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['current-deployment'][':seriesName'].$get(args, options),
  )
}

export async function getNamespacesNamespaceDeployments(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace'].deployments.$get(args, options))
}

export async function getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].deployments[':deployment.series_name'][
      ':deployment.build_id'
    ].$get(args, options),
  )
}

export async function getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachability(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].deployments[':deployment.series_name'][
      ':deployment.build_id'
    ].reachability.$get(args, options),
  )
}

export async function getNamespacesNamespaceNexusOperationCount(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['nexus-operation-count'].$get(args, options),
  )
}

export async function getNamespacesNamespaceNexusOperations(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['nexus-operations'].$get(args, options),
  )
}

export async function getNamespacesNamespaceNexusOperationsOperationId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['nexus-operations'][':operationId'].$get(args, options),
  )
}

export async function postNamespacesNamespaceNexusOperationsOperationId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['nexus-operations'][':operationId'].$post(args, options),
  )
}

export async function postNamespacesNamespaceNexusOperationsOperationIdCancel(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['nexus-operations'][':operationId'].cancel.$post(args, options),
  )
}

export async function getNamespacesNamespaceNexusOperationsOperationIdPoll(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['nexus-operations'][':operationId'].poll.$get(args, options),
  )
}

export async function postNamespacesNamespaceNexusOperationsOperationIdTerminate(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['nexus-operations'][':operationId'].terminate.$post(
      args,
      options,
    ),
  )
}

export async function getNamespacesNamespaceScheduleCount(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace']['schedule-count'].$get(args, options))
}

export async function getNamespacesNamespaceSchedules(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace'].schedules.$get(args, options))
}

export async function getNamespacesNamespaceSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].schedules[':scheduleId'].$get(args, options),
  )
}

export async function postNamespacesNamespaceSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].schedules[':scheduleId'].$post(args, options),
  )
}

export async function deleteNamespacesNamespaceSchedulesScheduleId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].schedules[':scheduleId'].$delete(args, options),
  )
}

export async function getNamespacesNamespaceSchedulesScheduleIdMatchingTimes(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].schedules[':scheduleId']['matching-times'].$get(args, options),
  )
}

export async function postNamespacesNamespaceSchedulesScheduleIdPatch(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].schedules[':scheduleId'].patch.$post(args, options),
  )
}

export async function postNamespacesNamespaceSchedulesScheduleIdUpdate(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].schedules[':scheduleId'].update.$post(args, options),
  )
}

export async function postNamespacesNamespaceTaskQueuesTaskQueueUpdateConfig(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['task-queues'][':taskQueue']['update-config'].$post(
      args,
      options,
    ),
  )
}

export async function getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibility(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['task-queues'][':taskQueue'][
      'worker-build-id-compatibility'
    ].$get(args, options),
  )
}

export async function getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRules(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules'].$get(
      args,
      options,
    ),
  )
}

export async function getNamespacesNamespaceTaskQueuesTaskQueueName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['task-queues'][':task_queue.name'].$get(args, options),
  )
}

export async function postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ].$post(args, options),
  )
}

export async function getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id'].$get(args, options),
  )
}

export async function deleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id'].$delete(args, options),
  )
}

export async function postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfig(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id']['update-compute-config'].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadata(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id']['update-metadata'].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfig(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployment-versions'][
      ':deployment_version.deployment_name'
    ][':deployment_version.build_id']['validate-compute-config'].$post(args, options),
  )
}

export async function getNamespacesNamespaceWorkerDeployments(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployments'].$get(args, options),
  )
}

export async function getNamespacesNamespaceWorkerDeploymentsDeploymentName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$get(args, options),
  )
}

export async function postNamespacesNamespaceWorkerDeploymentsDeploymentName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$post(args, options),
  )
}

export async function deleteNamespacesNamespaceWorkerDeploymentsDeploymentName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$delete(args, options),
  )
}

export async function postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersion(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployments'][':deploymentName'][
      'set-current-version'
    ].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManager(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployments'][':deploymentName']['set-manager'].$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersion(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-deployments'][':deploymentName'][
      'set-ramping-version'
    ].$post(args, options),
  )
}

export async function getNamespacesNamespaceWorkerTaskReachability(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['worker-task-reachability'].$get(args, options),
  )
}

export async function getNamespacesNamespaceWorkers(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace'].workers.$get(args, options))
}

export async function getNamespacesNamespaceWorkersDescribeWorkerInstanceKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workers.describe[':workerInstanceKey'].$get(args, options),
  )
}

export async function postNamespacesNamespaceWorkersFetchConfig(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workers['fetch-config'].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkersHeartbeat(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace'].workers.heartbeat.$post(args, options))
}

export async function postNamespacesNamespaceWorkersUpdateConfig(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['update-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workers['update-config'].$post(args, options),
  )
}

export async function getNamespacesNamespaceWorkflowCount(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace']['workflow-count'].$get(args, options))
}

export async function getNamespacesNamespaceWorkflowRules(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace']['workflow-rules'].$get(args, options))
}

export async function postNamespacesNamespaceWorkflowRules(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace']['workflow-rules'].$post(args, options))
}

export async function getNamespacesNamespaceWorkflowRulesRuleId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['workflow-rules'][':ruleId'].$get(args, options),
  )
}

export async function deleteNamespacesNamespaceWorkflowRulesRuleId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace']['workflow-rules'][':ruleId'].$delete(args, options),
  )
}

export async function getNamespacesNamespaceWorkflows(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.namespaces[':namespace'].workflows.$get(args, options))
}

export async function getNamespacesNamespaceWorkflowsExecutionWorkflowId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':execution.workflow_id'].$get(args, options),
  )
}

export async function getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistory(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':execution.workflow_id'].history.$get(args, options),
  )
}

export async function getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverse(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':execution.workflow_id']['history-reverse'].$get(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryType(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':execution.workflow_id'].query[
      ':query.query_type'
    ].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRule(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':execution.workflow_id']['trigger-rule'].$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdComplete(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].complete.$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFail(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'].fail.$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeat(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].heartbeat.$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPause(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'].pause.$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdReset(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'].reset.$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceled(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
      'resolve-as-canceled'
    ].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpause(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].activities[
      ':activityId'
    ].unpause.$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptions(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
      'update-options'
    ].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdPause(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].pause.$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId']['signal-with-start'][
      ':signalName'
    ].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowIdUnpause(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflowId'].unpause.$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancel(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdReset(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].reset.$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].signal[
      ':signalName'
    ].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminate(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].terminate.$post(
      args,
      options,
    ),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptions(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'][
      'update-options'
    ].$post(args, options),
  )
}

export async function postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputName(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].update[
      ':request.input.name'
    ].$post(args, options),
  )
}

export async function getSystemInfo(options?: ClientRequestOptions) {
  return await parseResponse(client['system-info'].$get(undefined, options))
}
