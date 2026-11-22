import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
