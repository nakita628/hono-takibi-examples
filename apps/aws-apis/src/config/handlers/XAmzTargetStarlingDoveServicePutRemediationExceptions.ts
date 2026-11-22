import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutRemediationExceptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutRemediationExceptionsHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutRemediationExceptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
