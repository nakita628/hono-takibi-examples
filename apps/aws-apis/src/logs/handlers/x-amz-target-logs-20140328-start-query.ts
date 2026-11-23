import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328StartQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328StartQueryHandler = app.openapi(
  postXAmzTargetLogs20140328StartQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
