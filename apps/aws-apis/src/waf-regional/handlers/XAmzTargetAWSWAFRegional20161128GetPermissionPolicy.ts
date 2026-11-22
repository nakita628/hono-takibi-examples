import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetPermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128GetPermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetPermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
