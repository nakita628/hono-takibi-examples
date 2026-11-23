import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeleteRemediationExceptionsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
