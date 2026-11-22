import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101ListScheduledQueriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101ListScheduledQueriesHandler = app.openapi(
  postXAmzTargetTimestream20181101ListScheduledQueriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
