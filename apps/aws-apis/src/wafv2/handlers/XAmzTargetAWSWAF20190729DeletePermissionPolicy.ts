import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DeletePermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729DeletePermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DeletePermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
