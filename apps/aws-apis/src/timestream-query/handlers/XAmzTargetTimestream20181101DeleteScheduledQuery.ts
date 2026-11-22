import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101DeleteScheduledQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101DeleteScheduledQueryHandler = app.openapi(
  postXAmzTargetTimestream20181101DeleteScheduledQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
