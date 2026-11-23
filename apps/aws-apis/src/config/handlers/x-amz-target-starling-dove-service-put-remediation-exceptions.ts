import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutRemediationExceptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutRemediationExceptionsHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutRemediationExceptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
