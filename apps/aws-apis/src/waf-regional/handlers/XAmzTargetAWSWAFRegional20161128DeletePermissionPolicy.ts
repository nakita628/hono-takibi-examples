import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128DeletePermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeletePermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
