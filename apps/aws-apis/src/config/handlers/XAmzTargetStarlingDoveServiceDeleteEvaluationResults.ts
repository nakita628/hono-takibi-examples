import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteEvaluationResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteEvaluationResultsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteEvaluationResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
