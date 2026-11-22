import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128PutPermissionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128PutPermissionPolicyHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128PutPermissionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
