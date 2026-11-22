import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutEvaluationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutEvaluationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutEvaluationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
