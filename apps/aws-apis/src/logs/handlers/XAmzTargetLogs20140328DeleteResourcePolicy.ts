import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteResourcePolicyRoute,
  (c) => {},
)
