import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteRemediationExceptionsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
