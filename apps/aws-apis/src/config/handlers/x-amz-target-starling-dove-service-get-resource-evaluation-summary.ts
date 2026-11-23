import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
