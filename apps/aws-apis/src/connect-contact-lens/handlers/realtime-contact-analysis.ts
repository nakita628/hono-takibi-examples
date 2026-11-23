import { OpenAPIHono } from '@hono/zod-openapi'
import { postRealtimeContactAnalysisAnalysisSegmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const realtimeContactAnalysisHandler = app.openapi(
  postRealtimeContactAnalysisAnalysisSegmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
