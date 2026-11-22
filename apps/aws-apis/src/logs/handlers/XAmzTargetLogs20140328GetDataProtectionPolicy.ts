import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328GetDataProtectionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328GetDataProtectionPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328GetDataProtectionPolicyRoute,
  (c) => {},
)
