import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.$get(undefined, options))
}

export async function getApiV2AccountRelayAutoConfigs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.account['relay-auto-configs'].$get(undefined, options))
}

export async function postApiV2AccountRelayAutoConfigs(
  args: InferRequestType<(typeof client.api.v2.account)['relay-auto-configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account['relay-auto-configs'].$post(args, options))
}

export async function getApiV2AccountRelayAutoConfigsId(
  args: InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account['relay-auto-configs'][':id'].$get(args, options))
}

export async function deleteApiV2AccountRelayAutoConfigsId(
  args: InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.account['relay-auto-configs'][':id'].$delete(args, options),
  )
}

export async function patchApiV2AccountRelayAutoConfigsId(
  args: InferRequestType<(typeof client.api.v2.account)['relay-auto-configs'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.account['relay-auto-configs'][':id'].$patch(args, options),
  )
}

export async function postApiV2AccountRelayAutoConfigsIdReset(
  args: InferRequestType<
    (typeof client.api.v2.account)['relay-auto-configs'][':id']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.account['relay-auto-configs'][':id'].reset.$post(args, options),
  )
}

export async function getApiV2Applications(
  args: InferRequestType<typeof client.api.v2.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.applications.$get(args, options))
}

export async function getApiV2ApplicationsApplicationKey(
  args: InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.applications[':applicationKey'].$get(args, options))
}

export async function deleteApiV2ApplicationsApplicationKey(
  args: InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.applications[':applicationKey'].$delete(args, options))
}

export async function patchApiV2ApplicationsApplicationKey(
  args: InferRequestType<(typeof client.api.v2.applications)[':applicationKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.applications[':applicationKey'].$patch(args, options))
}

export async function getApiV2ApplicationsApplicationKeyVersions(
  args: InferRequestType<
    (typeof client.api.v2.applications)[':applicationKey']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.applications[':applicationKey'].versions.$get(args, options),
  )
}

export async function deleteApiV2ApplicationsApplicationKeyVersionsVersionKey(
  args: InferRequestType<
    (typeof client.api.v2.applications)[':applicationKey']['versions'][':versionKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.applications[':applicationKey'].versions[':versionKey'].$delete(args, options),
  )
}

export async function patchApiV2ApplicationsApplicationKeyVersionsVersionKey(
  args: InferRequestType<
    (typeof client.api.v2.applications)[':applicationKey']['versions'][':versionKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.applications[':applicationKey'].versions[':versionKey'].$patch(args, options),
  )
}

export async function getApiV2ApprovalRequests(
  args: InferRequestType<(typeof client.api.v2)['approval-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['approval-requests'].$get(args, options))
}

export async function postApiV2ApprovalRequests(
  args: InferRequestType<(typeof client.api.v2)['approval-requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['approval-requests'].$post(args, options))
}

export async function getApiV2ApprovalRequestsId(
  args: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['approval-requests'][':id'].$get(args, options))
}

export async function deleteApiV2ApprovalRequestsId(
  args: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['approval-requests'][':id'].$delete(args, options))
}

export async function patchApiV2ApprovalRequestsId(
  args: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['approval-requests'][':id'].$patch(args, options))
}

export async function postApiV2ApprovalRequestsIdApply(
  args: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['apply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['approval-requests'][':id'].apply.$post(args, options))
}

export async function postApiV2ApprovalRequestsIdReviews(
  args: InferRequestType<(typeof client.api.v2)['approval-requests'][':id']['reviews']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['approval-requests'][':id'].reviews.$post(args, options))
}

export async function getApiV2Auditlog(
  args: InferRequestType<typeof client.api.v2.auditlog.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.auditlog.$get(args, options))
}

export async function postApiV2Auditlog(
  args: InferRequestType<typeof client.api.v2.auditlog.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.auditlog.$post(args, options))
}

export async function postApiV2AuditlogCounts(
  args: InferRequestType<typeof client.api.v2.auditlog.counts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.auditlog.counts.$post(args, options))
}

export async function getApiV2AuditlogId(
  args: InferRequestType<(typeof client.api.v2.auditlog)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.auditlog[':id'].$get(args, options))
}

export async function getApiV2CallerIdentity(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['caller-identity'].$get(undefined, options))
}

export async function getApiV2CodeRefsExtinctions(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['extinctions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-refs'].extinctions.$get(args, options))
}

export async function getApiV2CodeRefsRepositories(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-refs'].repositories.$get(args, options))
}

export async function postApiV2CodeRefsRepositories(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-refs'].repositories.$post(args, options))
}

export async function getApiV2CodeRefsRepositoriesRepo(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-refs'].repositories[':repo'].$get(args, options))
}

export async function deleteApiV2CodeRefsRepositoriesRepo(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['code-refs'].repositories[':repo'].$delete(args, options),
  )
}

export async function patchApiV2CodeRefsRepositoriesRepo(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['repositories'][':repo']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-refs'].repositories[':repo'].$patch(args, options))
}

export async function postApiV2CodeRefsRepositoriesRepoBranchDeleteTasks(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branch-delete-tasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['code-refs'].repositories[':repo']['branch-delete-tasks'].$post(args, options),
  )
}

export async function getApiV2CodeRefsRepositoriesRepoBranches(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['code-refs'].repositories[':repo'].branches.$get(args, options),
  )
}

export async function getApiV2CodeRefsRepositoriesRepoBranchesBranch(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['code-refs'].repositories[':repo'].branches[':branch'].$get(args, options),
  )
}

export async function putApiV2CodeRefsRepositoriesRepoBranchesBranch(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['code-refs'].repositories[':repo'].branches[':branch'].$put(args, options),
  )
}

export async function postApiV2CodeRefsRepositoriesRepoBranchesBranchExtinctionEvents(
  args: InferRequestType<
    (typeof client.api.v2)['code-refs']['repositories'][':repo']['branches'][':branch']['extinction-events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['code-refs'].repositories[':repo'].branches[':branch']['extinction-events'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV2CodeRefsStatistics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['code-refs'].statistics.$get(undefined, options))
}

export async function getApiV2CodeRefsStatisticsProjectKey(
  args: InferRequestType<(typeof client.api.v2)['code-refs']['statistics'][':projectKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['code-refs'].statistics[':projectKey'].$get(args, options),
  )
}

export async function getApiV2Destinations(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.destinations.$get(undefined, options))
}

export async function postApiV2DestinationsGenerateWarehouseDestinationKeyPair(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations['generate-warehouse-destination-key-pair'].$post(undefined, options),
  )
}

export async function postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateTrustPolicy(
  args: InferRequestType<
    (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['generate-trust-policy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations.projects[':projKey'].environments[':envKey'][
      'generate-trust-policy'
    ].$post(args, options),
  )
}

export async function postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyGenerateWarehouseDestinationKeyPair(
  args: InferRequestType<
    (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['generate-warehouse-destination-key-pair']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations.projects[':projKey'].environments[':envKey'][
      'generate-warehouse-destination-key-pair'
    ].$post(args, options),
  )
}

export async function postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindCompleteSetup(
  args: InferRequestType<
    (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['kinds'][':kind']['complete-setup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations.projects[':projKey'].environments[':envKey'].kinds[':kind'][
      'complete-setup'
    ].$post(args, options),
  )
}

export async function postApiV2DestinationsProjectsProjKeyEnvironmentsEnvKeyKindsKindSetup(
  args: InferRequestType<
    (typeof client.api.v2.destinations.projects)[':projKey']['environments'][':envKey']['kinds'][':kind']['setup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations.projects[':projKey'].environments[':envKey'].kinds[
      ':kind'
    ].setup.$post(args, options),
  )
}

export async function postApiV2DestinationsProjectKeyEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.destinations)[':projectKey'][':environmentKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations[':projectKey'][':environmentKey'].$post(args, options),
  )
}

export async function getApiV2DestinationsProjectKeyEnvironmentKeyId(
  args: InferRequestType<
    (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations[':projectKey'][':environmentKey'][':id'].$get(args, options),
  )
}

export async function deleteApiV2DestinationsProjectKeyEnvironmentKeyId(
  args: InferRequestType<
    (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations[':projectKey'][':environmentKey'][':id'].$delete(args, options),
  )
}

export async function patchApiV2DestinationsProjectKeyEnvironmentKeyId(
  args: InferRequestType<
    (typeof client.api.v2.destinations)[':projectKey'][':environmentKey'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.destinations[':projectKey'][':environmentKey'][':id'].$patch(args, options),
  )
}

export async function getApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyId(
  args: InferRequestType<
    (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'][':id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2FlagLinksProjectsProjectKeyFlagsFeatureFlagKeyId(
  args: InferRequestType<
    (typeof client.api.v2)['flag-links']['projects'][':projectKey']['flags'][':featureFlagKey'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['flag-links'].projects[':projectKey'].flags[':featureFlagKey'][':id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2FlagStatusProjectKeyFeatureFlagKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-status'][':projectKey'][':featureFlagKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['flag-status'][':projectKey'][':featureFlagKey'].$get(args, options),
  )
}

export async function getApiV2FlagStatusesProjectKeyEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['flag-statuses'][':projectKey'][':environmentKey'].$get(args, options),
  )
}

export async function getApiV2FlagStatusesProjectKeyEnvironmentKeyFeatureFlagKey(
  args: InferRequestType<
    (typeof client.api.v2)['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['flag-statuses'][':projectKey'][':environmentKey'][':featureFlagKey'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2FlagsProjectKey(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.flags[':projectKey'].$get(args, options))
}

export async function postApiV2FlagsProjectKey(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.flags[':projectKey'].$post(args, options))
}

export async function getApiV2FlagsProjectKeyEnvironmentKeyFeatureFlagKeyDependentFlags(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':environmentKey'][':featureFlagKey']['dependent-flags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':environmentKey'][':featureFlagKey'][
      'dependent-flags'
    ].$get(args, options),
  )
}

export async function getApiV2FlagsProjectKeyFeatureFlagKey(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].$get(args, options),
  )
}

export async function deleteApiV2FlagsProjectKeyFeatureFlagKey(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].$delete(args, options),
  )
}

export async function patchApiV2FlagsProjectKeyFeatureFlagKey(
  args: InferRequestType<(typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].$patch(args, options),
  )
}

export async function postApiV2FlagsProjectKeyFeatureFlagKeyCopy(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].copy.$post(args, options),
  )
}

export async function getApiV2FlagsProjectKeyFeatureFlagKeyDependentFlags(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['dependent-flags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey']['dependent-flags'].$get(args, options),
  )
}

export async function getApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-targets'][
      ':environmentKey'
    ].$get(args, options),
  )
}

export async function patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-targets'][':environmentKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-targets'][
      ':environmentKey'
    ].$patch(args, options),
  )
}

export async function getApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-user-targets'][
      ':environmentKey'
    ].$get(args, options),
  )
}

export async function patchApiV2FlagsProjectKeyFeatureFlagKeyExpiringUserTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['expiring-user-targets'][':environmentKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey']['expiring-user-targets'][
      ':environmentKey'
    ].$patch(args, options),
  )
}

export async function getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyId(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'][':id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyId(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'][
      ':id'
    ].$delete(args, options),
  )
}

export async function patchApiV2FlagsProjectKeyFeatureFlagKeyTriggersEnvironmentKeyId(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':featureFlagKey']['triggers'][':environmentKey'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':featureFlagKey'].triggers[':environmentKey'][':id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2FlagsProjectKeyFlagKeyRelease(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':flagKey'].release.$get(args, options),
  )
}

export async function deleteApiV2FlagsProjectKeyFlagKeyRelease(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':flagKey'].release.$delete(args, options),
  )
}

export async function patchApiV2FlagsProjectKeyFlagKeyRelease(
  args: InferRequestType<
    (typeof client.api.v2.flags)[':projectKey'][':flagKey']['release']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.flags[':projectKey'][':flagKey'].release.$patch(args, options),
  )
}

export async function getApiV2IntegrationCapabilitiesBigSegmentStore(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['big-segment-store'].$get(undefined, options),
  )
}

export async function postApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
      ':environmentKey'
    ][':integrationKey'].$post(args, options),
  )
}

export async function getApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
      ':environmentKey'
    ][':integrationKey'][':integrationId'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
      ':environmentKey'
    ][':integrationKey'][':integrationId'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationCapabilitiesBigSegmentStoreProjectKeyEnvironmentKeyIntegrationKeyIntegrationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['big-segment-store'][':projectKey'][':environmentKey'][':integrationKey'][':integrationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['big-segment-store'][':projectKey'][
      ':environmentKey'
    ][':integrationKey'][':integrationId'].$patch(args, options),
  )
}

export async function getApiV2IntegrationCapabilitiesFeatureStore(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['integration-capabilities'].featureStore.$get(undefined, options),
  )
}

export async function getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
      ':integrationKey'
    ].$post(args, options),
  )
}

export async function getApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
      ':integrationKey'
    ][':id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
      ':integrationKey'
    ][':id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
      ':integrationKey'
    ][':id'].$patch(args, options),
  )
}

export async function postApiV2IntegrationCapabilitiesFeatureStoreProjectKeyEnvironmentKeyIntegrationKeyIdValidate(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['featureStore'][':projectKey'][':environmentKey'][':integrationKey'][':id']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities'].featureStore[':projectKey'][':environmentKey'][
      ':integrationKey'
    ][':id'].validate.$post(args, options),
  )
}

export async function getApiV2IntegrationCapabilitiesFlagImport(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['flag-import'].$get(undefined, options),
  )
}

export async function postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['flag-import'][':projectKey'][
      ':integrationKey'
    ].$post(args, options),
  )
}

export async function getApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][
      ':integrationId'
    ].$get(args, options),
  )
}

export async function deleteApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][
      ':integrationId'
    ].$delete(args, options),
  )
}

export async function patchApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][
      ':integrationId'
    ].$patch(args, options),
  )
}

export async function postApiV2IntegrationCapabilitiesFlagImportProjectKeyIntegrationKeyIntegrationIdTrigger(
  args: InferRequestType<
    (typeof client.api.v2)['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][':integrationId']['trigger']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-capabilities']['flag-import'][':projectKey'][':integrationKey'][
      ':integrationId'
    ].trigger.$post(args, options),
  )
}

export async function getApiV2IntegrationConfigurationsKeysIntegrationKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-configurations'].keys[':integrationKey'].$get(args, options),
  )
}

export async function postApiV2IntegrationConfigurationsKeysIntegrationKey(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations']['keys'][':integrationKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-configurations'].keys[':integrationKey'].$post(args, options),
  )
}

export async function getApiV2IntegrationConfigurationsIntegrationConfigurationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-configurations'][':integrationConfigurationId'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationConfigurationsIntegrationConfigurationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-configurations'][':integrationConfigurationId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationConfigurationsIntegrationConfigurationId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-configurations'][':integrationConfigurationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-configurations'][':integrationConfigurationId'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationsIntegrationKey(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integrations[':integrationKey'].$get(args, options))
}

export async function postApiV2IntegrationsIntegrationKey(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integrations[':integrationKey'].$post(args, options))
}

export async function getApiV2IntegrationsIntegrationKeyId(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations[':integrationKey'][':id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationsIntegrationKeyId(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations[':integrationKey'][':id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationsIntegrationKeyId(
  args: InferRequestType<(typeof client.api.v2.integrations)[':integrationKey'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations[':integrationKey'][':id'].$patch(args, options),
  )
}

export async function getApiV2Members(
  args: InferRequestType<typeof client.api.v2.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.members.$get(args, options))
}

export async function postApiV2Members(
  args: InferRequestType<typeof client.api.v2.members.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.members.$post(args, options))
}

export async function patchApiV2Members(
  args: InferRequestType<typeof client.api.v2.members.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.members.$patch(args, options))
}

export async function getApiV2MembersId(
  args: InferRequestType<(typeof client.api.v2.members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.members[':id'].$get(args, options))
}

export async function deleteApiV2MembersId(
  args: InferRequestType<(typeof client.api.v2.members)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.members[':id'].$delete(args, options))
}

export async function patchApiV2MembersId(
  args: InferRequestType<(typeof client.api.v2.members)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.members[':id'].$patch(args, options))
}

export async function postApiV2MembersIdTeams(
  args: InferRequestType<(typeof client.api.v2.members)[':id']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.members[':id'].teams.$post(args, options))
}

export async function getApiV2MetricsProjectKey(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':projectKey'].$get(args, options))
}

export async function postApiV2MetricsProjectKey(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':projectKey'].$post(args, options))
}

export async function getApiV2MetricsProjectKeyMetricKey(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':projectKey'][':metricKey'].$get(args, options))
}

export async function deleteApiV2MetricsProjectKeyMetricKey(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':projectKey'][':metricKey'].$delete(args, options),
  )
}

export async function patchApiV2MetricsProjectKeyMetricKey(
  args: InferRequestType<(typeof client.api.v2.metrics)[':projectKey'][':metricKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':projectKey'][':metricKey'].$patch(args, options),
  )
}

export async function getApiV2OauthClients(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.oauth.clients.$get(undefined, options))
}

export async function postApiV2OauthClients(
  args: InferRequestType<typeof client.api.v2.oauth.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.clients.$post(args, options))
}

export async function getApiV2OauthClientsClientId(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.clients[':clientId'].$get(args, options))
}

export async function deleteApiV2OauthClientsClientId(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.clients[':clientId'].$delete(args, options))
}

export async function patchApiV2OauthClientsClientId(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':clientId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.clients[':clientId'].$patch(args, options))
}

export async function getApiV2OpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['openapi.json'].$get(undefined, options))
}

export async function getApiV2Projects(
  args: InferRequestType<typeof client.api.v2.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects.$get(args, options))
}

export async function postApiV2Projects(
  args: InferRequestType<typeof client.api.v2.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects.$post(args, options))
}

export async function getApiV2ProjectsProjectKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].$get(args, options))
}

export async function deleteApiV2ProjectsProjectKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].$delete(args, options))
}

export async function patchApiV2ProjectsProjectKey(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].$patch(args, options))
}

export async function getApiV2ProjectsProjectKeyContextKinds(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['context-kinds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['context-kinds'].$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyContextKindsKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['context-kinds'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['context-kinds'][':key'].$put(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironments(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].environments.$get(args, options))
}

export async function postApiV2ProjectsProjectKeyEnvironments(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments.$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].$patch(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyApiKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['apiKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].apiKey.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributes(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'][
      'context-attributes'
    ].$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextAttributesAttributeName(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['context-attributes'][':attributeName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['context-attributes'][
      ':attributeName'
    ].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsSearch(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].contexts.search.$post(
      args,
      options,
    ),
  )
}

export async function putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':contextKind'][':contextKey']['flags'][':featureFlagKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].contexts[':contextKind'][
      ':contextKey'
    ].flags[':featureFlagKey'].$put(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsKindKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['contexts'][':kind'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].contexts[':kind'][
      ':key'
    ].$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperiments(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments.$get(
      args,
      options,
    ),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperiments(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments[
      ':experimentKey'
    ].$get(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments[
      ':experimentKey'
    ].$patch(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyExperimentsExperimentKeyIterations(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['experiments'][':experimentKey']['iterations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].experiments[
      ':experimentKey'
    ].iterations.$post(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFlagsEvaluate(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['flags']['evaluate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].flags.evaluate.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyFollowers(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['followers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].followers.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldouts(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts.$get(
      args,
      options,
    ),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldouts(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsIdHoldoutId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts']['id'][':holdoutId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts.id[
      ':holdoutId'
    ].$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts[
      ':holdoutKey'
    ].$get(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyHoldoutsHoldoutKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['holdouts'][':holdoutKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].holdouts[
      ':holdoutKey'
    ].$patch(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyMobileKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['mobileKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].mobileKey.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySegmentsEvaluate(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['segments']['evaluate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'].segments.evaluate.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyExperimentationSettings(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['experimentation-settings'].$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyExperimentationSettings(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['experimentation-settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['experimentation-settings'].$put(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyExperiments(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['experiments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].experiments.$get(args, options))
}

export async function getApiV2ProjectsProjectKeyFlagDefaults(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['flag-defaults'].$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyFlagDefaults(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['flag-defaults'].$put(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyFlagDefaults(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['flag-defaults']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['flag-defaults'].$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequests(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'approval-requests'
    ].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequests(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'approval-requests'
    ].$post(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopy(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests-flag-copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'approval-requests-flag-copy'
    ].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'approval-requests'
    ][':id'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'approval-requests'
    ][':id'].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'approval-requests'
    ][':id'].$patch(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApply(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'approval-requests'
    ][':id'].apply.$post(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviews(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['approval-requests'][':id']['reviews']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'approval-requests'
    ][':id'].reviews.$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowers(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
      ':environmentKey'
    ].followers.$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers'][':memberId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
      ':environmentKey'
    ].followers[':memberId'].$put(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyFollowersMemberId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['followers'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
      ':environmentKey'
    ].followers[':memberId'].$delete(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChanges(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'scheduled-changes'
    ].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChanges(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'scheduled-changes'
    ].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'scheduled-changes'
    ][':id'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'scheduled-changes'
    ][':id'].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['scheduled-changes'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[':environmentKey'][
      'scheduled-changes'
    ][':id'].$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflows(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
      ':environmentKey'
    ].workflows.$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflows(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
      ':environmentKey'
    ].workflows.$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
      ':environmentKey'
    ].workflows[':workflowId'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':featureFlagKey']['environments'][':environmentKey']['workflows'][':workflowId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':featureFlagKey'].environments[
      ':environmentKey'
    ].workflows[':workflowId'].$delete(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyMigrationSafetyIssues(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['migration-safety-issues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[':environmentKey'][
      'migration-safety-issues'
    ].$post(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyFlagsFlagKeyRelease(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['release']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':flagKey'].release.$put(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyFlagsFlagKeyReleasePhasesPhaseId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['release']['phases'][':phaseId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':flagKey'].release.phases[':phaseId'].$put(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyLayers(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['layers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].layers.$get(args, options))
}

export async function postApiV2ProjectsProjectKeyLayers(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['layers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].layers.$post(args, options))
}

export async function patchApiV2ProjectsProjectKeyLayersLayerKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['layers'][':layerKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].layers[':layerKey'].$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyMetricGroups(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['metric-groups'].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyMetricGroups(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['metric-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['metric-groups'].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyMetricGroupsMetricGroupKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['metric-groups'][':metricGroupKey'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyMetricGroupsMetricGroupKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['metric-groups'][':metricGroupKey'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2ProjectsProjectKeyMetricGroupsMetricGroupKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['metric-groups'][':metricGroupKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['metric-groups'][':metricGroupKey'].$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyReleasePipelines(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['release-pipelines'].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyReleasePipelines(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['release-pipelines'].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyReleasePipelinesPipelineKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyReleasePipelinesPipelineKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].$put(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyReleasePipelinesPipelineKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyReleasePipelinesPipelineKeyReleases(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['release-pipelines'][':pipelineKey']['releases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['release-pipelines'][':pipelineKey'].releases.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2PublicIpList(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['public-ip-list'].$get(undefined, options))
}

export async function getApiV2Roles(
  args: InferRequestType<typeof client.api.v2.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles.$get(args, options))
}

export async function postApiV2Roles(
  args: InferRequestType<typeof client.api.v2.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles.$post(args, options))
}

export async function getApiV2RolesCustomRoleKey(
  args: InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':customRoleKey'].$get(args, options))
}

export async function deleteApiV2RolesCustomRoleKey(
  args: InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':customRoleKey'].$delete(args, options))
}

export async function patchApiV2RolesCustomRoleKey(
  args: InferRequestType<(typeof client.api.v2.roles)[':customRoleKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':customRoleKey'].$patch(args, options))
}

export async function getApiV2SegmentsProjectKeyEnvironmentKey(
  args: InferRequestType<(typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'].$get(args, options),
  )
}

export async function postApiV2SegmentsProjectKeyEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'].$post(args, options),
  )
}

export async function getApiV2SegmentsProjectKeyEnvironmentKeySegmentKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].$get(args, options),
  )
}

export async function deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].$delete(args, options),
  )
}

export async function patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].$patch(args, options),
  )
}

export async function postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContexts(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].contexts.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyContextsContextKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['contexts'][':contextKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].contexts[
      ':contextKey'
    ].$get(args, options),
  )
}

export async function postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExports(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].exports.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyExportsExportID(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['exports'][':exportID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].exports[
      ':exportID'
    ].$get(args, options),
  )
}

export async function postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImports(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].imports.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyImportsImportID(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['imports'][':importID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].imports[
      ':importID'
    ].$get(args, options),
  )
}

export async function postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsers(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].users.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyUsersUserKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['users'][':userKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'].users[':userKey'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':segmentKey']['expiring-targets'][
      ':environmentKey'
    ].$get(args, options),
  )
}

export async function patchApiV2SegmentsProjectKeySegmentKeyExpiringTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-targets'][':environmentKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':segmentKey']['expiring-targets'][
      ':environmentKey'
    ].$patch(args, options),
  )
}

export async function getApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':segmentKey']['expiring-user-targets'][
      ':environmentKey'
    ].$get(args, options),
  )
}

export async function patchApiV2SegmentsProjectKeySegmentKeyExpiringUserTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':segmentKey']['expiring-user-targets'][':environmentKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':segmentKey']['expiring-user-targets'][
      ':environmentKey'
    ].$patch(args, options),
  )
}

export async function getApiV2Teams(
  args: InferRequestType<typeof client.api.v2.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams.$get(args, options))
}

export async function postApiV2Teams(
  args: InferRequestType<typeof client.api.v2.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams.$post(args, options))
}

export async function patchApiV2Teams(
  args: InferRequestType<typeof client.api.v2.teams.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams.$patch(args, options))
}

export async function getApiV2TeamsTeamKey(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams[':teamKey'].$get(args, options))
}

export async function deleteApiV2TeamsTeamKey(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams[':teamKey'].$delete(args, options))
}

export async function patchApiV2TeamsTeamKey(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams[':teamKey'].$patch(args, options))
}

export async function getApiV2TeamsTeamKeyMaintainers(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['maintainers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams[':teamKey'].maintainers.$get(args, options))
}

export async function postApiV2TeamsTeamKeyMembers(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams[':teamKey'].members.$post(args, options))
}

export async function getApiV2TeamsTeamKeyRoles(
  args: InferRequestType<(typeof client.api.v2.teams)[':teamKey']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.teams[':teamKey'].roles.$get(args, options))
}

export async function getApiV2Templates(
  args: InferRequestType<typeof client.api.v2.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.templates.$get(args, options))
}

export async function postApiV2Templates(
  args: InferRequestType<typeof client.api.v2.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.templates.$post(args, options))
}

export async function deleteApiV2TemplatesTemplateKey(
  args: InferRequestType<(typeof client.api.v2.templates)[':templateKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.templates[':templateKey'].$delete(args, options))
}

export async function getApiV2Tokens(
  args: InferRequestType<typeof client.api.v2.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tokens.$get(args, options))
}

export async function postApiV2Tokens(
  args: InferRequestType<typeof client.api.v2.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tokens.$post(args, options))
}

export async function getApiV2TokensId(
  args: InferRequestType<(typeof client.api.v2.tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tokens[':id'].$get(args, options))
}

export async function deleteApiV2TokensId(
  args: InferRequestType<(typeof client.api.v2.tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tokens[':id'].$delete(args, options))
}

export async function patchApiV2TokensId(
  args: InferRequestType<(typeof client.api.v2.tokens)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tokens[':id'].$patch(args, options))
}

export async function postApiV2TokensIdReset(
  args: InferRequestType<(typeof client.api.v2.tokens)[':id']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tokens[':id'].reset.$post(args, options))
}

export async function getApiV2UsageAiRuns(
  args: InferRequestType<(typeof client.api.v2.usage)['ai-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['ai-runs'].$get(args, options))
}

export async function getApiV2UsageClientsideContexts(
  args: InferRequestType<(typeof client.api.v2.usage)['clientside-contexts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['clientside-contexts'].$get(args, options))
}

export async function getApiV2UsageClientsideMau(
  args: InferRequestType<(typeof client.api.v2.usage)['clientside-mau']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['clientside-mau'].$get(args, options))
}

export async function getApiV2UsageDataExportEvents(
  args: InferRequestType<(typeof client.api.v2.usage)['data-export-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['data-export-events'].$get(args, options))
}

export async function getApiV2UsageEvaluationsProjectKeyEnvironmentKeyFeatureFlagKey(
  args: InferRequestType<
    (typeof client.api.v2.usage.evaluations)[':projectKey'][':environmentKey'][':featureFlagKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.evaluations[':projectKey'][':environmentKey'][':featureFlagKey'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2UsageEventsType(
  args: InferRequestType<(typeof client.api.v2.usage.events)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.events[':type'].$get(args, options))
}

export async function getApiV2UsageExperimentationEvents(
  args: InferRequestType<(typeof client.api.v2.usage)['experimentation-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['experimentation-events'].$get(args, options))
}

export async function getApiV2UsageExperimentationKeys(
  args: InferRequestType<(typeof client.api.v2.usage)['experimentation-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['experimentation-keys'].$get(args, options))
}

export async function getApiV2UsageMau(
  args: InferRequestType<typeof client.api.v2.usage.mau.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.mau.$get(args, options))
}

export async function getApiV2UsageMauBycategory(
  args: InferRequestType<typeof client.api.v2.usage.mau.bycategory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.mau.bycategory.$get(args, options))
}

export async function getApiV2UsageMauSdks(
  args: InferRequestType<typeof client.api.v2.usage.mau.sdks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.mau.sdks.$get(args, options))
}

export async function getApiV2UsageObservabilityErrors(
  args: InferRequestType<typeof client.api.v2.usage.observability.errors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.observability.errors.$get(args, options))
}

export async function getApiV2UsageObservabilityLogs(
  args: InferRequestType<typeof client.api.v2.usage.observability.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.observability.logs.$get(args, options))
}

export async function getApiV2UsageObservabilityMetrics(
  args: InferRequestType<typeof client.api.v2.usage.observability.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.observability.metrics.$get(args, options))
}

export async function getApiV2UsageObservabilitySessions(
  args: InferRequestType<typeof client.api.v2.usage.observability.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.observability.sessions.$get(args, options))
}

export async function getApiV2UsageObservabilityTraces(
  args: InferRequestType<typeof client.api.v2.usage.observability.traces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.observability.traces.$get(args, options))
}

export async function getApiV2UsageSdkVersionsAll(
  args: InferRequestType<(typeof client.api.v2.usage)['sdk-versions']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['sdk-versions'].all.$get(args, options))
}

export async function getApiV2UsageSdkVersionsDetails(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.usage['sdk-versions'].details.$get(undefined, options))
}

export async function getApiV2UsageServersideContexts(
  args: InferRequestType<(typeof client.api.v2.usage)['serverside-contexts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['serverside-contexts'].$get(args, options))
}

export async function getApiV2UsageServiceConnections(
  args: InferRequestType<(typeof client.api.v2.usage)['service-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['service-connections'].$get(args, options))
}

export async function getApiV2UsageStreamsSource(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.streams[':source'].$get(args, options))
}

export async function getApiV2UsageStreamsSourceBysdkversion(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['bysdkversion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.streams[':source'].bysdkversion.$get(args, options),
  )
}

export async function getApiV2UsageStreamsSourceSdkversions(
  args: InferRequestType<(typeof client.api.v2.usage.streams)[':source']['sdkversions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.streams[':source'].sdkversions.$get(args, options))
}

export async function getApiV2UsageTotalContexts(
  args: InferRequestType<(typeof client.api.v2.usage)['total-contexts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['total-contexts'].$get(args, options))
}

export async function getApiV2UsageTotalMau(
  args: InferRequestType<(typeof client.api.v2.usage)['total-mau']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['total-mau'].$get(args, options))
}

export async function getApiV2UsageVegaAi(
  args: InferRequestType<(typeof client.api.v2.usage)['vega-ai']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['vega-ai'].$get(args, options))
}

export async function getApiV2UsageWarehouseExport(
  args: InferRequestType<(typeof client.api.v2.usage)['warehouse-export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['warehouse-export'].$get(args, options))
}

export async function getApiV2UserSearchProjectKeyEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2)['user-search'][':projectKey'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['user-search'][':projectKey'][':environmentKey'].$get(args, options),
  )
}

export async function getApiV2UsersProjectKeyEnvironmentKey(
  args: InferRequestType<(typeof client.api.v2.users)[':projectKey'][':environmentKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':projectKey'][':environmentKey'].$get(args, options),
  )
}

export async function getApiV2UsersProjectKeyEnvironmentKeyUserKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].$get(args, options),
  )
}

export async function getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlags(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].flags.$get(args, options),
  )
}

export async function getApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].flags[':featureFlagKey'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2UsersProjectKeyEnvironmentKeyUserKeyFlagsFeatureFlagKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':environmentKey'][':userKey']['flags'][':featureFlagKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':projectKey'][':environmentKey'][':userKey'].flags[':featureFlagKey'].$put(
      args,
      options,
    ),
  )
}

export async function getApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey'].$get(
      args,
      options,
    ),
  )
}

export async function patchApiV2UsersProjectKeyUserKeyExpiringUserTargetsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':projectKey'][':userKey']['expiring-user-targets'][':environmentKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':projectKey'][':userKey']['expiring-user-targets'][
      ':environmentKey'
    ].$patch(args, options),
  )
}

export async function getApiV2Versions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.versions.$get(undefined, options))
}

export async function getApiV2Webhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.webhooks.$get(undefined, options))
}

export async function postApiV2Webhooks(
  args: InferRequestType<typeof client.api.v2.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.webhooks.$post(args, options))
}

export async function getApiV2WebhooksId(
  args: InferRequestType<(typeof client.api.v2.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.webhooks[':id'].$get(args, options))
}

export async function deleteApiV2WebhooksId(
  args: InferRequestType<(typeof client.api.v2.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.webhooks[':id'].$delete(args, options))
}

export async function patchApiV2WebhooksId(
  args: InferRequestType<(typeof client.api.v2.webhooks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.webhooks[':id'].$patch(args, options))
}

export async function getApiV2Tags(
  args: InferRequestType<typeof client.api.v2.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.$get(args, options))
}

export async function getApiV2UsageDataExportEventsProjectsRanking(
  args: InferRequestType<
    (typeof client.api.v2.usage)['data-export-events']['projects']['ranking']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage['data-export-events'].projects.ranking.$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsConfigKeyTargeting(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].targeting.$get(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargeting(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['targeting']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].targeting.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigs(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyAiConfigs(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsConfigKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyAiConfigsConfigKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyAiConfigsConfigKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].$patch(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyAiConfigsConfigKeyVariations(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations[
      ':variationKey'
    ].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations[
      ':variationKey'
    ].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['variations'][':variationKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].variations[
      ':variationKey'
    ].$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsQuickStats(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['quick-stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['quick-stats'].$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetrics(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey'].metrics.$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariation(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs'][':configKey']['metrics-by-variation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'][':configKey']['metrics-by-variation'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2ProjectsProjectKeyAiConfigsModelConfigsRestricted(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['restricted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].restricted.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestricted(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['restricted']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].restricted.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsModelConfigs(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyAiConfigsModelConfigs(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['model-configs'].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][':modelConfigKey'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][':modelConfigKey'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][':modelConfigKey'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersions(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['model-configs'][':modelConfigKey']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['model-configs'][
      ':modelConfigKey'
    ].versions.$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiTools(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey']['ai-tools'].$get(args, options))
}

export async function postApiV2ProjectsProjectKeyAiTools(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['ai-tools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey']['ai-tools'].$post(args, options))
}

export async function getApiV2ProjectsProjectKeyAiToolsToolKeyVersions(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].versions.$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiToolsToolKeyReferences(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['references']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].references.$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiToolsToolKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyAiToolsToolKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyAiToolsToolKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-tools'][':toolKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-tools'][':toolKey'].$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsPromptSnippets(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyAiConfigsPromptSnippets(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferences(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['references']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
      ':snippetKey'
    ].references.$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersions(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['prompt-snippets'][':snippetKey']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs']['prompt-snippets'][
      ':snippetKey'
    ].versions.$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsSkills(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].skills.$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyAiConfigsSkills(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].skills.$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferences(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['references']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].references.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersions(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['ai-configs']['skills'][':skillKey']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['ai-configs'].skills[':skillKey'].versions.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAgentGraphs(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-graphs'].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyAgentGraphs(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['agent-graphs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-graphs'].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAgentGraphsGraphKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-graphs'][':graphKey'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyAgentGraphsGraphKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-graphs'][':graphKey'].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyAgentGraphsGraphKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-graphs'][':graphKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-graphs'][':graphKey'].$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAgentOptimizations(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyAgentOptimizations(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResults(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].results.$get(
      args,
      options,
    ),
  )
}

export async function postApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResults(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].results.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResults(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['all-results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'][
      'all-results'
    ].$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRuns(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].runs.$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].runs[
      ':runId'
    ].$delete(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResults(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['runs'][':runId']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].runs[
      ':runId'
    ].results.$get(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['agent-optimizations'][':optimizationKey']['results'][':resultId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['agent-optimizations'][':optimizationKey'].results[
      ':resultId'
    ].$patch(args, options),
  )
}

export async function getApiV2Announcements(
  args: InferRequestType<typeof client.api.v2.announcements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.announcements.$get(args, options))
}

export async function postApiV2Announcements(
  args: InferRequestType<typeof client.api.v2.announcements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.announcements.$post(args, options))
}

export async function deleteApiV2AnnouncementsAnnouncementId(
  args: InferRequestType<(typeof client.api.v2.announcements)[':announcementId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.announcements[':announcementId'].$delete(args, options))
}

export async function patchApiV2AnnouncementsAnnouncementId(
  args: InferRequestType<(typeof client.api.v2.announcements)[':announcementId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.announcements[':announcementId'].$patch(args, options))
}

export async function getApiV2ApprovalRequestsProjectsProjectKeySettings(
  args: InferRequestType<
    (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['approval-requests'].projects[':projectKey'].settings.$get(args, options),
  )
}

export async function patchApiV2ApprovalRequestsProjectsProjectKeySettings(
  args: InferRequestType<
    (typeof client.api.v2)['approval-requests']['projects'][':projectKey']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['approval-requests'].projects[':projectKey'].settings.$patch(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyViews(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].views.$get(args, options))
}

export async function postApiV2ProjectsProjectKeyViews(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey'].views.$post(args, options))
}

export async function getApiV2ProjectsProjectKeyViewsViewKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].views[':viewKey'].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyViewsViewKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].views[':viewKey'].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyViewsViewKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].views[':viewKey'].$patch(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyViewsViewKeyLinkResourceType(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['link'][':resourceType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].views[':viewKey'].link[':resourceType'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceType(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['link'][':resourceType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].views[':viewKey'].link[':resourceType'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceType(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['views'][':viewKey']['linked'][':resourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].views[':viewKey'].linked[':resourceType'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['view-associations'][':resourceType'][':resourceKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['view-associations'][':resourceType'][
      ':resourceKey'
    ].$get(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleases(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
      ':environmentKey'
    ].releases.$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleases(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
      ':environmentKey'
    ].releases.$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseId(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
      ':environmentKey'
    ].releases[':releaseId'].$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyFlagsFlagKeyEnvironmentsEnvironmentKeyReleasesReleaseIdStop(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flags'][':flagKey']['environments'][':environmentKey']['releases'][':releaseId']['stop']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].flags[':flagKey'].environments[
      ':environmentKey'
    ].releases[':releaseId'].stop.$put(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlans(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlans(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'][
      ':releasePlanKey'
    ].$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'][
      ':releasePlanKey'
    ].$put(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyReleasePlansReleasePlanKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['release-plans'][':releasePlanKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['release-plans'][
      ':releasePlanKey'
    ].$delete(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlan(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'][
      'default-release-plan'
    ].$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlan(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'][
      'default-release-plan'
    ].$put(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyDefaultReleasePlan(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['default-release-plan']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'][
      'default-release-plan'
    ].$delete(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagReleasePlans(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['flag-release-plans'].$get(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyFlagReleasePlans(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['flag-release-plans'].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyFlagReleasePlansPlanKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['flag-release-plans'][':planKey'].$get(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyFlagReleasePlansPlanKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['flag-release-plans'][':planKey'].$put(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyFlagReleasePlansPlanKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['flag-release-plans'][':planKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey']['flag-release-plans'][':planKey'].$delete(args, options),
  )
}

export async function getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChanges(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
      'scheduled-changes'
    ].$get(args, options),
  )
}

export async function postApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChanges(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey'][
      'scheduled-changes'
    ].$post(args, options),
  )
}

export async function getApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesId(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][
      ':id'
    ].$get(args, options),
  )
}

export async function deleteApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesId(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][
      ':id'
    ].$delete(args, options),
  )
}

export async function patchApiV2SegmentsProjectKeyEnvironmentKeySegmentKeyScheduledChangesId(
  args: InferRequestType<
    (typeof client.api.v2.segments)[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.segments[':projectKey'][':environmentKey'][':segmentKey']['scheduled-changes'][
      ':id'
    ].$patch(args, options),
  )
}

export async function getApiV2AccountIpAllowlist(
  args: InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account['ip-allowlist'].$get(args, options))
}

export async function postApiV2AccountIpAllowlist(
  args: InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account['ip-allowlist'].$post(args, options))
}

export async function patchApiV2AccountIpAllowlist(
  args: InferRequestType<(typeof client.api.v2.account)['ip-allowlist']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account['ip-allowlist'].$patch(args, options))
}

export async function deleteApiV2AccountIpAllowlistId(
  args: InferRequestType<(typeof client.api.v2.account)['ip-allowlist'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account['ip-allowlist'][':id'].$delete(args, options))
}

export async function patchApiV2AccountIpAllowlistId(
  args: InferRequestType<(typeof client.api.v2.account)['ip-allowlist'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account['ip-allowlist'][':id'].$patch(args, options))
}

export async function getApiV2ProjectsProjectKeySdkKeys(
  args: InferRequestType<(typeof client.api.v2.projects)[':projectKey']['sdk-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.projects[':projectKey']['sdk-keys'].$get(args, options))
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeys(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeys(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
      ':sdkKeyKey'
    ].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
      ':sdkKeyKey'
    ].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
      ':sdkKeyKey'
    ].$patch(args, options),
  )
}

export async function putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeySdkKeysSdkKeyKeyViews(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['sdk-keys'][':sdkKeyKey']['views']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['sdk-keys'][
      ':sdkKeyKey'
    ].views.$put(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggers(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['adaptive-triggers'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggers(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey'][
      'adaptive-triggers'
    ].$post(args, options),
  )
}

export async function getApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerID(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['adaptive-triggers'][
      ':triggerID'
    ].$get(args, options),
  )
}

export async function deleteApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerID(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['adaptive-triggers'][
      ':triggerID'
    ].$delete(args, options),
  )
}

export async function patchApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerID(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['adaptive-triggers'][
      ':triggerID'
    ].$patch(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDEnable(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['adaptive-triggers'][
      ':triggerID'
    ].enable.$post(args, options),
  )
}

export async function postApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyAdaptiveTriggersTriggerIDDisable(
  args: InferRequestType<
    (typeof client.api.v2.projects)[':projectKey']['environments'][':environmentKey']['adaptive-triggers'][':triggerID']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.projects[':projectKey'].environments[':environmentKey']['adaptive-triggers'][
      ':triggerID'
    ].disable.$post(args, options),
  )
}

export async function getApiV2EngineeringInsightsChartsDeploymentsFrequency(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['deployments']['frequency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].charts.deployments.frequency.$get(args, options),
  )
}

export async function getApiV2EngineeringInsightsChartsFlagsStale(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['flags']['stale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].charts.flags.stale.$get(args, options),
  )
}

export async function getApiV2EngineeringInsightsChartsFlagsStatus(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['flags']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].charts.flags.status.$get(args, options),
  )
}

export async function getApiV2EngineeringInsightsChartsLeadTime(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['lead-time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].charts['lead-time'].$get(args, options),
  )
}

export async function getApiV2EngineeringInsightsChartsReleasesFrequency(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['charts']['releases']['frequency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].charts.releases.frequency.$get(args, options),
  )
}

export async function postApiV2EngineeringInsightsDeploymentEvents(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['deployment-events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights']['deployment-events'].$post(args, options),
  )
}

export async function getApiV2EngineeringInsightsDeployments(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['engineering-insights'].deployments.$get(args, options))
}

export async function getApiV2EngineeringInsightsDeploymentsDeploymentID(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].deployments[':deploymentID'].$get(args, options),
  )
}

export async function patchApiV2EngineeringInsightsDeploymentsDeploymentID(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['deployments'][':deploymentID']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].deployments[':deploymentID'].$patch(args, options),
  )
}

export async function getApiV2EngineeringInsightsFlagEvents(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['flag-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights']['flag-events'].$get(args, options),
  )
}

export async function postApiV2EngineeringInsightsInsightsGroup(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['group']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].insights.group.$post(args, options),
  )
}

export async function getApiV2EngineeringInsightsInsightsGroups(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].insights.groups.$get(args, options),
  )
}

export async function getApiV2EngineeringInsightsInsightsGroupsInsightGroupKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].insights.groups[':insightGroupKey'].$get(args, options),
  )
}

export async function deleteApiV2EngineeringInsightsInsightsGroupsInsightGroupKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].insights.groups[':insightGroupKey'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2EngineeringInsightsInsightsGroupsInsightGroupKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['groups'][':insightGroupKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].insights.groups[':insightGroupKey'].$patch(args, options),
  )
}

export async function getApiV2EngineeringInsightsInsightsScores(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['insights']['scores']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].insights.scores.$get(args, options),
  )
}

export async function getApiV2EngineeringInsightsPullRequests(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['pull-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights']['pull-requests'].$get(args, options),
  )
}

export async function getApiV2EngineeringInsightsRepositories(
  args: InferRequestType<(typeof client.api.v2)['engineering-insights']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['engineering-insights'].repositories.$get(args, options))
}

export async function putApiV2EngineeringInsightsRepositoriesProjects(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['repositories']['projects']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].repositories.projects.$put(args, options),
  )
}

export async function deleteApiV2EngineeringInsightsRepositoriesRepositoryKeyProjectsProjectKey(
  args: InferRequestType<
    (typeof client.api.v2)['engineering-insights']['repositories'][':repositoryKey']['projects'][':projectKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['engineering-insights'].repositories[':repositoryKey'].projects[
      ':projectKey'
    ].$delete(args, options),
  )
}
