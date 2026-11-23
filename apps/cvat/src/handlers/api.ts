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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAssetsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthAccessTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAuthAccessTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAuthAccessTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthAccessTokensSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthPasswordChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthPasswordResetConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCloudstoragesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCloudstoragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCloudstoragesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdContentV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCloudstoragesIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConsensusMergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsensusSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsensusSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiConsensusSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEventsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGrowthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGrowthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGrowthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGuidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGuidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGuidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGuidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvitationsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiInvitationsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvitationsKeyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvitationsKeyDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvitationsKeyResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIssuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdDataMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJobsIdDataMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsIdDatasetExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdValidationLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJobsIdValidationLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaFunctionsFuncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLambdaFunctionsFuncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLambdaRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLambdaRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsIdBackupExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsIdDatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsIdDatasetExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProjectsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsBackupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQualityReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsIdConfusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsIdConfusionMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualitySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualitySettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiQualitySettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiQualitySettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualitySettingsRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQualitySettingsRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualitySettingsRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiQualitySettingsRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiQualitySettingsRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiQualitySettingsRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQualitySettingsRequirementsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRequestsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSchemaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerAnnotationFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksIdBackupExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdDataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksIdDataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdDataMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdDataMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksIdDatasetExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdValidationLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdValidationLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksBackupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksIdDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksIdDeliveriesDeliveryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
