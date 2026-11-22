import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListAccountAssignmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceListAccountAssignmentsHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListAccountAssignmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
