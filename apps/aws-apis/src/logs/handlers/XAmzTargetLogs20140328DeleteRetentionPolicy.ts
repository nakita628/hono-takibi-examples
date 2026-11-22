import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteRetentionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DeleteRetentionPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteRetentionPolicyRoute,
  (c) => {},
)
