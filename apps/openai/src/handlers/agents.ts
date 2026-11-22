import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsAgentIdRoute,
  deleteAgentsAutomationsAutomationIdRoute,
  deleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdRoute,
  deleteAgentsSessionsSessionIdArtifactsArtifactIdRoute,
  deleteAgentsSessionsSessionIdRoute,
  getAgentsAgentIdRoute,
  getAgentsAutomationsAutomationIdInvocationsInvocationIdRoute,
  getAgentsAutomationsAutomationIdInvocationsRoute,
  getAgentsAutomationsAutomationIdRoute,
  getAgentsAutomationsRoute,
  getAgentsEnvironmentsEnvironmentIdFilesRoute,
  getAgentsEnvironmentsEnvironmentIdRoute,
  getAgentsEnvironmentsRoute,
  getAgentsEnvironmentsTemplatesEnvironmentTemplateIdRoute,
  getAgentsEnvironmentsTemplatesRoute,
  getAgentsRoute,
  getAgentsSessionsRoute,
  getAgentsSessionsSessionIdArtifactsArtifactIdContentRoute,
  getAgentsSessionsSessionIdArtifactsArtifactIdRoute,
  getAgentsSessionsSessionIdArtifactsRoute,
  getAgentsSessionsSessionIdEventsRoute,
  getAgentsSessionsSessionIdItemsRoute,
  getAgentsSessionsSessionIdRoute,
  getAgentsSessionsSessionIdSubagentsRoute,
  getAgentsSessionsSessionIdSubagentsSubagentIdItemsRoute,
  getAgentsSessionsSessionIdSubagentsSubagentIdRoute,
  getAgentsSessionsSessionIdSubagentsSubagentIdTurnsRoute,
  getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsRoute,
  getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdRoute,
  getAgentsSessionsSessionIdTracesRoute,
  getAgentsSessionsSessionIdTurnsRoute,
  getAgentsSessionsSessionIdTurnsTurnIdItemsRoute,
  getAgentsSessionsSessionIdTurnsTurnIdRoute,
  postAgentsAgentIdRoute,
  postAgentsAutomationsAutomationIdInvocationsRoute,
  postAgentsAutomationsAutomationIdPauseRoute,
  postAgentsAutomationsAutomationIdResumeRoute,
  postAgentsAutomationsAutomationIdRoute,
  postAgentsAutomationsRoute,
  postAgentsEnvironmentsEnvironmentIdFilesRoute,
  postAgentsEnvironmentsRoute,
  postAgentsEnvironmentsTemplatesEnvironmentTemplateIdRoute,
  postAgentsEnvironmentsTemplatesRoute,
  postAgentsRoute,
  postAgentsSessionsRoute,
  postAgentsSessionsSessionIdEventsRoute,
  postAgentsSessionsSessionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(postAgentsAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsAutomationsAutomationIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsAutomationsAutomationIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsAutomationsAutomationIdInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsAutomationsAutomationIdInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsAutomationsAutomationIdInvocationsInvocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsEnvironmentsEnvironmentIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsEnvironmentsEnvironmentIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdSubagentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdSubagentsSubagentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdSubagentsSubagentIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdSubagentsSubagentIdTurnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdSubagentsSubagentIdTurnsTurnIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsEnvironmentsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsEnvironmentsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsEnvironmentsTemplatesEnvironmentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsEnvironmentsTemplatesEnvironmentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsEnvironmentsTemplatesEnvironmentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsSessionsSessionIdArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdArtifactsArtifactIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsSessionsSessionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdTurnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdTurnsTurnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsSessionIdTurnsTurnIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
