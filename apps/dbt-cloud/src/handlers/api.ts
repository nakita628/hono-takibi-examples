import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV3AccountsAccountIdConnectionsIdIndexRoute,
  deleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexRoute,
  deleteApiV3AccountsAccountIdIpRestrictionsIdRoute,
  deleteApiV3AccountsAccountIdLicenseMapsIdIndexRoute,
  deleteApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute,
  deleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute,
  deleteApiV3AccountsAccountIdProjectsIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute,
  deleteApiV3AccountsAccountIdScimConfigTokensIdIndexRoute,
  deleteApiV3AccountsAccountIdScimV2GroupsGroupIdRoute,
  deleteApiV3AccountsAccountIdScimV2UsersUserIdRoute,
  deleteApiV3AccountsAccountIdServiceTokensIdIndexRoute,
  deleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute,
  deleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute,
  deleteApiV3UsersUserIdCredentialsIdIndexRoute,
  getApiV3AccountsAccountIdAuditLogsDownloadIndexRoute,
  getApiV3AccountsAccountIdAuditLogsExportIndexRoute,
  getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexRoute,
  getApiV3AccountsAccountIdAuditLogsIndexRoute,
  getApiV3AccountsAccountIdConnectionsIdIndexRoute,
  getApiV3AccountsAccountIdConnectionsIndexRoute,
  getApiV3AccountsAccountIdFavoriteAssetsIndexRoute,
  getApiV3AccountsAccountIdGroupsIdIndexRoute,
  getApiV3AccountsAccountIdGroupsIndexRoute,
  getApiV3AccountsAccountIdIpRestrictionsIdRoute,
  getApiV3AccountsAccountIdIpRestrictionsIndexRoute,
  getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexRoute,
  getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdRoute,
  getApiV3AccountsAccountIdLicenseMapsIdIndexRoute,
  getApiV3AccountsAccountIdLicenseMapsIndexRoute,
  getApiV3AccountsAccountIdMantleMigrationStatusIndexRoute,
  getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexRoute,
  getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexRoute,
  getApiV3AccountsAccountIdMigrationInventorySummaryIndexRoute,
  getApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute,
  getApiV3AccountsAccountIdOauthConfigurationsIndexRoute,
  getApiV3AccountsAccountIdPrivateEndpointsIndexRoute,
  getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute,
  getApiV3AccountsAccountIdProjectsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute,
  getApiV3AccountsAccountIdScimConfigIndexRoute,
  getApiV3AccountsAccountIdScimConfigTokensIdIndexRoute,
  getApiV3AccountsAccountIdScimConfigTokensIndexRoute,
  getApiV3AccountsAccountIdScimV2GroupsGroupIdRoute,
  getApiV3AccountsAccountIdScimV2GroupsRoute,
  getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeRoute,
  getApiV3AccountsAccountIdScimV2ResourceTypesRoute,
  getApiV3AccountsAccountIdScimV2SchemasRoute,
  getApiV3AccountsAccountIdScimV2SchemasSchemaUriRoute,
  getApiV3AccountsAccountIdScimV2ServiceProviderConfigRoute,
  getApiV3AccountsAccountIdScimV2UsersRoute,
  getApiV3AccountsAccountIdScimV2UsersUserIdRoute,
  getApiV3AccountsAccountIdSemanticLayerCredentialsIndexRoute,
  getApiV3AccountsAccountIdServiceTokensIdIndexRoute,
  getApiV3AccountsAccountIdServiceTokensIndexRoute,
  getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexRoute,
  getApiV3AccountsAccountIdUsersIdIndexRoute,
  getApiV3AccountsAccountIdUsersIndexRoute,
  getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute,
  getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute,
  getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsRoute,
  getApiV3AccountsAccountIdWebhooksEventEventIdRoute,
  getApiV3AccountsAccountIdWebhooksReceiptReceiptIdRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionsRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute,
  getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestRoute,
  getApiV3AccountsIndexRoute,
  getApiV3AdapterSchemaIndexRoute,
  getApiV3UsersUserIdCredentialsIdIndexRoute,
  getApiV3UsersUserIdCredentialsIndexRoute,
  patchApiV3AccountsAccountIdConnectionsIdIndexRoute,
  patchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute,
  patchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute,
  patchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute,
  patchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute,
  patchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute,
  patchApiV3AccountsAccountIdScimV2GroupsGroupIdRoute,
  patchApiV3AccountsAccountIdScimV2UsersUserIdRoute,
  postApiV3AccountsAccountIdAssignGroupsIndexRoute,
  postApiV3AccountsAccountIdAuditLogsExportIndexRoute,
  postApiV3AccountsAccountIdConnectionsIndexRoute,
  postApiV3AccountsAccountIdGroupPermissionsGroupIdIndexRoute,
  postApiV3AccountsAccountIdGroupsIdIndexRoute,
  postApiV3AccountsAccountIdGroupsIndexRoute,
  postApiV3AccountsAccountIdInvitesIndexRoute,
  postApiV3AccountsAccountIdIpRestrictionsIndexRoute,
  postApiV3AccountsAccountIdIpRestrictionsSetIndexRoute,
  postApiV3AccountsAccountIdLicenseMapsIdIndexRoute,
  postApiV3AccountsAccountIdLicenseMapsIndexRoute,
  postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexRoute,
  postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexRoute,
  postApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute,
  postApiV3AccountsAccountIdOauthConfigurationsIndexRoute,
  postApiV3AccountsAccountIdPrivateEndpointsIndexRoute,
  postApiV3AccountsAccountIdProjectsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsRoute,
  postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute,
  postApiV3AccountsAccountIdScimConfigIndexRoute,
  postApiV3AccountsAccountIdScimConfigTokensIndexRoute,
  postApiV3AccountsAccountIdScimV2GroupsRoute,
  postApiV3AccountsAccountIdScimV2UsersRoute,
  postApiV3AccountsAccountIdServiceTokensIndexRoute,
  postApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute,
  postApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute,
  postApiV3AccountsAccountIdWebhooksSubscriptionsRoute,
  postApiV3UsersUserIdCredentialsIdIndexRoute,
  postApiV3UsersUserIdCredentialsIndexRoute,
  putApiV3AccountsAccountIdIpRestrictionsIdRoute,
  putApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute,
  putApiV3AccountsAccountIdScimV2GroupsGroupIdRoute,
  putApiV3AccountsAccountIdScimV2UsersUserIdRoute,
  putApiV3AccountsAccountIdServiceTokensIdIndexRoute,
  putApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute,
} from '../routes'

export const getApiV3AccountsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdAssignGroupsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdAssignGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdAuditLogsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdAuditLogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdAuditLogsDownloadIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdAuditLogsDownloadIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdAuditLogsExportIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdAuditLogsExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdAuditLogsExportIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdAuditLogsExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdConnectionsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdConnectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdConnectionsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdConnectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdConnectionsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdConnectionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3AccountsAccountIdConnectionsIdIndexRouteHandler: RouteHandler<
  typeof patchApiV3AccountsAccountIdConnectionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdConnectionsIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdConnectionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdFavoriteAssetsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdFavoriteAssetsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdGroupPermissionsGroupIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdGroupPermissionsGroupIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdGroupsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdGroupsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdGroupsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdGroupsIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdInvitesIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdInvitesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdIpRestrictionsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdIpRestrictionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdIpRestrictionsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdIpRestrictionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdIpRestrictionsSetIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdIpRestrictionsSetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdIpRestrictionsIdRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdIpRestrictionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV3AccountsAccountIdIpRestrictionsIdRouteHandler: RouteHandler<
  typeof putApiV3AccountsAccountIdIpRestrictionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdIpRestrictionsIdRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdIpRestrictionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdLicenseMapsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdLicenseMapsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdLicenseMapsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdLicenseMapsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdLicenseMapsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdLicenseMapsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdLicenseMapsIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdLicenseMapsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdLicenseMapsIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdLicenseMapsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdMantleMigrationStatusIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdMantleMigrationStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdMigrationInventorySummaryIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdMigrationInventorySummaryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdOauthConfigurationsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdOauthConfigurationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdOauthConfigurationsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdOauthConfigurationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdOauthConfigurationsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdOauthConfigurationsIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdOauthConfigurationsIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdPrivateEndpointsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdPrivateEndpointsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdPrivateEndpointsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdPrivateEndpointsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRouteHandler: RouteHandler<
  typeof patchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRouteHandler: RouteHandler<
  typeof patchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRouteHandler: RouteHandler<
  typeof putApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRouteHandler: RouteHandler<
  typeof patchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRouteHandler: RouteHandler<
  typeof patchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRouteHandler: RouteHandler<
  typeof patchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimConfigIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimConfigIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdScimConfigIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdScimConfigIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimConfigTokensIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimConfigTokensIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdScimConfigTokensIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdScimConfigTokensIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimConfigTokensIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimConfigTokensIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdScimConfigTokensIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdScimConfigTokensIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2GroupsRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdScimV2GroupsRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdScimV2GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV3AccountsAccountIdScimV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof putApiV3AccountsAccountIdScimV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3AccountsAccountIdScimV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof patchApiV3AccountsAccountIdScimV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdScimV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdScimV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2ResourceTypesRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2ResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2SchemasRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2SchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2SchemasSchemaUriRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2SchemasSchemaUriRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2ServiceProviderConfigRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2ServiceProviderConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2UsersRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdScimV2UsersRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdScimV2UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdScimV2UsersUserIdRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdScimV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV3AccountsAccountIdScimV2UsersUserIdRouteHandler: RouteHandler<
  typeof putApiV3AccountsAccountIdScimV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV3AccountsAccountIdScimV2UsersUserIdRouteHandler: RouteHandler<
  typeof patchApiV3AccountsAccountIdScimV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdScimV2UsersUserIdRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdScimV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdSemanticLayerCredentialsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdSemanticLayerCredentialsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdServiceTokensIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdServiceTokensIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdServiceTokensIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdServiceTokensIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdServiceTokensIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdServiceTokensIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV3AccountsAccountIdServiceTokensIdIndexRouteHandler: RouteHandler<
  typeof putApiV3AccountsAccountIdServiceTokensIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdServiceTokensIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdServiceTokensIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdUsersIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdUsersIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdUsersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdWebhooksEventEventIdRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdWebhooksEventEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdWebhooksReceiptReceiptIdRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdWebhooksReceiptReceiptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRouteHandler: RouteHandler<
  typeof putApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AccountsAccountIdWebhooksSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV3AccountsAccountIdWebhooksSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3AccountsAccountIdWebhooksSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV3AccountsAccountIdWebhooksSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3AdapterSchemaIndexRouteHandler: RouteHandler<
  typeof getApiV3AdapterSchemaIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3UsersUserIdCredentialsIndexRouteHandler: RouteHandler<
  typeof getApiV3UsersUserIdCredentialsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3UsersUserIdCredentialsIndexRouteHandler: RouteHandler<
  typeof postApiV3UsersUserIdCredentialsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV3UsersUserIdCredentialsIdIndexRouteHandler: RouteHandler<
  typeof getApiV3UsersUserIdCredentialsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3UsersUserIdCredentialsIdIndexRouteHandler: RouteHandler<
  typeof postApiV3UsersUserIdCredentialsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV3UsersUserIdCredentialsIdIndexRouteHandler: RouteHandler<
  typeof deleteApiV3UsersUserIdCredentialsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
