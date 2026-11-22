import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateAgentInsightsIssuesIssueIdRoute,
  getV1PrivateAgentInsightsIssuesRoute,
  patchV1PrivateAgentInsightsIssuesIssueIdRoute,
  postV1PrivateAgentInsightsIssuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentInsightsHandler = app
  .openapi(getV1PrivateAgentInsightsIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentInsightsIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentInsightsIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAgentInsightsIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
