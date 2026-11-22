import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Whoami(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.whoami.$get(undefined, options))
}

export async function getV1Organizations(
  args: InferRequestType<typeof client.v1.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.$get(args, options))
}

export async function getV1OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].$get(args, options))
}

export async function patchV1OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].$patch(args, options))
}

export async function getV1OrganizationsOrganizationIdPrometheus(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['prometheus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].prometheus.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPrometheusDiscovery(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['prometheus']['discovery']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].prometheus.discovery.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdRoles(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].roles.$get(args, options))
}

export async function postV1OrganizationsOrganizationIdRoles(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].roles.$post(args, options))
}

export async function getV1OrganizationsOrganizationIdRolesRoleId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].roles[':roleId'].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdRolesRoleId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].roles[':roleId'].$delete(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdRolesRoleId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['roles'][':roleId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].roles[':roleId'].$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdQuotas(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].quotas.$get(args, options))
}

export async function getV1OrganizationsOrganizationIdQuotasQuotaCode(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['quotas'][':quotaCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].quotas[':quotaCode'].$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServiceProfiles(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['serviceProfiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].serviceProfiles.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPreviews(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['previews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].previews.$get(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdPreviewsPreviewId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['previews'][':previewId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].previews[':previewId'].$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServices(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services.$get(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdServices(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services.$post(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].$delete(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpointConfig(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpointConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].privateEndpointConfig.$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].serviceQueryEndpoint.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].serviceQueryEndpoint.$post(
      args,
      options,
    ),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdServiceQueryEndpoint(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['serviceQueryEndpoint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].serviceQueryEndpoint.$delete(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdState(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['state']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].state.$patch(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdScaling(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scaling']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].scaling.$patch(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdReplicaScaling(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaScaling']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].replicaScaling.$patch(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdPassword(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['password']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].password.$patch(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdPrivateEndpoint(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['privateEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].privateEndpoint.$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdPrometheus(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['prometheus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].prometheus.$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$post(
      args,
      options,
    ),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdScalingSchedule(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['scalingSchedule']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].scalingSchedule.$delete(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$get(
      args,
      options,
    ),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$put(
      args,
      options,
    ),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdUpgradeWindow(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['upgradeWindow']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].upgradeWindow.$delete(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdJwtProviders(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdJwtProviders(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders.$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
      ':jwtProviderName'
    ].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
      ':jwtProviderName'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdJwtProvidersJwtProviderName(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['jwtProviders'][':jwtProviderName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].jwtProviders[
      ':jwtProviderName'
    ].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings.$get(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettings(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings.$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSchema(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickhouseSettings.schema.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
      ':settingName'
    ].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickhouseSettingsSettingName(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickhouseSettings'][':settingName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickhouseSettings[
      ':settingName'
    ].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdBackups(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].backups.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].backups[':backupId'].$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdSnapshots(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].snapshots.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].snapshots[':snapshotId'].$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].backupConfiguration.$get(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdBackupConfiguration(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupConfiguration']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].backupConfiguration.$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].snapshotConfiguration.$get(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfiguration(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['snapshotConfiguration']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].snapshotConfiguration.$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].replicaAwareRouting.$get(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdReplicaAwareRouting(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['replicaAwareRouting']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].replicaAwareRouting.$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdBackupBucket(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdBackupBucket(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$post(
      args,
      options,
    ),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucket(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$delete(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdBackupBucket(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['backupBucket']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].backupBucket.$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdKeys(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].keys.$get(args, options))
}

export async function postV1OrganizationsOrganizationIdKeys(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].keys.$post(args, options))
}

export async function getV1OrganizationsOrganizationIdKeysKeyId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].keys[':keyId'].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdKeysKeyId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].keys[':keyId'].$delete(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdKeysKeyId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['keys'][':keyId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].keys[':keyId'].$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdMembers(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].members.$get(args, options))
}

export async function getV1OrganizationsOrganizationIdMembersUserId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].members[':userId'].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdMembersUserId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].members[':userId'].$delete(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdMembersUserId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].members[':userId'].$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdInvitations(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].invitations.$get(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdInvitations(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].invitations.$post(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].invitations[':invitationId'].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['invitations'][':invitationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].invitations[':invitationId'].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdActivities(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].activities.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdActivitiesActivityId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activities'][':activityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].activities[':activityId'].$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdNotifications(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].notifications.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdNotificationTypes(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['notificationTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].notificationTypes.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdMembersUserIdNotificationSettings(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$get(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdMembersUserIdNotificationSettings(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['notificationSettings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].members[':userId'].notificationSettings.$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdUsageCost(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['usageCost']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].usageCost.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdInferenceUsageCost(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['inferenceUsageCost']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].inferenceUsageCost.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdActiveBalances(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['activeBalances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].activeBalances.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdCreditBalances(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['creditBalances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].creditBalances.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickpipes(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickpipes(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContext(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['context']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes.context.$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
      ':clickPipeId'
    ].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
      ':clickPipeId'
    ].$delete(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
      ':clickPipeId'
    ].$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
      ':clickPipeId'
    ].settings.$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettings(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
      ':clickPipeId'
    ].settings.$put(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscovery(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes']['schemaDiscovery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickpipes.schemaDiscovery.$post(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScaling(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['scaling']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
      ':clickPipeId'
    ].scaling.$patch(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdState(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipes'][':clickPipeId']['state']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipes[
      ':clickPipeId'
    ].state.$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipesCdcScaling.$get(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScaling(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesCdcScaling']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickpipesCdcScaling.$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboards(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards.$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
      ':clickStackDashboardId'
    ].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
      ':clickStackDashboardId'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsClickStackDashboardId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards'][':clickStackDashboardId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.dashboards[
      ':clickStackDashboardId'
    ].$delete(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackDashboardsValidate(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['dashboards']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickstack.dashboards.validate.$post(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlerts(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts.$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSources(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackSources(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources.$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
      ':clickStackSourceId'
    ].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
      ':clickStackSourceId'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSourcesClickStackSourceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['sources'][':clickStackSourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.sources[
      ':clickStackSourceId'
    ].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
      ':clickStackAlertId'
    ].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
      ':clickStackAlertId'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
      ':clickStackAlertId'
    ].$delete(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilenced(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
      ':clickStackAlertId'
    ].silenced.$post(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackAlertsClickStackAlertIdSilenced(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['alerts'][':clickStackAlertId']['silenced']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.alerts[
      ':clickStackAlertId'
    ].silenced.$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooks(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks.$post(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksValidate(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickstack.webhooks.validate.$post(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks[
      ':clickStackWebhookId'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackWebhooksClickStackWebhookId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['webhooks'][':clickStackWebhookId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.webhooks[
      ':clickStackWebhookId'
    ].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackRoles(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles.$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
      ':clickStackRoleId'
    ].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
      ':clickStackRoleId'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackRolesClickStackRoleId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['roles'][':clickStackRoleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack.roles[
      ':clickStackRoleId'
    ].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
      'saved-searches'
    ].$get(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearches(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack[
      'saved-searches'
    ].$post(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack['saved-searches'][
      ':clickStackSavedSearchId'
    ].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack['saved-searches'][
      ':clickStackSavedSearchId'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickstackSavedSearchesClickStackSavedSearchId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickstack']['saved-searches'][':clickStackSavedSearchId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId'].clickstack['saved-searches'][
      ':clickStackSavedSearchId'
    ].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPostgres(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres.$get(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdPostgres(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['postgres']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres.$post(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPrometheus(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres']['prometheus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres.prometheus.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdPostgresPostgresId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].$delete(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdPostgresPostgresId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificates(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['caCertificates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].caCertificates.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdPostgresPostgresIdRestoredService(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['restoredService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].restoredService.$post(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdPostgresPostgresIdPassword(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['password']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].password.$patch(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdPostgresPostgresIdState(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['state']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].state.$patch(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdPostgresPostgresIdReadReplica(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['readReplica']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].readReplica.$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdConfig(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$get(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdPostgresPostgresIdConfig(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$post(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdPostgresPostgresIdConfig(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['config']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].config.$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheus(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['prometheus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].prometheus.$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdMetrics(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].metrics.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$post(
      args,
      options,
    ),
  )
}

export async function deleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$delete(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpoint(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['privateEndpoint']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].privateEndpoint.$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdBackups(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].backups.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatterns(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns.$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['slowQueryPatterns'][':queryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].slowQueryPatterns[
      ':queryId'
    ].$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueries(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['blockingQueries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].blockingQueries.$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdPostgresPostgresIdLogs(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['postgres'][':postgresId']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].postgres[':postgresId'].logs.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdPrivateEndpointConfig(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['privateEndpointConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].privateEndpointConfig.$get(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdByocInfrastructure(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure.$post(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdByocInfrastructureValidate(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure.validate.$post(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdEnrollmentToken(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['enrollmentToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[
      ':byocInfrastructureId'
    ].enrollmentToken.$post(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[':byocInfrastructureId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[':byocInfrastructureId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[':byocInfrastructureId'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdProgress(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[
      ':byocInfrastructureId'
    ].progress.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdTags(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[
      ':byocInfrastructureId'
    ].tags.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdPrivateEndpointConfig(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['privateEndpointConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[
      ':byocInfrastructureId'
    ].privateEndpointConfig.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[
      ':byocInfrastructureId'
    ].customerAuthorizedAccess.$get(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdByocInfrastructureByocInfrastructureIdCustomerAuthorizedAccess(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['byocInfrastructure'][':byocInfrastructureId']['customerAuthorizedAccess']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].byocInfrastructure[
      ':byocInfrastructureId'
    ].customerAuthorizedAccess.$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickpipesReversePrivateEndpoints.$get(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpoints(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickpipesReversePrivateEndpoints.$post(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$delete(args, options),
  )
}

export async function patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['clickpipesReversePrivateEndpoints'][':reversePrivateEndpointId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[
      ':serviceId'
    ].clickpipesReversePrivateEndpoints[':reversePrivateEndpointId'].$patch(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'].$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpoints(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'].$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
      ':endpointId'
    ].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
      ':endpointId'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdQueryApiEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['query-api-endpoints'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['query-api-endpoints'][
      ':endpointId'
    ].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueries(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$get(
      args,
      options,
    ),
  )
}

export async function postV1OrganizationsOrganizationIdServicesServiceIdSavedQueries(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'].$post(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
      ':queryId'
    ].$get(args, options),
  )
}

export async function putV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
      ':queryId'
    ].$put(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdServicesServiceIdSavedQueriesQueryId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['services'][':serviceId']['saved-queries'][':queryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].services[':serviceId']['saved-queries'][
      ':queryId'
    ].$delete(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdUdfUploadsUrl(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfUploads']['url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfUploads.url.$post(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdUdfs(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].udfs.$get(args, options))
}

export async function postV1OrganizationsOrganizationIdUdfs(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['udfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].udfs.$post(args, options))
}

export async function getV1OrganizationsOrganizationIdUdfsFunctionName(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].$get(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdUdfsFunctionName(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachments(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].attachments.$get(
      args,
      options,
    ),
  )
}

export async function getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[':serviceId'].$get(
      args,
      options,
    ),
  )
}

export async function putV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[':serviceId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['attachments'][':serviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].attachments[
      ':serviceId'
    ].$delete(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdUdfsFunctionNameVersions(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$get(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdUdfsFunctionNameVersions(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].versions.$post(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersion(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['udfs'][':functionName']['versions'][':version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].udfs[':functionName'].versions[':version'].$delete(
      args,
      options,
    ),
  )
}
