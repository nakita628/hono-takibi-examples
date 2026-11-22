import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiAssistantsAssistantIdCanaryDeploysRoute,
  deleteAiAssistantsAssistantIdRoute,
  deleteAiAssistantsAssistantIdScheduledEventsEventIdRoute,
  deleteAiAssistantsAssistantIdTagsTagRoute,
  deleteAiAssistantsAssistantIdToolsToolIdRoute,
  deleteAiAssistantsAssistantIdVersionsVersionIdRoute,
  deleteAiAssistantsTestsTestIdRoute,
  deleteAiToolsToolIdRoute,
  getAiAssistantsAssistantIdCanaryDeploysRoute,
  getAiAssistantsAssistantIdDeletedRoute,
  getAiAssistantsAssistantIdRoute,
  getAiAssistantsAssistantIdScheduledEventsEventIdRoute,
  getAiAssistantsAssistantIdScheduledEventsRoute,
  getAiAssistantsAssistantIdTexmlRoute,
  getAiAssistantsAssistantIdVersionsRoute,
  getAiAssistantsAssistantIdVersionsVersionIdRoute,
  getAiAssistantsDeletedRoute,
  getAiAssistantsRoute,
  getAiAssistantsTagsRoute,
  getAiAssistantsTestsRoute,
  getAiAssistantsTestsTestIdRoute,
  getAiAssistantsTestsTestIdRunsRoute,
  getAiAssistantsTestsTestIdRunsRunIdRoute,
  getAiAssistantsTestsTestSuitesRoute,
  getAiAssistantsTestsTestSuitesSuiteNameRunsRoute,
  getAiToolsRoute,
  getAiToolsToolIdRoute,
  patchAiToolsToolIdRoute,
  postAiAssistantsAssistantIdCanaryDeploysRoute,
  postAiAssistantsAssistantIdChatRoute,
  postAiAssistantsAssistantIdChatSmsRoute,
  postAiAssistantsAssistantIdChatWhatsappRoute,
  postAiAssistantsAssistantIdCloneRoute,
  postAiAssistantsAssistantIdInstructionsEnhanceRoute,
  postAiAssistantsAssistantIdRestoreRoute,
  postAiAssistantsAssistantIdRoute,
  postAiAssistantsAssistantIdScheduledEventsRoute,
  postAiAssistantsAssistantIdTagsRoute,
  postAiAssistantsAssistantIdToolsToolIdTestRoute,
  postAiAssistantsAssistantIdVersionsVersionIdPromoteRoute,
  postAiAssistantsAssistantIdVersionsVersionIdRoute,
  postAiAssistantsImportRoute,
  postAiAssistantsRoute,
  postAiAssistantsTestsRoute,
  postAiAssistantsTestsTestIdRunsRoute,
  postAiAssistantsTestsTestSuitesSuiteNameRunsRoute,
  postAiToolsRoute,
  putAiAssistantsAssistantIdCanaryDeploysRoute,
  putAiAssistantsAssistantIdToolsToolIdRoute,
  putAiAssistantsTestsTestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assistantsHandler = app
  .openapi(getAiAssistantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsDeletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsTestsTestSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsTestsTestSuitesSuiteNameRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsTestsTestSuitesSuiteNameRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiAssistantsTestsTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsTestsTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiAssistantsTestsTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsTestsTestIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsTestsTestIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsTestsTestIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiAssistantsAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiAssistantsAssistantIdCanaryDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsAssistantIdCanaryDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdCanaryDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiAssistantsAssistantIdCanaryDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdChatSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdChatWhatsappRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsAssistantIdDeletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdInstructionsEnhanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsAssistantIdScheduledEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdScheduledEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiAssistantsAssistantIdScheduledEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsAssistantIdScheduledEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiAssistantsAssistantIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsAssistantIdTexmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiAssistantsAssistantIdToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiAssistantsAssistantIdToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdToolsToolIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsAssistantIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiAssistantsAssistantIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAssistantsAssistantIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAssistantsAssistantIdVersionsVersionIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiToolsToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
