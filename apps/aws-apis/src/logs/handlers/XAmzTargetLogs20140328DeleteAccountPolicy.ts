import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteAccountPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DeleteAccountPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteAccountPolicyRoute,
  (c) => {},
)
