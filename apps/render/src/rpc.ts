import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBlueprints(
  args: InferRequestType<typeof client.blueprints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blueprints.$get(args, options))
}

export async function postBlueprintsValidate(
  args: InferRequestType<typeof client.blueprints.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blueprints.validate.$post(args, options))
}

export async function deleteOwnersOwnerIdMembersUserId(
  args: InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.owners[':ownerId'].members[':userId'].$delete(args, options))
}

export async function patchOwnersOwnerIdMembersUserId(
  args: InferRequestType<(typeof client.owners)[':ownerId']['members'][':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.owners[':ownerId'].members[':userId'].$patch(args, options))
}

export async function getBlueprintsBlueprintId(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blueprints[':blueprintId'].$get(args, options))
}

export async function deleteBlueprintsBlueprintId(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blueprints[':blueprintId'].$delete(args, options))
}

export async function patchBlueprintsBlueprintId(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blueprints[':blueprintId'].$patch(args, options))
}

export async function getBlueprintsBlueprintIdSyncs(
  args: InferRequestType<(typeof client.blueprints)[':blueprintId']['syncs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blueprints[':blueprintId'].syncs.$get(args, options))
}

export async function getDedicatedIps(
  args: InferRequestType<(typeof client)['dedicated-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dedicated-ips'].$get(args, options))
}

export async function postDedicatedIps(
  args: InferRequestType<(typeof client)['dedicated-ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dedicated-ips'].$post(args, options))
}

export async function getDedicatedIpsDedicatedIpId(
  args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dedicated-ips'][':dedicatedIpId'].$get(args, options))
}

export async function deleteDedicatedIpsDedicatedIpId(
  args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dedicated-ips'][':dedicatedIpId'].$delete(args, options))
}

export async function patchDedicatedIpsDedicatedIpId(
  args: InferRequestType<(typeof client)['dedicated-ips'][':dedicatedIpId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dedicated-ips'][':dedicatedIpId'].$patch(args, options))
}

export async function getDisks(
  args: InferRequestType<typeof client.disks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disks.$get(args, options))
}

export async function postDisks(
  args: InferRequestType<typeof client.disks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disks.$post(args, options))
}

export async function getDisksDiskId(
  args: InferRequestType<(typeof client.disks)[':diskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disks[':diskId'].$get(args, options))
}

export async function deleteDisksDiskId(
  args: InferRequestType<(typeof client.disks)[':diskId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disks[':diskId'].$delete(args, options))
}

export async function patchDisksDiskId(
  args: InferRequestType<(typeof client.disks)[':diskId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disks[':diskId'].$patch(args, options))
}

export async function getDisksDiskIdSnapshots(
  args: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disks[':diskId'].snapshots.$get(args, options))
}

export async function postDisksDiskIdSnapshotsRestore(
  args: InferRequestType<(typeof client.disks)[':diskId']['snapshots']['restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disks[':diskId'].snapshots.restore.$post(args, options))
}

export async function getUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$get(undefined, options))
}

export async function getOwners(
  args: InferRequestType<typeof client.owners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.owners.$get(args, options))
}

export async function getOwnersOwnerId(
  args: InferRequestType<(typeof client.owners)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.owners[':ownerId'].$get(args, options))
}

export async function getOwnersOwnerIdMembers(
  args: InferRequestType<(typeof client.owners)[':ownerId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.owners[':ownerId'].members.$get(args, options))
}

export async function getOwnersOwnerIdAuditLogs(
  args: InferRequestType<(typeof client.owners)[':ownerId']['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.owners[':ownerId']['audit-logs'].$get(args, options))
}

export async function getOrganizationsOrgIdAuditLogs(
  args: InferRequestType<(typeof client.organizations)[':orgId']['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':orgId']['audit-logs'].$get(args, options))
}

export async function getNotificationSettingsOwnersOwnerId(
  args: InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['notification-settings'].owners[':ownerId'].$get(args, options))
}

export async function patchNotificationSettingsOwnersOwnerId(
  args: InferRequestType<(typeof client)['notification-settings']['owners'][':ownerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['notification-settings'].owners[':ownerId'].$patch(args, options),
  )
}

export async function getNotificationSettingsOverrides(
  args: InferRequestType<(typeof client)['notification-settings']['overrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['notification-settings'].overrides.$get(args, options))
}

export async function getNotificationSettingsOverridesServicesServiceId(
  args: InferRequestType<
    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['notification-settings'].overrides.services[':serviceId'].$get(args, options),
  )
}

export async function patchNotificationSettingsOverridesServicesServiceId(
  args: InferRequestType<
    (typeof client)['notification-settings']['overrides']['services'][':serviceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['notification-settings'].overrides.services[':serviceId'].$patch(args, options),
  )
}

export async function getRegistrycredentials(
  args: InferRequestType<typeof client.registrycredentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registrycredentials.$get(args, options))
}

export async function postRegistrycredentials(
  args: InferRequestType<typeof client.registrycredentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registrycredentials.$post(args, options))
}

export async function getRegistrycredentialsRegistryCredentialId(
  args: InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrycredentials[':registryCredentialId'].$get(args, options),
  )
}

export async function deleteRegistrycredentialsRegistryCredentialId(
  args: InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrycredentials[':registryCredentialId'].$delete(args, options),
  )
}

export async function patchRegistrycredentialsRegistryCredentialId(
  args: InferRequestType<(typeof client.registrycredentials)[':registryCredentialId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrycredentials[':registryCredentialId'].$patch(args, options),
  )
}

export async function getServices(
  args: InferRequestType<typeof client.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$get(args, options))
}

export async function postServices(
  args: InferRequestType<typeof client.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$post(args, options))
}

export async function getServicesServiceId(
  args: InferRequestType<(typeof client.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].$get(args, options))
}

export async function deleteServicesServiceId(
  args: InferRequestType<(typeof client.services)[':serviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].$delete(args, options))
}

export async function patchServicesServiceId(
  args: InferRequestType<(typeof client.services)[':serviceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].$patch(args, options))
}

export async function postServicesServiceIdCachePurge(
  args: InferRequestType<(typeof client.services)[':serviceId']['cache']['purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].cache.purge.$post(args, options))
}

export async function getServicesServiceIdDeploys(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].deploys.$get(args, options))
}

export async function postServicesServiceIdDeploys(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].deploys.$post(args, options))
}

export async function getServicesServiceIdDeploysDeployId(
  args: InferRequestType<(typeof client.services)[':serviceId']['deploys'][':deployId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].deploys[':deployId'].$get(args, options))
}

export async function postServicesServiceIdDeploysDeployIdCancel(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['deploys'][':deployId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId'].deploys[':deployId'].cancel.$post(args, options),
  )
}

export async function postServicesServiceIdRollback(
  args: InferRequestType<(typeof client.services)[':serviceId']['rollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].rollback.$post(args, options))
}

export async function getServicesServiceIdEnvVars(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId']['env-vars'].$get(args, options))
}

export async function putServicesServiceIdEnvVars(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId']['env-vars'].$put(args, options))
}

export async function getServicesServiceIdEnvVarsEnvVarKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['env-vars'][':envVarKey'].$get(args, options),
  )
}

export async function putServicesServiceIdEnvVarsEnvVarKey(
  args: InferRequestType<(typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['env-vars'][':envVarKey'].$put(args, options),
  )
}

export async function deleteServicesServiceIdEnvVarsEnvVarKey(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['env-vars'][':envVarKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['env-vars'][':envVarKey'].$delete(args, options),
  )
}

export async function getServicesServiceIdSecretFiles(
  args: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId']['secret-files'].$get(args, options))
}

export async function putServicesServiceIdSecretFiles(
  args: InferRequestType<(typeof client.services)[':serviceId']['secret-files']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId']['secret-files'].$put(args, options))
}

export async function getServicesServiceIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['secret-files'][':envVarKey'].$get(args, options),
  )
}

export async function putServicesServiceIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['secret-files'][':envVarKey'].$put(args, options),
  )
}

export async function deleteServicesServiceIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['secret-files'][':envVarKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['secret-files'][':envVarKey'].$delete(args, options),
  )
}

export async function getServicesServiceIdEvents(
  args: InferRequestType<(typeof client.services)[':serviceId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].events.$get(args, options))
}

export async function getServicesServiceIdHeaders(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].headers.$get(args, options))
}

export async function putServicesServiceIdHeaders(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].headers.$put(args, options))
}

export async function postServicesServiceIdHeaders(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].headers.$post(args, options))
}

export async function deleteServicesServiceIdHeadersHeaderId(
  args: InferRequestType<(typeof client.services)[':serviceId']['headers'][':headerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId'].headers[':headerId'].$delete(args, options),
  )
}

export async function getServicesServiceIdRoutes(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].routes.$get(args, options))
}

export async function putServicesServiceIdRoutes(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].routes.$put(args, options))
}

export async function postServicesServiceIdRoutes(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].routes.$post(args, options))
}

export async function deleteServicesServiceIdRoutesRouteId(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId'].routes[':routeId'].$delete(args, options),
  )
}

export async function patchServicesServiceIdRoutesRouteId(
  args: InferRequestType<(typeof client.services)[':serviceId']['routes'][':routeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].routes[':routeId'].$patch(args, options))
}

export async function getServicesServiceIdCustomDomains(
  args: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId']['custom-domains'].$get(args, options))
}

export async function postServicesServiceIdCustomDomains(
  args: InferRequestType<(typeof client.services)[':serviceId']['custom-domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId']['custom-domains'].$post(args, options))
}

export async function getServicesServiceIdCustomDomainsCustomDomainNameOrID(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$get(args, options),
  )
}

export async function deleteServicesServiceIdCustomDomainsCustomDomainNameOrID(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].$delete(args, options),
  )
}

export async function postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerify(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['custom-domains'][':customDomainNameOrID']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId']['custom-domains'][':customDomainNameOrID'].verify.$post(
      args,
      options,
    ),
  )
}

export async function postServicesServiceIdSuspend(
  args: InferRequestType<(typeof client.services)[':serviceId']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].suspend.$post(args, options))
}

export async function postServicesServiceIdResume(
  args: InferRequestType<(typeof client.services)[':serviceId']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].resume.$post(args, options))
}

export async function postServicesServiceIdRestart(
  args: InferRequestType<(typeof client.services)[':serviceId']['restart']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].restart.$post(args, options))
}

export async function postServicesServiceIdScale(
  args: InferRequestType<(typeof client.services)[':serviceId']['scale']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].scale.$post(args, options))
}

export async function putServicesServiceIdAutoscaling(
  args: InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].autoscaling.$put(args, options))
}

export async function deleteServicesServiceIdAutoscaling(
  args: InferRequestType<(typeof client.services)[':serviceId']['autoscaling']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].autoscaling.$delete(args, options))
}

export async function postServicesServiceIdPreview(
  args: InferRequestType<(typeof client.services)[':serviceId']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].preview.$post(args, options))
}

export async function getServicesServiceIdJobs(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].jobs.$get(args, options))
}

export async function postServicesServiceIdJobs(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].jobs.$post(args, options))
}

export async function getServicesServiceIdJobsJobId(
  args: InferRequestType<(typeof client.services)[':serviceId']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].jobs[':jobId'].$get(args, options))
}

export async function postServicesServiceIdJobsJobIdCancel(
  args: InferRequestType<
    (typeof client.services)[':serviceId']['jobs'][':jobId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':serviceId'].jobs[':jobId'].cancel.$post(args, options),
  )
}

export async function getServicesServiceIdInstances(
  args: InferRequestType<(typeof client.services)[':serviceId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId'].instances.$get(args, options))
}

export async function getServicesServiceIdOutboundIps(
  args: InferRequestType<(typeof client.services)[':serviceId']['outbound-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':serviceId']['outbound-ips'].$get(args, options))
}

export async function postCronJobsCronJobIdRuns(
  args: InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cron-jobs'][':cronJobId'].runs.$post(args, options))
}

export async function deleteCronJobsCronJobIdRuns(
  args: InferRequestType<(typeof client)['cron-jobs'][':cronJobId']['runs']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cron-jobs'][':cronJobId'].runs.$delete(args, options))
}

export async function getEventsEventId(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':eventId'].$get(args, options))
}

export async function getLogs(
  args: InferRequestType<typeof client.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.$get(args, options))
}

export async function getLogsSubscribe(
  args: InferRequestType<typeof client.logs.subscribe.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.subscribe.$get(args, options))
}

export async function getLogsValues(
  args: InferRequestType<typeof client.logs.values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.values.$get(args, options))
}

export async function getLogsStreamsOwnerOwnerId(
  args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.streams.owner[':ownerId'].$get(args, options))
}

export async function putLogsStreamsOwnerOwnerId(
  args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.streams.owner[':ownerId'].$put(args, options))
}

export async function deleteLogsStreamsOwnerOwnerId(
  args: InferRequestType<(typeof client.logs.streams.owner)[':ownerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.streams.owner[':ownerId'].$delete(args, options))
}

export async function getLogsStreamsResource(
  args: InferRequestType<typeof client.logs.streams.resource.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.streams.resource.$get(args, options))
}

export async function getLogsStreamsResourceResourceId(
  args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.streams.resource[':resourceId'].$get(args, options))
}

export async function putLogsStreamsResourceResourceId(
  args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.streams.resource[':resourceId'].$put(args, options))
}

export async function deleteLogsStreamsResourceResourceId(
  args: InferRequestType<(typeof client.logs.streams.resource)[':resourceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.streams.resource[':resourceId'].$delete(args, options))
}

export async function getMetricsStreamOwnerId(
  args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metrics-stream'][':ownerId'].$get(args, options))
}

export async function putMetricsStreamOwnerId(
  args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metrics-stream'][':ownerId'].$put(args, options))
}

export async function deleteMetricsStreamOwnerId(
  args: InferRequestType<(typeof client)['metrics-stream'][':ownerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metrics-stream'][':ownerId'].$delete(args, options))
}

export async function getMetricsCpu(
  args: InferRequestType<typeof client.metrics.cpu.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.cpu.$get(args, options))
}

export async function getMetricsCpuLimit(
  args: InferRequestType<(typeof client.metrics)['cpu-limit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['cpu-limit'].$get(args, options))
}

export async function getMetricsCpuTarget(
  args: InferRequestType<(typeof client.metrics)['cpu-target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['cpu-target'].$get(args, options))
}

export async function getMetricsMemory(
  args: InferRequestType<typeof client.metrics.memory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.memory.$get(args, options))
}

export async function getMetricsMemoryLimit(
  args: InferRequestType<(typeof client.metrics)['memory-limit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['memory-limit'].$get(args, options))
}

export async function getMetricsMemoryTarget(
  args: InferRequestType<(typeof client.metrics)['memory-target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['memory-target'].$get(args, options))
}

export async function getMetricsHttpRequests(
  args: InferRequestType<(typeof client.metrics)['http-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['http-requests'].$get(args, options))
}

export async function getMetricsHttpLatency(
  args: InferRequestType<(typeof client.metrics)['http-latency']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['http-latency'].$get(args, options))
}

export async function getMetricsBandwidth(
  args: InferRequestType<typeof client.metrics.bandwidth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.bandwidth.$get(args, options))
}

export async function getMetricsBandwidthSources(
  args: InferRequestType<(typeof client.metrics)['bandwidth-sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['bandwidth-sources'].$get(args, options))
}

export async function getMetricsDiskUsage(
  args: InferRequestType<(typeof client.metrics)['disk-usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['disk-usage'].$get(args, options))
}

export async function getMetricsDiskCapacity(
  args: InferRequestType<(typeof client.metrics)['disk-capacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['disk-capacity'].$get(args, options))
}

export async function getMetricsInstanceCount(
  args: InferRequestType<(typeof client.metrics)['instance-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['instance-count'].$get(args, options))
}

export async function getMetricsActiveConnections(
  args: InferRequestType<(typeof client.metrics)['active-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['active-connections'].$get(args, options))
}

export async function getMetricsReplicationLag(
  args: InferRequestType<(typeof client.metrics)['replication-lag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['replication-lag'].$get(args, options))
}

export async function getMetricsFiltersApplication(
  args: InferRequestType<typeof client.metrics.filters.application.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.filters.application.$get(args, options))
}

export async function getMetricsFiltersHttp(
  args: InferRequestType<typeof client.metrics.filters.http.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.filters.http.$get(args, options))
}

export async function getMetricsFiltersPath(
  args: InferRequestType<typeof client.metrics.filters.path.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.filters.path.$get(args, options))
}

export async function getMetricsTaskRunsQueued(
  args: InferRequestType<(typeof client.metrics)['task-runs-queued']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['task-runs-queued'].$get(args, options))
}

export async function getMetricsTaskRunsCompleted(
  args: InferRequestType<(typeof client.metrics)['task-runs-completed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['task-runs-completed'].$get(args, options))
}

export async function getKeyValue(
  args: InferRequestType<(typeof client)['key-value']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-value'].$get(args, options))
}

export async function postKeyValue(
  args: InferRequestType<(typeof client)['key-value']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-value'].$post(args, options))
}

export async function getKeyValueRedisId(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-value'][':redisId'].$get(args, options))
}

export async function deleteKeyValueRedisId(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-value'][':redisId'].$delete(args, options))
}

export async function patchKeyValueRedisId(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-value'][':redisId'].$patch(args, options))
}

export async function getKeyValueRedisIdConnectionInfo(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['connection-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-value'][':redisId']['connection-info'].$get(args, options))
}

export async function postKeyValueRedisIdSuspend(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-value'][':redisId'].suspend.$post(args, options))
}

export async function postKeyValueRedisIdResume(
  args: InferRequestType<(typeof client)['key-value'][':redisId']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-value'][':redisId'].resume.$post(args, options))
}

export async function getRedis(
  args: InferRequestType<typeof client.redis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redis.$get(args, options))
}

export async function postRedis(
  args: InferRequestType<typeof client.redis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redis.$post(args, options))
}

export async function getRedisRedisId(
  args: InferRequestType<(typeof client.redis)[':redisId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redis[':redisId'].$get(args, options))
}

export async function deleteRedisRedisId(
  args: InferRequestType<(typeof client.redis)[':redisId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redis[':redisId'].$delete(args, options))
}

export async function patchRedisRedisId(
  args: InferRequestType<(typeof client.redis)[':redisId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redis[':redisId'].$patch(args, options))
}

export async function getRedisRedisIdConnectionInfo(
  args: InferRequestType<(typeof client.redis)[':redisId']['connection-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redis[':redisId']['connection-info'].$get(args, options))
}

export async function postRedisRedisIdSuspend(
  args: InferRequestType<(typeof client.redis)[':redisId']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redis[':redisId'].suspend.$post(args, options))
}

export async function postRedisRedisIdResume(
  args: InferRequestType<(typeof client.redis)[':redisId']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redis[':redisId'].resume.$post(args, options))
}

export async function getPostgres(
  args: InferRequestType<typeof client.postgres.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres.$get(args, options))
}

export async function postPostgres(
  args: InferRequestType<typeof client.postgres.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres.$post(args, options))
}

export async function getPostgresPostgresId(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].$get(args, options))
}

export async function deletePostgresPostgresId(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].$delete(args, options))
}

export async function patchPostgresPostgresId(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].$patch(args, options))
}

export async function getPostgresPostgresIdConnectionInfo(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['connection-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId']['connection-info'].$get(args, options))
}

export async function getPostgresPostgresIdRecovery(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].recovery.$get(args, options))
}

export async function postPostgresPostgresIdRecovery(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['recovery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].recovery.$post(args, options))
}

export async function postPostgresPostgresIdSuspend(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].suspend.$post(args, options))
}

export async function postPostgresPostgresIdResume(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].resume.$post(args, options))
}

export async function postPostgresPostgresIdRestart(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['restart']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].restart.$post(args, options))
}

export async function postPostgresPostgresIdFailover(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['failover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].failover.$post(args, options))
}

export async function getPostgresPostgresIdExport(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].export.$get(args, options))
}

export async function postPostgresPostgresIdExport(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].export.$post(args, options))
}

export async function getPostgresPostgresIdCredentials(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].credentials.$get(args, options))
}

export async function postPostgresPostgresIdCredentials(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].credentials.$post(args, options))
}

export async function deletePostgresPostgresIdCredentialsUsername(
  args: InferRequestType<
    (typeof client.postgres)[':postgresId']['credentials'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.postgres[':postgresId'].credentials[':username'].$delete(args, options),
  )
}

export async function getPostgresPostgresIdQueryProcesses(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['processes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].query.processes.$get(args, options))
}

export async function getPostgresPostgresIdQueryTopQueries(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['top-queries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.postgres[':postgresId'].query['top-queries'].$get(args, options),
  )
}

export async function getPostgresPostgresIdQuerySizes(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['sizes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postgres[':postgresId'].query.sizes.$get(args, options))
}

export async function getPostgresPostgresIdQueryTableScans(
  args: InferRequestType<(typeof client.postgres)[':postgresId']['query']['table-scans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.postgres[':postgresId'].query['table-scans'].$get(args, options),
  )
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$get(args, options))
}

export async function deleteProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$delete(args, options))
}

export async function patchProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$patch(args, options))
}

export async function getEnvironments(
  args: InferRequestType<typeof client.environments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments.$get(args, options))
}

export async function postEnvironments(
  args: InferRequestType<typeof client.environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments.$post(args, options))
}

export async function getEnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.environments)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environmentId'].$get(args, options))
}

export async function deleteEnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.environments)[':environmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environmentId'].$delete(args, options))
}

export async function patchEnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.environments)[':environmentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environmentId'].$patch(args, options))
}

export async function postEnvironmentsEnvironmentIdResources(
  args: InferRequestType<(typeof client.environments)[':environmentId']['resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environmentId'].resources.$post(args, options))
}

export async function deleteEnvironmentsEnvironmentIdResources(
  args: InferRequestType<(typeof client.environments)[':environmentId']['resources']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environmentId'].resources.$delete(args, options))
}

export async function getEnvGroups(
  args: InferRequestType<(typeof client)['env-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['env-groups'].$get(args, options))
}

export async function postEnvGroups(
  args: InferRequestType<(typeof client)['env-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['env-groups'].$post(args, options))
}

export async function getEnvGroupsEnvGroupId(
  args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['env-groups'][':envGroupId'].$get(args, options))
}

export async function deleteEnvGroupsEnvGroupId(
  args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['env-groups'][':envGroupId'].$delete(args, options))
}

export async function patchEnvGroupsEnvGroupId(
  args: InferRequestType<(typeof client)['env-groups'][':envGroupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['env-groups'][':envGroupId'].$patch(args, options))
}

export async function postEnvGroupsEnvGroupIdServicesServiceId(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['env-groups'][':envGroupId'].services[':serviceId'].$post(args, options),
  )
}

export async function deleteEnvGroupsEnvGroupIdServicesServiceId(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['services'][':serviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['env-groups'][':envGroupId'].services[':serviceId'].$delete(args, options),
  )
}

export async function getEnvGroupsEnvGroupIdEnvVarsEnvVarKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$get(args, options),
  )
}

export async function putEnvGroupsEnvGroupIdEnvVarsEnvVarKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$put(args, options),
  )
}

export async function deleteEnvGroupsEnvGroupIdEnvVarsEnvVarKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['env-vars'][':envVarKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['env-groups'][':envGroupId']['env-vars'][':envVarKey'].$delete(args, options),
  )
}

export async function getEnvGroupsEnvGroupIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$get(args, options),
  )
}

export async function putEnvGroupsEnvGroupIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$put(args, options),
  )
}

export async function deleteEnvGroupsEnvGroupIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client)['env-groups'][':envGroupId']['secret-files'][':envVarKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['env-groups'][':envGroupId']['secret-files'][':envVarKey'].$delete(args, options),
  )
}

export async function getMaintenance(
  args: InferRequestType<typeof client.maintenance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance.$get(args, options))
}

export async function getMaintenanceMaintenanceRunID(
  args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance[':maintenanceRunID'].$get(args, options))
}

export async function patchMaintenanceMaintenanceRunID(
  args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance[':maintenanceRunID'].$patch(args, options))
}

export async function postMaintenanceMaintenanceRunIDTrigger(
  args: InferRequestType<(typeof client.maintenance)[':maintenanceRunID']['trigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance[':maintenanceRunID'].trigger.$post(args, options))
}

export async function getBuildSources(
  args: InferRequestType<(typeof client)['build-sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['build-sources'].$get(args, options))
}

export async function postBuildSources(
  args: InferRequestType<(typeof client)['build-sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['build-sources'].$post(args, options))
}

export async function getBuildSourcesBuildSourceId(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['build-sources'][':buildSourceId'].$get(args, options))
}

export async function deleteBuildSourcesBuildSourceId(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['build-sources'][':buildSourceId'].$delete(args, options))
}

export async function patchBuildSourcesBuildSourceId(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['build-sources'][':buildSourceId'].$patch(args, options))
}

export async function getBuildSourcesBuildSourceIdBuilds(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['build-sources'][':buildSourceId'].builds.$get(args, options))
}

export async function postBuildSourcesBuildSourceIdBuilds(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['builds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['build-sources'][':buildSourceId'].builds.$post(args, options))
}

export async function getBuildSourcesBuildSourceIdBuildsBuildId(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['builds'][':buildId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId'].builds[':buildId'].$get(args, options),
  )
}

export async function getBuildSourcesBuildSourceIdEnvVars(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['env-vars'].$get(args, options),
  )
}

export async function putBuildSourcesBuildSourceIdEnvVars(
  args: InferRequestType<(typeof client)['build-sources'][':buildSourceId']['env-vars']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['env-vars'].$put(args, options),
  )
}

export async function getBuildSourcesBuildSourceIdEnvVarsEnvVarKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$get(args, options),
  )
}

export async function putBuildSourcesBuildSourceIdEnvVarsEnvVarKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$put(args, options),
  )
}

export async function deleteBuildSourcesBuildSourceIdEnvVarsEnvVarKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-vars'][':envVarKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['env-vars'][':envVarKey'].$delete(args, options),
  )
}

export async function getBuildSourcesBuildSourceIdSecretFiles(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['secret-files'].$get(args, options),
  )
}

export async function putBuildSourcesBuildSourceIdSecretFiles(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['secret-files'].$put(args, options),
  )
}

export async function getBuildSourcesBuildSourceIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$get(args, options),
  )
}

export async function putBuildSourcesBuildSourceIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$put(args, options),
  )
}

export async function deleteBuildSourcesBuildSourceIdSecretFilesEnvVarKey(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['secret-files'][':envVarKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['secret-files'][':envVarKey'].$delete(args, options),
  )
}

export async function postBuildSourcesBuildSourceIdEnvGroupsEnvGroupId(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['env-groups'][':envGroupId'].$post(args, options),
  )
}

export async function deleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupId(
  args: InferRequestType<
    (typeof client)['build-sources'][':buildSourceId']['env-groups'][':envGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['build-sources'][':buildSourceId']['env-groups'][':envGroupId'].$delete(args, options),
  )
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$get(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$delete(args, options))
}

export async function patchWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$patch(args, options))
}

export async function getWebhooksWebhookIdEvents(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].events.$get(args, options))
}

export async function getWorkflows(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$get(args, options))
}

export async function postWorkflows(
  args: InferRequestType<typeof client.workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$post(args, options))
}

export async function getWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].$get(args, options))
}

export async function deleteWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].$delete(args, options))
}

export async function patchWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflowId'].$patch(args, options))
}

export async function getWorkflowversions(
  args: InferRequestType<typeof client.workflowversions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflowversions.$get(args, options))
}

export async function postWorkflowversions(
  args: InferRequestType<typeof client.workflowversions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflowversions.$post(args, options))
}

export async function getWorkflowversionsWorkflowVersionId(
  args: InferRequestType<(typeof client.workflowversions)[':workflowVersionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflowversions[':workflowVersionId'].$get(args, options))
}

export async function getTasks(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$get(args, options))
}

export async function getTasksTaskId(
  args: InferRequestType<(typeof client.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':taskId'].$get(args, options))
}

export async function getTaskRuns(
  args: InferRequestType<(typeof client)['task-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['task-runs'].$get(args, options))
}

export async function postTaskRuns(
  args: InferRequestType<(typeof client)['task-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['task-runs'].$post(args, options))
}

export async function getTaskRunsEvents(
  args: InferRequestType<(typeof client)['task-runs']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['task-runs'].events.$get(args, options))
}

export async function getTaskRunsTaskRunId(
  args: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['task-runs'][':taskRunId'].$get(args, options))
}

export async function deleteTaskRunsTaskRunId(
  args: InferRequestType<(typeof client)['task-runs'][':taskRunId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['task-runs'][':taskRunId'].$delete(args, options))
}

export async function getFlows(
  args: InferRequestType<typeof client.flows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.$get(args, options))
}

export async function getFlowsFlowId(
  args: InferRequestType<(typeof client.flows)[':flowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows[':flowId'].$get(args, options))
}

export async function getFlowRuns(
  args: InferRequestType<(typeof client)['flow-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['flow-runs'].$get(args, options))
}

export async function postFlowRuns(
  args: InferRequestType<(typeof client)['flow-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['flow-runs'].$post(args, options))
}

export async function getFlowRunsFlowRunId(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['flow-runs'][':flowRunId'].$get(args, options))
}

export async function deleteFlowRunsFlowRunId(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['flow-runs'][':flowRunId'].$delete(args, options))
}

export async function getFlowRunsFlowRunIdSteps(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['flow-runs'][':flowRunId'].steps.$get(args, options))
}

export async function getFlowRunsFlowRunIdStepsStepSeq(
  args: InferRequestType<(typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['flow-runs'][':flowRunId'].steps[':stepSeq'].$get(args, options),
  )
}

export async function getFlowRunsFlowRunIdStepsStepSeqAttemptsAttempt(
  args: InferRequestType<
    (typeof client)['flow-runs'][':flowRunId']['steps'][':stepSeq']['attempts'][':attempt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['flow-runs'][':flowRunId'].steps[':stepSeq'].attempts[':attempt'].$get(args, options),
  )
}

export async function getSandboxes(
  args: InferRequestType<typeof client.sandboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes.$get(args, options))
}

export async function postSandboxes(
  args: InferRequestType<typeof client.sandboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes.$post(args, options))
}

export async function getSandboxGroups(
  args: InferRequestType<(typeof client)['sandbox-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sandbox-groups'].$get(args, options))
}

export async function postSandboxGroups(
  args: InferRequestType<(typeof client)['sandbox-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sandbox-groups'].$post(args, options))
}

export async function getSandboxesSandboxId(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxId'].$get(args, options))
}

export async function getSandboxesSandboxIdExecs(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxId'].execs.$get(args, options))
}

export async function getSandboxesSandboxIdExecsExecId(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['execs'][':execId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxId'].execs[':execId'].$get(args, options))
}

export async function postSandboxesSandboxIdTerminate(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['terminate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxId'].terminate.$post(args, options))
}

export async function postSandboxesSandboxIdSuspend(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxId'].suspend.$post(args, options))
}

export async function postSandboxesSandboxIdSnapshots(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxId']['snapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandboxes[':sandboxId'].snapshots.$post(args, options))
}

export async function getSandboxGroupsSandboxGroupId(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sandbox-groups'][':sandboxGroupId'].$get(args, options))
}

export async function patchSandboxGroupsSandboxGroupId(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sandbox-groups'][':sandboxGroupId'].$patch(args, options))
}

export async function getSandboxGroupsSandboxGroupIdCredentials(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].credentials.$get(args, options),
  )
}

export async function postSandboxGroupsSandboxGroupIdCredentials(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].credentials.$post(args, options),
  )
}

export async function getSandboxGroupsSandboxGroupIdCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$get(args, options),
  )
}

export async function deleteSandboxGroupsSandboxGroupIdCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$delete(args, options),
  )
}

export async function patchSandboxGroupsSandboxGroupIdCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].$patch(args, options),
  )
}

export async function getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersions(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].versions.$get(
      args,
      options,
    ),
  )
}

export async function postSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestore(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['credentials'][':credentialId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].credentials[':credentialId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function getSandboxGroupsSandboxGroupIdBuilds(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sandbox-groups'][':sandboxGroupId'].builds.$get(args, options))
}

export async function postSandboxGroupsSandboxGroupIdBuilds(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['builds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].builds.$post(args, options),
  )
}

export async function getSandboxGroupsSandboxGroupIdBuildsBuildId(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$get(args, options),
  )
}

export async function deleteSandboxGroupsSandboxGroupIdBuildsBuildId(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['builds'][':buildId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].builds[':buildId'].$delete(args, options),
  )
}

export async function getSandboxGroupsSandboxGroupIdSnapshots(
  args: InferRequestType<(typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].snapshots.$get(args, options),
  )
}

export async function getSandboxGroupsSandboxGroupIdSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$get(args, options),
  )
}

export async function deleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client)['sandbox-groups'][':sandboxGroupId']['snapshots'][':snapshotId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sandbox-groups'][':sandboxGroupId'].snapshots[':snapshotId'].$delete(args, options),
  )
}

export async function postSandboxesSandboxIdRunsOperationToken(
  args: InferRequestType<
    (typeof client.sandboxes)[':sandboxId']['runs'][':operation']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandboxes[':sandboxId'].runs[':operation'].token.$post(args, options),
  )
}

export async function postSandboxesSandboxIdFilesOperationToken(
  args: InferRequestType<
    (typeof client.sandboxes)[':sandboxId']['files'][':operation']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sandboxes[':sandboxId'].files[':operation'].token.$post(args, options),
  )
}
