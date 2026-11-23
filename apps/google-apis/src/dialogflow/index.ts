import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3beta1NameRoute,
  getV3beta1AgentTestCasesCalculateCoverageRoute,
  getV3beta1NameLocationsRoute,
  getV3beta1NameLookupEnvironmentHistoryRoute,
  getV3beta1NameOperationsRoute,
  getV3beta1NameRoute,
  getV3beta1ParentAgentsRoute,
  getV3beta1ParentChangelogsRoute,
  getV3beta1ParentContinuousTestResultsRoute,
  getV3beta1ParentDeploymentsRoute,
  getV3beta1ParentEntityTypesRoute,
  getV3beta1ParentEnvironmentsRoute,
  getV3beta1ParentExperimentsRoute,
  getV3beta1ParentFlowsRoute,
  getV3beta1ParentIntentsRoute,
  getV3beta1ParentPagesRoute,
  getV3beta1ParentResultsRoute,
  getV3beta1ParentSecuritySettingsRoute,
  getV3beta1ParentTestCasesRoute,
  getV3beta1ParentTransitionRouteGroupsRoute,
  getV3beta1ParentVersionsRoute,
  getV3beta1ParentWebhooksRoute,
  patchV3beta1NameRoute,
  postV3beta1BaseVersionCompareVersionsRoute,
  postV3beta1EnvironmentDeployFlowRoute,
  postV3beta1EnvironmentRunContinuousTestRoute,
  postV3beta1NameCancelRoute,
  postV3beta1NameExportRoute,
  postV3beta1NameLoadRoute,
  postV3beta1NameRestoreRoute,
  postV3beta1NameRunRoute,
  postV3beta1NameStartRoute,
  postV3beta1NameStopRoute,
  postV3beta1NameTrainRoute,
  postV3beta1NameValidateRoute,
  postV3beta1ParentAgentsRoute,
  postV3beta1ParentEntityTypesRoute,
  postV3beta1ParentEnvironmentsRoute,
  postV3beta1ParentExperimentsRoute,
  postV3beta1ParentFlowsImportRoute,
  postV3beta1ParentFlowsRoute,
  postV3beta1ParentIntentsRoute,
  postV3beta1ParentPagesRoute,
  postV3beta1ParentSecuritySettingsRoute,
  postV3beta1ParentTestCasesBatchDeleteRoute,
  postV3beta1ParentTestCasesBatchRunRoute,
  postV3beta1ParentTestCasesExportRoute,
  postV3beta1ParentTestCasesImportRoute,
  postV3beta1ParentTestCasesRoute,
  postV3beta1ParentTransitionRouteGroupsRoute,
  postV3beta1ParentVersionsRoute,
  postV3beta1ParentWebhooksRoute,
  postV3beta1SessionDetectIntentRoute,
  postV3beta1SessionFulfillIntentRoute,
  postV3beta1SessionMatchIntentRoute,
} from './routes'
import {
  deleteV3beta1NameRouteHandler,
  getV3beta1AgentTestCasesCalculateCoverageRouteHandler,
  getV3beta1NameLocationsRouteHandler,
  getV3beta1NameLookupEnvironmentHistoryRouteHandler,
  getV3beta1NameOperationsRouteHandler,
  getV3beta1NameRouteHandler,
  getV3beta1ParentAgentsRouteHandler,
  getV3beta1ParentChangelogsRouteHandler,
  getV3beta1ParentContinuousTestResultsRouteHandler,
  getV3beta1ParentDeploymentsRouteHandler,
  getV3beta1ParentEntityTypesRouteHandler,
  getV3beta1ParentEnvironmentsRouteHandler,
  getV3beta1ParentExperimentsRouteHandler,
  getV3beta1ParentFlowsRouteHandler,
  getV3beta1ParentIntentsRouteHandler,
  getV3beta1ParentPagesRouteHandler,
  getV3beta1ParentResultsRouteHandler,
  getV3beta1ParentSecuritySettingsRouteHandler,
  getV3beta1ParentTestCasesRouteHandler,
  getV3beta1ParentTransitionRouteGroupsRouteHandler,
  getV3beta1ParentVersionsRouteHandler,
  getV3beta1ParentWebhooksRouteHandler,
  patchV3beta1NameRouteHandler,
  postV3beta1BaseVersionCompareVersionsRouteHandler,
  postV3beta1EnvironmentDeployFlowRouteHandler,
  postV3beta1EnvironmentRunContinuousTestRouteHandler,
  postV3beta1NameCancelRouteHandler,
  postV3beta1NameExportRouteHandler,
  postV3beta1NameLoadRouteHandler,
  postV3beta1NameRestoreRouteHandler,
  postV3beta1NameRunRouteHandler,
  postV3beta1NameStartRouteHandler,
  postV3beta1NameStopRouteHandler,
  postV3beta1NameTrainRouteHandler,
  postV3beta1NameValidateRouteHandler,
  postV3beta1ParentAgentsRouteHandler,
  postV3beta1ParentEntityTypesRouteHandler,
  postV3beta1ParentEnvironmentsRouteHandler,
  postV3beta1ParentExperimentsRouteHandler,
  postV3beta1ParentFlowsImportRouteHandler,
  postV3beta1ParentFlowsRouteHandler,
  postV3beta1ParentIntentsRouteHandler,
  postV3beta1ParentPagesRouteHandler,
  postV3beta1ParentSecuritySettingsRouteHandler,
  postV3beta1ParentTestCasesBatchDeleteRouteHandler,
  postV3beta1ParentTestCasesBatchRunRouteHandler,
  postV3beta1ParentTestCasesExportRouteHandler,
  postV3beta1ParentTestCasesImportRouteHandler,
  postV3beta1ParentTestCasesRouteHandler,
  postV3beta1ParentTransitionRouteGroupsRouteHandler,
  postV3beta1ParentVersionsRouteHandler,
  postV3beta1ParentWebhooksRouteHandler,
  postV3beta1SessionDetectIntentRouteHandler,
  postV3beta1SessionFulfillIntentRouteHandler,
  postV3beta1SessionMatchIntentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV3beta1AgentTestCasesCalculateCoverageRoute,
    getV3beta1AgentTestCasesCalculateCoverageRouteHandler,
  )
  .openapi(
    postV3beta1BaseVersionCompareVersionsRoute,
    postV3beta1BaseVersionCompareVersionsRouteHandler,
  )
  .openapi(postV3beta1EnvironmentDeployFlowRoute, postV3beta1EnvironmentDeployFlowRouteHandler)
  .openapi(
    postV3beta1EnvironmentRunContinuousTestRoute,
    postV3beta1EnvironmentRunContinuousTestRouteHandler,
  )
  .openapi(deleteV3beta1NameRoute, deleteV3beta1NameRouteHandler)
  .openapi(getV3beta1NameRoute, getV3beta1NameRouteHandler)
  .openapi(patchV3beta1NameRoute, patchV3beta1NameRouteHandler)
  .openapi(getV3beta1NameLocationsRoute, getV3beta1NameLocationsRouteHandler)
  .openapi(getV3beta1NameOperationsRoute, getV3beta1NameOperationsRouteHandler)
  .openapi(postV3beta1NameCancelRoute, postV3beta1NameCancelRouteHandler)
  .openapi(postV3beta1NameExportRoute, postV3beta1NameExportRouteHandler)
  .openapi(postV3beta1NameLoadRoute, postV3beta1NameLoadRouteHandler)
  .openapi(
    getV3beta1NameLookupEnvironmentHistoryRoute,
    getV3beta1NameLookupEnvironmentHistoryRouteHandler,
  )
  .openapi(postV3beta1NameRestoreRoute, postV3beta1NameRestoreRouteHandler)
  .openapi(postV3beta1NameRunRoute, postV3beta1NameRunRouteHandler)
  .openapi(postV3beta1NameStartRoute, postV3beta1NameStartRouteHandler)
  .openapi(postV3beta1NameStopRoute, postV3beta1NameStopRouteHandler)
  .openapi(postV3beta1NameTrainRoute, postV3beta1NameTrainRouteHandler)
  .openapi(postV3beta1NameValidateRoute, postV3beta1NameValidateRouteHandler)
  .openapi(getV3beta1ParentAgentsRoute, getV3beta1ParentAgentsRouteHandler)
  .openapi(postV3beta1ParentAgentsRoute, postV3beta1ParentAgentsRouteHandler)
  .openapi(getV3beta1ParentChangelogsRoute, getV3beta1ParentChangelogsRouteHandler)
  .openapi(
    getV3beta1ParentContinuousTestResultsRoute,
    getV3beta1ParentContinuousTestResultsRouteHandler,
  )
  .openapi(getV3beta1ParentDeploymentsRoute, getV3beta1ParentDeploymentsRouteHandler)
  .openapi(getV3beta1ParentEntityTypesRoute, getV3beta1ParentEntityTypesRouteHandler)
  .openapi(postV3beta1ParentEntityTypesRoute, postV3beta1ParentEntityTypesRouteHandler)
  .openapi(getV3beta1ParentEnvironmentsRoute, getV3beta1ParentEnvironmentsRouteHandler)
  .openapi(postV3beta1ParentEnvironmentsRoute, postV3beta1ParentEnvironmentsRouteHandler)
  .openapi(getV3beta1ParentExperimentsRoute, getV3beta1ParentExperimentsRouteHandler)
  .openapi(postV3beta1ParentExperimentsRoute, postV3beta1ParentExperimentsRouteHandler)
  .openapi(getV3beta1ParentFlowsRoute, getV3beta1ParentFlowsRouteHandler)
  .openapi(postV3beta1ParentFlowsRoute, postV3beta1ParentFlowsRouteHandler)
  .openapi(postV3beta1ParentFlowsImportRoute, postV3beta1ParentFlowsImportRouteHandler)
  .openapi(getV3beta1ParentIntentsRoute, getV3beta1ParentIntentsRouteHandler)
  .openapi(postV3beta1ParentIntentsRoute, postV3beta1ParentIntentsRouteHandler)
  .openapi(getV3beta1ParentPagesRoute, getV3beta1ParentPagesRouteHandler)
  .openapi(postV3beta1ParentPagesRoute, postV3beta1ParentPagesRouteHandler)
  .openapi(getV3beta1ParentResultsRoute, getV3beta1ParentResultsRouteHandler)
  .openapi(getV3beta1ParentSecuritySettingsRoute, getV3beta1ParentSecuritySettingsRouteHandler)
  .openapi(postV3beta1ParentSecuritySettingsRoute, postV3beta1ParentSecuritySettingsRouteHandler)
  .openapi(getV3beta1ParentTestCasesRoute, getV3beta1ParentTestCasesRouteHandler)
  .openapi(postV3beta1ParentTestCasesRoute, postV3beta1ParentTestCasesRouteHandler)
  .openapi(
    postV3beta1ParentTestCasesBatchDeleteRoute,
    postV3beta1ParentTestCasesBatchDeleteRouteHandler,
  )
  .openapi(postV3beta1ParentTestCasesBatchRunRoute, postV3beta1ParentTestCasesBatchRunRouteHandler)
  .openapi(postV3beta1ParentTestCasesExportRoute, postV3beta1ParentTestCasesExportRouteHandler)
  .openapi(postV3beta1ParentTestCasesImportRoute, postV3beta1ParentTestCasesImportRouteHandler)
  .openapi(
    getV3beta1ParentTransitionRouteGroupsRoute,
    getV3beta1ParentTransitionRouteGroupsRouteHandler,
  )
  .openapi(
    postV3beta1ParentTransitionRouteGroupsRoute,
    postV3beta1ParentTransitionRouteGroupsRouteHandler,
  )
  .openapi(getV3beta1ParentVersionsRoute, getV3beta1ParentVersionsRouteHandler)
  .openapi(postV3beta1ParentVersionsRoute, postV3beta1ParentVersionsRouteHandler)
  .openapi(getV3beta1ParentWebhooksRoute, getV3beta1ParentWebhooksRouteHandler)
  .openapi(postV3beta1ParentWebhooksRoute, postV3beta1ParentWebhooksRouteHandler)
  .openapi(postV3beta1SessionDetectIntentRoute, postV3beta1SessionDetectIntentRouteHandler)
  .openapi(postV3beta1SessionFulfillIntentRoute, postV3beta1SessionFulfillIntentRouteHandler)
  .openapi(postV3beta1SessionMatchIntentRoute, postV3beta1SessionMatchIntentRouteHandler)

export default app
