import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1InternalAgentInsightsEnrollmentRoute } from '../routes'

const app = new OpenAPIHono()

export const agentInsightsEnrollmentHandler = app.openapi(
  postV1InternalAgentInsightsEnrollmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
