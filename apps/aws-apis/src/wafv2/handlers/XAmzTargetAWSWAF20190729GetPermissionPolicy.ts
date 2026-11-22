import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetPermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GetPermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetPermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
