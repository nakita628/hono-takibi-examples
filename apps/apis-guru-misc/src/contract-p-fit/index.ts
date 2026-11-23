import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthApiKeyKeyRoute,
  deleteConnectionsConnectionIdRoute,
  deleteDataRetentionSettingsLevelIdRoute,
  deleteDocumentsDocumentIdRoute,
  deleteFormatsFormatIdRoute,
  deleteInboxesInboxIdDocumentsRoute,
  deleteInboxesInboxIdRoute,
  deleteIntegrationsIntegrationIdRoute,
  deletePredictorSettingsScopeRoute,
  deleteProjectsProjectIdRoute,
  deleteReportsReportIdRoute,
  deleteRolesRoleIdRoute,
  deleteRuleConfigScopeRoute,
  deleteSamplingSettingsScopeRoute,
  deleteSsoConfigSsoConfigIdRoute,
  deleteTenantRoute,
  deleteThresholdSettingsScopeRoute,
  deleteUsersUserIdRoute,
  getAboutReleaseNotesRoute,
  getAboutVersionRoute,
  getAuthApiKeyInboxInboxIdRoute,
  getAuthApiKeyKeyRoute,
  getAuthApiKeyRoute,
  getConnectionsConnectionIdRoute,
  getConnectionsRoute,
  getDataRetentionSettingsLevelIdRoute,
  getDataRetentionSettingsRoute,
  getDocumentsDocumentIdCustomOutputRoute,
  getDocumentsDocumentIdLastVersionRoute,
  getDocumentsDocumentIdOriginalFileRoute,
  getDocumentsDocumentIdPagePageRangeRoute,
  getDocumentsDocumentIdPageThumbnailPageRangeRoute,
  getDocumentsDocumentIdReversePageRangeRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsDocumentIdTextRoute,
  getDocumentsDocumentIdWorkflowRoute,
  getFormatsDocumentTypesRoute,
  getFormatsFormatIdRoute,
  getFormatsRoute,
  getFormatsScopeTagFieldsRoute,
  getInboxesInboxIdDocumentsRoute,
  getInboxesInboxIdDocumentVersionsRoute,
  getInboxesInboxIdPaginatedRoute,
  getInboxesInboxIdRoute,
  getInboxesRoute,
  getIntegrationsIndexRoute,
  getIntegrationsIntegrationIdActivateRoute,
  getIntegrationsIntegrationIdRoute,
  getPredictorSettingsRoute,
  getPredictorSettingsScopeRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  getReportsReportIdRoute,
  getReportsRoute,
  getRolesRoleIdRoute,
  getRolesRoute,
  getRuleConfigRoute,
  getRuleConfigScopeRoute,
  getSamplingSettingsRoute,
  getSamplingSettingsScopeRoute,
  getSettingsDashboardRoute,
  getSettingsReviewRoute,
  getSsoConfigRoute,
  getStatsInboxIdAutomationBlockersRoute,
  getStatsInboxIdEvaluatedVersionsRoute,
  getStatsInboxIdProcessingRoute,
  getStatsInboxIdRoute,
  getStatsInboxIdVolumeRoute,
  getStatsScopeAccuracyRoute,
  getStatsScopeStpRoute,
  getStatsUsageRoute,
  getStyleCustomCssRoute,
  getStyleLogoPngRoute,
  getThresholdSettingsRoute,
  getThresholdSettingsScopeRoute,
  getUsersMeRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  patchAuthApiKeyKeyRoute,
  patchConnectionsConnectionIdRoute,
  patchDataRetentionSettingsLevelIdRoute,
  patchDocumentsInboxIdCopyInboxRoute,
  patchDocumentsInboxIdMoveInboxRoute,
  patchFormatsFormatIdRoute,
  patchInboxesInboxIdRoute,
  patchIntegrationsIntegrationIdRoute,
  patchPredictorSettingsScopeRoute,
  patchProjectsProjectIdRoute,
  patchReportsReportIdRoute,
  patchRolesRoleIdRoute,
  patchRuleConfigScopeRoute,
  patchSamplingSettingsScopeRoute,
  patchSettingsDashboardRoute,
  patchSettingsReviewRoute,
  patchTenantActivateRoute,
  patchThresholdSettingsScopeRoute,
  patchUsersUserIdRoute,
  postAuthApiKeyInboxInboxIdRoute,
  postAuthApiKeyRoute,
  postAuthEphemeralRoute,
  postAuthGetJWTRoute,
  postAuthResetPasswordRoute,
  postAuthRoute,
  postAuthTokenRoute,
  postConnectionsRoute,
  postDocumentsCustomOutputRoute,
  postDocumentsDocumentIdCompareVersionsRoute,
  postDocumentsDocumentIdFeedbackRoute,
  postDocumentsDocumentIdProcessTableAnnotationRoute,
  postDocumentsDocumentIdReprocessRoute,
  postDocumentsDocumentIdStatusDataRoute,
  postDocumentsEnrichRoute,
  postDocumentsFileQueryDataTypeRoute,
  postDocumentsInboxIdRoute,
  postDocumentsIndexRoute,
  postDocumentsQueryQueryTypeRoute,
  postFormatsRoute,
  postInboxesInboxIdReprocessRoute,
  postInboxesRoute,
  postIntegrationsIndexRoute,
  postProjectsRoute,
  postReportsGenerateRoute,
  postReportsReportIdGenerateRoute,
  postReportsRoute,
  postRolesRoute,
  postRuleConfigRuleEntityDocumentIdRoute,
  postRuleConfigRuleEntityIndexRoute,
  postRuleConfigWhereToSearchDocumentIdRoute,
  postSsoConfigRoute,
  postSsoLoginRoute,
  postStatsInboxIdBlueDotsRoute,
  postStyleCustomCssRoute,
  postStyleLogoPngRoute,
  postUsersMeChangePasswordRoute,
  postUsersRoute,
} from './routes'
import {
  deleteAuthApiKeyKeyRouteHandler,
  deleteConnectionsConnectionIdRouteHandler,
  deleteDataRetentionSettingsLevelIdRouteHandler,
  deleteDocumentsDocumentIdRouteHandler,
  deleteFormatsFormatIdRouteHandler,
  deleteInboxesInboxIdDocumentsRouteHandler,
  deleteInboxesInboxIdRouteHandler,
  deleteIntegrationsIntegrationIdRouteHandler,
  deletePredictorSettingsScopeRouteHandler,
  deleteProjectsProjectIdRouteHandler,
  deleteReportsReportIdRouteHandler,
  deleteRolesRoleIdRouteHandler,
  deleteRuleConfigScopeRouteHandler,
  deleteSamplingSettingsScopeRouteHandler,
  deleteSsoConfigSsoConfigIdRouteHandler,
  deleteTenantRouteHandler,
  deleteThresholdSettingsScopeRouteHandler,
  deleteUsersUserIdRouteHandler,
  getAboutReleaseNotesRouteHandler,
  getAboutVersionRouteHandler,
  getAuthApiKeyInboxInboxIdRouteHandler,
  getAuthApiKeyKeyRouteHandler,
  getAuthApiKeyRouteHandler,
  getConnectionsConnectionIdRouteHandler,
  getConnectionsRouteHandler,
  getDataRetentionSettingsLevelIdRouteHandler,
  getDataRetentionSettingsRouteHandler,
  getDocumentsDocumentIdCustomOutputRouteHandler,
  getDocumentsDocumentIdLastVersionRouteHandler,
  getDocumentsDocumentIdOriginalFileRouteHandler,
  getDocumentsDocumentIdPagePageRangeRouteHandler,
  getDocumentsDocumentIdPageThumbnailPageRangeRouteHandler,
  getDocumentsDocumentIdReversePageRangeRouteHandler,
  getDocumentsDocumentIdRouteHandler,
  getDocumentsDocumentIdTextRouteHandler,
  getDocumentsDocumentIdWorkflowRouteHandler,
  getFormatsDocumentTypesRouteHandler,
  getFormatsFormatIdRouteHandler,
  getFormatsRouteHandler,
  getFormatsScopeTagFieldsRouteHandler,
  getInboxesInboxIdDocumentsRouteHandler,
  getInboxesInboxIdDocumentVersionsRouteHandler,
  getInboxesInboxIdPaginatedRouteHandler,
  getInboxesInboxIdRouteHandler,
  getInboxesRouteHandler,
  getIntegrationsIndexRouteHandler,
  getIntegrationsIntegrationIdActivateRouteHandler,
  getIntegrationsIntegrationIdRouteHandler,
  getPredictorSettingsRouteHandler,
  getPredictorSettingsScopeRouteHandler,
  getProjectsProjectIdRouteHandler,
  getProjectsRouteHandler,
  getReportsReportIdRouteHandler,
  getReportsRouteHandler,
  getRolesRoleIdRouteHandler,
  getRolesRouteHandler,
  getRuleConfigRouteHandler,
  getRuleConfigScopeRouteHandler,
  getSamplingSettingsRouteHandler,
  getSamplingSettingsScopeRouteHandler,
  getSettingsDashboardRouteHandler,
  getSettingsReviewRouteHandler,
  getSsoConfigRouteHandler,
  getStatsInboxIdAutomationBlockersRouteHandler,
  getStatsInboxIdEvaluatedVersionsRouteHandler,
  getStatsInboxIdProcessingRouteHandler,
  getStatsInboxIdRouteHandler,
  getStatsInboxIdVolumeRouteHandler,
  getStatsScopeAccuracyRouteHandler,
  getStatsScopeStpRouteHandler,
  getStatsUsageRouteHandler,
  getStyleCustomCssRouteHandler,
  getStyleLogoPngRouteHandler,
  getThresholdSettingsRouteHandler,
  getThresholdSettingsScopeRouteHandler,
  getUsersMeRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdRouteHandler,
  patchAuthApiKeyKeyRouteHandler,
  patchConnectionsConnectionIdRouteHandler,
  patchDataRetentionSettingsLevelIdRouteHandler,
  patchDocumentsInboxIdCopyInboxRouteHandler,
  patchDocumentsInboxIdMoveInboxRouteHandler,
  patchFormatsFormatIdRouteHandler,
  patchInboxesInboxIdRouteHandler,
  patchIntegrationsIntegrationIdRouteHandler,
  patchPredictorSettingsScopeRouteHandler,
  patchProjectsProjectIdRouteHandler,
  patchReportsReportIdRouteHandler,
  patchRolesRoleIdRouteHandler,
  patchRuleConfigScopeRouteHandler,
  patchSamplingSettingsScopeRouteHandler,
  patchSettingsDashboardRouteHandler,
  patchSettingsReviewRouteHandler,
  patchTenantActivateRouteHandler,
  patchThresholdSettingsScopeRouteHandler,
  patchUsersUserIdRouteHandler,
  postAuthApiKeyInboxInboxIdRouteHandler,
  postAuthApiKeyRouteHandler,
  postAuthEphemeralRouteHandler,
  postAuthGetJWTRouteHandler,
  postAuthResetPasswordRouteHandler,
  postAuthRouteHandler,
  postAuthTokenRouteHandler,
  postConnectionsRouteHandler,
  postDocumentsCustomOutputRouteHandler,
  postDocumentsDocumentIdCompareVersionsRouteHandler,
  postDocumentsDocumentIdFeedbackRouteHandler,
  postDocumentsDocumentIdProcessTableAnnotationRouteHandler,
  postDocumentsDocumentIdReprocessRouteHandler,
  postDocumentsDocumentIdStatusDataRouteHandler,
  postDocumentsEnrichRouteHandler,
  postDocumentsFileQueryDataTypeRouteHandler,
  postDocumentsInboxIdRouteHandler,
  postDocumentsIndexRouteHandler,
  postDocumentsQueryQueryTypeRouteHandler,
  postFormatsRouteHandler,
  postInboxesInboxIdReprocessRouteHandler,
  postInboxesRouteHandler,
  postIntegrationsIndexRouteHandler,
  postProjectsRouteHandler,
  postReportsGenerateRouteHandler,
  postReportsReportIdGenerateRouteHandler,
  postReportsRouteHandler,
  postRolesRouteHandler,
  postRuleConfigRuleEntityDocumentIdRouteHandler,
  postRuleConfigRuleEntityIndexRouteHandler,
  postRuleConfigWhereToSearchDocumentIdRouteHandler,
  postSsoConfigRouteHandler,
  postSsoLoginRouteHandler,
  postStatsInboxIdBlueDotsRouteHandler,
  postStyleCustomCssRouteHandler,
  postStyleLogoPngRouteHandler,
  postUsersMeChangePasswordRouteHandler,
  postUsersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAboutReleaseNotesRoute, getAboutReleaseNotesRouteHandler)
  .openapi(getAboutVersionRoute, getAboutVersionRouteHandler)
  .openapi(postAuthRoute, postAuthRouteHandler)
  .openapi(getAuthApiKeyRoute, getAuthApiKeyRouteHandler)
  .openapi(postAuthApiKeyRoute, postAuthApiKeyRouteHandler)
  .openapi(getAuthApiKeyInboxInboxIdRoute, getAuthApiKeyInboxInboxIdRouteHandler)
  .openapi(postAuthApiKeyInboxInboxIdRoute, postAuthApiKeyInboxInboxIdRouteHandler)
  .openapi(deleteAuthApiKeyKeyRoute, deleteAuthApiKeyKeyRouteHandler)
  .openapi(getAuthApiKeyKeyRoute, getAuthApiKeyKeyRouteHandler)
  .openapi(patchAuthApiKeyKeyRoute, patchAuthApiKeyKeyRouteHandler)
  .openapi(postAuthEphemeralRoute, postAuthEphemeralRouteHandler)
  .openapi(postAuthGetJWTRoute, postAuthGetJWTRouteHandler)
  .openapi(postAuthResetPasswordRoute, postAuthResetPasswordRouteHandler)
  .openapi(postAuthTokenRoute, postAuthTokenRouteHandler)
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(postConnectionsRoute, postConnectionsRouteHandler)
  .openapi(deleteConnectionsConnectionIdRoute, deleteConnectionsConnectionIdRouteHandler)
  .openapi(getConnectionsConnectionIdRoute, getConnectionsConnectionIdRouteHandler)
  .openapi(patchConnectionsConnectionIdRoute, patchConnectionsConnectionIdRouteHandler)
  .openapi(getDataRetentionSettingsRoute, getDataRetentionSettingsRouteHandler)
  .openapi(deleteDataRetentionSettingsLevelIdRoute, deleteDataRetentionSettingsLevelIdRouteHandler)
  .openapi(getDataRetentionSettingsLevelIdRoute, getDataRetentionSettingsLevelIdRouteHandler)
  .openapi(patchDataRetentionSettingsLevelIdRoute, patchDataRetentionSettingsLevelIdRouteHandler)
  .openapi(postDocumentsIndexRoute, postDocumentsIndexRouteHandler)
  .openapi(postDocumentsCustomOutputRoute, postDocumentsCustomOutputRouteHandler)
  .openapi(postDocumentsEnrichRoute, postDocumentsEnrichRouteHandler)
  .openapi(postDocumentsFileQueryDataTypeRoute, postDocumentsFileQueryDataTypeRouteHandler)
  .openapi(postDocumentsQueryQueryTypeRoute, postDocumentsQueryQueryTypeRouteHandler)
  .openapi(deleteDocumentsDocumentIdRoute, deleteDocumentsDocumentIdRouteHandler)
  .openapi(getDocumentsDocumentIdRoute, getDocumentsDocumentIdRouteHandler)
  .openapi(
    postDocumentsDocumentIdCompareVersionsRoute,
    postDocumentsDocumentIdCompareVersionsRouteHandler,
  )
  .openapi(getDocumentsDocumentIdCustomOutputRoute, getDocumentsDocumentIdCustomOutputRouteHandler)
  .openapi(postDocumentsDocumentIdFeedbackRoute, postDocumentsDocumentIdFeedbackRouteHandler)
  .openapi(getDocumentsDocumentIdLastVersionRoute, getDocumentsDocumentIdLastVersionRouteHandler)
  .openapi(getDocumentsDocumentIdOriginalFileRoute, getDocumentsDocumentIdOriginalFileRouteHandler)
  .openapi(
    getDocumentsDocumentIdPagePageRangeRoute,
    getDocumentsDocumentIdPagePageRangeRouteHandler,
  )
  .openapi(
    getDocumentsDocumentIdPageThumbnailPageRangeRoute,
    getDocumentsDocumentIdPageThumbnailPageRangeRouteHandler,
  )
  .openapi(
    postDocumentsDocumentIdProcessTableAnnotationRoute,
    postDocumentsDocumentIdProcessTableAnnotationRouteHandler,
  )
  .openapi(postDocumentsDocumentIdReprocessRoute, postDocumentsDocumentIdReprocessRouteHandler)
  .openapi(
    getDocumentsDocumentIdReversePageRangeRoute,
    getDocumentsDocumentIdReversePageRangeRouteHandler,
  )
  .openapi(postDocumentsDocumentIdStatusDataRoute, postDocumentsDocumentIdStatusDataRouteHandler)
  .openapi(getDocumentsDocumentIdTextRoute, getDocumentsDocumentIdTextRouteHandler)
  .openapi(getDocumentsDocumentIdWorkflowRoute, getDocumentsDocumentIdWorkflowRouteHandler)
  .openapi(postDocumentsInboxIdRoute, postDocumentsInboxIdRouteHandler)
  .openapi(patchDocumentsInboxIdCopyInboxRoute, patchDocumentsInboxIdCopyInboxRouteHandler)
  .openapi(patchDocumentsInboxIdMoveInboxRoute, patchDocumentsInboxIdMoveInboxRouteHandler)
  .openapi(getFormatsRoute, getFormatsRouteHandler)
  .openapi(postFormatsRoute, postFormatsRouteHandler)
  .openapi(getFormatsDocumentTypesRoute, getFormatsDocumentTypesRouteHandler)
  .openapi(deleteFormatsFormatIdRoute, deleteFormatsFormatIdRouteHandler)
  .openapi(getFormatsFormatIdRoute, getFormatsFormatIdRouteHandler)
  .openapi(patchFormatsFormatIdRoute, patchFormatsFormatIdRouteHandler)
  .openapi(getFormatsScopeTagFieldsRoute, getFormatsScopeTagFieldsRouteHandler)
  .openapi(getInboxesRoute, getInboxesRouteHandler)
  .openapi(postInboxesRoute, postInboxesRouteHandler)
  .openapi(deleteInboxesInboxIdRoute, deleteInboxesInboxIdRouteHandler)
  .openapi(getInboxesInboxIdRoute, getInboxesInboxIdRouteHandler)
  .openapi(patchInboxesInboxIdRoute, patchInboxesInboxIdRouteHandler)
  .openapi(getInboxesInboxIdDocumentVersionsRoute, getInboxesInboxIdDocumentVersionsRouteHandler)
  .openapi(deleteInboxesInboxIdDocumentsRoute, deleteInboxesInboxIdDocumentsRouteHandler)
  .openapi(getInboxesInboxIdDocumentsRoute, getInboxesInboxIdDocumentsRouteHandler)
  .openapi(getInboxesInboxIdPaginatedRoute, getInboxesInboxIdPaginatedRouteHandler)
  .openapi(postInboxesInboxIdReprocessRoute, postInboxesInboxIdReprocessRouteHandler)
  .openapi(getIntegrationsIndexRoute, getIntegrationsIndexRouteHandler)
  .openapi(postIntegrationsIndexRoute, postIntegrationsIndexRouteHandler)
  .openapi(deleteIntegrationsIntegrationIdRoute, deleteIntegrationsIntegrationIdRouteHandler)
  .openapi(getIntegrationsIntegrationIdRoute, getIntegrationsIntegrationIdRouteHandler)
  .openapi(patchIntegrationsIntegrationIdRoute, patchIntegrationsIntegrationIdRouteHandler)
  .openapi(
    getIntegrationsIntegrationIdActivateRoute,
    getIntegrationsIntegrationIdActivateRouteHandler,
  )
  .openapi(getPredictorSettingsRoute, getPredictorSettingsRouteHandler)
  .openapi(deletePredictorSettingsScopeRoute, deletePredictorSettingsScopeRouteHandler)
  .openapi(getPredictorSettingsScopeRoute, getPredictorSettingsScopeRouteHandler)
  .openapi(patchPredictorSettingsScopeRoute, patchPredictorSettingsScopeRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(deleteProjectsProjectIdRoute, deleteProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(patchProjectsProjectIdRoute, patchProjectsProjectIdRouteHandler)
  .openapi(getReportsRoute, getReportsRouteHandler)
  .openapi(postReportsRoute, postReportsRouteHandler)
  .openapi(postReportsGenerateRoute, postReportsGenerateRouteHandler)
  .openapi(deleteReportsReportIdRoute, deleteReportsReportIdRouteHandler)
  .openapi(getReportsReportIdRoute, getReportsReportIdRouteHandler)
  .openapi(patchReportsReportIdRoute, patchReportsReportIdRouteHandler)
  .openapi(postReportsReportIdGenerateRoute, postReportsReportIdGenerateRouteHandler)
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(postRolesRoute, postRolesRouteHandler)
  .openapi(deleteRolesRoleIdRoute, deleteRolesRoleIdRouteHandler)
  .openapi(getRolesRoleIdRoute, getRolesRoleIdRouteHandler)
  .openapi(patchRolesRoleIdRoute, patchRolesRoleIdRouteHandler)
  .openapi(getRuleConfigRoute, getRuleConfigRouteHandler)
  .openapi(postRuleConfigRuleEntityIndexRoute, postRuleConfigRuleEntityIndexRouteHandler)
  .openapi(postRuleConfigRuleEntityDocumentIdRoute, postRuleConfigRuleEntityDocumentIdRouteHandler)
  .openapi(
    postRuleConfigWhereToSearchDocumentIdRoute,
    postRuleConfigWhereToSearchDocumentIdRouteHandler,
  )
  .openapi(deleteRuleConfigScopeRoute, deleteRuleConfigScopeRouteHandler)
  .openapi(getRuleConfigScopeRoute, getRuleConfigScopeRouteHandler)
  .openapi(patchRuleConfigScopeRoute, patchRuleConfigScopeRouteHandler)
  .openapi(getSamplingSettingsRoute, getSamplingSettingsRouteHandler)
  .openapi(deleteSamplingSettingsScopeRoute, deleteSamplingSettingsScopeRouteHandler)
  .openapi(getSamplingSettingsScopeRoute, getSamplingSettingsScopeRouteHandler)
  .openapi(patchSamplingSettingsScopeRoute, patchSamplingSettingsScopeRouteHandler)
  .openapi(getSettingsDashboardRoute, getSettingsDashboardRouteHandler)
  .openapi(patchSettingsDashboardRoute, patchSettingsDashboardRouteHandler)
  .openapi(getSettingsReviewRoute, getSettingsReviewRouteHandler)
  .openapi(patchSettingsReviewRoute, patchSettingsReviewRouteHandler)
  .openapi(getSsoConfigRoute, getSsoConfigRouteHandler)
  .openapi(postSsoConfigRoute, postSsoConfigRouteHandler)
  .openapi(deleteSsoConfigSsoConfigIdRoute, deleteSsoConfigSsoConfigIdRouteHandler)
  .openapi(postSsoLoginRoute, postSsoLoginRouteHandler)
  .openapi(getStatsUsageRoute, getStatsUsageRouteHandler)
  .openapi(getStatsInboxIdRoute, getStatsInboxIdRouteHandler)
  .openapi(getStatsInboxIdAutomationBlockersRoute, getStatsInboxIdAutomationBlockersRouteHandler)
  .openapi(postStatsInboxIdBlueDotsRoute, postStatsInboxIdBlueDotsRouteHandler)
  .openapi(getStatsInboxIdEvaluatedVersionsRoute, getStatsInboxIdEvaluatedVersionsRouteHandler)
  .openapi(getStatsInboxIdProcessingRoute, getStatsInboxIdProcessingRouteHandler)
  .openapi(getStatsInboxIdVolumeRoute, getStatsInboxIdVolumeRouteHandler)
  .openapi(getStatsScopeAccuracyRoute, getStatsScopeAccuracyRouteHandler)
  .openapi(getStatsScopeStpRoute, getStatsScopeStpRouteHandler)
  .openapi(getStyleCustomCssRoute, getStyleCustomCssRouteHandler)
  .openapi(postStyleCustomCssRoute, postStyleCustomCssRouteHandler)
  .openapi(getStyleLogoPngRoute, getStyleLogoPngRouteHandler)
  .openapi(postStyleLogoPngRoute, postStyleLogoPngRouteHandler)
  .openapi(deleteTenantRoute, deleteTenantRouteHandler)
  .openapi(patchTenantActivateRoute, patchTenantActivateRouteHandler)
  .openapi(getThresholdSettingsRoute, getThresholdSettingsRouteHandler)
  .openapi(deleteThresholdSettingsScopeRoute, deleteThresholdSettingsScopeRouteHandler)
  .openapi(getThresholdSettingsScopeRoute, getThresholdSettingsScopeRouteHandler)
  .openapi(patchThresholdSettingsScopeRoute, patchThresholdSettingsScopeRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(postUsersMeChangePasswordRoute, postUsersMeChangePasswordRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdRoute, patchUsersUserIdRouteHandler)

export default app
