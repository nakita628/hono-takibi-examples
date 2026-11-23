import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceDescribeAccountAssignmentCreationStatusHandler =
  app.openapi(postXAmzTargetSWBExternalServiceDescribeAccountAssignmentCreationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
