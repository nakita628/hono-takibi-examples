import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2EngineeringInsightsFlagEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const insightsFlagEventsBetaHandler = app.openapi(
  getApiV2EngineeringInsightsFlagEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
