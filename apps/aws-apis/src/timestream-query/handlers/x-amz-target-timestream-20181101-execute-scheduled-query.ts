import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101ExecuteScheduledQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101ExecuteScheduledQueryHandler = app.openapi(
  postXAmzTargetTimestream20181101ExecuteScheduledQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
