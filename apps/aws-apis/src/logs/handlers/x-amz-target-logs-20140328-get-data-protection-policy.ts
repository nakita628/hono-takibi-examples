import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328GetDataProtectionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328GetDataProtectionPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328GetDataProtectionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
