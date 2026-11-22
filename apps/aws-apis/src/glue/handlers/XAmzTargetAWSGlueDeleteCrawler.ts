import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
