import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiV1AgentTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AgentTelemetryStandaloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AgentsFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1EnvironmentsEnvironmentIdFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdHeartbeattokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EnvironmentsEnvironmentIdPortsPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EnvironmentsEnvironmentIdPortsPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1EnvironmentsEnvironmentIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EnvironmentsEnvironmentIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsBillingResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsBillingEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsConfigurationTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GenevaActionsConfigurationTargetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsConfigurationTargetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GenevaActionsEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPoolsChangeResourceDeletionSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPoolsPoolCodeRotatePoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPoolsTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPrebuildsPoolsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsResourcesResourceIdUnderInvestigationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GenevaActionsVnetPoolDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsVnetPoolDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1HeartBeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocationsLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PrebuildsPoolsPoolIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PrebuildsPoolsPoolIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PrebuildsTemplateEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV1PrebuildsTemplatesRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationSkusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV1SasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TenantTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensPlansPlanNameDeleteAllCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensPlansPlanNameReadAllCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensPlansPlanNameWriteCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensPlansPlanNameWriteDelegatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV1TunnelEnvironmentIdPortInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PoolsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansSubscriptionLifeCycleNotificationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftCodespacesPlansResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansSubscriptionLifeCycleNotificationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdProvidersMicrosoftVSOnlinePlansResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteAllEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadAllEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameReadDelegatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceCreationValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceDeletionValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourcePatchValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteDelegatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftCodespacesPlansResourceNameWriteEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteAllEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadAllEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameReadDelegatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceCreationValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceDeletionValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourcePatchValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteDelegatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameWriteEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftCodespacesPlansResourceNameDeleteDelegatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupProvidersMicrosoftVSOnlinePlansResourceNameDeleteDelegatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApiV1TenantTenantIdPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1TenantTenantIdPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TenantTenantIdPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TenantTenantIdPoolGroupPoolGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdPoolGroupPoolGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1TenantTenantIdPoolGroupPoolGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TenantTenantIdPoolGroupPoolGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdPoolPoolNameVmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TenantTenantIdPoolPoolNameVmVmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TenantTenantIdPoolPoolNameVmVmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TenantTenantIdPoolPoolNameVmVmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TenantTenantIdPoolPoolNameVmVmNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TenantTenantIdPoolPoolNameVmVmNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PrebuildsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PrebuildsRepositoryRepoIdBranchBranchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PrebuildsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2PrebuildsTemplatesSkusRepoRepoIdBranchBranchNameHashPrebuildHashLocationLocationDevcontainerpathDevContainerPathRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2PrebuildsTemplatesUpdatemaxversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PrebuildsTemplatesTemplateIdUpdatestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
