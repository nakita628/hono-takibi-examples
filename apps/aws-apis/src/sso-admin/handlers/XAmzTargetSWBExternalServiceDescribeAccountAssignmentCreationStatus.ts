import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusHandler =
  app.openapi(postXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
