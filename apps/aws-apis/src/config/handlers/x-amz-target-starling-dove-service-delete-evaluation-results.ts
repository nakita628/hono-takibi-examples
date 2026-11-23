import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteEvaluationResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeleteEvaluationResultsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteEvaluationResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
