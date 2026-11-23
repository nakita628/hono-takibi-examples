import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DeleteLogSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DeleteLogSubscriptionHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DeleteLogSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
