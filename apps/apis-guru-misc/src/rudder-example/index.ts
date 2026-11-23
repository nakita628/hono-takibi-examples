import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChangeRequestsChangeRequestIdRoute,
  deleteDatasourcesDatasourceIdRoute,
  deleteDirectivesDirectiveIdRoute,
  deleteGroupsCategoriesGroupCategoryIdRoute,
  deleteGroupsGroupIdRoute,
  deleteNodesNodeIdRoute,
  deleteParametersParameterIdRoute,
  deleteRulesCategoriesRuleCategoryIdRoute,
  deleteRulesRuleIdRoute,
  deleteSecretNameRoute,
  deleteTechniquesTechniqueIdTechniqueVersionRoute,
  deleteUsermanagementUsernameRoute,
  deleteValidatedUsersUsernameRoute,
  getApiChangeRequestsRoute,
  getArchivesExportRoute,
  getBrandingRoute,
  getChangeRequestsChangeRequestIdRoute,
  getComplianceNodesNodeIdRoute,
  getComplianceNodesRoute,
  getComplianceRoute,
  getComplianceRulesRoute,
  getComplianceRulesRuleIdRoute,
  getCveCheckConfigRoute,
  getCveCheckLastRoute,
  getCveRoute,
  getDatasourcesDatasourceIdRoute,
  getDatasourcesRoute,
  getDirectivesDirectiveIdRoute,
  getDirectivesRoute,
  getGroupsCategoriesGroupCategoryIdRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  getGroupsTreeRoute,
  getInfoDetailsEndpointNameRoute,
  getInfoRoute,
  getInfoSectionIdRoute,
  getInventoriesInfoRoute,
  getMethodsRoute,
  getNodesNodeIdInheritedPropertiesRoute,
  getNodesNodeIdRoute,
  getNodesPendingRoute,
  getNodesRoute,
  getNodesStatusRoute,
  getParametersParameterIdRoute,
  getParametersRoute,
  getRulesCategoriesRuleCategoryIdRoute,
  getRulesRoute,
  getRulesRuleIdRoute,
  getRulesTreeRoute,
  getSecretIndexRoute,
  getSecretNameRoute,
  getSettingsAllowedNetworksNodeIdRoute,
  getSettingsRoute,
  getSettingsSettingIdRoute,
  getStatusRoute,
  getSystemArchivesArchiveKindRoute,
  getSystemArchivesArchiveKindZipCommitIdRoute,
  getSystemHealthcheckRoute,
  getSystemInfoRoute,
  getSystemStatusRoute,
  getTechniquesCategoriesRoute,
  getTechniquesRoute,
  getTechniquesTechniqueIdDirectivesRoute,
  getTechniquesTechniqueIdRoute,
  getTechniquesTechniqueIdTechniqueVersionDirectivesRoute,
  getTechniquesTechniqueIdTechniqueVersionResourcesRoute,
  getTechniquesTechniqueIdTechniqueVersionRevisionsRoute,
  getTechniquesTechniqueIdTechniqueVersionRoute,
  getTechniquesVersionsRoute,
  getUsermanagementRolesRoute,
  getUsermanagementUsersReloadRoute,
  getUsermanagementUsersRoute,
  getUsersRoute,
  postArchivesImportRoute,
  postBrandingReloadRoute,
  postBrandingRoute,
  postChangeRequestsChangeRequestIdAcceptRoute,
  postChangeRequestsChangeRequestIdRoute,
  postCveCheckConfigRoute,
  postCveCheckRoute,
  postCveListRoute,
  postCveUpdateFsRoute,
  postCveUpdateIndexRoute,
  postDatasourcesDatasourceIdRoute,
  postDatasourcesReloadDatasourceIdRoute,
  postDatasourcesReloadRoute,
  postDirectivesDirectiveIdCheckRoute,
  postDirectivesDirectiveIdRoute,
  postGroupsCategoriesGroupCategoryIdRoute,
  postGroupsGroupIdReloadRoute,
  postGroupsGroupIdRoute,
  postInventoriesUploadRoute,
  postInventoriesWatcherRestartRoute,
  postInventoriesWatcherStartRoute,
  postInventoriesWatcherStopRoute,
  postMethodsReloadRoute,
  postNodesApplyPolicyRoute,
  postNodesNodeIdApplyPolicyRoute,
  postNodesNodeIdFetchDataDatasourceIdRoute,
  postNodesNodeIdFetchDataRoute,
  postNodesNodeIdRoute,
  postNodesPendingNodeIdRoute,
  postParametersParameterIdRoute,
  postRulesCategoriesRuleCategoryIdRoute,
  postRulesRuleIdRoute,
  postScaleoutrelayDemoteNodeIdRoute,
  postScaleoutrelayPromoteNodeIdRoute,
  postSecretIndexRoute,
  postSettingsAllowedNetworksNodeIdDiffRoute,
  postSettingsAllowedNetworksNodeIdRoute,
  postSettingsSettingIdRoute,
  postSystemArchivesArchiveKindRestoreArchiveRestoreKindRoute,
  postSystemArchivesArchiveKindRoute,
  postSystemMaintenancePurgeSoftwareRoute,
  postSystemRegeneratePoliciesRoute,
  postSystemReloadGroupsRoute,
  postSystemReloadRoute,
  postSystemReloadTechniquesRoute,
  postSystemUpdatePoliciesRoute,
  postTechniquesReloadRoute,
  postTechniquesTechniqueIdTechniqueVersionRoute,
  postUsermanagementRoute,
  postUsermanagementUpdateUsernameRoute,
  postValidatedUsersRoute,
  putDatasourcesRoute,
  putDirectivesRoute,
  putGroupsCategoriesRoute,
  putGroupsRoute,
  putNodesRoute,
  putParametersRoute,
  putRulesCategoriesRoute,
  putRulesRoute,
  putSecretIndexRoute,
  putTechniquesRoute,
} from './routes'
import {
  deleteChangeRequestsChangeRequestIdRouteHandler,
  deleteDatasourcesDatasourceIdRouteHandler,
  deleteDirectivesDirectiveIdRouteHandler,
  deleteGroupsCategoriesGroupCategoryIdRouteHandler,
  deleteGroupsGroupIdRouteHandler,
  deleteNodesNodeIdRouteHandler,
  deleteParametersParameterIdRouteHandler,
  deleteRulesCategoriesRuleCategoryIdRouteHandler,
  deleteRulesRuleIdRouteHandler,
  deleteSecretNameRouteHandler,
  deleteTechniquesTechniqueIdTechniqueVersionRouteHandler,
  deleteUsermanagementUsernameRouteHandler,
  deleteValidatedUsersUsernameRouteHandler,
  getApiChangeRequestsRouteHandler,
  getArchivesExportRouteHandler,
  getBrandingRouteHandler,
  getChangeRequestsChangeRequestIdRouteHandler,
  getComplianceNodesNodeIdRouteHandler,
  getComplianceNodesRouteHandler,
  getComplianceRouteHandler,
  getComplianceRulesRouteHandler,
  getComplianceRulesRuleIdRouteHandler,
  getCveCheckConfigRouteHandler,
  getCveCheckLastRouteHandler,
  getCveRouteHandler,
  getDatasourcesDatasourceIdRouteHandler,
  getDatasourcesRouteHandler,
  getDirectivesDirectiveIdRouteHandler,
  getDirectivesRouteHandler,
  getGroupsCategoriesGroupCategoryIdRouteHandler,
  getGroupsGroupIdRouteHandler,
  getGroupsRouteHandler,
  getGroupsTreeRouteHandler,
  getInfoDetailsEndpointNameRouteHandler,
  getInfoRouteHandler,
  getInfoSectionIdRouteHandler,
  getInventoriesInfoRouteHandler,
  getMethodsRouteHandler,
  getNodesNodeIdInheritedPropertiesRouteHandler,
  getNodesNodeIdRouteHandler,
  getNodesPendingRouteHandler,
  getNodesRouteHandler,
  getNodesStatusRouteHandler,
  getParametersParameterIdRouteHandler,
  getParametersRouteHandler,
  getRulesCategoriesRuleCategoryIdRouteHandler,
  getRulesRouteHandler,
  getRulesRuleIdRouteHandler,
  getRulesTreeRouteHandler,
  getSecretIndexRouteHandler,
  getSecretNameRouteHandler,
  getSettingsAllowedNetworksNodeIdRouteHandler,
  getSettingsRouteHandler,
  getSettingsSettingIdRouteHandler,
  getStatusRouteHandler,
  getSystemArchivesArchiveKindRouteHandler,
  getSystemArchivesArchiveKindZipCommitIdRouteHandler,
  getSystemHealthcheckRouteHandler,
  getSystemInfoRouteHandler,
  getSystemStatusRouteHandler,
  getTechniquesCategoriesRouteHandler,
  getTechniquesRouteHandler,
  getTechniquesTechniqueIdDirectivesRouteHandler,
  getTechniquesTechniqueIdRouteHandler,
  getTechniquesTechniqueIdTechniqueVersionDirectivesRouteHandler,
  getTechniquesTechniqueIdTechniqueVersionResourcesRouteHandler,
  getTechniquesTechniqueIdTechniqueVersionRevisionsRouteHandler,
  getTechniquesTechniqueIdTechniqueVersionRouteHandler,
  getTechniquesVersionsRouteHandler,
  getUsermanagementRolesRouteHandler,
  getUsermanagementUsersReloadRouteHandler,
  getUsermanagementUsersRouteHandler,
  getUsersRouteHandler,
  postArchivesImportRouteHandler,
  postBrandingReloadRouteHandler,
  postBrandingRouteHandler,
  postChangeRequestsChangeRequestIdAcceptRouteHandler,
  postChangeRequestsChangeRequestIdRouteHandler,
  postCveCheckConfigRouteHandler,
  postCveCheckRouteHandler,
  postCveListRouteHandler,
  postCveUpdateFsRouteHandler,
  postCveUpdateIndexRouteHandler,
  postDatasourcesDatasourceIdRouteHandler,
  postDatasourcesReloadDatasourceIdRouteHandler,
  postDatasourcesReloadRouteHandler,
  postDirectivesDirectiveIdCheckRouteHandler,
  postDirectivesDirectiveIdRouteHandler,
  postGroupsCategoriesGroupCategoryIdRouteHandler,
  postGroupsGroupIdReloadRouteHandler,
  postGroupsGroupIdRouteHandler,
  postInventoriesUploadRouteHandler,
  postInventoriesWatcherRestartRouteHandler,
  postInventoriesWatcherStartRouteHandler,
  postInventoriesWatcherStopRouteHandler,
  postMethodsReloadRouteHandler,
  postNodesApplyPolicyRouteHandler,
  postNodesNodeIdApplyPolicyRouteHandler,
  postNodesNodeIdFetchDataDatasourceIdRouteHandler,
  postNodesNodeIdFetchDataRouteHandler,
  postNodesNodeIdRouteHandler,
  postNodesPendingNodeIdRouteHandler,
  postParametersParameterIdRouteHandler,
  postRulesCategoriesRuleCategoryIdRouteHandler,
  postRulesRuleIdRouteHandler,
  postScaleoutrelayDemoteNodeIdRouteHandler,
  postScaleoutrelayPromoteNodeIdRouteHandler,
  postSecretIndexRouteHandler,
  postSettingsAllowedNetworksNodeIdDiffRouteHandler,
  postSettingsAllowedNetworksNodeIdRouteHandler,
  postSettingsSettingIdRouteHandler,
  postSystemArchivesArchiveKindRestoreArchiveRestoreKindRouteHandler,
  postSystemArchivesArchiveKindRouteHandler,
  postSystemMaintenancePurgeSoftwareRouteHandler,
  postSystemRegeneratePoliciesRouteHandler,
  postSystemReloadGroupsRouteHandler,
  postSystemReloadRouteHandler,
  postSystemReloadTechniquesRouteHandler,
  postSystemUpdatePoliciesRouteHandler,
  postTechniquesReloadRouteHandler,
  postTechniquesTechniqueIdTechniqueVersionRouteHandler,
  postUsermanagementRouteHandler,
  postUsermanagementUpdateUsernameRouteHandler,
  postValidatedUsersRouteHandler,
  putDatasourcesRouteHandler,
  putDirectivesRouteHandler,
  putGroupsCategoriesRouteHandler,
  putGroupsRouteHandler,
  putNodesRouteHandler,
  putParametersRouteHandler,
  putRulesCategoriesRouteHandler,
  putRulesRouteHandler,
  putSecretIndexRouteHandler,
  putTechniquesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiChangeRequestsRoute, getApiChangeRequestsRouteHandler)
  .openapi(getArchivesExportRoute, getArchivesExportRouteHandler)
  .openapi(postArchivesImportRoute, postArchivesImportRouteHandler)
  .openapi(getBrandingRoute, getBrandingRouteHandler)
  .openapi(postBrandingRoute, postBrandingRouteHandler)
  .openapi(postBrandingReloadRoute, postBrandingReloadRouteHandler)
  .openapi(
    deleteChangeRequestsChangeRequestIdRoute,
    deleteChangeRequestsChangeRequestIdRouteHandler,
  )
  .openapi(getChangeRequestsChangeRequestIdRoute, getChangeRequestsChangeRequestIdRouteHandler)
  .openapi(postChangeRequestsChangeRequestIdRoute, postChangeRequestsChangeRequestIdRouteHandler)
  .openapi(
    postChangeRequestsChangeRequestIdAcceptRoute,
    postChangeRequestsChangeRequestIdAcceptRouteHandler,
  )
  .openapi(getComplianceRoute, getComplianceRouteHandler)
  .openapi(getComplianceNodesRoute, getComplianceNodesRouteHandler)
  .openapi(getComplianceNodesNodeIdRoute, getComplianceNodesNodeIdRouteHandler)
  .openapi(getComplianceRulesRoute, getComplianceRulesRouteHandler)
  .openapi(getComplianceRulesRuleIdRoute, getComplianceRulesRuleIdRouteHandler)
  .openapi(getCveRoute, getCveRouteHandler)
  .openapi(postCveCheckRoute, postCveCheckRouteHandler)
  .openapi(getCveCheckConfigRoute, getCveCheckConfigRouteHandler)
  .openapi(postCveCheckConfigRoute, postCveCheckConfigRouteHandler)
  .openapi(getCveCheckLastRoute, getCveCheckLastRouteHandler)
  .openapi(postCveListRoute, postCveListRouteHandler)
  .openapi(postCveUpdateIndexRoute, postCveUpdateIndexRouteHandler)
  .openapi(postCveUpdateFsRoute, postCveUpdateFsRouteHandler)
  .openapi(getDatasourcesRoute, getDatasourcesRouteHandler)
  .openapi(putDatasourcesRoute, putDatasourcesRouteHandler)
  .openapi(postDatasourcesReloadRoute, postDatasourcesReloadRouteHandler)
  .openapi(postDatasourcesReloadDatasourceIdRoute, postDatasourcesReloadDatasourceIdRouteHandler)
  .openapi(deleteDatasourcesDatasourceIdRoute, deleteDatasourcesDatasourceIdRouteHandler)
  .openapi(getDatasourcesDatasourceIdRoute, getDatasourcesDatasourceIdRouteHandler)
  .openapi(postDatasourcesDatasourceIdRoute, postDatasourcesDatasourceIdRouteHandler)
  .openapi(getDirectivesRoute, getDirectivesRouteHandler)
  .openapi(putDirectivesRoute, putDirectivesRouteHandler)
  .openapi(deleteDirectivesDirectiveIdRoute, deleteDirectivesDirectiveIdRouteHandler)
  .openapi(getDirectivesDirectiveIdRoute, getDirectivesDirectiveIdRouteHandler)
  .openapi(postDirectivesDirectiveIdRoute, postDirectivesDirectiveIdRouteHandler)
  .openapi(postDirectivesDirectiveIdCheckRoute, postDirectivesDirectiveIdCheckRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(putGroupsRoute, putGroupsRouteHandler)
  .openapi(putGroupsCategoriesRoute, putGroupsCategoriesRouteHandler)
  .openapi(
    deleteGroupsCategoriesGroupCategoryIdRoute,
    deleteGroupsCategoriesGroupCategoryIdRouteHandler,
  )
  .openapi(getGroupsCategoriesGroupCategoryIdRoute, getGroupsCategoriesGroupCategoryIdRouteHandler)
  .openapi(
    postGroupsCategoriesGroupCategoryIdRoute,
    postGroupsCategoriesGroupCategoryIdRouteHandler,
  )
  .openapi(getGroupsTreeRoute, getGroupsTreeRouteHandler)
  .openapi(deleteGroupsGroupIdRoute, deleteGroupsGroupIdRouteHandler)
  .openapi(getGroupsGroupIdRoute, getGroupsGroupIdRouteHandler)
  .openapi(postGroupsGroupIdRoute, postGroupsGroupIdRouteHandler)
  .openapi(postGroupsGroupIdReloadRoute, postGroupsGroupIdReloadRouteHandler)
  .openapi(getInfoRoute, getInfoRouteHandler)
  .openapi(getInfoDetailsEndpointNameRoute, getInfoDetailsEndpointNameRouteHandler)
  .openapi(getInfoSectionIdRoute, getInfoSectionIdRouteHandler)
  .openapi(getInventoriesInfoRoute, getInventoriesInfoRouteHandler)
  .openapi(postInventoriesUploadRoute, postInventoriesUploadRouteHandler)
  .openapi(postInventoriesWatcherRestartRoute, postInventoriesWatcherRestartRouteHandler)
  .openapi(postInventoriesWatcherStartRoute, postInventoriesWatcherStartRouteHandler)
  .openapi(postInventoriesWatcherStopRoute, postInventoriesWatcherStopRouteHandler)
  .openapi(getMethodsRoute, getMethodsRouteHandler)
  .openapi(postMethodsReloadRoute, postMethodsReloadRouteHandler)
  .openapi(getNodesRoute, getNodesRouteHandler)
  .openapi(putNodesRoute, putNodesRouteHandler)
  .openapi(postNodesApplyPolicyRoute, postNodesApplyPolicyRouteHandler)
  .openapi(getNodesPendingRoute, getNodesPendingRouteHandler)
  .openapi(postNodesPendingNodeIdRoute, postNodesPendingNodeIdRouteHandler)
  .openapi(getNodesStatusRoute, getNodesStatusRouteHandler)
  .openapi(deleteNodesNodeIdRoute, deleteNodesNodeIdRouteHandler)
  .openapi(getNodesNodeIdRoute, getNodesNodeIdRouteHandler)
  .openapi(postNodesNodeIdRoute, postNodesNodeIdRouteHandler)
  .openapi(postNodesNodeIdApplyPolicyRoute, postNodesNodeIdApplyPolicyRouteHandler)
  .openapi(postNodesNodeIdFetchDataRoute, postNodesNodeIdFetchDataRouteHandler)
  .openapi(
    postNodesNodeIdFetchDataDatasourceIdRoute,
    postNodesNodeIdFetchDataDatasourceIdRouteHandler,
  )
  .openapi(getNodesNodeIdInheritedPropertiesRoute, getNodesNodeIdInheritedPropertiesRouteHandler)
  .openapi(getParametersRoute, getParametersRouteHandler)
  .openapi(putParametersRoute, putParametersRouteHandler)
  .openapi(deleteParametersParameterIdRoute, deleteParametersParameterIdRouteHandler)
  .openapi(getParametersParameterIdRoute, getParametersParameterIdRouteHandler)
  .openapi(postParametersParameterIdRoute, postParametersParameterIdRouteHandler)
  .openapi(getRulesRoute, getRulesRouteHandler)
  .openapi(putRulesRoute, putRulesRouteHandler)
  .openapi(putRulesCategoriesRoute, putRulesCategoriesRouteHandler)
  .openapi(
    deleteRulesCategoriesRuleCategoryIdRoute,
    deleteRulesCategoriesRuleCategoryIdRouteHandler,
  )
  .openapi(getRulesCategoriesRuleCategoryIdRoute, getRulesCategoriesRuleCategoryIdRouteHandler)
  .openapi(postRulesCategoriesRuleCategoryIdRoute, postRulesCategoriesRuleCategoryIdRouteHandler)
  .openapi(getRulesTreeRoute, getRulesTreeRouteHandler)
  .openapi(deleteRulesRuleIdRoute, deleteRulesRuleIdRouteHandler)
  .openapi(getRulesRuleIdRoute, getRulesRuleIdRouteHandler)
  .openapi(postRulesRuleIdRoute, postRulesRuleIdRouteHandler)
  .openapi(postScaleoutrelayDemoteNodeIdRoute, postScaleoutrelayDemoteNodeIdRouteHandler)
  .openapi(postScaleoutrelayPromoteNodeIdRoute, postScaleoutrelayPromoteNodeIdRouteHandler)
  .openapi(getSecretIndexRoute, getSecretIndexRouteHandler)
  .openapi(postSecretIndexRoute, postSecretIndexRouteHandler)
  .openapi(putSecretIndexRoute, putSecretIndexRouteHandler)
  .openapi(deleteSecretNameRoute, deleteSecretNameRouteHandler)
  .openapi(getSecretNameRoute, getSecretNameRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(getSettingsAllowedNetworksNodeIdRoute, getSettingsAllowedNetworksNodeIdRouteHandler)
  .openapi(postSettingsAllowedNetworksNodeIdRoute, postSettingsAllowedNetworksNodeIdRouteHandler)
  .openapi(
    postSettingsAllowedNetworksNodeIdDiffRoute,
    postSettingsAllowedNetworksNodeIdDiffRouteHandler,
  )
  .openapi(getSettingsSettingIdRoute, getSettingsSettingIdRouteHandler)
  .openapi(postSettingsSettingIdRoute, postSettingsSettingIdRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getSystemArchivesArchiveKindRoute, getSystemArchivesArchiveKindRouteHandler)
  .openapi(postSystemArchivesArchiveKindRoute, postSystemArchivesArchiveKindRouteHandler)
  .openapi(
    postSystemArchivesArchiveKindRestoreArchiveRestoreKindRoute,
    postSystemArchivesArchiveKindRestoreArchiveRestoreKindRouteHandler,
  )
  .openapi(
    getSystemArchivesArchiveKindZipCommitIdRoute,
    getSystemArchivesArchiveKindZipCommitIdRouteHandler,
  )
  .openapi(getSystemHealthcheckRoute, getSystemHealthcheckRouteHandler)
  .openapi(getSystemInfoRoute, getSystemInfoRouteHandler)
  .openapi(postSystemMaintenancePurgeSoftwareRoute, postSystemMaintenancePurgeSoftwareRouteHandler)
  .openapi(postSystemRegeneratePoliciesRoute, postSystemRegeneratePoliciesRouteHandler)
  .openapi(postSystemReloadRoute, postSystemReloadRouteHandler)
  .openapi(postSystemReloadGroupsRoute, postSystemReloadGroupsRouteHandler)
  .openapi(postSystemReloadTechniquesRoute, postSystemReloadTechniquesRouteHandler)
  .openapi(getSystemStatusRoute, getSystemStatusRouteHandler)
  .openapi(postSystemUpdatePoliciesRoute, postSystemUpdatePoliciesRouteHandler)
  .openapi(getTechniquesRoute, getTechniquesRouteHandler)
  .openapi(putTechniquesRoute, putTechniquesRouteHandler)
  .openapi(getTechniquesCategoriesRoute, getTechniquesCategoriesRouteHandler)
  .openapi(postTechniquesReloadRoute, postTechniquesReloadRouteHandler)
  .openapi(getTechniquesVersionsRoute, getTechniquesVersionsRouteHandler)
  .openapi(getTechniquesTechniqueIdRoute, getTechniquesTechniqueIdRouteHandler)
  .openapi(getTechniquesTechniqueIdDirectivesRoute, getTechniquesTechniqueIdDirectivesRouteHandler)
  .openapi(
    deleteTechniquesTechniqueIdTechniqueVersionRoute,
    deleteTechniquesTechniqueIdTechniqueVersionRouteHandler,
  )
  .openapi(
    getTechniquesTechniqueIdTechniqueVersionRoute,
    getTechniquesTechniqueIdTechniqueVersionRouteHandler,
  )
  .openapi(
    postTechniquesTechniqueIdTechniqueVersionRoute,
    postTechniquesTechniqueIdTechniqueVersionRouteHandler,
  )
  .openapi(
    getTechniquesTechniqueIdTechniqueVersionDirectivesRoute,
    getTechniquesTechniqueIdTechniqueVersionDirectivesRouteHandler,
  )
  .openapi(
    getTechniquesTechniqueIdTechniqueVersionResourcesRoute,
    getTechniquesTechniqueIdTechniqueVersionResourcesRouteHandler,
  )
  .openapi(
    getTechniquesTechniqueIdTechniqueVersionRevisionsRoute,
    getTechniquesTechniqueIdTechniqueVersionRevisionsRouteHandler,
  )
  .openapi(postUsermanagementRoute, postUsermanagementRouteHandler)
  .openapi(getUsermanagementRolesRoute, getUsermanagementRolesRouteHandler)
  .openapi(postUsermanagementUpdateUsernameRoute, postUsermanagementUpdateUsernameRouteHandler)
  .openapi(getUsermanagementUsersRoute, getUsermanagementUsersRouteHandler)
  .openapi(getUsermanagementUsersReloadRoute, getUsermanagementUsersReloadRouteHandler)
  .openapi(deleteUsermanagementUsernameRoute, deleteUsermanagementUsernameRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postValidatedUsersRoute, postValidatedUsersRouteHandler)
  .openapi(deleteValidatedUsersUsernameRoute, deleteValidatedUsersUsernameRouteHandler)

export default app
