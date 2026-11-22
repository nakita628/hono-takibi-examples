import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeletePermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeletePermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeletePermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
