import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListAccountAssignmentCreationStatusHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListAccountAssignmentCreationStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
