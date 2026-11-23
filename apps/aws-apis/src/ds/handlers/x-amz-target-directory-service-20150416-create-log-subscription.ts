import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CreateLogSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416CreateLogSubscriptionHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CreateLogSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
