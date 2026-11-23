import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContextContextIdEnvironmentVariableEnvVarNameRoute,
  deleteContextContextIdRestrictionsRestrictionIdRoute,
  deleteContextContextIdRoute,
  deleteOrganizationOrgSlugOrIdRoute,
  deleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdRoute,
  deleteOrganizationsOrgIdGroupsGroupIdRoute,
  deleteOrgOrgIDOidcCustomClaimsRoute,
  deleteOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
  deleteOtelExportersOtelExporterIdRoute,
  deleteProjectProjectSlugCheckoutKeyFingerprintRoute,
  deleteProjectProjectSlugEnvvarNameRoute,
  deleteProjectProjectSlugRoute,
  deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  deleteProjectsProjectIdTriggersTriggerIdRoute,
  deleteScheduleScheduleIdRoute,
  deleteWebhookWebhookIdRoute,
  getContextContextIdEnvironmentVariableRoute,
  getContextContextIdRestrictionsRoute,
  getContextContextIdRoute,
  getContextRoute,
  getDeployComponentsComponentIdRoute,
  getDeployComponentsComponentIdVersionsRoute,
  getDeployComponentsRoute,
  getDeployEnvironmentsEnvironmentIdRoute,
  getDeployEnvironmentsRoute,
  getInsightsOrgSlugSummaryRoute,
  getInsightsPagesProjectSlugSummaryRoute,
  getInsightsProjectSlugBranchesRoute,
  getInsightsProjectSlugFlakyTestsRoute,
  getInsightsProjectSlugWorkflowsRoute,
  getInsightsProjectSlugWorkflowsWorkflowNameJobsRoute,
  getInsightsProjectSlugWorkflowsWorkflowNameRoute,
  getInsightsProjectSlugWorkflowsWorkflowNameSummaryRoute,
  getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsRoute,
  getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsRoute,
  getJobsJobIdRoute,
  getMeCollaborationsRoute,
  getMeRoute,
  getOrganizationOrgSlugOrIdRoute,
  getOrganizationOrgSlugOrIdUrlOrbAllowListRoute,
  getOrganizationsOrgIdGroupsGroupIdRoute,
  getOrganizationsOrgIdGroupsRoute,
  getOrganizationsOrgIdUsageExportJobUsageExportJobIdRoute,
  getOrgOrgIDOidcCustomClaimsRoute,
  getOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
  getOtelExportersRoute,
  getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleRoute,
  getOwnerOwnerIDContextContextDecisionDecisionIDRoute,
  getOwnerOwnerIDContextContextDecisionRoute,
  getOwnerOwnerIDContextContextDecisionSettingsRoute,
  getOwnerOwnerIDContextContextPolicyBundlePolicyNameRoute,
  getOwnerOwnerIDContextContextPolicyBundleRoute,
  getPipelinePipelineIdConfigRoute,
  getPipelinePipelineIdRoute,
  getPipelinePipelineIdValuesRoute,
  getPipelinePipelineIdWorkflowRoute,
  getPipelineRoute,
  getProjectProjectSlugCheckoutKeyFingerprintRoute,
  getProjectProjectSlugCheckoutKeyRoute,
  getProjectProjectSlugEnvvarNameRoute,
  getProjectProjectSlugEnvvarRoute,
  getProjectProjectSlugPipelineMineRoute,
  getProjectProjectSlugPipelinePipelineNumberRoute,
  getProjectProjectSlugPipelineRoute,
  getProjectProjectSlugRoute,
  getProjectProjectSlugScheduleRoute,
  getProjectProviderOrganizationProjectSettingsRoute,
  getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute,
  getProjectsProjectIdPipelineDefinitionsRoute,
  getProjectsProjectIdTriggersTriggerIdRoute,
  getScheduleScheduleIdRoute,
  getUserIdRoute,
  getWebhookRoute,
  getWebhookWebhookIdRoute,
  getWorkflowIdJobRoute,
  getWorkflowIdRoute,
  patchOrgOrgIDOidcCustomClaimsRoute,
  patchOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
  patchOwnerOwnerIDContextContextDecisionSettingsRoute,
  patchProjectProviderOrganizationProjectSettingsRoute,
  patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  patchProjectsProjectIdTriggersTriggerIdRoute,
  patchScheduleScheduleIdRoute,
  postContextContextIdRestrictionsRoute,
  postContextRoute,
  postInsightsPagesProjectSlugSummaryRoute,
  postJobsJobIdCancelRoute,
  postOrganizationOrgSlugOrIdProjectRoute,
  postOrganizationOrgSlugOrIdUrlOrbAllowListRoute,
  postOrganizationRoute,
  postOrganizationsOrgIdGroupsRoute,
  postOrganizationsOrgIdUsageExportJobRoute,
  postOtelExportersRoute,
  postOwnerOwnerIDContextContextDecisionRoute,
  postOwnerOwnerIDContextContextPolicyBundleRoute,
  postPipelineContinueRoute,
  postProjectProjectSlugCheckoutKeyRoute,
  postProjectProjectSlugEnvvarRoute,
  postProjectProjectSlugJobJobNumberCancelRoute,
  postProjectProjectSlugPipelineRoute,
  postProjectProjectSlugScheduleRoute,
  postProjectProviderOrganizationProjectPipelineRunRoute,
  postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute,
  postProjectsProjectIdPipelineDefinitionsRoute,
  postProjectsProjectIdRollbackRoute,
  postWebhookRoute,
  postWorkflowIdApproveApprovalRequestIdRoute,
  postWorkflowIdCancelRoute,
  postWorkflowIdRerunRoute,
  putContextContextIdEnvironmentVariableEnvVarNameRoute,
  putWebhookWebhookIdRoute,
} from './routes'
import {
  deleteContextContextIdEnvironmentVariableEnvVarNameRouteHandler,
  deleteContextContextIdRestrictionsRestrictionIdRouteHandler,
  deleteContextContextIdRouteHandler,
  deleteOrganizationOrgSlugOrIdRouteHandler,
  deleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdRouteHandler,
  deleteOrganizationsOrgIdGroupsGroupIdRouteHandler,
  deleteOrgOrgIDOidcCustomClaimsRouteHandler,
  deleteOrgOrgIDProjectProjectIDOidcCustomClaimsRouteHandler,
  deleteOtelExportersOtelExporterIdRouteHandler,
  deleteProjectProjectSlugCheckoutKeyFingerprintRouteHandler,
  deleteProjectProjectSlugEnvvarNameRouteHandler,
  deleteProjectProjectSlugRouteHandler,
  deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRouteHandler,
  deleteProjectsProjectIdTriggersTriggerIdRouteHandler,
  deleteScheduleScheduleIdRouteHandler,
  deleteWebhookWebhookIdRouteHandler,
  getContextContextIdEnvironmentVariableRouteHandler,
  getContextContextIdRestrictionsRouteHandler,
  getContextContextIdRouteHandler,
  getContextRouteHandler,
  getDeployComponentsComponentIdRouteHandler,
  getDeployComponentsComponentIdVersionsRouteHandler,
  getDeployComponentsRouteHandler,
  getDeployEnvironmentsEnvironmentIdRouteHandler,
  getDeployEnvironmentsRouteHandler,
  getInsightsOrgSlugSummaryRouteHandler,
  getInsightsPagesProjectSlugSummaryRouteHandler,
  getInsightsProjectSlugBranchesRouteHandler,
  getInsightsProjectSlugFlakyTestsRouteHandler,
  getInsightsProjectSlugWorkflowsRouteHandler,
  getInsightsProjectSlugWorkflowsWorkflowNameJobsRouteHandler,
  getInsightsProjectSlugWorkflowsWorkflowNameRouteHandler,
  getInsightsProjectSlugWorkflowsWorkflowNameSummaryRouteHandler,
  getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsRouteHandler,
  getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsRouteHandler,
  getJobsJobIdRouteHandler,
  getMeCollaborationsRouteHandler,
  getMeRouteHandler,
  getOrganizationOrgSlugOrIdRouteHandler,
  getOrganizationOrgSlugOrIdUrlOrbAllowListRouteHandler,
  getOrganizationsOrgIdGroupsGroupIdRouteHandler,
  getOrganizationsOrgIdGroupsRouteHandler,
  getOrganizationsOrgIdUsageExportJobUsageExportJobIdRouteHandler,
  getOrgOrgIDOidcCustomClaimsRouteHandler,
  getOrgOrgIDProjectProjectIDOidcCustomClaimsRouteHandler,
  getOtelExportersRouteHandler,
  getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleRouteHandler,
  getOwnerOwnerIDContextContextDecisionDecisionIDRouteHandler,
  getOwnerOwnerIDContextContextDecisionRouteHandler,
  getOwnerOwnerIDContextContextDecisionSettingsRouteHandler,
  getOwnerOwnerIDContextContextPolicyBundlePolicyNameRouteHandler,
  getOwnerOwnerIDContextContextPolicyBundleRouteHandler,
  getPipelinePipelineIdConfigRouteHandler,
  getPipelinePipelineIdRouteHandler,
  getPipelinePipelineIdValuesRouteHandler,
  getPipelinePipelineIdWorkflowRouteHandler,
  getPipelineRouteHandler,
  getProjectProjectSlugCheckoutKeyFingerprintRouteHandler,
  getProjectProjectSlugCheckoutKeyRouteHandler,
  getProjectProjectSlugEnvvarNameRouteHandler,
  getProjectProjectSlugEnvvarRouteHandler,
  getProjectProjectSlugPipelineMineRouteHandler,
  getProjectProjectSlugPipelinePipelineNumberRouteHandler,
  getProjectProjectSlugPipelineRouteHandler,
  getProjectProjectSlugRouteHandler,
  getProjectProjectSlugScheduleRouteHandler,
  getProjectProviderOrganizationProjectSettingsRouteHandler,
  getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRouteHandler,
  getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRouteHandler,
  getProjectsProjectIdPipelineDefinitionsRouteHandler,
  getProjectsProjectIdTriggersTriggerIdRouteHandler,
  getScheduleScheduleIdRouteHandler,
  getUserIdRouteHandler,
  getWebhookRouteHandler,
  getWebhookWebhookIdRouteHandler,
  getWorkflowIdJobRouteHandler,
  getWorkflowIdRouteHandler,
  patchOrgOrgIDOidcCustomClaimsRouteHandler,
  patchOrgOrgIDProjectProjectIDOidcCustomClaimsRouteHandler,
  patchOwnerOwnerIDContextContextDecisionSettingsRouteHandler,
  patchProjectProviderOrganizationProjectSettingsRouteHandler,
  patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRouteHandler,
  patchProjectsProjectIdTriggersTriggerIdRouteHandler,
  patchScheduleScheduleIdRouteHandler,
  postContextContextIdRestrictionsRouteHandler,
  postContextRouteHandler,
  postInsightsPagesProjectSlugSummaryRouteHandler,
  postJobsJobIdCancelRouteHandler,
  postOrganizationOrgSlugOrIdProjectRouteHandler,
  postOrganizationOrgSlugOrIdUrlOrbAllowListRouteHandler,
  postOrganizationRouteHandler,
  postOrganizationsOrgIdGroupsRouteHandler,
  postOrganizationsOrgIdUsageExportJobRouteHandler,
  postOtelExportersRouteHandler,
  postOwnerOwnerIDContextContextDecisionRouteHandler,
  postOwnerOwnerIDContextContextPolicyBundleRouteHandler,
  postPipelineContinueRouteHandler,
  postProjectProjectSlugCheckoutKeyRouteHandler,
  postProjectProjectSlugEnvvarRouteHandler,
  postProjectProjectSlugJobJobNumberCancelRouteHandler,
  postProjectProjectSlugPipelineRouteHandler,
  postProjectProjectSlugScheduleRouteHandler,
  postProjectProviderOrganizationProjectPipelineRunRouteHandler,
  postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRouteHandler,
  postProjectsProjectIdPipelineDefinitionsRouteHandler,
  postProjectsProjectIdRollbackRouteHandler,
  postWebhookRouteHandler,
  postWorkflowIdApproveApprovalRequestIdRouteHandler,
  postWorkflowIdCancelRouteHandler,
  postWorkflowIdRerunRouteHandler,
  putContextContextIdEnvironmentVariableEnvVarNameRouteHandler,
  putWebhookWebhookIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postInsightsPagesProjectSlugSummaryRoute,
    postInsightsPagesProjectSlugSummaryRouteHandler,
  )
  .openapi(getInsightsPagesProjectSlugSummaryRoute, getInsightsPagesProjectSlugSummaryRouteHandler)
  .openapi(
    getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsRoute,
    getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsRouteHandler,
  )
  .openapi(getInsightsOrgSlugSummaryRoute, getInsightsOrgSlugSummaryRouteHandler)
  .openapi(getInsightsProjectSlugBranchesRoute, getInsightsProjectSlugBranchesRouteHandler)
  .openapi(getInsightsProjectSlugFlakyTestsRoute, getInsightsProjectSlugFlakyTestsRouteHandler)
  .openapi(getInsightsProjectSlugWorkflowsRoute, getInsightsProjectSlugWorkflowsRouteHandler)
  .openapi(
    getInsightsProjectSlugWorkflowsWorkflowNameRoute,
    getInsightsProjectSlugWorkflowsWorkflowNameRouteHandler,
  )
  .openapi(
    getInsightsProjectSlugWorkflowsWorkflowNameJobsRoute,
    getInsightsProjectSlugWorkflowsWorkflowNameJobsRouteHandler,
  )
  .openapi(
    getInsightsProjectSlugWorkflowsWorkflowNameSummaryRoute,
    getInsightsProjectSlugWorkflowsWorkflowNameSummaryRouteHandler,
  )
  .openapi(
    getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsRoute,
    getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsRouteHandler,
  )
  .openapi(postJobsJobIdCancelRoute, postJobsJobIdCancelRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getMeCollaborationsRoute, getMeCollaborationsRouteHandler)
  .openapi(postOrganizationRoute, postOrganizationRouteHandler)
  .openapi(getOrganizationOrgSlugOrIdRoute, getOrganizationOrgSlugOrIdRouteHandler)
  .openapi(deleteOrganizationOrgSlugOrIdRoute, deleteOrganizationOrgSlugOrIdRouteHandler)
  .openapi(postOrganizationOrgSlugOrIdProjectRoute, postOrganizationOrgSlugOrIdProjectRouteHandler)
  .openapi(
    getOrganizationOrgSlugOrIdUrlOrbAllowListRoute,
    getOrganizationOrgSlugOrIdUrlOrbAllowListRouteHandler,
  )
  .openapi(
    postOrganizationOrgSlugOrIdUrlOrbAllowListRoute,
    postOrganizationOrgSlugOrIdUrlOrbAllowListRouteHandler,
  )
  .openapi(
    deleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdRoute,
    deleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdRouteHandler,
  )
  .openapi(getPipelineRoute, getPipelineRouteHandler)
  .openapi(postPipelineContinueRoute, postPipelineContinueRouteHandler)
  .openapi(getPipelinePipelineIdRoute, getPipelinePipelineIdRouteHandler)
  .openapi(getPipelinePipelineIdConfigRoute, getPipelinePipelineIdConfigRouteHandler)
  .openapi(getPipelinePipelineIdWorkflowRoute, getPipelinePipelineIdWorkflowRouteHandler)
  .openapi(deleteProjectProjectSlugRoute, deleteProjectProjectSlugRouteHandler)
  .openapi(getProjectProjectSlugRoute, getProjectProjectSlugRouteHandler)
  .openapi(postProjectProjectSlugCheckoutKeyRoute, postProjectProjectSlugCheckoutKeyRouteHandler)
  .openapi(getProjectProjectSlugCheckoutKeyRoute, getProjectProjectSlugCheckoutKeyRouteHandler)
  .openapi(
    getProjectProjectSlugCheckoutKeyFingerprintRoute,
    getProjectProjectSlugCheckoutKeyFingerprintRouteHandler,
  )
  .openapi(
    deleteProjectProjectSlugCheckoutKeyFingerprintRoute,
    deleteProjectProjectSlugCheckoutKeyFingerprintRouteHandler,
  )
  .openapi(getProjectProjectSlugEnvvarRoute, getProjectProjectSlugEnvvarRouteHandler)
  .openapi(postProjectProjectSlugEnvvarRoute, postProjectProjectSlugEnvvarRouteHandler)
  .openapi(getProjectProjectSlugEnvvarNameRoute, getProjectProjectSlugEnvvarNameRouteHandler)
  .openapi(deleteProjectProjectSlugEnvvarNameRoute, deleteProjectProjectSlugEnvvarNameRouteHandler)
  .openapi(
    postProjectProjectSlugJobJobNumberCancelRoute,
    postProjectProjectSlugJobJobNumberCancelRouteHandler,
  )
  .openapi(getProjectProjectSlugPipelineRoute, getProjectProjectSlugPipelineRouteHandler)
  .openapi(postProjectProjectSlugPipelineRoute, postProjectProjectSlugPipelineRouteHandler)
  .openapi(getProjectProjectSlugPipelineMineRoute, getProjectProjectSlugPipelineMineRouteHandler)
  .openapi(
    getProjectProjectSlugPipelinePipelineNumberRoute,
    getProjectProjectSlugPipelinePipelineNumberRouteHandler,
  )
  .openapi(postProjectProjectSlugScheduleRoute, postProjectProjectSlugScheduleRouteHandler)
  .openapi(getProjectProjectSlugScheduleRoute, getProjectProjectSlugScheduleRouteHandler)
  .openapi(getScheduleScheduleIdRoute, getScheduleScheduleIdRouteHandler)
  .openapi(patchScheduleScheduleIdRoute, patchScheduleScheduleIdRouteHandler)
  .openapi(deleteScheduleScheduleIdRoute, deleteScheduleScheduleIdRouteHandler)
  .openapi(getUserIdRoute, getUserIdRouteHandler)
  .openapi(
    postWorkflowIdApproveApprovalRequestIdRoute,
    postWorkflowIdApproveApprovalRequestIdRouteHandler,
  )
  .openapi(postWorkflowIdCancelRoute, postWorkflowIdCancelRouteHandler)
  .openapi(getWorkflowIdJobRoute, getWorkflowIdJobRouteHandler)
  .openapi(postWorkflowIdRerunRoute, postWorkflowIdRerunRouteHandler)
  .openapi(getOrgOrgIDOidcCustomClaimsRoute, getOrgOrgIDOidcCustomClaimsRouteHandler)
  .openapi(deleteOrgOrgIDOidcCustomClaimsRoute, deleteOrgOrgIDOidcCustomClaimsRouteHandler)
  .openapi(patchOrgOrgIDOidcCustomClaimsRoute, patchOrgOrgIDOidcCustomClaimsRouteHandler)
  .openapi(
    getOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
    getOrgOrgIDProjectProjectIDOidcCustomClaimsRouteHandler,
  )
  .openapi(
    deleteOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
    deleteOrgOrgIDProjectProjectIDOidcCustomClaimsRouteHandler,
  )
  .openapi(
    patchOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
    patchOrgOrgIDProjectProjectIDOidcCustomClaimsRouteHandler,
  )
  .openapi(
    getOwnerOwnerIDContextContextDecisionRoute,
    getOwnerOwnerIDContextContextDecisionRouteHandler,
  )
  .openapi(
    postOwnerOwnerIDContextContextDecisionRoute,
    postOwnerOwnerIDContextContextDecisionRouteHandler,
  )
  .openapi(
    getOwnerOwnerIDContextContextDecisionSettingsRoute,
    getOwnerOwnerIDContextContextDecisionSettingsRouteHandler,
  )
  .openapi(
    patchOwnerOwnerIDContextContextDecisionSettingsRoute,
    patchOwnerOwnerIDContextContextDecisionSettingsRouteHandler,
  )
  .openapi(
    getOwnerOwnerIDContextContextDecisionDecisionIDRoute,
    getOwnerOwnerIDContextContextDecisionDecisionIDRouteHandler,
  )
  .openapi(
    getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleRoute,
    getOwnerOwnerIDContextContextDecisionDecisionIDPolicyBundleRouteHandler,
  )
  .openapi(
    getOwnerOwnerIDContextContextPolicyBundleRoute,
    getOwnerOwnerIDContextContextPolicyBundleRouteHandler,
  )
  .openapi(
    postOwnerOwnerIDContextContextPolicyBundleRoute,
    postOwnerOwnerIDContextContextPolicyBundleRouteHandler,
  )
  .openapi(
    getOwnerOwnerIDContextContextPolicyBundlePolicyNameRoute,
    getOwnerOwnerIDContextContextPolicyBundlePolicyNameRouteHandler,
  )
  .openapi(postContextRoute, postContextRouteHandler)
  .openapi(getContextRoute, getContextRouteHandler)
  .openapi(getContextContextIdRoute, getContextContextIdRouteHandler)
  .openapi(deleteContextContextIdRoute, deleteContextContextIdRouteHandler)
  .openapi(
    getContextContextIdEnvironmentVariableRoute,
    getContextContextIdEnvironmentVariableRouteHandler,
  )
  .openapi(
    putContextContextIdEnvironmentVariableEnvVarNameRoute,
    putContextContextIdEnvironmentVariableEnvVarNameRouteHandler,
  )
  .openapi(
    deleteContextContextIdEnvironmentVariableEnvVarNameRoute,
    deleteContextContextIdEnvironmentVariableEnvVarNameRouteHandler,
  )
  .openapi(getContextContextIdRestrictionsRoute, getContextContextIdRestrictionsRouteHandler)
  .openapi(postContextContextIdRestrictionsRoute, postContextContextIdRestrictionsRouteHandler)
  .openapi(
    deleteContextContextIdRestrictionsRestrictionIdRoute,
    deleteContextContextIdRestrictionsRestrictionIdRouteHandler,
  )
  .openapi(
    getProjectProviderOrganizationProjectSettingsRoute,
    getProjectProviderOrganizationProjectSettingsRouteHandler,
  )
  .openapi(
    patchProjectProviderOrganizationProjectSettingsRoute,
    patchProjectProviderOrganizationProjectSettingsRouteHandler,
  )
  .openapi(getOrganizationsOrgIdGroupsRoute, getOrganizationsOrgIdGroupsRouteHandler)
  .openapi(postOrganizationsOrgIdGroupsRoute, postOrganizationsOrgIdGroupsRouteHandler)
  .openapi(getOrganizationsOrgIdGroupsGroupIdRoute, getOrganizationsOrgIdGroupsGroupIdRouteHandler)
  .openapi(
    deleteOrganizationsOrgIdGroupsGroupIdRoute,
    deleteOrganizationsOrgIdGroupsGroupIdRouteHandler,
  )
  .openapi(
    postOrganizationsOrgIdUsageExportJobRoute,
    postOrganizationsOrgIdUsageExportJobRouteHandler,
  )
  .openapi(
    getOrganizationsOrgIdUsageExportJobUsageExportJobIdRoute,
    getOrganizationsOrgIdUsageExportJobUsageExportJobIdRouteHandler,
  )
  .openapi(
    postProjectProviderOrganizationProjectPipelineRunRoute,
    postProjectProviderOrganizationProjectPipelineRunRouteHandler,
  )
  .openapi(
    getProjectsProjectIdPipelineDefinitionsRoute,
    getProjectsProjectIdPipelineDefinitionsRouteHandler,
  )
  .openapi(
    postProjectsProjectIdPipelineDefinitionsRoute,
    postProjectsProjectIdPipelineDefinitionsRouteHandler,
  )
  .openapi(
    getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
    getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
    patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
    deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute,
    getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRouteHandler,
  )
  .openapi(
    postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute,
    postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRouteHandler,
  )
  .openapi(
    getProjectsProjectIdTriggersTriggerIdRoute,
    getProjectsProjectIdTriggersTriggerIdRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdTriggersTriggerIdRoute,
    patchProjectsProjectIdTriggersTriggerIdRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdTriggersTriggerIdRoute,
    deleteProjectsProjectIdTriggersTriggerIdRouteHandler,
  )
  .openapi(postProjectsProjectIdRollbackRoute, postProjectsProjectIdRollbackRouteHandler)
  .openapi(getDeployEnvironmentsRoute, getDeployEnvironmentsRouteHandler)
  .openapi(getDeployEnvironmentsEnvironmentIdRoute, getDeployEnvironmentsEnvironmentIdRouteHandler)
  .openapi(getDeployComponentsRoute, getDeployComponentsRouteHandler)
  .openapi(getDeployComponentsComponentIdRoute, getDeployComponentsComponentIdRouteHandler)
  .openapi(
    getDeployComponentsComponentIdVersionsRoute,
    getDeployComponentsComponentIdVersionsRouteHandler,
  )
  .openapi(getWebhookRoute, getWebhookRouteHandler)
  .openapi(postWebhookRoute, postWebhookRouteHandler)
  .openapi(getWebhookWebhookIdRoute, getWebhookWebhookIdRouteHandler)
  .openapi(putWebhookWebhookIdRoute, putWebhookWebhookIdRouteHandler)
  .openapi(deleteWebhookWebhookIdRoute, deleteWebhookWebhookIdRouteHandler)
  .openapi(getOtelExportersRoute, getOtelExportersRouteHandler)
  .openapi(postOtelExportersRoute, postOtelExportersRouteHandler)
  .openapi(deleteOtelExportersOtelExporterIdRoute, deleteOtelExportersOtelExporterIdRouteHandler)
  .openapi(getPipelinePipelineIdValuesRoute, getPipelinePipelineIdValuesRouteHandler)
  .openapi(getWorkflowIdRoute, getWorkflowIdRouteHandler)
  .openapi(getJobsJobIdRoute, getJobsJobIdRouteHandler)

export default app
