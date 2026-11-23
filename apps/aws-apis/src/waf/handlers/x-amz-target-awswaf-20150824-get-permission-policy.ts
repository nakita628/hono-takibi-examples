import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetPermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetPermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetPermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
