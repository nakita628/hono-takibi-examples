import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328PutResourcePolicyHandler = app.openapi(
  postXAmzTargetLogs20140328PutResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
