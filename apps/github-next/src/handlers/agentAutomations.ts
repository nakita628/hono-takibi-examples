import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsReposOwnerRepoAutomationsAutomationIdRoute,
  getAgentsAutomationsRoute,
  getAgentsReposOwnerRepoAutomationsAutomationIdRevisionsRevisionIdRoute,
  getAgentsReposOwnerRepoAutomationsAutomationIdRevisionsRoute,
  getAgentsReposOwnerRepoAutomationsAutomationIdRoute,
  getAgentsReposOwnerRepoAutomationsAutomationIdTasksRoute,
  getAgentsReposOwnerRepoAutomationsAvailableToolsRoute,
  getAgentsReposOwnerRepoAutomationsAvailableTriggersRoute,
  getAgentsReposOwnerRepoAutomationsRoute,
  patchAgentsReposOwnerRepoAutomationsAutomationIdRoute,
  postAgentsReposOwnerRepoAutomationsAutomationIdTasksRoute,
  postAgentsReposOwnerRepoAutomationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentAutomationsHandler = app
  .openapi(getAgentsAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsReposOwnerRepoAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoAutomationsAvailableToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoAutomationsAvailableTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentsReposOwnerRepoAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsReposOwnerRepoAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoAutomationsAutomationIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoAutomationsAutomationIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoAutomationsAutomationIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsReposOwnerRepoAutomationsAutomationIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
