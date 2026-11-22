import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDeleteAccountAssignmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDeleteAccountAssignmentHandler = app.openapi(
  postXAmzTargetSWBExternalServiceDeleteAccountAssignmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
