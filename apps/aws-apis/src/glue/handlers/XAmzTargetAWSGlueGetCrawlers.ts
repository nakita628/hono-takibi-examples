import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetCrawlersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetCrawlersHandler = app.openapi(
  postXAmzTargetAWSGlueGetCrawlersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
