import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceStartResourceEvaluationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceStartResourceEvaluationHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceStartResourceEvaluationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
