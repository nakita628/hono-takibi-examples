import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceCreateAccountAssignmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceCreateAccountAssignmentHandler = app.openapi(
  postXAmzTargetSWBExternalServiceCreateAccountAssignmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
