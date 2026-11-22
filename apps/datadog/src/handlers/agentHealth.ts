import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AgenthealthHostsResourceIdIssuesRoute,
  getApiV2AgenthealthIssuesIssueIdRoute,
  getApiV2AgenthealthIssuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentHealthHandler = app
  .openapi(getApiV2AgenthealthHostsResourceIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgenthealthIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AgenthealthIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
