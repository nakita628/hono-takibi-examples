import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceCreateAccountAssignmentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceCreateAccountAssignmentHandler = app.openapi(
  postXAmzTargetSWBExternalServiceCreateAccountAssignmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
