import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute,
  getAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute,
  putAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentMergeHandler = app
  .openapi(getAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsReposOwnerRepoPullsPullNumberAgentMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
