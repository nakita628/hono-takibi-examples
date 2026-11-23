import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListAccountAssignmentDeletionStatusHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListAccountAssignmentDeletionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
