import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStopCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStopCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueStopCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
