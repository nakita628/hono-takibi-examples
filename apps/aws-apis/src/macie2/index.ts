import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminAdminAccountIdRoute,
  deleteAllowListsIdRoute,
  deleteCustomDataIdentifiersIdRoute,
  deleteFindingsfiltersIdRoute,
  deleteMacieRoute,
  deleteMembersIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAdminConfigurationRoute,
  getAdministratorRoute,
  getAdminRoute,
  getAllowListsIdRoute,
  getAllowListsRoute,
  getAutomatedDiscoveryConfigurationRoute,
  getClassificationExportConfigurationRoute,
  getClassificationScopesIdRoute,
  getClassificationScopesRoute,
  getCustomDataIdentifiersIdRoute,
  getFindingsfiltersIdRoute,
  getFindingsfiltersRoute,
  getFindingsFindingIdRevealAvailabilityRoute,
  getFindingsFindingIdRevealRoute,
  getFindingsPublicationConfigurationRoute,
  getInvitationsCountRoute,
  getInvitationsRoute,
  getJobsJobIdRoute,
  getMacieRoute,
  getMasterRoute,
  getMembersIdRoute,
  getMembersRoute,
  getResourceProfilesArtifactsResourceArnRoute,
  getResourceProfilesDetectionsResourceArnRoute,
  getResourceProfilesResourceArnRoute,
  getRevealConfigurationRoute,
  getTagsResourceArnRoute,
  getTemplatesSensitivityInspectionsIdRoute,
  getTemplatesSensitivityInspectionsRoute,
  getUsageRoute,
  patchAdminConfigurationRoute,
  patchClassificationScopesIdRoute,
  patchFindingsfiltersIdRoute,
  patchJobsJobIdRoute,
  patchMacieMembersIdRoute,
  patchMacieRoute,
  patchResourceProfilesDetectionsResourceArnRoute,
  patchResourceProfilesResourceArnRoute,
  postAdministratorDisassociateRoute,
  postAdminRoute,
  postAllowListsRoute,
  postCustomDataIdentifiersGetRoute,
  postCustomDataIdentifiersListRoute,
  postCustomDataIdentifiersRoute,
  postCustomDataIdentifiersTestRoute,
  postDatasourcesS3Route,
  postDatasourcesS3StatisticsRoute,
  postDatasourcesSearchResourcesRoute,
  postFindingsDescribeRoute,
  postFindingsfiltersRoute,
  postFindingsRoute,
  postFindingsSampleRoute,
  postFindingsStatisticsRoute,
  postInvitationsAcceptRoute,
  postInvitationsDeclineRoute,
  postInvitationsDeleteRoute,
  postInvitationsRoute,
  postJobsListRoute,
  postJobsRoute,
  postMacieRoute,
  postManagedDataIdentifiersListRoute,
  postMasterDisassociateRoute,
  postMembersDisassociateIdRoute,
  postMembersRoute,
  postTagsResourceArnRoute,
  postUsageStatisticsRoute,
  putAllowListsIdRoute,
  putAutomatedDiscoveryConfigurationRoute,
  putClassificationExportConfigurationRoute,
  putFindingsPublicationConfigurationRoute,
  putRevealConfigurationRoute,
  putTemplatesSensitivityInspectionsIdRoute,
} from './routes'
import {
  deleteAdminAdminAccountIdRouteHandler,
  deleteAllowListsIdRouteHandler,
  deleteCustomDataIdentifiersIdRouteHandler,
  deleteFindingsfiltersIdRouteHandler,
  deleteMacieRouteHandler,
  deleteMembersIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAdminConfigurationRouteHandler,
  getAdministratorRouteHandler,
  getAdminRouteHandler,
  getAllowListsIdRouteHandler,
  getAllowListsRouteHandler,
  getAutomatedDiscoveryConfigurationRouteHandler,
  getClassificationExportConfigurationRouteHandler,
  getClassificationScopesIdRouteHandler,
  getClassificationScopesRouteHandler,
  getCustomDataIdentifiersIdRouteHandler,
  getFindingsfiltersIdRouteHandler,
  getFindingsfiltersRouteHandler,
  getFindingsFindingIdRevealAvailabilityRouteHandler,
  getFindingsFindingIdRevealRouteHandler,
  getFindingsPublicationConfigurationRouteHandler,
  getInvitationsCountRouteHandler,
  getInvitationsRouteHandler,
  getJobsJobIdRouteHandler,
  getMacieRouteHandler,
  getMasterRouteHandler,
  getMembersIdRouteHandler,
  getMembersRouteHandler,
  getResourceProfilesArtifactsResourceArnRouteHandler,
  getResourceProfilesDetectionsResourceArnRouteHandler,
  getResourceProfilesResourceArnRouteHandler,
  getRevealConfigurationRouteHandler,
  getTagsResourceArnRouteHandler,
  getTemplatesSensitivityInspectionsIdRouteHandler,
  getTemplatesSensitivityInspectionsRouteHandler,
  getUsageRouteHandler,
  patchAdminConfigurationRouteHandler,
  patchClassificationScopesIdRouteHandler,
  patchFindingsfiltersIdRouteHandler,
  patchJobsJobIdRouteHandler,
  patchMacieMembersIdRouteHandler,
  patchMacieRouteHandler,
  patchResourceProfilesDetectionsResourceArnRouteHandler,
  patchResourceProfilesResourceArnRouteHandler,
  postAdministratorDisassociateRouteHandler,
  postAdminRouteHandler,
  postAllowListsRouteHandler,
  postCustomDataIdentifiersGetRouteHandler,
  postCustomDataIdentifiersListRouteHandler,
  postCustomDataIdentifiersRouteHandler,
  postCustomDataIdentifiersTestRouteHandler,
  postDatasourcesS3RouteHandler,
  postDatasourcesS3StatisticsRouteHandler,
  postDatasourcesSearchResourcesRouteHandler,
  postFindingsDescribeRouteHandler,
  postFindingsfiltersRouteHandler,
  postFindingsRouteHandler,
  postFindingsSampleRouteHandler,
  postFindingsStatisticsRouteHandler,
  postInvitationsAcceptRouteHandler,
  postInvitationsDeclineRouteHandler,
  postInvitationsDeleteRouteHandler,
  postInvitationsRouteHandler,
  postJobsListRouteHandler,
  postJobsRouteHandler,
  postMacieRouteHandler,
  postManagedDataIdentifiersListRouteHandler,
  postMasterDisassociateRouteHandler,
  postMembersDisassociateIdRouteHandler,
  postMembersRouteHandler,
  postTagsResourceArnRouteHandler,
  postUsageStatisticsRouteHandler,
  putAllowListsIdRouteHandler,
  putAutomatedDiscoveryConfigurationRouteHandler,
  putClassificationExportConfigurationRouteHandler,
  putFindingsPublicationConfigurationRouteHandler,
  putRevealConfigurationRouteHandler,
  putTemplatesSensitivityInspectionsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postInvitationsAcceptRoute, postInvitationsAcceptRouteHandler)
  .openapi(postCustomDataIdentifiersGetRoute, postCustomDataIdentifiersGetRouteHandler)
  .openapi(postAllowListsRoute, postAllowListsRouteHandler)
  .openapi(getAllowListsRoute, getAllowListsRouteHandler)
  .openapi(postJobsRoute, postJobsRouteHandler)
  .openapi(postCustomDataIdentifiersRoute, postCustomDataIdentifiersRouteHandler)
  .openapi(postFindingsfiltersRoute, postFindingsfiltersRouteHandler)
  .openapi(getFindingsfiltersRoute, getFindingsfiltersRouteHandler)
  .openapi(postInvitationsRoute, postInvitationsRouteHandler)
  .openapi(getInvitationsRoute, getInvitationsRouteHandler)
  .openapi(postMembersRoute, postMembersRouteHandler)
  .openapi(getMembersRoute, getMembersRouteHandler)
  .openapi(postFindingsSampleRoute, postFindingsSampleRouteHandler)
  .openapi(postInvitationsDeclineRoute, postInvitationsDeclineRouteHandler)
  .openapi(deleteAllowListsIdRoute, deleteAllowListsIdRouteHandler)
  .openapi(getAllowListsIdRoute, getAllowListsIdRouteHandler)
  .openapi(putAllowListsIdRoute, putAllowListsIdRouteHandler)
  .openapi(deleteCustomDataIdentifiersIdRoute, deleteCustomDataIdentifiersIdRouteHandler)
  .openapi(getCustomDataIdentifiersIdRoute, getCustomDataIdentifiersIdRouteHandler)
  .openapi(deleteFindingsfiltersIdRoute, deleteFindingsfiltersIdRouteHandler)
  .openapi(getFindingsfiltersIdRoute, getFindingsfiltersIdRouteHandler)
  .openapi(patchFindingsfiltersIdRoute, patchFindingsfiltersIdRouteHandler)
  .openapi(postInvitationsDeleteRoute, postInvitationsDeleteRouteHandler)
  .openapi(deleteMembersIdRoute, deleteMembersIdRouteHandler)
  .openapi(getMembersIdRoute, getMembersIdRouteHandler)
  .openapi(postDatasourcesS3Route, postDatasourcesS3RouteHandler)
  .openapi(getJobsJobIdRoute, getJobsJobIdRouteHandler)
  .openapi(patchJobsJobIdRoute, patchJobsJobIdRouteHandler)
  .openapi(getAdminConfigurationRoute, getAdminConfigurationRouteHandler)
  .openapi(patchAdminConfigurationRoute, patchAdminConfigurationRouteHandler)
  .openapi(deleteMacieRoute, deleteMacieRouteHandler)
  .openapi(postMacieRoute, postMacieRouteHandler)
  .openapi(getMacieRoute, getMacieRouteHandler)
  .openapi(patchMacieRoute, patchMacieRouteHandler)
  .openapi(deleteAdminAdminAccountIdRoute, deleteAdminAdminAccountIdRouteHandler)
  .openapi(postAdministratorDisassociateRoute, postAdministratorDisassociateRouteHandler)
  .openapi(postMasterDisassociateRoute, postMasterDisassociateRouteHandler)
  .openapi(postMembersDisassociateIdRoute, postMembersDisassociateIdRouteHandler)
  .openapi(postAdminRoute, postAdminRouteHandler)
  .openapi(getAdminRoute, getAdminRouteHandler)
  .openapi(getAdministratorRoute, getAdministratorRouteHandler)
  .openapi(getAutomatedDiscoveryConfigurationRoute, getAutomatedDiscoveryConfigurationRouteHandler)
  .openapi(putAutomatedDiscoveryConfigurationRoute, putAutomatedDiscoveryConfigurationRouteHandler)
  .openapi(postDatasourcesS3StatisticsRoute, postDatasourcesS3StatisticsRouteHandler)
  .openapi(
    getClassificationExportConfigurationRoute,
    getClassificationExportConfigurationRouteHandler,
  )
  .openapi(
    putClassificationExportConfigurationRoute,
    putClassificationExportConfigurationRouteHandler,
  )
  .openapi(getClassificationScopesIdRoute, getClassificationScopesIdRouteHandler)
  .openapi(patchClassificationScopesIdRoute, patchClassificationScopesIdRouteHandler)
  .openapi(postFindingsStatisticsRoute, postFindingsStatisticsRouteHandler)
  .openapi(postFindingsDescribeRoute, postFindingsDescribeRouteHandler)
  .openapi(
    getFindingsPublicationConfigurationRoute,
    getFindingsPublicationConfigurationRouteHandler,
  )
  .openapi(
    putFindingsPublicationConfigurationRoute,
    putFindingsPublicationConfigurationRouteHandler,
  )
  .openapi(getInvitationsCountRoute, getInvitationsCountRouteHandler)
  .openapi(getMasterRoute, getMasterRouteHandler)
  .openapi(getResourceProfilesResourceArnRoute, getResourceProfilesResourceArnRouteHandler)
  .openapi(patchResourceProfilesResourceArnRoute, patchResourceProfilesResourceArnRouteHandler)
  .openapi(getRevealConfigurationRoute, getRevealConfigurationRouteHandler)
  .openapi(putRevealConfigurationRoute, putRevealConfigurationRouteHandler)
  .openapi(getFindingsFindingIdRevealRoute, getFindingsFindingIdRevealRouteHandler)
  .openapi(
    getFindingsFindingIdRevealAvailabilityRoute,
    getFindingsFindingIdRevealAvailabilityRouteHandler,
  )
  .openapi(
    getTemplatesSensitivityInspectionsIdRoute,
    getTemplatesSensitivityInspectionsIdRouteHandler,
  )
  .openapi(
    putTemplatesSensitivityInspectionsIdRoute,
    putTemplatesSensitivityInspectionsIdRouteHandler,
  )
  .openapi(postUsageStatisticsRoute, postUsageStatisticsRouteHandler)
  .openapi(getUsageRoute, getUsageRouteHandler)
  .openapi(postJobsListRoute, postJobsListRouteHandler)
  .openapi(getClassificationScopesRoute, getClassificationScopesRouteHandler)
  .openapi(postCustomDataIdentifiersListRoute, postCustomDataIdentifiersListRouteHandler)
  .openapi(postFindingsRoute, postFindingsRouteHandler)
  .openapi(postManagedDataIdentifiersListRoute, postManagedDataIdentifiersListRouteHandler)
  .openapi(
    getResourceProfilesArtifactsResourceArnRoute,
    getResourceProfilesArtifactsResourceArnRouteHandler,
  )
  .openapi(
    getResourceProfilesDetectionsResourceArnRoute,
    getResourceProfilesDetectionsResourceArnRouteHandler,
  )
  .openapi(
    patchResourceProfilesDetectionsResourceArnRoute,
    patchResourceProfilesDetectionsResourceArnRouteHandler,
  )
  .openapi(getTemplatesSensitivityInspectionsRoute, getTemplatesSensitivityInspectionsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postDatasourcesSearchResourcesRoute, postDatasourcesSearchResourcesRouteHandler)
  .openapi(postCustomDataIdentifiersTestRoute, postCustomDataIdentifiersTestRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(patchMacieMembersIdRoute, patchMacieMembersIdRouteHandler)

export default app
