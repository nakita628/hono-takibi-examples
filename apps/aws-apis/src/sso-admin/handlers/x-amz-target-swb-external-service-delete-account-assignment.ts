import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDeleteAccountAssignmentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceDeleteAccountAssignmentHandler = app.openapi(
  postXAmzTargetSWBExternalServiceDeleteAccountAssignmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
