import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1EnvironmentsEnvironmentIdPortsPortRoute,
  deleteApiV1EnvironmentsEnvironmentIdRoute,
  deleteApiV1GenevaActionsConfigurationTargetKeyRoute,
  deleteApiV1GenevaActionsEnvironmentsEnvironmentIdRoute,
  deleteApiV1GenevaActionsVnetPoolDefinitionsRoute,
  deleteApiV1SecretsSecretIdRoute,
  deleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
  deleteApiV1TenantTenantIdPoolGroupPoolGroupNameRoute,
  deleteApiV1TenantTenantIdPoolPoolNameRoute,
  deleteApiV1TenantTenantIdPoolPoolNameVmVmNameRoute,
  deleteApiV1TenantTenantIdRoute,
  deleteApiV1UserSubscriptionsRoute,
  deleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameRoute,
  getApiV1AgentsFamilyRoute,
  getApiV1EnvironmentsEnvironmentIdArchiveRoute,
  getApiV1EnvironmentsEnvironmentIdHeartbeattokenRoute,
  getApiV1EnvironmentsEnvironmentIdRoute,
  getApiV1EnvironmentsEnvironmentIdStateRoute,
  getApiV1EnvironmentsEnvironmentIdUpdatesRoute,
  getApiV1EnvironmentsRoute,
  getApiV1GenevaActionsBillingEnvironmentIdRoute,
  getApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute,
  getApiV1GenevaActionsConfigurationTargetKeyRoute,
  getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobRoute,
  getApiV1GenevaActionsEnvironmentsEnvironmentIdRoute,
  getApiV1LocationsLocationRoute,
  getApiV1LocationsRoute,
  getApiV1PoolsDefaultRoute,
  getApiV1PrebuildsTemplateEnvironmentIdRoute,
  getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusRoute,
  getApiV1SasRoute,
  getApiV1SecretsRoute,
  getApiV1TenantTenantIdPoolGroupPoolGroupNameRoute,
  getApiV1TenantTenantIdPoolPoolNameRoute,
  getApiV1TenantTenantIdPoolPoolNameVmRoute,
  getApiV1TenantTenantIdPoolPoolNameVmVmNameRoute,
  getApiV1TenantTenantIdRoute,
  getApiV1TunnelEnvironmentIdPortInfoRoute,
  getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathRoute,
  patchApiV1EnvironmentsEnvironmentIdFolderRoute,
  patchApiV1EnvironmentsEnvironmentIdRestoreRoute,
  patchApiV1EnvironmentsEnvironmentIdRoute,
  patchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
  patchApiV1TenantTenantIdPoolGroupPoolGroupNameRoute,
  patchApiV1TenantTenantIdPoolPoolNameRoute,
  postApiV1AgentTelemetryRoute,
  postApiV1AgentTelemetryStandaloneRoute,
  postApiV1EnvironmentsEnvironmentIdArchiveRoute,
  postApiV1EnvironmentsEnvironmentIdCallbackRoute,
  postApiV1EnvironmentsEnvironmentIdExportRoute,
  postApiV1EnvironmentsEnvironmentIdNotifyRoute,
  postApiV1EnvironmentsEnvironmentIdShutdownRoute,
  postApiV1EnvironmentsEnvironmentIdStartRoute,
  postApiV1EnvironmentsRoute,
  postApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute,
  postApiV1GenevaActionsBillingResendRoute,
  postApiV1GenevaActionsConfigurationTargetRoute,
  postApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsRoute,
  postApiV1GenevaActionsPoolsChangeResourceDeletionSettingRoute,
  postApiV1GenevaActionsPoolsPoolCodeRotatePoolRoute,
  postApiV1GenevaActionsPoolsTargetRoute,
  postApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsRoute,
  postApiV1GenevaActionsPrebuildsPoolsDeleteRoute,
  postApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRoute,
  postApiV1GenevaActionsResourcesResourceIdUnderInvestigationRoute,
  postApiV1GenevaActionsVnetPoolDefinitionsRoute,
  postApiV1HeartBeatRoute,
  postApiV1PrebuildsPoolsPoolIdInstancesRoute,
  postApiV1SecretsRoute,
  postApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginRoute,
  postApiV1TenantTenantIdPoolPoolNameVmVmNameStartRoute,
  postApiV1TenantTenantIdPoolPoolNameVmVmNameStopRoute,
  postApiV1TokensPlansPlanNameDeleteAllCodespacesRoute,
  postApiV1TokensPlansPlanNameReadAllCodespacesRoute,
  postApiV1TokensPlansPlanNameWriteCodespacesRoute,
  postApiV1TokensPlansPlanNameWriteDelegatesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsRoute,
  postApiV1UserSubscriptionsRoute,
  postApiV2PrebuildsDeleteRoute,
  postApiV2PrebuildsTemplatesRoute,
  postApiV2PrebuildsTemplatesTemplateIdUpdatestatusRoute,
  postApiV2PrebuildsTemplatesUpdatemaxversionsRoute,
  putApiV1EnvironmentsEnvironmentIdPortsPortRoute,
  putApiV1EnvironmentsEnvironmentIdSecretsRoute,
  putApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRoute,
  putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRoute,
  putApiV1PrebuildsPoolsPoolIdInstancesRoute,
  putApiV1SecretsSecretIdRoute,
  putApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationRoute,
  putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationRoute,
  putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationRoute,
  putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
  putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameRoute,
  putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameRoute,
  putApiV1TenantTenantIdPoolGroupPoolGroupNameRoute,
  putApiV1TenantTenantIdPoolPoolNameRoute,
  putApiV1TenantTenantIdPoolPoolNameVmVmNameRoute,
  putApiV1TenantTenantIdRoute,
  putApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameRoute,
} from '../routes'

export const postApiV1AgentTelemetryRouteHandler: RouteHandler<
  typeof postApiV1AgentTelemetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AgentTelemetryStandaloneRouteHandler: RouteHandler<
  typeof postApiV1AgentTelemetryStandaloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AgentsFamilyRouteHandler: RouteHandler<
  typeof getApiV1AgentsFamilyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EnvironmentsRouteHandler: RouteHandler<
  typeof getApiV1EnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1EnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1EnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof deleteApiV1EnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof getApiV1EnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1EnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof patchApiV1EnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EnvironmentsEnvironmentIdCallbackRouteHandler: RouteHandler<
  typeof postApiV1EnvironmentsEnvironmentIdCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EnvironmentsEnvironmentIdArchiveRouteHandler: RouteHandler<
  typeof getApiV1EnvironmentsEnvironmentIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EnvironmentsEnvironmentIdArchiveRouteHandler: RouteHandler<
  typeof postApiV1EnvironmentsEnvironmentIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EnvironmentsEnvironmentIdExportRouteHandler: RouteHandler<
  typeof postApiV1EnvironmentsEnvironmentIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1EnvironmentsEnvironmentIdFolderRouteHandler: RouteHandler<
  typeof patchApiV1EnvironmentsEnvironmentIdFolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EnvironmentsEnvironmentIdHeartbeattokenRouteHandler: RouteHandler<
  typeof getApiV1EnvironmentsEnvironmentIdHeartbeattokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EnvironmentsEnvironmentIdNotifyRouteHandler: RouteHandler<
  typeof postApiV1EnvironmentsEnvironmentIdNotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1EnvironmentsEnvironmentIdPortsPortRouteHandler: RouteHandler<
  typeof deleteApiV1EnvironmentsEnvironmentIdPortsPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EnvironmentsEnvironmentIdPortsPortRouteHandler: RouteHandler<
  typeof putApiV1EnvironmentsEnvironmentIdPortsPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1EnvironmentsEnvironmentIdRestoreRouteHandler: RouteHandler<
  typeof patchApiV1EnvironmentsEnvironmentIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EnvironmentsEnvironmentIdSecretsRouteHandler: RouteHandler<
  typeof putApiV1EnvironmentsEnvironmentIdSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EnvironmentsEnvironmentIdShutdownRouteHandler: RouteHandler<
  typeof postApiV1EnvironmentsEnvironmentIdShutdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EnvironmentsEnvironmentIdStartRouteHandler: RouteHandler<
  typeof postApiV1EnvironmentsEnvironmentIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EnvironmentsEnvironmentIdStateRouteHandler: RouteHandler<
  typeof getApiV1EnvironmentsEnvironmentIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EnvironmentsEnvironmentIdUpdatesRouteHandler: RouteHandler<
  typeof getApiV1EnvironmentsEnvironmentIdUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsBillingResendRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsBillingResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GenevaActionsBillingEnvironmentIdRouteHandler: RouteHandler<
  typeof getApiV1GenevaActionsBillingEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GenevaActionsBillingEnvironmentIdStateChangesRouteHandler: RouteHandler<
  typeof getApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsBillingEnvironmentIdStateChangesRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsConfigurationTargetRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsConfigurationTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1GenevaActionsConfigurationTargetKeyRouteHandler: RouteHandler<
  typeof deleteApiV1GenevaActionsConfigurationTargetKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GenevaActionsConfigurationTargetKeyRouteHandler: RouteHandler<
  typeof getApiV1GenevaActionsConfigurationTargetKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1GenevaActionsEnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof deleteApiV1GenevaActionsEnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GenevaActionsEnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof getApiV1GenevaActionsEnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRouteHandler: RouteHandler<
  typeof putApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobRouteHandler: RouteHandler<
  typeof getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRouteHandler: RouteHandler<
  typeof putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsPoolsChangeResourceDeletionSettingRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsPoolsChangeResourceDeletionSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsPoolsPoolCodeRotatePoolRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsPoolsPoolCodeRotatePoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsPoolsTargetRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsPoolsTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsPrebuildsPoolsDeleteRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsPrebuildsPoolsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsResourcesResourceIdUnderInvestigationRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsResourcesResourceIdUnderInvestigationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1GenevaActionsVnetPoolDefinitionsRouteHandler: RouteHandler<
  typeof deleteApiV1GenevaActionsVnetPoolDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GenevaActionsVnetPoolDefinitionsRouteHandler: RouteHandler<
  typeof postApiV1GenevaActionsVnetPoolDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1HeartBeatRouteHandler: RouteHandler<typeof postApiV1HeartBeatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1LocationsRouteHandler: RouteHandler<typeof getApiV1LocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1LocationsLocationRouteHandler: RouteHandler<
  typeof getApiV1LocationsLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PrebuildsPoolsPoolIdInstancesRouteHandler: RouteHandler<
  typeof postApiV1PrebuildsPoolsPoolIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PrebuildsPoolsPoolIdInstancesRouteHandler: RouteHandler<
  typeof putApiV1PrebuildsPoolsPoolIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PrebuildsTemplateEnvironmentIdRouteHandler: RouteHandler<
  typeof getApiV1PrebuildsTemplateEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusRouteHandler: RouteHandler<
  typeof getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SasRouteHandler: RouteHandler<typeof getApiV1SasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SecretsRouteHandler: RouteHandler<typeof getApiV1SecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SecretsRouteHandler: RouteHandler<typeof postApiV1SecretsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SecretsSecretIdRouteHandler: RouteHandler<
  typeof deleteApiV1SecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SecretsSecretIdRouteHandler: RouteHandler<
  typeof putApiV1SecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TenantTenantIdRouteHandler: RouteHandler<
  typeof deleteApiV1TenantTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TenantTenantIdRouteHandler: RouteHandler<
  typeof getApiV1TenantTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TenantTenantIdRouteHandler: RouteHandler<
  typeof putApiV1TenantTenantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensPlansPlanNameDeleteAllCodespacesRouteHandler: RouteHandler<
  typeof postApiV1TokensPlansPlanNameDeleteAllCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensPlansPlanNameReadAllCodespacesRouteHandler: RouteHandler<
  typeof postApiV1TokensPlansPlanNameReadAllCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensPlansPlanNameWriteCodespacesRouteHandler: RouteHandler<
  typeof postApiV1TokensPlansPlanNameWriteCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensPlansPlanNameWriteDelegatesRouteHandler: RouteHandler<
  typeof postApiV1TokensPlansPlanNameWriteDelegatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameRouteHandler: RouteHandler<
  typeof putApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesRouteHandler: RouteHandler<
  typeof postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesRouteHandler: RouteHandler<
  typeof postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesRouteHandler: RouteHandler<
  typeof postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesRouteHandler: RouteHandler<
  typeof postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TunnelEnvironmentIdPortInfoRouteHandler: RouteHandler<
  typeof getApiV1TunnelEnvironmentIdPortInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1UserSubscriptionsRouteHandler: RouteHandler<
  typeof deleteApiV1UserSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UserSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1UserSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PoolsDefaultRouteHandler: RouteHandler<
  typeof getApiV1PoolsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationRouteHandler: RouteHandler<
  typeof putApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationRouteHandler: RouteHandler<
  typeof putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationRouteHandler: RouteHandler<
  typeof putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRouteHandler: RouteHandler<
  typeof deleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRouteHandler: RouteHandler<
  typeof patchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRouteHandler: RouteHandler<
  typeof putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameRouteHandler: RouteHandler<
  typeof putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameRouteHandler: RouteHandler<
  typeof putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TenantTenantIdPoolPoolNameRouteHandler: RouteHandler<
  typeof deleteApiV1TenantTenantIdPoolPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TenantTenantIdPoolPoolNameRouteHandler: RouteHandler<
  typeof getApiV1TenantTenantIdPoolPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1TenantTenantIdPoolPoolNameRouteHandler: RouteHandler<
  typeof patchApiV1TenantTenantIdPoolPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TenantTenantIdPoolPoolNameRouteHandler: RouteHandler<
  typeof putApiV1TenantTenantIdPoolPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TenantTenantIdPoolGroupPoolGroupNameRouteHandler: RouteHandler<
  typeof deleteApiV1TenantTenantIdPoolGroupPoolGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TenantTenantIdPoolGroupPoolGroupNameRouteHandler: RouteHandler<
  typeof getApiV1TenantTenantIdPoolGroupPoolGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1TenantTenantIdPoolGroupPoolGroupNameRouteHandler: RouteHandler<
  typeof patchApiV1TenantTenantIdPoolGroupPoolGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TenantTenantIdPoolGroupPoolGroupNameRouteHandler: RouteHandler<
  typeof putApiV1TenantTenantIdPoolGroupPoolGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TenantTenantIdPoolPoolNameVmRouteHandler: RouteHandler<
  typeof getApiV1TenantTenantIdPoolPoolNameVmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1TenantTenantIdPoolPoolNameVmVmNameRouteHandler: RouteHandler<
  typeof deleteApiV1TenantTenantIdPoolPoolNameVmVmNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1TenantTenantIdPoolPoolNameVmVmNameRouteHandler: RouteHandler<
  typeof getApiV1TenantTenantIdPoolPoolNameVmVmNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1TenantTenantIdPoolPoolNameVmVmNameRouteHandler: RouteHandler<
  typeof putApiV1TenantTenantIdPoolPoolNameVmVmNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TenantTenantIdPoolPoolNameVmVmNameStartRouteHandler: RouteHandler<
  typeof postApiV1TenantTenantIdPoolPoolNameVmVmNameStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1TenantTenantIdPoolPoolNameVmVmNameStopRouteHandler: RouteHandler<
  typeof postApiV1TenantTenantIdPoolPoolNameVmVmNameStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PrebuildsDeleteRouteHandler: RouteHandler<
  typeof postApiV2PrebuildsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameRouteHandler: RouteHandler<
  typeof deleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PrebuildsTemplatesRouteHandler: RouteHandler<
  typeof postApiV2PrebuildsTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathRouteHandler: RouteHandler<
  typeof getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PrebuildsTemplatesUpdatemaxversionsRouteHandler: RouteHandler<
  typeof postApiV2PrebuildsTemplatesUpdatemaxversionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PrebuildsTemplatesTemplateIdUpdatestatusRouteHandler: RouteHandler<
  typeof postApiV2PrebuildsTemplatesTemplateIdUpdatestatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
