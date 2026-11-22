import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadarAgentReadinessSummaryDimensionRoute } from '../routes'

const app = new OpenAPIHono()

export const radarAgentReadinessHandler = app.openapi(
  getRadarAgentReadinessSummaryDimensionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
