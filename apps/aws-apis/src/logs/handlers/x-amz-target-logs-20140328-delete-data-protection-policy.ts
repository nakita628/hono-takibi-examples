import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteDataProtectionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteDataProtectionPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteDataProtectionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
