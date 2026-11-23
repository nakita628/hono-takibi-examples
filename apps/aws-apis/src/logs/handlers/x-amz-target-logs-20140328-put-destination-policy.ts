import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutDestinationPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328PutDestinationPolicyHandler = app.openapi(
  postXAmzTargetLogs20140328PutDestinationPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
