import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  deleteApiAssetsUuidRouteHandler,
  deleteApiAuthAccessTokensIdRouteHandler,
  deleteApiCloudstoragesIdRouteHandler,
  deleteApiCommentsIdRouteHandler,
  deleteApiGuidesIdRouteHandler,
  deleteApiInvitationsKeyRouteHandler,
  deleteApiIssuesIdRouteHandler,
  deleteApiJobsIdAnnotationsIndexRouteHandler,
  deleteApiJobsIdRouteHandler,
  deleteApiLabelsIdRouteHandler,
  deleteApiLambdaRequestsIdRouteHandler,
  deleteApiMembershipsIdRouteHandler,
  deleteApiOrganizationsIdRouteHandler,
  deleteApiProjectsIdRouteHandler,
  deleteApiQualitySettingsRequirementsIdRouteHandler,
  deleteApiTasksIdAnnotationsIndexRouteHandler,
  deleteApiTasksIdRouteHandler,
  deleteApiUsersIdRouteHandler,
  deleteApiWebhooksIdRouteHandler,
  getApiAssetsUuidRouteHandler,
  getApiAuthAccessTokensIdRouteHandler,
  getApiAuthAccessTokensRouteHandler,
  getApiAuthAccessTokensSelfRouteHandler,
  getApiAuthRulesRouteHandler,
  getApiCloudstoragesIdActionsRouteHandler,
  getApiCloudstoragesIdContentV2RouteHandler,
  getApiCloudstoragesIdPreviewRouteHandler,
  getApiCloudstoragesIdRouteHandler,
  getApiCloudstoragesIdStatusRouteHandler,
  getApiCloudstoragesRouteHandler,
  getApiCommentsIdRouteHandler,
  getApiCommentsRouteHandler,
  getApiConsensusSettingsIdRouteHandler,
  getApiConsensusSettingsRouteHandler,
  getApiEventsRouteHandler,
  getApiGrowthIdRouteHandler,
  getApiGrowthRouteHandler,
  getApiGuidesIdRouteHandler,
  getApiInvitationsKeyRouteHandler,
  getApiInvitationsRouteHandler,
  getApiIssuesIdRouteHandler,
  getApiIssuesRouteHandler,
  getApiJobsIdAnnotationsIndexRouteHandler,
  getApiJobsIdDataMetaRouteHandler,
  getApiJobsIdDataRouteHandler,
  getApiJobsIdPreviewRouteHandler,
  getApiJobsIdRouteHandler,
  getApiJobsIdValidationLayoutRouteHandler,
  getApiJobsRouteHandler,
  getApiLabelsIdRouteHandler,
  getApiLabelsRouteHandler,
  getApiLambdaFunctionsFuncIdRouteHandler,
  getApiLambdaFunctionsRouteHandler,
  getApiLambdaRequestsIdRouteHandler,
  getApiLambdaRequestsRouteHandler,
  getApiMembershipsIdRouteHandler,
  getApiMembershipsRouteHandler,
  getApiOrganizationsIdRouteHandler,
  getApiOrganizationsRouteHandler,
  getApiProjectsIdPreviewRouteHandler,
  getApiProjectsIdRouteHandler,
  getApiProjectsRouteHandler,
  getApiQualityConflictsRouteHandler,
  getApiQualityReportsIdConfusionMatrixRouteHandler,
  getApiQualityReportsIdConfusionRouteHandler,
  getApiQualityReportsIdDataRouteHandler,
  getApiQualityReportsIdRouteHandler,
  getApiQualityReportsRouteHandler,
  getApiQualitySettingsIdRouteHandler,
  getApiQualitySettingsRequirementsIdRouteHandler,
  getApiQualitySettingsRequirementsRouteHandler,
  getApiQualitySettingsRouteHandler,
  getApiRequestsIdRouteHandler,
  getApiRequestsRouteHandler,
  getApiSchemaIndexRouteHandler,
  getApiServerAboutRouteHandler,
  getApiServerAnnotationFormatsRouteHandler,
  getApiServerPluginsRouteHandler,
  getApiServerShareRouteHandler,
  getApiTasksIdAnnotationsIndexRouteHandler,
  getApiTasksIdDataIndexRouteHandler,
  getApiTasksIdDataMetaRouteHandler,
  getApiTasksIdPreviewRouteHandler,
  getApiTasksIdRouteHandler,
  getApiTasksIdStatusRouteHandler,
  getApiTasksIdValidationLayoutRouteHandler,
  getApiTasksRouteHandler,
  getApiUsersIdRouteHandler,
  getApiUsersRouteHandler,
  getApiUsersSelfRouteHandler,
  getApiWebhooksEventsRouteHandler,
  getApiWebhooksIdDeliveriesDeliveryIdRouteHandler,
  getApiWebhooksIdDeliveriesRouteHandler,
  getApiWebhooksIdRouteHandler,
  getApiWebhooksRouteHandler,
  patchApiAuthAccessTokensIdRouteHandler,
  patchApiCloudstoragesIdRouteHandler,
  patchApiCommentsIdRouteHandler,
  patchApiConsensusSettingsIdRouteHandler,
  patchApiGrowthIdRouteHandler,
  patchApiGuidesIdRouteHandler,
  patchApiIssuesIdRouteHandler,
  patchApiJobsIdAnnotationsIndexRouteHandler,
  patchApiJobsIdDataMetaRouteHandler,
  patchApiJobsIdRouteHandler,
  patchApiJobsIdValidationLayoutRouteHandler,
  patchApiLabelsIdRouteHandler,
  patchApiMembershipsIdRouteHandler,
  patchApiOrganizationsIdRouteHandler,
  patchApiProjectsIdRouteHandler,
  patchApiQualitySettingsIdRouteHandler,
  patchApiQualitySettingsRequirementsIdRouteHandler,
  patchApiTasksIdAnnotationsIndexRouteHandler,
  patchApiTasksIdDataMetaRouteHandler,
  patchApiTasksIdRouteHandler,
  patchApiTasksIdValidationLayoutRouteHandler,
  patchApiUsersIdRouteHandler,
  patchApiWebhooksIdRouteHandler,
  postApiAssetsRouteHandler,
  postApiAuthAccessTokensRouteHandler,
  postApiAuthLoginRouteHandler,
  postApiAuthLogoutRouteHandler,
  postApiAuthPasswordChangeRouteHandler,
  postApiAuthPasswordResetConfirmRouteHandler,
  postApiAuthPasswordResetRouteHandler,
  postApiAuthRegisterRouteHandler,
  postApiCloudstoragesRouteHandler,
  postApiCommentsRouteHandler,
  postApiConsensusMergesRouteHandler,
  postApiEventsExportRouteHandler,
  postApiEventsRouteHandler,
  postApiGuidesRouteHandler,
  postApiInvitationsKeyAcceptRouteHandler,
  postApiInvitationsKeyDeclineRouteHandler,
  postApiInvitationsKeyResendRouteHandler,
  postApiInvitationsRouteHandler,
  postApiIssuesRouteHandler,
  postApiJobsIdAnnotationsIndexRouteHandler,
  postApiJobsIdDatasetExportRouteHandler,
  postApiJobsRouteHandler,
  postApiLambdaFunctionsFuncIdRouteHandler,
  postApiLambdaRequestsRouteHandler,
  postApiOrganizationsRouteHandler,
  postApiProjectsBackupIndexRouteHandler,
  postApiProjectsIdBackupExportRouteHandler,
  postApiProjectsIdDatasetExportRouteHandler,
  postApiProjectsIdDatasetIndexRouteHandler,
  postApiProjectsRouteHandler,
  postApiQualityReportsRouteHandler,
  postApiQualitySettingsRequirementsBulkRouteHandler,
  postApiQualitySettingsRequirementsRouteHandler,
  postApiRequestsIdCancelRouteHandler,
  postApiTasksBackupIndexRouteHandler,
  postApiTasksIdAnnotationsIndexRouteHandler,
  postApiTasksIdBackupExportRouteHandler,
  postApiTasksIdDataIndexRouteHandler,
  postApiTasksIdDatasetExportRouteHandler,
  postApiTasksRouteHandler,
  postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRouteHandler,
  postApiWebhooksIdPingRouteHandler,
  postApiWebhooksRouteHandler,
  putApiJobsIdAnnotationsIndexRouteHandler,
  putApiQualitySettingsIdRouteHandler,
  putApiQualitySettingsRequirementsIdRouteHandler,
  putApiTasksIdAnnotationsIndexRouteHandler,
  putApiWebhooksIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiAssetsRoute, postApiAssetsRouteHandler)
  .openapi(getApiAssetsUuidRoute, getApiAssetsUuidRouteHandler)
  .openapi(deleteApiAssetsUuidRoute, deleteApiAssetsUuidRouteHandler)
  .openapi(getApiAuthAccessTokensRoute, getApiAuthAccessTokensRouteHandler)
  .openapi(postApiAuthAccessTokensRoute, postApiAuthAccessTokensRouteHandler)
  .openapi(getApiAuthAccessTokensIdRoute, getApiAuthAccessTokensIdRouteHandler)
  .openapi(patchApiAuthAccessTokensIdRoute, patchApiAuthAccessTokensIdRouteHandler)
  .openapi(deleteApiAuthAccessTokensIdRoute, deleteApiAuthAccessTokensIdRouteHandler)
  .openapi(getApiAuthAccessTokensSelfRoute, getApiAuthAccessTokensSelfRouteHandler)
  .openapi(postApiAuthLoginRoute, postApiAuthLoginRouteHandler)
  .openapi(postApiAuthLogoutRoute, postApiAuthLogoutRouteHandler)
  .openapi(postApiAuthPasswordChangeRoute, postApiAuthPasswordChangeRouteHandler)
  .openapi(postApiAuthPasswordResetRoute, postApiAuthPasswordResetRouteHandler)
  .openapi(postApiAuthPasswordResetConfirmRoute, postApiAuthPasswordResetConfirmRouteHandler)
  .openapi(postApiAuthRegisterRoute, postApiAuthRegisterRouteHandler)
  .openapi(getApiAuthRulesRoute, getApiAuthRulesRouteHandler)
  .openapi(getApiCloudstoragesRoute, getApiCloudstoragesRouteHandler)
  .openapi(postApiCloudstoragesRoute, postApiCloudstoragesRouteHandler)
  .openapi(getApiCloudstoragesIdRoute, getApiCloudstoragesIdRouteHandler)
  .openapi(patchApiCloudstoragesIdRoute, patchApiCloudstoragesIdRouteHandler)
  .openapi(deleteApiCloudstoragesIdRoute, deleteApiCloudstoragesIdRouteHandler)
  .openapi(getApiCloudstoragesIdActionsRoute, getApiCloudstoragesIdActionsRouteHandler)
  .openapi(getApiCloudstoragesIdContentV2Route, getApiCloudstoragesIdContentV2RouteHandler)
  .openapi(getApiCloudstoragesIdPreviewRoute, getApiCloudstoragesIdPreviewRouteHandler)
  .openapi(getApiCloudstoragesIdStatusRoute, getApiCloudstoragesIdStatusRouteHandler)
  .openapi(getApiCommentsRoute, getApiCommentsRouteHandler)
  .openapi(postApiCommentsRoute, postApiCommentsRouteHandler)
  .openapi(getApiCommentsIdRoute, getApiCommentsIdRouteHandler)
  .openapi(patchApiCommentsIdRoute, patchApiCommentsIdRouteHandler)
  .openapi(deleteApiCommentsIdRoute, deleteApiCommentsIdRouteHandler)
  .openapi(postApiConsensusMergesRoute, postApiConsensusMergesRouteHandler)
  .openapi(getApiConsensusSettingsRoute, getApiConsensusSettingsRouteHandler)
  .openapi(getApiConsensusSettingsIdRoute, getApiConsensusSettingsIdRouteHandler)
  .openapi(patchApiConsensusSettingsIdRoute, patchApiConsensusSettingsIdRouteHandler)
  .openapi(getApiEventsRoute, getApiEventsRouteHandler)
  .openapi(postApiEventsRoute, postApiEventsRouteHandler)
  .openapi(postApiEventsExportRoute, postApiEventsExportRouteHandler)
  .openapi(getApiGrowthRoute, getApiGrowthRouteHandler)
  .openapi(getApiGrowthIdRoute, getApiGrowthIdRouteHandler)
  .openapi(patchApiGrowthIdRoute, patchApiGrowthIdRouteHandler)
  .openapi(postApiGuidesRoute, postApiGuidesRouteHandler)
  .openapi(getApiGuidesIdRoute, getApiGuidesIdRouteHandler)
  .openapi(patchApiGuidesIdRoute, patchApiGuidesIdRouteHandler)
  .openapi(deleteApiGuidesIdRoute, deleteApiGuidesIdRouteHandler)
  .openapi(getApiInvitationsRoute, getApiInvitationsRouteHandler)
  .openapi(postApiInvitationsRoute, postApiInvitationsRouteHandler)
  .openapi(getApiInvitationsKeyRoute, getApiInvitationsKeyRouteHandler)
  .openapi(deleteApiInvitationsKeyRoute, deleteApiInvitationsKeyRouteHandler)
  .openapi(postApiInvitationsKeyAcceptRoute, postApiInvitationsKeyAcceptRouteHandler)
  .openapi(postApiInvitationsKeyDeclineRoute, postApiInvitationsKeyDeclineRouteHandler)
  .openapi(postApiInvitationsKeyResendRoute, postApiInvitationsKeyResendRouteHandler)
  .openapi(getApiIssuesRoute, getApiIssuesRouteHandler)
  .openapi(postApiIssuesRoute, postApiIssuesRouteHandler)
  .openapi(getApiIssuesIdRoute, getApiIssuesIdRouteHandler)
  .openapi(patchApiIssuesIdRoute, patchApiIssuesIdRouteHandler)
  .openapi(deleteApiIssuesIdRoute, deleteApiIssuesIdRouteHandler)
  .openapi(getApiJobsRoute, getApiJobsRouteHandler)
  .openapi(postApiJobsRoute, postApiJobsRouteHandler)
  .openapi(getApiJobsIdRoute, getApiJobsIdRouteHandler)
  .openapi(patchApiJobsIdRoute, patchApiJobsIdRouteHandler)
  .openapi(deleteApiJobsIdRoute, deleteApiJobsIdRouteHandler)
  .openapi(getApiJobsIdAnnotationsIndexRoute, getApiJobsIdAnnotationsIndexRouteHandler)
  .openapi(postApiJobsIdAnnotationsIndexRoute, postApiJobsIdAnnotationsIndexRouteHandler)
  .openapi(putApiJobsIdAnnotationsIndexRoute, putApiJobsIdAnnotationsIndexRouteHandler)
  .openapi(patchApiJobsIdAnnotationsIndexRoute, patchApiJobsIdAnnotationsIndexRouteHandler)
  .openapi(deleteApiJobsIdAnnotationsIndexRoute, deleteApiJobsIdAnnotationsIndexRouteHandler)
  .openapi(getApiJobsIdDataRoute, getApiJobsIdDataRouteHandler)
  .openapi(getApiJobsIdDataMetaRoute, getApiJobsIdDataMetaRouteHandler)
  .openapi(patchApiJobsIdDataMetaRoute, patchApiJobsIdDataMetaRouteHandler)
  .openapi(postApiJobsIdDatasetExportRoute, postApiJobsIdDatasetExportRouteHandler)
  .openapi(getApiJobsIdPreviewRoute, getApiJobsIdPreviewRouteHandler)
  .openapi(getApiJobsIdValidationLayoutRoute, getApiJobsIdValidationLayoutRouteHandler)
  .openapi(patchApiJobsIdValidationLayoutRoute, patchApiJobsIdValidationLayoutRouteHandler)
  .openapi(getApiLabelsRoute, getApiLabelsRouteHandler)
  .openapi(getApiLabelsIdRoute, getApiLabelsIdRouteHandler)
  .openapi(patchApiLabelsIdRoute, patchApiLabelsIdRouteHandler)
  .openapi(deleteApiLabelsIdRoute, deleteApiLabelsIdRouteHandler)
  .openapi(getApiLambdaFunctionsRoute, getApiLambdaFunctionsRouteHandler)
  .openapi(getApiLambdaFunctionsFuncIdRoute, getApiLambdaFunctionsFuncIdRouteHandler)
  .openapi(postApiLambdaFunctionsFuncIdRoute, postApiLambdaFunctionsFuncIdRouteHandler)
  .openapi(getApiLambdaRequestsRoute, getApiLambdaRequestsRouteHandler)
  .openapi(postApiLambdaRequestsRoute, postApiLambdaRequestsRouteHandler)
  .openapi(getApiLambdaRequestsIdRoute, getApiLambdaRequestsIdRouteHandler)
  .openapi(deleteApiLambdaRequestsIdRoute, deleteApiLambdaRequestsIdRouteHandler)
  .openapi(getApiMembershipsRoute, getApiMembershipsRouteHandler)
  .openapi(getApiMembershipsIdRoute, getApiMembershipsIdRouteHandler)
  .openapi(patchApiMembershipsIdRoute, patchApiMembershipsIdRouteHandler)
  .openapi(deleteApiMembershipsIdRoute, deleteApiMembershipsIdRouteHandler)
  .openapi(getApiOrganizationsRoute, getApiOrganizationsRouteHandler)
  .openapi(postApiOrganizationsRoute, postApiOrganizationsRouteHandler)
  .openapi(getApiOrganizationsIdRoute, getApiOrganizationsIdRouteHandler)
  .openapi(patchApiOrganizationsIdRoute, patchApiOrganizationsIdRouteHandler)
  .openapi(deleteApiOrganizationsIdRoute, deleteApiOrganizationsIdRouteHandler)
  .openapi(getApiProjectsRoute, getApiProjectsRouteHandler)
  .openapi(postApiProjectsRoute, postApiProjectsRouteHandler)
  .openapi(getApiProjectsIdRoute, getApiProjectsIdRouteHandler)
  .openapi(patchApiProjectsIdRoute, patchApiProjectsIdRouteHandler)
  .openapi(deleteApiProjectsIdRoute, deleteApiProjectsIdRouteHandler)
  .openapi(postApiProjectsIdBackupExportRoute, postApiProjectsIdBackupExportRouteHandler)
  .openapi(postApiProjectsIdDatasetIndexRoute, postApiProjectsIdDatasetIndexRouteHandler)
  .openapi(postApiProjectsIdDatasetExportRoute, postApiProjectsIdDatasetExportRouteHandler)
  .openapi(getApiProjectsIdPreviewRoute, getApiProjectsIdPreviewRouteHandler)
  .openapi(postApiProjectsBackupIndexRoute, postApiProjectsBackupIndexRouteHandler)
  .openapi(getApiQualityConflictsRoute, getApiQualityConflictsRouteHandler)
  .openapi(getApiQualityReportsRoute, getApiQualityReportsRouteHandler)
  .openapi(postApiQualityReportsRoute, postApiQualityReportsRouteHandler)
  .openapi(getApiQualityReportsIdRoute, getApiQualityReportsIdRouteHandler)
  .openapi(getApiQualityReportsIdConfusionRoute, getApiQualityReportsIdConfusionRouteHandler)
  .openapi(
    getApiQualityReportsIdConfusionMatrixRoute,
    getApiQualityReportsIdConfusionMatrixRouteHandler,
  )
  .openapi(getApiQualityReportsIdDataRoute, getApiQualityReportsIdDataRouteHandler)
  .openapi(getApiQualitySettingsRoute, getApiQualitySettingsRouteHandler)
  .openapi(getApiQualitySettingsIdRoute, getApiQualitySettingsIdRouteHandler)
  .openapi(putApiQualitySettingsIdRoute, putApiQualitySettingsIdRouteHandler)
  .openapi(patchApiQualitySettingsIdRoute, patchApiQualitySettingsIdRouteHandler)
  .openapi(getApiQualitySettingsRequirementsRoute, getApiQualitySettingsRequirementsRouteHandler)
  .openapi(postApiQualitySettingsRequirementsRoute, postApiQualitySettingsRequirementsRouteHandler)
  .openapi(
    getApiQualitySettingsRequirementsIdRoute,
    getApiQualitySettingsRequirementsIdRouteHandler,
  )
  .openapi(
    putApiQualitySettingsRequirementsIdRoute,
    putApiQualitySettingsRequirementsIdRouteHandler,
  )
  .openapi(
    patchApiQualitySettingsRequirementsIdRoute,
    patchApiQualitySettingsRequirementsIdRouteHandler,
  )
  .openapi(
    deleteApiQualitySettingsRequirementsIdRoute,
    deleteApiQualitySettingsRequirementsIdRouteHandler,
  )
  .openapi(
    postApiQualitySettingsRequirementsBulkRoute,
    postApiQualitySettingsRequirementsBulkRouteHandler,
  )
  .openapi(getApiRequestsRoute, getApiRequestsRouteHandler)
  .openapi(getApiRequestsIdRoute, getApiRequestsIdRouteHandler)
  .openapi(postApiRequestsIdCancelRoute, postApiRequestsIdCancelRouteHandler)
  .openapi(getApiSchemaIndexRoute, getApiSchemaIndexRouteHandler)
  .openapi(getApiServerAboutRoute, getApiServerAboutRouteHandler)
  .openapi(getApiServerAnnotationFormatsRoute, getApiServerAnnotationFormatsRouteHandler)
  .openapi(getApiServerPluginsRoute, getApiServerPluginsRouteHandler)
  .openapi(getApiServerShareRoute, getApiServerShareRouteHandler)
  .openapi(getApiTasksRoute, getApiTasksRouteHandler)
  .openapi(postApiTasksRoute, postApiTasksRouteHandler)
  .openapi(getApiTasksIdRoute, getApiTasksIdRouteHandler)
  .openapi(patchApiTasksIdRoute, patchApiTasksIdRouteHandler)
  .openapi(deleteApiTasksIdRoute, deleteApiTasksIdRouteHandler)
  .openapi(getApiTasksIdAnnotationsIndexRoute, getApiTasksIdAnnotationsIndexRouteHandler)
  .openapi(postApiTasksIdAnnotationsIndexRoute, postApiTasksIdAnnotationsIndexRouteHandler)
  .openapi(putApiTasksIdAnnotationsIndexRoute, putApiTasksIdAnnotationsIndexRouteHandler)
  .openapi(patchApiTasksIdAnnotationsIndexRoute, patchApiTasksIdAnnotationsIndexRouteHandler)
  .openapi(deleteApiTasksIdAnnotationsIndexRoute, deleteApiTasksIdAnnotationsIndexRouteHandler)
  .openapi(postApiTasksIdBackupExportRoute, postApiTasksIdBackupExportRouteHandler)
  .openapi(getApiTasksIdDataIndexRoute, getApiTasksIdDataIndexRouteHandler)
  .openapi(postApiTasksIdDataIndexRoute, postApiTasksIdDataIndexRouteHandler)
  .openapi(getApiTasksIdDataMetaRoute, getApiTasksIdDataMetaRouteHandler)
  .openapi(patchApiTasksIdDataMetaRoute, patchApiTasksIdDataMetaRouteHandler)
  .openapi(postApiTasksIdDatasetExportRoute, postApiTasksIdDatasetExportRouteHandler)
  .openapi(getApiTasksIdPreviewRoute, getApiTasksIdPreviewRouteHandler)
  .openapi(getApiTasksIdStatusRoute, getApiTasksIdStatusRouteHandler)
  .openapi(getApiTasksIdValidationLayoutRoute, getApiTasksIdValidationLayoutRouteHandler)
  .openapi(patchApiTasksIdValidationLayoutRoute, patchApiTasksIdValidationLayoutRouteHandler)
  .openapi(postApiTasksBackupIndexRoute, postApiTasksBackupIndexRouteHandler)
  .openapi(getApiUsersRoute, getApiUsersRouteHandler)
  .openapi(getApiUsersIdRoute, getApiUsersIdRouteHandler)
  .openapi(patchApiUsersIdRoute, patchApiUsersIdRouteHandler)
  .openapi(deleteApiUsersIdRoute, deleteApiUsersIdRouteHandler)
  .openapi(getApiUsersSelfRoute, getApiUsersSelfRouteHandler)
  .openapi(getApiWebhooksRoute, getApiWebhooksRouteHandler)
  .openapi(postApiWebhooksRoute, postApiWebhooksRouteHandler)
  .openapi(getApiWebhooksIdRoute, getApiWebhooksIdRouteHandler)
  .openapi(putApiWebhooksIdRoute, putApiWebhooksIdRouteHandler)
  .openapi(patchApiWebhooksIdRoute, patchApiWebhooksIdRouteHandler)
  .openapi(deleteApiWebhooksIdRoute, deleteApiWebhooksIdRouteHandler)
  .openapi(getApiWebhooksIdDeliveriesRoute, getApiWebhooksIdDeliveriesRouteHandler)
  .openapi(
    getApiWebhooksIdDeliveriesDeliveryIdRoute,
    getApiWebhooksIdDeliveriesDeliveryIdRouteHandler,
  )
  .openapi(
    postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRoute,
    postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRouteHandler,
  )
  .openapi(postApiWebhooksIdPingRoute, postApiWebhooksIdPingRouteHandler)
  .openapi(getApiWebhooksEventsRoute, getApiWebhooksEventsRouteHandler)

export default app
