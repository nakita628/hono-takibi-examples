import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV3AccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdAssignGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdAuditLogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdAuditLogsDownloadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdAuditLogsExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdAuditLogsExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdFavoriteAssetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdGroupPermissionsGroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdInvitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdIpRestrictionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdIpRestrictionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdIpRestrictionsSetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdIpRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdIpRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdIpRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdLicenseMapsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdLicenseMapsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdLicenseMapsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdLicenseMapsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdLicenseMapsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdMantleMigrationStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdMigrationInventorySummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdOauthConfigurationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdOauthConfigurationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdOauthConfigurationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdPrivateEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdPrivateEndpointsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdScimConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimConfigTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdScimConfigTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimConfigTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdScimConfigTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdScimV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdScimV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2ResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2SchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2SchemasSchemaUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2ServiceProviderConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdScimV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdScimV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdSemanticLayerCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdServiceTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdServiceTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdServiceTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdServiceTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdServiceTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksEventEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksReceiptReceiptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdWebhooksSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdWebhooksSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AdapterSchemaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3UsersUserIdCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3UsersUserIdCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3UsersUserIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3UsersUserIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3UsersUserIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
