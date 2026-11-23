import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824PutPermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824PutPermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAF20150824PutPermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
