import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutRetentionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328PutRetentionPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328PutRetentionPolicyRoute,
  (c) => {},
)
