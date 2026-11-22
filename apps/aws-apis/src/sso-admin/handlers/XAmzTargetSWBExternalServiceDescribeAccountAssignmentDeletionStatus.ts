import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusHandler =
  app.openapi(postXAmzTargetSWBExternalServiceDescribeAccountAssignmentDeletionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
