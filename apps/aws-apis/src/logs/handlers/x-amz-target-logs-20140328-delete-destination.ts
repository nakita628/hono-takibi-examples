import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteDestinationHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
