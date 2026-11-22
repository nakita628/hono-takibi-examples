import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416ListLogSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416ListLogSubscriptionsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416ListLogSubscriptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
