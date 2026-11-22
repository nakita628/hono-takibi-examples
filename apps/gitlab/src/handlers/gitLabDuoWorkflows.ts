import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AiDuoWorkflowsCodeReviewCustomInstructionsRoute,
  getApiV4AiDuoWorkflowsListToolsRoute,
  getApiV4AiDuoWorkflowsWorkflowsAgentPrivilegesRoute,
  getApiV4AiDuoWorkflowsWorkflowsIdCatalogItemsRoute,
  getApiV4AiDuoWorkflowsWorkflowsIdCheckpointsByThreadTsRoute,
  getApiV4AiDuoWorkflowsWorkflowsIdCheckpointsCheckpointIdRoute,
  getApiV4AiDuoWorkflowsWorkflowsIdCheckpointsRoute,
  getApiV4AiDuoWorkflowsWorkflowsIdEventsRoute,
  getApiV4AiDuoWorkflowsWorkflowsIdRoute,
  getApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesCapsuleIdDownloadRoute,
  getApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesRoute,
  getApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesFileIdRawRoute,
  getApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesFileIdRoute,
  getApiV4AiDuoWorkflowsWorkflowsWorkflowIdTraceJsonlRoute,
  getApiV4AiDuoWorkflowsWsRoute,
  patchApiV4AiDuoWorkflowsWorkflowsIdRoute,
  postApiV4AiDuoWorkflowsAgentWorkflowsRoute,
  postApiV4AiDuoWorkflowsCodeReviewAddCommentsRoute,
  postApiV4AiDuoWorkflowsDirectAccessRoute,
  postApiV4AiDuoWorkflowsRevokeTokenRoute,
  postApiV4AiDuoWorkflowsToolsRiskAssessmentResultsRoute,
  postApiV4AiDuoWorkflowsWorkflowsIdAuditEventsRoute,
  postApiV4AiDuoWorkflowsWorkflowsIdCheckpointsRoute,
  postApiV4AiDuoWorkflowsWorkflowsIdCheckpointWritesBatchRoute,
  postApiV4AiDuoWorkflowsWorkflowsIdEventsRoute,
  postApiV4AiDuoWorkflowsWorkflowsRoute,
  postApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesAuthorizeRoute,
  postApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesRoute,
  postApiV4AiDuoWorkflowsWorkflowsWorkflowIdExecuteRoute,
  postApiV4AiDuoWorkflowsWorkflowsWorkflowIdRestartRoute,
  postApiV4AiDuoWorkflowsWorkflowsWorkflowIdResumeRoute,
  postApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesAuthorizeRoute,
  postApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidSuggestedReviewersRoute,
  putApiV4AiDuoWorkflowsWorkflowsIdEventsEventIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gitLabDuoWorkflowsHandler = app
  .openapi(postApiV4AiDuoWorkflowsWorkflowsIdAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsToolsRiskAssessmentResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsCodeReviewAddCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsCodeReviewCustomInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsAgentWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsWorkflowIdCapsulesCapsuleIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsRevokeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4AiDuoWorkflowsWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsIdCatalogItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsIdCheckpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsIdCheckpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsIdCheckpointsByThreadTsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsIdCheckpointsCheckpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsIdCheckpointWritesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AiDuoWorkflowsWorkflowsIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsDirectAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsListToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsWorkflowIdTraceJsonlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsAgentPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsWorkflowIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AiDuoWorkflowsWorkflowsWorkflowIdSessionFilesFileIdRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsWorkflowIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiDuoWorkflowsWorkflowsWorkflowIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidSuggestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
