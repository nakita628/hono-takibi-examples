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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV3beta1AgentTestCasesCalculateCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1BaseVersionCompareVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1EnvironmentDeployFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1EnvironmentRunContinuousTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameLoadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1NameLookupEnvironmentHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentChangelogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentContinuousTestResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentEntityTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentEntityTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentFlowsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentTestCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentTestCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentTestCasesBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentTestCasesBatchRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentTestCasesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentTestCasesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentTransitionRouteGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentTransitionRouteGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1SessionDetectIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1SessionFulfillIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1SessionMatchIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
