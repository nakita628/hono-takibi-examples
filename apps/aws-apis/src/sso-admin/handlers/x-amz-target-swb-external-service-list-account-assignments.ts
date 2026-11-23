import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListAccountAssignmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListAccountAssignmentsHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListAccountAssignmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
