import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutDataProtectionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328PutDataProtectionPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328PutDataProtectionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
