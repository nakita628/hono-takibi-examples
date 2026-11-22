import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2EngineeringInsightsPullRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const insightsPullRequestsBetaHandler = app.openapi(
  getApiV2EngineeringInsightsPullRequestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
