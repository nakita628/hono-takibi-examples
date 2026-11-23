import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsReposOwnerRepoAutomationsAutomationIdRoute,
  deleteAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute,
  getAgentsAutomationsRoute,
  getAgentsReposOwnerRepoAutomationsAutomationIdRevisionsRevisionIdRoute,
  getAgentsReposOwnerRepoAutomationsAutomationIdRevisionsRoute,
  getAgentsReposOwnerRepoAutomationsAutomationIdRoute,
  getAgentsReposOwnerRepoAutomationsAutomationIdTasksRoute,
  getAgentsReposOwnerRepoAutomationsAvailableToolsRoute,
  getAgentsReposOwnerRepoAutomationsAvailableTriggersRoute,
  getAgentsReposOwnerRepoAutomationsRoute,
  getAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute,
  getAgentsReposOwnerRepoTasksRoute,
  getAgentsReposOwnerRepoTasksTaskIdRoute,
  getAgentsTasksRoute,
  getAgentsTasksTaskIdRoute,
  patchAgentsReposOwnerRepoAutomationsAutomationIdRoute,
  postAgentsReposOwnerRepoAutomationsAutomationIdTasksRoute,
  postAgentsReposOwnerRepoAutomationsRoute,
  postAgentsReposOwnerRepoTasksRoute,
  putAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
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
  .openapi(getAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsReposOwnerRepoTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsReposOwnerRepoTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
