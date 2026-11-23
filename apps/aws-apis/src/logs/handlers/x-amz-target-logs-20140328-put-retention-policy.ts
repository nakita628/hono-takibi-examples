import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutRetentionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328PutRetentionPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328PutRetentionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
