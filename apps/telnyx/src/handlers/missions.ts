import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
  deleteAiMissionsMissionIdMcpServersMcpServerIdRoute,
  deleteAiMissionsMissionIdRoute,
  deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentIdRoute,
  deleteAiMissionsMissionIdToolsToolIdRoute,
  getAiMissionsEventsRoute,
  getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
  getAiMissionsMissionIdKnowledgeBasesRoute,
  getAiMissionsMissionIdMcpServersMcpServerIdRoute,
  getAiMissionsMissionIdMcpServersRoute,
  getAiMissionsMissionIdRoute,
  getAiMissionsMissionIdRunsRoute,
  getAiMissionsMissionIdRunsRunIdEventsEventIdRoute,
  getAiMissionsMissionIdRunsRunIdEventsRoute,
  getAiMissionsMissionIdRunsRunIdPlanRoute,
  getAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute,
  getAiMissionsMissionIdRunsRunIdRoute,
  getAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute,
  getAiMissionsMissionIdToolsRoute,
  getAiMissionsMissionIdToolsToolIdRoute,
  getAiMissionsRoute,
  getAiMissionsRunsRoute,
  patchAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute,
  patchAiMissionsMissionIdRunsRunIdRoute,
  postAiMissionsMissionIdCloneRoute,
  postAiMissionsMissionIdKnowledgeBasesRoute,
  postAiMissionsMissionIdMcpServersRoute,
  postAiMissionsMissionIdRunsRoute,
  postAiMissionsMissionIdRunsRunIdCancelRoute,
  postAiMissionsMissionIdRunsRunIdEventsRoute,
  postAiMissionsMissionIdRunsRunIdPauseRoute,
  postAiMissionsMissionIdRunsRunIdPlanRoute,
  postAiMissionsMissionIdRunsRunIdPlanStepsRoute,
  postAiMissionsMissionIdRunsRunIdResumeRoute,
  postAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute,
  postAiMissionsMissionIdToolsRoute,
  postAiMissionsRoute,
  putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute,
  putAiMissionsMissionIdMcpServersMcpServerIdRoute,
  putAiMissionsMissionIdRoute,
  putAiMissionsMissionIdToolsToolIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const missionsHandler = app
  .openapi(getAiMissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMissionsMissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiMissionsMissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdKnowledgeBasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdKnowledgeBasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiMissionsMissionIdKnowledgeBasesKnowledgeBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMissionsMissionIdMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiMissionsMissionIdMcpServersMcpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiMissionsMissionIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdRunsRunIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdRunsRunIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdRunsRunIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdRunsRunIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdRunsRunIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdRunsRunIdPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdRunsRunIdPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdRunsRunIdPlanStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiMissionsMissionIdRunsRunIdPlanStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdRunsRunIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdRunsRunIdTelnyxAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMissionsMissionIdRunsRunIdTelnyxAgentsTelnyxAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiMissionsMissionIdToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMissionsMissionIdToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMissionsMissionIdToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiMissionsMissionIdToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
