import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceListResourceEvaluationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceListResourceEvaluationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceListResourceEvaluationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
