import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteRetentionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteRetentionPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteRetentionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
