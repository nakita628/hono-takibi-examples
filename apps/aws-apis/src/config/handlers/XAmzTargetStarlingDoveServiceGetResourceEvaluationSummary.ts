import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
