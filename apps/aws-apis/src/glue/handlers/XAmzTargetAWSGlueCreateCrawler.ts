import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueCreateCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
