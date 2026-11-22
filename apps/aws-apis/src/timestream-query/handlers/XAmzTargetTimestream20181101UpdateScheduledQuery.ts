import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101UpdateScheduledQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101UpdateScheduledQueryHandler = app.openapi(
  postXAmzTargetTimestream20181101UpdateScheduledQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
