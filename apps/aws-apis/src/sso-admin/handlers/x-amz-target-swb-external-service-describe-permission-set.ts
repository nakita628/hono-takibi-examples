import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDescribePermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceDescribePermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceDescribePermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
