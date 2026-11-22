import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgActionsHostedRunnersHostedRunnerIdRoute,
  deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute,
  deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute,
  deleteOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsPoliciesPolicyIdRoute,
  deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute,
  deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute,
  deleteOrgsOrgActionsRunnersRunnerIdLabelsNameRoute,
  deleteOrgsOrgActionsRunnersRunnerIdLabelsRoute,
  deleteOrgsOrgActionsRunnersRunnerIdRoute,
  deleteOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsSecretsSecretNameRoute,
  deleteOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute,
  deleteOrgsOrgActionsVariablesNameRoute,
  deleteReposOwnerRepoActionsArtifactsArtifactIdRoute,
  deleteReposOwnerRepoActionsCachesCacheIdRoute,
  deleteReposOwnerRepoActionsCachesRoute,
  deleteReposOwnerRepoActionsPoliciesPolicyIdRoute,
  deleteReposOwnerRepoActionsRunnersRunnerIdLabelsNameRoute,
  deleteReposOwnerRepoActionsRunnersRunnerIdLabelsRoute,
  deleteReposOwnerRepoActionsRunnersRunnerIdRoute,
  deleteReposOwnerRepoActionsRunsRunIdLogsRoute,
  deleteReposOwnerRepoActionsRunsRunIdRoute,
  deleteReposOwnerRepoActionsSecretsSecretNameRoute,
  deleteReposOwnerRepoActionsVariablesNameRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute,
  getEnterprisesEnterpriseActionsCacheRetentionLimitRoute,
  getEnterprisesEnterpriseActionsCacheStorageLimitRoute,
  getOrganizationsOrgActionsCacheRetentionLimitRoute,
  getOrganizationsOrgActionsCacheStorageLimitRoute,
  getOrgsOrgActionsCacheUsageByRepositoryRoute,
  getOrgsOrgActionsCacheUsageRoute,
  getOrgsOrgActionsHostedRunnersHostedRunnerIdRoute,
  getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute,
  getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsRoute,
  getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute,
  getOrgsOrgActionsHostedRunnersImagesCustomRoute,
  getOrgsOrgActionsHostedRunnersImagesGithubOwnedRoute,
  getOrgsOrgActionsHostedRunnersImagesPartnerRoute,
  getOrgsOrgActionsHostedRunnersLimitsRoute,
  getOrgsOrgActionsHostedRunnersMachineSizesRoute,
  getOrgsOrgActionsHostedRunnersPlatformsRoute,
  getOrgsOrgActionsHostedRunnersRoute,
  getOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute,
  getOrgsOrgActionsPermissionsForkPrContributorApprovalRoute,
  getOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute,
  getOrgsOrgActionsPermissionsRepositoriesRoute,
  getOrgsOrgActionsPermissionsRoute,
  getOrgsOrgActionsPermissionsSelectedActionsRoute,
  getOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute,
  getOrgsOrgActionsPermissionsSelfHostedRunnersRoute,
  getOrgsOrgActionsPermissionsWorkflowRoute,
  getOrgsOrgActionsPoliciesPolicyIdRoute,
  getOrgsOrgActionsPoliciesRoute,
  getOrgsOrgActionsRunnerGroupsRoute,
  getOrgsOrgActionsRunnerGroupsRunnerGroupIdHostedRunnersRoute,
  getOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute,
  getOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute,
  getOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute,
  getOrgsOrgActionsRunnersDeprecationsVersionRoute,
  getOrgsOrgActionsRunnersDownloadsRoute,
  getOrgsOrgActionsRunnersRoute,
  getOrgsOrgActionsRunnersRunnerIdLabelsRoute,
  getOrgsOrgActionsRunnersRunnerIdRoute,
  getOrgsOrgActionsSecretsPublicKeyRoute,
  getOrgsOrgActionsSecretsRoute,
  getOrgsOrgActionsSecretsSecretNameRepositoriesRoute,
  getOrgsOrgActionsSecretsSecretNameRoute,
  getOrgsOrgActionsVariablesNameRepositoriesRoute,
  getOrgsOrgActionsVariablesNameRoute,
  getOrgsOrgActionsVariablesRoute,
  getReposOwnerRepoActionsArtifactsArtifactIdArchiveFormatRoute,
  getReposOwnerRepoActionsArtifactsArtifactIdRoute,
  getReposOwnerRepoActionsArtifactsRoute,
  getReposOwnerRepoActionsCacheRetentionLimitRoute,
  getReposOwnerRepoActionsCachesRoute,
  getReposOwnerRepoActionsCacheStorageLimitRoute,
  getReposOwnerRepoActionsCacheUsageRoute,
  getReposOwnerRepoActionsConcurrencyGroupsConcurrencyGroupNameRoute,
  getReposOwnerRepoActionsConcurrencyGroupsRoute,
  getReposOwnerRepoActionsJobsJobIdLogsRoute,
  getReposOwnerRepoActionsJobsJobIdRoute,
  getReposOwnerRepoActionsJobsJobIdStepsStepNumberLogsRoute,
  getReposOwnerRepoActionsOidcCustomizationSubRoute,
  getReposOwnerRepoActionsOrganizationSecretsRoute,
  getReposOwnerRepoActionsOrganizationVariablesRoute,
  getReposOwnerRepoActionsPermissionsAccessRoute,
  getReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute,
  getReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute,
  getReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute,
  getReposOwnerRepoActionsPermissionsRoute,
  getReposOwnerRepoActionsPermissionsSelectedActionsRoute,
  getReposOwnerRepoActionsPermissionsWorkflowRoute,
  getReposOwnerRepoActionsPoliciesPolicyIdRoute,
  getReposOwnerRepoActionsPoliciesRoute,
  getReposOwnerRepoActionsRunnersDeprecationsVersionRoute,
  getReposOwnerRepoActionsRunnersDownloadsRoute,
  getReposOwnerRepoActionsRunnersRoute,
  getReposOwnerRepoActionsRunnersRunnerIdLabelsRoute,
  getReposOwnerRepoActionsRunnersRunnerIdRoute,
  getReposOwnerRepoActionsRunsRoute,
  getReposOwnerRepoActionsRunsRunIdApprovalsRoute,
  getReposOwnerRepoActionsRunsRunIdArtifactsRoute,
  getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberJobsRoute,
  getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberLogsRoute,
  getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberRoute,
  getReposOwnerRepoActionsRunsRunIdConcurrencyGroupsRoute,
  getReposOwnerRepoActionsRunsRunIdJobsRoute,
  getReposOwnerRepoActionsRunsRunIdLogsRoute,
  getReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute,
  getReposOwnerRepoActionsRunsRunIdRoute,
  getReposOwnerRepoActionsRunsRunIdTimingRoute,
  getReposOwnerRepoActionsSecretsPublicKeyRoute,
  getReposOwnerRepoActionsSecretsRoute,
  getReposOwnerRepoActionsSecretsSecretNameRoute,
  getReposOwnerRepoActionsVariablesNameRoute,
  getReposOwnerRepoActionsVariablesRoute,
  getReposOwnerRepoActionsWorkflowsRoute,
  getReposOwnerRepoActionsWorkflowsWorkflowIdRoute,
  getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRoute,
  getReposOwnerRepoActionsWorkflowsWorkflowIdTimingRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameSecretsPublicKeyRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameSecretsRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute,
  patchOrgsOrgActionsHostedRunnersHostedRunnerIdRoute,
  patchOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute,
  patchOrgsOrgActionsVariablesNameRoute,
  patchReposOwnerRepoActionsVariablesNameRoute,
  patchReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute,
  postOrgsOrgActionsHostedRunnersRoute,
  postOrgsOrgActionsPoliciesRoute,
  postOrgsOrgActionsRunnerGroupsRoute,
  postOrgsOrgActionsRunnersGenerateJitconfigRoute,
  postOrgsOrgActionsRunnersRegistrationTokenRoute,
  postOrgsOrgActionsRunnersRemoveTokenRoute,
  postOrgsOrgActionsRunnersRunnerIdLabelsRoute,
  postOrgsOrgActionsVariablesRoute,
  postReposOwnerRepoActionsJobsJobIdRerunRoute,
  postReposOwnerRepoActionsPoliciesRoute,
  postReposOwnerRepoActionsRunnersGenerateJitconfigRoute,
  postReposOwnerRepoActionsRunnersRegistrationTokenRoute,
  postReposOwnerRepoActionsRunnersRemoveTokenRoute,
  postReposOwnerRepoActionsRunnersRunnerIdLabelsRoute,
  postReposOwnerRepoActionsRunsRunIdApproveRoute,
  postReposOwnerRepoActionsRunsRunIdCancelRoute,
  postReposOwnerRepoActionsRunsRunIdDeploymentProtectionRuleRoute,
  postReposOwnerRepoActionsRunsRunIdForceCancelRoute,
  postReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute,
  postReposOwnerRepoActionsRunsRunIdRerunFailedJobsRoute,
  postReposOwnerRepoActionsRunsRunIdRerunRoute,
  postReposOwnerRepoActionsVariablesRoute,
  postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRoute,
  postReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute,
  putEnterprisesEnterpriseActionsCacheRetentionLimitRoute,
  putEnterprisesEnterpriseActionsCacheStorageLimitRoute,
  putOrganizationsOrgActionsCacheRetentionLimitRoute,
  putOrganizationsOrgActionsCacheStorageLimitRoute,
  putOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute,
  putOrgsOrgActionsPermissionsForkPrContributorApprovalRoute,
  putOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute,
  putOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsPermissionsRepositoriesRoute,
  putOrgsOrgActionsPermissionsRoute,
  putOrgsOrgActionsPermissionsSelectedActionsRoute,
  putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute,
  putOrgsOrgActionsPermissionsSelfHostedRunnersRoute,
  putOrgsOrgActionsPermissionsWorkflowRoute,
  putOrgsOrgActionsPoliciesPolicyIdRoute,
  putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute,
  putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute,
  putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute,
  putOrgsOrgActionsRunnersRunnerIdLabelsRoute,
  putOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsSecretsSecretNameRepositoriesRoute,
  putOrgsOrgActionsSecretsSecretNameRoute,
  putOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute,
  putOrgsOrgActionsVariablesNameRepositoriesRoute,
  putReposOwnerRepoActionsCacheRetentionLimitRoute,
  putReposOwnerRepoActionsCacheStorageLimitRoute,
  putReposOwnerRepoActionsOidcCustomizationSubRoute,
  putReposOwnerRepoActionsPermissionsAccessRoute,
  putReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute,
  putReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute,
  putReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute,
  putReposOwnerRepoActionsPermissionsRoute,
  putReposOwnerRepoActionsPermissionsSelectedActionsRoute,
  putReposOwnerRepoActionsPermissionsWorkflowRoute,
  putReposOwnerRepoActionsPoliciesPolicyIdRoute,
  putReposOwnerRepoActionsRunnersRunnerIdLabelsRoute,
  putReposOwnerRepoActionsSecretsSecretNameRoute,
  putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRoute,
  putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRoute,
  putReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(getEnterprisesEnterpriseActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrgActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrgActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsCacheUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsCacheUsageByRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute,
    (c) => {},
  )
  .openapi(
    deleteOrgsOrgActionsHostedRunnersImagesCustomImageDefinitionIdVersionsVersionRoute,
    (c) => {},
  )
  .openapi(getOrgsOrgActionsHostedRunnersImagesGithubOwnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersImagesPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersMachineSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersPlatformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsHostedRunnersHostedRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgActionsHostedRunnersHostedRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsHostedRunnersHostedRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsArtifactAndLogRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsForkPrContributorApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsForkPrContributorApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsForkPrWorkflowsPrivateReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsPermissionsRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsSelectedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsSelectedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsSelfHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsSelfHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsPermissionsSelfHostedRunnersRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPermissionsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPermissionsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRunnerGroupIdHostedRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnerGroupsRunnerGroupIdRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersDeprecationsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersGenerateJitconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersRemoveTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsRunnersRunnerIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsSecretsSecretNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsSecretsSecretNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsVariablesNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsVariablesNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsVariablesNameRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsArtifactIdArchiveFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsCacheUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsCachesCacheIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsConcurrencyGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsConcurrencyGroupsConcurrencyGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsJobsJobIdRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsJobIdStepsStepNumberLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsOidcCustomizationSubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsOidcCustomizationSubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsOrganizationSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsOrganizationVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsSelectedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsSelectedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersDeprecationsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersGenerateJitconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersRemoveTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunnersRunnerIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdConcurrencyGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdDeploymentProtectionRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdForceCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunsRunIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdRerunFailedJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdTimingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsWorkflowIdTimingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
