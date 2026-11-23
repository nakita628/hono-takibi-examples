import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiAssetsUuidRoute,
  deleteApiAuthAccessTokensIdRoute,
  deleteApiCloudstoragesIdRoute,
  deleteApiCommentsIdRoute,
  deleteApiGuidesIdRoute,
  deleteApiInvitationsKeyRoute,
  deleteApiIssuesIdRoute,
  deleteApiJobsIdAnnotationsIndexRoute,
  deleteApiJobsIdRoute,
  deleteApiLabelsIdRoute,
  deleteApiLambdaRequestsIdRoute,
  deleteApiMembershipsIdRoute,
  deleteApiOrganizationsIdRoute,
  deleteApiProjectsIdRoute,
  deleteApiQualitySettingsRequirementsIdRoute,
  deleteApiTasksIdAnnotationsIndexRoute,
  deleteApiTasksIdRoute,
  deleteApiUsersIdRoute,
  deleteApiWebhooksIdRoute,
  getApiAssetsUuidRoute,
  getApiAuthAccessTokensIdRoute,
  getApiAuthAccessTokensRoute,
  getApiAuthAccessTokensSelfRoute,
  getApiAuthRulesRoute,
  getApiCloudstoragesIdActionsRoute,
  getApiCloudstoragesIdContentV2Route,
  getApiCloudstoragesIdPreviewRoute,
  getApiCloudstoragesIdRoute,
  getApiCloudstoragesIdStatusRoute,
  getApiCloudstoragesRoute,
  getApiCommentsIdRoute,
  getApiCommentsRoute,
  getApiConsensusSettingsIdRoute,
  getApiConsensusSettingsRoute,
  getApiEventsRoute,
  getApiGrowthIdRoute,
  getApiGrowthRoute,
  getApiGuidesIdRoute,
  getApiInvitationsKeyRoute,
  getApiInvitationsRoute,
  getApiIssuesIdRoute,
  getApiIssuesRoute,
  getApiJobsIdAnnotationsIndexRoute,
  getApiJobsIdDataMetaRoute,
  getApiJobsIdDataRoute,
  getApiJobsIdPreviewRoute,
  getApiJobsIdRoute,
  getApiJobsIdValidationLayoutRoute,
  getApiJobsRoute,
  getApiLabelsIdRoute,
  getApiLabelsRoute,
  getApiLambdaFunctionsFuncIdRoute,
  getApiLambdaFunctionsRoute,
  getApiLambdaRequestsIdRoute,
  getApiLambdaRequestsRoute,
  getApiMembershipsIdRoute,
  getApiMembershipsRoute,
  getApiOrganizationsIdRoute,
  getApiOrganizationsRoute,
  getApiProjectsIdPreviewRoute,
  getApiProjectsIdRoute,
  getApiProjectsRoute,
  getApiQualityConflictsRoute,
  getApiQualityReportsIdConfusionMatrixRoute,
  getApiQualityReportsIdConfusionRoute,
  getApiQualityReportsIdDataRoute,
  getApiQualityReportsIdRoute,
  getApiQualityReportsRoute,
  getApiQualitySettingsIdRoute,
  getApiQualitySettingsRequirementsIdRoute,
  getApiQualitySettingsRequirementsRoute,
  getApiQualitySettingsRoute,
  getApiRequestsIdRoute,
  getApiRequestsRoute,
  getApiSchemaIndexRoute,
  getApiServerAboutRoute,
  getApiServerAnnotationFormatsRoute,
  getApiServerPluginsRoute,
  getApiServerShareRoute,
  getApiTasksIdAnnotationsIndexRoute,
  getApiTasksIdDataIndexRoute,
  getApiTasksIdDataMetaRoute,
  getApiTasksIdPreviewRoute,
  getApiTasksIdRoute,
  getApiTasksIdStatusRoute,
  getApiTasksIdValidationLayoutRoute,
  getApiTasksRoute,
  getApiUsersIdRoute,
  getApiUsersRoute,
  getApiUsersSelfRoute,
  getApiWebhooksEventsRoute,
  getApiWebhooksIdDeliveriesDeliveryIdRoute,
  getApiWebhooksIdDeliveriesRoute,
  getApiWebhooksIdRoute,
  getApiWebhooksRoute,
  patchApiAuthAccessTokensIdRoute,
  patchApiCloudstoragesIdRoute,
  patchApiCommentsIdRoute,
  patchApiConsensusSettingsIdRoute,
  patchApiGrowthIdRoute,
  patchApiGuidesIdRoute,
  patchApiIssuesIdRoute,
  patchApiJobsIdAnnotationsIndexRoute,
  patchApiJobsIdDataMetaRoute,
  patchApiJobsIdRoute,
  patchApiJobsIdValidationLayoutRoute,
  patchApiLabelsIdRoute,
  patchApiMembershipsIdRoute,
  patchApiOrganizationsIdRoute,
  patchApiProjectsIdRoute,
  patchApiQualitySettingsIdRoute,
  patchApiQualitySettingsRequirementsIdRoute,
  patchApiTasksIdAnnotationsIndexRoute,
  patchApiTasksIdDataMetaRoute,
  patchApiTasksIdRoute,
  patchApiTasksIdValidationLayoutRoute,
  patchApiUsersIdRoute,
  patchApiWebhooksIdRoute,
  postApiAssetsRoute,
  postApiAuthAccessTokensRoute,
  postApiAuthLoginRoute,
  postApiAuthLogoutRoute,
  postApiAuthPasswordChangeRoute,
  postApiAuthPasswordResetConfirmRoute,
  postApiAuthPasswordResetRoute,
  postApiAuthRegisterRoute,
  postApiCloudstoragesRoute,
  postApiCommentsRoute,
  postApiConsensusMergesRoute,
  postApiEventsExportRoute,
  postApiEventsRoute,
  postApiGuidesRoute,
  postApiInvitationsKeyAcceptRoute,
  postApiInvitationsKeyDeclineRoute,
  postApiInvitationsKeyResendRoute,
  postApiInvitationsRoute,
  postApiIssuesRoute,
  postApiJobsIdAnnotationsIndexRoute,
  postApiJobsIdDatasetExportRoute,
  postApiJobsRoute,
  postApiLambdaFunctionsFuncIdRoute,
  postApiLambdaRequestsRoute,
  postApiOrganizationsRoute,
  postApiProjectsBackupIndexRoute,
  postApiProjectsIdBackupExportRoute,
  postApiProjectsIdDatasetExportRoute,
  postApiProjectsIdDatasetIndexRoute,
  postApiProjectsRoute,
  postApiQualityReportsRoute,
  postApiQualitySettingsRequirementsBulkRoute,
  postApiQualitySettingsRequirementsRoute,
  postApiRequestsIdCancelRoute,
  postApiTasksBackupIndexRoute,
  postApiTasksIdAnnotationsIndexRoute,
  postApiTasksIdBackupExportRoute,
  postApiTasksIdDataIndexRoute,
  postApiTasksIdDatasetExportRoute,
  postApiTasksRoute,
  postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRoute,
  postApiWebhooksIdPingRoute,
  postApiWebhooksRoute,
  putApiJobsIdAnnotationsIndexRoute,
  putApiQualitySettingsIdRoute,
  putApiQualitySettingsRequirementsIdRoute,
  putApiTasksIdAnnotationsIndexRoute,
  putApiWebhooksIdRoute,
} from '../routes'

export const postApiAssetsRouteHandler: RouteHandler<typeof postApiAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAssetsUuidRouteHandler: RouteHandler<typeof getApiAssetsUuidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiAssetsUuidRouteHandler: RouteHandler<
  typeof deleteApiAssetsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAuthAccessTokensRouteHandler: RouteHandler<
  typeof getApiAuthAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAuthAccessTokensRouteHandler: RouteHandler<
  typeof postApiAuthAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAuthAccessTokensIdRouteHandler: RouteHandler<
  typeof getApiAuthAccessTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiAuthAccessTokensIdRouteHandler: RouteHandler<
  typeof patchApiAuthAccessTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAuthAccessTokensIdRouteHandler: RouteHandler<
  typeof deleteApiAuthAccessTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAuthAccessTokensSelfRouteHandler: RouteHandler<
  typeof getApiAuthAccessTokensSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAuthLoginRouteHandler: RouteHandler<typeof postApiAuthLoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAuthLogoutRouteHandler: RouteHandler<typeof postApiAuthLogoutRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAuthPasswordChangeRouteHandler: RouteHandler<
  typeof postApiAuthPasswordChangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAuthPasswordResetRouteHandler: RouteHandler<
  typeof postApiAuthPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAuthPasswordResetConfirmRouteHandler: RouteHandler<
  typeof postApiAuthPasswordResetConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAuthRegisterRouteHandler: RouteHandler<
  typeof postApiAuthRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAuthRulesRouteHandler: RouteHandler<typeof getApiAuthRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCloudstoragesRouteHandler: RouteHandler<
  typeof getApiCloudstoragesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCloudstoragesRouteHandler: RouteHandler<
  typeof postApiCloudstoragesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCloudstoragesIdRouteHandler: RouteHandler<
  typeof getApiCloudstoragesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiCloudstoragesIdRouteHandler: RouteHandler<
  typeof patchApiCloudstoragesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCloudstoragesIdRouteHandler: RouteHandler<
  typeof deleteApiCloudstoragesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCloudstoragesIdActionsRouteHandler: RouteHandler<
  typeof getApiCloudstoragesIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCloudstoragesIdContentV2RouteHandler: RouteHandler<
  typeof getApiCloudstoragesIdContentV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCloudstoragesIdPreviewRouteHandler: RouteHandler<
  typeof getApiCloudstoragesIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCloudstoragesIdStatusRouteHandler: RouteHandler<
  typeof getApiCloudstoragesIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCommentsRouteHandler: RouteHandler<typeof getApiCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCommentsRouteHandler: RouteHandler<typeof postApiCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCommentsIdRouteHandler: RouteHandler<typeof getApiCommentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiCommentsIdRouteHandler: RouteHandler<typeof patchApiCommentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiCommentsIdRouteHandler: RouteHandler<
  typeof deleteApiCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConsensusMergesRouteHandler: RouteHandler<
  typeof postApiConsensusMergesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConsensusSettingsRouteHandler: RouteHandler<
  typeof getApiConsensusSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConsensusSettingsIdRouteHandler: RouteHandler<
  typeof getApiConsensusSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiConsensusSettingsIdRouteHandler: RouteHandler<
  typeof patchApiConsensusSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEventsRouteHandler: RouteHandler<typeof getApiEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEventsRouteHandler: RouteHandler<typeof postApiEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEventsExportRouteHandler: RouteHandler<
  typeof postApiEventsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGrowthRouteHandler: RouteHandler<typeof getApiGrowthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGrowthIdRouteHandler: RouteHandler<typeof getApiGrowthIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiGrowthIdRouteHandler: RouteHandler<typeof patchApiGrowthIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiGuidesRouteHandler: RouteHandler<typeof postApiGuidesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGuidesIdRouteHandler: RouteHandler<typeof getApiGuidesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiGuidesIdRouteHandler: RouteHandler<typeof patchApiGuidesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiGuidesIdRouteHandler: RouteHandler<typeof deleteApiGuidesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiInvitationsRouteHandler: RouteHandler<typeof getApiInvitationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiInvitationsRouteHandler: RouteHandler<typeof postApiInvitationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiInvitationsKeyRouteHandler: RouteHandler<
  typeof getApiInvitationsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiInvitationsKeyRouteHandler: RouteHandler<
  typeof deleteApiInvitationsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInvitationsKeyAcceptRouteHandler: RouteHandler<
  typeof postApiInvitationsKeyAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInvitationsKeyDeclineRouteHandler: RouteHandler<
  typeof postApiInvitationsKeyDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInvitationsKeyResendRouteHandler: RouteHandler<
  typeof postApiInvitationsKeyResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIssuesRouteHandler: RouteHandler<typeof getApiIssuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiIssuesRouteHandler: RouteHandler<typeof postApiIssuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiIssuesIdRouteHandler: RouteHandler<typeof getApiIssuesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiIssuesIdRouteHandler: RouteHandler<typeof patchApiIssuesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiIssuesIdRouteHandler: RouteHandler<typeof deleteApiIssuesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiJobsRouteHandler: RouteHandler<typeof getApiJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsRouteHandler: RouteHandler<typeof postApiJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsIdRouteHandler: RouteHandler<typeof getApiJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiJobsIdRouteHandler: RouteHandler<typeof patchApiJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiJobsIdRouteHandler: RouteHandler<typeof deleteApiJobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof getApiJobsIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof postApiJobsIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiJobsIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof putApiJobsIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiJobsIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof patchApiJobsIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiJobsIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof deleteApiJobsIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsIdDataRouteHandler: RouteHandler<typeof getApiJobsIdDataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiJobsIdDataMetaRouteHandler: RouteHandler<
  typeof getApiJobsIdDataMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiJobsIdDataMetaRouteHandler: RouteHandler<
  typeof patchApiJobsIdDataMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiJobsIdDatasetExportRouteHandler: RouteHandler<
  typeof postApiJobsIdDatasetExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsIdPreviewRouteHandler: RouteHandler<
  typeof getApiJobsIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiJobsIdValidationLayoutRouteHandler: RouteHandler<
  typeof getApiJobsIdValidationLayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiJobsIdValidationLayoutRouteHandler: RouteHandler<
  typeof patchApiJobsIdValidationLayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabelsRouteHandler: RouteHandler<typeof getApiLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabelsIdRouteHandler: RouteHandler<typeof getApiLabelsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLabelsIdRouteHandler: RouteHandler<typeof patchApiLabelsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiLabelsIdRouteHandler: RouteHandler<typeof deleteApiLabelsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiLambdaFunctionsRouteHandler: RouteHandler<
  typeof getApiLambdaFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLambdaFunctionsFuncIdRouteHandler: RouteHandler<
  typeof getApiLambdaFunctionsFuncIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLambdaFunctionsFuncIdRouteHandler: RouteHandler<
  typeof postApiLambdaFunctionsFuncIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLambdaRequestsRouteHandler: RouteHandler<
  typeof getApiLambdaRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLambdaRequestsRouteHandler: RouteHandler<
  typeof postApiLambdaRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLambdaRequestsIdRouteHandler: RouteHandler<
  typeof getApiLambdaRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLambdaRequestsIdRouteHandler: RouteHandler<
  typeof deleteApiLambdaRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMembershipsRouteHandler: RouteHandler<typeof getApiMembershipsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiMembershipsIdRouteHandler: RouteHandler<
  typeof getApiMembershipsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiMembershipsIdRouteHandler: RouteHandler<
  typeof patchApiMembershipsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiMembershipsIdRouteHandler: RouteHandler<
  typeof deleteApiMembershipsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsRouteHandler: RouteHandler<
  typeof getApiOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOrganizationsRouteHandler: RouteHandler<
  typeof postApiOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOrganizationsIdRouteHandler: RouteHandler<
  typeof getApiOrganizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOrganizationsIdRouteHandler: RouteHandler<
  typeof patchApiOrganizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiOrganizationsIdRouteHandler: RouteHandler<
  typeof deleteApiOrganizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProjectsRouteHandler: RouteHandler<typeof getApiProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProjectsRouteHandler: RouteHandler<typeof postApiProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProjectsIdRouteHandler: RouteHandler<typeof getApiProjectsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiProjectsIdRouteHandler: RouteHandler<typeof patchApiProjectsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiProjectsIdRouteHandler: RouteHandler<
  typeof deleteApiProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProjectsIdBackupExportRouteHandler: RouteHandler<
  typeof postApiProjectsIdBackupExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProjectsIdDatasetIndexRouteHandler: RouteHandler<
  typeof postApiProjectsIdDatasetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProjectsIdDatasetExportRouteHandler: RouteHandler<
  typeof postApiProjectsIdDatasetExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProjectsIdPreviewRouteHandler: RouteHandler<
  typeof getApiProjectsIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProjectsBackupIndexRouteHandler: RouteHandler<
  typeof postApiProjectsBackupIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualityConflictsRouteHandler: RouteHandler<
  typeof getApiQualityConflictsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualityReportsRouteHandler: RouteHandler<
  typeof getApiQualityReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiQualityReportsRouteHandler: RouteHandler<
  typeof postApiQualityReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualityReportsIdRouteHandler: RouteHandler<
  typeof getApiQualityReportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualityReportsIdConfusionRouteHandler: RouteHandler<
  typeof getApiQualityReportsIdConfusionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualityReportsIdConfusionMatrixRouteHandler: RouteHandler<
  typeof getApiQualityReportsIdConfusionMatrixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualityReportsIdDataRouteHandler: RouteHandler<
  typeof getApiQualityReportsIdDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualitySettingsRouteHandler: RouteHandler<
  typeof getApiQualitySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualitySettingsIdRouteHandler: RouteHandler<
  typeof getApiQualitySettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiQualitySettingsIdRouteHandler: RouteHandler<
  typeof putApiQualitySettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiQualitySettingsIdRouteHandler: RouteHandler<
  typeof patchApiQualitySettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualitySettingsRequirementsRouteHandler: RouteHandler<
  typeof getApiQualitySettingsRequirementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiQualitySettingsRequirementsRouteHandler: RouteHandler<
  typeof postApiQualitySettingsRequirementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiQualitySettingsRequirementsIdRouteHandler: RouteHandler<
  typeof getApiQualitySettingsRequirementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiQualitySettingsRequirementsIdRouteHandler: RouteHandler<
  typeof putApiQualitySettingsRequirementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiQualitySettingsRequirementsIdRouteHandler: RouteHandler<
  typeof patchApiQualitySettingsRequirementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiQualitySettingsRequirementsIdRouteHandler: RouteHandler<
  typeof deleteApiQualitySettingsRequirementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiQualitySettingsRequirementsBulkRouteHandler: RouteHandler<
  typeof postApiQualitySettingsRequirementsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRequestsRouteHandler: RouteHandler<typeof getApiRequestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiRequestsIdRouteHandler: RouteHandler<typeof getApiRequestsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiRequestsIdCancelRouteHandler: RouteHandler<
  typeof postApiRequestsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSchemaIndexRouteHandler: RouteHandler<typeof getApiSchemaIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiServerAboutRouteHandler: RouteHandler<typeof getApiServerAboutRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiServerAnnotationFormatsRouteHandler: RouteHandler<
  typeof getApiServerAnnotationFormatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerPluginsRouteHandler: RouteHandler<
  typeof getApiServerPluginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiServerShareRouteHandler: RouteHandler<typeof getApiServerShareRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTasksRouteHandler: RouteHandler<typeof getApiTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTasksRouteHandler: RouteHandler<typeof postApiTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTasksIdRouteHandler: RouteHandler<typeof getApiTasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTasksIdRouteHandler: RouteHandler<typeof patchApiTasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTasksIdRouteHandler: RouteHandler<typeof deleteApiTasksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTasksIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof getApiTasksIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTasksIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof postApiTasksIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTasksIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof putApiTasksIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTasksIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof patchApiTasksIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiTasksIdAnnotationsIndexRouteHandler: RouteHandler<
  typeof deleteApiTasksIdAnnotationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTasksIdBackupExportRouteHandler: RouteHandler<
  typeof postApiTasksIdBackupExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTasksIdDataIndexRouteHandler: RouteHandler<
  typeof getApiTasksIdDataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTasksIdDataIndexRouteHandler: RouteHandler<
  typeof postApiTasksIdDataIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTasksIdDataMetaRouteHandler: RouteHandler<
  typeof getApiTasksIdDataMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTasksIdDataMetaRouteHandler: RouteHandler<
  typeof patchApiTasksIdDataMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTasksIdDatasetExportRouteHandler: RouteHandler<
  typeof postApiTasksIdDatasetExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTasksIdPreviewRouteHandler: RouteHandler<
  typeof getApiTasksIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTasksIdStatusRouteHandler: RouteHandler<
  typeof getApiTasksIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTasksIdValidationLayoutRouteHandler: RouteHandler<
  typeof getApiTasksIdValidationLayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTasksIdValidationLayoutRouteHandler: RouteHandler<
  typeof patchApiTasksIdValidationLayoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTasksBackupIndexRouteHandler: RouteHandler<
  typeof postApiTasksBackupIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersRouteHandler: RouteHandler<typeof getApiUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersIdRouteHandler: RouteHandler<typeof getApiUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiUsersIdRouteHandler: RouteHandler<typeof patchApiUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiUsersIdRouteHandler: RouteHandler<typeof deleteApiUsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUsersSelfRouteHandler: RouteHandler<typeof getApiUsersSelfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebhooksRouteHandler: RouteHandler<typeof getApiWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebhooksRouteHandler: RouteHandler<typeof postApiWebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebhooksIdRouteHandler: RouteHandler<typeof getApiWebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiWebhooksIdRouteHandler: RouteHandler<typeof putApiWebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiWebhooksIdRouteHandler: RouteHandler<typeof patchApiWebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiWebhooksIdRouteHandler: RouteHandler<
  typeof deleteApiWebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebhooksIdDeliveriesRouteHandler: RouteHandler<
  typeof getApiWebhooksIdDeliveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebhooksIdDeliveriesDeliveryIdRouteHandler: RouteHandler<
  typeof getApiWebhooksIdDeliveriesDeliveryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRouteHandler: RouteHandler<
  typeof postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiWebhooksIdPingRouteHandler: RouteHandler<
  typeof postApiWebhooksIdPingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiWebhooksEventsRouteHandler: RouteHandler<
  typeof getApiWebhooksEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
