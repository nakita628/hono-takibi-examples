import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspacesDeleteWorkspaceRoute,
  deleteWWorkspaceWorkspacesDeleteDatatableMigrationDatatableNameTimestampRoute,
  deleteWWorkspaceWorkspacesDeleteGitSyncRepositoryRoute,
  deleteWWorkspaceWorkspacesProtectionRulesRuleNameRoute,
  deleteWWorkspaceWorkspacesSlackOauthConfigRoute,
  getWorkspacesAllowedDomainAutoInviteRoute,
  getWorkspacesListAsSuperadminRoute,
  getWorkspacesListRoute,
  getWorkspacesUsersRoute,
  getWWorkspaceDeploymentRequestEligibleDeployersRoute,
  getWWorkspaceDeploymentRequestOpenRoute,
  getWWorkspaceGithubAppRepoArchivePathRoute,
  getWWorkspaceRemoteDeployTargetRoute,
  getWWorkspaceSharedUiGetRoute,
  getWWorkspaceSharedUiListRoute,
  getWWorkspaceSharedUiVersionRoute,
  getWWorkspaceWorkspacesAvailableTeamsChannelsRoute,
  getWWorkspaceWorkspacesAvailableTeamsIdsRoute,
  getWWorkspaceWorkspacesBillableSeatsRoute,
  getWWorkspaceWorkspacesCloudQuotasRoute,
  getWWorkspaceWorkspacesCompareTargetWorkspaceIdRoute,
  getWWorkspaceWorkspacesDatatableAclDatatableNameRoute,
  getWWorkspaceWorkspacesDatatableMigrationsStatusDatatableNameRoute,
  getWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute,
  getWWorkspaceWorkspacesDatatableUsableRolesDatatableNameRoute,
  getWWorkspaceWorkspacesDefaultAppRoute,
  getWWorkspaceWorkspacesDefaultScriptsRoute,
  getWWorkspaceWorkspacesEncryptionKeyRoute,
  getWWorkspaceWorkspacesForkCreationStatusCreationIdRoute,
  getWWorkspaceWorkspacesGetAsSuperadminRoute,
  getWWorkspaceWorkspacesGetCopilotInfoRoute,
  getWWorkspaceWorkspacesGetCopilotSettingsStateRoute,
  getWWorkspaceWorkspacesGetDatatableTableSchemaRoute,
  getWWorkspaceWorkspacesGetDependencyMapRoute,
  getWWorkspaceWorkspacesGetDependentsImportedPathRoute,
  getWWorkspaceWorkspacesGetDeployToRoute,
  getWWorkspaceWorkspacesGetDevWorkspaceRoute,
  getWWorkspaceWorkspacesGetImportsImporterPathRoute,
  getWWorkspaceWorkspacesGetPublicSettingsRoute,
  getWWorkspaceWorkspacesGetSettingsRoute,
  getWWorkspaceWorkspacesGetWorkspaceNameRoute,
  getWWorkspaceWorkspacesGitSyncDeployModeRoute,
  getWWorkspaceWorkspacesGitSyncEnabledRoute,
  getWWorkspaceWorkspacesGuestUsageRoute,
  getWWorkspaceWorkspacesIsPremiumRoute,
  getWWorkspaceWorkspacesListDatatableMigrationsRoute,
  getWWorkspaceWorkspacesListDatatableSchemasRoute,
  getWWorkspaceWorkspacesListDatatablesRoute,
  getWWorkspaceWorkspacesListDatatableTablesRoute,
  getWWorkspaceWorkspacesListDucklakesRoute,
  getWWorkspaceWorkspacesListPendingInvitesRoute,
  getWWorkspaceWorkspacesListWsSpecificRoute,
  getWWorkspaceWorkspacesListWsSpecificVersionsRoute,
  getWWorkspaceWorkspacesPremiumInfoRoute,
  getWWorkspaceWorkspacesProtectionRulesRoute,
  getWWorkspaceWorkspacesRolesRoute,
  getWWorkspaceWorkspacesSettingsDocumentRoute,
  getWWorkspaceWorkspacesSlackOauthConfigRoute,
  getWWorkspaceWorkspacesTestDatatableConnectionDatatableNameRoute,
  getWWorkspaceWorkspacesThresholdAlertRoute,
  getWWorkspaceWorkspacesUsageRoute,
  getWWorkspaceWorkspacesUsedTriggersRoute,
  postWorkspacesCreateRoute,
  postWorkspacesExistsRoute,
  postWorkspacesExistsUsernameRoute,
  postWorkspacesSessionWorkspaceRetentionRoute,
  postWorkspacesSessionWorkspaceStatusRoute,
  postWorkspacesUnarchiveWorkspaceRoute,
  postWWorkspaceDeploymentRequestIdCancelRoute,
  postWWorkspaceDeploymentRequestIdCloseMergedRoute,
  postWWorkspaceDeploymentRequestIdCommentRoute,
  postWWorkspaceDeploymentRequestRoute,
  postWWorkspaceGithubAppTokenRoute,
  postWWorkspaceRemoteDeployConnectRoute,
  postWWorkspaceRemoteDeployDisconnectRoute,
  postWWorkspaceRemoteDeployTargetRoute,
  postWWorkspaceWorkspacesAddUserRoute,
  postWWorkspaceWorkspacesArchiveRoute,
  postWWorkspaceWorkspacesAttachDevWorkspaceRoute,
  postWWorkspaceWorkspacesChangeWorkspaceColorRoute,
  postWWorkspaceWorkspacesChangeWorkspaceIdRoute,
  postWWorkspaceWorkspacesChangeWorkspaceNameRoute,
  postWWorkspaceWorkspacesConnectSlackRoute,
  postWWorkspaceWorkspacesConnectTeamsRoute,
  postWWorkspaceWorkspacesCreateDatatableMigrationDatatableNameRoute,
  postWWorkspaceWorkspacesCreateForkRoute,
  postWWorkspaceWorkspacesCreatePgDatabaseRoute,
  postWWorkspaceWorkspacesCreateServiceAccountRoute,
  postWWorkspaceWorkspacesCreateWorkspaceForkBranchRoute,
  postWWorkspaceWorkspacesDatatableAclDatatableNameApplyRoute,
  postWWorkspaceWorkspacesDatatableAclDatatableNamePlanRoute,
  postWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute,
  postWWorkspaceWorkspacesDefaultScriptsRoute,
  postWWorkspaceWorkspacesDeleteInviteRoute,
  postWWorkspaceWorkspacesDetachDevWorkspaceRoute,
  postWWorkspaceWorkspacesDisableDatatableMigrationsDatatableNameRoute,
  postWWorkspaceWorkspacesDropForkedDatatableDatabasesRoute,
  postWWorkspaceWorkspacesDropForkedDucklakeNamespacesRoute,
  postWWorkspaceWorkspacesEditAddAdminsAndDevelopersToForksRoute,
  postWWorkspaceWorkspacesEditAutoInviteRoute,
  postWWorkspaceWorkspacesEditCopilotConfigRoute,
  postWWorkspaceWorkspacesEditDatatableConfigRoute,
  postWWorkspaceWorkspacesEditDbtWarehousesRoute,
  postWWorkspaceWorkspacesEditDefaultAppRoute,
  postWWorkspaceWorkspacesEditDeployUiConfigRoute,
  postWWorkspaceWorkspacesEditDucklakeConfigRoute,
  postWWorkspaceWorkspacesEditErrorHandlerRoute,
  postWWorkspaceWorkspacesEditGitSyncConfigRoute,
  postWWorkspaceWorkspacesEditGitSyncRepositoryRoute,
  postWWorkspaceWorkspacesEditGuestJwtKeyRoute,
  postWWorkspaceWorkspacesEditInstanceGroupsRoute,
  postWWorkspaceWorkspacesEditLargeFileStorageConfigRoute,
  postWWorkspaceWorkspacesEditSlackCommandRoute,
  postWWorkspaceWorkspacesEditSuccessHandlerRoute,
  postWWorkspaceWorkspacesEditTeamsCommandRoute,
  postWWorkspaceWorkspacesEditVariableExpirationHandlerRoute,
  postWWorkspaceWorkspacesEditWebhookRoute,
  postWWorkspaceWorkspacesEnableDatatableMigrationsDatatableNameRoute,
  postWWorkspaceWorkspacesEncryptionKeyRoute,
  postWWorkspaceWorkspacesExportPgSchemaRoute,
  postWWorkspaceWorkspacesGenerateInitialDatatableMigrationDatatableNameRoute,
  postWWorkspaceWorkspacesGetDatatableFullSchemaRoute,
  postWWorkspaceWorkspacesGetDependentsAmountsRoute,
  postWWorkspaceWorkspacesImportPgDatabaseRoute,
  postWWorkspaceWorkspacesInviteUserRoute,
  postWWorkspaceWorkspacesLeaveRoute,
  postWWorkspaceWorkspacesLogFeatureUsageRoute,
  postWWorkspaceWorkspacesOperatorSettingsRoute,
  postWWorkspaceWorkspacesProtectionRulesRoute,
  postWWorkspaceWorkspacesProtectionRulesRuleNameRoute,
  postWWorkspaceWorkspacesPruneVersionsRoute,
  postWWorkspaceWorkspacesRebuildDependencyMapRoute,
  postWWorkspaceWorkspacesResetDiffTallyForkWorkspaceIdRoute,
  postWWorkspaceWorkspacesRoleOverridesRoute,
  postWWorkspaceWorkspacesRollbackDatatableMigrationsDatatableNameRoute,
  postWWorkspaceWorkspacesRunDatatableMigrationsDatatableNameRoute,
  postWWorkspaceWorkspacesRunSlackMessageTestJobRoute,
  postWWorkspaceWorkspacesRunTeamsMessageTestJobRoute,
  postWWorkspaceWorkspacesSeedFullDiffTargetWorkspaceIdRoute,
  postWWorkspaceWorkspacesSetEnvironmentVariableRoute,
  postWWorkspaceWorkspacesSettingsDocumentRoute,
  postWWorkspaceWorkspacesSetWsSpecificRoute,
  postWWorkspaceWorkspacesSlackOauthConfigRoute,
  postWWorkspaceWorkspacesSlackSigningSecretRoute,
  postWWorkspaceWorkspacesThresholdAlertRoute,
  postWWorkspaceWorkspacesUpsertDatatableMigrationDatatableNameRoute,
  putWWorkspaceSharedUiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceHandler = app
  .openapi(getWorkspacesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesAllowedDomainAutoInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesSessionWorkspaceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesSessionWorkspaceRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetAsSuperadminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesListAsSuperadminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreateWorkspaceForkBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreateForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesForkCreationStatusCreationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesAttachDevWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDetachDevWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDevWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesExistsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGithubAppTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGithubAppRepoArchivePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesInviteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreateServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDeleteInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesUnarchiveWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesDeleteWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetWorkspaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesChangeWorkspaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesChangeWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesChangeWorkspaceColorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesOperatorSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRoleOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesCompareTargetWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSeedFullDiffTargetWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesResetDiffTallyForkWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListPendingInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetPublicSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDeployToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceRemoteDeployTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceRemoteDeployTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceRemoteDeployConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceRemoteDeployDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesIsPremiumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesBillableSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesPremiumInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesThresholdAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesThresholdAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRebuildDependencyMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDependentsImportedPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetImportsImporterPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesGetDependentsAmountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDependencyMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditSlackCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesSlackOauthConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSlackOauthConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWorkspacesSlackOauthConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSlackSigningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditTeamsCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesAvailableTeamsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesAvailableTeamsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesConnectTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesConnectSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRunSlackMessageTestJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRunTeamsMessageTestJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditAutoInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditInstanceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditCopilotConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesSettingsDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSettingsDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetCopilotSettingsStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetCopilotInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditErrorHandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditVariableExpirationHandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditSuccessHandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditLargeFileStorageConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDbtWarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDucklakesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDatatablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDatatableAclDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDatatableAclDatatableNamePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDatatableAclDatatableNameApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDatatableUsableRolesDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDatatableSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesTestDatatableConnectionDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDatatableTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDatatableTableSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDucklakeConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDatatableConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRunDatatableMigrationsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRollbackDatatableMigrationsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDatatableMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDatatableMigrationsStatusDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEnableDatatableMigrationsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDisableDatatableMigrationsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreateDatatableMigrationDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWorkspacesDeleteDatatableMigrationDatatableNameTimestampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesUpsertDatatableMigrationDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesGenerateInitialDatatableMigrationDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreatePgDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDropForkedDatatableDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDropForkedDucklakeNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesImportPgDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesExportPgSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesGetDatatableFullSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGitSyncEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGitSyncDeployModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditGitSyncConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditGitSyncRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWorkspacesDeleteGitSyncRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDeployUiConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDefaultAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditAddAdminsAndDevelopersToForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditGuestJwtKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGuestUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDefaultScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDefaultScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSetEnvironmentVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesEncryptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEncryptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDefaultAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesUsedTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesProtectionRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWorkspacesProtectionRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDeploymentRequestEligibleDeployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDeploymentRequestOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDeploymentRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDeploymentRequestIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDeploymentRequestIdCloseMergedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDeploymentRequestIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesLogFeatureUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesCloudQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesPruneVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListWsSpecificRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListWsSpecificVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSetWsSpecificRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSharedUiGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSharedUiListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSharedUiVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWWorkspaceSharedUiRoute, (c) => {
    throw new Error('Not implemented')
  })
