import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutAccountPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328PutAccountPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328PutAccountPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
