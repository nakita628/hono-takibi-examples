import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101CreateScheduledQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101CreateScheduledQueryHandler = app.openapi(
  postXAmzTargetTimestream20181101CreateScheduledQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
