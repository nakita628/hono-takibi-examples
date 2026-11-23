import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV3AccountsIndex(
  args: InferRequestType<typeof client.api.v3.accounts.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.accounts.index.$get(args, options))
}

export async function postApiV3AccountsAccountIdAssignGroupsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['assign-groups']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['assign-groups'].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdAuditLogsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['audit-logs'].index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdAuditLogsDownloadIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['audit-logs'].download.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdAuditLogsExportIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['audit-logs'].export.index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdAuditLogsExportIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['audit-logs'].export.index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['audit-logs'].export[
      ':job_identifier'
    ].download.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdConnectionsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].connections.index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdConnectionsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].connections.index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdConnectionsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].connections[':id'].index.$get(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdConnectionsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].connections[':id'].index.$delete(args, options),
  )
}

export async function patchApiV3AccountsAccountIdConnectionsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].connections[':id'].index.$patch(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['environments'][':environment_id']['sao-cache']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].environments[':environment_id'][
      'sao-cache'
    ].index.$delete(args, options),
  )
}

export async function getApiV3AccountsAccountIdFavoriteAssetsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['favorite-assets'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdGroupPermissionsGroupIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['group-permissions'][':group_id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['group-permissions'][':group_id'].index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdGroupsIndex(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.accounts[':account_id'].groups.index.$get(args, options))
}

export async function postApiV3AccountsAccountIdGroupsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].groups.index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].groups[':id'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdGroupsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].groups[':id'].index.$post(args, options),
  )
}

export async function postApiV3AccountsAccountIdInvitesIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['invites']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].invites.index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdIpRestrictionsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['ip-restrictions'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdIpRestrictionsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['ip-restrictions'].index.$post(args, options),
  )
}

export async function postApiV3AccountsAccountIdIpRestrictionsSetIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['ip-restrictions-set'].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate.index.$get(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate[':rule_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdIpRestrictionsId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$get(args, options),
  )
}

export async function putApiV3AccountsAccountIdIpRestrictionsId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$put(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdIpRestrictionsId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$delete(args, options),
  )
}

export async function getApiV3AccountsAccountIdLicenseMapsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['license-maps'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdLicenseMapsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['license-maps'].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdLicenseMapsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdLicenseMapsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$post(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdLicenseMapsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$delete(args, options),
  )
}

export async function getApiV3AccountsAccountIdMantleMigrationStatusIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['mantle-migration'].status.index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['disable']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['migration-inventory'][
      'environment-overrides'
    ].disable.index.$post(args, options),
  )
}

export async function postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['enable']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['migration-inventory'][
      'environment-overrides'
    ].enable.index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['migration-inventory'].environments.index.$get(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['migration-inventory'].environments[':environment_id'][
      'job-groups'
    ].index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdMigrationInventorySummaryIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['migration-inventory'].summary.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdOauthConfigurationsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['oauth-configurations'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdOauthConfigurationsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['oauth-configurations'].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdOauthConfigurationsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdOauthConfigurationsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$post(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdOauthConfigurationsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdPrivateEndpointsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['private-endpoints'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdPrivateEndpointsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['private-endpoints'].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['private-endpoints'][':pl_endpoint_ksuid'].index.$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['private-endpoints'][':pl_endpoint_ksuid'].index.$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['private-endpoints'][':pl_endpoint_ksuid'].index.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects.index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdProjectsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects.index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':id'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdProjectsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':id'].index.$post(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':id'].index.$delete(args, options),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdAdaptersIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].adapters.index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].connections[':id'].index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].connections[':id'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].connections[':id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[':id'].index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[':id'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[':id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[':id'].index.$patch(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'environment-variables'
    ].index.$post(args, options),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id']['environment-variables'][
      ':id'
    ].index.$post(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id']['environment-variables'][
      ':id'
    ].index.$delete(args, options),
  )
}

export async function putApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'environment-variables'
    ].bulk.index.$put(args, options),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'environment-variables'
    ].bulk.index.$post(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'environment-variables'
    ].bulk.index.$delete(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'environment-variables'
    ].environment.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'environment-variables'
    ].job.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'environment-variables'
    ].user.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].environments[':id'].index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].environments[':id'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].environments[':id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'extended-attributes'
    ].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
      ':id'
    ].index.$get(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
      ':id'
    ].index.$delete(args, options),
  )
}

export async function patchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
      ':id'
    ].index.$patch(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage.index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage.index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
      ':id'
    ].index.$get(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
      ':id'
    ].index.$delete(args, options),
  )
}

export async function patchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
      ':id'
    ].index.$patch(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
      ':id'
    ].collections.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
      ':id'
    ].collections[':collection_id'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelections(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['selections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
      ':id'
    ].selections.$post(args, options),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'][
      'managed-repositories'
    ].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id']['managed-repositories'][
      ':repository_id'
    ].download.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdProfilesIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdProfilesIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[':id'].index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[':id'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[':id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdScimConfigIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['scim-config'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdScimConfigIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['scim-config'].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimConfigTokensIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdScimConfigTokensIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimConfigTokensIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$get(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdScimConfigTokensIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$delete(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimV2Groups(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Groups.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdScimV2Groups(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Groups.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$get(args, options),
  )
}

export async function putApiV3AccountsAccountIdScimV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$put(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdScimV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$delete(args, options),
  )
}

export async function patchApiV3AccountsAccountIdScimV2GroupsGroupId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$patch(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimV2ResourceTypes(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimV2ResourceTypesResourceType(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes[':resource_type'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdScimV2Schemas(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Schemas.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimV2SchemasSchemaUri(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Schemas[':schema_uri'].$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimV2ServiceProviderConfig(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.ServiceProviderConfig.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimV2Users(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Users.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdScimV2Users(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Users.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdScimV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$get(args, options),
  )
}

export async function putApiV3AccountsAccountIdScimV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$put(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdScimV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$delete(args, options),
  )
}

export async function patchApiV3AccountsAccountIdScimV2UsersUserId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$patch(args, options),
  )
}

export async function getApiV3AccountsAccountIdSemanticLayerCredentialsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['semantic-layer-credentials'].index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdServiceTokensIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['service-tokens'].index.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdServiceTokensIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['service-tokens'].index.$post(args, options),
  )
}

export async function getApiV3AccountsAccountIdServiceTokensIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$get(args, options),
  )
}

export async function putApiV3AccountsAccountIdServiceTokensIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$put(args, options),
  )
}

export async function deleteApiV3AccountsAccountIdServiceTokensIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$delete(args, options),
  )
}

export async function getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id']['service-tokens'][
      ':service_token_id'
    ].permissions.index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdUsersIndex(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.accounts[':account_id'].users.index.$get(args, options))
}

export async function getApiV3AccountsAccountIdUsersIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].users[':id'].index.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$post(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][':id'].index.$get(
      args,
      options,
    ),
  )
}

export async function postApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][':id'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][':id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdWebhooksEventEventId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdWebhooksEventEventIdReceipts(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].receipts.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdWebhooksReceiptReceiptId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.receipt[':receipt_id'].$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceipt(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].event[
      ':event_id'
    ].receipt.$get(args, options),
  )
}

export async function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEvents(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].events.$get(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTest(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].test.$get(
      args,
      options,
    ),
  )
}

export async function getApiV3AccountsAccountIdWebhooksSubscriptions(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.subscriptions.$get(args, options),
  )
}

export async function postApiV3AccountsAccountIdWebhooksSubscriptions(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.accounts[':account_id'].webhooks.subscriptions.$post(args, options),
  )
}

export async function getApiV3AdapterSchemaIndex(
  args: InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3['adapter-schema'].index.$get(args, options))
}

export async function getApiV3UsersUserIdCredentialsIndex(
  args: InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.users[':user_id'].credentials.index.$get(args, options))
}

export async function postApiV3UsersUserIdCredentialsIndex(
  args: InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.users[':user_id'].credentials.index.$post(args, options))
}

export async function getApiV3UsersUserIdCredentialsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.users[':user_id'].credentials[':id'].index.$get(args, options),
  )
}

export async function postApiV3UsersUserIdCredentialsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.users[':user_id'].credentials[':id'].index.$post(args, options),
  )
}

export async function deleteApiV3UsersUserIdCredentialsIdIndex(
  args: InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v3.users[':user_id'].credentials[':id'].index.$delete(args, options),
  )
}
