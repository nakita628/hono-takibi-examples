import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
