import { OpenAPIHono } from '@hono/zod-openapi'
import { postRealtimeContactAnalysisAnalysisSegmentsRoute } from './routes'
import { postRealtimeContactAnalysisAnalysisSegmentsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postRealtimeContactAnalysisAnalysisSegmentsRoute,
  postRealtimeContactAnalysisAnalysisSegmentsRouteHandler,
)

export default app
