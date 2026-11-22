import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceStartRemediationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceStartRemediationExecutionHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceStartRemediationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
